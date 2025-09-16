import type { Meta, StoryObj } from '@storybook/react';
import { TweetButton } from './TweetButton';

const meta: Meta<typeof TweetButton> = {
  component: TweetButton,
  parameters: {
    backgrounds: {
      // default: ,
    },
  },
  
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof TweetButton>;

export const Default: Story = {
  name: 'default',
  render: () => {
    return (
      <div style={{ paddingTop: '80px' }}>
        <TweetButton
        />
      </div>
    );
  },
};
