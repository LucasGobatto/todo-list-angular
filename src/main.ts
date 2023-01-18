import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './components/app';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
