import Cards from './Cards';

function ContainerRight() {
  return (
    <div className="ourvoice__container-right">
      <Cards
        title="Let's talk about react"
        content="A short tour of react to a technology that changed my life and continues to change the industry."
        readers="300 readers"
        information="Read a little more"
      />
      <Cards
        title="Elegan code in react"
        content="There are many ways to write code in react, but do you know how to do it elegantly?."
        readers="300 readers"
        information="Read a little more"
      />
      <Cards
        title="Tips from a junior"
        content="Some tips from a junior frontend developer that you may not have known and probably need."
        readers="300 readers"
        information="Read a little more"
      />
    </div>
  );
}

export default ContainerRight;
