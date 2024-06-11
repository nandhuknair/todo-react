import React from 'react';
import ContentLoader from 'react-content-loader';

const Shimmer = () => (
    <ContentLoader 
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="5" ry="5" width="400" height="20" /> 
        <rect x="0" y="30" rx="5" ry="5" width="400" height="20" /> 
        <rect x="0" y="60" rx="5" ry="5" width="400" height="20" /> 
        <rect x="0" y="90" rx="5" ry="5" width="400" height="20" /> 
    </ContentLoader>
);

export default Shimmer;