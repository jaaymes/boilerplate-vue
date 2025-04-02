import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";
import { Form } from "vee-validate";
import { describe, expect, it } from "vitest";
import Input from "./Input.vue";

// Helper para renderizar o componente dentro de um Form
const renderWithForm = (component: any, props: any) => {
  return render(component, {
    props,
    global: {
      components: { Form },
      stubs: {
        FormField: {
          template: "<div><slot v-bind='{ componentField: {} }'/></div>",
        },
      },
    },
    slots: {},
    attrs: {},
  });
};

describe("Input", () => {
  it("renderiza corretamente com as props básicas", () => {
    renderWithForm(Input, {
      name: "email",
      label: "E-mail",
      description: "Digite seu e-mail",
      type: "email",
      placeholder: "exemplo@email.com",
    });

    expect(screen.getByText("E-mail")).toBeInTheDocument();
    expect(screen.getByText("Digite seu e-mail")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("exemplo@email.com")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("exemplo@email.com").getAttribute("type")
    ).toBe("email");
  });

  it("passa propriedades adicionais para o input", () => {
    renderWithForm(Input, {
      name: "password",
      label: "Senha",
      description: "Digite sua senha",
      type: "password",
      placeholder: "********",
      autocomplete: "current-password",
      required: true,
    });

    const input = screen.getByPlaceholderText("********");
    expect(input).toBeInTheDocument();
    expect(input.getAttribute("type")).toBe("password");
    expect(input.getAttribute("autocomplete")).toBe("current-password");
    expect(input.getAttribute("required")).not.toBeNull();
  });

  it("renderiza diferentes tipos de input", () => {
    renderWithForm(Input, {
      name: "date",
      label: "Data",
      description: "Selecione uma data",
      type: "date",
    });

    const input = screen.getByLabelText("Data");
    expect(input).toBeInTheDocument();
    expect(input.getAttribute("type")).toBe("date");
  });
});
