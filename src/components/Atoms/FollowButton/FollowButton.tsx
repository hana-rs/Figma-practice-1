import React, {useState} from 'react';
import styles from './FollowButton.css';
import { style } from '@vanilla-extract/css';



interface FollowButtonProps {
  onClick?: () => void;
  followed?: boolean;
}

export const FollowButton: React.FC<FollowButtonProps> = ({
  onClick,
  followed = false,
}) => { 

    const [hovered, setHovered] = useState(false);
  return (
    <>
        <button className={followed ? styles.FollowedButton : styles.FollowButton
        } onClick={onClick} 
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          {followed ? 
            (hovered ? 'フォロー解除' : 'フォロー中')
            : 'フォロー'}
        </button>
    </>
  );
};
