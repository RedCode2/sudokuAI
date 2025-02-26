import actionRegistry from "./command_list.json" assert { type: "json" };
import { ActionMapping } from "../interface/action_mapping";

const validatedActionRegistry: ActionMapping = actionRegistry as ActionMapping;

export function $exec_func(actionIdentifier: string): void {
    const actionString = validatedActionRegistry[actionIdentifier];

    if (actionString) {
        try {
            const actionFunction = new Function(actionString);
            actionFunction();
        } catch (error) {
            console.error(`Error executing action "${actionIdentifier}":`, error);
        }
    } else {
        console.warn(`Action "${actionIdentifier}" not found.`);
    }
}

// window.set_theme = function(fromTheme: string, toTheme: string): void {
//     document.documentElement.classList.remove(fromTheme);
//     document.documentElement.classList.add(toTheme);
  
//     console.log(`Setting theme ${toTheme}`);
// declare global {
//     interface Window {
//         set_theme: (fromTheme: string, toTheme: string) => void;
//     }
// }

// Example of dynamically adding an action (if needed):
// validatedActionRegistry["pg_theme light"] = "set_theme('dark', 'light')";
// $exec_func("pg_theme light");
