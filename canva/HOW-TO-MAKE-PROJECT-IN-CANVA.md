# How to Make This Website as a Project in Canva

Follow these steps to build your Schwimmschule Delphine website design in Canva so you can edit every element (text, images, buttons).  
All files mentioned are in this **canva** folder (or in **assets/** or the website root **../images/**).

---

## Step 1: Open Canva and set up Brand Kit

1. Go to **canva.com** and log in.
2. Click **Brand** (or **Brand kit**) in the left sidebar.
3. **Add colors** – click **Colors** and add these hex codes one by one:
   - `#0d7ea0`
   - `#06607a`
   - `#2a9dbf`
   - `#34c4d8`
   - `#e8f6f9`
   - `#ffffff`
   - `#1a1a1a`
   - `#555555`
   - `#d0e8ed`
4. **Add logo** – under **Logos**, click **Upload** and choose:
   - **assets/banner_swim.png** (in this canva folder)  
   - or **../images/banner_swim.png** from the website folder.

---

## Step 2: Upload all images

1. In Canva, go to **Projects** or **Create a design**.
2. In the left sidebar, click **Uploads** (or **Upload**).
3. Click **Upload files** and select these files (paths from the **website root**; the **canva** folder is inside it):

| Upload this file | Use it for |
|------------------|------------|
| **canva/assets/banner_swim.png** or **images/banner_swim.png** | Logo in header (or use from Brand kit) |
| **images/background_children.webp** | Hero background – Startseite |
| **images/background_swim.jpg** | Hero background – other pages |
| **images/team/luca.jpg** | Team page |
| **images/team/lukas.jpg** | Team page |
| **images/team/chris.jpg** | Team page |
| **images/team/irene.jpg** | Team page |
| **images/team/rainer.jpg** | Team page |
| **images/team/sabine.jpg** | Team page |

After uploading, all of them will appear under **Uploads** so you can drag them onto any page.

---

## Step 3: Create a new design with 13 pages

1. Click **Create a design** → **Custom size**.
2. Enter size, e.g. **1200** × **1600** px (or **1920** × **1080** for a wide format). Click **Create new design**.
3. You get 1 page. Add 12 more: in the left panel under **Pages**, click **+** (Add new page) 12 times.  
   You now have **13 pages** (one per website page).

---

## Step 4: Build each page with Text + Images (so everything is editable)

For **every page** you will:

- Add **images** (background, logo, team photos where needed).
- Add **text boxes** for every headline and paragraph.
- Add **shapes + text** for buttons (so you can change the button text later).

### Page 1 – Startseite (Home)

1. **Background:** Drag **background_children.webp** onto the page and resize to cover the full page. Optionally add a blue rectangle overlay (color `#0d7ea0` or `#06607a`) with transparency for the hero area.
2. **Header:** Drag **banner_swim.png** to the top. Add a **Text** element next to it: **Schwimmschule Delphine Rosenheim** (use your brand color for text).
3. **Hero:** Add a **Text** (heading): **Hier lernt Rosenheim schwimmen!**  
   Add another **Text** (paragraph) with the hero description.  
   Add a **Shape** (rounded rectangle) and a **Text** on it: **Mehr erfahren** (button).
4. **Section “Unsere Schwimmschule”:** Add **Text** for the heading and each paragraph (copy from **Canva-Content-List.md** in this folder – “Seite 1 – Startseite”).
5. **Section “Unsere Kurse”:** Add three cards (rectangle shape or white box) and on each: **Text** for title (e.g. Anfängerkurs), **Text** for description, **Text** for “Mehr erfahren”.
6. **Footer:** Add **Text**: “© Copyright. Alle Rechte vorbehalten.” and links “Impressum” | “Datenschutz”.

### Pages 2–13 (Über uns, Team, Kursangebot, …)

- Do the same idea for each page:
  - **Background** (optional): use **background_swim.jpg** for inner pages.
  - **Header** on every page: logo + “Schwimmschule Delphine Rosenheim”.
  - **Hero**: one big heading (e.g. “Über uns”, “Team”, “Kontakt”).
  - **Content**: only **Text** elements for headings and body text.
  - **Buttons**: shape + **Text** (e.g. “Mehr erfahren”, “Kontakt”, “Jetzt anmelden”).
  - **Team page**: use the 6 team images + **Text** for each name, role, and description (from **Canva-Content-List.md** – “Seite 3 – Team”).

All text that should be editable must be **Canva Text elements**, not part of a single uploaded PDF or image.

---

## Step 5: Copy all text from the content list

1. Open **Canva-Content-List.md** in this **canva** folder (in a text editor or browser).
2. For each page (Seite 1 – Startseite, Seite 2 – Über uns, …), **copy** the text blocks and **paste** them into the **Text** elements you created in Canva.
3. Adjust font size and color: e.g. headings in **#06607a** or **#0d7ea0**, body text **#1a1a1a**, using your Brand kit colors.

Now every headline, paragraph, and button label is **editable** in Canva.

---

## Quick checklist

- [ ] Brand kit: 9 colors + logo added  
- [ ] Uploads: logo, background_children.webp, background_swim.jpg, 6 team photos  
- [ ] Design created with **13 pages**  
- [ ] Each page built with **Text** + **Images** (no single PDF as the only content)  
- [ ] All text copied from **Canva-Content-List.md** into your text boxes  
- [ ] Buttons made with **Shape + Text** so you can change the label anytime  

---

## Optional: Use the PDF only as reference

If you want to see the exact layout while building:

1. Export **canva-all-pages.html** (in this folder) as PDF (open in browser → Ctrl+P → Save as PDF).
2. Upload that PDF to Canva **Uploads**.
3. On each of your 13 pages, drag the **corresponding PDF page** as a **reference layer** (e.g. at 50% opacity or behind your elements).
4. Build your **Text** and **Images** on top of (or next to) that reference, then hide or delete the PDF layer when done.  
   This way your design stays **fully editable**.

---

## Where to find everything (all in or next to this **canva** folder)

| What you need | Where it is |
|---------------|-------------|
| Colors & logo | **Canva-Design-Brief.md** (this folder) |
| All text to copy | **Canva-Content-List.md** (this folder) |
| Images to upload | **assets/** (logo) and **../images/** and **../images/team/**; list in **assets/README.md** |
| More detail on editable setup | **CANVA-EDITABLE-SETUP.md** (this folder) |
| Upload PDF as reference | **canva-all-pages.html** (this folder) → print to PDF |
