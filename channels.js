// channels.js
// Edit this list to point at your own channels. Each entry uses ONE of:
//
//   src   — a direct stream URL. .m3u8 (HLS) for live streams, or a
//           direct video file (.mp4) for on-demand content. Plays in
//           the built-in player (via hls.js for HLS).
//
//   embed — an iframe embed URL, e.g. a provider's official player
//           embed link, a YouTube/Twitch live embed, or your own
//           self-hosted player page. Loads inside an iframe, same as
//           pasting an embed code onto a page.
//
// Only use streams/embeds you're actually allowed to use — your own
// IPTV subscription's links, a self-hosted stream, or licensed
// content. The entries below are just freely-licensed demo streams
// and one legitimate public embed, so the tuner works out of the box.

const CHANNELS = [
  {
    num: "01",
    name: "Demo — Big Buck Bunny",
    src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
  },
  {
    num: "02",
    name: "Demo — Sintel (HLS)",
    src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
  },
  {
    num: "03",
    name: "Demo — Apple HLS Sample",
    src: "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8"
  },
  {
    num: "04",
    name: "Demo — NASA Live (embed)",
    embed: "https://www.youtube.com/embed/live_stream?channel=UCNwkvBoDag92nHiZBzbYicA&autoplay=1"
  },
  {
    num: "05",
    name: "My Channel (edit me)",
    src: "https://example.com/replace-with-your-stream.m3u8"
  }
];
