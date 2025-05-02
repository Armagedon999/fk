<script>
  import { fade, fly } from 'svelte/transition';
  
  let name = '';
  let email = '';
  let message = '';
  let submitted = false;
  let loading = false;

  async function handleSubmit() {
    loading = true;
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });
      
      if (response.ok) {
        submitted = true;
        name = '';
        email = '';
        message = '';
      }
    } catch (error) {
      console.error('Error:', error);
    }
    loading = false;
  }
</script>

<div class="card bg-base-100 shadow-xl" in:fly={{ y: 20, duration: 300 }}>
  <div class="card-body">
    {#if submitted}
      <div class="text-center" in:fade>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-success mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-xl font-bold mb-2">Terima Kasih!</h3>
        <p>Masukan dan saran Anda telah kami terima.</p>
        <button 
          class="btn btn-primary mt-4"
          on:click={() => submitted = false}
        >
          Kirim Masukan Lain
        </button>
      </div>
    {:else}
      <h2 class="card-title text-2xl mb-4">Masukan & Saran</h2>
      <form on:submit|preventDefault={handleSubmit} class="space-y-4">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Nama</span>
          </label>
          <input 
            type="text" 
            bind:value={name}
            class="input input-bordered" 
            required
          />
        </div>
        
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input 
            type="email" 
            bind:value={email}
            class="input input-bordered" 
            required
          />
        </div>
        
        <div class="form-control">
          <label class="label">
            <span class="label-text">Pesan</span>
          </label>
          <textarea 
            bind:value={message}
            class="textarea textarea-bordered h-24" 
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          class="btn btn-primary w-full"
          class:loading={loading}
          disabled={loading}
        >
          {#if loading}
            <span class="loading loading-spinner"></span>
            Mengirim...
          {:else}
            Kirim Masukan
          {/if}
        </button>
      </form>
    {/if}
  </div>
</div> 