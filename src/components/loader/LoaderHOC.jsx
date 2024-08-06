import React, { useState } from "react";
import { Circles } from "react-loader-spinner";
import './loader.css';

const LoaderSpinner = () => {
    return (
        <div id="loader--spinner">
            <Circles
                height="80"
                width="80"
                color="#ebf2fa"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperclassName=""
                visible={true}
            />
        </div>
    );
};

const LoaderHOC = (WrappedComponent) => {
    function HocComponent(props) {
        const [isLoading, setLoading] = useState(false);

        const setLoadingState = (isComponentLoading) => {
            setLoading(isComponentLoading);
        };

        return (
            <>
                {isLoading && <LoaderSpinner />}
                <WrappedComponent
                    {...props}
                    isLoading={isLoading}
                    setLoading={setLoadingState}
                />
            </>
        );
    }
    return HocComponent;
};

export default LoaderHOC;
