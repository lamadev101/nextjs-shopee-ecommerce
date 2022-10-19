import { Banner, Featured, Products, Hero, Notice } from '../components'
import { featuredProducts, newArraivalProducts } from './api/data';

export default function Home() {
  var featuredTitle = "Featured Products";
  var newArraivalTitle = "New Arraival Products";

  return (
    <div>
      <main>
        <Hero/>
        <Featured/>
        <Products title={featuredTitle} products={featuredProducts}/>
        <Notice/>
        <Products title={newArraivalTitle} products={newArraivalProducts} />
        <Banner/>
      </main>
    </div>
  )
}
