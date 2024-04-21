<script lang="ts">
  import { redirect } from "@sveltejs/kit";
  import type { PageData } from "../$types";

  /** @type {import('./$types').PageData} */
  export let data: PageData;

  let certeza = false;
  function deletar() {
    certeza = true;
  }
  function cancelaDelete() {
    
    certeza = false;
    
  }
</script>

<div
  class="w-screen h-screen bg-gradient-to-tr from-shamrock-100 to-shamrock-50 font-body flex justify-center items-center"
>
  <div class="bg-gradient-to-tr shadow-lg from-red-600 to-red-400 w-2/4 h-2/4 flex flex-col justify-evenly items-center rounded-xl">
    <div class="text-xl font-light my-5">
      <h1>Deseja deletar este ToDo?</h1>
      <h2 class="font-medium text-2xl text-center">{data.post?.tittle}</h2>
    </div>
    {#if certeza}
      <p class=" py-4 px-8 rounded-lg">Tem certeza?</p>
      <div class="flex justify-evenly w-36 text-shamrock-50">
        <button on:click={cancelaDelete} class="bg-shamrock-600 py-2 px-5 hover:bg-shamrock-700 rounded-lg"
          >Não</button
        >
        <form method="post">
          <button type="submit" class="bg-red-900 py-2 px-5 hover:bg-red-950 rounded-lg "
            >Sim</button
          >
        </form>
      </div>
    {:else}
      <button on:click={deletar} class="bg-shamrock-500 hover:bg-red-900 hover:scale-105 transition-all py-2 px-4 rounded-lg"
        >Deletar?</button
      >
      <a class="bg-shamrock-100 hover:bg-shamrock-200  py-2 px-4 rounded-lg transition-all" href="/">Voltar</a>
    {/if}
  </div>
</div>
