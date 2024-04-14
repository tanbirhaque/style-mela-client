import React from 'react';

const page = ({ params }: { params: { product: string } }) => {
    return (
        <div>
            <h1>Product ID: {params.product}</h1>
        </div>
    );
};

export default page;