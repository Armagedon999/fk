<script>
  import { fade, fly } from 'svelte/transition';
  
  const activities = [
    {
      title: "Bakti Sosial",
      description: "Kegiatan sosial yang dilakukan secara rutin untuk membantu masyarakat yang membutuhkan.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "Sosial"
    },
    {
      title: "Kajian Rutin",
      description: "Diskusi dan kajian keislaman yang diadakan setiap minggu untuk meningkatkan pemahaman agama.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "Keagamaan"
    },
    {
      title: "Leadership Training",
      description: "Pelatihan kepemimpinan untuk mengembangkan soft skills dan kemampuan manajerial.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      category: "Pengembangan Diri"
    }
  ];
</script>

<div class="min-h-screen bg-base-200 py-12">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12" in:fade={{ duration: 500 }}>
      <h1 class="text-4xl font-bold text-primary mb-4">Kegiatan Kami</h1>
      <p class="text-lg text-base-content/80">
        Berbagai program dan kegiatan yang kami selenggarakan untuk pengembangan diri mahasiswa
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each activities as activity, i}
        <div 
          class="card bg-base-100 shadow-xl overflow-hidden"
          in:fly={{ y: 20, duration: 300, delay: i * 100 }}
        >
          <figure class="relative h-48">
            <img 
              src={activity.image} 
              alt={activity.title}
              class="w-full h-full object-cover"
            />
            <div class="absolute top-4 right-4">
              <div class="badge badge-primary">{activity.category}</div>
            </div>
          </figure>
          <div class="card-body">
            <h2 class="card-title text-xl font-bold">{activity.title}</h2>
            <p class="text-base-content/80">{activity.description}</p>
            <div class="card-actions justify-end mt-4">
              <button class="btn btn-primary btn-sm">Lihat Detail</button>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Additional Info Section -->
    <div class="mt-20 bg-base-100 rounded-box p-8 shadow-xl" in:fade={{ duration: 500, delay: 300 }}>
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-2xl font-bold text-primary mb-4">Ingin Berpartisipasi?</h2>
        <p class="text-lg mb-6">
          Bergabunglah dengan kami dalam berbagai kegiatan yang menarik dan bermanfaat.
          Dapatkan pengalaman berharga dan kembangkan potensi diri Anda.
        </p>
        <a href="/agenda" class="btn btn-primary">Lihat Agenda Kegiatan</a>
      </div>
    </div>
  </div>
</div>