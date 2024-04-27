import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Basic/Button',
  component: Button,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    type: {
      control: 'radio',
      options: ['button', 'submit', 'reset'],
      defaultValue: 'button',
    },
    onClick: {
      action: 'clicked',
      defaultValue: null,
      description: '(e: MouseEvent<HTMLButtonElement, MouseEvent>) => void',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    label: 'Download',
  },
};

export const DisabledButton: Story = {
  args: {
    label: 'Generate PDF',
    disabled: true,
  },
};
