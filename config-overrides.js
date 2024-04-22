const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
    alias({
        "@assets": "src/assets",
        "@components": "src/components",
        "@libs": "src/libs",
        "@pages": "src/pages",
        "@services": "src/services",
        "@store": "src/store"
    })(config);

    return config;
};
