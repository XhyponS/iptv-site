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
    name: "A Grandstand",
    src: "https://dlstreams.st/stream/stream-123.php"
  },
  {
    num: "02",
    name: "A Football",
    src: "https://dlstreams.st/stream/stream-124.php"
  },
  {
    num: "03",
    name: "Al Quran Al Kareem (Dns)",
    src: "https://op-flashcon-digdayahd-1.dens.tv/h/h15/index.m3u8?app_type=web&userid=lite&chname=Quran_TV"
  },
  {
    num: "04",
    name: "As Ch 100 ",
    embed: "http://syok.tv:25461/live/843839483/33999/24192.ts"
{
  num: "05",
  name: "A Warna",
  src: "https://ucdn.starhubgo.com/bpk-tv/Astro_warna_new/output/manifest.mpd|X-Forwarded-For=119.56.77.101",
  clearkey: "8b08559f2efb4075b6b31666b412932:d1f574a17ae1805bf390b58d2bf814c0"
}
];
