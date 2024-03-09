import { BookDarkIcon, BookLightIcon, BuyDarkIcon, BuyLightIcon, RaidsDarkIcon, RaidsLightIcon } from "./components/SvgIcon";

export const SOL_PRICE_API =
  "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd";

export const SOLANA_RPC = process.env.NEXT_PUBLIC_SOLANA_RPC ?? "";

export const API_URL = process.env.API_URL || "http://localhost:3000"
export const MENU_BAR = [
  {
    title: "Raids",
    link: "/raids",
    lightIcon: RaidsLightIcon,
    darkIcon: RaidsDarkIcon,
  },
  {
    title: "Book A Raid",
    link: "/book",
    lightIcon: BookLightIcon,
    darkIcon: BookDarkIcon,
  },
  {
    title: "Buy $JAEGER",
    link: "/buy",
    lightIcon: BuyLightIcon,
    darkIcon: BuyDarkIcon,
  }
]

export const SELECT_LIST = [
  {
    title: "Like",
    select: true
  },
  {
    title: "Repost",
    select: false
  },
  {
    title: "Quote Repost",
    select: false
  },
  {
    title: "Bookmark",
    select: false
  },
  {
    title: "Comment",
    select: false
  },
  {
    title: "Follow",
    select: false
  },
  {
    title: "Notis On",
    select: false
  }
]