import axios from "axios";

const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT, api_key = process.env.NEXT_PUBLIC_API_KEY || "";
export const API = {
    /**
     * Just a wrapper for the APOD api. Documented here: @todo put url
     * @param start_date
     * @param end_date
     * @param image_only
     * @returns {Promise<any>}
     */
    apod: async function ({start_date = new Date(), end_date = new Date(), image_only = false}) {

        start_date = new Date(start_date).toISOString().split('T')[0];
        end_date = new Date(end_date).toISOString().split('T')[0];

        let params = new URLSearchParams({
            start_date,
            end_date,
            api_key
        });

        if (start_date === end_date) {
            params = new URLSearchParams({
                api_key,
                date: start_date
            })
        }

        let {data} = await axios.get(`${endpoint}?${params}`);

        if (image_only && start_date === end_date) {
            // if we only want images, go backwards until we get one. (not optimal but looks nice)
            while (data.media_type !== 'image') {
                start_date = extractDay(dayBefore(start_date))
                params = new URLSearchParams({
                    api_key,
                    date: start_date
                })

                let r = await axios.get(`${endpoint}?${params}`);
                data = r.data;
            }
        }

        return data;
    },
}

/**
 * Returns a Date object for the day before the date given.
 * @param date
 * @returns {Date}
 */
function dayBefore(date){
    date = new Date(date);
    return new Date(date.getTime() - 1000 * 60 * 60 * 24);
}

/**
 * Turns date into standard format for consumption by API
 * @param date
 * @returns {string}
 */
function extractDay(date){
    return new Date(date).toISOString().split("T")[0];
}

/**
 * This function allows us to optimize images throughout the application. We use NextJS's built in next/image processor,
 * but behind a CDN for caching.
 *
 * @param src
 * @param width
 * @param quality
 * @returns {string}
 */
export function optimize(src, width, quality) {
    let baseURL = '/_next/image';
    let params = new URLSearchParams({
        url: src,
        w: width,
        q: quality
    })
    return `${baseURL}?${params}`;
}


