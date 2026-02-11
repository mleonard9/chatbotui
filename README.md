# MattGPT

MattGPT is the personal fork of Chatbot UI 2.0 that powers [MattGPT.dev](https://mattgpt.dev). It keeps the same flexible SUPABASE-backed stack and adds customizations for my hosted experience.

<img src="./public/readme/screenshot.png" alt="MattGPT interface" width="600">

## Demo

Experience the live version at [https://mattgpt.dev](https://mattgpt.dev).

## Hosted version

MattGPT is hosted at [https://mattgpt.dev](https://mattgpt.dev). Whenever a new build lands on `main`, the replica on the site refreshes automatically.

## Official desktop app

A downloadable desktop version is still in progress. Until then just open [MattGPT.dev](https://mattgpt.dev) in your browser and start chatting.

## Support

If you find MattGPT useful, consider supporting the project via [GitHub Sponsors](https://github.com/sponsors/mleonard9) or by starring the repository.

## Base project

MattGPT is powered by the open-source [Chatbot UI](https://github.com/mckaywrigley/chatbot-ui) 2.0 codebase, and the legacy 1.0 work is still available on the `legacy` branch of that project. Everything in this repo pulls upstream updates, and the instructions below follow the same Supabase-backed workflow as the base project.

## Updating

Keep your fork up to date with:

```bash
npm run update
```

## Local quickstart

Follow these steps to spin up MattGPT locally.

1. **Clone this repository**

```bash
git clone https://github.com/mleonard9/chatbotui.git
```

2. **Install dependencies**

```bash
npm install
```

3. **Install Supabase & run locally**

   - Install Docker: you need it for the local Supabase stack, available at [https://docs.docker.com/get-docker](https://docs.docker.com/get-docker).
   - Install the Supabase CLI:

     ```bash
     brew install supabase/tap/supabase   # macOS/Linux
     scoop bucket add supabase https://github.com/supabase/scoop-bucket.git && scoop install supabase   # Windows
     ```

   - Start Supabase:

     ```bash
     supabase start
     ```

4. **Fill in secrets**

   - Copy the example env file into `.env.local`.

     ```bash
     cp .env.local.example .env.local
     ```

   - Run `supabase status` and copy the **Project URL** into `NEXT_PUBLIC_SUPABASE_URL` and the **anon key** into `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Use the **service role key** for `SUPABASE_SERVICE_ROLE_KEY`.
   - In `supabase/migrations/20240108234540_setup.sql` replace the defaults with your values. The defaults use `http://supabase_kong_mattgpt:8000` and the provided service role key. Keep those unless you changed `project_id` in `supabase/config.toml`.

5. **(Optional) Install Ollama**

   Details are available at [https://github.com/jmorganca/ollama#macos](https://github.com/jmorganca/ollama#macos).

6. **Run the app**

```bash
npm run chat
```

Visit [http://localhost:3000](http://localhost:3000) to use the application and [http://localhost:54323/project/default/editor](http://localhost:54323/project/default/editor) to manage the Supabase backend.

## Hosted quickstart

Use this repository for your own hosted MattGPT.

1. **Complete the local quickstart** so local secrets and migrations are synced.
2. **Create a Supabase project** and copy the values for:
   - `Project Ref` (used in `supabase link --project-ref`)
   - `Project ID` (found in the URL)
   - `Project URL`, `anon public key`, and `service role key` from the API settings.
3. **Link the project and push migrations**

```bash
supabase login
supabase link --project-ref <project-id>
supabase db push
```

4. **Deploy the frontend**
   - On Vercel, create a new project from this repository.
   - Add the same environment variables as above plus any API keys (OpenAI, Azure, Anthropic, etc.).
   - Deploy, and the hosted MattGPT will be available at the URL Vercel generates.

## Contributing

A contribution guide is forthcoming. Please open issues or PRs to share ideas.

## Contact

Message Matt on [X](https://x.com/mleonard9) or drop feedback in this repository’s issue tracker.
