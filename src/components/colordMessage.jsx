export const ColordMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontsize: "20ox"
  };
  return <p style={contentStyle}>{children}</p>;
};
