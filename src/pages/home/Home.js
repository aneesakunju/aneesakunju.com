
import GithubRepoTable from "../../components/github-repo-table/GithubRepoTable";
import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles.container}>
                <h1>Aneesa Kunju</h1>
                <p>Software Engineer</p>
            <p>
                <a href="https://www.linkedin.com/in/aneesa-k-7309813/">Aneesa Kunju LinkedIn</a>
            </p>
            <h3>
                Projects
            </h3>
            <div className={styles.table}>
                <GithubRepoTable />
            </div>
        </div>
    );
}

export default Home;