---
layout: relation
title:  'parataxis'
shortdef : 'parataxis'
---

The parataxis relation (from Greek for "place side by side") is a relation between the main verb of a clause and other sentential elements, such as a sentential parenthetical, a clause after a ":" or a ";", or two sentences placed side by side without any explicit coordination or subordination. 

~~~ sdparse
Let 's face it we 're annoyed
parataxis(Let, annoyed)
~~~

When multiple parataxes are present in a single sentence, they get a flat structure, not a hierarchical one, even if they form a temporal sequence.

~~~ sdparse
ROOT I 'm not kidding , I once lost a hamster in my house , three months later I walk down in the basement and it was as big as a rat .
root(ROOT, kidding)
parataxis(lost, kidding)
parataxis(walk, kidding)
~~~

All else being equal, the leftmost phrase should be the head, but in rare situations the parataxis can go ``backwards'':

~~~ sdparse
The guy , John said , left early in the morning
parataxis(left, said)
~~~

See also: [language-general documentation of `parataxis`](/u/dep/parataxis.html)
<!-- Interlanguage links updated Čt lis 12 09:43:37 CET 2020 -->
