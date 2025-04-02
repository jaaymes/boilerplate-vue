import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BellIcon,
  GearIcon,
  HeartIcon,
  PlusIcon,
  StarIcon,
} from "@radix-icons/vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";
import Button from "./Button.vue";

// Define the meta information for the component
const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "The visual style of the button",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
    },
    as: {
      control: "text",
      description: "The element to render as",
    },
    asChild: {
      control: "boolean",
      description: "Whether to render as a child element",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Define the default story
export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    default: "Button",
  },
};

// Example with click event
export const WithClick: Story = {
  render: () => ({
    components: { Button },
    setup() {
      const handleClick = () => {
        alert("Button clicked!");
      };
      return { handleClick };
    },
    template: '<Button @click="handleClick">Click me!</Button>',
  }),
};

// Example with click event and data
export const WithDataClick: Story = {
  render: () => ({
    components: { Button },
    setup() {
      const handleClick = () => {
        const timezone = "America/Sao_Paulo";
        const timestamp = new Date().toLocaleString("en-BR", {
          timeZone: timezone,
          hour12: false,
        });
        alert(`Button clicked at ${timestamp} in ${timezone}`);
      };
      return { handleClick };
    },
    template: '<Button @click="handleClick">Click to see data</Button>',
  }),
};

// Different variants
export const Primary: Story = {
  args: {
    variant: "default",
    default: "Primary Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    default: "Destructive Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    default: "Outline Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    default: "Secondary Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    default: "Ghost Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    default: "Link Button",
  },
};

// Different sizes
export const Small: Story = {
  args: {
    size: "sm",
    default: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    default: "Large Button",
  },
};

export const IconButton: Story = {
  args: {
    size: "icon",
  },
  render: () => ({
    components: {
      Button,
      Select,
      SelectContent,
      SelectGroup,
      SelectItem,
      SelectTrigger,
      SelectValue,
    },
    setup() {
      const selectedIcon = ref("plus");

      const icons = {
        plus: PlusIcon,
        heart: HeartIcon,
        star: StarIcon,
        bell: BellIcon,
        gear: GearIcon,
      };

      return {
        selectedIcon,
        icons,
        iconOptions: Object.keys(icons),
      };
    },
    template: `
    <div class="flex gap-4">
          <Select v-model="selectedIcon">
            <SelectTrigger class="w-[180px]">
              <SelectValue placeholder="Select an icon" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem v-for="icon in iconOptions" :key="icon" :value="icon">
                  {{ icon }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button size="icon">
            <component :is="icons[selectedIcon]" />
          </Button>
        </div>
  `,
  }),
};

// Example with as prop
export const AsLink: Story = {
  args: {
    as: "a",
    variant: "link",
    default: "Link Element",
  },
};

// Example with all variants and sizes
export const AllVariants = {
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-4">
        <div class="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <div class="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
            </svg>
          </Button>
        </div>
      </div>
    `,
  }),
};
