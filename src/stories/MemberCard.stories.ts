import {
  Meta,
  StoryObj,
  applicationConfig,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';
import { MemberCardComponent } from 'src/app/member-card/member-card.component';
import { IonicModule } from '@ionic/angular';
import { importProvidersFrom } from '@angular/core';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<MemberCardComponent> = {
  title: 'Project/MemberCardComponent',
  component: MemberCardComponent,
  tags: ['autodocs'],
  render: (args: MemberCardComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: { onClick: { action: 'clicked' } },
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom([IonicModule.forRoot()])],
    }),
    moduleMetadata({
      declarations: [MemberCardComponent],
    }),
    componentWrapperDecorator((story) => `<ion-app>${story}</ion-app>`),
  ],
};

export default meta;
type Story = StoryObj<MemberCardComponent>;

// More on writing stories 
// with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    memberInfo: {
      name: 'Aaron Saunders',
      title: 'CEO',
      bio: 'Amazing Experience',
      companyName: 'Clearly Innovative Inc',
      linkedIn: 'Clearly Innovative Inc',
      twitter: 'https://twitter.com/aaronksaunders',
      website: 'www.clearlyinnovative.com',
    },
  },
};

export const MissingSocial: Story = {
  args: {
    memberInfo: {
      name: 'Aaron Saunders',
      title: 'CEO',
      companyName: 'Clearly Innovative Inc',
      bio: 'No news',
      website: 'www.clearlyinnovative.com',
    },
  },
};

export const NoCompany: Story = {
  args: {
    memberInfo: {
      name: 'Denise Saunders',
      title: 'COO',
      bio: 'No news - Missing company name here....',
      website: 'www.clearlyinnovative.com',
    },
  },
};
