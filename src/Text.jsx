const Text = (props) => {
  console.log(props);

  const { name = "Harpal", age = 20 } = props;

  const getName = () => {
    return `${name} is ${age} years young!`;
  }

  return (
    <span>{getName()}</span>
  )
}

export default Text;