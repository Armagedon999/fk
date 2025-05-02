<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="min-h-screen bg-base-100" data-theme="ukmfk">
  <Navbar />
  <main class="min-h-screen">
    <slot />
  </main>
  <Footer />
</div>

<style>
  :global(body) {
    font-family: 'Inter', 'Poppins', 'Open Sans', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--neutral);
  }

  :global(h1) {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 700;
    letter-spacing: -0.025em;
    color: var(--neutral);
    margin-bottom: 1.5rem;
  }

  :global(h2) {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    letter-spacing: -0.025em;
    color: var(--neutral);
    margin-bottom: 1rem;
  }

  :global(h3) {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    letter-spacing: -0.025em;
    color: var(--neutral);
    margin-bottom: 0.75rem;
  }

  :global(p) {
    font-size: 1rem;
    line-height: 1.75rem;
    color: var(--neutral);
    opacity: 0.8;
  }

  :global(.btn) {
    font-weight: 500;
    letter-spacing: 0.025em;
  }

  :global(.btn-primary) {
    background-color: var(--primary);
    color: var(--primary-content);
  }

  :global(.btn-primary:hover) {
    background-color: var(--primary-dark);
  }

  :global(.btn-secondary) {
    background-color: var(--secondary);
    color: var(--secondary-content);
  }

  :global(.btn-secondary:hover) {
    background-color: var(--secondary-dark);
  }

  :global(.card) {
    background-color: var(--base-100);
    transition: all 0.3s ease;
  }

  :global(.card:hover) {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  :global(.badge) {
    font-weight: 500;
  }

  :global(.badge-primary) {
    background-color: var(--primary);
    color: var(--primary-content);
  }

  :global(.badge-secondary) {
    background-color: var(--secondary);
    color: var(--secondary-content);
  }

  :global(.input), :global(.textarea) {
    background-color: var(--base-200);
    border-color: var(--base-300);
  }

  :global(.input:focus), :global(.textarea:focus) {
    border-color: var(--accent);
  }

  :global(.link) {
    color: var(--accent);
    transition: color 0.2s ease;
  }

  :global(.link:hover) {
    color: var(--accent-dark);
  }

  @media (min-width: 768px) {
    :global(h1) {
      font-size: 3rem;
      line-height: 1;
    }

    :global(h2) {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }

    :global(h3) {
      font-size: 1.875rem;
      line-height: 2.25rem;
    }

    :global(p) {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
  }
</style>