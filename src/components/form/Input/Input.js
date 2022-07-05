import styles from './Input.module.scss';
// import {Spinner} from "react-bootstrap";
import Spinner from "./Spinner/Spinner";

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
            {props.loading &&
                <span className={styles.spinner}>
                    <Spinner/>
                </span>
            }
        </div>
    )
}

export default Input;