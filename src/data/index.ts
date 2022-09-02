import { Tag } from '../contexts/CartContext'
import espresso from '../assets/images/coffe-types/espresso.png'
import american from '../assets/images/coffe-types/american.png'
import creamyEspresso from '../assets/images/coffe-types/creamy-espresso.png'
import icedCoffee from '../assets/images/coffe-types/iced-coffee.png'
import coffeeWithMilk from '../assets/images/coffe-types/coffee-with-milk.png'
import latte from '../assets/images/coffe-types/latte.png'
import capuccino from '../assets/images/coffe-types/capuccino.png'
import macchiato from '../assets/images/coffe-types/macchiato.png'
import mocaccino from '../assets/images/coffe-types/mochaccino.png'
import cuban from '../assets/images/coffe-types/cuban.png'
import hawaiian from '../assets/images/coffe-types/hawaiian.png'
import arabic from '../assets/images/coffe-types/arabic.png'
import irish from '../assets/images/coffe-types/irish.png'

interface Coffee {
  id: number,
  price: number,
  title: string,
  description: string,
  tags: Tag[],
  image: string,
}

export const coffees: Coffee[] = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos.',
    price: 9.90,
    tags: [Tag.TRADITIONAL],
    image: espresso
  },
  {
    id: 2,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional.',
    price: 9.90,
    tags: [Tag.TRADITIONAL],
    image: american
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa.',
    price: 9.90,
    tags: [Tag.TRADITIONAL],
    image: creamyEspresso
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo.',
    price: 9.90,
    tags: [Tag.TRADITIONAL, Tag.ICED],
    image: icedCoffee
  },
  {
    id: 5,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado.',
    price: 9.90,
    tags: [Tag.TRADITIONAL, Tag.WITH_MILK],
    image: coffeeWithMilk
  },
  {
    id: 6,
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa.',
    price: 9.90,
    tags: [Tag.TRADITIONAL, Tag.WITH_MILK],
    image: latte
  },
  {
    id: 7,
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma.',
    price: 9.90,
    tags: [Tag.TRADITIONAL, Tag.WITH_MILK],
    image: capuccino
  },
  {
    id: 8,
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma.',
    price: 9.90,
    tags: [Tag.TRADITIONAL, Tag.WITH_MILK],
    image: macchiato
  },
  {
    id: 9,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma.',
    price: 9.90,
    tags: [Tag.TRADITIONAL, Tag.WITH_MILK],
    image: mocaccino
  },
  {
    id: 10,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café.',
    price: 9.90,
    tags: [Tag.ESPECIAL, Tag.WITH_MILK],
    image: mocaccino
  },
  {
    id: 11,
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã.',
    price: 9.90,
    tags: [Tag.ESPECIAL, Tag.ALCOHOLIC, Tag.ICED],
    image: cuban
  },
  {
    id: 12,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco.',
    price: 9.90,
    tags: [Tag.ESPECIAL],
    image: hawaiian
  },
  {
    id: 13,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias.',
    price: 9.90,
    tags: [Tag.ESPECIAL],
    image: arabic
  },
  {
    id: 14,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly.',
    price: 9.90,
    tags: [Tag.ESPECIAL, Tag.ALCOHOLIC],
    image: irish
  },
]
