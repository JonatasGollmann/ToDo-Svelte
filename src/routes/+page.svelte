<script lang="ts">
  import { goto } from "$app/navigation";
  import {
    DiamondPlus,
    Squirrel,
    Trash2,
    Bolt,
    ExternalLink,
  } from "lucide-svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  //console.log(data)
</script>

<div
  class="w-screen h-screen bg-gradient-to-br from-shamrock-100 to-shamrock-50 font-body p-20"
>
  <div class="text-center">
    <div class="flex justify-center items-center text-shamrock-800">
      <h1 class="text-3xl font-normal mr-4">Bem-vindo de volta!</h1>
      <Squirrel />
    </div>
    <div class="grid grid-cols-1 gap-5 my- lg:m-12 md:grid-cols-2 lg:grid-cols-3">
      <a
        class="bg-gradient-to-tr shadow-lg from-shamrock-900 to-shamrock-800 h-48 rounded-xl hover:scale-[102%]
      0 transition-all delay-150 text-shamrock-50 hover:text-shamrock-100 group"
        href="/criar"
      >
        <p class=" h-[30%] pt-4 text-xl">Criar ToDo</p>
        <DiamondPlus
          class="h-[60%] mx-auto w-14 transition-all duration-500 group-hover:rotate-90"
        />
      </a>
      {#each data.posts as post}
        {#if post.description}
        <button on:click={() => goto(`/p/${post.id}`)}
          class="bg-gradient-to-bl transition-all hover:scale-[102%] shadow-lg from-shamrock-400 to-shamrock-700 rounded-xl h-48 text-shamrock-50 flex"
        >
          <div class="w-3/4 p-6 flex flex-col justify-center h-full" >
            <h2 class="text-2xl pl-2 font-light tracking-wide  mx-auto max-w-[300px]">
              {post.tittle}
            </h2>
            
          </div>

          <div class="font-black text-7xl my-auto">
            <h1 class="flex items-end">
              {post.data.slice(0, 2)}
              <p class="text-base">\</p>
            </h1>
            <h1 class="-mt-4">{post.data.slice(3, 5)}</h1>
            <h1 class="text-xs font-light -mt-3">{post.data.slice(6)}</h1>
          </div>
        </button>
        {:else}
          <button on:click={() => goto(`/p/${post.id}`)}
            class="bg-gradient-to-bl hover:scale-[102%] transition-all shadow-lg from-shamrock-300 to-shamrock-600 rounded-xl h-48 text-shamrock-50 flex"
          >
            <div class="w-3/4 p-6 flex flex-col justify-center h-full" >
              <h2 class="text-2xl pl-2 font-light tracking-wide  mx-auto max-w-[300px]">
                {post.tittle}
              </h2>
              
            </div>

            <div class="font-black text-7xl my-auto">
              <h1 class="flex items-end">
                {post.data.slice(0, 2)}
                <p class="text-base">\</p>
              </h1>
              <h1 class="-mt-4">{post.data.slice(3, 5)}</h1>
              <h1 class="text-xs font-light -mt-3">{post.data.slice(6)}</h1>
            </div>
          </button>
        {/if}
      {/each}
    </div>
  </div>
</div>
