# CI/CD Setup Documentation

This document explains the Continuous Integration and Continuous Deployment setup for conjugate-cli.

## Overview

The project uses GitHub Actions for automated testing, code quality checks, and releases.

## Workflows

### 1. CI Workflow (`.github/workflows/ci.yml`)

**Trigger:** Runs on every push to `main`/`master` branches and on all pull requests.

**Jobs:**

#### Test Job
- **Purpose:** Run tests across multiple Node.js versions
- **Matrix:** Tests on Node.js 18.x, 20.x, and 22.x
- **Steps:**
  1. Checkout code
  2. Setup Node.js with caching
  3. Install dependencies
  4. Run linter (`npm run lint`)
  5. Run tests with coverage (`npm run test:coverage`)
  6. Upload coverage to Codecov (Node 22 only)
  7. Upload coverage artifacts (Node 22 only)

#### Code Quality Job
- **Purpose:** Verify code quality standards
- **Steps:**
  1. Run ESLint checks
  2. Verify package.json consistency
  3. Run security audit

#### Install Test Job
- **Purpose:** Verify CLI installation works correctly
- **Steps:**
  1. Test global installation
  2. Verify CLI command is accessible
  3. Test version flag

### 2. Release Workflow (`.github/workflows/release.yml`)

**Trigger:** Runs when a version tag (e.g., `v1.2.3`) is pushed.

**Jobs:**

#### Release Job
- **Steps:**
  1. Checkout code with full history
  2. Setup Node.js with npm registry
  3. Install dependencies
  4. Run all tests
  5. Generate changelog from git commits
  6. Create GitHub Release with:
     - Version information
     - Changelog
     - Installation instructions
  7. Publish to npm (if not a pre-release)

## Required Secrets

To enable all features, configure these secrets in your repository:

### GitHub Token (Automatic)
- **Name:** `GITHUB_TOKEN`
- **Purpose:** Create releases, comment on PRs
- **Setup:** Automatically provided by GitHub Actions

### npm Token (Optional)
- **Name:** `NPM_TOKEN`
- **Purpose:** Publish packages to npm registry
- **Setup:**
  1. Login to [npmjs.com](https://www.npmjs.com/)
  2. Go to Access Tokens in your account settings
  3. Generate a new token with "Automation" type
  4. Add to GitHub: Settings → Secrets → Actions → New repository secret

### Codecov Token (Optional)
- **Name:** `CODECOV_TOKEN`
- **Purpose:** Upload code coverage reports
- **Setup:**
  1. Go to [codecov.io](https://codecov.io/)
  2. Sign in with GitHub
  3. Add your repository
  4. Copy the upload token
  5. Add to GitHub: Settings → Secrets → Actions → New repository secret

## Branch Protection Rules

Recommended branch protection for `main`/`master`:

1. Go to Repository Settings → Branches → Add rule
2. Branch name pattern: `main` (or `master`)
3. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass before merging
     - Required checks:
       - `Test on Node.js 18.x`
       - `Test on Node.js 20.x`
       - `Test on Node.js 22.x`
       - `Code Quality Checks`
   - ✅ Require conversation resolution before merging
   - ✅ Do not allow bypassing the above settings

## Status Badges

The following badges are available in the README:

```markdown
[![CI](https://github.com/tcelestino/conjugate-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/tcelestino/conjugate-cli/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/@tcelestino%2Fconjugate-cli.svg)](https://www.npmjs.com/package/@tcelestino/conjugate-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/node/v/@tcelestino/conjugate-cli)](https://nodejs.org)
```

## Workflow Maintenance

### Updating Actions Versions

Periodically update action versions:

```yaml
# Current versions (as of 2024)
- uses: actions/checkout@v4
- uses: actions/setup-node@v4
- uses: actions/upload-artifact@v4
- uses: codecov/codecov-action@v4
- uses: softprops/action-gh-release@v1
```

Use Dependabot to automate action updates (already configured in `.github/dependabot.yml`).

### Adding New Node.js Versions

Update the matrix in `.github/workflows/ci.yml`:

```yaml
strategy:
  matrix:
    node-version: [18.x, 20.x, 22.x, 23.x]  # Add new version
```

### Modifying Test Steps

To add new test steps, edit the CI workflow:

```yaml
- name: Your New Step
  run: npm run your-command
```

## Troubleshooting

### Tests Fail in CI but Pass Locally

1. Check Node.js version compatibility
2. Verify all dependencies are in `package.json` (not global)
3. Check for environment-specific issues
4. Review CI logs in Actions tab

### Release Workflow Doesn't Trigger

1. Ensure tag follows pattern `v*.*.*` (e.g., `v1.2.3`)
2. Check that tag was pushed: `git push --tags`
3. Verify workflow file exists and has no syntax errors

### npm Publish Fails

1. Check if NPM_TOKEN is configured
2. Verify token has publish permissions
3. Check if version already exists (npm doesn't allow republishing)
4. Review npm documentation for 2FA requirements

## Performance Optimization

Current optimizations:

- **npm caching:** Dependencies are cached per Node.js version
- **Parallel jobs:** Multiple jobs run concurrently
- **Conditional steps:** Coverage upload only on Node 22.x
- **Artifact retention:** Coverage kept for 7 days

## Further Reading

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [npm Publishing Guide](https://docs.npmjs.com/cli/v9/commands/npm-publish)
- [Codecov Documentation](https://docs.codecov.com/)
- [Semantic Versioning](https://semver.org/)
