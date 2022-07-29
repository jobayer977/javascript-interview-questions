<script>
	import Header from '../components/Header.svelte';
	import '../app.css';
	import '../styles/blog.css';
	import '../styles/markdown-dark.css';
	import '../styles/markdown-light.css';
	import Footer from '../components/Footer.svelte';
</script>

<Header />
<div class="container">
	<!-- <div class="markdown-body markdown-body--dark"> -->
	<slot />
	<!-- </div> -->
</div>
<Footer />
