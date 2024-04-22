import { Link } from 'react-router-dom';
import { OfferCardType } from '../../types/offer';
import { getCardPath } from '../../helpers/offers';
// import {useState} from 'react';

export interface OfferCardProps {
  card: OfferCardType;
  handleHover: (offer: OfferCardType) => void;
  // className?: string;
}

function OfferCard({ card, handleHover }: OfferCardProps): JSX.Element {
  const handleMauseOn = () => {
    handleHover(card);
  };

  const handleMauseOff = () => {
    handleHover();
  };

  return (
    <Link to={getCardPath(card.id)}>
      <article
        className="cities__card place-card"
        onMouseEnter={handleMauseOn}
        onMouseLeave={handleMauseOff}
      >
        {card.isPremium ? (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        ) : null}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img
              className="place-card__image"
              src={card.previewImage}
              width={260}
              height={200}
              alt="Place image"
            />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">€{card.price}</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <button
              className={`place-card__bookmark-button button ${
                card.isFavorite ? 'place-card__bookmark-button--active' : null
              }`}
              type="button"
            >
              <svg className="place-card__bookmark-icon" width={18} height={19}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: `${card.rating}%` }} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{card.title}</a>
          </h2>
          <p className="place-card__type">{card.type}</p>
        </div>
      </article>
    </Link>
  );
}

export default OfferCard;
