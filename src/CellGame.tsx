
interface IProps {
    id: number;
    m: number;
}

const CellGame = (props: IProps) => {
    return (
        <>
            example {props.id} 
        </>
    )
}

export default CellGame;