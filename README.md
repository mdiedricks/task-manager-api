# Task Manager API

Express API with MongoDB, token authentication, and avatar uploads.
Use Node.js 22.12 or later.

## Runbooks

- [Verify security updates](#verify-security-updates)
- [Run locally](#run-locally)

## Verify security updates

1. Run `npm ci`.
2. Run `npm test`.
3. Run `npm audit`.

The tests create and stop an isolated MongoDB instance with `mongodb-memory-server`.
The first test run downloads a MongoDB binary. The tests mock SendGrid and use synthetic credentials.
They replace `MONGODB_URL` with the temporary database address.

The `deepmerge` override selects version 4.1.1, outside the affected range in
[GHSA-gcqx-w48m-w2h4](https://github.com/advisories/GHSA-gcqx-w48m-w2h4).
SendGrid and Jest require this dependency. Remove the override when a patched compatible release becomes available.

## Run locally

1. Start a local MongoDB server.
2. Create `config/dev.env` with local `MONGODB_URL`, `JWT_SECRET`, `SENDGRID_API_KEY`, and `PORT` values.
3. Run `npm run dev`.

Keep credentials outside Git. Use a development SendGrid account for local email checks.
