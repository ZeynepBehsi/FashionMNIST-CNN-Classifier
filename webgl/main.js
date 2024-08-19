function initWebGL() {
    const canvas = document.createElement('canvas');
    const width = 800; // Genişlik
    const height = width / 1.618; // Altın oran
    canvas.width = width;
    canvas.height = height;
    
    const gl = canvas.getContext('webgl');
    gl.getExtension("WEBGL_draw_buffers");
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clearColor(0.2, 0.2, 0.2, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    const root = document.createElement('div');
    root.style.position = 'relative';
    
    const title = document.createElement('div');
    title.className = 'title';
    title.style.font = 'monospace';
    title.style.color = 'white';
    title.style.position = 'absolute';
    title.style.top = '50%';
    title.style.left = '50%';
    title.style.transform = 'translate(-50%, -50%)';
    title.textContent = 'loading...';
    
    const info = document.createElement('div');
    info.className = 'info';
    info.style.display = 'none';
    info.style.font = 'monospace';
    info.style.position = 'absolute';
    info.style.left = '.5em';
    info.style.bottom = '.5em';
    info.style.color = 'white';
    info.style.padding = '0 .2em 0';
    info.style.fontSize = '12px';
    info.style.pointerEvents = 'none';
    info.style.userSelect = 'none';
    
    const idDiv = document.createElement('div');
    idDiv.innerHTML = 'id: <span class="val-id"></span>';
    const labelDiv = document.createElement('div');
    labelDiv.innerHTML = 'label: <span class="val-label"></span>';
    
    info.appendChild(idDiv);
    info.appendChild(labelDiv);
    
    root.appendChild(title);
    root.appendChild(info);
    root.appendChild(canvas);
    
    document.body.appendChild(root);
  }
  
  document.addEventListener('DOMContentLoaded', initWebGL);
  