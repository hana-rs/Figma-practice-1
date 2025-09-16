import React, {useState} from 'react';
import styles from './TweetButton.css';
import { style } from '@vanilla-extract/css';



interface TweetButtonProps {
  onClick?: () => void;
}

export const TweetButton: React.FC<TweetButtonProps> = ({
  onClick,
}) => { 

  return (
    <>
        <button className={styles.TweetButton
        } onClick={onClick}>
          ツイートする
        </button>
    </>
  );
};
