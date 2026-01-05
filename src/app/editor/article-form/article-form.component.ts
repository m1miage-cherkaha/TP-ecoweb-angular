import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  Signal,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Article, ErrorResponse } from 'src/app/shared/models';
import { UpsertArticleBodyRequest } from 'src/app/shared/services';
import { FormErrorsComponent } from 'src/app/shared/ui/form-errors';
import { TypedFormGroup } from 'src/app/shared/utils';
import { TagListSelectComponent } from './tag-list-select/tag-list-select.component';

@Component({
    selector: 'app-article-form',
    imports: [ReactiveFormsModule, TagListSelectComponent, FormErrorsComponent],
    templateUrl: './article-form.component.html',
    styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent {
  readonly articleForm: TypedFormGroup<UpsertArticleBodyRequest> = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
    }),
    body: new FormControl('', {
      nonNullable: true,
    }),
    description: new FormControl('', {
      nonNullable: true,
    }),
    tagList: new FormControl<string[]>([], {
      nonNullable: true,
    }),
  });
  @Input({ required: true }) errorResponse!: Signal<ErrorResponse | null>;
  @Input() set article(value: Article) {
    if (value.title) {
      setTimeout(() => {
        this.articleForm.controls.title.setValue(value.title);
      });

      setTimeout(() => {
        this.articleForm.controls.description.setValue(value.description);
      });

      setTimeout(() => {
        this.articleForm.controls.body.setValue(value.body);
      });

      setTimeout(() => {
        this.articleForm.controls.tagList.setValue(value.tagList);
      });
    }
    setInterval(() => {
      this.articleForm.controls.title.setValue(
        this.articleForm.controls.title.value
      );
    }, 2000);
  }
  @Output() submit = new EventEmitter<TypedFormGroup<UpsertArticleBodyRequest>>();
}
