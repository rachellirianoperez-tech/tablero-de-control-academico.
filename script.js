// Base de datos general conectada por Años y Cursos (Informática)
const baseDatosEscuela = {
    '2026-2027': {
        'General': {
            titulo: 'Rendimiento General — Área de Informática (68 Estudiantes)',
            tipoGrafico: 'curso',
            kpi: { promedio: '8.6 / 10', estudiantes: '68', aprobacion: '91.1%', riesgo: '6' },
            linea: { labels: ['Parcial 1', 'Parcial 2', 'Parcial 3', 'Examen Final'], datos: [8.0, 8.4, 8.7, 8.7] },
            materias: { labels: ['4to Curso (27 Est.)', '5to Curso (25 Est.)', '6to Curso (16 Est.)'], datos: [8.2, 8.7, 9.1] },
            alumnos: [
                { mat: '2026-601', nombre: 'Gabriel Rosario', curso: '6to Informática', prom: '9.8 / 10', estado: 'Aprobado', color: 'emerald' },
                { mat: '2026-501', nombre: 'Carlos Mendoza', curso: '5to Informática', prom: '9.4 / 10', estado: 'Aprobado', color: 'emerald' },
                { mat: '2026-401', nombre: 'Emanuel Perez', curso: '4to Informática', prom: '8.8 / 10', estado: 'Aprobado', color: 'emerald' }
            ]
        },
        '4to': {
            titulo: 'Informática — 4to Curso',
            tipoGrafico: 'asignatura',
            kpi: { promedio: '8.2 / 10', estudiantes: '27', aprobacion: '88.8%', riesgo: '3' },
            linea: { labels: ['Parcial 1', 'Parcial 2', 'Parcial 3', 'Examen Final'], datos: [7.5, 8.0, 8.3, 8.2] },
            materias: { labels: ['Ofimática', 'Análisis y Diseño', 'Lengua Española', 'Diseño Web y Multimedia', 'Inglés Técnico'], datos: [8.8, 7.6, 8.4, 7.9, 8.5] },
            alumnos: [
                { mat: '2026-401', nombre: 'Emanuel Perez', curso: '4to Informática', prom: '8.8 / 10', estado: 'Aprobado', color: 'emerald' },
                { mat: '2026-402', nombre: 'Brian Diaz', curso: '4to Informática', prom: '6.5 / 10', estado: 'En Riesgo', color: 'amber' },
                { mat: '2026-403', nombre: 'Aneudi Hernández', curso: '4to Informática', prom: '5.5 / 10', estado: 'Reprobado', color: 'rose' }
            ]
        },
        '5to': {
            titulo: 'Informática — 5to Curso',
            tipoGrafico: 'asignatura',
            kpi: { promedio: '8.7 / 10', estudiantes: '25', aprobacion: '92.0%', riesgo: '2' },
            linea: { labels: ['Parcial 1', 'Parcial 2', 'Parcial 3', 'Examen Final'], datos: [8.1, 8.5, 8.8, 8.7] },
            // Materias corregidas para 5to curso:
            materias: { labels: ['Análisis y Diseño de Reportes', 'Sistemas Inf.', 'Matemáticas'], datos: [9.2, 8.6, 7.8] },
            alumnos: [
                { mat: '2026-501', nombre: 'Carlos Mendoza', curso: '5to Informática', prom: '9.4 / 10', estado: 'Aprobado', color: 'emerald' },
                { mat: '2026-502', nombre: 'Ana María López', curso: '5to Informática', prom: '6.8 / 10', estado: 'En Riesgo', color: 'amber' },
                { mat: '2026-503', nombre: 'Juan Gómez', curso: '5to Informática', prom: '5.2 / 10', estado: 'Reprobado', color: 'rose' }
            ]
        },
        '6to': {
            titulo: 'Informática — 6to Curso',
            tipoGrafico: 'asignatura',
            kpi: { promedio: '9.1 / 10', estudiantes: '16', aprobacion: '93.7%', riesgo: '1' },
            linea: { labels: ['Parcial 1', 'Parcial 2', 'Parcial 3', 'Proyecto Final'], datos: [8.6, 8.9, 9.2, 9.4] },
            materias: { labels: ['Proyecto Grado', 'Prog. Avanzada', 'Seguridad Inf.', 'Diseño Sistemas', 'Práctica Prof.'], datos: [9.5, 9.0, 8.9, 8.7, 9.6] },
            alumnos: [
                { mat: '2026-601', nombre: 'Gabriel Rosario', curso: '6to Informática', prom: '9.8 / 10', estado: 'Aprobado', color: 'emerald' },
                { mat: '2026-602', nombre: 'Laura Fernández', curso: '6to Informática', prom: '9.1 / 10', estado: 'Aprobado', color: 'emerald' },
                { mat: '2026-603', nombre: 'David Ramírez', curso: '6to Informática', prom: '6.9 / 10', estado: 'En Riesgo', color: 'amber' }
            ]
        }
    },
    '2025-2026': {
        'General': {
            titulo: 'Rendimiento General — Área de Informática (2025-2026)',
            tipoGrafico: 'curso',
            kpi: { promedio: '8.1 / 10', estudiantes: '62', aprobacion: '86.5%', riesgo: '9' },
            linea: { labels: ['Parcial 1', 'Parcial 2', 'Parcial 3', 'Examen Final'], datos: [7.5, 7.8, 8.0, 8.1] },
            materias: { labels: ['4to Curso', '5to Curso', '6to Curso'], datos: [7.9, 8.1, 8.4] },
            alumnos: [
                { mat: '2025-601', nombre: 'Mariana Peguero', curso: '6to Informática', prom: '9.2 / 10', estado: 'Aprobado', color: 'emerald' },
                { mat: '2025-502', nombre: 'José Luis Taveras', curso: '5to Informática', prom: '6.1 / 10', estado: 'En Riesgo', color: 'amber' }
            ]
        },
        '4to': {
            titulo: 'Informática — 4to Curso (2025-2026)',
            tipoGrafico: 'asignatura',
            kpi: { promedio: '7.9 / 10', estudiantes: '24', aprobacion: '83.3%', riesgo: '5' },
            linea: { labels: ['Parcial 1', 'Parcial 2', 'Parcial 3', 'Examen Final'], datos: [7.2, 7.5, 7.8, 7.9] },
            materias: { labels: ['Ofimática', 'Análisis y Diseño', 'Lengua Española', 'Diseño Web y Multimedia', 'Inglés Técnico'], datos: [8.1, 7.4, 7.9, 7.5, 8.0] },
            alumnos: [
                { mat: '2025-401', nombre: 'Ramoncito Cruz', curso: '4to Informática', prom: '8.1 / 10', estado: 'Aprobado', color: 'emerald' },
                { mat: '2025-402', nombre: 'Karla Mejía', curso: '4to Informática', prom: '5.8 / 10', estado: 'Reprobado', color: 'rose' }
            ]
        },
        '5to': {
            titulo: 'Informática — 5to Curso (2025-2026)',
            tipoGrafico: 'asignatura',
            kpi: { promedio: '8.1 / 10', estudiantes: '22', aprobacion: '88.0%', riesgo: '3' },
            linea: { labels: ['Parcial 1', 'Parcial 2', 'Parcial 3', 'Examen Final'], datos: [7.6, 7.9, 8.0, 8.1] },
            materias: { labels: ['Análisis y Diseño de Reportes', 'Sistemas Inf.', 'Matemáticas'], datos: [8.5, 8.0, 7.4] },
            alumnos: [
                { mat: '2025-501', nombre: 'Yuleidy Peña', curso: '5to Informática', prom: '9.0 / 10', estado: 'Aprobado', color: 'emerald' }
            ]
        },
        '6to': {
            titulo: 'Informática — 6to Curso (2025-2026)',
            tipoGrafico: 'asignatura',
            kpi: { promedio: '8.4 / 10', estudiantes: '16', aprobacion: '90.0%', riesgo: '1' },
            linea: { labels: ['Parcial 1', 'Parcial 2', 'Parcial 3', 'Proyecto Final'], datos: [8.0, 8.2, 8.3, 8.4] },
            materias: { labels: ['Proyecto Grado', 'Prog. Avanzada', 'Seguridad Inf.', 'Diseño Sistemas', 'Práctica Prof.'], datos: [8.8, 8.5, 8.2, 8.1, 9.0] },
            alumnos: [
                { mat: '2025-601', nombre: 'Mariana Peguero', curso: '6to Informática', prom: '9.2 / 10', estado: 'Aprobado', color: 'emerald' }
            ]
        }
    }
};

