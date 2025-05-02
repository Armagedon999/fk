<script>
  import { fade, fly } from 'svelte/transition';
  import FeedbackForm from '$lib/components/FeedbackForm.svelte';
  
  const suggestions = [
    {
      title: 'Peningkatan Program',
      description: 'Saran untuk meningkatkan kualitas program kegiatan UKM FK.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>`
    },
    {
      title: 'Pengembangan Organisasi',
      description: 'Ide untuk pengembangan dan kemajuan organisasi UKM FK.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>`
    },
    {
      title: 'Kritik & Saran',
      description: 'Kritik dan saran untuk perbaikan UKM FK ke depannya.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>`
    }
  ];
</script>

<div class="min-h-screen bg-base-200 py-12">
  <div class="container mx-auto px-4">
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-12" in:fade={{ duration: 500 }}>
        <h1 class="text-4xl font-bold text-primary mb-4">Masukan & Saran</h1>
        <p class="text-lg text-base-content/80">
          Kami sangat menghargai masukan dan saran dari Anda untuk pengembangan UKM Fastabiqul Khairat
        </p>
      </div>

      <div in:fly={{ y: 20, duration: 300, delay: 200 }}>
        <FeedbackForm />
      </div>
    </div>
  </div>
</div> 