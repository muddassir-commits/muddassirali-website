'use client';

import { useRef, useState } from 'react';
import { site, whatsappLink } from '../lib/site';
import { trackLead } from '../lib/track';

// This site is a static export with no server, so the form never "sends" on its own.
// It writes the message for you and opens WhatsApp or your email app with it filled in.
// You press send there, so the message really arrives. Nothing is stored on this website.

const TOPICS = [
  'Property marketing (Veloxis Global)',
  'Training or a workshop',
  'A question about a guide',
  'Something else',
];

function buildText({ name, contact, topic, message }) {
  const lines = [`Hi Muddassir, this is ${name.trim()}.`, `Topic: ${topic}`];
  if (contact.trim()) lines.push(`You can reach me at: ${contact.trim()}`);
  lines.push('', message.trim(), '', '(Sent from the contact form on muddassirali.com)');
  return lines.join('\n');
}

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', contact: '', topic: TOPICS[0], message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const statusRef = useRef(null);

  const update = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = 'Please add your name.';
    if (values.message.trim().length < 10) next.message = 'Please write a short message (at least 10 characters).';
    setErrors(next);
    if (Object.keys(next).length) {
      const first = document.getElementById(`cf-${Object.keys(next)[0]}`);
      if (first) first.focus();
      return false;
    }
    return true;
  };

  const announce = (text) => {
    setStatus(text);
    requestAnimationFrame(() => statusRef.current && statusRef.current.focus());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const via = e.nativeEvent?.submitter?.value || 'whatsapp';
    if (!validate()) return;
    const text = buildText(values);

    if (via === 'email') {
      const subject = `Website message: ${values.topic}`;
      const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
      trackLead('email', 'contact_form');
      window.location.href = href;
      announce(
        `Your email app should now be open with the message filled in. Press send there to deliver it. If no email app opened, use "Copy message" and send it to ${site.email}.`
      );
      return;
    }

    const href = whatsappLink(text);
    trackLead('whatsapp', 'contact_form');
    // No "noopener" feature here: with it, window.open always returns null and we could not detect a blocked popup.
    const win = window.open(href, '_blank');
    if (win) {
      win.opener = null;
    } else {
      window.location.href = href;
    }
    announce(
      `WhatsApp should now be open in a new tab with your message filled in. Press send there to deliver it. If it did not open, message ${site.whatsappDisplay} directly.`
    );
  };

  const copyMessage = async () => {
    if (!validate()) return;
    const text = buildText(values);
    try {
      await navigator.clipboard.writeText(text);
      announce(`Message copied. Paste it into an email to ${site.email} or a WhatsApp message to ${site.whatsappDisplay}.`);
    } catch {
      announce(`Your browser blocked copying. Please select your message and copy it by hand, then send it to ${site.email}.`);
    }
  };

  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-describedby="cf-how">
      <p id="cf-how" className="note">
        This form does not send anything by itself. It writes your message and opens WhatsApp or your email app with
        it filled in. You press send there, so your message reaches me for sure.
      </p>

      <div className="field">
        <label htmlFor="cf-name">Your name</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={values.name}
          onChange={update}
          aria-invalid={errors.name ? 'true' : undefined}
          aria-describedby={errors.name ? 'cf-name-error' : undefined}
        />
        {errors.name && (
          <p id="cf-name-error" className="field-error">
            {errors.name}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="cf-contact">Email or phone (optional)</label>
        <span id="cf-contact-hint" className="hint">
          Only if you want a reply somewhere other than where you send this.
        </span>
        <input
          id="cf-contact"
          name="contact"
          type="text"
          autoComplete="email"
          value={values.contact}
          onChange={update}
          aria-describedby="cf-contact-hint"
        />
      </div>

      <div className="field">
        <label htmlFor="cf-topic">What is it about?</label>
        <select id="cf-topic" name="topic" value={values.topic} onChange={update}>
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="cf-message">Your message</label>
        <textarea
          id="cf-message"
          name="message"
          required
          value={values.message}
          onChange={update}
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={errors.message ? 'cf-message-error' : undefined}
        />
        {errors.message && (
          <p id="cf-message-error" className="field-error">
            {errors.message}
          </p>
        )}
      </div>

      <div className="form-actions">
        <button className="btn" type="submit" name="via" value="whatsapp">
          Open in WhatsApp
        </button>
        <button className="btn btn--ghost" type="submit" name="via" value="email">
          Open in email
        </button>
        <button className="btn btn--ghost" type="button" onClick={copyMessage}>
          Copy message
        </button>
      </div>

      <p ref={statusRef} className="form-status note note--leaf" role="status" aria-live="polite" tabIndex={-1}>
        {status}
      </p>
    </form>
  );
}
