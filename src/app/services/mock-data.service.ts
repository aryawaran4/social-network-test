import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockDataService implements InMemoryDbService {
  createDb() {
    const videosdata = [
      {
        id: 1,
        title: 'How to improve your skills',
        user: 'Waseem Arshad',
        views: 1237489,
      },
      { id: 2, title: 'title2', user: 'John Stainer', views: 2341 },
      { id: 3, title: 'title3', user: 'John Doee', views: 2352 },
      { id: 4, title: 'title4', user: 'Michael Keliph', views: 15637 },
      { id: 5, title: 'title5', user: 'Ahmed Taslim', views: 1986 },
      { id: 6, title: 'title5', user: 'user6', views: 123 },
      { id: 7, title: 'title5', user: 'user7', views: 345 },
    ];

    const activitydata = [
      {
        id: 1,
        user: 'John Stainer',
        status: 'connected',
        statusmessage: 'connected',
        message: 'Well, I am liking on how you capturing the audio',
        uploadDate: 'Wed Dec 20 2023 22:51:59 GMT+0700 (Indochina Time)',
      },
      {
        id: 2,
        user: 'John Stainer',
        status: 'video',
        statusmessage: 'added a new video',
        message: 'Creative people must follow this guideline',
        uploadDate: 'Wed Dec 20 2023 21:51:59 GMT+0700 (Indochina Time)',
      },
      {
        id: 3,
        user: 'John Stainer',
        status: 'document',
        statusmessage: 'shared a new document',
        message: '"How to become an expert"',
        uploadDate: 'Wed Dec 20 2023 22:51:59 GMT+0700 (Indochina Time)',
      },
      {
        id: 4,
        user: 'Arjun',
        status: 'badge',
        statusmessage: 'unlocked a new badge',
        message: 'Social Guru',
        uploadDate: 'Tue Dec 19 2023 22:51:59 GMT+0700 (Indochina Time)',
      },
      {
        id: 5,
        user: 'Michael',
        status: 'video',
        statusmessage: 'uploaded a new video',
        message: 'How do I start a website design project',
        uploadDate: 'Tue Dec 19 2023 22:51:59 GMT+0700 (Indochina Time)',
      },
      {
        id: 6,
        user: 'John Stainer',
        status: 'like',
        statusmessage: 'liked a video',
        message: 'Some marketing tricks',
        uploadDate: 'Wed Dec 20 2023 22:51:59 GMT+0700 (Indochina Time)',
      },
      {
        id: 7,
        user: 'user7',
        status: 'like',
        statusmessage: 'status message 1',
        message: 'message 1',
        uploadDate: 'Wed Dec 20 2023 22:51:59 GMT+0700 (Indochina Time)',
      },
      {
        id: 8,
        user: 'user8',
        status: 'like',
        statusmessage: 'status message 2',
        message: 'message 2',
        uploadDate: 'Wed Dec 20 2023 22:51:59 GMT+0700 (Indochina Time)',
      },
    ];

    const peoplesdata = [
      {
        id: 1,
        job: 'User interface designer',
        user: 'Washeem Arshad',
        views: 1237489,
      },
      { id: 2, job: 'job2', user: 'John Stainer', views: 2341 },
      { id: 3, job: 'job3', user: 'John Doee', views: 2352 },
      { id: 4, job: 'job4', user: 'Michael Keliph', views: 15637 },
      { id: 5, job: 'job5', user: 'Ahmed Taslim', views: 1986 },
      { id: 6, job: 'job5', user: 'user6', views: 123 },
      { id: 7, job: 'job5', user: 'user7', views: 345 },
    ];

    const documentsdata = [
      {
        id: 1,
        title: 'Mobile ui & ux guide 2013',
        author: 'William Malihoja',
        views: 12374289,
      },
      {
        id: 2,
        title: '2013 Marketing trends',
        author: 'John Stainer',
        views: 223341,
      },
      {
        id: 3,
        title: 'How to become an expert?',
        author: 'John Doee',
        views: 233252,
      },
      {
        id: 4,
        title: 'HTML5 and usage',
        author: 'Michael Keliph',
        views: 1325637,
      },
      {
        id: 5,
        title: '2013 Marketing trends',
        author: 'Ahmed Taslim',
        views: 198336,
      },
      { id: 6, title: 'title5', author: 'author6', views: 123 },
      { id: 7, title: 'title5', author: 'author7', views: 345 },
    ];

    const channelsdata = [
      { id: 1, channel: 'Google' },
      { id: 2, channel: 'Dribble' },
      { id: 3, channel: 'Microsoft' },
      { id: 4, channel: 'Behance' },
      { id: 5, channel: 'Weather Channel' },
      { id: 6, channel: 'Genus' },
      { id: 7, channel: 'sMedia' },
      { id: 8, channel: 'Creativeye' },
      { id: 9, channel: 'Khan Studios' },
      { id: 10, channel: 'Yahoo' },
    ];

    return {
      videosdata,
      activitydata,
      peoplesdata,
      documentsdata,
      channelsdata,
    };
  }
}
