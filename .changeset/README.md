# Changesets

This folder manages versioning and changelogs via [`@changesets/cli`](https://github.com/changesets/changesets).

## Workflow

1. **Record a change** — when working on a user-facing change, add a changeset:

   ```bash
   pnpm changelog     # interactive: pick affected packages + semver bump + summary
   ```

   This creates a new `.md` file in this folder. Commit it alongside your code.

2. **Version** — consume pending changesets to bump versions and update `CHANGELOG.md`:

   ```bash
   pnpm version
   ```

   CI also does this automatically: when changesets are merged to `main`, a
   **"Version Packages"** pull request is opened by the `Changesets` workflow.

> VisualDSA packages are currently `private`. Changesets tracks them and maintains
> the changelog; they'll be versioned/published once a package is marked public.
