export default defineEventHandler((event) => {
    setResponseHeaders(event, {
        'adc': '111'
    });
});
