import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Acquire new customers",
  desc: "Acquiring new customers is tough, especially on web3 where a wallet address is the only available representation",
  image: benefitOneImg,
  bullets: [
    {
      title: "Find your customers",
      desc: "Find wallet addresses on the basis of different parameters - NFT collections, total balance, Defi protocols, \
        Average Tx price etc. You can use these filters to find your potential customers.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Connect with potential customers via an on-chain promotion with rewards at the core.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Collect promotion metrics to drive future retention",
      desc: "See real time results of your marketing campaigns and move beyond the post-campaign analysis that helps you improve before your next campaign!",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Engage with your customers",
  desc: "You'll communicate with your consumers in a timely and relevant manner, enabling them to receive information at the moment they need it most",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Reach audiences when they want, where they want",
      desc: "Deliver personalized one-to-one or one-to-many notifications to your customers with a single click - NFT Mints, Liquidation alert, Airdrops, Governanace proposals",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Customers can reach out to you",
      desc: "Your customers can get in touch with you directly on a encrypted secure channel",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Automated notifications",
      desc: "Alert users about trending and relevant activities on your Dapp. Schedule notifications in advance, reaching users when they’re most likely to interact.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
