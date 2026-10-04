# Push this portfolio to GitHub Pages

Target: https://github.com/dev-nikita-singh/dev-nikita-singh.github.io

## Option A — fresh push (replaces current Initial commit)

```bash
cd nikita-portfolio-export   # this folder after unzip
git init
git add .
git commit -m "Add Nikita Singh animated portfolio"
git branch -M main
git remote add origin https://github.com/dev-nikita-singh/dev-nikita-singh.github.io.git
git push -u origin main --force
```

## Option B — into an existing clone

```bash
git clone https://github.com/dev-nikita-singh/dev-nikita-singh.github.io.git
cd dev-nikita-singh.github.io
# copy all files from the unzipped folder over this clone (except .git)
cp -a /path/to/nikita-portfolio-export/. .
rm -f PUSH_TO_GITHUB.md
git add .
git commit -m "Add Nikita Singh animated portfolio"
git push
```

## Run locally

```bash
npm install
npm run dev -- --port 4321
```
