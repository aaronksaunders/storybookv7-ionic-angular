import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { globe as globeIcon } from 'ionicons/icons';

export interface MemberInfo {
  name: string;
  title: string;
  companyName?: string;
  bio: string;
  twitter?: string;
  linkedIn?: string;
  website?: string;
}
@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
})
export class MemberCardComponent implements OnInit {
  @Input() memberInfo!: MemberInfo;
  @Output()
  onClick = new EventEmitter<{ event: string; value: string | undefined }>();

  constructor() {}

  ngOnInit() {}
}
