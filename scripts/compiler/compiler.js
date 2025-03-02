"use strict";

import validatedActionRegistry from "./command_list.json";

export function $exec_func(actionIdentifier) {
    var actionString = validatedActionRegistry[actionIdentifier];
    if (actionString) {
        try {
            var actionFunction = new Function(actionString);
            actionFunction();
        }
        catch (error) {
            console.error("Error executing action \"".concat(actionIdentifier, "\":"), error);
        }
    }
    else {
        console.warn("Action \"".concat(actionIdentifier, "\" not found."));
    }
}

window.set_ff = function(font_family) {
    document.documentElement.classList.remove(`font-mono`, `font-sans`, `font-serif`);
    document.documentElement.classList.add(`font-${font_family}`);
};
window.set_fs = function(font_size) {
    document.documentElement.classList.remove(`text-sm`, `text-xs`, `text-lg`);
    document.documentElement.classList.add(`text-${font_size}`);
}

// Example of dynamically adding an action (if needed):
// validatedActionRegistry["pg_theme light"] = "set_theme('dark', 'light')";
// $exec_func("pg_theme light");
