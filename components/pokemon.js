const pokemon = ({pokemon}) => {
    const {
        id,
        name,
    } = pokemon;
    return (
        <li key={id}>{name}</li>
    )
}

export default pokemon;
