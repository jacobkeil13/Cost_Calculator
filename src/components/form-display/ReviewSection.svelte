<script>
	export let title,
		edit = 'nothing';
</script>

<div class="border-2 border-gray-300 px-2 py-1 mb-2 rounded-md">
	<div class="flex items-center space-x-2">
		<h1 class="text-2xl pb-3">{title}</h1>
		{#if edit != 'nothing'}
			<box-icon type="solid" name="edit" class="fill-[#242424] cursor-pointer mb-2" />
		{/if}
	</div>
	<div class="divide-y divide-slate-300 border-t-[1px] border-slate-300">
		<slot />
	</div>
</div>
