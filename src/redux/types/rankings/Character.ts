import MEMB_STAT from '../user/MEMB_STAT';
import AccountCharacter from './AccountCharacter';
import GuildMember from './GuildMember';

export default interface Character {
  Name: string;
  cLevel: number;
  Class: number;
  Experience: number;
  Money: number;
  LevelUpPoint: number;
  Strength: number;
  Dexterity: number;
  Vitality: number;
  Energy: number;
  Leadership: number;
  MapNumber: number;
  MapPosX: number;
  MapPosY: number;
  PkCount: number;
  PkLevel: number;
  PkTime: number;
  CtlCode: number;
  Resets: number;
  GrandResets: number;
  BanPost: number;
  IsMarried: number;
  MarryName: string | null;
  QuestNumber: number;
  QuestMonsters: number;
  QuestInCurse: number;
  QuestInProgress: number;
  IsVip: number;
  VipExpirationTime: number;
  SkyEventWins: number;
  BanPostTime: number | null;
  BanCharTime: number | null;
  BanChatTime: number | null;
  TotalTime: number;
  HOFWins: number;
  status: MEMB_STAT;
  account: AccountCharacter;
  guild_memb: GuildMember;
  [name: string]: any;
}
