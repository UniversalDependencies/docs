---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

The `obl` relation in Lithuanian is used for a nominal (noun, pronoun, noun phrase)
functioning as an adjunct. `Obl` is used to mark:

Temporal and location modifiers expressed by a noun phrase:
~~~ sdparse
Praeitą vakarą aš plaukiojau baseine . \n Last evening I was-swimming in-the-pool .
obl(plaukiojau, vakarą)
obl(plaukiojau, baseine)
obl(was-swimming, evening)
obl(was-swimming, in-the-pool)
~~~

Prepositional constructions functioning adverbaly: 
~~~ sdparse
Po savaitės aš eisiu į baseiną . \n After a-week , I will-go to the-pool .
obl(eisiu, savaitės)
obl(will-go, a-week)
~~~

Comparative constructions: 
~~~ sdparse
Tu atrodai kaip beprotis . \n You look like a-madman .
obl(atrodai, beprotis)
obl(look, a-madman)
~~~

~~~ sdparse
Tu atrodai geriau nei jis . \n You look better than him .
obl(geriau, jis)
obl(better, him)
~~~

Comparative constructions with “daugiau nei” or “mažiau nei” (_more than, less than_):
~~~ sdparse
Aš turiu daugiau nei 30 proc. akcijų . \n I have more than 30 percent of-the-shares .
obl(daugiau, proc.)
obl(more, percent)
~~~

Expressions indicating a source:
~~~ sdparse
Anot dietologės , galima rinktis žuvį . \n According-to the-dietitian , one-can-choose fish .
obl(galima, dietologės)
obl(one-can-choose, the-dietitian)
~~~

Relative pronouns in relative clauses:
~~~ sdparse
Namas, kuriame aš gyvenu . \n The-house in-which I live .
obl(gyvenu, kuriame)
obl(live, in-which)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:35:04 CEST -->
