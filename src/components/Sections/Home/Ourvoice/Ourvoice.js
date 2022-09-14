import ContainerLeft from './ContainerLeft';
import ContainerRight from './ContainerRight';

function Ourvoice() {
  return (
    <div className="ourvoice">
      <div className="ourvoice__title">
        <h2 className="ourvoice__title-hero">Our voice</h2>
        <h1 className="ourvoice__title-post">Post</h1>
      </div>
      <div className="ourvoice__container">
        <ContainerLeft title="Our voice" post="Post" />
        <ContainerRight />
      </div>
    </div>
  );
}

export default Ourvoice;
