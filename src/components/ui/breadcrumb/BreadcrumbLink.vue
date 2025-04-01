<script lang="ts" setup>
import { cn } from "@/lib/utils";
import { Primitive, type PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { RouterLink } from "vue-router";

const props = withDefaults(
  defineProps<
    PrimitiveProps & {
      class?: HTMLAttributes["class"];
      to?: string | Record<string, any>;
    }
  >(),
  {
    as: RouterLink,
  }
);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :to="to"
    :class="cn('transition-colors hover:text-foreground', props.class)"
  >
    <slot />
  </Primitive>
</template>
