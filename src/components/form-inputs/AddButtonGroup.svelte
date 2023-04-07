<script>
	import { createEventDispatcher } from 'svelte';
	import { tooltip } from '../misc/tooltip.js';
	export let label,
		button,
		type,
		tooltip_text = '',
		link = '';
	const dispatch = createEventDispatcher();

	function addEvent() {
		dispatch('add', data);
		data.name = '';
		data.amount = undefined;
		data.concurrency = 'semesterly';
		data.hours = undefined;
	}

	$: data = {
		type,
		name: '',
		amount: undefined,
		concurrency: 'semesterly',
		hours: undefined
	};
</script>

<div class="form-control">
	{#if label}
		<div class="flex space-x-3 mb-2">
			<h1 class="font-semibold">{label}</h1>
			{#if tooltip_text != ''}
				<box-icon
					class="w-[20px] fill-green-800 cursor-pointer"
					title={tooltip_text}
					name="help-circle"
					use:tooltip
				/>
			{/if}
			{#if link != ''}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<box-icon
					on:click={() => window.open(link, '_blank')}
					class="w-[20px] fill-green-800 cursor-pointer"
					name="link-external"
				/>
			{/if}
		</div>
	{/if}
	<div name="button-row" class="flex justify-between space-x-3">
		<input
			placeholder="Name..."
			type="text"
			name="name"
			id="name"
			class="w-full border-2 border-gray-400 rounded-sm py-1 px-2"
			bind:value={data.name}
		/>
		<input
			placeholder={data.type === 'job' ? 'Hours per week...' : 'Amount...'}
			type="number"
			name="amount"
			id="amount"
			min="0"
			class="w-full border-2 border-gray-400 rounded-sm py-1 px-2"
			bind:value={data.amount}
		/>
		{#if type === 'scholarship' || type === 'expense'}
			<select
				bind:value={data.concurrency}
				name="type"
				class="w-full border-2 border-gray-400 rounded-sm py-1 px-2"
			>
				<option value="monthly">Monthly</option>
				<option selected value="semesterly">Semesterly</option>
			</select>
		{/if}
		{#if type === 'job'}
			<input
				bind:value={data.hours}
				placeholder="Amount per hour..."
				type="number"
				name="hours"
				id="hours"
				min="0"
				class="w-full border-2 border-gray-400 rounded-sm py-1 px-2"
			/>
		{/if}
	</div>
	<button class="px-2 py-1 bg-[#006747] text-white rounded-sm mt-2" on:click={addEvent}
		>{button}</button
	>
</div>
