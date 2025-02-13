import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent implements AfterViewChecked {
  playButton: HTMLElement | null = null;
  videoContainer: HTMLElement | null = null;
  video: HTMLVideoElement | null = null;
  ngAfterViewChecked(): void {
    this.playButton = document.getElementById('play-button');
    this.videoContainer = document.querySelector('.video_container');
    this.video = document.getElementById(
      'background_video'
    ) as HTMLVideoElement;
    this.playButton?.addEventListener('click', () => {
      if (this.videoContainer) {
        this.videoContainer.classList.add('fullscreen');
      }
      if (this.video) {
        this.video.muted = false;
        this.video.play();
        if (this.playButton) {
          this.playButton.style.display = 'none';
        }
      }
    });
  }
}
