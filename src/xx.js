const xx = {
    fileMappings: {
        modals: './src/modals.js',
        nameA: './src/nameX.js',
        // Další mapování názvů na cesty k souborům
    },
    load: function loadScript(name) {
        const filePath = this.fileMappings[name];
        if (!filePath) {
            throw new Error(`Script '${name}' not found in mappings.`);
        }
        document.getElementById("xxAPIscripts").innerHTML += '<script src="' + filePath + '"></script>';
    },
    addFile: function addFileMapping(name, filePath) {
        if (this.fileMappings[name]) {
            throw new Error(`Script '${name}' already exists in mappings.`);
        }
        this.fileMappings[name] = filePath;
    }
};
