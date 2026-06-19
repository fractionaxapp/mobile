# @fractionax/mobile

FractionAX mobile app — [Expo](https://expo.dev) (React Native) + TypeScript.

> **This repo is a submodule** of the [`fractionaxapp`](https://github.com/fractionaxapp/fractionaxapp)
> meta-monorepo and is developed from there. It shares `@fractionax/core` via
> `workspace:*`.

## Develop (from the meta-repo root)

```bash
moon run mobile:lint        # eslint
moon run mobile:typecheck   # tsc --noEmit
# Run the app (native tooling, outside moon):
cd apps/mobile && pnpm start   # expo start
```

CI runs lint + typecheck; native/EAS builds run separately.
