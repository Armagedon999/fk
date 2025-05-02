<script>
  import { fade, fly } from 'svelte/transition';
  
  export let agenda = {
    title: '',
    date: '',
    time: '',
    location: '',
    description: ''
  };
</script>

<div 
  class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
  in:fly={{ y: 20, duration: 300 }}
>
  <div class="card-body">
    <div class="flex items-start gap-3">
      <div class="flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <div>
        <h2 class="card-title">{agenda.title}</h2>
        {#if agenda.date}
          <p class="text-sm text-neutral/60">{agenda.date}</p>
        {:else}
          <p class="text-sm text-neutral/60">{agenda.schedule}</p>
        {/if}
        <p class="text-sm text-neutral/60">{agenda.time}</p>
        <p class="text-sm text-neutral/60">{agenda.location}</p>
      </div>
    </div>
    <p class="mt-4">{agenda.description}</p>
  </div>
</div> 