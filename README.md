<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/10p92QyDbbGFw-egcw_XuLgvcx7kBZaex

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:

## Deployed on Vercel

To deploy this project on Vercel:

1. Import the project in Vercel.
2. The framework preset should automatically detect **Vite**.
3. Ensure the Build Command is `vite build` or `npm run build`.
4. Ensure the Output Directory is `dist`.
5. Deploy!

The project includes a `vercel.json` file to handle SPA routing (rewrites to `index.html`) and valid package configuration.
