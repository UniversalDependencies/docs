---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

In UD, the `obl` relation is used for a nominal dependent of a verb. 
However, this dependent is neither a subject (for which we use the [nsubj]() relation) nor a direct object (for which we use the [obj]() relation).

~~~ sdparse
Sara donne une fleur à Tom . \n Sara gives a flower to Tom.
obl(donne, Tom)
case(Tom, à)
~~~

If the adjunct adverbial is a noun phrase or a noun, we use `obl`:

~~~ sdparse
Concentre-se nas suas aspirações e então siga com confiança na direção dos seus objetivos.
obl(siga, confiança)
case(confiança, com)
~~~


<!-- Interlanguage links updated St lis 3 20:59:04 CET 2021 -->
