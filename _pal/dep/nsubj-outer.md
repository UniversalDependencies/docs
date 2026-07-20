---
layout: relation
title: 'nsubj:outer'
shortdef: '<shortdef>'
udver: '2'
---

Outer subjects have a clausal predicate, which itself may have a(n inner) subject of its own. Placeholders and resumptive pronouns are annotated as `dislocated:res`.

- "The reply (is) this that the creator created the creation for the attainment of his plan."
~~~ sdparse
pāsox ēd kū dādār dām dād ō rawāggarīh ī =š kām \n answer this that creator creation created to attainment EZ his wish
nsubj:outer(dād, pāsox)
dislocated:res(dād, ēd)
mark(dād, kū)
nsubj(dād, dādār)
obj(dād, dām)
case(rawāggarīh, ō)
obl(dād, rawāggarīh)
det(kām, ī)
nmod(kām, =š)
nmod(rawāggarīh, kām)
~~~

- "Mihr's purpose (is) to judge about the world in accordance with truth."
~~~ sdparse
mihr xwēškārīh wizīr ī gēhān pad rāstīh kirdan \n Mihr proper_function decision EZ world by truth do
nmod(xwēškārīh, mihr)
nsubj:outer(kirdan, xwēškārīh)
obj(kirdan, wizīr)
nmod(wizīr, gēhān)
det(gēhān, ī)
case(rāstīh, pad)
obl(kirdan, rāstīh)
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:25 CEST -->
