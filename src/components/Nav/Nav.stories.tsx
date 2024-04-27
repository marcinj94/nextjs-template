import type { Meta, StoryObj } from '@storybook/react';
import { Nav } from '.';

const meta: Meta<typeof Nav> = {
  title: 'Components/Basic/Nav',
  component: Nav,
  // 👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Nav>;

// eslint-disable-next-line object-curly-newline
export const FirstVersion: Story = {};
