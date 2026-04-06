document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('auto').addEventListener('click', function() {
      var auto = document.getElementById('auto');
      var meauto = document.getElementById('meauto');
      if (auto.style.display === 'block') {
        auto.style.display = 'none';
      } else {
        auto.style.display = 'block';
        meauto.style.display = 'none';
      }
    });
  });