# `strava`

#### 🚴‍♂️🏋️‍♂️ Minimal read-only CLI for [Strava](https://www.strava.com) (OAuth, list activities, fetch activity details)

## Why

Strava has no official CLI and I wanted one that was read-only and with a source that’s small enough for me to be able to check what exactly it does. This CLI is read-only; the core logic lives in one module (~650 lines in `src/strava.ts`).

## Quick start

```bash
bun add -g @kvendrik/strava
```

Or point your agent at [`AGENT.md`](/AGENT.md).

## How to use

Set **STRAVA_CLIENT_ID** and **STRAVA_CLIENT_SECRET** (from [Strava API settings](https://www.strava.com/settings/api)), then run `strava auth` once. Tokens are stored in `~/.strava-tokens.json` (override with **STRAVA_STORAGE_PATH**).

```bash
strava auth
strava doctor # ensures env vars and auth are OK
strava refresh
strava activities [-n 30] [--after <unix>] [--before <unix>]
strava activity <id>
```
