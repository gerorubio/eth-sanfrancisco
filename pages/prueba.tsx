import { Default } from 'components/layouts/Default';
import { Prueba } from 'components/templates/prueba';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Default pageName="Home">
      <Prueba />
    </Default>
  );
};

export default HomePage;
