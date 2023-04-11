<script>
	import { tooltip } from '../misc/tooltip.js';
	export let label,
		value,
		options = {},
		extra_option = null,
		disabled = false,
		tooltip_text = '';

	let styles = Object.keys(options);
</script>

<div class="form-control">
	{#if label}
		<div class="flex space-x-3">
			<h1 class="font-medium text-xl mb-2">
				{label}
				{#if tooltip_text != ''}
					<box-icon
						class="w-[20px] pt-[6px] fill-green-800 cursor-pointer"
						title={tooltip_text}
						name="help-circle"
						use:tooltip
					/>
				{/if}
			</h1>
		</div>
	{/if}
	<select class:active={value === 'nothing'} {disabled} bind:value>
		<option value="nothing" selected disabled>Select one</option>
		{#if extra_option}
			<option class={extra_option.style} value={extra_option.value}>{extra_option.label}</option>
		{/if}
		{#each styles as style}
			<optgroup label={style.charAt(0).toUpperCase() + style.slice(1)}>
				{#each options[style] as option}
					<option class="active:bg-white" value={option.value}>{option.label}</option>
				{/each}
			</optgroup>
		{/each}
	</select>
	{#if disabled}
		{#if extra_option?.value?.includes('food')}
			<p class="text-red-700">Sarasota Manatee does not offer a food plan</p>
		{:else}
			<p class="text-red-700">Sarasota Manatee does not offer housing</p>
		{/if}
	{/if}
</div>

<style>
	.form-control {
		width: 100%;
		margin: 0.5rem 0;
	}

	select {
		width: 100%;
		padding: 0.25rem 0.5rem;
		border-width: 2px;
		border-radius: 0.375rem;
	}

	.active {
		border-color: rgb(185 28 28);
	}
</style>
