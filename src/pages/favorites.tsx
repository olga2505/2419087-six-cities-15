// import FavoritesEmpty from '../components/favorites-empty/favorites-empty';
import FavoritesList from '../components/favorites-list/favorites-list';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';


function Favorites(): JSX.Element {
  return (
    <div className="page">
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
