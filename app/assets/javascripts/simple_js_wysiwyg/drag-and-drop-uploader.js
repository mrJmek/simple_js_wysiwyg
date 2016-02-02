var holder = document.getElementById('textBox'),
  tests = {
    filereader: typeof FileReader != 'undefined',
    dnd: 'draggable',
    formdata: !!window.FormData,
  },
  support = {
    filereader: true,
    formdata: true,
  },
  acceptedTypes = {
    'image/png': true,
    'image/jpeg': true,
    'image/gif': true
  };

function previewfile(file) {
  if (tests.filereader === true && acceptedTypes[file.type] === true) {
    var reader = new FileReader();
    reader.onload = function(event) {
      var image = new Image();
      image.src = event.target.result;
      image.width = 250; // a fake resize
      holder.appendChild(image);
    };

    reader.readAsDataURL(file);
  } else {
    holder.innerHTML += '<p>Uploaded ' + file.name + ' ' + (file.size ? (file.size / 1024 | 0) + 'K' : '');
    console.log(file);
  }
}

function readfiles(files) {
  var formData = tests.formdata ? new FormData() : null;
  for (var i = 0; i < files.length; i++) {
    if (tests.formdata) formData.append('file', files[i]);
    previewfile(files[i]);
  }
}

if (tests.dnd) {
  holder.ondrop = function(e) {
    this.className = '';
    e.preventDefault();
    readfiles(e.dataTransfer.files);
  }
}
