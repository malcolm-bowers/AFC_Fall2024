const CardContainer = (props) => {
    let {children} = props;
    return (
        <div style={{border: '2px solid black', padding: '20px'}}>
            {children}            
        </div>
    )
}

export default CardContainer