import ContainerLeft from './ContainerLeft';
import ContainerRight from './ContainerRight';

function Ourvoice({ title, post }) {
  return (
    <div className="ourvoice">
      <div className="ourvoice__title">
        <h2 className="ourvoice__title-hero">{title}</h2>
        <h1 className="ourvoice__title-post">{post}</h1>
      </div>
      <div className="ourvoice__container">
        <ContainerLeft title={title} />
        <ContainerRight />
      </div>
    </div>
  );
}

export default Ourvoice;
