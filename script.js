// ================================
// BOTÓN PRINCIPAL
// ================================

const startButton =
    document.getElementById("startButton");

startButton.addEventListener(
    "click",
    () => {

        document
            .getElementById("garage")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


// ================================
// MODALES
// ================================

function setupModal(
    openId,
    closeId,
    modalId
) {

    const openButton =
        document.getElementById(openId);

    const closeButton =
        document.getElementById(closeId);

    const modal =
        document.getElementById(modalId);


    openButton.addEventListener(
        "click",
        () => {

            modal.classList.add("active");

            document.body
                .classList
                .add("modal-open");

        }
    );


    closeButton.addEventListener(
        "click",
        () => {

            modal.classList.remove("active");

            document.body
                .classList
                .remove("modal-open");

        }
    );


    modal.addEventListener(
        "click",
        (event) => {

            if (event.target === modal) {

                modal
                    .classList
                    .remove("active");

                document.body
                    .classList
                    .remove("modal-open");

            }

        }
    );

}


setupModal(
    "openMemory1",
    "closeMemory1",
    "memoryModal1"
);

setupModal(
    "openMemory2",
    "closeMemory2",
    "memoryModal2"
);

setupModal(
    "openMemory3",
    "closeMemory3",
    "memoryModal3"
);


// ================================
// CERRAR CON ESC
// ================================

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            document
                .querySelectorAll(".modal")
                .forEach(
                    (modal) => {

                        modal
                            .classList
                            .remove("active");

                    }
                );

            document.body
                .classList
                .remove("modal-open");

        }

    }
);


// ================================
// MAVERICK EN LA CARRETERA
// ================================

const route =
    document.getElementById("route");

const maverick =
    document.getElementById("movingMaverick");

const stations =
    document.querySelectorAll(".station");


function moveMaverick() {

    if (!route || !maverick) {
        return;
    }


    const routeRect =
        route.getBoundingClientRect();


    const viewportPoint =
        window.innerHeight * 0.52;


    let progress =
        (
            viewportPoint -
            routeRect.top
        )
        /
        routeRect.height;


    progress =
        Math.max(
            0,
            Math.min(
                1,
                progress
            )
        );


    const maxMovement =
        route.offsetHeight -
        maverick.offsetHeight -
        170;


    maverick.style.top =
        `${progress * maxMovement}px`;


    const carPosition =
        progress *
        route.offsetHeight;


    stations.forEach(
        (station) => {

            const stationCenter =
                station.offsetTop +
                (
                    station.offsetHeight / 2
                );


            if (
                carPosition >
                stationCenter - 120
            ) {

                station
                    .classList
                    .add("reached");

            } else {

                station
                    .classList
                    .remove("reached");

            }

        }
    );

}


window.addEventListener(
    "scroll",
    moveMaverick
);

window.addEventListener(
    "resize",
    moveMaverick
);


moveMaverick();