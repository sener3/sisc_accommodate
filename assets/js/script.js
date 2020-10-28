document.querySelector("#submit").addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    toastr.remove();
    const rezervare = {
      nume: document.querySelector("#nume").value,
      prenume: document.querySelector("#prenume").value,
      telefon: document.querySelector("#telefon").value,
      email: document.querySelector("#email").value,
      facultate: document.querySelector("#facultate").value,
      specializare: document.querySelector("#specializare").value,
      serie: document.querySelector("#serie").value,
      grupa: document.querySelector("#grupa").value,
    };
    console.log(rezervare);
    axios
      .post("http://localhost:5000/student/inscriere", rezervare)
      .then((response) => {
        toastr.success("Te-ai inscris cu succes!");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  false
);
