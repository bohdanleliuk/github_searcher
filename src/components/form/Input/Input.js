import styles from './Input.module.scss';
import {Spinner} from "react-bootstrap";

const Input = (props) => {

    return (
        <div className={styles.Input}>
            <input
                autoFocus
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                spellCheck="false"
            />
            {props.loading && <Spinner className={styles.spinner} animation="border" variant="primary"/>}
        </div>
    )
}

export default Input;