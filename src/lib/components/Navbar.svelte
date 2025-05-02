<script>
  import { fade, fly } from 'svelte/transition';
  import { page } from '$app/stores';
  
  const navItems = [
    { 
      href: '/', 
      label: 'Home',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>`
    },
    { 
      href: '/activities', 
      label: 'Kegiatan',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>`
    },
    { 
      href: '/agenda', 
      label: 'Agenda',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>`
    },
    { 
      href: '/feedback', 
      label: 'Masukan',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>`
    }
  ];
</script>

<!-- Desktop Navbar -->
<nav class="navbar bg-base-100 shadow-lg fixed top-0 z-50 hidden md:block">
  <div class="container mx-auto px-4">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost text-xl font-bold text-primary">
        UKM FK
      </a>
    </div>
    
    <div class="flex space-x-2">
      {#each navItems as item, i}
        <a 
          href={item.href}
          class="btn btn-ghost {($page.url.pathname === item.href ? 'text-primary font-semibold' : '')}"
          in:fly={{ y: -20, duration: 300, delay: i * 50 }}
        >
          {item.label}
        </a>
      {/each}
    </div>
  </div>
</nav>

<!-- Mobile Bottom Navigation -->
<nav class="fixed bottom-0 left-0 right-0 bg-base-100 shadow-lg z-50 md:hidden">
  <div class="flex justify-around items-center h-14">
    {#each navItems as item}
      <a 
        href={item.href}
        class="flex items-center justify-center w-full h-full {$page.url.pathname === item.href ? 'text-primary' : 'text-neutral/60'} hover:text-primary transition-colors duration-200"
      >
        {@html item.icon}
      </a>
    {/each}
  </div>
</nav>

<!-- Spacer for desktop navbar -->
<div class="h-16 hidden md:block"></div>

<!-- Spacer for mobile bottom nav -->
<div class="h-14 md:hidden"></div>