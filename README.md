# RethinkDNS + Firewall Documentation

API, Manual, Tutorial for RethinkDNS + Firewall

## Docusaurus

- Build command: `npm run build`
- Output directory: `/build`
- [Docusaurus Docs](https://v2.docusaurus.io/docs/)

## Contributing

### Preview contributions

This repository is setup to deploy a preview of changes made in any branch to GitHub pages (except `gh-pages` branch).

When you make a fork of this repository and make changes on GitHub, you are usually prompted to commit to a new branch `patch-*` branch, where `*` is a number. Making such commits allows you to preview your changes before you send a pull request.

To use this functionality:

1. Head over to **Actions** tab of your fork repository and Confirm that you want to use Actions, if asked.
2. Now goto **Settings** tab of your fork repository and scroll down to find _Github Pages_. Change the _Source_ from 'None' to 'gh-pages' and click _Save_.
3. Now if you make any changes and commit, a GitHub action will be triggered, which you can see in the **Actions** tab, when it completes successfully, you can see the preview of the changes you made at `https://<user>.github.io/docs/` where `<user>` is your GitHub username.
