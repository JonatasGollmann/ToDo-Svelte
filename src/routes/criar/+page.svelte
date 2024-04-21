<script lang="ts">
  import type { ActionData } from "../$types";

    export let form: ActionData;
</script>

<div class="w-screen h-screen bg-gradient-to-tr from-shamrock-100 to-shamrock-50 font-body flex justify-center items-center">
    <div class="bg-gradient-to-bl from-shamrock-400 to-shamrock-700   w-2/4 rounded-2xl p-20 text-shamrock-50">
        <form method="post" >
            <h1 class="text-2xl font-light text-center mb-6">Criar novo item</h1>
            <div class="text-md text-center font-light text-red-900">
                {#if form?.vazio}
                <p>Campos necessários estão vazios. Verifique o Titulo ou Data.</p>
                {/if}
                {#if form?.datainvalida}
                    <p>A data inserida é invalida. Já passou.</p>
                {/if}
            </div>
    
            <div class="flex flex-col w-2/3 mx-auto my-4">
                <label class="text-sm text-center mb-1" for="tituloNewTodo">Titulo:</label>
                <input class="rounded-lg h-12 p-4 text-shamrock-950" type="text" id="tituloNewTodo" name="tituloNewTodo" value={form?.titulo ?? ""} placeholder="Digite o titulo da sua ToDo!">
            </div>
            <div class="flex flex-col w-2/3 mx-auto my-4 ">
                <label class="text-sm text-center mb-1" for="descNewTodo">Descrição:</label>
                <textarea rows="5" cols="50" id="descNewTodo" maxlength="200" class="p-2 text-shamrock-950 rounded-lg" name="descNewTodo" value={form?.descricao ?? ""}/>
            </div>
            <div class="flex flex-col w-1/3  mx-auto my-4 ">
                <label class="text-sm text-center mb-1"for="dataNewTodo">Prazo de conclusão:</label>
                <input type="date" name="dataNewTodo" class="h-10 rounded-xl p-2 text-shamrock-950" id="dataNewTodo" value={form?.prazo ?? ""}>
            </div>
            <div class="flex mx-auto my-4 items-center justify-center">
                <button type="submit" class="bg-shamrock-200 hover:bg-shamrock-300 text-shamrock-950 transition-all h-12 w-1/3 mx-2 px-4 rounded-lg">Criar nova tarefa!</button>
                <a href="../" class="flex justify-center items-center bg-shamrock-200 hover:bg-shamrock-300 text-shamrock-950 transition-all h-12 w-1/3  mx-2  px-4 rounded-lg">Voltar</a>
            </div>
        </form>
    </div>
</div>