'use client'

import KeenAppsProvider from '@/context/keen.context';
import React from 'react';

const Providers = ({ children }) => {
    return (
        <KeenAppsProvider>
            {children}
        </KeenAppsProvider>

    );
};

export default Providers;