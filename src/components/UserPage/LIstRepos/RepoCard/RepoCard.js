import styles from './RepoCard.module.scss';
import {Link} from "react-router-dom";
import Card from "../../../Card/Card";

const RepoCard = ({repo}) => {

    return (
        <Link to={`/user/${repo.url}`}>
            <Card>
                <div className={styles.name}>
                    {repo.name}
                </div>
                <div className={styles.forksAndStars}>
                    <div className={styles.forks}>
                        <span className={styles.label}>Forks</span>
                        <span className={styles.value}>{repo.forks_count}</span>
                    </div>
                    <div className={styles.stars}>
                        <span className={styles.label}>Stars</span>
                        <span className={styles.value}>{repo.stargazers_count}</span>
                    </div>
                </div>
            </Card>
        </Link>
    )
}

export default RepoCard