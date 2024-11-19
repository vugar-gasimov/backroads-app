// Tours images
import TibetImg from './images/tour-1.jpeg';
import JavaImg from './images/tour-2.jpeg';
import HKongImg from './images/tour-3.jpeg';
import KenyaImg from './images/tour-4.jpeg';
import AlaskaImg from './images/tour-5.webp';
import GreeceImg from './images/tour-6.webp';

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: ' home',
  },
  {
    id: 2,
    href: '#about',
    text: ' about',
  },
  {
    id: 3,
    href: '#services',
    text: ' services',
  },
  {
    id: 4,
    href: '#tours',
    text: ' tours',
  },
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: ' fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: ' fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: ' fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Save more while traveling with our exclusive deals and budget-friendly options.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Experience breathtaking trails and explore nature like never before on endless hikes.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Relax in unparalleled comfort with our carefully curated travel accommodations.',
  },
];

export const tours = [
  {
    id: 1,
    image: TibetImg,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: 'Embark on a thrilling journey through the serene landscapes of Tibet, where breathtaking views and cultural treasures await.',
    location: 'china',
    duration: '6 days',
    price: 'from $2100',
  },
  {
    id: 2,
    image: JavaImg,
    date: 'october 1th, 2020',
    title: 'best of java',
    info: 'Discover Indonesia’s hidden gems as you traverse lush forests, ancient temples, and vibrant markets in Java.',
    location: 'indonesia',
    duration: '11 days',
    price: 'from $1400',
  },
  {
    id: 3,
    image: HKongImg,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    info: 'Dive into the dynamic city life of Hong Kong, from bustling streets to stunning skylines and tranquil harbors.',
    location: 'hong kong',
    duration: '8 days',
    price: 'from $5000',
  },
  {
    id: 4,
    image: KenyaImg,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    info: 'Experience the thrill of a safari adventure in Kenya, with up-close encounters with wildlife and stunning landscapes.',
    location: 'kenya',
    duration: '20 days',
    price: 'from $3300',
  },
  {
    id: 5,
    image: AlaskaImg,
    date: 'June 10th, 2021',
    title: 'Alaskan Expedition',
    info: 'Journey through Alaska’s untamed wilderness, where glaciers and wildlife create unforgettable memories.',
    location: 'USA',
    duration: '12 days',
    price: 'from $2800',
  },
  {
    id: 6,
    image: GreeceImg,
    date: 'July 18th, 2021',
    title: 'Santorini Escape',
    info: 'Relax on Santorini’s iconic white beaches, soak in picturesque sunsets, and enjoy the charm of Greek island life.',
    location: 'Greece',
    duration: '7 days',
    price: 'from $3200',
  },
];
