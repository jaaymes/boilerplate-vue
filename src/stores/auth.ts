import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

interface User {
  id: number;
  name: string;
  email: string;
}

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const user = ref<User | null>(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  const isAuthenticated = computed(() => !!user.value);

  async function login() {
    user.value = {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    };
    localStorage.setItem("user", JSON.stringify(user.value));
    await checkAuth();
    router.push("/dashboard");
  }

  async function logout() {
    user.value = null;
    localStorage.removeItem("user");
    router.push("/login");
  }

  async function checkAuth() {
    user.value = JSON.parse(localStorage.getItem("user") || "null");
    if (!user.value) {
      router.push("/login");
      return;
    }
    router.push("/dashboard");
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
    checkAuth,
  };
});
