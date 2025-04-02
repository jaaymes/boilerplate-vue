import * as jose from "jose";

/**
 * Decodifica um token JWT
 * @param token - Token JWT a ser decodificado
 * @returns Payload decodificado do token JWT
 */
export async function decodeJwt<T = any>(token: string): Promise<T> {
  try {
    const { payload } = await jose.jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET)
    );

    return payload as T;
  } catch (error) {
    console.error("Erro ao decodificar token JWT:", error);
    throw new Error("Token JWT inválido");
  }
}

/**
 * Verifica se um token JWT é válido
 * @param token - Token JWT a ser verificado
 * @returns Boolean indicando se o token é válido
 */
export async function isValidJwt(token: string): Promise<boolean> {
  try {
    await jose.jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
    return true;
  } catch {
    return false;
  }
}
