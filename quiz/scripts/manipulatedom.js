window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function makeEditable(txtNode, tdNode) {
  let input = document.createElement("input");
  input.type = "text";
  input.value = txtNode.nodeValue;
  input.style.width = "100%"; 

  input.addEventListener("blur", function() {
    txtNode.nodeValue = this.value; 
    tdNode.replaceChild(txtNode, this); 
  });

  tdNode.replaceChild(input, txtNode); 
  input.focus(); 
}

function addEditButton(trNode, txtNode, tdNode) {
  let btn = document.createElement("button");
  btn.textContent = "Edit Text";
  btn.addEventListener("click", function() {
    makeEditable(txtNode, tdNode);
  });
  let tdButtonNode = createTDNode(btn);
  trNode.appendChild(tdButtonNode);
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let txtNode = document.createTextNode("Cell (" + i + ", 0)");
    let col1 = createTDNode(txtNode);
    let trNode = createTRNode([col1]);
    addEditButton(trNode, txtNode, col1); 
    tableNode.appendChild(trNode);
  }
  document.getElementById("root").appendChild(tableNode);
}
