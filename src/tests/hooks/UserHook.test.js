import { loadUser } from "../../actions/user";

describe("prueba en la helper loadUser", () => {
  test("debe regresar un array con un objeto", async () => {
    const perfil = await loadUser("perfil");
    expect(perfil).toEqual([
      {
        id: "H9TbQpD3BTZD20kMDIFL",
        tlf: "+584241596631",
        address: "Miranda, Venezuela.",
        bio: "Desarrollador de Aplicaciones móviles y web  Mi experiencia: He participado en proyectos de pequeña y gran complejidad, trabajando bajo estándares de calidad. En empresas privada y en la banca. Tengo mas de 10 años de experiencia en área de desarrollo de software, participando en todas sus fases .",
        name: "José Gregorio López Arias",
        email: "lopezajoseg@gmail.com",
        zip: "1012",
        profession: "Full Stack Developer",
      },
    ]);
  });

  test("prueba action type userBio", async () => {
    /*  const docs = [];
    const perfil = db.collection("perfil");
    const snapShop = await perfil.get();
    snapShop.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    }); */
  });
}); //Final describe
