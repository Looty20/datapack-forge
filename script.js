import { compileDatapack, exportZip } from './compiler.js';
import { perks } from './perks/index.js';

const selectedPerks = new Set();
const settings = {};
const perkDefaults = {};
let currentCustomizationId = null;

function renderPerkCard(perk, containerId) {
  const card = document.createElement("section");
  card.className = "perk-card";
  if (!perk.files) {
    card.classList.add("unimplemented");
  }
  card.dataset.perkId = perk.id;
  card.onclick = () => {
    if (card.classList.contains("unimplemented")) return;
    card.classList.toggle("selected");
    if (card.classList.contains("selected")) {
      selectedPerks.add(perk.id);
    } else {
      selectedPerks.delete(perk.id);
    }
  };

  const hasSettings = Array.isArray(perk.settings) && perk.settings.length > 0;
  const customizeBtn = document.createElement("button");
  customizeBtn.className = `customize-btn ${hasSettings ? '' : 'disabled'}`;
  customizeBtn.textContent = "Details";
  if (hasSettings && perk.files) {
    customizeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      customizePerk(perk.id);
    });
  } else {
    customizeBtn.disabled = true;
  }

  card.innerHTML = `
    <div class="perk-icon"><span>${perk.icon}</span></div>
    <div class="perk-info">
      <h2>${perk.name}</h2>
      <p>${perk.description}</p>
    </div>
  `;

  card.querySelector(".perk-info").appendChild(customizeBtn);
  if (selectedPerks.has(perk.id)) card.classList.add("selected");
  document.getElementById(containerId).appendChild(card);
}

function customizePerk(id) {
  currentCustomizationId = id;
  const perk = perks.find(p => p.id === id);
  if (!perk) return;
  if (!settings[id]) settings[id] = {};
  if (!perkDefaults[id]) perkDefaults[id] = {};

  for (const setting of perk.settings || []) {
    if (settings[id][setting.id] === undefined) settings[id][setting.id] = setting.default;
    if (perkDefaults[id][setting.id] === undefined) perkDefaults[id][setting.id] = setting.default;
  }

  const form = document.getElementById("customization-form");
  form.innerHTML = "";

  for (const setting of perk.settings || []) {
    const group = document.createElement("div");
    group.className = "form-group";
    const currentValue = settings[id][setting.id];
    let inputHTML = "";

    if (["slider", "number", "text", "textarea"].includes(setting.type)) {
      inputHTML = `<label for="${setting.id}">${setting.label}</label>`;
    }

    if (setting.type === "slider") {
      inputHTML += `
        <div class="slider-wrapper">
          <input type="range" id="${setting.id}" min="${setting.min}" max="${setting.max}" step="${setting.step}" value="${currentValue}">
          <input type="number" id="${setting.id}-number" min="${setting.min}" max="${setting.max}" step="${setting.step}" value="${currentValue}" style="width: 4rem; margin-left: 1rem;">
        </div>`;
    } else if (setting.type === "number") {
      inputHTML += `<input type="number" id="${setting.id}" value="${currentValue}" min="${setting.min}" max="${setting.max}" step="${setting.step}">`;
    } else if (setting.type === "text") {
      inputHTML += `<input type="text" id="${setting.id}" value="${currentValue}" placeholder="${setting.placeholder || ''}">`;
    } else if (setting.type === "textarea") {
      inputHTML += `<textarea id="${setting.id}" rows="${setting.rows || 4}" placeholder="${setting.placeholder || ''}">${currentValue}</textarea>`;
    } else if (setting.type === "checkbox") {
      inputHTML = `
        <label class="checkbox-wrapper">
          <input type="checkbox" id="${setting.id}" ${currentValue ? "checked" : ""}>
          <span>${setting.label}</span>
        </label>`;
    } else if (setting.type === "radio") {
      inputHTML = `<fieldset><legend>${setting.label}</legend>`;
      inputHTML += setting.options.map(opt => {
        const checked = (settings[id][setting.id] === opt.value) ? "checked" : "";
        return `
          <label class="radio-wrapper">
            <input type="radio" name="${setting.id}" value="${opt.value}" ${checked}>
            <span>${opt.label}</span>
          </label>`;
      }).join('');
      inputHTML += `</fieldset>`;
    } else if (setting.type === "section") {
      inputHTML = `<div data-static="true"><strong style="display:block; margin-top:1em;">${setting.text}</strong></div>`;
    } else if (setting.type === "note") {
      inputHTML = `<div data-static="true"><p style="opacity: 0.75; font-size: 0.85rem;">${setting.text}</p></div>`;
    } else if (setting.type === "separator") {
      inputHTML = `<div data-static="true"><hr style="border-color: #415a77;"></div>`;
    }

    group.innerHTML = inputHTML;
    form.appendChild(group);

    if (setting.type === "slider") {
      const slider = document.getElementById(setting.id);
      const numberInput = document.getElementById(`${setting.id}-number`);

      const sync = (value) => {
        slider.value = value;
        numberInput.value = value;
      };

      slider.addEventListener("input", () => sync(slider.value));
      numberInput.addEventListener("input", () => sync(numberInput.value));
    }     
  }

  document.getElementById('customization-title').textContent = perk.name;
  document.getElementById('customization-description').textContent = perk.description;
  document.getElementById('customization-overlay').classList.remove('hidden');
  document.querySelectorAll("input, textarea").forEach(input => input.defaultValue = input.value);
}

