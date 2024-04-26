import {MouseEvent} from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { OfferCardType } from '../../types/offer';
import { getCardPath } from '../../helpers/offers';

export interface OfferCardProps {
  card: OfferCardType;
  className?: string;
  onMouseEnter?: (listItemName: string) => void;
}

function OfferCard({ card, className = '', onMouseEnter }: OfferCardProps): JSX.Element {
  const handleListItemHover = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    const id = event.currentTarget.getAttribute('data-id');

    if (typeof id === 'string') {
      onMouseEnter(id);
    }
  };

  return (
    <article
      className={
        classNames({
          [`${className}__card`]: className,
          'place-card': true,
        })
      }
      onMouseEnter={handleListItemHover}
      data-id={card.id}
    >
      {card.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className={
        classNames({
          [`${className}__image-wrapper`]: className,
          'place-card__image-wrapper': true,
        })
      }
      >
        <Link to={getCardPath(card.id)}>
          <img
            className="place-card__image"
            src={card.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={
        classNames({
          [`${className}__card-info`]: className,
          'place-card__info': true,
        })
      }
      >
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

  );
}

export default OfferCard;
