import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { notifyError } from "../utils/toast";
import useUtilsFunction from '../hooks/useUtilsFunction';


const useAsync = (asyncFunction) => {
    const { catchError } = useUtilsFunction();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const {
        isUpdate,
        setIsUpdate,
        currentPage,
        searchText,
    } = useContext(AppContext);

    useEffect(() => {
        let unmounted = false;
        let source = axios.CancelToken.source();
        (async () => {
            try {
                setLoading(true);
                const response = await asyncFunction({ cancelToken: source.token });
                setLoading(false);
                setError("");
                setData(response);
            }
            catch (error) {
                if (!unmounted) {
                    setLoading(false)
                    const errorMessage = catchError(error)
                    notifyError(errorMessage);
                    setError(errorMessage)
                    setData([]);
                }
            }
        })();

        setIsUpdate(false);

        return () => {
            unmounted = true;
            source.cancel("Cancelled in cleanup");
        };
    }, [
        isUpdate,
        currentPage,
        searchText,
    ]);

    return {
        data,
        loading,
        error
    };
};

export default useAsync;
