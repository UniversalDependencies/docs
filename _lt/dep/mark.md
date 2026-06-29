---
layout: relation
title: 'mark'
shortdef: 'marker'
udver: '2'
---

A marker is the word marking a clause as subordinate to another clause. The marker is typically a subordinating conjunction like _nes, jei, nors, kai, kad, kaip kad (because, if, although, when, that, just as)_ etc. The marker is a dependent of the subordinate clause head. Relative pronouns (_kuris, koks... / which, what..._), adverbs (_kur, iki kol, iki kolei... / where, until, until..._), and particles (_vos, mat... / barely, because_) functioning as subordinating conjunctions, are not annotated as `mark`. They are marked with other tags.

~~~ sdparse
Kai saulė tekėjo , mes ėjome namo . \n When the-sun rose , we went home .
mark(tekėjo, Kai)
mark(rose, When)
~~~

~~~ sdparse
Jei tu žinai tiesą , pasakyk mokytojui. \n If you know the-truth , tell the-teacher .
mark(žinai, Jei)
mark(know, If)
~~~

~~~ sdparse
Aš nėjau į darbą , nes sirgau . \n I didn‘t-go to-work because I-was-ill .
mark(sirgau, nes)
mark(I-was-ill, because)
~~~

Some subordinating conjunctions are treated as compounds (e.g., _kaip kad (just as/as...as)_), i.e., they occur in a single token.

~~~ sdparse
Šokti nėra taip lengva , kaip-kad jūs manote . \n Dancing is-not as easy as you think .
mark(manote, kaip-kad)
mark(think, as)
~~~

Some subordinating conjunctions function as fixed expressions, so their first element is annotated as `mark` and the second element is attached to the first and annotated as [fixed]().

~~~ sdparse
Kai tik išaušo rytas , išsiviriau kavos . \n As soon-as morning dawned , I-brewed coffee .
mark(išaušo, Kai)
fixed(Kai, tik)
mark(dawned, As)
fixed(As, soon-as)
~~~

Correlative conjunctions are also annotated as `mark` (the second clause element is treated as the main one).

~~~ sdparse
Kai susitikome , tai kalbėjomės iki išnaktų . \n When we-met , then we-talked until dawn .
mark(susitikome, Kai)
mark(kalbėjomės, tai)
mark(we-met, When)
mark(we-talked, then)
~~~
<!-- Interlanguage links updated Po 29. června 2026, 18:00:01 CEST -->
