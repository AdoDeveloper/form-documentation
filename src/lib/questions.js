// src/lib/questions.js

export const sections = [
  {
    id: 'sec1',
    title: 'Conceptualización y Valor de la Documentación',
    questions: [
      {
        id: 'q1',
        type: 'text',
        question: '¿Qué entiende usted por documentación de un proyecto de software?',
        note: 'Describe con tus propias palabras qué consideras que es la documentación de un proyecto.',
        extra: false
      },
      {
        id: 'q2',
        type: 'radio',
        question: '¿Cuál considera que es la función principal de documentar un proyecto de software?',
        note: 'Selecciona la función que consideras más importante.',
        options: [
          'Transferencia de conocimiento',
          'Mantenibilidad del software',
          'Cumplimiento de estándares/normativas',
          'Facilitar la comunicación entre equipos',
          'Preservar el conocimiento institucional',
          'Apoyo en la toma de decisiones técnicas',
          'Guía para nuevos miembros del equipo',
          'Referencia técnica para solución de problemas',
          'Registro histórico del desarrollo'
        ],
        children: [
          {
            id: 'q2a',
            type: 'text',
            question: '¿Por qué elegiste esa función principal?',
            note: 'Explica tu razonamiento.',
            dependsOn: { parentId: 'q2', value: null },
            extra: false
          }
        ]
      },
      {
        id: 'q3',
        type: 'radio',
        question: '¿Cree que la documentación incide directamente en el éxito de un proyecto de software?',
        note: 'Elige la opción que mejor refleje tu punto de vista.',
        options: [
          'Sí, es un factor crítico para el éxito',
          'Sí, pero con impacto moderado',
          'Depende del tipo de proyecto',
          'No, otros factores son más importantes',
          'No estoy seguro'
        ],
        children: [
          {
            id: 'q3a',
            type: 'text',
            question: '¿Por qué crees que tiene ese grado de impacto?',
            note: 'Describe brevemente tu razonamiento.',
            dependsOn: { parentId: 'q3', value: null },
            extra: false
          }
        ]
      },
      {
        id: 'q4',
        type: 'text',
        question: '¿Por qué considera que la documentación puede influir en el éxito o fracaso del proyecto?',
        note: 'Explica cómo puede afectar al éxito o fracaso.',
        extra: false
      },
      {
        id: 'q5',
        type: 'radio',
        question: 'En el contexto de la Universidad (y su departamento), ¿cómo se valora la documentación de proyectos?',
        note: 'Indica el nivel de valoración que observas.',
        options: [
          'Muy valorada, se considera esencial',
          'Valorada, pero no prioritaria',
          'Poco valorada, se ve como un trámite',
          'Depende del líder o profesor a cargo',
          'Varía según el tipo de proyecto'
        ]
      },
      {
        id: 'q6',
        type: 'radio',
        question: '¿Se percibe la documentación como un trámite obligatorio o como una herramienta valiosa?',
        note: 'Elige la percepción más común.',
        options: [
          'Como una herramienta valiosa para el proyecto',
          'Como un trámite necesario pero no aprovechado',
          'Principalmente como una obligación burocrática',
          'Depende de quién realice la documentación',
          'Varía según el contexto y proyecto'
        ],
        children: [
          {
            id: 'q6a',
            type: 'text',
            question: '¿Por qué se percibe así?',
            note: 'Cuéntanos los motivos.',
            dependsOn: { parentId: 'q6', value: null },
            extra: false
          }
        ]
      },
      {
        id: 'q7',
        type: 'radio',
        question: '¿Observa diferencias en la forma de documentar proyectos dentro del entorno universitario respecto a entornos empresariales?',
        note: 'Selecciona la opción que refleje tu experiencia.',
        options: [
          'Sí, son enfoques completamente diferentes',
          'Hay algunas diferencias significativas',
          'Hay diferencias menores',
          'No percibo diferencias importantes',
          'No tengo experiencia para comparar'
        ]
      },
      {
        id: 'q8',
        type: 'text',
        question: '¿Qué características específicas distinguen la documentación universitaria de la empresarial?',
        note: 'Menciona diferencias clave entre ambos entornos.',
        extra: false
      },
      {
        id: 'q1_extra',
        type: 'text',
        question: '¿Desea agregar algo más sobre esta sección?',
        note: 'Comentarios adicionales.',
        extra: true
      }
    ]
  },

  {
    id: 'sec2',
    title: 'Procesos de Documentación y Metodologías de Desarrollo',
    questions: [
      {
        id: 'q9',
        type: 'checkbox',
        question: '¿Qué metodologías de desarrollo de software se utilizan en sus proyectos?',
        note: 'Marca todas las metodologías que empleen.',
        options: [
          'Scrum','Kanban','Extreme Programming (XP)','Waterfall (Cascada)',
          'RUP (Rational Unified Process)','DevOps','SAFe (Scaled Agile Framework)',
          'Lean Software Development','Metodologías híbridas','Otra metodología'
        ],
        children: [
          {
            id: 'q9a',
            type: 'text',
            question: 'Si seleccionaste “Otra metodología”, ¿cuál?',
            note: 'Especifica la metodología.',
            dependsOn: { parentId: 'q9', value: 'Otra metodología' },
            extra: false
          }
        ]
      },
      {
        id: 'q10',
        type: 'text',
        question: '¿Cómo influye cada metodología seleccionada en la documentación requerida para sus proyectos?',
        note: 'Describe brevemente el impacto de cada metodología.',
        extra: false
      },
      {
        id: 'q11',
        type: 'checkbox',
        question: 'En el caso de usar metodologías ágiles, ¿qué enfoques utilizan para abordar la documentación?',
        note: 'Selecciona los enfoques que usen.',
        options: [
          'Documentación just-enough (lo mínimo necesario)',
          'Documentación como código (doc-as-code)',
          'Wikis colaborativas y actualizadas continuamente',
          'Historias de usuario como documentación principal',
          'Documentación visual (diagramas, esquemas)',
          'Documentación automatizada','Documentación incremental',
          'Sesiones de refinamiento de documentación','Otro enfoque'
        ],
        children: [
          {
            id: 'q11a',
            type: 'text',
            question: 'Si elegiste “Otro enfoque”, ¿cuál?',
            note: 'Detalla tu enfoque.',
            dependsOn: { parentId: 'q11', value: 'Otro enfoque' },
            extra: false
          }
        ]
      },
      {
        id: 'q12',
        type: 'text',
        question: '¿Cómo logran equilibrar la agilidad del desarrollo con la necesidad de documentación adecuada?',
        note: 'Explica tu estrategia de balance.',
        extra: false
      },
      {
        id: 'q13',
        type: 'radio',
        question: '¿Tienen un proceso definido para la documentación a lo largo del ciclo de vida del proyecto?',
        note: 'Selecciona el proceso que usen.',
        options: [
          'Documentación por fases (inicio, desarrollo, cierre)',
          'Documentación continua durante todo el ciclo',
          'Documentación basada en hitos o entregables',
          'Documentación según necesidades (ad-hoc)',
          'Documentación integrada en el flujo de trabajo',
          'Documentación retrospectiva (al final de iteraciones)',
          'Otro proceso'
        ],
        children: [
          {
            id: 'q13a',
            type: 'text',
            question: 'Si seleccionaste “Otro proceso”, ¿cuál?',
            note: 'Describe dicho proceso.',
            dependsOn: { parentId: 'q13', value: 'Otro proceso' },
            extra: false
          }
        ]
      },
      {
        id: 'q14',
        type: 'text',
        question: '¿Qué ventajas ha observado con este enfoque de documentación?',
        note: 'Menciona beneficios claros.',
        extra: false
      },
      {
        id: 'q15',
        type: 'text',
        question: '¿Qué desventajas o retos presenta este enfoque de documentación?',
        note: 'Indica los principales desafíos.',
        extra: false
      },
      {
        id: 'q16',
        type: 'radio',
        question: '¿Incluyen tareas específicas de documentación en la planificación de los proyectos?',
        note: 'Elige cómo se planifica la documentación.',
        options: [
          'Sí, se incluyen tareas específicas en el plan de trabajo',
          "Sí, forma parte de la definición de 'Terminado' de cada historia",
          'No, se espera que cada quien documente cuando pueda',
          'Solo al final del proyecto',
          'Depende del líder del proyecto',
          'Varía según la importancia del proyecto'
        ]
      },
      {
        id: 'q17',
        type: 'text',
        question: '¿Cómo afecta esta planificación (o su ausencia) al resultado final de la documentación?',
        note: 'Describe el impacto de la planificación en la calidad.',
        extra: false
      },
      {
        id: 'q18',
        type: 'radio',
        question: '¿Practican alguna forma de documentación continua durante el desarrollo del software?',
        note: 'Selecciona tu práctica habitual.',
        options: [
          'Sí, actualizamos documentación paralelamente al desarrollo',
          "Usamos enfoque 'doc-as-code' (documentación como código)",
          'No, documentamos al final de cada fase o sprint',
          'No, solo documentamos al final del proyecto',
          'Solo para componentes críticos',
          'Varía según la presión del cronograma'
        ]
      },
      {
        id: 'q19',
        type: 'radio',
        question: '¿Cuándo considera más efectivo documentar durante el ciclo de desarrollo?',
        note: 'Elige el momento más crítico para ti.',
        options: [
          'Al inicio, durante la fase de análisis y diseño',
          'Inmediatamente después de implementar cada componente',
          'Al final de cada iteración/sprint',
          'Antes de cada revisión formal',
          'Continuamente, en paralelo al desarrollo',
          'Antes de cada entrega al cliente',
          'Al cierre de cada fase del proyecto',
          'Antes de cada prueba de integración'
        ]
      },
      {
        id: 'q20',
        type: 'checkbox',
        question: '¿Existe alguna norma, guía o estándar de documentación que sigan en sus proyectos?',
        note: 'Marca todos los estándares que apliquen.',
        options: [
          'IEEE 830 (Especificación de Requisitos)',
          'ISO/IEC/IEEE 29148:2018',
          'ISO/IEC/IEEE 15289:2019',
          'Guías de documentación de metodologías ágiles',
          'Plantillas corporativas propias',
          'Guías de estilo de documentación técnica',
          'Markdown/AsciiDoc guidelines',
          'No seguimos estándares formales',
          'Otro estándar'
        ],
        children: [
          {
            id: 'q20a',
            type: 'text',
            question: 'Si elegiste “Otro estándar”, ¿cuál?',
            note: 'Especifica el estándar.',
            dependsOn: { parentId: 'q20', value: 'Otro estándar' },
            extra: false
          }
        ]
      },
      {
        id: 'q21',
        type: 'checkbox',
        question: '¿Por qué eligieron estos estándares específicos para sus proyectos?',
        note: 'Indica las razones de tu selección.',
        options: [
          'Requisito institucional o corporativo',
          'Mejor adaptación a nuestras necesidades',
          'Compatibilidad con herramientas utilizadas',
          'Experiencia previa del equipo',
          'Recomendación de consultoría externa',
          'Mejor comprensión por parte del cliente',
          'Facilita la conformidad regulatoria',
          'Mejora la trazabilidad del proyecto',
          'Simplifica la capacitación de nuevos miembros'
        ]
      },
      {
        id: 'q2_extra',
        type: 'text',
        question: '¿Desea agregar algo más sobre esta sección?',
        note: 'Comentarios adicionales.',
        extra: true
      }
    ]
  },

  {
    id: 'sec3',
    title: 'Tipos de Documentación y Destinatarios',
    questions: [
      {
        id: 'q22',
        type: 'checkbox',
        question: '¿Qué tipos de documentación generan normalmente en sus proyectos de software?',
        note: 'Marca todos los tipos que generen.',
        options: [
          'Especificación de requisitos',
          'Documentación de diseño de sistema',
          'Documentación de arquitectura',
          'Manual de usuario',
          'Manual técnico/de desarrollo',
          'Documentación de API',
          'Plan de pruebas',
          'Informes de pruebas',
          'Documentación de mantenimiento',
          'Documentación de despliegue',
          'Guías de estilo de código',
          'Notas de versión / Changelog'
        ]
      },
      {
        id: 'q23',
        type: 'text',
        question: '¿Cuáles de estos documentos considera más importantes y por qué?',
        note: 'Explica tu elección.',
        extra: false
      },
      {
        id: 'q24',
        type: 'checkbox',
        question: '¿A qué audiencias están dirigidas principalmente sus documentaciones?',
        note: 'Selecciona todas las audiencias relevantes.',
        options: [
          'Desarrolladores del equipo actual',
          'Futuros desarrolladores (mantenimiento)',
          'Gestores de proyecto',
          'Clientes/usuarios finales',
          'Stakeholders institucionales',
          'Evaluadores académicos',
          'Personal de soporte/operaciones',
          'Testers/QA'
        ]
      },
      {
        id: 'q25',
        type: 'radio',
        question: '¿Adaptan el contenido, lenguaje y formato según cada tipo de audiencia?',
        note: 'Elige el nivel de adaptación que hagan.',
        options: [
          'Siempre adaptamos la documentación por audiencia',
          'Casi siempre adaptamos según la audiencia',
          'A veces, dependiendo del proyecto',
          'Raramente, usamos un formato estándar',
          'Nunca, usamos un único formato para todos'
        ]
      },
      {
        id: 'q26',
        type: 'checkbox',
        question: '¿Qué formato(s) utilizan para la documentación técnica?',
        note: 'Marca todos los formatos que usen.',
        options: [
          'Documentos Word/Office',
          'PDF',
          'Wikis',
          'Markdown/documentación como código',
          'Herramientas especializadas (Confluence, etc.)',
          'HTML/sitios web internos',
          'Diagramas UML',
          'Cuadernos/notebooks (Jupyter, etc.)',
          'Presentaciones',
          'Vídeos tutoriales/screencasts'
        ]
      },
      {
        id: 'q27',
        type: 'checkbox',
        question: '¿Qué formato(s) utilizan para la documentación de usuario final?',
        note: 'Marca todos los formatos que usen.',
        options: [
          'Manuales tradicionales (Word/PDF)',
          'Ayuda contextual dentro del sistema',
          'Páginas web / Centro de ayuda online',
          'Tutoriales interactivos en la aplicación',
          'Vídeos instructivos',
          'FAQs',
          'Chatbots de asistencia',
          'Infografías',
          'Tarjetas de referencia rápida',
          'No generamos documentación para usuario final'
        ]
      },
      {
        id: 'q28',
        type: 'text',
        question: '¿Cuál de estos formatos ha encontrado más efectivo y por qué?',
        note: 'Comparte tu experiencia.',
        extra: false
      },
      {
        id: 'q29',
        type: 'radio',
        question: '¿El formato y la estructura de su documentación siguen alguna plantilla o patrón específico?',
        note: 'Elige la opción que aplique.',
        options: [
          'Sí, usamos plantillas institucionales estandarizadas',
          'Sí, seguimos estándares de la industria',
          'Parcialmente, adaptamos plantillas según necesidades',
          'No, creamos la estructura según la necesidad',
          'Depende del tipo de documento',
          'Varía según quien cree la documentación'
        ]
      },
      {
        id: 'q3_extra',
        type: 'text',
        question: '¿Desea agregar algo más sobre esta sección?',
        note: 'Comentarios adicionales.',
        extra: true
      }
    ]
  },

  {
    id: 'sec4',
    title: 'Herramientas y Tecnologías para la Documentación',
    questions: [
      {
        id: 'q30',
        type: 'checkbox',
        question: '¿Qué herramientas utilizan para crear y mantener la documentación de sus proyectos?',
        note: 'Marca todas las herramientas que empleen.',
        options: [
          'Microsoft Office (Word, Excel, etc.)',
          'Google Workspace (Docs, Sheets)',
          'Atlassian Confluence',
          'Herramientas de gestión documental',
          'GitHub/GitLab Wiki',
          'Herramientas de documentación como código (Markdown)',
          'Herramientas de generación automática de documentación',
          'Herramientas de diagramación (Visio, Lucidchart)',
          'Wikis genéricas',
          'Herramientas de documentación de API (Swagger, etc.)'
        ]
      },
      {
        id: 'q31',
        type: 'radio',
        question: '¿Utilizan alguna herramienta para automatizar la generación de documentación?',
        note: 'Selecciona la que usen.',
        options: [
          'Generadores de documentación de código (JavaDoc, JSDoc, etc.)',
          'Generadores de documentación de API (Swagger, OpenAPI)',
          'Herramientas de documentación de base de datos',
          'Herramientas de diagrama automático (arquitectura, etc.)',
          'Sistemas de integración continua para documentación',
          'Analizadores de código para documentación',
          'Herramientas de captura y documentación de pruebas',
          'No utilizamos automatización para documentación'
        ]
      },
      {
        id: 'q32',
        type: 'radio',
        question: '¿Considera que las herramientas actuales de documentación satisfacen adecuadamente sus necesidades?',
        note: 'Elige tu nivel de satisfacción.',
        options: [
          'Sí, plenamente',
          'En su mayoría, pero con algunas carencias',
          'Parcialmente, hay necesidades no cubiertas',
          'Muy poco, las herramientas son insuficientes',
          'No, las herramientas actuales son inadecuadas'
        ]
      },
      {
        id: 'q33',
        type: 'text',
        question: '¿Qué limitaciones encuentra en las herramientas de documentación que utiliza?',
        note: 'Describe principales limitaciones.',
        extra: false
      },
      {
        id: 'q34',
        type: 'checkbox',
        question: '¿Cómo aseguran el versionado y control de cambios en la documentación?',
        note: 'Marca los mecanismos que usen.',
        options: [
          'Sistema de control de versiones (Git, SVN)',
          'Versionado integrado en la herramienta documental',
          'Control manual de versiones (v1, v2, etc.)',
          'Historial de cambios en cada documento',
          'Revisiones periódicas programadas',
          'Documentamos los cambios en el mismo documento',
          'No implementamos control formal de versiones',
          'Integración con CI/CD para documentación'
        ]
      },
      {
        id: 'q35',
        type: 'radio',
        question: '¿Integran la documentación con sus herramientas de desarrollo?',
        note: 'Elige tu nivel de integración.',
        options: [
          'Sí, totalmente integradas (mismo repositorio/plataforma)',
          'Sí, parcialmente integradas',
          'No directamente, pero hay enlaces/referencias',
          'No, sistemas completamente separados',
          'Varía según el proyecto/equipo'
        ]
      },
      {
        id: 'q36',
        type: 'text',
        question: '¿Qué funcionalidades adicionales desearía tener en sus herramientas de documentación?',
        note: 'Sugiere mejoras deseadas.',
        extra: false
      },
      {
        id: 'q4_extra',
        type: 'text',
        question: '¿Desea agregar algo más sobre esta sección?',
        note: 'Comentarios adicionales.',
        extra: true
      }
    ]
  },

  {
    id: 'sec5',
    title: 'Recursos Asignados a la Documentación',
    questions: [
      {
        id: 'q37',
        type: 'radio',
        question: '¿Qué proporción aproximada del tiempo total del proyecto dedican a la documentación?',
        note: 'Estimación porcentual.',
        options: [
          'Menos del 5%',
          'Entre 5-10%',
          'Entre 11-20%',
          'Entre 21-30%',
          'Más del 30%',
          'Varía significativamente según el proyecto',
          'No se cuantifica específicamente'
        ]
      },
      {
        id: 'q38',
        type: 'checkbox',
        question: '¿Quiénes son responsables de crear la documentación en sus proyectos?',
        note: 'Marca todos los roles involucrados.',
        options: [
          'Cada desarrollador documenta su propio código',
          'Líder técnico/arquitecto',
          'Gerente de proyecto',
          'Analistas de requerimientos',
          'Escritores técnicos dedicados',
          'Equipo de QA',
          'Personal de soporte/operaciones',
          'Consultores externos',
          'Estudiantes/becarios asignados'
        ]
      },
      {
        id: 'q39',
        type: 'radio',
        question: '¿Existe un rol específico responsable de supervisar la calidad y completitud de la documentación?',
        note: 'Selecciona cómo se supervisa.',
        options: [
          'Sí, hay un rol formal dedicado a esto',
          'Sí, es responsabilidad del líder técnico/arquitecto',
          'Sí, el gerente de proyecto lo supervisa',
          'No hay un rol específico, es responsabilidad compartida',
          'No, cada quien es responsable de su parte',
          'No se realiza supervisión formal de la documentación'
        ]
      },
      {
        id: 'q40',
        type: 'checkbox',
        question: '¿Qué presupuesto o recursos específicos se asignan a la documentación?',
        note: 'Marca los recursos destinados.',
        options: [
          'Horas de trabajo específicas en la planificación',
          'Personal dedicado a documentación',
          'Herramientas especializadas con licencia',
          'Capacitación en técnicas de documentación',
          'Recursos para revisión externa/validación',
          'No se asignan recursos específicos',
          'Tiempo reservado al final de cada fase/sprint'
        ]
      },
      {
        id: 'q41',
        type: 'radio',
        question: '¿Considera que los recursos asignados a la documentación son adecuados?',
        note: 'Evalúa la suficiencia.',
        options: [
          'Sí, totalmente adecuados',
          'Generalmente suficientes',
          'Apenas suficientes',
          'Insuficientes en la mayoría de casos',
          'Muy insuficientes',
          'Varía significativamente según el proyecto/fase'
        ]
      },
      {
        id: 'q42',
        type: 'text',
        question: '¿Qué impacto tiene la limitación de recursos en la calidad de la documentación?',
        note: 'Describe consecuencias principales.',
        extra: false
      },
      {
        id: 'q43',
        type: 'text',
        question: '¿Cómo balancean la presión de entregas con la necesidad de documentar adecuadamente?',
        note: 'Comparte tus tácticas de equilibrio.',
        extra: false
      },
      {
        id: 'q5_extra',
        type: 'text',
        question: '¿Desea agregar algo más sobre esta sección?',
        note: 'Comentarios adicionales.',
        extra: true
      }
    ]
  },

  {
    id: 'sec6',
    title: 'Calidad y Actualización de la Documentación',
    questions: [
      {
        id: 'q44',
        type: 'radio',
        question: '¿Tienen definidos criterios o estándares de calidad para la documentación?',
        note: 'Selecciona el nivel de formalidad.',
        options: [
          'Sí, criterios formales y detallados',
          'Sí, lineamientos generales pero no exhaustivos',
          'No formalmente, pero hay expectativas implícitas',
          'No, cada persona documenta según su criterio',
          'Depende del tipo de documento/proyecto'
        ]
      },
      {
        id: 'q45',
        type: 'checkbox',
        question: '¿Qué aspectos incluyen en sus criterios de calidad para la documentación?',
        note: 'Marca todos los criterios aplicados.',
        options: [
          'Completitud de la información',
          'Precisión técnica',
          'Claridad y facilidad de comprensión',
          'Organización y estructura lógica',
          'Consistencia terminológica',
          'Actualización respecto al código/sistema',
          'Adecuación a la audiencia objetivo',
          'Corrección gramatical y ortográfica',
          'Calidad de gráficos/diagramas',
          'Facilidad de navegación/búsqueda'
        ]
      },
      {
        id: 'q46',
        type: 'radio',
        question: '¿Realizan revisiones formales de la documentación?',
        note: 'Indica la frecuencia de revisiones.',
        options: [
          'Sí, revisiones programadas regularmente',
          'Sí, en puntos específicos del ciclo del proyecto',
          'Sí, pero solo para documentos críticos',
          'Ocasionalmente, no de forma sistemática',
          'Raramente o nunca'
        ]
      },
      {
        id: 'q47',
        type: 'checkbox',
        question: '¿Qué proceso siguen para revisar y aprobar la documentación?',
        note: 'Marca los pasos de revisión implementados.',
        options: [
          'Revisión por pares',
          'Revisión por líder técnico/arquitecto',
          'Revisión por gerente/responsable del proyecto',
          'Revisiones cruzadas entre equipos',
          'Verificación con listas de control',
          'Ciclos formales de revisión y corrección',
          'Aprobación formal por stakeholders',
          'No hay proceso formal'
        ]
      },
      {
        id: 'q48',
        type: 'checkbox',
        question: '¿Cómo aseguran que la documentación se mantiene actualizada con los cambios del sistema?',
        note: 'Marca los mecanismos de actualización.',
        options: [
          'Actualización simultánea con cambios de código',
          'Revisión periódica programada',
          'Sistema de notificaciones para documentos afectados',
          'Verificación previa a releases',
          'Revisiones post-implementación',
          'Automatización para detectar inconsistencias',
          'No hay mecanismo formal'
        ]
      },
      {
        id: 'q49',
        type: 'radio',
        question: '¿Con qué frecuencia actualizan la documentación?',
        note: 'Selecciona la cadencia de actualización.',
        options: [
          'Continuamente, en paralelo con los cambios',
          'Al final de cada sprint/iteración',
          'En puntos de control predefinidos',
          'Antes de cada release',
          'Solo cuando hay cambios mayores',
          'Irregularmente, cuando hay tiempo disponible',
          'Raramente se actualiza después de la creación inicial'
        ]
      },
      {
        id: 'q50',
        type: 'checkbox',
        question: '¿Qué problemas o desafíos enfrentan para mantener la documentación actualizada?',
        note: 'Marca los principales obstáculos.',
        options: [
          'Falta de tiempo/recursos',
          'Cambios frecuentes en el sistema',
          'Falta de integración entre código y documentación',
          'Dificultad para identificar documentos afectados',
          'Ausencia de procesos formales',
          'Baja prioridad frente a otras tareas',
          'Falta de herramientas adecuadas',
          'Rotación de personal/pérdida de conocimiento'
        ]   
      },
      {
        id: 'q51',
        type: 'checkbox',
        question: '¿Utilizan algún indicador o métrica para evaluar la calidad de la documentación?',
        note: 'Marca todas las métricas que usen.',
        options: [
          'Encuestas de satisfacción a usuarios',
          'Métricas de uso (vistas, descargas)',
          'Tasa de consultas/problemas relacionados',
          'Auditorías formales de calidad',
          'Verificación de cobertura documental',
          'Medición de actualidad/obsolescencia',
          'Tiempo de incorporación de nuevos miembros'
        ]
      },
      {
        id: 'q6_extra',
        type: 'text',
        question: '¿Desea agregar algo más sobre esta sección?',
        note: 'Comentarios adicionales.',
        extra: true
      }
    ]
  },

  {
    id: 'sec7',
    title: 'Impacto y Evaluación de la Documentación',
    questions: [
      {
        id: 'q52',
        type: 'radio',
        question: '¿Cómo evalúan el impacto o efectividad de la documentación que producen?',
        note: 'Selecciona las métricas o métodos usados.',
        options: [
          'Retroalimentación directa de usuarios',
          'Encuestas de satisfacción',
          'Análisis de uso (vistas, búsquedas)',
          'Medición de consultas/tickets de soporte',
          'Tiempo de resolución de problemas',
          'Tiempo de incorporación de nuevos miembros',
          'Evaluaciones formales por stakeholders',
          'No realizamos evaluación formal'
        ]
      },
      {
        id: 'q53',
        type: 'radio',
        question: '¿Han podido medir o estimar el retorno de inversión de la documentación?',
        note: 'Elige el tipo de medición que manejen.',
        options: [
          'Sí, tenemos métricas precisas',
          'Parcialmente, tenemos algunas estimaciones',
          'Solo cualitativamente, sin métricas concretas',
          'No, es difícil de cuantificar',
          'No hemos intentado medirlo'
        ]
      },
      {
        id: 'q54',
        type: 'checkbox',
        question: '¿Cuáles considera que son los principales beneficios que han obtenido de una buena documentación?',
        note: 'Marca todos los beneficios observados.',
        options: [
          'Reducción de curva de aprendizaje',
          'Mayor independencia de individuos clave',
          'Mejora en la calidad del software',
          'Reducción de errores/bugs',
          'Mantenimiento más eficiente',
          'Mejor comunicación entre equipos',
          'Mayor satisfacción del cliente/usuario',
          'Transferencia de conocimiento efectiva',
          'Cumplimiento con estándares/regulaciones'
        ]
      },
      {
        id: 'q55',
        type: 'text',
        question: '¿Puede identificar algún caso específico donde la documentación haya sido crucial?',
        note: 'Describe ese caso.',
        extra: false
      },
      {
        id: 'q56',
        type: 'text',
        question: '¿Ha identificado algún proyecto que haya sufrido por falta de documentación adecuada?',
        note: 'Explica los problemas surgidos.',
        extra: false
      },
      {
        id: 'q57',
        type: 'radio',
        question: '¿Cómo influye la documentación en la transferencia de conocimiento dentro del equipo?',
        note: 'Selecciona la opción que mejor describa la transferencia.',
        options: [
          'Es el medio principal de transferencia',
          'Complementa efectivamente la transferencia directa',
          'Ayuda, pero la transferencia directa es más importante',
          'Tiene un impacto limitado',
          'Casi no se utiliza para transferencia de conocimiento'
        ]
      },
      {
        id: 'q58',
        type: 'radio',
        question: '¿Cómo afecta la documentación a la incorporación de nuevos miembros al equipo?',
        note: 'Elige el impacto en onboarding.',
        options: [
          'Acelera significativamente la incorporación',
          'Ayuda moderadamente en el proceso',
          'Proporciona una base, pero requiere mucha tutoría adicional',
          'Tiene impacto limitado en la incorporación',
          'No se utiliza efectivamente en el proceso de incorporación'
        ]
      },
      {
        id: 'q59',
        type: 'radio',
        question: '¿Observa diferencias en la productividad de mantenimiento entre proyectos bien documentados y aquellos con documentación deficiente?',
        note: 'Selecciona la diferencia que percibas.',
        options: [
          'Sí, diferencias muy significativas',
          'Sí, diferencias moderadas',
          'Diferencias menores',
          'No hay diferencias apreciables',
          'No tenemos datos suficientes para comparar'
        ]
      },
      {
        id: 'q7_extra',
        type: 'text',
        question: '¿Desea agregar algo más sobre esta sección?',
        note: 'Comentarios adicionales.',
        extra: true
      }
    ]
  },

  {
    id: 'sec8',
    title: 'Problemas y Desafíos de la Documentación',
    questions: [
      {
        id: 'q60',
        type: 'checkbox',
        question: '¿Cuáles son los principales desafíos que enfrentan al documentar proyectos de software?',
        note: 'Marca los desafíos que experimenten.',
        options: [
          'Falta de tiempo/recursos asignados',
          'Mantener la documentación actualizada',
          'Resistencia del equipo hacia la documentación',
          'Definir el nivel adecuado de detalle',
          'Equilibrar agilidad con documentación suficiente',
          'Falta de estándares claros',
          'Complejidad técnica difícil de documentar',
          'Herramientas inadecuadas',
          'Falta de capacitación en documentación',
          'Baja prioridad asignada por gestión'
        ]
      },
      {
        id: 'q61',
        type: 'text',
        question: '¿Cuál de estos desafíos considera el más crítico y por qué?',
        note: 'Argumenta tu elección.',
        extra: false
      },
      {
        id: 'q62',
        type: 'checkbox',
        question: '¿Qué razones explican la resistencia de los desarrolladores a documentar?',
        note: 'Marca las causas principales.',
        options: [
          'Percepción de que resta tiempo al desarrollo',
          'Preferencia por código autoexplicativo',
          'Falta de valoración de su importancia',
          'Habilidades de comunicación escrita limitadas',
          'Ausencia de incentivos/reconocimiento',
          'Herramientas complejas o difíciles de usar',
          'Procesos de documentación engorrosos',
          'Falta de retroalimentación sobre su utilidad',
          'Cultura de equipo que no la prioriza'
        ]
      },
      {
        id: 'q63',
        type: 'radio',
        question: '¿Cómo abordan la documentación de deuda técnica en sus proyectos?',
        note: 'Elige cómo la documentan.',
        options: [
          'Documentamos claramente las decisiones técnicas comprometidas',
          'Usamos comentarios específicos en el código (TODO, FIXME, etc.)',
          'Mantenemos un registro separado de deuda técnica',
          'Lo incluimos en el sistema de gestión de tareas',
          'Lo incluimos en los informes de estado del proyecto',
          'No documentamos formalmente la deuda técnica',
          'Utilizamos herramientas específicas para gestión de deuda técnica'
        ]
      },
      {
        id: 'q64',
        type: 'checkbox',
        question: '¿Qué estrategias han resultado efectivas para motivar al equipo a documentar?',
        note: 'Marca las estrategias que funcionen.',
        options: [
          "Incluirlo formalmente en la definición de 'Terminado'",
          'Reconocimiento formal de buena documentación',
          'Simplificación de procesos y herramientas',
          'Capacitación específica en técnicas de documentación',
          'Demostración del valor mediante casos concretos',
          'Asignación de tiempo específico en la planificación',
          'Gamificación/competencia por mejor documentación',
          'Rotación de responsabilidades de revisión'
        ]
      },
      {
        id: 'q65',
        type: 'text',
        question: '¿Qué equilibrio consideraría ideal entre agilidad y documentación?',
        note: 'Comparte tu visión del balance.',
        extra: false
      },
      {
        id: 'q66',
        type: 'checkbox',
        question: '¿Cómo manejan la documentación de cambios frecuentes en requerimientos o diseño?',
        note: 'Marca los métodos que empleen.',
        options: [
          'Actualización continua de documentación',
          'Documentación versionada alineada con releases',
          'Documentación enfocada en elementos estables',
          'Uso de herramientas que facilitan actualizaciones',
          'Minimización de documentación detallada en áreas volátiles',
          'Revisiones periódicas de consistencia',
          'No manejamos efectivamente este aspecto'
        ]
      },
      {
        id: 'q67',
        type: 'checkbox',
        question: '¿Qué prácticas han encontrado contraproducentes en la documentación?',
        note: 'Marca las prácticas que evitas.',
        options: [
          'Documentación excesivamente detallada',
          'Centrarse solo en documentación inicial',
          'Documentación desconectada del código',
          'Uso de herramientas complejas',
          'Procesos de aprobación muy burocráticos',
          'Duplicación de información',
          'Documentación demasiado técnica para la audiencia',
          'Falta de estructura/estándares'
        ]
      },
      {
        id: 'q8_extra',
        type: 'text',
        question: '¿Desea agregar algo más sobre esta sección?',
        note: 'Comentarios adicionales.',
        extra: true
      }
    ]
  },

  {
    id: 'sec9',
    title: 'Innovación y Tendencias en Documentación',
    questions: [
      {
        id: 'q68',
        type: 'checkbox',
        question: '¿Qué tendencias actuales en documentación de software conoce o le interesan?',
        note: 'Marca todas las tendencias que conozcas.',
        options: [
          'Documentación como código (doc-as-code)',
          'Documentación generada automáticamente',
          'Documentación interactiva/ejecutable',
          'Documentación colaborativa en tiempo real',
          'Documentación basada en IA/asistentes',
          'Lenguaje natural estructurado',
          'Documentación visual/diagramática avanzada',
          'Integración más estrecha con repositorios de código'
        ]
      },
      {
        id: 'q69',
        type: 'text',
        question: '¿Han adoptado alguna de estas tendencias innovadoras? ¿Cuál ha sido su experiencia?',
        note: 'Comparte casos de adopción y resultados.',
        extra: false
      },
      {
        id: 'q70',
        type: 'radio',
        question: '¿Qué papel cree que tendrá la IA en el futuro de la documentación de software?',
        note: 'Elige las aplicaciones futuras de IA.',
        options: [
          'Generación automática de documentación desde el código',
          'Asistentes para redacción de documentación',
          'Mantenimiento automático de documentación actualizada',
          'Personalización de documentación según usuario/contexto',
          'Análisis de calidad y completitud documental',
          'Traducción automática para equipos multinacionales',
          'Generación de diagramas y visualizaciones',
          'Simplificación de lenguaje técnico'
        ]
      },
      {
        id: 'q71',
        type: 'checkbox',
        question: '¿Qué aspectos de la documentación cree que podrían automatizarse en el futuro cercano?',
        note: 'Marca las tareas automatizables.',
        options: [
          'Documentación de código y funciones',
          'Generación de diagramas técnicos',
          'Detección de inconsistencias documentación-código',
          'Actualización automática tras cambios',
          'Validación de completitud y calidad',
          'Adaptación de contenido según audiencia',
          'Generación de ejemplos y casos de uso',
          'Pruebas basadas en documentación'
        ]
      },
      {
        id: 'q72',
        type: 'radio',
        question: '¿Cuál cree que será el balance futuro entre documentación escrita por humanos y generada automáticamente?',
        note: 'Elige el equilibrio que anticipes.',
        options: [
          'Predominantemente humana con asistencia automatizada',
          'Equilibrio entre ambas aproximaciones',
          'Predominantemente automatizada con supervisión humana',
          'Altamente automatizada con mínima intervención humana',
          'Dependerá del tipo de proyecto/organización'
        ]
      },
      {
        id: 'q73',
        type: 'text',
        question: '¿Qué cambios anticipa en las metodologías de documentación en los próximos años?',
        note: 'Esboza tendencias futuras.',
        extra: false
      },
      {
        id: 'q74',
        type: 'radio',
        question: '¿Cómo cree que evolucionará la formación académica respecto a la documentación de software?',
        note: 'Selecciona el escenario probable.',
        options: [
          'Mayor énfasis en técnicas modernas de documentación',
          'Integración con metodologías ágiles/DevOps',
          'Enfoque en herramientas de documentación automatizada',
          'Menor énfasis en documentación formal',
          'Sin cambios significativos respecto a la situación actual',
          'Dependerá del enfoque de cada institución'
        ]
      },
      {
        id: 'q9_extra',
        type: 'text',
        question: '¿Desea agregar algo más sobre esta sección?',
        note: 'Comentarios adicionales.',
        extra: true
      }
    ]
  },

  {
    id: 'sec10',
    title: 'Impacto de la Pandemia en la Documentación',
    questions: [
      {
        id: 'q75',
        type: 'radio',
        question: '¿Cómo ha afectado la pandemia y el trabajo remoto a sus prácticas de documentación?',
        note: 'Elige el grado de impacto observado.',
        options: [
          'Ha incrementado significativamente su importancia',
          'Ha incrementado moderadamente su importancia',
          'No ha tenido un impacto significativo',
          'Ha disminuido su importancia',
          'Ha cambiado completamente nuestro enfoque'
        ]
      },
      {
        id: 'q76',
        type: 'checkbox',
        question: '¿Qué aspectos de la documentación cobraron mayor importancia durante el trabajo remoto?',
        note: 'Marca los aspectos más críticos.',
        options: [
          'Claridad y completitud de la información',
          'Accesibilidad remota de la documentación',
          'Documentación de procesos y flujos de trabajo',
          'Comunicación asincrónica mediante documentación',
          'Herramientas colaborativas de documentación',
          'Integración con plataformas de comunicación',
          'Actualización más frecuente de documentos',
          'Documentación de reuniones y decisiones'
        ]
      },
      {
        id: 'q77',
        type: 'checkbox',
        question: '¿Qué nuevas herramientas o prácticas de documentación adoptaron a raíz del trabajo remoto?',
        note: 'Marca las herramientas/prácticas implementadas.',
        options: [
          'Plataformas de documentación en la nube',
          'Wikis colaborativas',
          'Grabación de reuniones/sesiones técnicas',
          'Herramientas de anotación/comentarios',
          'Integración con plataformas de videoconferencia',
          'Sistemas de gestión documental',
          'Mejoras en el acceso remoto a la documentación',
          'Ninguna herramienta nueva específica'
        ]
      },
      {
        id: 'q78',
        type: 'checkbox',
        question: '¿Qué prácticas adoptadas durante la pandemia considera que se mantendrán permanentemente?',
        note: 'Marca las prácticas que perdurarán.',
        options: [
          'Mayor documentación de procesos internos',
          'Registro detallado de decisiones técnicas',
          'Uso extendido de herramientas colaborativas',
          'Documentación más accesible remotamente',
          'Mayor frecuencia de actualización',
          'Más documentación en formato multimedia',
          'Procesos de revisión remota',
          'Ninguna se mantendrá permanentemente'
        ]
      },
      {
        id: 'q79',
        type: 'text',
        question: '¿Qué lecciones principales aprendieron sobre documentación durante el período de trabajo remoto?',
        note: 'Comparte las principales enseñanzas.',
        extra: false
      },
      {
        id: 'q10_extra',
        type: 'text',
        question: '¿Desea agregar algo más sobre esta sección?',
        note: 'Comentarios adicionales.',
        extra: true
      }
    ]
  },

  {
    id: 'sec11',
    title: 'Contexto Específico de la Universidad',
    questions: [
      {
        id: 'q80',
        type: 'radio',
        question: '¿Existe alguna política o directriz institucional específica sobre documentación de proyectos de software en la Universidad?',
        note: 'Selecciona si hay políticas formales.',
        options: [
          'Sí, existen políticas detalladas y obligatorias',
          'Sí, existen directrices generales pero flexibles',
          'Sí, pero solo para proyectos específicos/críticos',
          'No formalmente, pero hay prácticas habituales',
          'No existe ninguna directriz institucional',
          'Desconozco si existen tales políticas'
        ]
      },
      {
        id: 'q81',
        type: 'radio',
        question: '¿Cómo se diferencian las prácticas de documentación en proyectos académicos de investigación frente a proyectos de servicio/administrativos?',
        note: 'Elige la principal diferencia.',
        options: [
          'Mayor formalidad en proyectos administrativos',
          'Mayor detalle técnico en proyectos de investigación',
          'Diferentes audiencias objetivo',
          'Diferentes estándares aplicados',
          'Diferentes herramientas utilizadas',
          'Diferentes asignaciones de recursos',
          'Diferentes ciclos de actualización',
          'No hay diferencias significativas'
        ]
      },
      {
        id: 'q82',
        type: 'checkbox',
        question: '¿Cómo influye el carácter académico de la institución en las prácticas de documentación?',
        note: 'Marca las influencias académicas.',
        options: [
          'Mayor énfasis en aspectos formales/teóricos',
          'Mayor valoración de estándares internacionales',
          'Inclusión de elementos pedagógicos',
          'Adaptación a ciclos académicos',
          'Consideración del valor académico/investigativo',
          'Limitaciones por recursos/presupuestos académicos',
          'Influencia de prácticas docentes en la documentación',
          'No tiene una influencia significativa'
        ]
      },
      {
        id: 'q83',
        type: 'radio',
        question: '¿Los estándares o prácticas de documentación varían entre diferentes facultades/departamentos?',
        note: 'Selecciona el grado de variación.',
        options: [
          'Sí, son completamente diferentes entre departamentos',
          'Sí, hay diferencias significativas',
          'Hay algunas variaciones pero sobre una base común',
          'Son mayormente consistentes en toda la universidad',
          'Son totalmente estandarizados a nivel institucional',
          'Desconozco las prácticas de otros departamentos'
        ]
      },
      {
        id: 'q84',
        type: 'checkbox',
        question: '¿Cómo se gestiona la documentación de proyectos que involucran a estudiantes (considerando su rotación)?',
        note: 'Marca los mecanismos de gestión.',
        options: [
          'Mayor supervisión/revisión por personal permanente',
          'Estándares más estrictos de documentación',
          'Procesos de transferencia formales al finalizar',
          'Documentación específica de proceso/contexto',
          'Repositorio centralizado con estructura predefinida',
          'Etapa formal de cierre con documentación completa',
          'Capacitación específica en documentación',
          'No hay gestión especial por esta circunstancia'
        ]
      },
      {
        id: 'q85',
        type: 'radio',
        question: '¿Se incluyen competencias de documentación técnica en la formación de estudiantes de ingeniería/informática?',
        note: 'Selecciona cómo se enseña documentación.',
        options: [
          'Sí, como parte formal del currículo',
          'Sí, en asignaturas específicas',
          'Parcialmente, integrado en proyectos prácticos',
          'Apenas se toca el tema',
          'No se incluye formalmente',
          'Desconozco los detalles curriculares'
        ]
      },
      {
        id: 'q86',
        type: 'text',
        question: '¿Qué recomendaciones haría para mejorar las prácticas de documentación en el contexto universitario?',
        note: 'Sugiere mejoras institucionales.',
        extra: false
      },
      {
        id: 'q11_extra',
        type: 'text',
        question: '¿Desea agregar algo más sobre esta sección?',
        note: 'Comentarios adicionales.',
        extra: true
      }
    ]
  },

  {
    id: 'sec12',
    title: 'Prácticas Específicas de Documentación en Equipos',
    questions: [
      {
        id: 'q87',
        type: 'radio',
        question: '¿Cómo organiza su equipo la responsabilidad de documentación entre los miembros?',
        note: 'Selecciona el modelo de responsabilidad.',
        options: [
          'Cada desarrollador documenta su propio código/componente',
          'Un miembro dedicado asume la responsabilidad principal',
          'Rotación de responsabilidades entre el equipo',
          'Documentación como tarea colectiva en sesiones específicas',
          'División por áreas de expertise técnico',
          'Diferenciación entre documentación técnica y de usuario',
          'Supervisión centralizada con contribuciones distribuidas',
          'Tercerización de ciertos aspectos documentales'
        ]
      },
      {
        id: 'q88',
        type: 'text',
        question: '¿Qué prácticas específicas han implantado para mantener la consistencia en la documentación entre diferentes miembros del equipo?',
        note: 'Describe tus prácticas de consistencia.',
        extra: false
      },
      {
        id: 'q89',
        type: 'radio',
        question: '¿Realizan revisiones cruzadas de la documentación similar a las revisiones de código?',
        note: 'Elige tu nivel de rigor.',
        options: [
          'Sí, con el mismo rigor que las revisiones de código',
          'Sí, pero con un proceso más ligero',
          'Ocasionalmente, según la criticidad del documento',
          'Solo para documentación externa/cliente',
          'No realizamos revisiones formales de documentación',
          'Varía según la fase del proyecto'
        ]
      },
      {
        id: 'q12_extra',
        type: 'text',
        question: '¿Desea agregar algo más sobre esta sección?',
        note: 'Comentarios adicionales.',
        extra: true
      }
    ]
  },

  {
    id: 'sec13',
    title: 'Documentación y Deuda Técnica',
    questions: [
      {
        id: 'q90',
        type: 'radio',
        question: '¿Consideran la documentación desactualizada o incompleta como parte de la deuda técnica?',
        note: 'Selecciona cómo la gestionan.',
        options: [
          'Sí, es un componente explícito de nuestra deuda técnica',
          'Sí, pero se trata separadamente de la deuda de código',
          'Parcialmente, solo para documentación crítica',
          'No, la tratamos como un problema distinto',
          'No hacemos seguimiento formal de este aspecto'
        ]
      },
      {
        id: 'q91',
        type: 'text',
        question: '¿Cómo priorizan la actualización de documentación frente a nuevas características o corrección de errores?',
        note: 'Explica tu método de priorización.',
        extra: false
      },
      {
        id: 'q92',
        type: 'radio',
        question: '¿Qué porcentaje aproximado de tiempo dedican a reducir la "deuda documental" existente?',
        note: 'Estimación porcentual.',
        options: [
          'Menos del 5% del tiempo del equipo',
          'Entre 5-10% del tiempo del equipo',
          'Entre 11-20% del tiempo del equipo',
          'Más del 20% del tiempo del equipo',
          'No asignamos tiempo específico para esto',
          'Varía significativamente según el proyecto/fase'
        ]
      },
      {
        id: 'q93',
        type: 'checkbox',
        question: '¿Han desarrollado alguna métrica para cuantificar la deuda documental?',
        note: 'Marca las métricas que utilicen.',
        options: [
          'Tiempo estimado para actualizar documentación obsoleta',
          'Cobertura documental (% de código/funcionalidad documentada)',
          'Métricas de actualidad (tiempo desde última revisión)',
          'Retroalimentación de usuario/equipo sobre carencias',
          'Impacto en tiempo de onboarding/soporte',
          'Registro de incidentes por documentación inadecuada'
        ]
      },
      {
        id: 'q94',
        type: 'text',
        question: '¿Tiene su organización alguna política sobre el nivel máximo aceptable de deuda documental?',
        note: 'Describe tu política interna.',
        extra: false
      },
      {
        id: 'q13_extra',
        type: 'text',
        question: '¿Desea agregar algo más sobre esta sección?',
        note: 'Comentarios adicionales.',
        extra: true
      }
    ]
  },

  {
    id: 'sec14',
    title: 'Documentación en el Ciclo de Vida del Software',
    questions: [
      {
        id: 'q95',
        type: 'radio',
        question: '¿En qué fase del ciclo de vida del software considera que la documentación aporta mayor valor?',
        note: 'Selecciona la fase más crítica.',
        options: [
          'Análisis y requisitos',
          'Diseño arquitectónico',
          'Codificación/desarrollo',
          'Pruebas',
          'Despliegue',
          'Mantenimiento',
          'Evolución/actualización',
          'End-of-life/reemplazo'
        ]
      },
      {
        id: 'q96',
        type: 'text',
        question: '¿Cómo varía su enfoque de documentación a lo largo del ciclo de vida del producto?',
        note: 'Describe cómo cambia la documentación.',
        extra: false
      },
      {
        id: 'q97',
        type: 'checkbox',
        question: '¿Qué documentación considera imprescindible para la fase de mantenimiento?',
        note: 'Marca todos los documentos clave.',
        options: [
          'Arquitectura y diseño general',
          'API y contratos de interfaces',
          'Procedimientos operativos',
          'Guías de troubleshooting',
          'Registro de decisiones técnicas históricas',
          'Dependencias y versiones compatibles',
          'Procedimientos de actualización/migración',
          'Limitaciones conocidas y deuda técnica'
        ]
      },
      {
        id: 'q98',
        type: 'checkbox',
        question: '¿Cómo documentan la evolución y los cambios en los sistemas a lo largo del tiempo?',
        note: 'Marca los métodos que usen.',
        options: [
          'Changelog detallado',
          'Registro de decisiones arquitectónicas',
          'Versionado de la documentación',
          'Diagramas de evolución arquitectónica',
          'Documentación de migración entre versiones',
          'Historias de refactorizaciones significativas',
          'No documentamos formalmente la evolución'
        ]
      },
      {
        id: 'q99',
        type: 'text',
        question: '¿Cómo manejan la documentación al final de la vida útil de un sistema (legacy, reemplazo, etc.)?',
        note: 'Explica tu proceso de cierre.',
        extra: false
      },
      {
        id: 'q14_extra',
        type: 'text',
        question: '¿Desea agregar algo más sobre esta sección?',
        note: 'Comentarios adicionales.',
        extra: true
      }
    ]
  }
];