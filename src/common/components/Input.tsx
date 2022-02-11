import styles from './Input.module.css';
interface Props {
    onChangedText: (value: string) => void;
}

export const Input = (props: Props) => {
    return <input className={styles.input} type="number" onChange={(e) => props.onChangedText(e.target.value)} />;
};