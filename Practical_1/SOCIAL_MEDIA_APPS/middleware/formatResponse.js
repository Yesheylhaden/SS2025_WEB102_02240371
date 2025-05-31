const formatResponse = (req, res, next) => {
    // Store the original res.json method
    const originalJson = res.json;

    // Override res.json method
    res.json = function (obj) {
        const acceptHeader = req.headers.accept;

        // Check if the client accepts XML
        if (acceptHeader && acceptHeader.includes('application/xml')) {
            // Convert JSON to XML format
            const xml = jsonToXml(obj);
            res.set('Content-Type', 'application/xml');
            return res.send(xml);
        }

        // Default to JSON
        return originalJson.call(this, obj);
    };

    next();
};

// Function to convert JSON to XML format
const jsonToXml = (obj) => {
    let xml = '';

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            xml += `<${key}>`;
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                xml += jsonToXml(obj[key]);
            } else {
                xml += obj[key];
            }
            xml += `</${key}>`;
        }
    }

    return xml;
};

module.exports = formatResponse;