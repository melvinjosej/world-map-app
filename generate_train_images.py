import os
from PIL import Image, ImageDraw, ImageFont

images_dir = "images/trains"
os.makedirs(images_dir, exist_ok=True)

trains = {
    "blue_train.jpg": "Blue Train",
    "shinkansen.jpg": "Shinkansen",
    "maglev.jpg": "Maglev",
    "tgv.jpg": "TGV",
    "glacier_express.jpg": "Glacier Express",
    "eurostar.jpg": "Eurostar",
    "rocky_mountaineer.jpg": "Rocky Mountaineer",
    "acela.jpg": "Acela",
    "andean_explorer.jpg": "Andean Explorer",
    "tren_nubes.jpg": "Tren a las Nubes",
    "ghan.jpg": "The Ghan",
    "tranzalpine.jpg": "TranzAlpine",
    "snow_cruiser.jpg": "Snow Cruiser",
}

colors = [
    "#F4A261",
    "#E76F51",
    "#2A9D8F",
    "#457B9D",
    "#6A994E",
    "#E9C46A",
    "#A8DADC",
]

for i, (filename, label) in enumerate(trains.items()):
  if os.path.exists(os.path.join(images_dir, filename)):
    continue
  img = Image.new("RGB", (600, 400), color=colors[i % len(colors)])
  d = ImageDraw.Draw(img)
  d.text((300, 200), label, fill=(255, 255, 255), anchor="mm", font_size=40)
  img.save(os.path.join(images_dir, filename))

print("Fallback images created!")
