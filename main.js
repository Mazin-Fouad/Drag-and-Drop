let todos = [
  {
    id: 0,
    title: 'Putzen',
    category: 'open',
  },

  {
    id: 1,
    title: 'Kochen',
    category: 'open',
  },

  {
    id: 2,
    title: 'Einkaufen',
    category: 'closed',
  },
];

let currentDraggedElement;

function updateHTML() {
  let open = todos.filter((t) => t['category'] == 'open');
  let openContent = document.getElementById('open');
  openContent.innerHTML = '';

  for (let i = 0; i < open.length; i++) {
    const element = open[i];
    openContent.innerHTML += generateHTML(element);
  }

  let closed = todos.filter((e) => e['category'] == 'closed');
  let closedContent = document.getElementById('closed');
  closedContent.innerHTML = '';

  for (let index = 0; index < closed.length; index++) {
    const element = closed[index];
    closedContent.innerHTML += generateHTML(element);
  }
}

function startDragging(id) {
  currentDraggedElement = id;
}

function generateHTML(element) {
  return /*html*/ `
    <div class="card" draggable='true' ondragstart='startDragging(${element.id})'>${element.title}</div>
    `;
}

function allowDrop(ev) {
  ev.preventDefault();
}

function moveTo(category) {
  todos[currentDraggedElement]['category'] = category; // For example: Todo with id 1: The field category changes it self to open or closed.
  updateHTML();
}

function highlight(id) {
  document.getElementById(id).classList.add('drag-aria-highlight');
}

function clearHighLight(id) {
  document.getElementById(id).classList.remove('drag-aria-highlight');
}
