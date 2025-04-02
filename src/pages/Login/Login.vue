<script lang="ts">
export const description = "A login page with form and image.";
</script>
<script setup lang="ts">
import LoginForm from "./components/LoginForm.vue";
</script>

<template>
  <div
    class="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10 relative"
  >
    <div
      class="absolute inset-0 bg-login-pattern bg-no-repeat bg-cover opacity-20 pointer-events-none"
    ></div>
    <div class="w-full max-w-sm md:max-w-3xl relative z-10">
      <LoginForm />
    </div>
  </div>
</template>
