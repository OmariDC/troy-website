# Project agent rules

## General working approach

- Make the smallest change that fully satisfies the requested outcome.
- Do not refactor, rename, move, or rewrite unrelated code.
- Follow the existing project structure, naming conventions, and coding style.
- Do not add packages, frameworks, services, databases, or abstractions without explaining why they are necessary.
- Prefer the simplest implementation that fits the existing system.
- Ask a focused question when an important requirement is genuinely ambiguous.

## Scope control

- Before editing, identify the minimum files that need to change.
- Do not modify files outside the agreed scope unless a required dependency is discovered.
- Explain any necessary scope expansion before performing it.
- Preserve existing behaviour unless the task explicitly requires changing it.

## Security and safety

- Never expose, display, log, or commit API keys, passwords, tokens, or environment-variable values.
- Do not edit real secret values in .env files.
- Do not run destructive Git or filesystem commands.
- Do not commit, push, merge, deploy, or create pull requests unless explicitly requested.
- Treat customer information, phone numbers, email addresses, and form submissions as private data.

## Verification

- Inspect package.json and existing project documentation before deciding which commands to run.
- Use the project's existing lint, type-check, test, build, and formatting commands.
- Add or update tests when application behaviour changes.
- Do not claim that something passed unless the relevant command or behaviour was actually tested.
- Clearly separate verified behaviour from unverified assumptions.

## Completion report

After implementation, report:

1. The outcome completed.
2. Every file changed and why.
3. Commands run and their results.
4. Tests performed.
5. Anything not verified.
6. Remaining risks or assumptions.
7. A brief end-to-end explanation of how the changed system now works.