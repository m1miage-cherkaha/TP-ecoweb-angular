import { ChangeDetectionStrategy, Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class FooterComponent implements OnInit {
  ngOnInit(): void {
    this.FooterView();
  }
  private FooterView(): void {
    console.log('Analytics: Footer viewed');
    console.log('Analytics: Footer timestamp:', new Date().toISOString());
  }
}
