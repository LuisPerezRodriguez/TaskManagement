import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
  standalone: false
})
export class SearchBarComponent {
  @Input()
  public placeholder: string = '';

  @Input()
  public value: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @ViewChild('txtSearch')
  public search!: ElementRef<HTMLInputElement>;

  getValue(inputValue: string): void {
    if (inputValue.trim().length === 0) return;

    this.onValue.emit(inputValue);

    // Reset input only if `@ViewChild` is available
    if (this.search) {
      this.search.nativeElement.value = '';
    }
  }
}
