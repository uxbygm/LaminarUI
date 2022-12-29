import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PeopleCard } from './PeopleCard';

const handleClickCard = (e) => {
  e.preventDefault();
  console.log('The Profile Card was clicked.');
}

const handleClickDelete = (e) => {
  e.preventDefault();
  console.log('The Delete Button was clicked.');
}


export default {
  title: 'LaminarUI/PeopleCard',
  component: PeopleCard,
  argTypes: {
    name: { control: 'text' },
    title: { control: 'text' },
    headshot: { control: 'text' }
  },
} as ComponentMeta<typeof PeopleCard>;

const Template: ComponentStory<typeof PeopleCard> = (args) => (<PeopleCard {...args} />);

export const Primary = Template.bind({});
Primary.args = {
  onClickCard: handleClickCard,
  onClickDelete: handleClickDelete,
  name: 'Gabe Meacham',
  title: 'UI Monster Guru',
  headshot: 'https://media.licdn.com/dms/image/C4E03AQHtMrmyC3-2Ow/profile-displayphoto-shrink_800_800/0/1517737150476?e=2147483647&v=beta&t=UmOj7but0I0XW9lMk70yyTXEbggjn_63urpvYjeaffk'
};

