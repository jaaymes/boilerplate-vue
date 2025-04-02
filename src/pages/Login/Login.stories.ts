import type { Meta, StoryFn } from "@storybook/vue3";
import { createPinia } from "pinia";
import { createApp } from "vue";
import Login from "./Login.vue";

const pinia = createPinia();
const app = createApp({});
app.use(pinia);

export default {
  title: "Pages/Login",
  component: Login,

  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
### Responsive Design

This login page is designed to be responsive across different device sizes:

- **Mobile**: 375x667px (iPhone SE)
- **Tablet**: 768x1024px (iPad)
- **Desktop**: 1440x900px (Laptop)

The layout adjusts automatically to provide the best user experience for each screen size:
- On mobile, the form takes up the full width
- On tablet and desktop, the form appears alongside a decorative image
- The form remains readable and usable across all breakpoints
        `,
      },
    },
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: {
            width: "375px",
            height: "667px",
          },
          type: "mobile",
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
          type: "tablet",
        },
        desktop: {
          name: "Desktop",
          styles: {
            width: "1440px",
            height: "900px",
          },
          type: "desktop",
        },
      },
      defaultViewport: "desktop",
    },
  },
  decorators: [
    (story) => ({
      components: { story },
      template: '<div style="width: 100%;"><story /></div>',
    }),
  ],
} as Meta<typeof Login>;

const Template: StoryFn<typeof Login> = () => ({
  components: { Login },
  template: "<Login />",
});

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    description: {
      story: "Default view of the login page.",
    },
  },
} as Meta<typeof Login>;
