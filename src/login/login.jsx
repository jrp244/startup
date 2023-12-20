import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';


export function Login({ userName, authState, onAuthChange }) {
  const [imageUrl, setImageUrl] = React.useState('https://staticg.sportskeeda.com/editor/2021/05/f16e7-16221890235678-800.jpg');
  return (
    <main className='container-fluid bg-secondary text-center'>
      <img src={imageUrl} alt="Website Banner" />
      <div>
        {authState !== AuthState.Unknown && <h1>Welcome to the Pokemon Website</h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}
