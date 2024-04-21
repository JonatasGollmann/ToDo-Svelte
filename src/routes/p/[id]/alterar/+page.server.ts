import { fail, redirect } from "@sveltejs/kit";
import prisma from "../../../../db/mongo";
import { validaPrazo } from "$lib/validador";
import { formataData } from "$lib/formataData";


/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params: { id } }) => {
  const dados = await prisma.post.findUnique({
    where: { id },
  });
  //console.log(dados);
  return { post: dados };
};

export const actions = {
    default: async ({request,params}) => {
        const data = await request.formData();
        console.log("Alterando dados",data)

        const titulo = data.get('tituloNewTodo');
        const descricao = data.get('descNewTodo');
        const prazo = data.get('dataNewTodo');
        
        if(!titulo|| !prazo){
            return fail(400, {titulo, descricao, prazo, vazio: true})
        }
        if(!validaPrazo(prazo as string)){
            return fail(400, {titulo,descricao,prazo, datainvalida: true} )
        }

        const prazoFormatado = formataData(prazo as string);

        await prisma.post.update({
            where:{
                id: params.id
            },data:{
                tittle: titulo as string,
                description: descricao as string,
                data: prazoFormatado
            }
        })
        return redirect(303,'/');
    }
}