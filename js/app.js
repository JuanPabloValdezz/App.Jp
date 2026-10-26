(() => {
  "use strict";

  const SAMPLE = [
  {
    "tema": "Cap. 4: Hebras",
    "pregunta": "¿Qué elementos comparte una hebra con otras hebras que pertenecen al mismo proceso?",
    "opciones": [
      "El ID de hebra, el contador de programa y la pila.",
      "La sección de código, la sección de datos y los archivos abiertos.",
      "El conjunto de registros del procesador y la pila de ejecución.",
      "Únicamente el contador de programa y los registros de estado."
    ],
    "correcta": 1
  },
  {
    "tema": "Cap. 4: Hebras",
    "pregunta": "¿Cuál es una desventaja del modelo multihebra muchos-a-uno?",
    "opciones": [
      "Crear una hebra de usuario obliga a crear una hebra del kernel.",
      "No se puede gestionar mediante bibliotecas en el espacio de usuario.",
      "El proceso completo se bloquea si una hebra realiza una llamada bloqueante al sistema.",
      "Sólo funciona en sistemas multiprocesador simétricos."
    ],
    "correcta": 2
  },
  {
    "tema": "Cap. 4: Hebras",
    "pregunta": "En el programa de ejemplo de Pthreads, ¿qué funciones se invocan para que la hebra padre espere a la hebra hijo y para que la hebra hijo finalice?",
    "opciones": [
      "wait() en el padre y exit() en el hijo.",
      "pthread_join() en el padre y pthread_exit() en el hijo.",
      "WaitForSingleObject() en el padre y CloseHandle() en el hijo.",
      "join() en el padre y stop() en el hijo."
    ],
    "correcta": 1
  },
  {
    "tema": "Cap. 4: Hebras",
    "pregunta": "¿En qué consiste la cancelación diferida de una hebra objetivo?",
    "opciones": [
      "Una hebra externa fuerza la terminación inmediata de la hebra objetivo sin aviso.",
      "El kernel reclama todos los recursos antes de detener el proceso completo.",
      "La hebra objetivo comprueba periódicamente en puntos seguros si debe terminar por sí misma.",
      "La hebra se suspende hasta recibir una señal asíncrona del hardware."
    ],
    "correcta": 2
  },
  {
    "tema": "Cap. 4: Hebras",
    "pregunta": "¿Qué llamada al sistema utiliza Linux para crear hebras determinando mediante indicadores qué recursos se comparten?",
    "opciones": [
      "fork()",
      "exec()",
      "clone()",
      "CreateThread()"
    ],
    "correcta": 2
  },
  {
    "tema": "Cap. 5: Planificación de la CPU",
    "pregunta": "¿Cómo se denomina el tiempo que tarda el despachador en detener un proceso e iniciar la ejecución de otro?",
    "opciones": [
      "Tiempo de retorno.",
      "Latencia de despacho.",
      "Cuanto de tiempo.",
      "Tasa de procesamiento."
    ],
    "correcta": 1
  },
  {
    "tema": "Cap. 5: Planificación de la CPU",
    "pregunta": "¿En qué consiste el 'efecto convoy' dentro del algoritmo de planificación FCFS?",
    "opciones": [
      "Varios procesos cortos esperan detrás de un único proceso largo que retiene la CPU.",
      "Los procesos de baja prioridad nunca llegan a ejecutarse por culpa de los de alta prioridad.",
      "El cuanto de tiempo es tan pequeño que el procesador gasta todo el tiempo en cambios de contexto.",
      "Un proceso migra constantemente de un procesador a otro perdiendo su memoria caché."
    ],
    "correcta": 0
  },
  {
    "tema": "Cap. 5: Planificación de la CPU",
    "pregunta": "¿Qué técnica soluciona el problema de bloqueo indefinido (inanición) en los algoritmos de planificación por prioridades?",
    "opciones": [
      "Apropiación del kernel.",
      "Efecto convoy.",
      "Envejecimiento (aumentar gradualmente la prioridad de los procesos que esperan mucho tiempo).",
      "Afinidad dura al procesador."
    ],
    "correcta": 2
  },
  {
    "tema": "Cap. 5: Planificación de la CPU",
    "pregunta": "En la planificación por turnos (Round Robin), ¿qué sucede si el cuanto de tiempo se define demasiado grande?",
    "opciones": [
      "Se incrementa excesivamente el número de cambios de contexto.",
      "La planificación por turnos degenera en el método FCFS.",
      "El sistema entra automáticamente en estado de interbloqueo.",
      "Los procesos interactivos pasan a ejecutarse antes que los del sistema."
    ],
    "correcta": 1
  },
  {
    "tema": "Cap. 5: Planificación de la CPU",
    "pregunta": "¿Por qué los sistemas multiprocesador simétricos (SMP) utilizan la afinidad al procesador?",
    "opciones": [
      "Para que un único procesador maestro controle toda la entrada/salida.",
      "Para evitar el alto coste de invalidar y volver a rellenar la memoria caché al migrar un proceso.",
      "Para obligar a que todos los procesos compartan una única cola FIFO.",
      "Para desactivar las interrupciones de reloj en las tareas de usuario."
    ],
    "correcta": 1
  },
  {
    "tema": "Cap. 6: Sincronización",
    "pregunta": "¿Cómo se llama la situación en la que varios procesos manipulan datos compartidos concurrentemente y el resultado depende del orden de acceso?",
    "opciones": [
      "Exclusión mutua.",
      "Condición de carrera.",
      "Espera limitada.",
      "Serialización."
    ],
    "correcta": 1
  },
  {
    "tema": "Cap. 6: Sincronización",
    "pregunta": "¿Cuáles son los tres requisitos que debe satisfacer cualquier solución al problema de la sección crítica?",
    "opciones": [
      "Solicitud, uso y liberación.",
      "Exclusión mutua, progreso y espera limitada.",
      "Exclusión mutua, retención y espera, y espera circular.",
      "Lectura, escritura y confirmación (commit)."
    ],
    "correcta": 1
  },
  {
    "tema": "Cap. 6: Sincronización",
    "pregunta": "¿Cuál es la ventaja principal de un cerrojo mediante bucle sin fin (spinlock) en sistemas multiprocesador?",
    "opciones": [
      "No consume ciclos de CPU mientras espera a que se libere el cerrojo.",
      "No requiere realizar un cambio de contexto cuando un proceso espera por un período corto.",
      "Garantiza que nunca pueda ocurrir una condición de interbloqueo.",
      "Permite que múltiples procesos escriban simultáneamente en la sección crítica."
    ],
    "correcta": 1
  },
  {
    "tema": "Cap. 6: Sincronización",
    "pregunta": "En un monitor, ¿qué ocurre si un proceso invoca x.signal() sobre una variable de condición x en la que no hay ningún proceso suspendido?",
    "opciones": [
      "El proceso que invocó x.signal() queda bloqueado indefinidamente.",
      "El contador interno se incrementa para el próximo proceso que ejecute wait().",
      "La operación no tiene ningún efecto y el estado de x permanece igual.",
      "Se produce un error de ejecución en el monitor."
    ],
    "correcta": 2
  },
  {
    "tema": "Cap. 6: Sincronización",
    "pregunta": "En el protocolo de bloqueo en dos fases para transacciones atómicas, ¿qué caracteriza a la fase de contracción?",
    "opciones": [
      "La transacción puede obtener nuevos cerrojos, pero no puede liberar ninguno.",
      "La transacción puede liberar cerrojos, pero no puede obtener ningún cerrojo nuevo.",
      "La transacción escribe anticipadamente en el registro antes de pedir cerrojos.",
      "Se asigna una nueva marca temporal y se reinicia la transacción."
    ],
    "correcta": 1
  },
  {
    "tema": "Cap. 7: Interbloqueos",
    "pregunta": "¿Cuáles son las cuatro condiciones necesarias que deben darse simultáneamente para que ocurra un interbloqueo?",
    "opciones": [
      "Exclusión mutua, progreso, espera limitada y desalojo.",
      "Exclusión mutua, retención y espera, sin desalojo y espera circular.",
      "Solicitud, asignación, declaración y liberación.",
      "Estado seguro, estado inseguro, inanición y anulación."
    ],
    "correcta": 1
  },
  {
    "tema": "Cap. 7: Interbloqueos",
    "pregunta": "Si un grafo de asignación de recursos contiene un ciclo y cada tipo de recurso tiene varias instancias, ¿qué podemos concluir?",
    "opciones": [
      "El sistema está obligatoriamente en estado de interbloqueo.",
      "Ningún proceso del sistema puede estar interbloqueado.",
      "El ciclo es una condición necesaria pero no suficiente: puede haber o no interbloqueo.",
      "El sistema se encuentra en un estado seguro garantizado."
    ],
    "correcta": 2
  },
  {
    "tema": "Cap. 7: Interbloqueos",
    "pregunta": "¿Cómo se previene la condición de espera circular en un sistema?",
    "opciones": [
      "Exigiendo que todos los recursos sean archivos de sólo lectura.",
      "Imponiendo una ordenación total de los tipos de recursos y solicitándolos en orden creciente.",
      "Reiniciando automáticamente el sistema operativo una vez por hora.",
      "Desactivando las interrupciones antes de entrar a la sección crítica."
    ],
    "correcta": 1
  },
  {
    "tema": "Cap. 7: Interbloqueos",
    "pregunta": "En el algoritmo del banquero, ¿cómo se calcula la matriz de necesidad restante (Need) de cada proceso?",
    "opciones": [
      "Need = Allocation + Available",
      "Need = Max - Allocation",
      "Need = Request - Available",
      "Need = Max + Request"
    ],
    "correcta": 1
  },
  {
    "tema": "Cap. 7: Interbloqueos",
    "pregunta": "Al recuperarse de un interbloqueo mediante apropiación de recursos, ¿cómo se evita que siempre se elija al mismo proceso como víctima (inanición)?",
    "opciones": [
      "Incluyendo el número de anulaciones sufridas por el proceso en el cálculo del coste.",
      "Interrumpiendo todos los procesos activos del sistema al mismo tiempo.",
      "Eliminando las aristas de declaración del grafo de recursos.",
      "Aumentando el cuanto de tiempo del planificador de la CPU."
    ],
    "correcta": 0
  },
  {
    "tema": "Cap. 8: Memoria Principal",
    "pregunta": "¿Qué dispositivo hardware realiza la correspondencia entre direcciones virtuales (lógicas) y direcciones físicas en tiempo de ejecución?",
    "opciones": [
      "El contador de programa (PC).",
      "La unidad de gestión de memoria (MMU).",
      "El despachador del planificador a corto plazo.",
      "El editor de montaje estático."
    ],
    "correcta": 1
  },
  {
    "tema": "Cap. 8: Memoria Principal",
    "pregunta": "En la asignación dinámica de memoria contigua, ¿qué estrategia asigna el agujero libre más pequeño que sea suficiente para el proceso?",
    "opciones": [
      "Primer ajuste.",
      "Mejor ajuste.",
      "Peor ajuste.",
      "Compactación."
    ],
    "correcta": 1
  },
  {
    "tema": "Cap. 8: Memoria Principal",
    "pregunta": "¿Qué tipo de fragmentación se produce en un esquema de paginación?",
    "opciones": [
      "Sólo fragmentación externa, porque los marcos están dispersos.",
      "No existe fragmentación externa, pero sí puede haber fragmentación interna en el último marco.",
      "Tanto fragmentación externa como interna en partes iguales.",
      "Ninguna, porque el tamaño de página siempre coincide con el tamaño del proceso."
    ],
    "correcta": 1
  },
  {
    "tema": "Cap. 8: Memoria Principal",
    "pregunta": "¿Para qué se utiliza el búfer de consulta de traducción (TLB) en un sistema con paginación?",
    "opciones": [
      "Para almacenar en disco las páginas que no caben en la memoria RAM.",
      "Como caché asociativa de alta velocidad para acelerar la traducción de números de página a marcos.",
      "Para compactar los agujeros libres de la memoria física.",
      "Para dividir los segmentos del programa según las funciones del compilador."
    ],
    "correcta": 1
  },
  {
    "tema": "Cap. 8: Memoria Principal",
    "pregunta": "¿Qué característica distingue a una tabla de páginas invertida respecto de una tabla de páginas tradicional?",
    "opciones": [
      "Cada proceso tiene su propia tabla ordenada por dirección lógica.",
      "Existe una única tabla en el sistema con una entrada por cada marco físico real de memoria.",
      "Ordena las páginas desde la dirección más alta hacia la dirección cero.",
      "Permite compartir memoria fácilmente asociando múltiples páginas virtuales a una entrada."
    ],
    "correcta": 1
  }
]

  const QUESTIONS_PER_QUIZ = 10;
  const $ = (id) => document.getElementById(id);

  let bank = [];
  let selectedTopics = new Set();
  let quiz = [];
  let idx = 0;
  let answers = [];

  /* ---------- 1. Estado de conexión ---------- */
  function updateNetwork() {
    // Muestra el cartel de "Sin conexión / Offline" cuando navigator.onLine es false
    $("status").hidden = navigator.onLine;
  }
  window.addEventListener("online", updateNetwork);
  window.addEventListener("offline", updateNetwork);
  updateNetwork();

  /* ---------- 2. Banco de preguntas (Local + Servidor) ---------- */
  try {
    const saved = localStorage.getItem("bank");
    if (saved) bank = JSON.parse(saved);
  } catch (e) {}

  if (!bank.length) bank = SAMPLE;
  $("json").value = JSON.stringify(bank, null, 2);

  // Intenta descargar preguntas nuevas puestas por el equipo de atrás (en preguntas.json)
  async function cargarPreguntasRemotas() {
    const params = new URLSearchParams(window.location.search);
    const url = params.get("banco") || "./preguntas.json";
    try {
      const resp = await fetch(url, { cache: "no-store" });
      if (!resp.ok) return;
      const data = await resp.json();
      if (Array.isArray(data) && data.length) {
        $("json").value = JSON.stringify(data, null, 2);
        if (parseBank()) renderTopics();
      }
    } catch (e) {
      // Si está offline o no existe preguntas.json, usa el banco local sin fallar
    }
  }

  function parseBank() {
    try {
      const data = JSON.parse($("json").value);
      if (!Array.isArray(data)) throw new Error("no es lista");
      bank = data.filter((x) => x.pregunta && Array.isArray(x.opciones) && Number.isInteger(x.correcta));
      try { localStorage.setItem("bank", JSON.stringify(bank)); } catch (e) {}
      return true;
    } catch (e) {
      $("info").textContent = "JSON no válido. Revisa el formato.";
      return false;
    }
  }

  const pool = () => bank.filter((x) => selectedTopics.has(x.tema || "General"));

  function updateInfo() {
    $("info").textContent = `${pool().length} preguntas disponibles. Se eligen ${Math.min(QUESTIONS_PER_QUIZ, pool().length)} al azar.`;
  }

  function renderTopics() {
    const topics = [...new Set(bank.map((x) => x.tema || "General"))];
    selectedTopics = new Set(topics);
    $("chips").replaceChildren();
    topics.forEach((t) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip on";
      b.textContent = t;
      b.setAttribute("aria-pressed", "true");
      b.addEventListener("click", () => {
        selectedTopics.has(t) ? selectedTopics.delete(t) : selectedTopics.add(t);
        const on = selectedTopics.has(t);
        b.classList.toggle("on", on);
        b.setAttribute("aria-pressed", String(on));
        updateInfo();
      });
      $("chips").appendChild(b);
    });
    updateInfo();
  }

  $("json").addEventListener("change", () => { if (parseBank()) renderTopics(); });
  $("file").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { $("json").value = reader.result; if (parseBank()) renderTopics(); };
    reader.readAsText(file);
  });

  renderTopics();
  cargarPreguntasRemotas();

  /* ---------- 3. Utilidades ---------- */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function showScreen(id) {
    ["setup", "quiz", "res"].forEach((s) => $(s).classList.toggle("hidden", s !== id));
  }

  function setProgress(pct) {
    $("fill").style.width = pct + "%";
    document.querySelector(".progress").setAttribute("aria-valuenow", Math.round(pct));
  }

  /* ---------- 4. Evaluación ---------- */
  $("start").addEventListener("click", () => {
    if (!parseBank()) return;
    const p = pool();
    if (!p.length) {
      $("info").textContent = "Selecciona al menos un tema con preguntas.";
      return;
    }
    quiz = shuffle(p).slice(0, QUESTIONS_PER_QUIZ);
    answers = Array(quiz.length).fill(null);
    idx = 0;
    showScreen("quiz");
    renderQuestion();
  });

  function renderQuestion() {
    const q = quiz[idx];
    $("count").textContent = `Pregunta ${idx + 1} de ${quiz.length}`;
    setProgress(Math.max(12, ((idx + 1) / quiz.length) * 100));
    $("q").textContent = q.pregunta;
    $("opts").replaceChildren();

    q.opciones.forEach((text, i) => {
      const b = document.createElement("button");
      const selected = answers[idx] === i;
      b.type = "button";
      b.className = "opt" + (selected ? " sel" : "");
      b.textContent = text;
      b.setAttribute("role", "radio");
      b.setAttribute("aria-checked", String(selected));
      b.addEventListener("click", () => {
        answers[idx] = i;
        renderQuestion();
      });
      $("opts").appendChild(b);
    });

    $("ant").disabled = idx === 0;
    $("sig").disabled = idx === quiz.length - 1;

    // Le saca el borde naranja fijo a los dos botones siempre
    $("ant").classList.remove("is-active");
    $("sig").classList.remove("is-active");
  }

  $("ant").addEventListener("click", (e) => {
    e.currentTarget.blur(); // Suelta el foco para que no quede marcado
    if (idx > 0) { idx--; renderQuestion(); }
  });

  $("sig").addEventListener("click", (e) => {
    e.currentTarget.blur(); // Suelta el foco para que no quede marcado
    if (idx < quiz.length - 1) { idx++; renderQuestion(); }
  });

  $("ant").addEventListener("click", () => { if (idx > 0) { idx--; renderQuestion(); } });
  $("sig").addEventListener("click", () => { if (idx < quiz.length - 1) { idx++; renderQuestion(); } });

  let waitingForConnection = false;

  function mostrarPuntajeFinal() {
    let correct = 0;
    quiz.forEach((q, i) => { if (answers[i] === q.correcta) correct++; });

    $("count").textContent = "Resultado";
    setProgress(100);
    $("score").textContent = `${correct} / ${quiz.length}`;
    $("rev").replaceChildren(); // Vacía la lista para NO mostrar respuestas correctas ni incorrectas

    showScreen("res");
  }

  // Si estaba esperando conexión, apenas el celular vuelve a tener Wi-Fi/Datos muestra la nota sola
  window.addEventListener("online", () => {
    if (waitingForConnection) {
      waitingForConnection = false;
      mostrarPuntajeFinal();
    }
  });

  $("fin").addEventListener("click", () => {
    const missing = answers.filter((a) => a === null).length;
    if (missing && !confirm(`Te faltan ${missing} preguntas sin responder. ¿Finalizar de todos modos?`)) return;

    // Si el celular sigue sin conexión, pide activarla y espera
    if (!navigator.onLine) {
      waitingForConnection = true;
      $("count").textContent = "Esperando conexión";
      $("score").textContent = "Conéctate a internet";
      $("rev").innerHTML = `<p class="small" style="text-align:center; font-size:15px; margin-top:12px;">
        Activa el Wi-Fi o los datos móviles para ver tu calificación final.
      </p>`;
      showScreen("res");
      return;
    }

    // Si ya tiene conexión cuando toca Finalizar, muestra el puntaje directo
    mostrarPuntajeFinal();
  });

  $("again").addEventListener("click", () => {
    $("count").textContent = "Configuración";
    setProgress(0);
    showScreen("setup");
  });

  /* ---------- 5. Service Worker ---------- */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
})();