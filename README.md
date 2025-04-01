# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## Testing with Vitest

This project uses Vitest for unit testing. Here's how to run tests:

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Writing Tests

Tests are located alongside the components they test. For example, tests for `Button.vue` are in `Button.spec.ts` in the same directory.

Example test file structure:
```
src/
  components/
    ui/
      button/
        Button.vue
        Button.spec.ts
        index.ts
```
