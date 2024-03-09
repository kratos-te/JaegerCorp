import { ReactNode } from "react"

export interface RaidType {
    _id?: string,
    name: string,
    discordID?: string,
    raidURL: string,
    raiderNumber: number,
    requirement: SELECT[],
    creater: string,
    member?: string[]
  }

  export interface SELECT {
    title : string,
    select : boolean
  }

  export interface UserType {
    wallet: string,
    twitterName: string,
    twitterImageURI: string,
    twitterEmail: string,
  }