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

window.set_theme = function(fromTheme, toTheme) {
    document.documentElement.classList.remove(fromTheme);
    document.documentElement.classList.add(toTheme);
  
    console.log(`Setting theme ${toTheme}`);
};

// Example of dynamically adding an action (if needed):
// validatedActionRegistry["pg_theme light"] = "set_theme('dark', 'light')";
// $exec_func("pg_theme light");
