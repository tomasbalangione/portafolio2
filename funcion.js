document.getElementById('hospitalForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const numPacientes = parseInt(document.getElementById('numPacientes').value);
    const numCamas = parseInt(document.getElementById('numCamas').value);
    const numsatu = parseInt(document.getElementById('numsatu').value);
    const ocupacion = numCamas - numPacientes;
    
    let result = '';
  
    if (ocupacion <= numsatu) {
      result = 'El sistema del hospital está saturado.';
    } else {
      result = 'El sistema del hospital no está saturado.';
    }
  
    document.getElementById('result').textContent = result;
  });