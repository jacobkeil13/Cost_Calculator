<script>
	export let question,
		value = '',
		style = '';
</script>

<div class="flex justify-between {value === '' ? 'py-1' : 'py-2'} child-row">
	<h1>{question}</h1>
	<h1 class="font-medium {style}">
		{value}
	</h1>
</div>
