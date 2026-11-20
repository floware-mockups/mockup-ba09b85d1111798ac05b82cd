// @ts-nocheck
import { customTicker, customTimers } from "../customGuard.ts";
const __mk = customTicker("AnteprimaTema");
const { setTimeout, setInterval, clearTimeout, clearInterval } = customTimers("AnteprimaTema");
import { useState } from "react";
import { Button, Badge, usePrototype } from "../floware";

export default function AnteprimaTema(props) {__mk();
  const [scura, setScura] = useState(false);
  const { title } = usePrototype();
  return (
    <section className="rounded-lg border border-(--mk-border) bg-(--mk-surface) p-4 text-(--mk-text)">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-semibold">{title} · Anteprima tema</h2>
          <p className="text-sm text-(--mk-muted)">Il selettore modifica soltanto il riquadro dimostrativo sottostante.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="primary">{scura ? "Scura selezionata" : "Chiara selezionata"}</Badge>
          <Button variant="secondary" onClick={() => (__mk(), setScura(!scura))}>{scura ? "Passa alla chiara" : "Passa alla scura"}</Button>
        </div>
      </div>
      <div className={scura ? "mt-4 rounded-lg bg-(--mk-primary) p-4 text-(--mk-on-primary)" : "mt-4 rounded-lg border border-(--mk-border) bg-(--mk-subtle) p-4 text-(--mk-text)"}>
        <h3 className="font-semibold">{scura ? "Anteprima scura · simulazione" : "Anteprima chiara"}</h3>
        <p className="mt-2 text-sm">Sportello dimostrativo · 6 fasce disponibili</p>
        <p className="mt-1 text-sm">Testo e sfondo utilizzano le combinazioni di contrasto del tema.</p>
        <div className="mt-3"><Button variant="secondary" onClick={() => (__mk(), setScura(!scura))}>Cambia modalità anteprima</Button></div>
      </div>
    </section>
  );
}
