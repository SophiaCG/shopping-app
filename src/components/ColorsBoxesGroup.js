const ColorsBoxesGroup = ({ data, activeState, toggleActive }) => {
  const renderBoxes = () => {
    return data.map((color, index) => (
      <img
        key={index}
        src={color}
        alt="Image"
        className={`color-box ${index == activeState ? "active" : ""}`}
        onClick={() => toggleActive(index)}
      />
    ));
  };

  return <div className="colors-boxes-group">{renderBoxes()}</div>;
};

export default ColorsBoxesGroup;