perks.forEach(perk => {
  const container = {
    recipes: "recipes-container",
    loot: "loot-container",
    tweaks: "tweaks-container",
    players: "players-container",
    enemies: "enemies-container",
    other: "other-container"
  }[perk.category];
  if (container) renderPerkCard(perk, container);
});

document.getElementById('close-overlay').addEventListener('click', () => {
  if (!currentCustomizationId) return;
  const perkId = currentCustomizationId;
  const form = document.getElementById("customization-form");
  let changed = false;
  if (!settings[perkId]) settings[perkId] = {};

  form.querySelectorAll("input, textarea").forEach(input => {
    const key = input.name || input.id;
    if (!key) return;
    let newValue;
    if (input.type === "checkbox") {
      newValue = input.checked;
      if (newValue !== input.defaultChecked) changed = true;
      settings[perkId][key] = newValue;
    } else if (input.type === "radio") {
      if (!input.checked) return;
      newValue = input.value;
      if (newValue !== input.defaultValue) changed = true;
      settings[perkId][key] = newValue;
    } else {
      newValue = input.value;
      if (newValue !== input.defaultValue) changed = true;
      settings[perkId][key] = input.type === "number" ? Number(newValue) : newValue;
    }
  });

  if (changed) {
    const card = document.querySelector(`.perk-card[data-perk-id="${perkId}"]`);
    if (card && !card.classList.contains("selected")) {
      card.classList.add("selected");
      selectedPerks.add(perkId);
    }
  }

  document.getElementById('customization-overlay').classList.add('hidden');
});

document.getElementById('reset-overlay').addEventListener('click', () => {
  if (!currentCustomizationId) return;
  const perkId = currentCustomizationId;
  const form = document.getElementById("customization-form");
  form.querySelectorAll("input, textarea").forEach(input => {
    const key = input.name || input.id;
    if (!key) return;
    let defaultValue = perkDefaults[perkId]?.[key];

    if (defaultValue === undefined) {
      const perk = perks.find(p => p.id === perkId);
      const setting = perk?.settings?.find(s => s.id === key.replace(/-number$/, ''));
      defaultValue = setting?.default ?? "";
    }

    if (input.type === "checkbox") {
      input.checked = !!defaultValue;
    } else if (input.type === "radio") {
      input.checked = input.value === defaultValue;
    } else {
      input.value = defaultValue;
      if (input.type === "range") {
        const numberInput = document.getElementById(`${input.id}-number`);
        if (numberInput) numberInput.value = defaultValue;
      } else if (input.type === "number" && input.id.endsWith("-number")) {
        const sliderId = input.id.replace(/-number$/, '');
        const sliderInput = document.getElementById(sliderId);
        if (sliderInput) sliderInput.value = defaultValue;
      }
    }
  });
  delete settings[perkId];
});

document.querySelector(".export-btn").addEventListener("click", async () => {
  const files = await compileDatapack(perks, [...selectedPerks], settings);
  exportZip(files);
});

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
  });
});

document.querySelectorAll('.category-header').forEach(header => {
  header.addEventListener('click', () => {
    const section = header.closest('.category');
    section.classList.toggle('collapsed');
  });
});
