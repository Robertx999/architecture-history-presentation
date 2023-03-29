<script lang="ts" local>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export let src: string;
	let frame: HTMLDivElement;
	let frameH = writable(0),
		imgH = writable(0),
		offsetTop = writable(0);

	onMount(() => {
		offsetTop.update((e) => frame.getBoundingClientRect().top);
		document.addEventListener('scroll', () => {
			offsetTop.update((e) => frame.getBoundingClientRect().top);
		});
	});
</script>

<div bind:this={frame} bind:clientHeight={$frameH} class="relative mt-40 overflow-hidden">
	<div
		class="absolute bg-cover -z-10 left-0 top-0 w-full h-screen bg-center bg-no-repeat"
		bind:clientHeight={$imgH}
		style={'transform:translateY(' +
			(-$imgH / 2 + $frameH / 2 - $offsetTop) / 2 +
			'px); background-image:url(' +
			src +
			')'}
	/>
	<h1 id="ac" class="py-32 px-[20%] select-none">
		<slot />
	</h1>
</div>
