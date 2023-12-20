export interface VideosType {
  id: number;
  title: string;
  user: string;
  views: number;
}

export interface ActivityType {
  activityIcon: string;
  id: number;
  user: string;
  status: string;
  statusmessage: string;
  message: string;
  uploadDate: any;
}

export interface PeoplesType {
  id: number;
  job: string;
  user: string;
  views: number;
}

export interface DocumentsType {
  id: number;
  title: string;
  author: string;
  views: number;
}

export interface ChannelsType {
  id: number;
  channel: string;
}
