var copyRightElement = document.querySelector('.copyright');
var currentYear = new Date().getFullYear();

copyRightElement.innerHTML = `&copy; ${currentYear} Tyler Montgomery <a href='https://github.com/ArKaes13' style='text-decoration:none; color:white;'><i class="fa-brands fa-github"></a></i>`