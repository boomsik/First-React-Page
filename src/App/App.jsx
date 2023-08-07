import React from "react";
import { Container } from "./App.styled";
import Header from "../Components/Header/Header";
import head from '../data/head.json'
import some from '../data/some.json'
import Manage from "../Components/Manage/Manage";
import manage from '../data/manage.json';
import Work from "../Components/Work/Work";
import work from "../data/work.json"
import {About} from "../Components/About/About";
import about from "../data/about.json";
import {Let} from "../Components/Let/Let";
import video from "../data/video.json";
import {Product} from "../Components/Product/Product"
import product from "../data/product.json"
import { Footer } from "../Components/Footer/Footer";
import footer from "../data/footer.json"


function App() {
  return (
    <Container>
      <Header
        stats={head}
        sign={some.sign}
        sogin={some.sogin}
      />
      <Manage
        title={manage.title}
        text={manage.text}
        btn={manage.btn}
      />
      <Work
        pretitle={work.pretitle}
        green={work.green}
        text={work.text}
      />
      <About
        about={about}
      />

      <Let
        titl={video.titl}
        tex={video.tex}
        button={video.button}
        video={video.video}
      />

     <Product
        preTitle={product.preTitle}
        text={product.text}
        descr={product.descr}
        btn={product.btn}
        image={product.image}
      /> 

      <Footer
      footer={footer}
      />

    </Container>
  );
}

export default App;
