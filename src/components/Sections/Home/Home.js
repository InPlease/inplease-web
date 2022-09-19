import OurSkills from './Ourskills/Ourskills';
import Ourvoice from './Ourvoice/Ourvoice';

function Home() {
  return (
    <div>
      <Ourvoice title={'Our voice'} post={'Post'} />
      <OurSkills title={'Our Skills'} post={'Services'} />
    </div>
  );
}

export default Home;
