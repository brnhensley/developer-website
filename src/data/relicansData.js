import React from 'react';
import aaronAvatar from '../images/relicans/aaron-bassett.jpg';
import dannyAvatar from '../images/relicans/danny-ramos.jpg';
import kirkAvatar from '../images/relicans/kirk-haines.jpg';
import laurenAvatar from '../images/relicans/lauren-lee.jpg';

export const teamMembers = [
  {
    name: 'Aaron Bassett',
    pronouns: 'he/him',
    avatar: aaronAvatar,
    bio: (
      <p>
        Aaron Bassett is a recovering senior software engineer turned Principal
        Developer Relations Engineer with{' '}
        <a href="https://newrelic.com" target="_blank" rel="noreferrer">
          New Relic
        </a>
        . He is a developer, public speaker, writer, and mentor; he spends most
        of his time making cool stuff and helping other people make{' '}
        <strong>unbelievably</strong> cool stuff 🔥🦄✨🚀
      </p>
    ),
    socials: [
      {
        name: 'twitter',
        url: 'https://twitter.com/aaronbassett',
      },
      {
        name: 'twitch',
        url: 'https://twitch.tv/aaronbassettdev',
      },
      {
        name: 'github',
        url: 'https://github.com/aaronbassett',
      },
      {
        name: 'instagram',
        url: 'https://www.instagram.com/aaronbassett',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/aaronbassett/',
      },
    ],
  },
  {
    name: 'Danny Ramos',
    pronouns: 'he/him',
    avatar: dannyAvatar,
    bio: (
      <p>
        Danny is a Developer Relations Engineer at New Relic. He graduated
        film/theatre school from the University of Colorado Denver in 2014. He
        then went on to contribute in local productions and was awarded for his
        work alongside the Black Actors Guild - a Denver-based education and
        production company. After becoming a 2019 Comedy Work’s New Faces
        semi-finalist he decided to enroll into the Turing School of Software
        and Design where he learned backend software development.
      </p>
    ),
    socials: [
      {
        name: 'twitter',
        url: 'https://twitter.com/muydanny',
      },
      {
        name: 'twitch',
        url: 'https://twitch.tv/muydanny',
      },
      {
        name: 'instagram',
        url: 'https://instagram.com/muuydanny/',
      },
      {
        name: 'linkedin',
        url: 'https://linkedin.com/in/danny-ramos-j/',
      },
    ],
  },
  {
    name: 'Kirk Haines',
    pronouns: 'he/him',
    avatar: kirkAvatar,
    bio: (
      <p>
        Kirk has been working in software and systems for almost 30 years,
        starting in 1992 with AIX RS/6000 and Linux systems. Despite years of
        experience on the devops side of the aisle, he is a software engineer at
        heart, a long time member of the Ruby community, a short time member of
        the Crystal community, and a strong believer in mentorship and in
        sharing knowledge. He works for New Relic as a Principal Developer
        Advocate these days, and is always looking for new things to learn and
        new ways to help others to succeed.
      </p>
    ),
    socials: [
      {
        name: 'twitter',
        url: 'https://twitter.com/wyhaines',
      },
      {
        name: 'twitch',
        url: 'https://twitch.tv/wyhaines',
      },
      {
        name: 'instagram',
        url: 'https://www.instagram.com/wyhaines',
      },
    ],
  },
  {
    name: 'Lauren Lee',
    pronouns: 'she/her',
    avatar: laurenAvatar,
    bio: (
      <p>
        Lauren is a Sr. Developer Relations Engineer at New Relic. She is an
        English teacher turned empathetic software engineer. A curious optimist
        with a passion for creating accessible content, celebrating unique
        journeys to tech, and helping developers level up their skills. Lauren
        is the host of the{' '}
        <a href="https://webelongpodcast.com" target="_blank" rel="noreferrer">
          We Belong Here podcast
        </a>
        , which aims to interview career changers and folks that are
        diversifying the tech industry.
      </p>
    ),
    socials: [
      {
        name: 'twitter',
        url: 'https://twitter.com/lolocoding',
      },
      {
        name: 'twitch',
        url: 'https://twitch.tv/lolocoding',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/dev-lauren-lee/',
      },
      {
        name: 'instagram',
        url: 'https://instagram.com/lolocoding',
      },
    ],
  },
];
