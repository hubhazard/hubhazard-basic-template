# HubHazard - Basic Template

This is a basic template of the [HubHazard server][hubhazardcore] project. You
can quickly create a new repo out of it and start having fun with
[HubHazard][hubhazardcore].

There are 2 versions of this template available on different branches:

- `master` - contains a set of automations as examples to get you started faster.
- `clean` - contains only one basic automation to give you a clean slate.

<!-- WHAT IS HUBHAZARD -->

## What is [HubHazard][hubhazardcore]?

[HubHazard][hubhazardcore] is a simple home-automation server leaning towards
users with basic coding skills. You can write your automations using
[Typescript][typescript]. Your automations can be as simple as a *button
toggling a light* or as complex as *an automated co-op escape room controller*.
All you need is a computer that supports Node.js 10+, for example a Raspberry Pi.

HubHazard comes with an integration for [Hubitat Elevation hub][hubitat]
(showed in automations examples).

<!-- INSTALLATION -->

## Installation

1. Create a new repo out of this template by clicking *Use this template* button.
2. Clone your repo
3. Install [Node.js v10 or newer][nodejsdownload] (even version number)
4. Install [Nest.js CLI][nestjsinstallation]: `npm i -g @nestjs/cli` or
`yarn global add @nestjs/cli`
5. Install dependencies: `npm install` or `yarn install`
6. Run the dev server: `npm run start:dev` or `yarn run start:dev`
7. Server should start and every 15 seconds you should see an output of the
basic automation example:

```
[12:53:14 AM] Starting compilation in watch mode...
[12:53:20 AM] Found 0 errors. Watching for file changes.
[Nest] 14160   - 08/21/2020, 12:53:21 AM   [NestFactory] Starting Nest application...
[Nest] 14160   - 08/21/2020, 12:53:21 AM   [InstanceLoader] AutomationsModule dependencies initialized +14ms
[Nest] 14160   - 08/21/2020, 12:53:21 AM   [InstanceLoader] ConfigHostModule dependencies initialized +2ms
[Nest] 14160   - 08/21/2020, 12:53:21 AM   [InstanceLoader] TimerEventsModule dependencies initialized +1ms
[Nest] 14160   - 08/21/2020, 12:53:21 AM   [InstanceLoader] AppModule dependencies initialized +0ms
[Nest] 14160   - 08/21/2020, 12:53:21 AM   [InstanceLoader] ConfigModule dependencies initialized +1ms
[Nest] 14160   - 08/21/2020, 12:53:21 AM   [NestApplication] Nest application successfully started +6ms
Application is running on: http://[::1]:3000
Triggered the 'Basic automation' 1 times.
Triggered the 'Basic automation' 2 times.
Triggered the 'Basic automation' 3 times.
...
```

[**For more information about HubHazard and how to use it, visit the HubHazard - Core repository.**][hubhazardcore]

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire,
and create. Any contributions you make are **greatly appreciated**.

1. Find an existing issue or create a new one
2. Tell us (in the issue) that you're working on it
3. Fork the Project
4. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
5. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
6. Push to the Branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

See [`CONTRIBUTING.md`][contributingfile] from more information.

<!-- LICENSE -->

## License

Distributed under the MIT License. See [`LICENSE`][licensefile] for more information.

<!-- CONTACT -->

## Contact

Beniamin (Xkonti) Dudek - [@xkonti][twitterxkonti] - online.xkonti@gmail.com

Project Link: [https://github.com/hubhazard/hubhazard-basic-template][hubhazardtemplate]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[licensefile]: ./LICENSE
[contributingfile]: ./CONTRIBUTING.md
[hubitat]: https://hubitat.com/
[makerapi]: https://docs.hubitat.com/index.php?title=Maker_API
[nodejs]: https://nodejs.org/en/
[nodejsreleases]: https://nodejs.org/en/about/releases/
[nodejsdownload]: https://nodejs.org/en/download/
[nestjs]: https://nestjs.com/
[nestjsinstallation]: https://docs.nestjs.com/#installation
[nestjsmodules]: https://docs.nestjs.com/modules
[nestjsstart]: https://docs.nestjs.com/cli/usages#nest-start
[nestjsconfig]: https://docs.nestjs.com/techniques/configuration
[typescript]: https://www.typescriptlang.org/
[issues]: https://github.com/hubhazard/hubhazard-basic-template/issues
[twitterxkonti]: https://twitter.com/xkonti
[hubhazardcore]: https://github.com/hubhazard/core
[hubhazardtemplate]: https://github.com/hubhazard/hubhazard-basic-template
