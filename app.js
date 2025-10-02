let cars = {
    honda: {
        civic: {
            image: "images/img2.jpg",
            model: "civic 2024",
            price: 5000000,
            gates: 4,
            colours: ["black", "white", "gray"],
            company: {
                name: "Honda",
            }
        },
        city: {
            image :"images/city.jpg",
            model: "Honda city 2015",
            price: 4000000,
            gates: 4,
            colours: ["black", "white", "gray"],
            company: {
                name: "Honda",
            }

        },

    },

    suzuki: {
        mehran: {
             image :"images/mehran.jpg",
            model: "mehran 2015 ",
            price: 1100000,
            gates: 4,
            colours: ["black", "white", "gray"],
            company: {
                name: "suzuki",
            }

        },
        khyber: {
             image :"images/khyber.jpg",
            model: "khyber 1996 ",
            price: 300000,
            gates: 4,
            colours: ["black", "white", "gray"],
            company: {
                name: "suzuki",
            }

        }

    },

    toyota: {
        grande: {
            image: "images/img1.jpg",
            model: "grande 2022",
            price: 5000000,
            gates: 4,
            colours: ["black", "white", "gray"],
            company: {
                name: "toyota",
            }

        },

        fortuner: {
             image :"images/fortuner.jpg",
            model: "fortuner 2020",
            price: 15000000,
            gates: 4,
            colours: ["black", "white", "gray"],
            company: {
                name: "toyota",
            }




        }

    }

}




let compony = document.getElementById("company");
let model = document.getElementById("model");
let infocard = document.getElementById("infocard")

for (const key in cars) {
    compony.innerHTML += `<Option value = '${key}' >${key}</Option>`
}


function selectCompony() {
    model.innerHTML = `<option value="model">select model</option>`
    for (const key in cars[compony.value]) {
        model.innerHTML += `<Option value = '${key}'>${key}</Option>`
    }

}


function selectModel() {
    let carData = cars[compony.value][model.value];
    infocard.innerHTML = `<h4>${carData.model}</h4>
        <div class = 'image'>
        <img src = "${carData.image}" width = "200">
        </div>
        <p>price : ${carData.price}</p>
        <p>gates : ${carData.gates}</p>
        <p>colours : ${carData.colours}</p>
        <p>compony : ${carData.company.name}</p>
        `
}























