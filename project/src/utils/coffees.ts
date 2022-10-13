
import { v4 as uuidv4 } from 'uuid'

export interface CoffeeProps {
    id: string;
    imgSrc: string;
    name: string;
    tags: string[];
    description: string;
    price: number;
}

export const coffees: CoffeeProps[] = [
    // EXPRESSO TRADICINAL
    {
        id: uuidv4(),
        imgSrc:  'Expresso',
        name: 'Expresso Tradicional',
        tags: ['tradicional'],
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
    },
    // EXPRESSO AMERICANO
    {
        id: uuidv4(),
        imgSrc:  'Americano',
        name: 'Expresso Americano',
        tags: ['tradicional'],
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
    },
    // EXPRESSO CREMOSO
    {
        id: uuidv4(),
        imgSrc:  'Expresso-Cremoso',
        name: 'Expresso Cremoso',
        tags: ['tradicional'],
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90,
    },
    //EXPRESSO GELADO
    {
        id: uuidv4(),
        imgSrc:  'Cafe-Gelado',
        name: 'Expresso Gelado',
        tags: ['tradicional', 'gelado'],
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.90,
    },
    // CAFE COM LEITE
    {
        id: uuidv4(),
        imgSrc:  'Cafe-com-Leite',
        name: 'Café com Leite',
        tags: ['tradicional', 'com leite'],
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90,
    },
    // CAFE LATTE
    {
        id: uuidv4(),
        imgSrc:  'Latte',
        name: 'Latte',
        tags: ['tradicional', 'com leite'],
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90,
    },
    // CAPUCCINO
    {
        id: uuidv4(),
        imgSrc:  'Capuccino',
        name: 'Capuccino',
        tags: ['tradicional', 'com leite'],
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90,
    },
    // MACCHIATO
    {
        id: uuidv4(),
        imgSrc:  'Macchiato',
        name: 'Macchiato',
        tags: ['tradicional', 'com leite'],
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90,
    },
     // MOCACCINO
     {
        id: uuidv4(),
        imgSrc:  'Mocaccino',
        name: 'Mocaccino',
        tags: ['tradicional', 'com leite'],
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.90,
    },
     // Chocolate Quente
     {
        id: uuidv4(),
        imgSrc:  'Chocolate-Quente',
        name: 'Chocolate Quente',
        tags: ['especial', 'com leite'],
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90,
    },
     // Cubano
     {
        id: uuidv4(),
        imgSrc:  'Cubano',
        name: 'Cubano',
        tags: ['especial', 'alcoólico', 'gelado'],
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90,
    },
     // Havaiano
     {
        id: uuidv4(),
        imgSrc:  'Havaiano',
        name: 'Havaiano',
        tags: ['especial'],
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.90,
    },
    // Árabe
    {
        id: uuidv4(),
        imgSrc:  'Arabe',
        name: 'Árabe',
        tags: ['especial'],
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90,
    },
    // Irlandês
    {
        id: uuidv4(),
        imgSrc:  'Irlandes',
        name: 'Irlandês',
        tags: ['especial', 'alcoólico'],
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.90,
    },
]