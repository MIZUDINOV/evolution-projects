import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run smp-portal:serve:development',
        production: 'nx run smp-portal:serve:production',
      },
      ciWebServerCommand: 'nx run smp-portal:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