// Variables globales de estado actual
let cursoActual = 'General';
let chartLinea, chartBarra;

// Inicialización de Gráficos al cargar la página
window.onload = function() {
    const ctxLine = document.getElementById('lineChart').getContext('2d');
    chartLinea = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Promedio General',
                data: [],
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                borderWidth: 3,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#cbd5e1' } } },
            scales: {
                x: { grid: { color: '#334155' }, ticks: { color: '#94a3b8' } },
                y: { min: 0, max: 10, grid: { color: '#334155' }, ticks: { color: '#94a3b8' } }
            }
        }
    });

    const ctxBar = document.getElementById('barChart').getContext('2d');
    chartBarra = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Promedio (0 - 10)',
                data: [],
                backgroundColor: ['#6366f1', '#06b6d4', '#10b981', '#f59e0b', '#8b5cf6'],
                borderRadius: 6,
                barThickness: 18
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: { 
                legend: { display: false },
                tooltip: { callbacks: { label: (ctx) => ` Promedio: ${ctx.parsed.x} / 10` } }
            },
            scales: {
                x: { min: 0, max: 10, grid: { color: '#334155' }, ticks: { color: '#94a3b8', stepSize: 2 } },
                y: { grid: { display: false }, ticks: { color: '#cbd5e1', font: { size: 11 }, autoSkip: false } }
            }
        }
    });

    filtrarInformatica('General');
};

