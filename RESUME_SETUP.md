# 📄 Resume Setup Guide

## How to Add Your Resume

### Step 1: Get Your Resume as PDF

If you don't have a PDF version:
- Create your resume in Word/Google Docs
- Export as PDF
- Name it `resume.pdf`

### Step 2: Place Resume File

1. Open your portfolio folder:
   ```
   c:\Users\sudha\Downloads\aws-tutorials\portfolio-site\
   ```

2. Navigate to the `public` folder

3. Replace the sample `resume.pdf` with your actual resume

### Step 3: Test the Download Button

1. Run your site:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000`

3. Click the **"Download Resume"** button

4. Your resume should download as `Sudhakar_Soni_Resume.pdf`

---

## What You Have

✅ **Download Resume Button** - Now fully functional!
✅ **Get In Touch Button** - Scrolls to contact form
✅ **Resume File Location** - `public/resume.pdf`

---

## File Structure

```
portfolio-site/
├── public/
│   └── resume.pdf          ← Your resume goes here
├── src/
│   ├── app/
│   ├── components/
│   └── ...
└── ...
```

---

## How It Works

- **Download Button** calls `handleDownloadResume()`
- Function downloads file from `/resume.pdf` (in public folder)
- Downloads as `Sudhakar_Soni_Resume.pdf`
- Works on all devices (desktop, mobile, tablet)

---

## Tips

1. **Keep Resume Updated**
   - Always keep your resume in `public/resume.pdf`
   - Update it regularly with new experience

2. **File Size**
   - Keep PDF under 5MB for fast download
   - Compress if needed

3. **Format**
   - Use professional PDF format
   - Ensure fonts are embedded
   - Test download before deploying

---

**Your Resume Download is now ready! 🎉**
