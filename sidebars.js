/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'category',
      label: '🚧 Basics',
      items: ['basics/Getting-Started', 'basics/Usage'],
    },

    {
      type: 'category',
      className: 'section2',
      label: '📒 API References',
      link: {
        type: 'doc',
        id: 'api_references/references',
      },
      items: ['api_references/ThreadsAPI',
        'api_references/login',
        'api_references/getToken',
        'api_references/getCurrentUserID',
        'api_references/getUserIDfromUsername',
        'api_references/getUserIDfromUserNameWithInstagram',
        'api_references/publish',
        'api_references/follow',
        'api_references/unfollow',
        'api_references/like',
        'api_references/unlike',
        'api_references/delete',
        'api_references/repost',
        'api_references/unrepost',
        'api_references/getThreadLikers',
        'api_references/getPostIDFromThreadID',
        'api_references/getPostIDfromURL',
        'api_references/getThreads',
        'api_references/getTimeline',
        'api_references/getUserProfileReplies',
        'api_references/getUserProfileRepliesLoggedIn',
        'api_references/getUserFollowers',
        'api_references/getUserFollowings',
        'api_references/getUserProfile',
        'api_references/getUserProfileThreads',
        'api_references/getUserProfileThreadsLoggedIn',
      ],
    }
  ],

};

module.exports = sidebars;
