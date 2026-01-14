---
title: "Robot de Sumo: Proyecto Caos"
description: "Destrucción total en menos de 500g."
pubDate: 2026-02-01
status: "Terminado"
tags: ["Robótica", "Competencia"]
---

¡Bienvenidos al taller! Hoy vamos a romper cosas.

## El Concepto

La idea es simple: **Empujar al otro robot**. Pero la ejecución requiere precisión.

> "Si no echa humo la primera vez, no lo estás haciendo bien."

### El Código de Ataque

```cpp
void loop() {
  if (sensor.distancia < 10) {
    atacar(MAX_POWER); // 🔥 A la carga!!
  }
}
```
