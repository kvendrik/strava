#!/usr/bin/env bun

import { stravaCommand } from './strava';

if (import.meta.main) {
  stravaCommand.parse(process.argv);
}

export { stravaCommand };
