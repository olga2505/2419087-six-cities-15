import PlaceCard from '../../components/offer-card/offer-card';

import {OfferCardsType} from '../../types/offer';
type mainProps = {
  offers: OfferCardsType;
}

function OfferList(props: mainProps): JSX.Element {
  const {offers} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard card={offer} key={offer.id} />
      ))}
    </div>
  );
}

export default OfferList;
