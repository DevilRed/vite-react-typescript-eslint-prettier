export default {
  '**/*.{ts,tsx}': (stagedFiles) => {
    return [`eslint .`, `prettier --write ${stagedFiles.join(' ')}`]
  },
}
