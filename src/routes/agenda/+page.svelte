<script>
  import { fade, fly } from 'svelte/transition';
  import AgendaCard from '$lib/components/AgendaCard.svelte';

  const agendas = [
    {
      title: "Day of Sharing",
      date: "3 Mei 2024",
      time: "13:00 - 15:00",
      location: "Google Meet",
      description: "Kegiatan berbagi dan diskusi online melalui platform Google Meet."
    },
    {
      title: "Santun Senja",
      date: "10 Mei 2024",
      time: "15:00 - 17:00",
      location: "Panti Jompo",
      description: "Kunjungan dan berbagi kebahagiaan bersama penghuni panti jompo."
    },
    {
      title: "Sidang Edukasi",
      date: "13 Mei 2024",
      time: "13:00 - 15:00",
      location: "Sekretariat UKM FK",
      description: "Rapat koordinasi tim edukasi UKM Fastabiqul Khairat."
    },
    {
      title: "Rapat Perdana",
      date: "29 Mei 2024",
      time: "13:00 - 15:00",
      location: "Sekretariat UKM FK",
      description: "Rapat perdana pengurus UKM Fastabiqul Khairat periode 2024/2025."
    }
  ];

  const regularEvents = [
    {
      title: "EBQ - Edukasi Baca Al-Quran",
      schedule: "Minggu Pertama",
      time: "16:00 - 17:30",
      location: "Masjid Kampus",
      description: "Program edukasi baca Al-Quran untuk mahasiswa."
    },
    {
      title: "Archery",
      schedule: "Minggu Kedua",
      time: "15:00 - 17:00",
      location: "Lapangan Kampus",
      description: "Latihan memanah untuk anggota UKM FK."
    },
    {
      title: "Kerja Bakti",
      schedule: "Minggu Ketiga",
      time: "07:00 - 09:00",
      location: "Musola Masjid",
      description: "Kegiatan bersih-bersih dan perawatan musola masjid kampus."
    },
    {
      title: "Kajian Offline",
      schedule: "Minggu Keempat",
      time: "16:00 - 17:30",
      location: "Masjid Kampus",
      description: "Kajian rutin dengan tema keislaman dan pengembangan diri."
    }
  ];
</script>

<div class="min-h-screen bg-base-200 py-12">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12" in:fade={{ duration: 500 }}>
      <h1 class="text-4xl font-bold text-primary mb-4">Agenda Kegiatan</h1>
      <p class="text-lg text-base-content/80">Jadwal kegiatan UKM Fastabiqul Khairat</p>
    </div>

    <div class="mb-16">
      <h2 class="text-2xl font-bold text-neutral mb-6">Kegiatan Mendatang</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each agendas as agenda, i}
          <div in:fly={{ y: 20, duration: 300, delay: i * 100 }}>
            <AgendaCard {agenda} />
          </div>
        {/each}
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-bold text-neutral mb-6">Kegiatan Rutin</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each regularEvents as event, i}
          <div in:fly={{ y: 20, duration: 300, delay: i * 100 }}>
            <AgendaCard agenda={event} />
          </div>
        {/each}
      </div>
    </div>
  </div>
</div> 