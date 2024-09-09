import { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        // Add your subscription logic here
        console.log(`Subscribed with email: ${email}`);
    };

    return (
        <div id="newsletter" className="newsletter-container">
            <h4>Newsletter</h4>
            <h2>JOIN US</h2>
            <p>
                Stay updated with the latest news, offers, and updates from our pharmacy. Subscribe to our
                newsletter for exclusive content and be the first to know about new services and health tips.
            </p>
            <div className="newsletter-input-container">
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSubscribe}>Subscribe</button>
            </div>
        </div>
    );
};
