# Release Guide

This document describes how to create a new release for conjugate-cli.

## Prerequisites

- You must have write access to the repository
- You must have publish access to the npm package (if publishing to npm)
- All tests must be passing on the main branch

## Release Process

### 1. Update Version

Update the version in `package.json` using npm:

```bash
# For a patch release (bug fixes)
npm version patch

# For a minor release (new features, backwards compatible)
npm version minor

# For a major release (breaking changes)
npm version major
```

This command will:
- Update the version in `package.json`
- Create a git commit with the version change
- Create a git tag (e.g., `v1.2.3`)

### 2. Push Changes and Tag

Push the commit and tag to GitHub:

```bash
git push && git push --tags
```

### 3. Automated Release

Once the tag is pushed, GitHub Actions will automatically:

1. **Run Tests** - Ensure all tests pass
2. **Create GitHub Release** - Generate release notes from commits
3. **Publish to npm** (if configured) - Publish the new version

The release workflow is defined in `.github/workflows/release.yml`.

## Manual Release (if needed)

If you need to publish manually:

```bash
# Login to npm (first time only)
npm login

# Publish the package
npm publish --access public
```

## Verifying the Release

After the release:

1. Check the [GitHub Releases page](https://github.com/tcelestino/conjugate-cli/releases)
2. Verify the package on [npm](https://www.npmjs.com/package/@tcelestino/conjugate-cli)
3. Test installation:
   ```bash
   npx @tcelestino/conjugate-cli@latest --version
   ```

## Changelog

The GitHub Release will automatically include:
- List of commits since the last release
- Links to the commits
- Installation instructions

For more detailed changelogs, update `CHANGELOG.md` before creating the release.

## Troubleshooting

### Release workflow fails

1. Check the [Actions tab](https://github.com/tcelestino/conjugate-cli/actions) for error details
2. Ensure all secrets are properly configured (GITHUB_TOKEN, NPM_TOKEN)
3. Verify tests pass locally: `npm test`

### npm publish fails

1. Ensure you're logged in: `npm whoami`
2. Check npm permissions for the package
3. Verify the version number hasn't been published before: versions are immutable on npm

## Version Numbering

We follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0) - Breaking changes
- **MINOR** (0.1.0) - New features, backwards compatible
- **PATCH** (0.0.1) - Bug fixes, backwards compatible

## Pre-releases

For beta or alpha releases:

```bash
# Create a prerelease version
npm version prerelease --preid=beta  # e.g., 1.2.3-beta.0

# Push with tags
git push && git push --tags
```

Note: The release workflow will NOT publish pre-releases to npm automatically (by design).
