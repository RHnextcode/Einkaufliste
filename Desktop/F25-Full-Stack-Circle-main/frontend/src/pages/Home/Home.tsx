import logo from '../../assets/images/logo.svg';
import Button from '../../components/Button/Button';
import MaturityRating from '../../components/MaturityRating';
import type { MaturityRatingProps } from '../../components/MaturityRating/MaturityRating.types';


import styles from './Home.module.css';
import { useNavigate } from 'react-router';

import { useConfig } from '../../hooks';
import { useEffect, useState } from 'react';

interface User {
  name: string;
  email: string;
}

const Home = () => {
  const [users, setUsers] = useState<User[]>([
    {
      name: 'Fabio',
      email: 'test@fabio.com',
    },
    {
      name: 'Perial',
      email: 'dperial44@gmail.com',
    },
    {
      name: 'Christheo',
      email: 'christheo.guipo@gmail.com',
    },
    {
      name: 'Marina',
      email: 'maryna.seidel@yahoo.de',
    },
    {
      name: 'Lyubomir',
      email: 'lakovski@gmail.com',
    },
    {
    name: 'Roghaye',
    email: 'hosseiniroghaye4@gmail.com'
    }
    // add your name
  ]);
  const [loadingUsers, setLoadingUsers] = useState<boolean>(false);
  const { config, loadingConfig } = useConfig();

  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  useEffect(() => {
    const fetchUsers = async () => {
      if (loadingConfig || loadingUsers) return;

      const response = await fetch(`${config?.apiUrl}/users`);
      const data = await response.json();
      setUsers(data.users);
      setLoadingUsers(false);
    };

    fetchUsers();
  }, [config, loadingConfig, loadingUsers]);
 
  // Array aller Ratings
  const ratings: MaturityRatingProps["rating"][] = [
    "TV-Y","TV-Y7","G","TV-G","PG","TV-PG","PG-13","TV-14","R","TV-MA","NC-17"
  ];
  return (
    <div className={styles.home}>
      <img src={logo} alt="Rediflix Logo" width={500} />
       {/* Große Box mit allen kleinen Kästchen */}
      {/* Große Box mit allen kleinen Kästchen */}
      <div className={styles.ratingsBox}>
        {ratings.map(rating => (
          <MaturityRating key={rating} rating={rating} />
        ))}
      </div>
      <div>
        {loadingUsers ? (
          <div>Redi team</div>
        ) : (
          <>
            {users.length > 0 ? (
              users.map((user) => <div key={user.name}>{user.email}</div>)
            ) : (
              <div>Finally</div>
            )}
          </>
        )}
      </div>
      <Button onClick={handleSignIn}>Sign In</Button>
    </div>
  );
};

export default Home;
