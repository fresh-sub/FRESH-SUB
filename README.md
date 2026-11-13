# FRESH SUB

פלטפורמת אנימה בעברית וב־RTL, מבוססת React + Vite + TypeScript + Tailwind ו־Supabase.

## הפעלה מקומית

1. התקינו Node.js 20 ומעלה.
2. `npm install`
3. העתיקו `.env.example` אל `.env` ומלאו `VITE_SUPABASE_URL` ו־`VITE_SUPABASE_ANON_KEY` מתוך Project Settings → API ב־Supabase.
4. הריצו את `supabase/migrations/202611130001_initial_schema.sql` ב־Supabase SQL Editor.
5. `npm run dev`

ללא הגדרות Supabase האתר עולה במצב תצוגה ריק, אך פעולות הדורשות מסד נתונים/חשבון לא יפעלו. אין תוכן הדגמה.

## בעלים ראשוני

כתובת הבעלים הראשוני מוגדרת במדיניות האבטחה ובפונקציות ה־SQL: `shahafavitan64@gmail.com`.
צרו משתמש דרך מסך ההרשמה עם כתובת זו, אשרו את החשבון בהתאם להגדרות Supabase, ואז התחברו. הרשאות OWNER מזוהות בשרת באמצעות `auth.jwt()` ולא באמצעות בדיקת צד־לקוח. אין להסתמך על שינוי כתובת המייל של חשבון זה; אם נדרשת החלפה, בצעו תהליך העברת בעלות מאובטח ישירות במסד הנתונים.

## מבנה

- `src/` — אפליקציית React, עמודים, נגן, הקשר אימות ושירותי Supabase.
- `supabase/migrations/` — סכימה, אינדקסים, טריגרים ו־RLS.
- `index.html` — קובץ הכניסה של Vite בשורש הפרויקט.

## פריסה ל־Cloudflare Pages

- חברו את מאגר GitHub בשם `fresh-sub`.
- Build command: `npm run build`
- Build output directory: `dist`
- הוסיפו ב־Pages את `VITE_SUPABASE_URL` ואת `VITE_SUPABASE_ANON_KEY`.
- כלל SPA נמצא ב־`public/_redirects` (Vite מעתיק אותו ל־dist).

Supabase הוא שירות נפרד. בדקו את מכסות התוכנית, אחסון התמונות, תעבורת הנתונים ועלויות/מגבלות אחסון והזרמת וידאו לפני פרסום.

## וידאו מ־Google Drive

המערכת מזהה קישורי שיתוף נפוצים ומציגה נגן embed של Google Drive. הניגון תלוי בהרשאות הקובץ, בסוג הקובץ ובמגבלות Google; קישור שיתוף אינו מבטיח ניגון בכל דפדפן או תמיכה בכל אפשרויות הנגן. אין כאן עקיפת הרשאות. העלו רק תוכן שיש לכם זכות להפיץ.

קובצי MP4 ו־HLS נתמכים בנגן HTML5/HLS כאשר מקור ישיר תואם זמין. SRT ו־VTT מנוהלים ככתוביות; קובצי SRT מומרים ל־VTT בדפדפן.

## אבטחה והערות תפעול

- לעולם אל תכניסו `service_role` או סוד אחר למשתני `VITE_*`.
- RLS מופעל בטבלאות. פעולות ניהול דורשות הרשאת OWNER/ADMIN בצד מסד הנתונים.
- קובצי המדיה נשמרים ב־Supabase Storage bucket בשם `media`; יש ליצור אותו כ־private ולהגדיר הרשאות Storage מתאימות לפני שימוש בהעלאות. סכימת הטבלאות אינה פותחת bucket ציבורי.
- סטטיסטיקות ניהול מבוססות על ספירות מסד הנתונים בלבד.
- בדקו הגדרות SMTP, אימות כתובת דוא"ל, כתובות Redirect ו־Site URL ב־Supabase Auth לפני השקה.
