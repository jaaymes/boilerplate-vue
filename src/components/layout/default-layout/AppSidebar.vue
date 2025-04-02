<script setup lang="ts">
import type { SidebarProps } from "@/components/ui/sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useAuthStore } from "@/stores/auth";
import {
  BotMessageSquare,
  LucideBrain,
  LucideChartLine,
  SquareTerminal,
} from "lucide-vue-next";
import CompanySwitcher from "./CompanySwitcher.vue";
import NavMain from "./NavMain.vue";
import NavProjects from "./NavProjects.vue";
import NavUser from "./NavUser.vue";
const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon",
});
// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Início",
          url: "/dashboard",
        },
        {
          title: "Usuários",
          url: "/users",
        },
        {
          title: "Produtos",
          url: "/products",
        },
        {
          title: "Categorias",
          url: "/categories",
        },
      ],
    },
    // analytics
    {
      title: "Analytics",
      url: "#",
      icon: LucideChartLine,
      items: [
        {
          title: "Introdução",
          url: "#",
        },
        {
          title: "Começar",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Comparações",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Chat AI",
      url: "#",
      icon: BotMessageSquare,
    },
    {
      name: "Visão Computacional",
      url: "#",
      icon: LucideBrain,
    },
  ],
};

const { user } = useAuthStore();
</script>
<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <CompanySwitcher />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" />
      <NavProjects :projects="data.projects" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
