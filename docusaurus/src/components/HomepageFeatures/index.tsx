import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import CodeIconSvg from '@site/static/img/codeIcon.svg';
import ReloadIconSvg from '@site/static/img/reloadIcon.svg';
import ReplayIconSvg from '@site/static/img/replay.svg';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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

export const CodeIcon = () => {
  return (
    <div className="Icon" style={{ width: 24, height: 24, color: 'red' }}>
      <CodeIconSvg />
    </div>
  );
};

export const ReloadIcon = () => {
  return (
    <div
      className="Icon"
      style={{ width: '1em', height: '1em', fill: 'black' }}
    >
      <ReplayIconSvg />
    </div>
  );
};

export const CodeIconLink = ({ to }) => {
  return (
    <Link className="" to={to}>
      <CodeIcon />
    </Link>
  );
};

export const ReloadIconButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
      }}
    >
      <ReloadIcon />
    </button>
  );
};

export const LinkContainer = ({ to, content }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>{content}</div>
      <CodeIconLink to={to} />
    </div>
  );
};

export const CenteredContainer = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
};
