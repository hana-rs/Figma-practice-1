import type { Meta, StoryObj } from '@storybook/react';
import { NewLabel } from './NewLabel';

const meta: Meta<typeof NewLabel> = {
  component: NewLabel,
  parameters: {
    backgrounds: {
      // default: ,
    },
  },
  
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof NewLabel>;

export const Default: Story = {
  name: 'default',
  render: () => {
    return (
      <div style={{ paddingTop: '80px' }}>
        <NewLabel
        />
      </div>
    );
  },
};
