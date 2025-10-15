'use client'

import Script from 'next/script'

export default function VoiceflowChat() {
    return (
        <Script
            src="https://cdn.voiceflow.com/widget-next/bundle.mjs"
            strategy="afterInteractive"
            onLoad={() => {
                if (window.voiceflow) {
                    window.voiceflow.chat.load({
                        verify: { projectID: '68effa2b57c16d3196ff3757' },
                        url: 'https://general-runtime.voiceflow.com',
                        versionID: 'production',
                        voice: {
                            url: "https://runtime-api.voiceflow.com"
                        }
                    });
                }
            }}
        />
    )
}
