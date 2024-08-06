import moment from "moment";
import { dateFormat, dateTimeFormat, timeFormat, limitId } from "../utils/constants";

const useUtilsFunction = () => {

    const showTimeFormat = (data) => {
        return moment(data).format(timeFormat);
    };

    const showDateFormat = (data) => {
        return moment(data).format(dateFormat);
    };

    const showDateTimeFormat = (data) => {
        return moment(data).format(dateTimeFormat);
    };

    const getNumber = (value = 0) => {
        return Number(parseFloat(value || 0).toFixed(2));
    };

    const showingImage = (data) => {
        return data !== undefined && data;
    };

    const showingUrl = (data) => {
        return data !== undefined ? data : "!#";
    };

    const catchError = (error) => {
        const errorMessage = error.response?.data?.messageEn || error.response?.data?.message || error.message
        return errorMessage
    }

    const truncateString = (str) => {
        if (str?.length <= limitId) {
            return str;
        } else {
            return str?.slice(0, limitId) + '...';
        }
    }

    const trimFileName = (file, maxLength = 16) => {
        if (file?.length > 14) {
            const fileName = file instanceof File ? file.name : file;
            if (fileName.length > maxLength) {
                return (
                    fileName.slice(0, 4) +
                    "..." +
                    fileName.slice(fileName.length - maxLength)
                );
            } else {
                return fileName;
            }
        } else {
            return file;
        }
    };

    return {
        getNumber,
        showTimeFormat,
        showDateFormat,
        showingImage,
        showingUrl,
        showDateTimeFormat,
        catchError,
        truncateString,
        trimFileName
    };
};

export default useUtilsFunction;
