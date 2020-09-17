import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [{
        title: 'Working for a Community isn\'t easy',
        imageUrl: 'img/3441.svg',
        description: ( <
            >
            Equipping a constantly changing gaming community with the latest social media graphics is a huge effort.There is a simpler solution, especially when equipping esport teams! <
            />
        ),
    },
    {
        title: 'Focus on What Matters',
        imageUrl: 'img/undraw_docusaurus_tree.svg',
        description: ( <
            >
            By using the social graphics library in your own tools, the resources of the design team can be focused on the really important projects! < / >
        ),
    },
    {
        title: 'Modular and Simple',
        imageUrl: 'img/undraw_docusaurus_react.svg',
        description: ( <
            >
            '
            Thanks to the very clear class system, new templates can be created extremely quickly.The system is therefore very flexible!' < /
            >
        ),
    },
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return ( <
        div className = { clsx('col col--4', styles.feature) } > {
            imgUrl && ( <
                div className = "text--center" >
                <
                img className = { styles.featureImage }
                src = { imgUrl }
                alt = { title }
                /> < /
                div >
            )
        } <
        h3 > { title } < /h3> <
        p > { description } < /p> < /
        div >
    );
}

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return ( <
        Layout title = { `SGL | ${siteConfig.title}` }
        description = "Description will go into a meta tag in <head />" >
        <
        header className = { clsx('hero hero--primary', styles.heroBanner) } >
        <
        div className = "container" >
        <
        h1 className = "hero__title" > { siteConfig.title } < /h1> <
        p className = "hero__subtitle" > { siteConfig.tagline } < /p> <
        div className = { styles.buttons } >
        <
        Link className = {
            clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
            )
        }
        to = { useBaseUrl('docs/') } >
        Get Started <
        /Link> < /
        div > <
        /div> < /
        header > <
        main > {
            features && features.length > 0 && ( <
                section className = { styles.features } >
                <
                div className = "container" >
                <
                div className = "row" > {
                    features.map((props, idx) => ( <
                        Feature key = { idx } {...props }
                        />
                    ))
                } <
                /div> < /
                div > <
                /section>
            )
        } <
        /main> < /
        Layout >
    );
}

export default Home;