<script>
	export let title;
</script>

<div class="flex items-center space-x-2">
	<h1 class="text-2xl pb-3">{title}</h1>
	<box-icon type="solid" name="edit" class="fill-white mb-1" />
</div>
<div class="divide-y divide-slate-300 border-t-[1px] border-slate-300 pb-3">
	<slot />
</div>
