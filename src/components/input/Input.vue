<script setup lang="ts">
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "vee-validate";

export interface InputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  isRequired?: boolean;
}

const {
  name,
  label,
  type = "text",
  placeholder,
  isRequired = false,
} = defineProps<InputProps>();

const { isFieldDirty, errors } = useFormContext();
</script>

<template>
  <FormField
    v-slot="{ componentField }"
    :name="name"
    :validate="isFieldDirty(name) ? errors[name] : null"
  >
    <FormItem>
      <FormLabel>
        {{ label }}
        <span v-if="isRequired" class="text-red-500">*</span>
      </FormLabel>
      <FormControl>
        <Input
          :type="type"
          :placeholder="placeholder"
          v-bind="componentField"
          :class="{ 'border-red-500': errors[name] }"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
