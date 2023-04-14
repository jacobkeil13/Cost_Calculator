<script>
	import DocSection from '../../components/docs/DocSection.svelte';
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 p-6">
	<DocSection title="Required Fields">
		<div>
			<h1 class="text-xl font-medium text-[#006747]">Student Information</h1>
			<ul class="list-disc pl-10">
				<li>Campus</li>
				<li>Student type</li>
				<li>Tuition</li>
				<li>Semester</li>
			</ul>
		</div>
	</DocSection>
	<DocSection title="Calculations">
		<div>
			<h1 class="text-xl font-medium text-[#006747]">Tuition & Fees</h1>
			<ul class="list-disc pl-10">
				<li>
					<span class="font-medium underline">Credit hours:</span> Hours * ( Level -&#62; Tuition )
				</li>
				<li><span class="font-medium underline">Lab Fees:</span> Semesterly added to total</li>
				<li><span class="font-medium underline">Other Fees:</span> Semesterly added to total</li>
				<li>
					<span class="font-medium underline">Campus Fee:</span> Automatically selected based on campus
					picked
				</li>
			</ul>
			<h1 class="text-xl font-medium text-[#006747]">Housing & Food</h1>
			<ul class="list-disc pl-10">
				<li>
					<span class="font-medium underline">Location:</span> Where you are living
				</li>
				<li><span class="font-medium underline">Housing:</span> Housing Cost -&#62; Semester</li>
				<li><span class="font-medium underline">LLC:</span> Semesterly only in Spring and Fall</li>
				<li>
					<span class="font-medium underline">Food Plan:</span> Food Plan Cost -&#62; Semester
				</li>
			</ul>
			<h1 class="text-xl font-medium text-[#006747]">Books & Supplies</h1>
			<ul class="list-disc pl-10">
				<li><span class="font-medium underline">Books:</span> Semesterly added to total</li>
				<li><span class="font-medium underline">Supplies:</span> Semesterly added to total</li>
			</ul>
		</div>
	</DocSection>
</div>
