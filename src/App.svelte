<script>
  import LocomotiveScroll from "locomotive-scroll";
  import Home from "./screens/Home.svelte";
  import About from "./screens/About.svelte";
  import Gallery from "./screens/Gallery.svelte";
  import Services from "./screens/Services.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
  });
</script>

<div data-scroll-container>
  <Home />
  <About />
  <Gallery />
  <Services />
</div>
