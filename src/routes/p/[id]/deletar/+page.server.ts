import { redirect } from "@sveltejs/kit";
import prisma from "../../../../db/mongo";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params: { id } }) => {
    const dados = await prisma.post.findUnique({
      where: { id },
    });
    //console.log(dados);
    return { post: dados };
  };

  export const actions = {
    default: async ({params}) => {
        const id = params.id

        
        await prisma.post.delete({where:{id}})

        return redirect(303,"/")
      }
    
  
  }