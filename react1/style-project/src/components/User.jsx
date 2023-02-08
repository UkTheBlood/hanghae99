const User = ({ item, reMoveFunction }) => {
  return (
    <div key={item.id} className="component-style">
      {item.age} - {item.name}
      <button onClick={() => reMoveFunction(item.id)}>X</button>
    </div>
  )
}

export default User;