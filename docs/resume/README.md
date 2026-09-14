# Resume PDF source

`resume.html` is the source for `assets/tintin-cv.pdf`. After editing it, regenerate the PDF with headless Chrome:

```bash
chrome --headless --no-sandbox --no-pdf-header-footer \
  --print-to-pdf=assets/tintin-cv.pdf "file://$PWD/docs/resume/resume.html"
```

The `docs/` folder is excluded from the GitHub Pages deploy, so only the PDF ships.
