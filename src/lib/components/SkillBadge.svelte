<script lang="ts">
  import { fly } from 'svelte/transition';
  export let label: string = '';
  export let colorClass: string = 'bg-neutral-800/40';
  export let textClass: string = 'text-[var(--text)]';
</script>

<div
  in:fly={{ y: 6, duration: 330 }}
  class={`inline-flex items-center gap-2 ${colorClass} border border-white/6 px-3 py-1 rounded-full text-sm ${textClass} transform transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]`}
  tabindex="0"
  role="button"
  aria-label={label}
>
  <span class="w-5 h-5 flex items-center justify-center shrink-0">
    <slot name="icon" />
  </span>
  <span class="whitespace-nowrap">{label}</span>
</div>

