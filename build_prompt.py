import os
import glob

FILES = [
    "scraper_module/",
]

if __name__ == "__main__":
    if os.path.exists("prompt.txt"):
        os.remove("prompt.txt")
    prompt = ""
    for file in FILES:
        for f in glob.glob(file):
            with open(f, "r") as f:
                prompt += "READING FILE: " + f"{f}" + "\n\n"
                prompt += f.read() + "\n\n"
    
    with open("prompt.txt", "w") as f:
        f.write(prompt)