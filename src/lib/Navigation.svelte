<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let shown = writable(false);
	let bar;
	let windowH: number;

	// let pNames = [
	// 	'Starożytna Grecja',
	// 	'Starożytny Rzym',
	// 	'Wczesne chrześcijaństwo',
	// 	'Bizancjum',
	// 	'Romanizm',
	// 	'Gotyk',
	// 	'Renesans',
	// 	'Barok',
	// 	'Rokoko',
	// 	'Klasycyzm'
	// ];
	let headers: any[] = [];

	onMount(() => {
		windowH = window.screen.height;
		headers = Array.from(document.querySelectorAll('.header'));
		document.addEventListener('scroll', () => {
			$shown = window.scrollY > windowH;
			console.log(window.scrollY);
			bar.scrollBy({ left: window.scrollY });
		});
		bar.addEventListener('scroll', () => {
			window.scrollBy({ top: bar.scrollX });
		});
	});
</script>

<div
	bind:this={bar}
	class="{$shown
		? 'flex'
		: 'hidden'} flex-row overflow-scroll no-bar gap-8 whitespace-nowrap w-full h-10 bottom-0 left-0 fixed z-10 bg-white border-t border-black"
>
	{#each headers as h}
		<a href={'#' + h.id}>{h.innerText}</a>
	{/each}
</div>
