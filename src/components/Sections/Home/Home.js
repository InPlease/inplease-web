import OurSkills from './Ourskills/Ourskills';
import Ourvoice from './Ourvoice/Ourvoice';
import Title from './Title/Title';

function Home() {
  return (
    <div>
      <Title
        title1={'We not just design the '}
        title2={'future'}
        title3={', we create it'}
      />
      <Ourvoice title={'Our voice'} post={'Post'} />
      <OurSkills
        title={'Our Services'}
        post={'Services'}
        hiddenTitle={'Our Skills'}
      />
    </div>
  );
}

export default Home;