function filtrarInformatica(curso) {
    cursoActual = curso;
    const anioSelect = document.getElementById('selectAnio') ? document.getElementById('selectAnio').value : '2026-2027';
    
    const data = baseDatosEscuela[anioSelect] && baseDatosEscuela[anioSelect][curso];
    if (!data) return;

    document.getElementById('tituloVista').innerText = data.titulo;
    document.getElementById('kpiPromedio').innerText = data.kpi.promedio;
    document.getElementById('kpiEstudiantes').innerText = data.kpi.estudiantes;
    document.getElementById('kpiAprobacion').innerText = data.kpi.aprobacion;
    document.getElementById('kpiRiesgo').innerText = data.kpi.riesgo;

    const tituloBarraElem = document.getElementById('tituloGraficoBarra');
    if (tituloBarraElem) {
        tituloBarraElem.innerText = (data.tipoGrafico === 'curso') ? 'Comparativa General por Curso' : 'Promedio por Asignatura';
    }

    chartLinea.data.labels = data.linea.labels;
    chartLinea.data.datasets[0].data = data.linea.datos;
    chartLinea.update();

    chartBarra.data.labels = data.materias.labels;
    chartBarra.data.datasets[0].data = data.materias.datos;
    chartBarra.update();

    actualizarTabla(data.alumnos);
}

function cambiarAnio() {
    filtrarInformatica(cursoActual);
}

function actualizarTabla(alumnos) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    
    const estilosEstado = {
        'emerald': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        'amber': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        'rose': 'bg-rose-500/10 text-rose-400 border-rose-500/20'
    };

    alumnos.forEach(a => {
        const claseColor = estilosEstado[a.color] || 'bg-slate-500/10 text-slate-400 border-slate-500/20';
        const row = `
            <tr>
                <td class="p-4 font-mono text-slate-400">${a.mat}</td>
                <td class="p-4 font-medium text-slate-200">${a.nombre}</td>
                <td class="p-4 text-slate-300">${a.curso}</td>
                <td class="p-4 font-bold text-slate-200">${a.prom}</td>
                <td class="p-4">
                    <span class="${claseColor} border text-xs px-2.5 py-1 rounded-full font-medium">
                        ${a.estado}
                    </span>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

document.getElementById('searchInput').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const rows = document.getElementById('tableBody').getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        let textValue = rows[i].textContent || rows[i].innerText;
        if (textValue.toLowerCase().indexOf(filter) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
});