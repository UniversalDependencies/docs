---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
udver: '2'
---

The `dislocated` label is used for fronted or postposed elements that do not fulfill the usual core grammatical relations of a sentence. These elements often appear to be in the periphery of the sentence, and may be separated off with a comma intonation. Few examples of this have been observed in the Irish treebank thus far.

### Examples

_(5 <b>marc</b>) (iv) Breac síos dhá phointe eolais i dtaobh an fhiontair Aisling na nÓg._ `(5 <b>marks</b>) (iv) Write down two points of information in relation to the adventure of Aisling na nÓg.

~~~ sdparse
(5 marc) (iv) Breac síos dhá phointe eolais i dtaobh an fhiontair Aisling na nÓg. \n (5 marks) (iv) Write down two points_of information in relation_to the adventure_of Aisling na nÓg.
dislocated(Breac, marc))
~~~

_B'iontach leis nár chuir Dia cosc leo; a <b>chlann</b> féin bhí siad imithe chun donais._ `He was delighted that God didn't refuse them; his own <b>family</b>, they were beyond help'

~~~ sdparse
B'iontach leis nár chuir Dia cosc leo; a chlann féin bhí siad imithe chun donais. \n . Was_delight with him that_did_not put God restraint with_them; his family own were they gone towards misfortune.
dislocated(bhí, chlann)
parataxis(B'iontach, bhí)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:30 CEST 2020 -->
