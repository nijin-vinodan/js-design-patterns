/**
 * Pattern : Abstract
 * 
 * An Abstract Factory creates objects that are related by a common theme. 
 * In OOPS a Factory is an object that creates other objects. 
 * An Abstract Factory has abstracted out a theme which is shared by the newly created objects.
 */


// Here Controls is an Abstract Factory
class Controls {
    constructor(theme) {
        this.theme = theme;
        this.button = "Button";
        this.input = "Input";
    }

    get controls() {
        return `Displaying ${this.button} and ${this.input} in ${this.theme} theme`
    }
}

// LightFactory creates a new Controls with Light Theme
class LightFactory {
    constructor() {
        return new Controls("Light");
    }

}

// DarkFactory creates a new Controls with Dark Theme
class DarkFactory {
    constructor() {
        return new Controls("Dark");
    }
}

const LightThemeControls = new LightFactory();
const DarkThemeControls = new DarkFactory();

LightThemeControls.controls;
DarkThemeControls.controls;

