const UserCard = (props) => {
    let {name, age} = props;
    return (
        <div style={{border: '3px solid black', padding: '10px', marginBottom: '10px'}}>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
        </div>
    )
}

export default UserCard