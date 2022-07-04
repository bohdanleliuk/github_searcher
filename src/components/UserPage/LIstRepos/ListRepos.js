import RepoCard from "./RepoCard/RepoCard";
import styles from './ListRepos.module.scss'

const ListRepos = ({repos}) => {

    return (
        <div className={styles.ListRepos}>
            {repos?.map((repo) => {
                return (
                    <RepoCard key={repo.id} repo={repo}/>
                )
            })}
        </div>
    )
}

export default ListRepos