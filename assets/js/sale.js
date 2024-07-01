const saleProperties = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    costo:  5000,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con agradables vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    costo:  1200,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    costo:  4500,
    smoke: false,
    pets: true
    },
    {
        nombre: 'Departamento Edificio Mosaic Art',
        src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20181119/1116626/n_wm_2021101532076772216.jpg',
        descripcion: 'Vibra con la ciudad en este innovador proyecto. Salón de eventos Gourment. Terreza y Piscina.',
        ubicacion: 'Arturo Pratt 565, Santiago Centro, RM',
        habitaciones: 1,
        costo:  150000000,
        smoke: false,
        pets: false,
        },
        {
        nombre: 'Departamento Aqua Estilo Agua y Mar',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_816322-MLC45042910130_032021-F.jpg',
        descripcion: 'Ubicado en uno de los sectores turísticos de la ciudad. Sauna y sala de juegos.',
        ubicacion: 'Av. Las Higueras Poniente 671, La Serena.',
        habitaciones: 2,
        costo:  110000000,
        smoke: true,
        pets: false
        },
        {
        nombre: 'Casa en Ancud',
        src: 'https://static.kiteprop.com/kp/properties/13509/272bff/lg/272bff91253e6a9fd1ea52a47fc7652b.jpg',
        descripcion: 'Con vista privilegiada a la Bahía de Ancud. 160 m2. Cuenta con quincho, granja y estacionamiento.',
        ubicacion: 'Los Lagos 395, Ancud, Chile.',
        habitaciones: 2,
        costo:  95000000,
        smoke: true,
        pets: true
        },
        {
        nombre: 'Departamento Edificio Huantajaya',
        src: 'https://images.sparairnos.com/property/48051/images/610543/full/717eafae-712b-46a9-9445-d9922e4ef0b0',
        descripcion: 'Vista privilegiada al mar desde la terraza y piscina. Salida exclusiva al mar. Cuenta con estacionamiento.',
        ubicacion: 'Camino a la Playa, Iquique, Chile.',
        habitaciones: 3,
        costo:  155000000,
        smoke: false,
        pets: false
        },
        {
        nombre: 'Casa Mediterránea',
        src: 'https://http2.mlstatic.com/D_NQ_NP_2X_965819-MLC76176642718_052024-F.jpg',
        descripcion: 'Hermosa casa estilo Mediterráneo de dos pisos. Piscina, terraza, logia y estacionamiento para 3 vehículos.',
        ubicacion: 'Calle Independencia 2087, Linares, Chile',
        habitaciones: 3,
        costo:  190000000,
        smoke: true,
        pets: true
        }
        ]

        const elemento = document.querySelector('.row');
        const html = saleProperties.map(propiedad => `
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
