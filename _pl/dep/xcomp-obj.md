---
layout: relation
title: 'xcomp:obj'
shortdef: 'infinitival objects'
udver: '2'
---

The `xcomp:obj` subtype of the [xcomp]() relation is used in the Polish [PDB-LFG](http://universaldependencies.org/treebanks/pl_lfg/index.html)
treebank for an object realized as an infinitival clause.

The verb _zabronić_ “to forbid” normally takes a direct accusative object but in the following
example, the object is realized as an infinitival clause. The subject of the object clause
cannot be overtly expressed and is coreferential with a participant of the main clause.
Here, the coreferential participant is the addressee/beneficiary of the forbidding, and he is
unexpressed, too, but he could be expressed as an oblique argument.

~~~ sdparse
Grożąc skrzywdzeniem Anety , zabronili też powiadamiać policję . \n Threatening with-hurting of-Aneta , they-forbade also to-notify police .
xcomp:obj(zabronili, powiadamiać)
xcomp:obj(they-forbade, to-notify)
~~~

“Threatening to hurt Aneta, they also forbade to notify the police.”

<!-- Interlanguage links updated Pá kvě 14 11:09:23 CEST 2021 -->
