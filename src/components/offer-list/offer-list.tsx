import {MouseEvent} from 'react';
import { useEffect, useState } from 'react';
import OfferCard from '../../components/offer-card/offer-card';

import {OfferCardsType, OfferCardType} from '../../types/offer';
// import {Point} from '../../types/location';
import { Nullable } from 'vitest';
type MainProps = {
  offers: OfferCardsType;
  onListItemHover: (listItemName: string) => void;
}

function OfferList(props: MainProps): JSX.Element {
  const {offers, onListItemHover} = props;

  // const handleListItemHover = (event: MouseEvent<HTMLLIElement>) => {
  //   event.preventDefault();
  //   const id = event.currentTarget.querySelector('[data-id]')?.getAttribute('data-id');
  //   if (typeof id === 'string') {
  //     onListItemHover(id);
  //   }
  // };

  // const [activeOffer, setActiveOffer] = useState<Nullable<OfferCardType>>(null);
  // const handleHover = (offer?: OfferCardType) => {
  //   setActiveOffer(offer || null);
  // };

  // useEffect(() => {
  //   // eslint-disable-next-line
  //   console.log('comonent did update');
  // }, [offers]);

  // useEffect (() => {
  //   // сработает при монтировании
  //   // eslint-disable-next-line
  //   // console.warn(activeOffer);

  //   return () => {
  //     // eslint-disable-next-line
  //     console.log('component will unmount');
  //   };
  // }, []);


  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <li key={offer.id} >

          <OfferCard
            card={offer}
            // handleHover={handleHover}
            className='cities'
            onMouseEnter={onListItemHover}
          />
        </li>
      ))}
    </div>
  );
}

export default OfferList;
