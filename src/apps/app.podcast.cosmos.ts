import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'app.podcast.cosmos',
  name: '小宇宙',
  groups: [
    {
      key: 1,
      name: '全屏广告-内容推荐',
      desc: 'x掉',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'io.iftech.android.podcast.app.home.index.view.HomeActivity',
          matches: '[vid="clSubscribeBsd"] > [vid="ivCancel"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/25470023',
        },
      ],
    },
  ],
});
