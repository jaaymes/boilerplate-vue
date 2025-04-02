<script setup lang="ts">
import { Input } from "@/components/input";
import { ToggleTheme } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuthStore } from "@/stores/auth";
import { GithubLogoIcon } from "@radix-icons/vue";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { z } from "zod";
const { login: storeLogin } = useAuthStore();

const schema = z.object({
  email: z
    .string({
      required_error: "Email é obrigatório",
    })
    .email({ message: "Email inválido" }),
  password: z
    .string({
      required_error: "Senha é obrigatório",
    })
    .min(8, { message: "minimo 8 caracteres" }),
});

const formSchema = toTypedSchema(schema);

type LoginForm = z.infer<typeof schema>;

const { handleSubmit } = useForm<LoginForm>({
  validationSchema: formSchema,
  initialValues: {
    email: "Evans_Kozey55@yahoo.com",
    password: "password2",
  },
});

const onSubmit = handleSubmit(async (values) => {
  await storeLogin(values);
});
</script>
<template>
  <div class="flex flex-col gap-6">
    <Card class="overflow-hidden">
      <CardContent class="grid p-0 md:grid-cols-2">
        <form class="p-6 md:p-8 relative" @submit="onSubmit">
          <ToggleTheme class="absolute right-1 top-1" />

          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center text-center">
              <h1 class="text-2xl font-bold">Seja bem-vindo</h1>
              <p class="text-balance text-muted-foreground">
                Faça login para continuar
              </p>
            </div>
            <div class="grid gap-2">
              <Input
                name="email"
                label="E-mail"
                type="email"
                placeholder="m@example.com"
                is-required
              />
            </div>
            <div class="grid gap-2">
              <Input
                name="password"
                label="Senha"
                type="password"
                placeholder="********"
                is-required
              />
            </div>
            <Button type="submit" class="w-full"> Entrar </Button>
            <div
              class="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border"
            >
              <span
                class="relative z-10 bg-background px-2 text-muted-foreground"
              >
                Ou continue com
              </span>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <Button variant="outline" class="w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    fill="currentColor"
                  />
                </svg>
                <span class="sr-only">Login com Google</span>
              </Button>
              <Button variant="outline" class="w-full">
                <GithubLogoIcon />
                <span class="sr-only">Login com Github</span>
              </Button>
            </div>
            <div class="text-center text-sm">
              Não tem uma conta?
              <a href="#" class="underline underline-offset-4"> Cadastre-se </a>
            </div>
          </div>
        </form>
        <div class="relative hidden bg-muted md:block">
          <img
            src="https://images.unsplash.com/photo-1742766330337-1127275cd9b3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Imagem"
            class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </CardContent>
    </Card>
    <div
      class="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary"
    >
      Ao continuar, você concorda com nossos
      <a href="#">Termos de Serviço</a> e
      <a href="#">Política de Privacidade</a>.
    </div>
  </div>
</template>
