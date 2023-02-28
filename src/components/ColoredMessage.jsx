export const ColoredMessage = (props) => {
  // destructuring assignment
  const { color, message, children } = props;

  const style = {
    // shorthand notation
    color,
    fontSize: "20px",
  };

  return (
    <p style={style}>
      {message}
      {children}
    </p>
  );
};
