# Proyecto de Pruebas de Carga con K6

Este proyecto está diseñado para realizar pruebas de rendimiento y carga utilizando la herramienta K6. A través de distintos tipos de pruebas como Smoke, Load, Stress, Spike y Soak, se puede evaluar la estabilidad y rendimiento de servicios web como Reqres.

## Tecnologías Utilizadas

- K6 - Herramienta de pruebas de carga de código abierto
- JavaScript - Lenguaje de scripting para los test
- Node.js - Gestión de dependencias y scripts
- PowerShell / VSCode - Consola y editor recomendados
- (Opcional) Grafana - Visualización de resultados vía Dashboard

## Estructura del Proyecto

```
k6-api-testing/

├── tests/                      # Scripts de prueba
│   ├── smoke_test.js           # Prueba rápida (Smoke)
│   ├── load_test.js            # Prueba de carga (Load)
│   ├── stress_test.js          # Prueba de estrés (Stress)
│   ├── spike_test.js           # Prueba de picos (Spike)
│   └── soak_test.js            # Prueba de resistencia (Soak)

├── reports/                    # Resultados exportados en JSON
│   ├── load_test_results.json
│   ├── stress_test_results.json
│   └── ...

├── config/                     # Configuraciones opcionales
│   └── env.json

├── utils/                      # Funciones auxiliares reutilizables
│   └── helpers.js

├── dashboards/                 # Dashboard para Grafana (opcional)
│   └── grafana_dashboard.json

├── .gitignore                  # Archivos y carpetas ignoradas por Git
├── package.json                # Scripts y dependencias (opcional)
└── README.md                   # Documentación del proyecto
```

## Configuración y Dependencias

Asegúrate de tener instalado:

- K6
- Node.js

Opcional:

- Grafana

## Instalación

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/k6-api-testing.git
cd k6-api-testing

# Instala dependencias necesarias (opcional)
npm install
```

## Ejecución de Pruebas

Usa los siguientes comandos desde la raíz del proyecto:

```bash
# Prueba Smoke
npm run smoke

# Prueba de Carga
npm run load

# Prueba de Estrés
npm run stress

# Prueba de Picos
npm run spike

# Prueba de Resistencia
npm run soak
```

## Reportes

Los resultados se exportan en formato JSON dentro de la carpeta `/reports`.  
Puedes visualizar los datos con herramientas como:

- xk6-dashboard
- Grafana
  - Carga el archivo `dashboards/grafana_dashboard.json` para ver los resultados.

## Contribuciones

Las contribuciones son bienvenidas.  
Si deseas colaborar:

1. Haz un fork del repositorio.
2. Crea una rama con tu mejora: `git checkout -b feature/mi-mejora`
3. Haz commit de tus cambios: `git commit -m 'Agrega nueva funcionalidad'`
4. Haz push a la rama: `git push origin feature/mi-mejora`
5. Abre un Pull Request

## Desarrollado Por

Este proyecto fue desarrollado por [Nicolas Ortiz](https://www.linkedin.com/in/ortiznicolas/).

## Contribuir

Si encuentras errores o deseas mejorar algo del proyecto:

- Abre un issue
- Haz un Pull Request
- O simplemente, comparte tu feedback