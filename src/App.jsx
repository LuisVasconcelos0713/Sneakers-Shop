import { useState } from "react";
import "./App.css";
import "./NavBar.css";
import "./footer.css";
import "./Modal.css";
import Section from "./components/Section";
import ListItem from "./components/ListItem";
import NavBar from "./components/NavBar";
import Footer1 from "./components/Footer";
import Modal from "./components/modal";

function App() {
  const [count, setCount] = useState(0);

  const [shoppingCart, setShoppingCart] = useState([]);

  const productsListData = [
    {
      id: 1,
      href: "https://br.puma.com/tenis-puma-180-perf-394798-01.html",
      src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/394798/02/sv01/fnd/BRA/w/1000/h/1000/fmt/png",
      alt: "PUMA-180 ",
      coment: "White's like snow!",
    },
    {
      id: 2,
      href: "https://www.sportlinestore.com/tenis-nike-sb-dunk-low-strangelove-valentines-day--ct2552-800",
      src: "https://cdn.awsli.com.br/600x1000/1167/1167039/produto/227473969/2-1jcf2mgbft.jpg",
      alt: "Nike StrangeLove ",
      coment: "Celebrate the Valentine's Day!",
    },
    {
      id: 3,
      href: "https://www.artwalk.com.br/tenis-adidas-adi2000-x-feminino-hq677-3-001/p",
      src: "https://artwalk.vteximg.com.br/arquivos/ids/420628-1000-1000/HQ677-3-001-1.jpg",
      alt: "Adidas AD2000 ",
      coment: "2000's like!",
    },
    {
      id: 4,
      href: "https://sportshowroom.com.br/jordan-4-retro-black-cat-cu1110-010",
      src: "https://imagedelivery.net/2DfovxNet9Syc-4xYpcsGg/cf41bbf3-152e-434d-a55e-1fcaab071500/product",
      alt: "Jordan 4 BlackCat ",
      coment: "Dark like a night!",
    },
  ];
  const productsListDataSneakers = [
    {
      href: "https://br.puma.com/tenis-puma-180-perf-394798-01.html",
      src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/394798/02/sv01/fnd/BRA/w/1000/h/1000/fmt/png",
      alt: " PUMA-180 White",
      coment: "White's like snow!",
    },
    {
      href: "https://www.sportlinestore.com/tenis-nike-sb-dunk-low-strangelove-valentines-day--ct2552-800",
      src: "https://cdn.awsli.com.br/600x1000/1167/1167039/produto/227473969/2-1jcf2mgbft.jpg",
      alt: " Nike StrangeLove ",
      coment: "Celebrate the Valentine's Day!",
    },
    {
      href: "https://www.artwalk.com.br/tenis-adidas-adi2000-x-feminino-hq677-3-001/p",
      src: "https://artwalk.vteximg.com.br/arquivos/ids/420628-1000-1000/HQ677-3-001-1.jpg",
      alt: "Adidas AD2000",
      coment: "2000's like!",
    },
    {
      href: "https://sportshowroom.com.br/jordan-4-retro-black-cat-cu1110-010",
      src: "https://imagedelivery.net/2DfovxNet9Syc-4xYpcsGg/cf41bbf3-152e-434d-a55e-1fcaab071500/product",
      alt: "Jordan 4 BlackCat",
      coment: "Dark like a night!",
    },
    {
      href: "https://br.puma.com/tenis-puma-180-perf-394798-01.html",
      src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/394798/02/sv01/fnd/BRA/w/1000/h/1000/fmt/png",
      alt: " PUMA-180 White",
      coment: "White's like snow!",
    },
    {
      href: "https://www.sportlinestore.com/tenis-nike-sb-dunk-low-strangelove-valentines-day--ct2552-800",
      src: "https://cdn.awsli.com.br/600x1000/1167/1167039/produto/227473969/2-1jcf2mgbft.jpg",
      alt: " Nike StrangeLove ",
      coment: "Celebrate the Valentine's Day!",
    },
    {
      href: "https://www.artwalk.com.br/tenis-adidas-adi2000-x-feminino-hq677-3-001/p",
      src: "https://artwalk.vteximg.com.br/arquivos/ids/420628-1000-1000/HQ677-3-001-1.jpg",
      alt: "Adidas AD2000",
      coment: "2000's like!",
    },
    {
      href: "https://sportshowroom.com.br/jordan-4-retro-black-cat-cu1110-010",
      src: "https://imagedelivery.net/2DfovxNet9Syc-4xYpcsGg/cf41bbf3-152e-434d-a55e-1fcaab071500/product",
      alt: "Jordan 4 BlackCat",
      coment: "Dark like a night!",
    },
    {
      href: "https://br.puma.com/tenis-puma-180-perf-394798-01.html",
      src: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/394798/02/sv01/fnd/BRA/w/1000/h/1000/fmt/png",
      alt: " PUMA-180 White",
      coment: "White's like snow!",
    },
    {
      href: "https://www.sportlinestore.com/tenis-nike-sb-dunk-low-strangelove-valentines-day--ct2552-800",
      src: "https://cdn.awsli.com.br/600x1000/1167/1167039/produto/227473969/2-1jcf2mgbft.jpg",
      alt: " Nike StrangeLove ",
      coment: "Celebrate the Valentine's Day!",
    },
    {
      href: "https://www.artwalk.com.br/tenis-adidas-adi2000-x-feminino-hq677-3-001/p",
      src: "https://artwalk.vteximg.com.br/arquivos/ids/420628-1000-1000/HQ677-3-001-1.jpg",
      alt: "Adidas AD2000",
      coment: "2000's like!",
    },
    {
      href: "https://sportshowroom.com.br/jordan-4-retro-black-cat-cu1110-010",
      src: "https://imagedelivery.net/2DfovxNet9Syc-4xYpcsGg/cf41bbf3-152e-434d-a55e-1fcaab071500/product",
      alt: "Jordan 4 BlackCat",
      coment: "Dark like a night!",
    },
  ];

  function handleClick() {
    setCount(count + 1);
    <NavBar tico={"olá"}>
      <p>oláaa</p>
    </NavBar>;
  }

  return (
    <div>
      <NavBar itemcount={count} />
      <Modal></Modal>
      <Modal>olá</Modal>
      <Modal>olá</Modal>
      <Section
        classdiv="container"
        class="products-list2"
        maintext="New realeses"
        nextbutonetext="Our new realeses!"
        linhasec1="linhasec1css"
      >
        {productsListData
          .map((item) => {
            return (
              <div>
                <ListItem
                  href={item.href}
                  imgsrc={item.src}
                  imgalt={item.alt}
                  coment={item.coment}
                  onClick={handleClick}
                />
              </div>
            );
          })
          .reverse()}
      </Section>
      <Section
        classdiv="container"
        class="products-list"
        maintext="Products"
        nextbutonetext="Our main products!"
        linhasec2="linhasec2css"
      >
        {productsListDataSneakers.map((item) => {
          return (
            <div>
              <ListItem
                href={item.href}
                imgsrc={item.src}
                imgalt={item.alt}
                coment={item.coment}
                onClick={handleClick}
              />
            </div>
          );
        })}
      </Section>
      <Footer1></Footer1>
    </div>
  );
}

export default App;
