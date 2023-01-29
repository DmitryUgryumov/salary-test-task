// Core
import { FC, useState } from 'react';
import classnames from 'classnames';

// Styles
// @ts-ignore:next-line
import styles from './HelpDescription.module.scss';

interface PropsTypes {
  description: string;
}

const HelpDescription: FC<PropsTypes> = ({ description }) => {
  const [isShowingDescription, setIsShowingDescription] = useState<boolean>(false);

  const onChangeHelpShowing = () => setIsShowingDescription((prev) => !prev);

  return (
    <div
      className={styles.helpContainer}
      onClick={(event) => {
        event.stopPropagation();
        onChangeHelpShowing();
      }}
    >
      <div className={styles.label}>{isShowingDescription ? 'x' : 'i'}</div>
      <p
        className={classnames(
          styles.description,
          isShowingDescription ? styles.descriptionShow : styles.descriptionHidden
        )}
        onClick={(event) => event.stopPropagation()}
      >
        {description}
      </p>
    </div>
  );
};

export default HelpDescription;
