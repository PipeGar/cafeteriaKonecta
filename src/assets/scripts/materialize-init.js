document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'left',
        inDuration: 1000,
        onOpenStart: () => {
            alert('starting open...')
        }
    });
  });