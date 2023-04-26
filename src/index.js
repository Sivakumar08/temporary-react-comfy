import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));


// dev-8eenv2zkkwf7uhhf.us.auth0.com
// vKat03G6r5IRBRoYmCj3J5EzFzaESamm
// ee7I71U-bFkb5iuJ7Ad7ELyVuxmtuFNZYecbnoXqwICw1D8NYySWiI87OBBECcci

root.render( 
   <Auth0Provider  domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
      authorizationParams={{
         redirect_uri:window.location.origin
      }}>
<UserProvider>
    <ProductsProvider>
   <FilterProvider>
   <CartProvider>
   <App/>
   </CartProvider>
   </FilterProvider>
</ProductsProvider>
</UserProvider>
</Auth0Provider>
);
