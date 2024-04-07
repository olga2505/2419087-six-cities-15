// import FavoritesEmpty from '../components/favorites-empty/favorites-empty';
import { Helmet } from 'react-helmet-async';
import FavoritesList from '../../components/favorites-list/favorites-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';


function Favorites(): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 городов. Избранное</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoritesList />
          {/* <FavoritesEmpty /> */}
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default Favorites;
