// Prepare the email
const msg = {
    to: 'benlvink@gmail.com', // Your actual email
    from: 'benlvink@gmail.com', // Your verified sender email
    subject: `New contact form submission from ${name}`,
    html: `
      <h3>🌱 New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Sent from benjaminvink.com contact form</small></p>
    `,
  }