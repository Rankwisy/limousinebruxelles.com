/** Legal pages — English (en-US) content. */
import { SITE } from './site.mjs';

const M = `<a href="mailto:${SITE.email}">${SITE.email}</a>`;

export const LEGAL = [
  {
    slug: 'legal-notice.html',
    title: 'Legal Notice | Aurum — Limousine Brussels',
    description: 'Legal notice for limousinebruxelles.com, operated by Aurum — Limousine Brussels, Belgium.',
    h1: 'Legal notice',
    sections: `
        <h2>Site publisher</h2>
        <p>This website, <strong>limousinebruxelles.com</strong>, is published by <strong>Aurum — Limousine Brussels</strong>, a chauffeured vehicle rental provider based in Brussels, Belgium.</p>
        <p>Contact: ${M}</p>
        <h2>Activity</h2>
        <p>Rental of limousines, cars with chauffeur, minivans, minibuses and motorcoaches with a professional driver, in Brussels and throughout Belgium, as well as to neighboring countries on request.</p>
        <h2>Hosting</h2>
        <p>The site is served from static hosting infrastructure. For any question relating to hosting, please write to the address above.</p>
        <h2>Intellectual property</h2>
        <p>All content on this site (text, structure, layout, visual identity) is protected by copyright. Any reproduction, representation or adaptation, in whole or in part, without prior written permission is prohibited.</p>
        <p>Illustrative photographs are used under a royalty-free licence or are generated images, and remain the property of their respective authors. They are illustrative and do not depict specific vehicles in the fleet.</p>
        <h2>Rates and availability</h2>
        <p>The rates shown on this site are <strong>indicative</strong> and stated in euros (EUR). They do not constitute a contractual offer. The final price is given in the personalized quote issued after we receive your request, based on duration, passenger count and the exact route.</p>
        <h2>Limitation of liability</h2>
        <p>Aurum — Limousine Brussels endeavors to keep the information on this site accurate and current, without being able to guarantee the complete absence of errors or omissions. Information is provided for guidance and may be changed at any time.</p>
        <h2>Governing law</h2>
        <p>This site and the services described on it are governed by Belgian law. Any dispute falls within the jurisdiction of the Belgian courts.</p>
      `,
  },
  {
    slug: 'privacy-policy.html',
    title: 'Privacy Policy | Aurum — Limousine Brussels',
    description: 'Privacy policy and personal data handling on limousinebruxelles.com, in line with the GDPR.',
    h1: 'Privacy policy',
    sections: `
        <p class="lead">Aurum — Limousine Brussels takes the protection of your personal data seriously. This policy explains what we collect, why, and what your rights are.</p>
        <h2>Data controller</h2>
        <p>Aurum — Limousine Brussels, Brussels, Belgium. Contact: ${M}</p>
        <h2>Data we collect</h2>
        <p>We only collect the details you send us voluntarily through the quote form or by email:</p>
        <ul>
          <li>your name;</li>
          <li>your email address;</li>
          <li>details of your trip: preferred date, pickup location, destination, number of passengers, vehicle type;</li>
          <li>anything you choose to add in the message field.</li>
        </ul>
        <h2>Purpose of processing</h2>
        <p>This data is used exclusively to:</p>
        <ul>
          <li>answer your quote request;</li>
          <li>arrange and deliver the transportation service if you confirm the booking;</li>
          <li>maintain the commercial relationship.</li>
        </ul>
        <p>Your data is never sold, rented or passed to third parties for commercial purposes.</p>
        <h2>Legal basis</h2>
        <p>Processing rests on your consent (the form checkbox) and on pre-contractual steps taken at your request.</p>
        <h2>Retention period</h2>
        <p>Quote requests are kept for as long as needed to handle your enquiry and, where a booking follows, for the statutory retention period applying to commercial records.</p>
        <h2>Form transmission</h2>
        <p>The quote form routes your message to our email address through a third-party form relay. That provider acts purely as a technical forwarding intermediary and does not reuse your data.</p>
        <h2>Cookies</h2>
        <p>This site sets <strong>no advertising or behavioral analytics cookies</strong>. Only the technical resources needed to display fonts and icons are loaded from external content delivery networks.</p>
        <h2>Your rights</h2>
        <p>Under the General Data Protection Regulation (GDPR), you have the right to access, rectify, erase, restrict and object to the processing of your data, as well as the right to data portability.</p>
        <p>To exercise these rights, write to us at ${M}. You may also lodge a complaint with the Belgian Data Protection Authority.</p>
        <h2>Visitors outside the European Union</h2>
        <p>If you contact us from the United States or another country outside the EU, your details are processed and stored in the European Union, under the GDPR. This generally offers protection at least equivalent to the standards you are used to.</p>
        <h2>Security</h2>
        <p>The site is served exclusively over HTTPS. We apply reasonable measures to protect the data you send us against unauthorized access.</p>
      `,
  },
];
