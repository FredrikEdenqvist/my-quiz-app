import styles from './Dropdown.module.css';
interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: string[];
  }

export const Dropdown = (props: Props) => {
    return (
        <select onChange={props.onChange} className={styles.select}>
        {props.options.map((option, index) => (
            <option key={index}>{option}</option>
        ))}
        </select>
    );
};