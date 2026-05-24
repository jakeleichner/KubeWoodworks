/* ============================================================
   KUBE WOODWORKS — Site Content
   ============================================================
   This is the only file you need to edit to update the site.

   IMPORTANT: Use straight apostrophes ' not curly ones.
   If a description has an apostrophe (like "it's"), write it
   as-is — single quotes are fine inside double-quoted strings,
   or escape them like this: it\'s

   ── HOW TO UPDATE CONTACT INFO ──────────────────────────────
   Find the "contact" section and fill in phone and email.
   Replace the placeholder text including the brackets.

   ── HOW TO ADD A NEW PIECE ──────────────────────────────────
   1. Drop the photo into the /images/ folder.
   2. Find the "COPY THIS BLOCK" template at the bottom of the
      pieces list. Copy everything from the opening { to the
      closing },
   3. Paste it above that template (but still inside the [ ]).
   4. Fill in the details.
   5. Save the file. Refresh the site. Done.
   ============================================================ */

var KUBE = {

  /* ── Contact info ─────────────────────────────────────────── */
  contact: {
    phone: '(605) 660-7515',
    email: '[orders-email@example.com]',  // e.g. orders@kubewoodworks.com

    // HOW TO SET UP THE CONTACT FORM:
    // 1. Go to formspree.io and create a free account (free tier = 50 submissions/month)
    // 2. Click "New Form", name it "Kube Woodworks"
    // 3. Copy the form ID from the form's dashboard (looks like: abc1234)
    // 4. Replace 'YOUR_FORM_ID' below with that ID
    // 5. Formspree will forward messages to the email you signed up with
    formspreeId: 'mykvdjrp',
  },

  /* ── Pieces ──────────────────────────────────────────────────
     Pieces appear on the site in the order listed here.
     The most recent piece is usually listed first.           */
  pieces: [

    {
      title:       'Walnut End Table',
      wood:        'Black Walnut',
      dimensions:  '24" × 18" × 24"',
      finish:      'Rubio Monocoat',
      year:        '2025',
      description: 'Solid walnut end table with hand-cut dovetail joinery at the apron corners and a single lower shelf in figured maple. Built to be used every day and handed down.',

      // Photo: change null to "images/your-filename.jpg" when ready.
      // Example: photo: 'images/walnut-end-table.jpg',
      photo:       null,
      photoAlt:    'Walnut end table with dovetail joinery',

      // available: true  = for sale, contact Dave to arrange
      // available: false = sold / not in stock (piece stays visible as portfolio)
      available:   true,
    },

    /* ── COPY THIS BLOCK TO ADD A NEW PIECE ────────────────────
    {
      title:       '',
      wood:        '',
      dimensions:  '',
      finish:      '',
      year:        '',
      description: '',
      photo:       null,
      photoAlt:    '',
      available:   true,
    },
    ─────────────────────────────────────────────────────────── */

  ],

};
