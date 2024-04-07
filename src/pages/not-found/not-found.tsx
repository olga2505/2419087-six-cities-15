import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray">
      <Helmet>
        <title>6 городов. Страница не найдена</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--404">
        <div className="container">
          <h1>404 Not Found</h1>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
