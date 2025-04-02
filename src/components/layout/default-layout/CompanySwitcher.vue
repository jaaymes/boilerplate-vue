<script setup lang="ts">
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-vue-next";

const { state } = useSidebar();
</script>
<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton
        size="lg"
        class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
        <img
          src="/logo.webp"
          :class="cn(state === 'expanded' ? 'size-10' : 'size-8', 'rounded-md')"
          alt="Sentient Solutions"
        />
        <div
          v-if="state === 'expanded'"
          class="grid flex-1 text-left text-sm leading-tight"
        >
          <span class="truncate font-semibold"> Sentient Solutions </span>
        </div>
        <ChevronsUpDown v-if="state === 'expanded'" class="ml-auto" />
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
</template>
