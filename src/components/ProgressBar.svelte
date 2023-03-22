<script>
	export let steps = [],
		currentActive = 1;
	let circles, progress, windowX;

	export const handleProgress = (stepIncrement) => {
		circles = document.querySelectorAll('.circle');
		if (stepIncrement == 1) {
			currentActive++;

			if (currentActive > circles.length) {
				currentActive = circles.length;
			}
		} else {
			currentActive--;

			if (currentActive < 1) {
				currentActive = 1;
			}
		}
		update();
	};

	function update() {
		circles.forEach((circle, idx) => {
			if (idx < currentActive) {
				circle.classList.add('active');
			} else {
				circle.classList.remove('active');
			}
		});

		const actives = document.querySelectorAll('.active');

		progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
	}
</script>

<svelte:window bind:outerWidth={windowX} />

{#if windowX >= 880}
	<div class="progress-container" bind:this={circles}>
		<div class="progress" bind:this={progress} />
		{#each steps as step, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="circle {i == 0 ? 'active' : ''}" data-title={step}>{i + 1}</div>
		{/each}
	</div>
{/if}

{#if windowX < 880}
	<div class="flex flex-col justify-center items-center mt-4">
		<h1 class="text-xl">{steps[currentActive]}</h1>
		<h1><b>{currentActive + 1}</b> of <b>{steps.length}</b></h1>
	</div>
{/if}

<style>
	.progress-container {
		display: flex;
		justify-content: space-between;
		position: relative;
		margin-bottom: 30px;
		max-width: 100%;
		width: 800px;
		margin-top: 3rem;
	}

	.progress-container::before {
		content: '';
		background-color: #e0e0e0;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		height: 4px;
		width: 100%;
		z-index: -1;
	}

	.progress {
		background-color: #006747;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		height: 4px;
		width: 0%;
		z-index: -1;
		transition: 0.4s ease;
	}

	.circle {
		background-color: #fff;
		color: rgb(20, 20, 20);
		border-radius: 50%;
		height: 30px;
		width: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 3px solid #e0e0e0;
		transition: 0.4s ease;
		cursor: pointer;
	}

	.circle::after {
		content: attr(data-title) ' ';
		position: absolute;
		bottom: 35px;
		color: #999;
		transition: 0.4s ease;
	}

	.circle.active::after {
		color: #006747;
	}

	.circle.active {
		border-color: #006747;
	}
</style>
