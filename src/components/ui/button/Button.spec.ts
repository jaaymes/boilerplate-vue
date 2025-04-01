import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import Button from "./Button.vue";

describe("Button", () => {
  it("renders correctly with default props", () => {
    render(Button, {
      slots: {
        default: "Click me",
      },
    });

    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe("BUTTON");
    expect(button).toHaveClass("inline-flex items-center justify-center");
  });

  it("renders with custom variant", () => {
    render(Button, {
      props: {
        variant: "destructive",
      },
      slots: {
        default: "Delete",
      },
    });

    const button = screen.getByText("Delete");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-destructive");
  });

  it("renders with custom size", () => {
    render(Button, {
      props: {
        size: "sm",
      },
      slots: {
        default: "Small Button",
      },
    });

    const button = screen.getByText("Small Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("h-8 rounded-md px-3 text-xs");
  });

  it("renders as a custom element", () => {
    render(Button, {
      props: {
        as: "a",
      },
      slots: {
        default: "Link Button",
      },
    });

    const button = screen.getByText("Link Button");
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe("A");
  });
});
