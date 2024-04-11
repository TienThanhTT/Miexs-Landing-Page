const Pill = ({ text, className, icon }) => {
  return (
    <div className={className + " px-3 py-1 rounded-full flex items-center"}>
      <p>{text}</p>{" "}
      <div>
        <img alt="" src={icon} />
      </div>
    </div>
  );
};
export default Pill;
