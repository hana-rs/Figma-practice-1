import React from 'react';
import styles from './NewLavel.css';
import { style } from '@vanilla-extract/css';



interface NewLabelProps {
}

export const NewLabel: React.FC<NewLabelProps> = ({

}) => { 

  return (
    <>
        <div className={styles.NewLabel}>
          New
        </div>
    </>
  );
};
