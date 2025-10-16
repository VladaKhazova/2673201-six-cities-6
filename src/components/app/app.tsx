import MainScreen from '../../pages/main-screen/main-screen.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';
import PropertyScreen from '../../pages/property-screen/property-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import NotFound from '../../pages/found-not-screen/found-not-screen.tsx';

type AppScreenProps = {
  offerCardCount: number;
}

function App({ offerCardCount } : AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen offerCardCount={offerCardCount}/>}/>
        <Route path={AppRoute.Login} element={<LoginScreen/>}/>
        <Route
          path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesScreen/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<PropertyScreen/>}/>
        <Route path={AppRoute.NotFound} element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
