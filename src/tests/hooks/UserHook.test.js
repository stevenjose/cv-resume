import { loadUser } from "../../actions/user";

describe("prueba en la helper loadUser", () => {
  test("debe regresar un array con datos del perfil en JSON", async () => {
    const perfil = await loadUser();
    expect(perfil).toEqual([
      {
        name: "Steven Jose",
        profession: "Desarrollador de Software Senior",
        bio: "Desarrollador de Software Senior con +3 años de experiencia especializado en arquitectura backend, integración de sistemas y clean code. Experto en Java, Spring Boot, Angular y herramientas DevOps.",
        address: "Barcelona, España",
        email: "lopezajoseg@gmail.com",
        phone: "+34 XXXXXXXXX",
      },
    ]);
  });

  test("prueba action type userBio", async () => {
    // covered by actions/user.test.js
  });
}); //Final describe

