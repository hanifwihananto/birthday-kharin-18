// Validation
const btn = document.querySelector('#btnLogin');
const form = document.querySelector('form');

btn.addEventListener("click", () => {
	const user = document.querySelector('#user').value;
	const pass = document.querySelector('#pass').value;
	if(user == "ayang" && pass == "cantik"){
		// alert('Login Berhasil');
		swal.fire({
			icon: 'success',
			title: 'Login Berhasil',
			showConfirmButton: false
		});
		form.reset();
		setTimeout(function() {
			window.location = "https://wokwi.com/projects/368771907190975489";
			return false;
		}, 1000);
	} else if(user == "" && pass != ""){
		// alert('Username masih kosong');
		swal.fire({
			icon: 'error',
			title: 'Login Gagal',
			text: 'Username masih kosong !'
		});
		form.reset();
	} else if(pass == "" && user != ""){
		// alert('Password masih kosong');
		swal.fire({
			icon: 'error',
			title: 'Login Gagal',
			text: 'Password masih kosong !'
		});
		form.reset();
	} else if(user == "" || pass == ""){
		// alert('Username dan password masih kosong');
		swal.fire({
			icon: 'error',
			title: 'Login Gagal',
			text: 'Username dan password masih kosong !'
		});
		form.reset();
	} else{
		// alert('Login Gagal');
		swal.fire({
			icon: 'error',
			title: 'Login Gagal',
			text: 'Username dan password salah !'
		});
		form.reset();
	}
});