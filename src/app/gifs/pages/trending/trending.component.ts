import { AfterViewInit, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifsService } from '../../services/gifs.service';
import { CommonModule } from '@angular/common';
import { ScrollStateService } from '../../services/scroll-state.service';


@Component({
  selector: 'app-trending',
  imports: [CommonModule],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css'
})
export default class TrendingComponent implements AfterViewInit{

  gifService = inject(GifsService);
  scrollStateService = inject(ScrollStateService);

  scrollDivRef = viewChild<ElementRef>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if(!scrollDiv) return

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }

  onScroll(event:Event){
    const scrollDiv= this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    this.scrollStateService.trendingScrollState.set(scrollTop);

    if(isAtBottom){
      this.gifService.loadTrendingGifs();
    }
  }
}
