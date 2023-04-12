<script>
	import { total } from '../store';
	import { onMount } from 'svelte';
	import '../app.css';
	import { goto } from '$app/navigation';
	import Navbar from '../components/layout-sections/Navbar.svelte';
	import Footer from '../components/layout-sections/Footer.svelte';
	let clientX;

	onMount(() => {
		goto('#start-content');
	});
</script>

<svelte:window bind:outerWidth={clientX} />

<Navbar {clientX} />
<div class="max-w-5xl mx-auto">
	<slot />
</div>
{#if clientX > 960}
	<Footer {clientX} />
{/if}

{#if clientX < 960 && $total !== 0}
	<div class="h-[164px]" />
{:else if clientX < 960 && $total === 0}
	<div class="h-[137px]" />
{/if}
