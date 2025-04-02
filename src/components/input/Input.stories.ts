import type { Meta, StoryObj } from "@storybook/vue3";
import { Form } from "vee-validate";
import Input from "./Input.vue";

// Definição de tipo mais simples para evitar problemas de tipagem
interface InputProps {
  name: string;
  label: string;
  description: string;
  type: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  [key: string]: any;
}

// Metadata do componente
const meta = {
  title: "Componentes/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "O nome do campo de formulário",
    },
    label: {
      control: "text",
      description: "O rótulo do campo",
    },
    description: {
      control: "text",
      description: "Texto explicativo do campo",
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "date", "tel", "url"],
      description: "O tipo do input HTML",
    },
    placeholder: {
      control: "text",
      description: "Texto de placeholder",
    },
    disabled: {
      control: "boolean",
      description: "Se o campo está desabilitado",
    },
    required: {
      control: "boolean",
      description: "Se o campo é obrigatório",
    },
  },
  args: {
    name: "exemplo",
    label: "Exemplo de Input",
    description: "Este é um exemplo de descrição",
    type: "text",
    placeholder: "Digite aqui...",
  },
  decorators: [
    (story) => ({
      components: { story, Form },
      template: '<Form @submit="() => {}"><story /></Form>',
    }),
  ],
} as Meta<InputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// História base com os valores padrão
export const Padrão: Story = {
  args: {},
};

// Variações do componente
export const Email: Story = {
  args: {
    name: "email",
    label: "E-mail",
    description: "Digite seu endereço de e-mail",
    type: "email",
    placeholder: "exemplo@email.com.br",
  },
};

export const Senha: Story = {
  args: {
    name: "senha",
    label: "Senha",
    description: "Digite sua senha (mínimo 8 caracteres)",
    type: "password",
    placeholder: "********",
  },
};

export const Número: Story = {
  args: {
    name: "idade",
    label: "Idade",
    description: "Digite sua idade",
    type: "number",
    placeholder: "30",
  },
};

export const Data: Story = {
  args: {
    name: "nascimento",
    label: "Data de Nascimento",
    description: "Selecione sua data de nascimento",
    type: "date",
  },
};

export const Desabilitado: Story = {
  args: {
    name: "desabilitado",
    label: "Campo Desabilitado",
    description: "Este campo está desabilitado",
    type: "text",
    placeholder: "Não é possível editar",
    disabled: true,
  },
};

export const Obrigatório: Story = {
  args: {
    name: "obrigatorio",
    label: "Campo Obrigatório",
    description: "Este campo é de preenchimento obrigatório",
    type: "text",
    placeholder: "Preenchimento obrigatório",
    required: true,
  },
};
