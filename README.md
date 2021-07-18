# octoherd-script-replace-all-repository-topics

> Replace all repository topics

[![@latest](https://img.shields.io/npm/v/octoherd-script-replace-all-repository-topics.svg)](https://www.npmjs.com/package/octoherd-script-replace-all-repository-topics)
[![Build Status](https://github.com/oscard0m/octoherd-script-replace-all-repository-topics/workflows/Test/badge.svg)](https://github.com/oscard0m/octoherd-script-replace-all-repository-topics/actions?query=workflow%3ATest+branch%3Amain)

## Usage

Minimal usage

```js
npx octoherd-script-replace-all-repository-topics \
  --topics my-topic \
  --topics my-other-topic
```

Pass all options as CLI flags to avoid user prompts

```
npx octoherd-script-replace-all-repository-topics \
  --topics my-topic \
  --topics my-other-topic \
  -T ghp_0123456789abcdefghjklmnopqrstuvwxyzA \
  -R "oscard0m/*"
```

## Options

| option                       | type             | description                                                                                                                                                                                                                                 |
| ---------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--topics`                   | array of strings | **Required**. Topics to set on the repository. Pass `--topics` flag multiple times for multiple topics. Example `--topics my-topic --topics my-other--topic`                                                                                |
| `--octoherd-token`, `-T`     | string           | A personal access token ([create](https://github.com/settings/tokens/new?scopes=repo)). Script will create one if option is not set                                                                                                         |
| `--octoherd-repos`, `-R`     | array of strings | One or multiple space-separated repositories in the form of `repo-owner/repo-name`. `repo-owner/*` will find all repositories for one owner. `*` will find all repositories the user has access to. Will prompt for repositories if not set |
| `--octoherd-bypass-confirms` | boolean          | Bypass prompts to confirm mutating requests                                                                                                                                                                                                 |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## About Octoherd

[@octoherd](https://github.com/octoherd/) is project to help you keep your GitHub repositories in line.

## License

[ISC](LICENSE.md)
