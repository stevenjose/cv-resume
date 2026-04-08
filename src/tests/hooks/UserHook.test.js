import { loadUser } from "../../actions/user";

describe("prueba en la helper loadUser", () => {
  test("debe regresar un array con datos del perfil", () => {
    const perfil = loadUser("perfil");
    expect(Array.isArray(perfil)).toBe(true);
    expect(perfil.length).toBeGreaterThan(0);
    expect(perfil[0]).toHaveProperty('name');
    expect(perfil[0]).toHaveProperty('email');
  });

  test("prueba action type userBio", () => {
    const perfil = loadUser("perfil");
    expect(perfil[0].name).toBe('Steven Jose');
  });
}); //Final describe
