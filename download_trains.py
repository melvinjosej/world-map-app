import json
import os
import time
import urllib.request

images_dir = "images/trains"
os.makedirs(images_dir, exist_ok=True)

trains = {
    "blue_train.jpg": "Blue Train (South Africa)",
    "shinkansen.jpg": "N700 Series Shinkansen",
    "maglev.jpg": "Shanghai maglev train",
    "tgv.jpg": "TGV",
    "glacier_express.jpg": "Glacier Express",
    "eurostar.jpg": "Eurostar",
    "rocky_mountaineer.jpg": "Rocky Mountaineer",
    "acela.jpg": "Acela",
    "andean_explorer.jpg": "Andean Explorer",
    "tren_nubes.jpg": "Tren a las Nubes",
    "ghan.jpg": "The Ghan",
    "tranzalpine.jpg": "TranzAlpine",
    "snow_cruiser.jpg": "Antarctic Snow Cruiser",
}

for filename, query in trains.items():
  if os.path.exists(os.path.join(images_dir, filename)):
    print(f"Already have {filename}")
    continue

  print(f"Fetching {query}...")
  url = f"https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles={urllib.parse.quote(query)}"
  try:
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "WorldMapExplorerBot/1.0 (melvinp@google.com)"},
    )
    with urllib.request.urlopen(req) as response:
      data = json.loads(response.read().decode())
      pages = data["query"]["pages"]
      page = list(pages.values())[0]
      if "original" in page:
        image_url = page["original"]["source"]
        print(f"Downloading {image_url}")
        img_req = urllib.request.Request(
            image_url,
            headers={
                "User-Agent": "WorldMapExplorerBot/1.0 (melvinp@google.com)"
            },
        )
        with urllib.request.urlopen(img_req) as img_resp:
          with open(os.path.join(images_dir, filename), "wb") as f:
            f.write(img_resp.read())
      else:
        print(f"No image found for {query}")
  except Exception as e:
    print(f"Failed for {query}: {e}")
  time.sleep(2)

print("Done!")
