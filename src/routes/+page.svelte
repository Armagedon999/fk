<script>
  import { fade, fly } from 'svelte/transition';
  
  const features = [
    {
      title: "Pengembangan Diri",
      description: "Membantu mahasiswa mengembangkan potensi diri melalui berbagai program dan kegiatan.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>`
    },
    {
      title: "Kepemimpinan",
      description: "Melatih jiwa kepemimpinan melalui berbagai program organisasi dan manajemen.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>`
    },
    {
      title: "Sosial & Keagamaan",
      description: "Mengembangkan nilai-nilai sosial dan keagamaan melalui berbagai kegiatan amal.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>`
    }
  ];
</script>

<div class="min-h-screen">
  <!-- Hero Section -->
  <section class="hero min-h-[80vh] bg-base-200">
    <div class="hero-content text-center" in:fade={{ duration: 500 }}>
      <div class="max-w-3xl">
        <h1 class="text-5xl font-bold text-primary mb-6">UKM Fastabiqul Khairat</h1>
        <p class="text-xl mb-8">
          Wadah pengembangan diri mahasiswa melalui kegiatan sosial, keagamaan, dan kepemimpinan
        </p>
        <a href="/activities" class="btn btn-primary btn-lg">Lihat Kegiatan Kami</a>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="py-20 bg-base-100">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center mb-16" in:fade={{ duration: 500 }}>
        <h2 class="text-4xl font-bold text-primary mb-6">Tentang Kami</h2>
        <p class="text-lg text-base-content/80">
          UKM Fastabiqul Khairat adalah unit kegiatan mahasiswa yang berfokus pada pengembangan diri mahasiswa 
          melalui berbagai program dan kegiatan yang mengintegrasikan nilai-nilai sosial, keagamaan, dan kepemimpinan.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each features as feature, i}
          <div 
            class="card bg-base-200 shadow-xl"
            in:fly={{ y: 20, duration: 300, delay: i * 100 }}
          >
            <div class="card-body text-center">
              <div class="text-primary mb-4 mx-auto">
                {@html feature.icon}
              </div>
              <h3 class="card-title text-xl font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 bg-primary text-primary-content">
    <div class="container mx-auto px-4 text-center" in:fade={{ duration: 500 }}>
      <h2 class="text-4xl font-bold mb-6">Bergabung Bersama Kami</h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto">
        Jadilah bagian dari perubahan positif di kampus dan masyarakat melalui UKM Fastabiqul Khairat
      </p>
      <div class="flex justify-center gap-4">
        <a href="/agenda" class="btn btn-lg btn-outline">Lihat Agenda</a>
        <a href="/feedback" class="btn btn-lg">Hubungi Kami</a>
      </div>
    </div>
  </section>
</div>