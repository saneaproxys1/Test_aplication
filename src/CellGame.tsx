import styles from '../src/CellGame.module.css';

interface IProps {
    id: number;
    m: number;
}

const CellGame = (props: IProps) => {
    return (
        <>
            <div className={styles.container}>
                {props.id}
            </div>
        </>
    )
}

export default CellGame;