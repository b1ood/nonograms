const grid = document.createElement('table');
grid.className = 'nonorgam-grid';

document.body.append(grid);

const thead = document.createElement('thead');
const th = document.createElement('th');
th.style.background = 'red';

grid.append(thead);

thead.append(th);
thead.append(th);
thead.append(th);
thead.append(th);
thead.append(th);
