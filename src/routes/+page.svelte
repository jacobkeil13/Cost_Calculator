<script>
	import Form from '../components/Form.svelte';
	import ProgressBar from '../components/ProgressBar.svelte';
	let steps = ['Student Info', 'Tuition & Fees', 'Housing & Food', 'Books & supplies', 'Transportation', "Personal", "Review"], currentActive = 1, progressBar;
	
	const handleProgress = (stepIncrement) => {
		progressBar.handleProgress(stepIncrement)
	}
	
</script>

<main>
	<div class="mt-16">
		<ProgressBar {steps} bind:currentActive bind:this={progressBar}/>
        <div class="step-button">
			<button class="btn" on:click={() => handleProgress(-1)} disabled={currentActive == 1}>Prev</button>
			<button class="btn" on:click={() => handleProgress(+1)} disabled={currentActive == steps.length}>Next</button>
		</div>		
		<div class="flex justify-center mx-auto px-6">
            <Form active_step={steps[currentActive-1]}/>
        </div>
	</div>	  
</main>

<style>

	@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
	
	* {
		box-sizing: border-box;
	}

	main {
		font-family: 'Muli', sans-serif;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		margin: 0;
	}

	.btn {
		background-color: #006747;
		color: #fff;
		border: 0;
		border-radius: 6px;
		cursor: pointer;
		font-family: inherit;
		padding: 8px 30px;
		margin: 5px;
		font-size: 14px;
	}

	.btn:active {
		transform: scale(0.98);
	}

	.btn:focus {
		outline: 0;
	}

	.btn:disabled {
		background-color: #e0e0e0;
		cursor: not-allowed;
	}
	
	.step-button{
		margin-top: 1rem;
		text-align: center;
	}
</style>
