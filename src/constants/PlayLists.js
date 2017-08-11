import Immutable from 'immutable';

const playLists = Immutable.Map({
  anger: ['https://music.amazon.com/playlists/B01MSATKE1?ref=dm_wcp_pp_link_pr_s&do=play','https://music.amazon.com/albums/B0012APJPI/CATALOG?ref=dm_wcp_albm_link_pr_s&do=play'],
  contempt: ['https://music.amazon.com/albums/B000QZZRPC/CATALOG?ref=dm_wcp_albm_link_pr_s&do=play','https://music.amazon.com/albums/B0012QK88K/CATALOG?ref=dm_wcp_albm_link_pr_s&do=play'],
  disgust: ['https://music.amazon.com/albums/B01JTI1C6E/CATALOG?ref=dm_wcp_albm_link_pr_s&do=play','https://music.amazon.com/albums/B0152N4C6C/CATALOG?ref=dm_wcp_albm_link_pr_s'],
  fear: ['https://music.amazon.com/playlists/B01NCZLA6A?ref=dm_wcp_pp_link_pr_s$do=play'],
  neutral: ['https://music.amazon.com/playlists/B0723BL6VW?ref=dm_wcp_pp_link_pr_s&do=play', 'https://music.amazon.com/albums/B000U7SN8O/CATALOG?ref=dm_wcp_albm_link_pr_s&do=play', 'https://music.amazon.com/albums/B00FN2S33Q/CATALOG?ref=dm_wcp_albm_link_pr_s&do=play'],
  happiness:['https://music.amazon.com/playlists/B073R86HK7?ref=dm_wcp_pp_link_pr_s&do=play'],
  love: ['https://music.amazon.com/playlists/B06X17YLF5?ref=dm_wcp_pp_link_pr_s&do=play'],
  sadness: ['https://music.amazon.com/playlists/B06XV3MQ6J?ref=dm_wcp_pp_link_pr_s&do=play'],
  surprise: ['https://music.amazon.com/playlists/B074JF79RQ?ref=dm_wcp_pp_link_pr_s&do=play'],
});

module.exports = {
  playLists,
};