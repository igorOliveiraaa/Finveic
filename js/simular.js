let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{

    logoSpan.forEach((span, idx)=>{
        setTimeout(()=>{
            span.classList.add('active');
        }, (idx + 1)*400)
    })

    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{

            setTimeout(()=>{
                span.classList.remove('active');
                span.classList.add('fade');
            }, (idx+1)*50)
        })
    },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh'; 
        },1800)
    })
})

var menu = document.querySelector('nav ul')
var menuIcon = document.querySelector('.menu-icon');

function abrirMenu(){
    menu.classList.toggle('open')
}

  function mostrarForm1() {
    document.getElementById("form1").style.display = "flex";
    document.getElementById("form2").style.display = "none";
  }

  function mostrarForm2() {
    document.getElementById("form1").style.display = "none";
    document.getElementById("form2").style.display = "flex";
  }



  const anoFabricacao = document.getElementById('anof');
  const anoModelo = document.getElementById('anom');
  
  const currentYear = new Date().getFullYear();
  const startYear = 1800;
  
  for (let year = currentYear; year >= startYear; year--) {
    const option = document.createElement('option');
    option.value = year;
    option.text = year;
    anoFabricacao.add(option);
    anoModelo.add(option.cloneNode(true));
  }


  const valorInput = document.getElementById('valor');

  valorInput.addEventListener('input', formatarValor);
  
  function formatarValor() {
    let valor = this.value.replace(/\D/g, ""); // remove todos os caracteres não numéricos
    valor = (valor / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    this.value = valor;
  }

  const valoreInput = document.getElementById('valore');

  valoreInput.addEventListener('input', formatarvalore);
  
  function formatarvalore() {
    let valore = this.value.replace(/\D/g, ""); // remove todos os caracteres não numéricos
    valore = (valore / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    this.value = valore;
  }


  const tipoVeiculo = document.getElementById("tveiculo");
  const marca = document.getElementById("marca");
  const modelo = document.getElementById("modelo");
  const versao = document.getElementById("versao");
  
  const modelos = {
    carro: {
        Volkswagen: {
            Gol: ["Comfortline", "Track"],
            Polo: ["Highline", "GTS"],
            Virtus: ["Comfortline", "Highline"],
            Jetta: ["Comfortline", "R-Line"],
            TCross: ["Comfortline", "Highline"],
            Nivus: ["Highline", "Comfortline"],
            Tiguan: ["Comfortline", "R-Line"],
            Amarok: ["Highline", "Extreme"]
            },
            Chevrolet: {
            Onix: ["LT", "Premier"],
            OnixPlus: ["LT", "Premier"],
            Cruze: ["LT", "Premier"],
            Tracker: ["Premier", "LT"],
            Spin: ["Premier", "LTZ"],
            S10: ["High Country", "LTZ"],
            Equinox: ["Premier", "LTZ"]
            },
            Fiat: {
            Mobi: ["Easy", "Like"],
            Uno: ["Way", "Sporting"],
            Argo: ["HGT", "Trekking"],
            Cronos: ["Precision", "HGT"],
            Strada: ["Freedom", "Volcano"],
            Toro: ["Freedom", "Ultra"]
            },
            Ford: {
            Ka: ["SE", "SE Plus"],
            EcoSport: ["Titanium", "Freestyle"],
            Territory: ["SEL", "Titanium"],
            Ranger: ["Limited", "XLT"],
            Mustang: ["GT", "Bullit"]
            },
    },
    moto: {
      Honda: {
        "CG 160": ["Fan", "Titan"],
        "CB 500": ["F", "R"],
      },
      Yamaha: {
        "MT-03": ["Std", "ABS"],
        "YZF-R3": ["Std", "R"],
      },
      Suzuki: {
        "GSX-S750": ["Std", "ABS"],
        "V-Strom 650XT": ["Std", "XT"],
      },
    },
  };
  
  tipoVeiculo.addEventListener("change", () => {
    const tipo = tipoVeiculo.value;
    if (tipo === "") {
      marca.innerHTML = '<option value="">Selecione a marca do veículo</option>';
      modelo.innerHTML = '<option value="">Selecione o modelo do veículo</option>';
      versao.innerHTML = '<option value="">Selecione a versão do veículo</option>';
    } else {
      const marcas = Object.keys(modelos[tipo]);
      const options = marcas.map((marca) => `<option value="${marca}">${marca}</option>`);
      marca.innerHTML = '<option value="">Selecione a marca do veículo</option>' + options;
      modelo.innerHTML = '<option value="">Selecione o modelo do veículo</option>';
      versao.innerHTML = '<option value="">Selecione a versão do veículo</option>';
    }
  });
  
  marca.addEventListener("change", () => {
    const tipo = tipoVeiculo.value;
    const selectedMarca = marca.value;
    if (selectedMarca === "") {
      modelo.innerHTML = '<option value="">Selecione o modelo do veículo</option>';
      versao.innerHTML = '<option value="">Selecione a versão do veículo</option>';
    } else {
      const modelosMarca = modelos[tipo][selectedMarca];
      const modelosKeys = Object.keys(modelosMarca);
      const options = modelosKeys.map((modelo) => `<option value="${modelo}">${modelo}</option>`);
      modelo.innerHTML = '<option value="">Selecione o modelo do veículo</option>' + options;
      versao.innerHTML = '<option value="">Selecione a versão do veículo</option>';
    }
  });
  
  modelo.addEventListener("change", () => {
    const tipo = tipoVeiculo.value;
    const selectedMarca = marca.value;
    const selectedModelo = modelo.value;
    if (selectedModelo === "") {
      versao.innerHTML = '<option value="">Selecione a versão do veículo</option>';
    } else {
      const versoesModelo = modelos[tipo][selectedMarca][selectedModelo];
      const options = versoesModelo.map((versao) => `<option value="${versao}">${versao}</option>`);
      versao.innerHTML = '<option value="">Selecione a versão do veículo</option>' + options;
    }
  });
  

