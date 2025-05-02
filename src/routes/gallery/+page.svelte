<section class="p-10">
  <h2 class="text-3xl font-bold mb-6">Galeri Kegiatan</h2>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    {#each Array(8) as _, i}
      <img src={`https://placeimg.com/300/200/people?${i}`} alt="Kegiatan {i}" class="rounded shadow-md" />
    {/each}
  </div>
</section>