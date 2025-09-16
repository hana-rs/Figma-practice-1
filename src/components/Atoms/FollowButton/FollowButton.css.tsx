import { style } from '@vanilla-extract/css';

export const FollowButton = style({
  width: '592px',
  height: '104px',
  borderRadius: '64px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '48px',
  fontWeight: 'bold',
  color: '#FFFFFF',
  backgroundColor: '#ff0079',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',

  ':hover': {
    backgroundColor: '#D7005A',
    boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.15)',
  },

  ':active': {
    backgroundColor: '#C30058',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
});

export const FollowedButton = style({
    width: '592px',
  height: '104px',
  borderRadius: '64px',
  cursor: 'pointer',
  fontSize: '48px',
  fontWeight: 'bold',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    backgroundColor: '#FFFFFF',
  color: '#ff0079',
  border: '5px solid #ff0079',
  boxShadow: 'none',

  selectors: {
    '&:hover': {
      backgroundColor: '#ff0079',
      color: '#FFFFFF',
    },
    '&:active': {
    backgroundColor: '#C30058',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  },

  
  });

export default {
  FollowButton,
  FollowedButton,
};
