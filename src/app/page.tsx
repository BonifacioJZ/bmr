import About from "./components/about";
import Drinks from "./components/drinks";
import Hero from "./components/hero";
import Products from "./components/products";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Products/>
      <Drinks />
    </div>
  )
}
