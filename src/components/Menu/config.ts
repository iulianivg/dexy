import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://bitswap.finance',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://bitswap.finance/farms',
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: 'https://bitswap.finance/staking',
  },
  {
    label: 'Referral',
    icon: 'GroupsIcon',
    href: 'https://bitswap.finance/referrals',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://DarkBunnyFinance.com/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: 'https://DarkBunnyFinance.com/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://DarkBunnyFinance.com/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://DarkBunnyFinance.com/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://DarkBunnyFinance.com/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://DarkBunnyFinance.com/ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     {
  //       label: 'Voting',
  //       href: 'https://voting.DarkBunnyFinance.com',
  //     },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://docs.DarkBunnyFinance.com',
  //     },
  //     {
  //       label: 'Blog',
  //       href: 'https://pancakeswap.medium.com',
  //     },
  //   ],
  // },
]

export default config
