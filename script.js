// Dynamically render perk cards
function renderPerkCard(perk, containerId) {
  const card = document.createElement("section");
  card.className = "perk-card";
  card.onclick = () => card.classList.toggle("selected");

  const hasSettings = Array.isArray(perk.settings) && perk.settings.length > 0;

  card.innerHTML = `
    <div class="perk-icon"><span>${perk.icon}</span></div>
    <div class="perk-info">
      <h2>${perk.name}</h2>
      <p>${perk.description}</p>
      <button class="customize-btn ${hasSettings ? '' : 'disabled'}"
        onclick="event.stopPropagation(); ${hasSettings ? `customizePerk('${perk.id}')` : ''}"
        ${hasSettings ? '' : 'disabled'}
      >Customize</button>
    </div>
  `;

  document.getElementById(containerId).appendChild(card);
}

function customizePerk(id) {
  const perk = perks.find(p => p.id === id);
  if (!perk) return;

  document.getElementById('customization-title').textContent = perk.name;
  document.getElementById('customization-description').textContent = perk.description;

  const form = document.getElementById("customization-form");
  form.innerHTML = "";

  (perk.settings || []).forEach(setting => {
    const group = document.createElement("div");
    group.className = "form-group";

    if (setting.type === "slider") {
      const sliderId = `${setting.id}-value`;
      group.innerHTML = `
        <label for="${setting.id}">${setting.label}:
          <span id="${sliderId}" style="float:right;">${setting.default}</span>
        </label>
        <input type="range" id="${setting.id}" min="${setting.min}" max="${setting.max}" step="${setting.step}" value="${setting.default}">
      `;
      form.appendChild(group);

      // Live value update
      setTimeout(() => {
        const slider = document.getElementById(setting.id);
        const valueLabel = document.getElementById(sliderId);
        slider.addEventListener("input", () => {
          valueLabel.textContent = slider.value;
        });
      });
    } else if (setting.type === "text") {
      group.innerHTML = `
        <label for="${setting.id}">${setting.label}:</label>
        <input type="text" id="${setting.id}" placeholder="${setting.placeholder || ''}" value="${setting.default || ''}">
      `;
      form.appendChild(group);
    } else if (setting.type === "checkbox") {
      group.innerHTML = `
        <label><input type="checkbox" id="${setting.id}" ${setting.default ? 'checked' : ''}/> ${setting.label}</label>
      `;
      form.appendChild(group);
    } else if (setting.type === "section") {
      group.innerHTML = `<strong style="display:block; margin-top:1em;">${setting.text}</strong>`;
      form.appendChild(group);
    } else if (setting.type === "separator") {
      group.innerHTML = `<hr style="border-color: #415a77;">`;
      form.appendChild(group);
    } else if (setting.type === "note") {
      group.innerHTML = `<p style="margin: 0.5em 0; font-size: 0.85rem; opacity: 0.75;">${setting.text}</p>`;
      form.appendChild(group);
    } else if (setting.type === "textarea") {
    group.innerHTML = `
      <label for="${setting.id}">${setting.label}:</label>
      <textarea id="${setting.id}" rows="${setting.rows || 4}" placeholder="${setting.placeholder || ''}">${setting.default || ''}</textarea>
    `;
    form.appendChild(group);
  }
  
  });

  document.getElementById('customization-overlay').classList.remove('hidden');
}

// Sort and render perks by category
perks.forEach(perk => {
  const container = {
    recipes: "recipes-container",
    loot: "loot-container",
    tweaks: "tweaks-container"
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
    document.getElementById('customization-overlay').classList.add('hidden');
  });
});
