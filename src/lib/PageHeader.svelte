<script lang="ts" private>
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

<div bind:this={frame} bind:clientHeight={$frameH} class="relative overflow-hidden">
	<div
		class="absolute bg-cover -z-10 left-0 top-0 w-full h-screen bg-center bg-no-repeat"
		bind:clientHeight={$imgH}
		style={'transform:translateY(' +
			(-$imgH / 2 + $frameH / 2 - $offsetTop) / 2 +
			'px); background-image:url(' +
			src +
			')'}
	/>
	<div class="h-screen min-w-min flex flex-col justify-center items-center">
		<div class="max-w-4xl w-3/5 min-w-min overflow-hidden">
			<h1
				class="h-52 px-10 select-none text-white backdrop-invert backdrop-brightness-[5] backdrop-opacity-[.6]"
			>
				Historia Architektury
			</h1>
			<h3
				class="px-10 pb-5 text-white backdrop-invert backdrop-brightness-[5] backdrop-opacity-[.6]"
			>
				(XII w. p.n.e. - XIX w. n.e.; łac. architectura, architector - „buduję”) <br /><br />
				Robert P., Szymon M.; 4cc1; 2022/2023
			</h3>
		</div>
	</div>
</div>
