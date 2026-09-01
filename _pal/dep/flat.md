---
layout: relation
title: 'flat'
shortdef: 'flat'
udver: '2'
---

Flat structures are rare in Middle Persian because personal [names](PROPN) usually take the family name as a dependent. Titles like *kay* can be in a dependent relation but they also occur juxtaposed and can even become part of the name, e.g. *kay us* → *kayus* → *kay kayus*.

- "Kay Wištāsp" (sometimes even written as one word)
~~~ sdparse
kay wištāsp \n Kay Wištāsp
flat(wištāsp, kay)
~~~

- "Zardušt Wuzurgmihr (and) Mihrātaxš of Ādurgušnasp"
~~~ sdparse
zardušt wuzurgmihr mihrātaxš ī ādurgušnasp \n Zardušt Wuzurgmihr Mihrātaxš EZ Ādurgušnasp
flat(zardušt, wuzurgmihr)
conj(zardušt, mihrātaxš)
nmod(mihrātaxš, ādurgušnasp)
det(ādurgušnasp, ī)
~~~

Avestan quotations are annotated as flat when they represent a more or less accidental sequence of Avestan words, e.g., referring to a specific text passage. If they represent a fixed expression, the relation is [fixed]().

- "(The prayer beginning with) *yə̄ səuuištō ahurō mazdā̊scā*, as (it) appears in the Gathas, is to be said three (times)."
~~~ sdparse
yə̄ səuuištō ahurō mazdā̊scā , čiyōn pad gāhān bawēd , se guftan \n QUOTE QUOTE QUOTE QUOTE , as in Gathas be , three say.NEC
flat(yə̄, səuuištō)
flat(yə̄, ahurō)
flat(yə̄, mazdā̊scā)
nsubj:pass(guftan, yə̄)
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:09 CEST -->
