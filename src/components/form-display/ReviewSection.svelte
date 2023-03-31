<script>
	export let title;
</script>

<h1 class="text-3xl pb-3">{title}</h1>
<div class="divide-y divide-slate-300 border-t-[1px] border-slate-300 pb-3">
	<slot />
</div>
