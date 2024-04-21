import prisma from "../../../db/mongo";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params: { id } }) => {
  const dados = await prisma.post.findUnique({
    where: { id },
  });
  //console.log(dados);
  return { post: dados };
};
