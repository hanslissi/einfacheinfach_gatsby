# Einfach Einfach Landing page
This is the landing page for the StartUp EinfachEinfach.

## The tech stack
- Gatsby
- Framer-Motion for animations
- EmailJS for sending emails

## Setting up the project
- Clone the project
- Run `npm install`
- Create a `.env.development` file in the root directory
    - Add the following variables:
        ```
        GATSBY_EMAILJS_CONTACT_TEMPLATE_ID="YOUR_EMAILJS_TEMPLATE_ID"
        GATSBY_EMAILJS_SERVICE_ID="YOUR_EMAILJS_SERVICE_ID"
        GATSBY_EMAILJS_PUBLIC_KEY="YOUR_EMAILJS_PUBLIC_KEY"

        GATSBY_RECAPTCHA_SITE_KEY="YOUR_RECAPTCHA_SITE_KEY"
        ```
