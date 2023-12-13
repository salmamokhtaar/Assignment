import React from 'react';
import {createRoot} from 'react-dom/client';
import "./style.css";
import './Components/Upper'
import Upper from './Components/Upper';
import Footer from './Components/Footer';
import Middle from './Components/Middle';
const root=document.getElementById('root');
createRoot(root).render(
  <div>
     <Upper/>

     <div className='flex '>
     <div>
     <Middle image="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?size=626&ext=jpg&ga=GA1.1.51471150.1675622090&semt=ais" title="Australian Meet" desc="paid delivery" desc2="$23"/>

     <Middle image="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?size=626&ext=jpg&ga=GA1.1.51471150.1675622090&semt=sph"  title="American Pizza"  desc="Free delivery" desc2="$12" />

     <Middle image="https://img.freepik.com/free-photo/plate-salmon-with-quinoa-raw-vegetables_181624-32050.jpg?size=626&ext=jpg&ga=GA1.1.51471150.1675622090&semt=sph" title="Kenyan Meal"  desc="Free delivery" desc2="$1.9" />
     </div>
     <div>
     <Middle image="https://img.freepik.com/free-photo/stir-fry-chicken-zucchini-sweet-peppers-green-onion-with-chopsticks_2829-10785.jpg?size=626&ext=jpg&ga=GA1.1.51471150.1675622090&semt=ais"  title="Chinese Food" desc="Free delivery" desc2="$9.3"/>
     <Middle image="https://img.freepik.com/free-photo/pieces-chicken-fillet-with-mushrooms-stewed-tomato-sauce-with-boiled-broccoli-rice-proper-nutrition-healthy-lifestyle-dietetic-menu-top-view_2829-20020.jpg?size=626&ext=jpg&ga=GA1.1.51471150.1675622090&semt=ais" title="Chinese Food" desc="Free delivery"  desc2="$2.3"/>
     <Middle image="https://img.freepik.com/premium-photo/manchurian-hakka-schezwan-noodles-popular-indochinese-food-served-bowl-selective-focus_466689-34621.jpg?size=626&ext=jpg&ga=GA1.1.51471150.1675622090&semt=ais"  title="Chinese Food" desc="Free delivery"desc2="$4.3"/>
     </div>
     </div>

     <Footer/>
  </div>
   
);