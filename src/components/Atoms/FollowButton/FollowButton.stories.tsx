import type { Meta, StoryObj } from '@storybook/react';
import { FollowButton } from './FollowButton';

const meta: Meta<typeof FollowButton> = {
  component: FollowButton,
  parameters: {
    backgrounds: {
      // default: ,
    },
  },
  args: {
    followed: false,
  },
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof FollowButton>;

export const Default: Story = {
  name: 'default',
  render: (args) => {
    return (
      <div style={{ paddingTop: '80px' }}>
        <FollowButton
          {...args}
        />
      </div>
    );
  },
};
