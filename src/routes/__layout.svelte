<script context="module">
	export const load = ({ url }) => {
		const currentRoute = url.pathname;
		return {
			props: {
				currentRoute
			}
		};
	};
</script>

<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import '../styles/markdown-dark.css';
	import { fade } from 'svelte/transition';
	export let currentRoute;
</script>

{#key currentRoute}
	<main in:fade={{ duration: 500, delay: 100 }} out:fade={{ duration: 100 }}>
		<slot />
	</main>
{/key}
<Footer />
