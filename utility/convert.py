import os
import json
import xml.etree.ElementTree as ET

INPUT_FOLDER = "./shortcuts"
OUTPUT_FILE = "decipher-xml.code-snippets"

# converts Sublime Snippets to VS Code snippets file

def extract_cdata(text):
    if text is None:
        return ""
    return text.strip()


def snippet_from_file(filepath):
    tree = ET.parse(filepath)
    root = tree.getroot()

    content = root.findtext("content")
    tab_trigger = root.findtext("tabTrigger")

    if not content:
        print(f"{filepath}: Nothing written")
        return None

    # Normalize body into lines
    body_lines = extract_cdata(content).splitlines()

    # Clean leading/trailing empty lines
    while body_lines and body_lines[0].strip() == "":
        body_lines.pop(0)
    while body_lines and body_lines[-1].strip() == "":
        body_lines.pop()

    title = os.path.basename(filepath).split(".")[0]

    name = title or tab_trigger

    return name, {
        "prefix": tab_trigger,
        "body": body_lines,
        "description": title
    }


def main():
    snippets = {}

    for filename in sorted(os.listdir(INPUT_FOLDER)):
        if not filename.endswith(".sublime-snippet"):
            continue

        path = os.path.join(INPUT_FOLDER, filename)

        try:
            result = snippet_from_file(path)
            if result:
                name, snippet = result
                snippets[name] = snippet
        except Exception as e:
            print(f"Skipping {filename}: {e}")

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(snippets, f, indent=2, ensure_ascii=False)

    print(f"Done. Wrote {len(snippets)} snippets to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()