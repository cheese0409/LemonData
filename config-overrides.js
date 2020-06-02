const { override, addLessLoader } = require("customize-cra");

module.exports = override(
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            "@base-color": "#FFD13B",
            "@nav-item-padding-vertical": "20px",
            "@nav-item-font-size": "16px"
        }
    })
);
