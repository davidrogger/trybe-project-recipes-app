import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

const profileBtns = ['Done', 'Favorite', 'Logout'];

function Profile() {
  const history = useHistory();
  // linhas para passar no cypress
  const getEmail = JSON.parse(localStorage.getItem('user') || '{}');
  const emailFromLocalStorage = (getEmail.email);

  const handleCLick = (path) => {
    const logoutHandle = path === 'logout';
    if (logoutHandle) localStorage.clear();
    const finalPath = logoutHandle ? '/' : `/${path}-recipes`;
    history.push(finalPath);
  };

  return (
    <Container>

      <Header title="Profile" enableSearch={ false } />

      <Container data-testid="profile-email" className="mt-5 text-center">
        {emailFromLocalStorage}
      </Container>

      <Container className="d-flex flex-column mt-5">
        { profileBtns.map((buttonTitle) => {
          const lowerText = buttonTitle.toLocaleLowerCase();
          return (
            <Button
              key={ buttonTitle }
              className="w-40 m-1"
              data-testid={ `profile-${lowerText}-btn` }
              onClick={ () => handleCLick(lowerText) }
            >
              { `${buttonTitle} Recipes` }
            </Button>
          );
        }) }

      </Container>

      <Footer />

    </Container>
  );
}

export default Profile;
