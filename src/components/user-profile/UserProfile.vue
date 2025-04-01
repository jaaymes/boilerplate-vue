<script setup lang="ts">
import { defineProps } from "vue";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const props = defineProps({
  photo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <Avatar>
    <AvatarImage :src="props.photo" :alt="'photo' + props.name" />
    <AvatarFallback>{{ props.name.charAt(0) }}</AvatarFallback>
  </Avatar>
</template>
