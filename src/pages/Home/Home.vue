<script setup lang="ts">
import { ToggleTheme } from "@/components/toggle-theme";
</script>

<template>
  <div
    class="min-h-screen bg-background w-full flex flex-col justify-center items-center"
  >
    <!-- Navigation -->
    <nav
      class="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div class="container flex h-14 items-center justify-center">
        <div class="flex items-center justify-between w-full max-w-4xl">
          <div class="flex">
            <a class="flex items-center space-x-2" href="/">
              <span class="font-bold">Vue + Tailwind + shadcn</span>
            </a>
          </div>
          <div class="flex items-center">
            <ToggleTheme />
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <main class="container flex-1 mx-auto max-w-4xl">
      <section class="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div
          class="container flex max-w-[64rem] flex-col items-center gap-4 text-center"
        >
          <h1
            class="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
          >
            Welcome to Vue + Tailwind + shadcn
          </h1>
          <p
            class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          >
            A beautiful and modern UI built with Vue 3, Tailwind CSS, and
            shadcn-vue components.
          </p>
          <div class="space-x-4">
            <a
              href="#"
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
            >
              Get Started
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="container space-y-6 py-8 md:py-12 lg:py-24">
        <div
          class="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
        >
          <h2
            class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            Features
          </h2>
          <p
            class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Everything you need to build beautiful and modern web applications
          </p>
        </div>
        <div
          class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8"
        >
          <div
            class="relative overflow-hidden rounded-lg border bg-background p-2"
          >
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div class="space-y-2">
                <h3 class="font-bold">Vue 3</h3>
                <p class="text-sm text-muted-foreground">
                  Built with the latest Vue 3 features and Composition API
                </p>
              </div>
            </div>
          </div>
          <div
            class="relative overflow-hidden rounded-lg border bg-background p-2"
          >
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div class="space-y-2">
                <h3 class="font-bold">Tailwind CSS</h3>
                <p class="text-sm text-muted-foreground">
                  Utility-first CSS framework for rapid UI development
                </p>
              </div>
            </div>
          </div>
          <div
            class="relative overflow-hidden rounded-lg border bg-background p-2"
          >
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div class="space-y-2">
                <h3 class="font-bold">shadcn-vue</h3>
                <p class="text-sm text-muted-foreground">
                  Beautiful and accessible components built with Radix Vue
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t py-6 md:py-0">
      <div
        class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row"
      >
        <div
          class="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0"
        >
          <p
            class="text-center text-sm leading-loose text-muted-foreground md:text-left"
          >
            Built with Vue 3, Tailwind CSS, and shadcn-vue
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
