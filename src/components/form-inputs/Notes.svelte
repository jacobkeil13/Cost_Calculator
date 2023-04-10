<script>
	import { notes } from '../../store.js';
	import { tooltip } from '../misc/tooltip.js';

	let currentNote = '';

	function addNote() {
		if (currentNote === '') return;
		$notes.push(currentNote);
		$notes = $notes;
		currentNote = '';
	}

	function deleteNote(i) {
		$notes.splice(i, 1);
		$notes = $notes;
		notes.set($notes);
	}
</script>

<div>
	<div class="flex items-center space-x-2">
		<h1 class="text-2xl font-medium text-[#006747] mb-2">Notes</h1>
		<box-icon
			class="w-[20px] fill-green-800 cursor-pointer mb-1"
			title="Keep track of notes when budgeting and calculating."
			name="help-circle"
			use:tooltip
		/>
	</div>
	<div class="flex items-center border-2 border-[#006747] w-full rounded-sm">
		<input bind:value={currentNote} type="text" class="w-full px-1 flex-grow" />
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={addNote}
			id="add-button"
			class="flex justify-center items-center w-10 bg-[#006747] cursor-pointer"
		>
			<box-icon name="plus" class="fill-white" />
		</div>
	</div>
	<ul class="list-disc pl-5">
		{#each $notes as note, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<li
				class="text-lg font-medium hover:text-red-700 hover:line-through cursor-pointer"
				on:click={() => deleteNote(i)}
			>
				{note}
			</li>
		{/each}
	</ul>
</div>

<style>
	input:focus {
		outline: none;
	}

	#add-button:hover > box-icon {
		transform: rotate(90deg);
		transition: all 0.3s ease;
	}
</style>
