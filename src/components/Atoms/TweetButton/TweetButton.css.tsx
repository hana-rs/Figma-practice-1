import { style } from '@vanilla-extract/css';

export const TweetButton = style({
  width: '512px',
  height: '104px',
  borderRadius: '64px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '36px',
  fontWeight: 'bold',
  color: '#263238',
  backgroundColor: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',

    ':hover': {
    backgroundColor: '#f0f0f0',
    boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.15)',
  },
});

export default {
    TweetButton,
};
