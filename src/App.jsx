import "./App.css";
import { Carousel } from "./ui-kit/Carousel";
import { NavBar } from "./components/NavBar";
import { SubNavBar } from "./components/SubNavBar";
import {
  FIRST_CARD_ITEMS,
  FIRST_CAROUSEL,
  FIRST_SLIDER,
  FOOTER_DATA,
  FOOTER_METADATA,
  FOURTH_CARD_ITEMS,
  SECONDS_SLIDER,
  SECOND_CARD_ITEMS,
  THIRD_CARD_ITEMS,
  THIRD_SLIDER,
} from "./pageData";
import { Link } from "./ui-kit/Link";
import { Cards } from "./components/Cards";
import { Slider } from "./ui-kit/Slider";
import { ProductCard } from "./components/ProductCard";
import { MetaData } from "./components/MetaData";
import { Footer } from "./components/Footer";

function App() {
  const getBanners = (data) =>
    data.map(({ name, link, imageUrl }) => (
      <Link href={link}>
        <img
          src={import.meta.env.BASE_URL + imageUrl}
          alt={name}
          width="100%"
        />
      </Link>
    ));

  const getSlider = (items) =>
    items.map((item) => <ProductCard key={item.link} item={item} />);

  return (
    <>
      <header>
        <NavBar />
        <SubNavBar />
      </header>
      <main className="main-page" id="main-content">
        <section>
          <Carousel items={getBanners(FIRST_CAROUSEL)} />
        </section>
        <section>
          <img
            width="100%"
            src={import.meta.env.BASE_URL + "images/banner1.webp"}
            alt="10% instant discount on SBI card"
          />
        </section>
        <section>
          <Cards items={FIRST_CARD_ITEMS} />
        </section>
        <section>
          <Slider
            header={FIRST_SLIDER.header}
            items={getSlider(FIRST_SLIDER.items)}
          />
        </section>
        <section>
          <Cards items={SECOND_CARD_ITEMS} />
        </section>
        <section>
          <Slider
            listHeader={SECONDS_SLIDER.listHeader}
            items={getSlider(SECONDS_SLIDER.items)}
          />
        </section>
        <section>
          <Cards items={THIRD_CARD_ITEMS} itemInRow={4} />
        </section>
        <section>
          <Slider
            items={getSlider(THIRD_SLIDER.items)}
            header={THIRD_SLIDER.header}
          />
        </section>
        <section>
          <Cards items={FOURTH_CARD_ITEMS} itemInRow={4} />
        </section>
      </main>
      <footer>
        <section>
          <MetaData data={FOOTER_METADATA} />
        </section>
        <section>
          <Footer data={FOOTER_DATA} />
        </section>
      </footer>
    </>
  );
}

export default App;
