
# QA-PORTFOLIO

Lightweight portfolio + server project. This README lists the basic commands to install, run, build, and check the project.

**Prerequisites**
- Node.js (recommended >= 18)
- npm (or a compatible package manager)

**Quick Start**
1. Open a terminal and change into the project folder:

```bash
cd QA-PORTFOLIO
```

2. Install dependencies:

```bash
npm install
```

3. Development (run server in development mode):

```bash
npm run dev
```

4. Build the project for production:

```bash
npm run build
```

5. Start the production build:

```bash
npm run start
```

Notes:
- `npm run dev` uses `tsx server/index.ts` and sets `NODE_ENV=development`.
- `npm run build` runs the build script (`script/build.ts`) which prepares the `dist` output used by `npm run start`.
- On some Windows shells the `start` script's `NODE_ENV=production` assignment may not be applied; if `npm run start` fails to set the environment, try running in PowerShell:

```powershell
$env:NODE_ENV = 'production'; node dist/index.cjs
```

**Other useful scripts**
- `npm run check` — run TypeScript type checks (`tsc`).
- `npm run db:push` — run Drizzle DB push (`drizzle-kit push`).

**Where to look**
- Server entry: [server/index.ts](QA-PORTFOLIO/server/index.ts)
- Static/server code: [server](QA-PORTFOLIO/server)
- Client app: [QA-PORTFOLIO/client](QA-PORTFOLIO/client) (Vite + React)

