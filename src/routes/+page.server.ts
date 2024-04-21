import prisma from "../db/mongo"

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
        const dados = await prisma.post.findMany({orderBy:{data:"asc"}})

    return { posts : dados };
}