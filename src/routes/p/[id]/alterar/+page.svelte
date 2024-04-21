<script lang="ts">
  import { reformataData } from "$lib/formataData";
    import type { ActionData } from "../$types";

  /** @type {import('./$types').PageData} */
  export let data;
 
  

  export let form: ActionData;
</script>

<div class="w-screen h-screen bg-gradient-to-tr from-shamrock-100 to-shamrock-50 font-body flex justify-center items-center">
  <div class="bg-gradient-to-bl from-shamrock-900 to-shamrock-800   w-2/4 rounded-2xl p-20 text-shamrock-50">
    <form method="post">
      <h1 class="text-2xl font-light text-center mb-6">Alterar ToDo</h1>
      <div class="text-md text-center font-light text-red-900">
        {#if form?.vazio}
          <p>Campos necessarios estão vazios. Titulo ou Data.</p>
        {/if}
        {#if form?.datainvalida}
          <p>A data inserida é invalida. Já passou.</p>
        {/if}
      </div>
  
      <div class="flex flex-col max-w-[500px] mx-auto my-4">
        <label class="text-sm text-center mb-1" for="tituloNewTodo">Titulo</label>
        <input
          type="text"
          id="tituloNewTodo"
          name="tituloNewTodo"
          value={form?.titulo ?? data.post?.tittle}
          class="rounded-lg h-12 p-4 text-shamrock-950"
        />
      </div>
      <div class="flex flex-col max-w-[500px] mx-auto my-4 ">
        <label for="descNewTodo" class="text-sm text-center mb-1">Descrição</label>
        <textarea
          rows="5"
          cols="50"
          id="descNewTodo"
          name="descNewTodo"
          maxlength="200"
          value={form?.descricao ?? data.post?.description}
          class="p-2 text-shamrock-950 rounded-lg"
        />
      </div>
      <div class="flex flex-col max-w-[500px] mx-auto my-4 ">
        <label class="text-sm text-center mb-1" for="dataNewTodo">Prazo de conclusão:</label>
        <input
          type="date"
          name="dataNewTodo"
          id="dataNewTodo"
          value={form?.prazo ?? reformataData(data.post?.data)}
          class="h-10 rounded-xl p-2 min-w-80 text-shamrock-950"
        />
      </div>
      <div class="flex max-w-[500px] my-4 mx-auto items-center justify-center flex-wrap">
        <button type="submit"  class="bg-shamrock-300 min-w-40 hover:bg-shamrock-400 text-shamrock-950 w-[45%] transition-all h-12 mx-2 px-4 rounded-lg">Alterar ToDo</button>
        <a href="/" class="flex justify-center items-center min-w-40 w-[45%] bg-shamrock-50 hover:bg-shamrock-100 text-shamrock-950 transition-all h-12  mx-2  px-4 rounded-lg">Voltar</a>
      </div>
    </form>
  </div>
</div>
