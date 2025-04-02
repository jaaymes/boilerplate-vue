import type { User } from "@/interfaces/user";
import { signIn } from "@/services/auth";
import { decodeJwt } from "@/utils/jwt";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const { push } = useRouter();
  const user = ref<User | null>(null);
  console.log("🚀 ~ useAuthStore ~ user:", user);

  const isAuthenticated = computed(() => !!user.value);

  async function login(values: { email: string; password: string }) {
    const response = await signIn(values);
    localStorage.setItem("access_token", response.access_token);
    await checkAuth();
    push("/dashboard");
  }

  async function logout() {
    user.value = null;
    localStorage.removeItem("access_token");
    push("/login");
  }

  async function checkAuth() {
    user.value = await decodeJwt(
      localStorage.getItem("access_token") || "null"
    );
    if (!user.value) {
      push("/login");
      return;
    }
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
    checkAuth,
  };
});
