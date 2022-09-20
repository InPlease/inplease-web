import Dropdown from './Dropdown';

function OurSkills({ title, post, hiddenTitle }) {
  return (
    <div className="ourskills">
      <div className="ourskills__title">
        <h2 className="ourskills__title-hidden">{hiddenTitle}</h2>
        <h2 className="ourskills__title-title">{title}</h2>
        <h1 className="ourskills__title-post">{post}</h1>
      </div>
      <div className="ourskills__container">
        <Dropdown />
      </div>
    </div>
  );
}

export default OurSkills;
