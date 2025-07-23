import styles from './OwnerPanelJobPosition.module.scss';

export function OwnerPanelJobPosition() {
  return (
    <div className={styles.jobWrapper}>
      <h3>Frontend Developer</h3>
      <p>
        <b>Company: </b>
        <a href="https://www.linkedin.com/company/owner-panel/posts/?feedView=all">Owner Panel</a> |
        Warsaw | January 2024 - Working now
      </p>
      <p>
        <b>Stack: </b>Next.js, React, React Router, Mantine, Redux, Redux Toolkit, Axios, Zustand,
        dayjs, i18n, SaSS, Google Recaptcha
      </p>
      <h4 className={styles.aboutProject}>About Project:</h4>
      <p className={styles.serviceDescription}>
        <a href="https://owner-panel.com/">Owner Panel</a> is a service, that allows rental property
        owners to keep accounting records online, in Admin panel. It allows to accept payments
        online, document bookings, build your own buisiness website using website constructor. The
        project consists of 3 major parts: Admin Panel, Client's website and company landing page. I
        played a significant role in the development of the project, as Frontend developer. Below
        are mentioned most remembered features that I implemented:
      </p>
      <h4 className={styles.doneOnAdminPanelTitle}>What was done on Admin Panel:</h4>
      <ol className={styles.adminPanelAchievementList}>
        <li>
          Integrated <b>Prettier</b> as a code formatter and configured automatic code cleanup via
          linting scripts to ensure consistent code quality across the project.
        </li>
        <li>
          Fixed numerous layout and styling issues left by the previous developer, improving the
          overall UI/UX of existing pages.
        </li>
        <li>
          Restored and debugged all legacy forms on the platform, ensuring full functionality and
          error-free submissions.
        </li>
        <li>
          Implemented robust form validation using <b>Formik</b> and <b>Yup</b> for all user-facing
          forms.
        </li>
        <li>
          Developed a <b>multi-step hotel creation flow</b>, guiding users through the process
          instead of presenting one long form — improving completion rates and UX.
        </li>
        <li>
          Created a <b>Subscription Management Page</b> with search filters, pagination, and
          persistent search results using searchParams.
        </li>
        <li>
          Added <b>multi-language support</b> (English, Russian, Spanish, Polish, German, Ukranian, Indonesian) throughout the
          application using an i18n framework.
        </li>
        <li>
          Integrated <b>Stripe payments</b>, including secure checkout and redirect pages for
          payment completion feedback.
        </li>
        <li>
          Built a <b>User Hotel Management Panel</b>, allowing hotel owners to view, update, and
          manage room availability, prices, and amenities.
        </li>
        <li>
          Wrote a custom <b>global error handler</b>, displaying user-friendly modal dialogs for
          HTTP errors (400, 401, 403, 500) with descriptive messages and codes.
        </li>
        <li>
          Optimized application performance by implementing <b>lazy loading</b> for non-critical
          components to improve initial load speed.
        </li>
        <li>
          Implemented <b>lazy retry</b> feature, to prevent application from crushing after
          redeployment.
        </li>
        <li>
          Created a <b>Reservation Calendar</b> using <b>Mantine's Calendar</b>, allowing users to
          select check-in/check-out dates and hotel owners to block unavailable days.
        </li>
        <li>
          Built a <b>Hotel Site Customization Page</b> within the admin panel, where users can:{' '}
          <ul className={styles.innerList}>
            <li>Edit their domain or add a custom one</li>
            <li>Change logos and color themes</li>
            <li>Add social media links</li>
            <li>Write multilingual hotel descriptions (7 languages)</li>
            <li>
              Preview changes in real-time using an embedded <b>iFrame</b>
            </li>
          </ul>
        </li>
        <li>
          Integrated <b>ChatGPT API</b> to auto-generate hotel descriptions and used neural
          translation for automatic multilingual output (6 languages).
        </li>
        <li>
          Developed a <b>step-by-step onboarding experience</b>, helping new users quickly
          understand the platform, fill in required data, and start earning revenue.
        </li>
        <li>
          Made the entire app fully responsive, supporting screen widths down to <b>360px</b>, with
          all layouts adapted for multilingual content.
        </li>
        <li>
          Integrated <b>Google Places API</b> for address autocomplete and added <b>Google Maps</b>{' '}
          to display user-defined locations dynamically.
        </li>
        <li>
          Embedded <b>Stripe Dashboard</b> directly into the app, allowing users to securely view
          their payment history without leaving the platform.
        </li>
      </ol>
      <h4 className={styles.doneOnHotelSiteTitle}>What was done on Hotel's site:</h4>
      <ol className={styles.hotelSiteAchievementList}>
        <li>
          Developed a <b>fully responsive</b> hotel website, ensuring seamless display across all
          devices and screen sizes.
        </li>
        <li>
          Connected the website to a <b>database</b>, enabling dynamic content rendering based on
          the client’s custom domain (multi-tenant architecture).
        </li>
        <li>
          Created a <b>6-language multilingual</b> version of the site, carefully preserving layout
          integrity across all locales and scripts.
        </li>
        <li>
          Implemented <b>internationalized URL paths</b> to improve <b>SEO</b> and provide localized
          browsing experiences.
        </li>
        <li>
          Developed support for <b>custom color themes</b>, allowing hotel owners to personalize
          their site's look and feel based on branding preferences.
        </li>
        <li>
          Built a <b>reservation calendar</b> using the <b>react-calendar</b> library, enabling
          users to select check-in/check-out dates while highlighting unavailable days based on
          existing bookings.
        </li>
      </ol>
      <h4 className={styles.doneOnLandingPageTitle}>What was done on the Landing Page:</h4>
      <ol className={styles.landingAchievements}>
        <li>
          Built a <b>pixel-perfect landing page</b> based on a Figma design, maintaining a layout
          accuracy within a 10px margin.
        </li>
        <li>
          Implemented a <b>responsive design</b>, ensuring the landing page displays correctly on
          all screen sizes and devices.
        </li>
        <li>
          Added <b>internationalized URL paths</b> to enhance the landing page’s{' '}
          <b>SEO performance</b>
          across different languages and regions.
        </li>
      </ol>
    </div>
  );
}
