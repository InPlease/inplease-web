const useOpenExpansionPanel = () => {
  const activatedElements = (titleid, contentid) => {
    const tmp = document.getElementById(titleid);
    const cont = document.getElementById(contentid);
    tmp?.classList.toggle('active');
    cont?.classList.toggle('active');
  };

  return [activatedElements];
};

export default useOpenExpansionPanel;
