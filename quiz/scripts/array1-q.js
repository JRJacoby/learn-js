window.onload = function() {
    const list = document.getElementById('Top5');
    const inp = document.getElementById('inp');
    const btn = document.getElementById('btn');
    list.innerHTML = '';

    const myHistory = [];
    const MAX_HISTORY = 5;

    btn.onclick = () => {
        if (inp.value !== '') {
            
            if (myHistory.length >= MAX_HISTORY) {
                myHistory.shift(); 
            }
            myHistory.push(inp.value);

            const sortedHistory = [...myHistory].sort((a, b) => a.length - b.length);

            list.innerHTML = '';

            sortedHistory.forEach(itemText => {
                const item = document.createElement('li'); 
                item.textContent = itemText; 
                list.appendChild(item); 
            });

            inp.value = '';
            inp.focus(); 
        }
    }
}
