import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "0ezc3m9k",
  dataset: "production",
  useCdn: true,
});

export async function getBannerSong() {
  return await client.fetch(
    `*[_type=='bannerSong'] {
        "id": _id,
        by_name,
        en_name,
        "image_url": image.asset->url,
        en_artistName,
        by_artistName,
        "song_url": song.asset->url
      }`
  );
}

export async function getNews(offset, limit) {
  return await client.fetch(
    `*[_type=='press'] | order(date desc) [${offset}...${limit}] {
        "id": _id,
        en_title,
        by_title,
        en_description,
        by_description,
        date,
        url,
        "image_url": image.asset->url
      }`
  );
}

export async function getNewsCount() {
  const results = await client.fetch(`count(*[_type=='press'])`);
  return results;
}

export async function getUpcomingEvents(offset, limit) {
  return client.fetch(
    `*[_type=='event'] | order(date desc) [${offset}...${limit}] {
        "id": _id,
        date,
        en_location,
        by_location,
        en_state,
        by_state,
        link,
        "background_url": background.asset->url
      }`
  );
}

export async function getUpcomingEventsCount() {
  return await client.fetch(`count(*[_type=='event'])`);
}
