import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  sideBarShow = true;

  videoItems = [
    {
      name: 'Video one',
      src: 'http://static.videogular.com/assets/videos/videogular.mp4',
      type: 'video/mp4'
    },
    {
      name: 'Video two',
      src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
      type: 'video/mp4'
    },
    {
      name: 'Video three',
      src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
      type: 'video/mp4'
    }
  ];

  allVideo:any = [
    {
      id: 1,
      title:'Section 1: Welcome',
      totalTime:'8min',
      video:'2/2',
      children: [{
        index1: '0',
        text:'1. Welcome to the class',
        src: 'http://static.videogular.com/assets/videos/videogular.mp4',
        time:'7min'
      },{
        index1: '1',
        text:'2. Grab the pdf Guide',
        src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
        time:'1min'
      }]
    },
    {
      id: 2,
      title:'Section 2: Installing And Exploring Node.js',
      totalTime:'48min',
      video:'2/2',
      children: [{
        index1: '2',
        text:'3. Installing Node.js',
        src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
        time:'6min'
      },{
        index1: '0',
        text:'4. What is Node.js',
        src: 'http://static.videogular.com/assets/videos/videogular.mp4',
        time:'16min'
      },{
        index1: '1',
        text:'5. Why should i use node.js is Node.js',
        src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
        time:'16min'
      },{
        index1: '2',
        text:'6. first node.js Script',
        src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
        time:'10min'
      }]
    },
    {
      id: 3,
      title:'Section 3: Installing And Exploring Node.js',
      totalTime:'48min',
      video:'2/2',
      children: [{
        index1: '0',
        text:'7. Installing Node.js',
        src: 'http://static.videogular.com/assets/videos/videogular.mp4',
        time:'6min'
      },{
        index1: '1',
        text:'8. What is Node.js',
        src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
        time:'16min'
      },{
        index1: '2',
        text:'9. Why should i use node.js is Node.js',
        src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
        time:'16min'
      },{
        index1: '0',
        text:'10. first node.js Script',
        src: 'http://static.videogular.com/assets/videos/videogular.mp4',
        time:'10min'
      }]
    },
    {
      id: 4,
      title:'Section 4: Installing And Exploring Node.js',
      totalTime:'48min',
      video:'2/2',
      children: [{
        index1: '1',
        text:'11. Installing Node.js',
        src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
        time:'6min'
      },{
        index1: '2',
        text:'12. What is Node.js',
        src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
        time:'16min'
      },{
        index1: '0',
        text:'13. Why should i use node.js is Node.js',
        src: 'http://static.videogular.com/assets/videos/videogular.mp4',
        time:'16min'
      },{
        index1: '1',
        text:'14. first node.js Script',
        src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
        time:'10min'
      }]
    },
    {
      id: 5,
      title:'Section 5: Installing And Exploring Node.js',
      totalTime:'48min',
      video:'2/2',
      children: [{
        text:'15. Installing Node.js',
        time:'6min'
      },{
        text:'16. What is Node.js',
        time:'16min'
      },{
        text:'17. Why should i use node.js is Node.js',
        time:'16min'
      },{
        text:'18. first node.js Script',
        time:'10min'
      }]
    }
  ];

  sideToggle() {
    this.sideBarShow = false;
  }

  activeIndex = 0;
  currentVideo = this.videoItems[this.activeIndex];
  data: any;

  constructor() { }

  ngOnInit(): void { }

  videoPlayerInit(data: any) {
    console.log(data);
    
    this.data = data;
    this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  nextVideo() {
    this.activeIndex++;
    if (this.activeIndex === this.videoItems.length) {
      this.activeIndex = 0;
    }
    this.currentVideo = this.videoItems[this.activeIndex];
  }

  initVdo() {
    this.data.play();
  }

  startPlaylistVdo(item: any, index: number) {
    this.activeIndex = index;
    this.currentVideo = item;
  }

  forword(data:any) {
    data.api.currentTime = data.api.currentTime + 10;
    this.data = data.api;
    this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }
  rewind(data:any) {    
    data.api.currentTime = data.api.currentTime - 10;
    this.data = data.api;
    this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }
}
