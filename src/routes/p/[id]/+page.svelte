<script lang="ts">
  import { goto } from "$app/navigation";
  import { redirect } from "@sveltejs/kit";
  import type { PageData } from "./$types";

  /** @type {import('./$types').PageData} */
  export let data: PageData;
</script>

<div
  class="w-screen h-screen bg-gradient-to-tr from-shamrock-100 to-shamrock-50 font-body flex justify-center items-center"
>
  <div
    class="bg-gradient-to-bl from-shamrock-400 to-shamrock-700 w-2/4 rounded-2xl p-20 text-shamrock-50"
  >
    <div class="flex justify-between items-center">
      <div class="text-3xl font-black tracking-widest">{data.post?.tittle}</div>
      <div>Prazo até: {data.post?.data.replaceAll("-", "/")}</div>
    </div>
    <div class="font-light h-20">
      
    <p class="h-2/3 overflow-auto">{data.post?.description}</p>
    </div>

    <div class="w-full text-center">
      <button
        on:click={() => goto(`${data.post?.id}/alterar`)}
        class="bg-shamrock-300 py-2 px-4 mx-3 rounded-lg hover:bg-shamrock-400 transition-all group"
        >Alterar</button
      >
      <button
        on:click={() => goto(`${data.post?.id}/deletar`)}
        class="bg-red-400 py-2 px-4 mx-3 rounded-lg hover:bg-red-500 transition-all group"
        >Deletar</button
      >
      <a href="/" class="bg-orange-400 py-2 px-4 mx-3 rounded-lg hover:bg-orange-500 transition-all group">Voltar</a>
    </div>
  </div>
</div>
