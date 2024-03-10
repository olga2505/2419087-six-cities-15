// import apartament1 from '../../../markup/img/apartment-01.jpg';
// import apartament2 from '../../../markup/img/apartment-02.jpg';
// import apartament3 from '../../../markup/img/apartment-03.jpg';
// import apartament4 from '../../../markup/img/apartment-04.jpg';

export type cardProps = {
  id: string;
  title: string;
  price: number;
  rating: number;
  img: string;
  type: string;
  isPremium?: boolean;
  isFavorite?: boolean;
}

export const cards: cardProps[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    price: 120,
    img: '../../../markup/img/apartment-01.jpg',
    rating: 80,
    type: 'Apartment',
    isPremium: true,
  },
  {
    id: '2',
    title: 'Wood and stone place',
    price: 80,
    img: '../../../markup/img/room.jpg',
    type: 'Room',
    rating: 80,
    isFavorite: true,
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    price: 132,
    img: '../../../markup/img/apartment-02.jpg',
    rating: 80,
    type: 'Apartment',
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    price: 180,
    img: '../../../markup/img/apartment-03.jpg',
    isPremium: true,
    rating: 80,
    type: 'Apartment',
  },
  {
    id: '5',
    title: 'Wood and stone place',
    price: 180,
    img: '../../../markup/img/apartment-01.jpg',
    rating: 80,
    type: 'Room',
    isFavorite: true,
  },
];
