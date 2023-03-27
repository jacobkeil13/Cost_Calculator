<script>
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ x: -10, duration: 500 }}>
	<h1>Review</h1>
</div>
