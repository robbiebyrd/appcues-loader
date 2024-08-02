type ValueType = string | boolean | number;

type UserProperties = {
  [key: string]: ValueType;
};

type EventProperties = {
  [key: string]: ValueType;
};

type GroupProperties = {
  [key: string]: ValueType;
};

export declare interface Appcues
{
  identify: (userId: string, userProperties?: UserProperties) => void;
  group: (userId: string, groupProperties?: GroupProperties) => void;
  page: () => void;
  anonymous: () => void;
  track: (eventName: string, eventProperties?: EventProperties) => void;
  show: (contentId: string) => void;
  clearShow: () => void;
  reset: () => void;
  debug: (enable: boolean) => void;
}
