import LevelUp from "./LevelUp.svelte";

class LevelUpWindow extends Application {
  constructor(actorId, classId) {
    super();
    this.actor = game.actors.get(actorId);
    this.class = this.actor.items.get(classId);

    this.features = {};
  }

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      template: `modules/herosmith/templates/level-up-window.html`,
      tabs: [{ navSelector: ".tabs", contentSelector: "form", initial: "features" }],
      width: 720,
      height: 650,
    });
  }

  activateListeners(html) {
    this.component = new LevelUp({
      target: html.get(0),
      props: {
        actor: this.actor,
        klass: this.class,
        closeWindow: this.close.bind(this),
      },
    });
  }
}

Hooks.on("ready", async function () {});

Hooks.on("renderActorSheet5eCharacter", async function (sheet, element, character) {
  const actor = game.actors.get(sheet.actor.id);
  const classes = actor.data.items.filter((item) => item.type === "class");
  for (let klass of classes) {
    const classItem = $("li[data-item-id='" + klass.id + "']");
    try {
      const edit = $(".item-control.item-edit", classItem);
      const icon = $(`<a class="item-control level-up" title="Level Up Class">
          <i class="fas fa-arrow-up"></i>
      </a>`)[0];

      icon.dataset.classId = klass.id;
      icon.dataset.actorId = actor.id;
      icon.addEventListener("click", onLevelUp);

      if (edit[0]) edit[0].before(icon);
    } catch (e) {
      console.error("Character Builder 5e | Failed to inject onto item: ", actor.id);
    }
  }
});

function onLevelUp(event) {
  event.preventDefault();
  const ele = event.currentTarget.closest(".level-up");

  const actorId = ele.dataset.actorId;
  const classId = ele.dataset.classId;

  const luw = new LevelUpWindow(actorId, classId);
  luw.render(true);
}
