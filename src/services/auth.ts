import { api } from "./api";

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<{ access_token: string }> => {
  const response = await api.post("/signin", { email, password });

  return response.data;
};
