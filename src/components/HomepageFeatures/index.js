import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '「简单」',
    Svg: require('@site/static/img/grass.svg').default,
    description: (
      <>
        手把手教你,甚至双击就可以完成
      </>
    ),
  },
  {
    title: '「详细」',
    Svg: require('@site/static/img/crafting-table.svg').default,
    description: (
      <>
        充实的内容,让你新手变大佬
      </>
    ),
  },
  {
    title: '「现代」',
    Svg: require('@site/static/img/furnace.svg').default,
    description: (
      <>
        基于MC社区最新内容编写,保持更新
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
