---
layout: relation
title: 'aux:neg'
shortdef: 'negative auxiliary'
udver: '2'
---

This is a subtype of [aux](), used for the negative auxiliaries and particles _аф, афи, афоль, апак, аш, тят, эзь_.

The negative auxiliary, when attached to a predicate,
typically carries some of the tense/aspect/modality suffixes as well as person/number agreement suffixes.

Although they do not function as an auxiliary when attached to non-predicate words or phrases,
we use `aux:neg` for all forms and uses of the highly suppletive negative auxiliary paradigm and particles.

~~~ sdparse
Митроха атянь сельмоц нинге оржа и кядец аф трнаты . \n Old man Mitrokha's eye is still sharp and his hand doesn't _shake_ .
aux:neg(трнаты, аф)
~~~

~~~ sdparse
Эста самолётовок теень афоль эряв , \n Then I wouldn't have even _needed_ an airplane ,
aux:neg(эряв, афоль)
~~~

~~~ sdparse
Гулянять пацяняц апак синтть . \n The	little pigeon's	wing isn't _broken_ .
aux:neg(синтть, апак)
~~~

~~~ sdparse
кодама аньцек краскат сонь эсонза ашельхть . \n there was no lack of colors in _it_ .
aux:neg(сонь, ашельхть)
~~~

~~~ sdparse
Шись нинге ашезь стя , \n The	sun hadn't _risen_ yet ,
aux:neg(стя, ашезь)
~~~

~~~ sdparse
Тят учсе тя шрать ваксса . \n — Don't wait next to this table !
aux:neg(учсе, Тят)
~~~

<!-- Interlanguage links updated St lis 3 20:58:41 CET 2021 -->
