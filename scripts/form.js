document.getElementById("copyright-year").innerHTML = new Date().getFullYear();
let oLastModif = new Date(document.lastModified);
let text = document.lastModified; document.getElementById("demo").innerHTML = text;




const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  
  products.forEach(p => {
    const option = document.createElement("option");
    option.setAttribute("value",p.id);
    option.textContent = p.name
  
    document.querySelector("select").appendChild(option);
  })
  
  let formsSended = window.localStorage.getItem("forms") || 0

  
  const submit = document.querySelector('input[type="submit"]')
  submit.addEventListener('click'  , () => {
    formsSended++;
    window.localStorage.setItem("forms", formsSended);
  });