<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { goto } from '$app/navigation';
	import USFLogo from '../components/misc/USFLogo.svelte';
	import UsfLogoText from '../components/misc/USFLogoText.svelte';
	let clientX;

	onMount(() => {
		goto('#start-content');
	});
</script>

<svelte:window bind:outerWidth={clientX} />

<nav class="bg-[#384B52] h-12 text-white flex justify-between items-center">
	<div class="flex justify-between items-center w-screen max-w-5xl mx-auto px-6">
		<div class="flex space-x-3">
			<USFLogo />
			<h1 class="font-bold tracking-wider max-w-lg">UNIVERSITY OF SOUTH FLORIDA</h1>
		</div>
		{#if clientX < 960}
			<box-icon name="menu" class="fill-white" />
		{:else}
			<div class="space-x-3 text-lg">
				<a class="border-gray-500 border-r-2 px-3" href="http://">MyUSF</a>
				<a class="" href="http://">Directory</a>
			</div>
		{/if}
	</div>
</nav>
<div class="bg-[#3F565E] h-[120px] flex justify-between items-center">
	<div class="flex items-center w-screen max-w-5xl mx-auto px-6">
		<h1 class="font-semibold tracking-wide text-4xl text-white">OFFICE OF FINANCIAL AID</h1>
	</div>
</div>

<div class="max-w-5xl mx-auto">
	<slot />
</div>

<footer class="bg-[#006747] px-6 py-12">
	<div class="max-w-5xl mx-auto grid {clientX < 960 ? 'grid-cols-[1fr]' : 'grid-cols-[1fr_1.5fr]'}">
		<div class="flex flex-col justify-between space-y-8">
			<UsfLogoText {clientX} />
			<div class="text-white text-lg">
				<h1>4202 E. Fowler Avenue</h1>
				<h1>Tampa, FL 33620</h1>
				<h1>813-974-2011</h1>
			</div>
			<div class="flex space-x-2 fill-white">
				<box-icon name="facebook-square" type="logo" />
				<box-icon name="twitter" type="logo" />
				<box-icon name="youtube" type="logo" />
				<box-icon name="linkedin-square" type="logo" />
				<box-icon name="instagram" type="logo" />
				<box-icon name="snapchat" type="logo" />
			</div>
		</div>
		<div
			class="flex justify-between text-xl text-white {clientX < 960 ? 'pt-6' : 'px-16'} {clientX <
			480
				? 'hidden'
				: ''}"
		>
			<ul>
				<li>About USF</li>
				<li>Academics</li>
				<li>Admissions</li>
				<li>Campus Life</li>
				<li>Research</li>
				<li>USF System</li>
			</ul>
			<ul>
				<li>Partner with USF</li>
				<li>Administrative Units</li>
				<li>Regulations & Policies</li>
				<li>Human Resources</li>
				<li>Work at USF</li>
				<li>Emergency & Safety</li>
			</ul>
			<ul>
				<li>USF Health</li>
				<li>USF Athletics</li>
				<li>USF Alumni</li>
				<li>Support USF</li>
				<li>USF Libraries</li>
				<li>USF World</li>
			</ul>
		</div>
	</div>
</footer>
{#if clientX < 960}
	<div class="h-[164px]" />
{/if}

<style>
	box-icon {
		width: 32px;
		height: 32px;
	}

	li {
		padding: 7px 0 7px 0;
	}
</style>
