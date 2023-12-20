import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ActivityType,
  ChannelsType,
  DocumentsType,
  PeoplesType,
  VideosType,
} from './shared/mock-data.type';
import { LoadingService } from './shared/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'salt-tech-test';

  videos!: VideosType[];
  maxVideos = 5;

  activities!: ActivityType[];
  activityIcon!: string;
  maxActivity = 6;

  peoples!: PeoplesType[];
  maxPeoples = 5;

  documents!: DocumentsType[];
  maxDocuments = 5;

  channels!: ChannelsType[];

  loading: boolean = true;

  constructor(
    private http: HttpClient,
    public loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.loadingService.setLoadingState(true);
    this.getVideosData();
    this.getActivityData();
    this.getPeoplesData();
    this.getDocumentsData();
    this.getChannelsData();
    setTimeout(() => {
      this.loadingService.setLoadingState(false);
    }, 2000);
  }

  getVideosData() {
    this.http.get<VideosType[]>('/api/videosdata').subscribe(
      (res) => {
        if (res) {
          this.videos = res.slice(0, this.maxVideos);
        } else {
          this.videos = [];
        }
        this.loading = false;
      },
      (err) => {
        console.error('Error fetching data', err);
        this.videos = [];
        this.loading = false;
      }
    );
  }

  getActivityData() {
    this.http.get<ActivityType[]>('/api/activitydata').subscribe(
      (res) => {
        if (res) {
          this.activities = res.slice(0, this.maxActivity);

          this.activities.forEach((element) => {
            switch (element.status) {
              case 'connected':
                element.activityIcon = 'chat_bubble';
                break;
              case 'video':
                element.activityIcon = 'videocam';
                break;
              case 'document':
                element.activityIcon = 'description';
                break;
              case 'badge':
                element.activityIcon = 'badge';
                break;
              case 'like':
                element.activityIcon = 'favorite';
                break;
              default:
            }
          });
        } else {
          this.activities = [];
        }
      },
      (err) => {
        console.error('Error fetching data', err);
        this.activities = [];
        this.loading = false;
      }
    );
  }

  getPeoplesData() {
    this.http.get<PeoplesType[]>('/api/peoplesdata').subscribe(
      (res) => {
        if (res) {
          this.peoples = res.slice(0, this.maxPeoples);
        } else {
          this.peoples = [];
        }
      },
      (err) => {
        console.error('Error fetching data', err);
        this.peoples = [];
        this.loading = false;
      }
    );
  }

  getDocumentsData() {
    this.http.get<DocumentsType[]>('/api/documentsdata').subscribe(
      (res) => {
        if (res) {
          this.documents = res.slice(0, this.maxDocuments);
        } else {
          this.documents = [];
        }
      },
      (err) => {
        console.error('Error fetching data', err);
        this.documents = [];
        this.loading = false;
      }
    );
  }

  getChannelsData() {
    this.http.get<ChannelsType[]>('/api/channelsdata').subscribe(
      (res) => {
        if (res) {
          this.channels = res;
        } else {
          this.channels = [];
        }
      },
      (err) => {
        console.error('Error fetching data', err);
        this.channels = [];
        this.loading = false;
      }
    );
  }
}
