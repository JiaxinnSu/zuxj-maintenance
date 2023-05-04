import * as React from 'react';
import { createRoot } from 'react-dom/client'

const rootEl = document.getElementById('root');

const root = createRoot(rootEl);

root.render(
    <React.StrictMode>
        <div>index</div>
    </React.StrictMode>
);
