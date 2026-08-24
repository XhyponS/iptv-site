# SIGNAL — Channel Tuner

A small static web page with channel-preset buttons. Click a preset, it tunes
the player to that stream. Built with plain HTML/CSS/JS and [hls.js](https://github.com/video-dev/hls.js) for `.m3u8` playback — no build step, no backend.

## Files

- `index.html` — the page and player
- `channels.js` — your channel list (edit this)

## 1. Add your channels

Open `channels.js` and edit the array. Each channel uses **one** of two modes:

```js
const CHANNELS = [
  // direct stream — plays in the built-in player (via hls.js for HLS)
  {
    num: "01",
    name: "My Channel",
    src: "https://your-provider.example/stream.m3u8"
  },

  // iframe embed — loads a provider's own player, same as pasting an
  // embed code onto a page (works with YouTube/Twitch live embeds,
  // or any provider that gives you an embeddable player URL)
  {
    num: "02",
    name: "My Other Channel",
    embed: "https://your-provider.example/embed/xyz"
  },
];
```

`src` can be:
- an `.m3u8` HLS link (most IPTV playlists use this) — plays via hls.js
- a direct `.mp4` link — plays natively

`embed` should be a player embed URL — the kind meant to go inside an
`<iframe>`. Note that plenty of sites *block* being iframed (via
`X-Frame-Options`/CSP), so not every embed link will actually load here;
that's the provider's choice, not something this page controls.

**Only use stream/embed URLs you're actually entitled to use** — a playlist
or embed link from your own IPTV subscription, a self-hosted stream, or
licensed content. This project is just the player/tuner UI; it doesn't ship
with any real live channels, only demo placeholders.

## 2. Run it locally

You can just open `index.html` in a browser, but some browsers block
`fetch`/HLS loading from `file://`. Easiest fix is a tiny local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 3. Publish it on GitHub Pages

1. Create a new repo on GitHub and push these files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Pick **main** branch, **/ (root)** folder, then **Save**.
5. GitHub gives you a URL like `https://YOUR_USERNAME.github.io/YOUR_REPO/` —
   that's your live site, usually within a minute or two.

Any time you edit `channels.js` and push, the live site updates automatically.

## Notes

- Many public IPTV playlists (M3U files with lots of channels) can be
  reformatted into this `channels.js` structure — write a quick script to
  parse the `.m3u` file and generate `{ num, name, src }` entries.
- If a channel shows "SIGNAL LOST", the stream URL is either down, geo-blocked,
  or blocking cross-origin requests (CORS) — that's on the stream provider's
  end, not something this page controls.
- Respect the terms of whatever stream source you use — a lot of IPTV
  reshare links out there are unlicensed and can get your access (or
  worse) shut down.
