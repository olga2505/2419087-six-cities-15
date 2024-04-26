import {useRef, useEffect} from 'react';
import classNames from 'classnames';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {LocationType, Point} from '../../types/location';
import {OfferCardType} from '../../types/offer';
import useMap from './../../hooks/use-map';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';

type propsMap = {
  classWrapper?: string;
  city: LocationType;
  points: Point[];
  selectedPoint?: OfferCardType | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 55],
  iconAnchor: [20, 55]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 55],
  iconAnchor: [20, 55]
});

function Map({ classWrapper, city, points, selectedPoint }: propsMap): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return (
    <section className={
      classNames(
        'map',
        {[`${classWrapper}__map`]: classWrapper }
      )
    }

    ref={mapRef}
    />
  );
}

export default Map;
