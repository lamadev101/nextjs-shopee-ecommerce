import f1 from '../../public/img/features/f1.png';
import f2 from '../../public/img/features/f2.png';
import f3 from '../../public/img/features/f3.png';
import f4 from '../../public/img/features/f4.png';
import f5 from '../../public/img/features/f5.png';
import f6 from '../../public/img/features/f6.png';

import fp1 from '../../public/img/products/f1.jpg';
import fp2 from '../../public/img/products/f2.jpg';
import fp3 from '../../public/img/products/f3.jpg';
import fp4 from '../../public/img/products/f4.jpg';
import fp5 from '../../public/img/products/f5.jpg';
import fp6 from '../../public/img/products/f6.jpg';
import fp7 from '../../public/img/products/f7.jpg';
import fp8 from '../../public/img/products/f8.jpg';

import np1 from '../../public/img/products/n1.jpg';
import np2 from '../../public/img/products/n2.jpg';
import np3 from '../../public/img/products/n3.jpg';
import np4 from '../../public/img/products/n4.jpg';
import np5 from '../../public/img/products/n5.jpg';
import np6 from '../../public/img/products/n6.jpg';
import np7 from '../../public/img/products/n7.jpg';
import np8 from '../../public/img/products/n8.jpg';

import b1 from '../../public/img/blog/b1.jpg';
import b2 from '../../public/img/blog/b2.jpg';
import b3 from '../../public/img/blog/b3.jpg';
import b4 from '../../public/img/blog/b4.jpg';
import b5 from '../../public/img/blog/b5.jpg';
import b6 from '../../public/img/blog/b6.jpg';
import b7 from '../../public/img/blog/b7.jpg';


export const features = [
  {
    id: 1,
    img: f1,
    text: "Free Shipping",
    color: '#f2f7c5',
  },
  {
    id: 2,
    img: f2,
    text: "Online Order",
    color: '#95e90c59',
  },
  {
    id: 3,
    img: f3,
    text: "Save Money",
    color: '#cc43e459',
  },
  {
    id: 4,
    img: f4,
    text: "Promotions",
    color: '#2abbff59',
  },
  {
    id: 5,
    img: f5,
    text: "Happy Sell",
    color: '#db6b2f59',
  },
  {
    id: 6,
    img: f6,
    text: "F24/7 Support",
    color: '#e6c20e79',
  },
]

export const featuredProducts =[
  {
    id:1,
    name:'Cartoon Astronaut T-Shirt1',
    img: fp1,
    price: 20.98,
    color: 'yellow',
  },
  {
    id:2,
    name:'Cartoon Astronaut T-Shirt2',
    img: fp2,
    price: 30.00,
    color: 'green',
  },
  {
    id:3,
    name:'Cartoon Astronaut T-Shirt3',
    img: fp3,
    price: 15.99,
    color: 'red',
  },
  {
    id:4,
    name:'Cartoon Astronaut T-Shirt4',
    img: fp4,
    price: 35.83,
    color: 'white',
  },
  {
    id:5,
    name:'Cartoon Astronaut T-Shirt5',
    img: fp5,
    price: 24.34,
    color: 'black',
  },
  {
    id:6,
    name:'Cartoon Astronaut T-Shirt6',
    img: fp6,
    price: 12.83,
    color: 'blue',
  },
  {
    id:7,
    name:'Cartoon Astronaut T-Shirt7',
    img: fp7,
    price: 50.00,
    color: 'gray',
  },
  {
    id:8,
    name:'Cartoon Astronaut T-Shirt8',
    img: fp8,
    price: 60.32,
    color: 'gray',
  },
];

export const newArraivalProducts =[
  {
    id:9,
    name:'Cartoon Astronaut T-Shirt1',
    img: np1,
    price: 20.98,
  },
  {
    id:10,
    name:'Cartoon Astronaut T-Shirt2',
    img: np2,
    price: 30.00,
  },
  {
    id:11,
    name:'Cartoon Astronaut T-Shirt3',
    img: np3,
    price: 15.99,
  },
  {
    id:12,
    name:'Cartoon Astronaut T-Shirt4',
    img: np4,
    price: 35.83,
  },
  {
    id:13,
    name:'Cartoon Astronaut T-Shirt5',
    img: np5,
    price: 24.34,
  },
  {
    id:14,
    name:'Cartoon Astronaut T-Shirt6',
    img: np6,
    price: 12.83,
  },
  {
    id:15,
    name:'Cartoon Astronaut T-Shirt7',
    img: np7,
    price: 50.00,
  },
  {
    id:16,
    name:'Cartoon Astronaut T-Shirt8',
    img: np8,
    price: 60.32,
  },
];

export const blogs = [
  {
    id: 1, 
    title: "How to Style a Quiff",
    img: b1,
    author: "John Mac",
  },
  {
    id: 2, 
    title: "Must-Have Skater Girl Items",
    img: b2,
    author: "John Mac",
  },
  {
    id: 3, 
    title: "Tun-Way Inspired Trends",
    img: b3,
    author: "John Mac",
  },
  {
    id: 4, 
    title: "AW20 Mensware Trends",
    img: b4,
    author: "John Mac",
  },
  {
    id: 5, 
    title: "lorem30",
    img: b5,
    author: "John Mac",
  },
  {
    id: 6, 
    title: "lorem30",
    img: b6,
    author: "John Mac",
  },
  {
    id: 7, 
    title: "lorem30",
    img: b7,
    author: "John Mac",
  },
]

export const registerInput = [
  {
      name: 'fullname',
      type: 'text',
      placeholder: 'Full Name',
  },
  {
      name: 'username',
      type: 'text',
      placeholder: 'Username',
  },
  {
      name: 'email',
      type: 'email',
      placeholder: 'Email Address',
  },
  {
      name: 'phone',
      type: 'number',
      placeholder: 'Phone Number',
  },
  {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
  },
  {
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
  }
]

export const loginInput = [
  {
      name: 'username',
      type: 'text',
      placeholder: 'Username',
  },,
  {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
  },
]