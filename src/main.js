import LevelUpWindow from './LevelUpWindow.svelte';

class MyApp extends Application {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      template: `modules/herosmith/templates/level-up-window.html`,
      tabs: [{navSelector: ".tabs", contentSelector: "form", initial: "features"}],
      width: 600,
      height: 600
    });
  }
  
  activateListeners(html) {
    this.component = new LevelUpWindow({
      target: html.get(0),
      props: {
        name: "Foundry",
      },
    });
  }
}

Hooks.on("ready", () => {
	console.log("Herosmith | LOADED");
  const app = new MyApp();
  app.render(true);
});
