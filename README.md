# Semi-One Website Upgrade

Corporate website upgrade for Shenzhen Semi-One Technology Co., Ltd.

## Workflow

Development follows `standards/06-ai-collab-protocol.md`:

1. Create repository and configure GitHub Secrets.
2. Create a feature branch from `main`.
3. Build modules with tests.
4. Run local quality gates.
5. Open a PR and wait for CI.
6. Human review and merge trigger CD.

## Required GitHub Actions Secrets

- `SSH_PRIVATE_KEY`
- `SSH_HOST`
- `SSH_USER`

## Deployment

The app container is named `semi-one-website`.
The preferred host port is `8080`, with fallback through `8089`.
Health check path: `/health`.

## Source Materials

Raw company references under `data/` are local source materials and are ignored by Git by default.
Only reviewed, compressed, public assets should be copied into `public/assets/`.
