<script>
	import UsfLogoText from '../misc/USFLogoText.svelte';
	export let clientX;
</script>

<footer class="bg-[#006747] px-6 py-12">
	<div class="max-w-5xl mx-auto grid {clientX < 960 ? 'grid-cols-[1fr]' : 'grid-cols-[1fr_1.5fr]'}">
		<div class="flex flex-col justify-between space-y-8">
			<UsfLogoText {clientX} />
			<div class="text-white text-lg">
				<h1>4202 E. Fowler Avenue</h1>
				<h1>Tampa, FL 33620</h1>
				<h1>813-974-2011</h1>
			</div>
			<div class="flex space-x-2">
				<a href="https://www.youtube.com/channel/UCpIGAmOeSeyCRi7y476-AZg" target="_blank"
					><box-icon
						name="youtube"
						type="logo"
						class="fill-white hover:fill-red-400 transition-all"
					/></a
				>
			</div>
		</div>
		<div
			class="flex justify-between text-xl text-white {clientX < 960 ? 'pt-6' : 'px-16'} {clientX <
			480
				? 'hidden'
				: ''}"
		>
			<ul>
				<li><a href="https://www.usf.edu/about-usf/index.aspx" target="_blank">About USF</a></li>
				<li><a href="https://www.usf.edu/academics/index.aspx" target="_blank">Academics</a></li>
				<li><a href="https://www.usf.edu/admissions/index.aspx" target="_blank">Admissions</a></li>
				<li><a href="https://www.usf.edu/locations/index.aspx" target="_blank">Locations</a></li>
				<li>
					<a href="https://www.usf.edu/campus-life/index.aspx" target="_blank">Campus Life</a>
				</li>
				<li><a href="https://www.usf.edu/research/index.aspx" target="_blank">Research</a></li>
			</ul>
			<ul>
				<li>
					<a href="https://www.usf.edu/about-usf/administrative-units.aspx" target="_blank"
						>Administrative Units</a
					>
				</li>
				<li>
					<a href="https://www.usf.edu/regulations-policies/index.aspx" target="_blank"
						>Regulations & Policies</a
					>
				</li>
				<li><a href="https://www.usf.edu/hr/index.aspx" target="_blank">Human Resources</a></li>
				<li>
					<a href="https://www.usf.edu/work-at-usf/index.aspx" target="_blank">Work at USF</a>
				</li>
				<li>
					<a
						href="https://www.usf.edu/administrative-services/emergency-management/index.aspx"
						target="_blank">Emergency & Safety</a
					>
				</li>
				<li><a href="https://www.usf.edu/title-ix/index.aspx" target="_blank">Title IX</a></li>
			</ul>
			<ul>
				<li><a href="http://health.usf.edu/" target="_blank">USF Health</a></li>
				<li><a href="https://gousfbulls.com/" target="_blank">USF Athletics</a></li>
				<li><a href="https://www.usfalumni.org/" target="_blank">USF Alumni</a></li>
				<li><a href="https://giving.usf.edu/" target="_blank">Support USF</a></li>
				<li><a href="https://www.lib.usf.edu/" target="_blank">USF Libraries</a></li>
				<li><a href="https://www.usf.edu/world/index.aspx" target="_blank">USF World</a></li>
			</ul>
		</div>
	</div>
</footer>

<style>
	box-icon {
		width: 32px;
		height: 32px;
	}

	li {
		padding: 7px 0 7px 0;
	}
</style>
