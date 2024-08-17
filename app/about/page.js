
'use client';

import { sendGTMEvent } from '@next/third-parties/google';

const About = () => {
  return (
      <div>
          <h1>About Page</h1>
          <p>This is the about page.</p>
          <button
              onClick={() =>
                  sendGTMEvent('event', 'aboutButtonClicked', { value: 'about button was clicked' })
              }
          >
              Send About Event
          </button>
      </div>
  );
}

export default About