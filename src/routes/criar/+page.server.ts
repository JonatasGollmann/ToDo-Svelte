import { validaPrazo } from "$lib/validador";
import { fail, redirect } from "@sveltejs/kit";
import prisma from "../../db/mongo.js";
import {formataData} from "$lib/formataData.js";

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        
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

        await prisma.post.create({
            data:{
                tittle: titulo as string,
                description: descricao as string,
                data: prazoFormatado as string
            }
        })
        redirect(303,'/')
    }
}