import styles from './button.module.css'

export enum ButtonType {
    default = 'button',
    reset = 'reset',
    sumbit = 'submit',
}

interface ButtonProps {
    text: string;
    onClick: () => void;
    type: ButtonType;
}

export const Button = ({text, onClick, type }: ButtonProps) => {
    //в макете пока нет кнопок с другими типами, но закладываю такую возможность
    const buttonStyle = () => {
        if (type === ButtonType.sumbit) return `${styles.button} ${styles.submitButton}`;
        if (type === ButtonType.reset) return `${styles.button} ${styles.resetButton}`;
        else return `${styles.button} ${styles.defaultButton}`;}
    return (
        <button className={buttonStyle()} type={type} onClick={onClick}>{text}</button>
    )
}