import dropdown from './Schemas/dropdown';
import useOpenExpansionPanel from '../../../../hooks/useOpenExpansionPanel';
function Dropdown() {
  const [isShowContent] = useOpenExpansionPanel();
  return dropdown.map((x) => (
    <div className="ourskills__container-dropdown" key={x.id}>
      <div className="ourskills__container-dropdown-title" id={x.id}>
        <p className="ourskills__container-dropdown-title-header">{x.title}</p>
        <p
          className="ourskills__container-dropdown-title-button"
          onClick={() => isShowContent(x.id, x.idContent)}
        >
          +
        </p>
      </div>
      <div className="ourskills__container-dropdown-content" id={x.idContent}>
        <p className="ourskills__container-dropdown-content-text">
          {x.content}
        </p>
      </div>
    </div>
  ));
}

export default Dropdown;
