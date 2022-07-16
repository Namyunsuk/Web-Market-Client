function ChildComponent(props) {
  const { name, age } = props;
  return (
    <div>
      <p>
        My name is {name} and I'm {age} years old now.
      </p>
    </div>
  );
}

export default ChildComponent;
