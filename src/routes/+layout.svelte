<script>
	import '../app.postcss';
</script>

<div class="flex flex-row flex-nowrap">
	<!-- <div class=" hidden h-screen m-0 p-5 sticky top-0 flex flex-col text-center">
		<img class=" mb-[-.2em]" src="gothic_arch_top.svg" alt="" />
		<div
			class="h-full min-h-[250px] px-14 overflow-y-scroll no-bar flex flex-col flex-nowrap gap-5 bg-[url(gothic_arch_middle.svg)] bg-scroll bg-repeat-y bg-contain"
		>
			<a href="#hc">Historia Architektury</a>
			<a href="#ac">Architektura Klasyczna</a>
			<a href="#hc">Historia Architektury</a>
			<a href="#ac">Architektura Klasyczna</a>
			<a href="#hc">Historia Architektury</a>
			<a href="#ac">Architektura Klasyczna</a>
			<a href="#hc">Historia Architektury</a>
			<a href="#ac">Architektura Klasyczna</a>
			<a href="#hc">Historia Architektury</a>
			<a href="#ac">Architektura Klasyczna</a>
			<a href="#hc">Historia Architektury</a>
			<a href="#ac">Architektura Klasyczna</a>
			<a href="#hc">Historia Architektury</a>
			<a href="#ac">Architektura Klasyczna</a>
		</div>
		<img src="gothic_arch_bottom.svg" alt="" />
	</div> -->
	<div id="hc" class="w-full h-full flex flex-col content-center">
		<slot />
	</div>
</div>
