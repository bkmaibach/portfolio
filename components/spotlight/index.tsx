import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import Fade from 'react-reveal/Fade';
import styles from "./spotlight.module.scss";
import utilStyles from "styles/utils.module.scss";
import { cn } from "lib/cn";

function ContentHOC(edgeStyle, children) {
  const innerDiv = <div className={styles.content}>{children}</div>
  switch (edgeStyle) {
    case styles.left:
      return <Fade ssrReveal left>
        {innerDiv}
      </Fade>
    case styles.right:
      return <Fade ssrReveal right>
      {innerDiv}
    </Fade>
    case styles.bottom:
      return <Fade ssrReveal bottom>
      {innerDiv}
    </Fade>
  }
}

export default function Spotlight({
  edgeStyle,
  accentStyle,
  id,
  nextId,
  imgSrc,
  children,
}: {
  edgeStyle: string;
  accentStyle: string;
  id: string;
  nextId: string;
  imgSrc: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn(styles.spotlight, edgeStyle, accentStyle)}>
      <Parallax
        className={cn(utilStyles.image, utilStyles.fit, styles.main)}
        y={[-75, 75]}
        tagOuter="span"
      >
        <div className={utilStyles.overlay}>
          <Image src={imgSrc} alt="" layout="fill" objectFit="cover" />
        </div>
      </Parallax>
      {ContentHOC(edgeStyle, children)}
      <a
        href={`#${nextId}`}
        className={cn(styles.gotoNext, utilStyles.gotoNext)}
      >
        Next
      </a>
    </section>
  );
}
