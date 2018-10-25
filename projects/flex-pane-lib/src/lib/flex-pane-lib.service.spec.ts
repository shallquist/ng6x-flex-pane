import { TestBed } from '@angular/core/testing';

import { FlexPaneLibService } from './flex-pane-lib.service';

describe('FlexPaneLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlexPaneLibService = TestBed.get(FlexPaneLibService);
    expect(service).toBeTruthy();
  });
});
