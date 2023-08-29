import os
import requests
import json


def update_insta():
    print("Updating Instagram...")
    url = """https://www.instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"242754263","first":8,"after":null}"""
    response = requests.get(url)

    print(f"Fetched Instagram data with status code {response.status_code}")

    print("Clearing images...")
    clear_images()
    print("Cleared images")

    print("Formatting data...")
    posts = []
    for edge in response.json()["data"]["user"]["edge_owner_to_timeline_media"][
        "edges"
    ]:
        node = edge["node"]
        caption_edge = node["edge_media_to_caption"]["edges"]
        caption_text = caption_edge[0]["node"]["text"] if len(caption_edge) > 0 else ""
        post = {
            "id": node["id"],
            "url": f"https://instagram.com/p/{node['shortcode']}",
            "thumbnail": f"instagram/{node['id']}.jpg",
            "caption": caption_text,
            "is_video": node["is_video"],
        }
        posts.append(post)
        print(f"Got post {post}")
        print(f"Downloading image {node['id']}.jpg...")
        download_image(node["thumbnail_src"], f'{node["id"]}.jpg')
        print(f"Downloaded image {node['id']}.jpg")

    print("Writing Instagram data to src/data/instagram.json...")
    with open("src/data/instagram.json", "w") as f:
        f.write(json.dumps(posts))
    print("Wrote Instagram data to src/data/instagram.json")


def clear_images():
    path = "public/instagram"
    files = os.listdir(path)
    for file in files:
        os.remove(os.path.join(path, file))


def download_image(url, filename):
    response = requests.get(url)
    if response.status_code == 200:
        print(f"Writing image to public/instagram/{filename}")
        with open(f"public/instagram/{filename}", "wb") as f:
            f.write(response.content)
    else:
        print(f"Error: {response.status_code}")


if __name__ == "__main__":
    update_insta()
