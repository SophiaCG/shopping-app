const ColorsCirclesGroup = ({ data, activeState, toggleActive }) => {
  const renderBoxes = () => {
    return data.map((color, index) => (
      <img
        key={index}
        src={color}
        alt="Image"
        className={`color-circle ${index == activeState ? "active" : ""}`}
        onClick={() => toggleActive(index)}
      />
    ));
  };

  return <div className="colors-circles-group">{renderBoxes()}</div>;
};

export default ColorsCirclesGroup;
