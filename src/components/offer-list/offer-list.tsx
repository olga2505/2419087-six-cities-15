import OfferCard from '../../components/offer-card/offer-card';
import {OfferCardsType} from '../../types/offer';

type MainProps = {
  offers: OfferCardsType;
  onListItemHover: (listItemName: string) => void;
}

function OfferList(props: MainProps): JSX.Element {
  const {offers, onListItemHover} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <li key={offer.id} >

          <OfferCard
            card={offer}
            className='cities'
            onMouseEnter={onListItemHover}
          />
        </li>
      ))}
    </div>
  );
}

export default OfferList;
