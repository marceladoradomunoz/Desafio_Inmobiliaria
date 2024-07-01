const rentalProperties = [
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    costo:  2000,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 3,
    costo:  2500,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    costo:  2200,
    smoke: false,
    pets: false
    },
    {
        nombre: 'Departamento en Condominio Eleuterio Ramírez',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_633529-MLC75458868593_032024-F.jpg',
        descripcion: 'Cómodo departamento con ubicación privilegiada y conectividad con toda la ciudad.',
        ubicacion: 'Eleuterio Ramírez 947, San Bernardo, RM (Metropolitana)',
        habitaciones: 2,
        costo:  600000,
        smoke: false,
        pets: false
        },
        {
        nombre: 'Casa Alto San Damian',
        src: 'https://www.jessicacavierespropiedades.cl/img/propiedades/30/IMG_3504.jpg',
        descripcion: 'Vivienda con excelente ubicación. Acceso directo a carretera. Cocina y sala de estar amoblado. Logo y quincho.',
        ubicacion: 'Alto de Damian 176, Rancagua.',
        habitaciones: 4,
        costo:  650000,
        smoke: true,
        pets: true
        },
        {
        nombre: 'Casa en Isla Teja',
        src: 'https://www.elchileno.cl/ws/image.php?img=https%3A%2F%2Fmedia.doomos.com%2Fimage%2FCL%2F195%2F668027a936759.jpg',
        descripcion: 'Hermosa casa de 3 pisos. Logia techada, garage y quinco equipado. Excelente ubicación.',
        ubicacion: 'Parcelas de Valdivia, Lote 3, Valdivia, Chile.',
        habitaciones: 5,
        costo:  750000,
        smoke: true,
        pets: true
        },
        {
        nombre: 'Complejo Casa Verde',
        src: 'https://cf2.bstatic.com/xdata/images/hotel/max1280x900/433869586.jpg?k=ed7a6e07f4c576f77073023284f27127a77c1258e2b40a0de6305f75ba886e03&o=&hp=1',
        descripcion: 'Cabaña con hermosa vista al mar. Préstamo de bicicletas, zona barbacoas y terraza.',
        ubicacion: 'Camino Vecinal 295, Playa Hermosa, Pichilemu, Chile.',
        habitaciones: 2,
        costo:  550000,
        smoke: true,
        pets: true
        },
        {
        nombre: 'Parcela de Agrado en Frutillar',
        src: 'https://images.sparairnos.com/property/36272/images/506968/full/fe7c54f4-179b-4ec6-a89f-b9851dabf72d',
        descripcion: 'Casa construida con madera nativa. Vista al Lago y a todos los volcanes de la zona.',
        ubicacion: 'Km V-305, Punta Larga, Frutillar Bajo.',
        habitaciones: 3,
        costo:  1200000,
        smoke: true,
        pets: true
        }
        ]


const elemento = document.querySelector('.row');
const html = rentalProperties.map(propiedad => `
    <div class="col-md-3 mb-3">
        <div class="card">
            <img src="${propiedad.src}" class="card-img-top" alt="foto de departamento con jardin" />
            <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                   <i class="fas fa-bath"></i> ${propiedad.habitaciones} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${new Intl.NumberFormat('es-CL').format(propiedad.costo)}</p>
                <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                    <i class="${propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i>
                    ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                </p>
                <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                    <i class="${propiedad.pets ? 'fas fa-paw' : 'fas fa-ban'}"></i>
                    ${propiedad.pets ? 'Mascotas Permitidas' : 'No se permiten mascotas'}
                </p>
            </div>
        </div>
    </div>
`).join('');
elemento.innerHTML = html;
