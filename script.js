import { compileDatapack, exportZip } from './compiler.js';
import { perks } from './perks/index.js';

const selectedPerks = new Set();
const settings = {};

// Dynamically render perk cards
function renderPerkCard(perk, containerId) {
  const card = document.createElement("section");
  card.className = "perk-card";
  card.onclick = () => {
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
  if (hasSettings) {
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

  if (selectedPerks.has(perk.id)) {
    card.classList.add("selected");
  }  

  document.getElementById(containerId).appendChild(card);
}

function customizePerk(id) {
  const perk = perks.find(p => p.id === id);
  if (!perk) return;

  // Ensure default values are initialized for accurate change tracking
  if (!settings[id]) settings[id] = {};
  for (const s of perk.settings || []) {
    if (settings[id][s.id] === undefined) settings[id][s.id] = s.default;
  }

  const form = document.getElementById("customization-form");
  form.innerHTML = "";

  for (const setting of perk.settings || []) {
    const group = document.createElement("div");
    group.className = "form-group";

    let inputHTML = "";

    const currentValue = settings[id][setting.id];

    if (setting.type === "slider") {
      const sliderId = `${setting.id}-value`;
      inputHTML = `
        <label for="${setting.id}" style="display:flex; justify-content:space-between;">
          <span>${setting.label}</span>
          <span id="${sliderId}">${currentValue}</span>
        </label>
        <div class="slider-wrapper">
          <input type="range" id="${setting.id}" min="${setting.min}" max="${setting.max}" step="${setting.step}" value="${currentValue}">
        </div>`;
    } else if (setting.type === "number") {
      inputHTML = `
        <label for="${setting.id}">${setting.label}</label>
        <input type="number" id="${setting.id}" value="${currentValue}" min="${setting.min}" max="${setting.max}" step="${setting.step}">`;
    } else if (setting.type === "text") {
      inputHTML = `
        <label for="${setting.id}">${setting.label}</label>
        <input type="text" id="${setting.id}" value="${currentValue}" placeholder="${setting.placeholder || ''}">`;
    } else if (setting.type === "textarea") {
      inputHTML = `
        <label for="${setting.id}">${setting.label}</label>
        <textarea id="${setting.id}" rows="${setting.rows || 4}" placeholder="${setting.placeholder || ''}">${currentValue}</textarea>`;
    } else if (setting.type === "checkbox") {
      inputHTML = `
        <label class="checkbox-wrapper">
          <input type="checkbox" id="${setting.id}" ${currentValue ? "checked" : ""}>
          <span>${setting.label}</span>
        </label>`;
    } else if (setting.type === "radio") {
      inputHTML = `<label>${setting.label}</label>` + 
        setting.options.map(opt => `
          <label class="radio-wrapper">
            <input type="radio" name="${setting.id}" value="${opt.value}" ${opt.value === currentValue ? "checked" : ""}>
            <span>${opt.label}</span>
          </label>`).join('');
    } else if (setting.type === "section") {
      inputHTML = `<strong style="display:block; margin-top:1em;">${setting.text}</strong>`;
    } else if (setting.type === "note") {
      inputHTML = `<p style="opacity: 0.75; font-size: 0.85rem;">${setting.text}</p>`;
    } else if (setting.type === "separator") {
      inputHTML = `<hr style="border-color: #415a77;">`;
    }

    group.innerHTML = inputHTML;
    form.appendChild(group);

    if (setting.type === "slider") {
      const slider = document.getElementById(setting.id);
      const valueLabel = document.getElementById(`${setting.id}-value`);
      slider.addEventListener("input", () => {
        if (valueLabel) valueLabel.textContent = slider.value;
      });
    }
  }

  document.getElementById('customization-title').textContent = perk.name;
  document.getElementById('customization-description').textContent = perk.description;
  document.getElementById('customization-overlay').classList.remove('hidden');
}

// Sort and render perks by category
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

// Enable section collapsing by clicking headers
document.querySelectorAll('.category-header').forEach(header => {
  header.addEventListener('click', () => {
    const section = header.closest('.category');
    section.classList.toggle('collapsed');
  });
});

document.querySelector(".export-btn").addEventListener("click", async () => {
  const files = await compileDatapack(perks, [...selectedPerks], settings);
  exportZip(files);
});

// Tab switching logic
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
  });
});

// Fix: Overlay close button event (after DOM is ready)
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('close-overlay').addEventListener('click', () => {
    const perkId = document.getElementById("customization-title").textContent.toLowerCase().replace(/\s+/g, "_");
    const form = document.getElementById("customization-form");

    if (!settings[perkId]) settings[perkId] = {};

    form.querySelectorAll("input, textarea").forEach(input => {
      let newValue;

      if (input.type === "checkbox") {
        newValue = input.checked;
      } else if (input.type === "radio") {
        if (!input.checked) return;
        newValue = input.value;
      } else {
        newValue = input.value;
      }

      const key = input.name || input.id;

      // Simply store without comparison or triggering selection
      settings[perkId][key] = input.type === "checkbox" ? input.checked :
                              input.type === "number" ? Number(input.value) :
                              input.value;
    });

    document.getElementById('customization-overlay').classList.add('hidden');
  });

  // Reset to default
  document.getElementById('reset-overlay').addEventListener('click', () => {
    const form = document.getElementById("customization-form");
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach(input => {
      if (input.type === "checkbox" || input.type === "radio") {
        input.checked = input.defaultChecked;
      } else {
        input.value = input.defaultValue;
        if (input.type === "range") {
          const label = document.getElementById(`${input.id}-value`);
          if (label) label.textContent = input.defaultValue;
        }
      }
    });
  });
});
