<script>
	import { current_step } from '../../store';
	import { steps } from '../../constants';
	export let title,
		edit = 'nothing',
		alt_text = '';

	function switchStep(id) {
		current_step.set(id);
	}
</script>

<div class="border-2 border-gray-300 px-2 py-1 mb-2 rounded-md">
	<div class="flex items-center space-x-2">
		<div>
			<h1 class="text-2xl {alt_text === '' ? 'pb-3' : ''}">{title}</h1>
			{#if alt_text !== ''}
				<h1 class="font-medium">{alt_text}</h1>
			{/if}
		</div>
		{#if edit != 'nothing'}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<box-icon
				on:click={switchStep($steps.indexOf(title))}
				type="solid"
				name="edit"
				class="fill-[#242424] cursor-pointer mb-2"
			/>
		{/if}
	</div>
	<div class="divide-y divide-slate-300 border-t-[1px] border-slate-300">
		<slot />
	</div>
</div>
