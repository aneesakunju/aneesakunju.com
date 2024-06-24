
import { FlashOffOutlined } from "@mui/icons-material";
import ScrollSpy from "react-ui-scrollspy";
import GithubRepoTable from "../../components/github-repo-table/GithubRepoTable";
import styles from "./Home.module.css";
import { useEffect } from "react";
import { CONTACT_ID, HOME, HOME_ID, PROJECT_TABLE_ID } from "../../App";
import Contact from "../../components/contact/Contact";
import { Button, Typography } from "@mui/material";

function Home({ setSelectedItem, handleScrollTo }) {
    useEffect(() => {
        const hash = window.location.hash.split('#')[1];
        if (hash) {
            handleScrollTo(hash.toLocaleLowerCase(), 'instant');
        }
    }, []);
    return (
        <div className={styles.container}>
            <ScrollSpy scrollThrottle={100} useBoxMethod={FlashOffOutlined} onUpdateCallback={(id) => { setSelectedItem(id) }}>
                <div id={HOME_ID}>
                    <h4 style={{ color: 'lightgrey' }}>HEY THERE,</h4>
                    <h1>I'm Aneesa Kunju.</h1>
                    <h3 style={{ color: 'lightgrey' }}>
                        I am a Software Engineer with over 6 years experience developing in Java, Spring, Kotlin, SQL and React.

                    </h3>
                    <p>
                        <Button
                            variant="contained"
                            sx={{ textTransform: 'none' }}
                            onClick={() => { window.open('https://www.linkedin.com/in/aneesa-k-7309813/') }}
                        >
                            LinkedIn
                        </Button>
                    </p>
                    <div className={styles.spacer} />
                </div>
                <div id={PROJECT_TABLE_ID}>
                
                <hr className={styles.customHr}/>
                <div className={styles.spacer} />
    
                <Typography variant="h5" gutterBottom>Projects</Typography>
                <GithubRepoTable sectionId={"github-table"} />
                <div className={styles.spacer} />
                </div>
                <div id={CONTACT_ID}>
                <hr className={styles.customHr}/>
                <div className={styles.spacer} />
                <Contact sectionId={"inner-contact-form"} />
                </div>
            </ScrollSpy>
        </div>
    );
}

export default Home;