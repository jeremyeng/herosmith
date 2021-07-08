<script>
  export let data;
  export let getPosTop;
  export let getPosLeft;

  function editImage(imageType) {
    const current = "icons/svg/mystery-man.svg";
    const fp = new FilePicker({
      type: "image",
      current: current,
      callback: (path) => {
        data.bio.data[imageType] = path;
      },
      top: getPosTop() + 40,
      left: getPosLeft() + 10,
    });
    return fp.browse();
  }
</script>

<div class="bio-tab">
  <div class="profile-image">
    <label>Profile Image</label>
    <img
      on:click={() => editImage("profileImage")}
      class="profile"
      src={data.bio.data.profileImage}
      title="New Test Actor"
      data-edit="img"
    />
  </div>

  <div class="token-image">
    <label>Token Image</label>
    <img
      on:click={() => editImage("tokenImage")}
      class="profile"
      src={data.bio.data.tokenImage}
      title="New Test Actor"
      data-edit="img"
    />
  </div>

  <div class="name">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" bind:value={data.bio.data.name} />
  </div>

  <div class="alignment">
    <label for="alignment">Alignment</label>
    <select name="alignment" id="alignment" bind:value={data.bio.data.alignment}>
      <option value="" />
      <option value="Lawful Good">Lawful Good</option>
      <option value="Neutral Good">Neutral Good</option>
      <option value="Chaotic Good">Chaotic Good</option>
      <option value="Lawful Neutral">Lawful Neutral</option>
      <option value="True Neutral">True Neutral</option>
      <option value="Chaotic Neutral">Chaotic Neutral</option>
      <option value="Lawful Evil">Lawful Evil</option>
      <option value="Neutral Evil">Neutral Evil</option>
      <option value="Chaotic Evil">Chaotic Evil</option>
    </select>
  </div>

  <div class="appearance">
    <label for="appearance">Appearance</label>
    <textarea type="text" id="appearance" name="appearance" bind:value={data.bio.data.appearance} />
  </div>
</div>

<style>
  img {
    width: 150px;
    margin: auto;
    display: block;
  }

  img:hover {
    cursor: pointer;
  }

  .bio-tab {
    display: grid;
    grid-gap: 1em;
    justify-content: center;
    grid-template-columns: repeat(2, 200px);
    max-width: 400px;
    margin: auto;
  }

  .profile-image,
  .token-image {
    text-align: center;
  }

  .name {
    display: inline-block;
    grid-column: 1;
    width: 100%;
  }

  .alignment {
    display: inline-block;
    grid-column: 2;
    width: 100%;
  }

  .appearance {
    grid-column: 1 / 3;
  }

  select[name="alignment"] {
    display: block;
    width: 100%;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  textarea {
    resize: none;
    height: 100px;
  }
</style>
