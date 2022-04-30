---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

In UD, the `obl` relation is used for a nominal dependent of a verb. 
However, this dependent is neither a subject (for which we use the [nsubj]() relation) nor a direct object (for which we use the [obj]() relation). The relation is specially useful for annotate the adjunct adverbials that are noun phrase or nouns:

~~~ sdparse
Concentre-se nas suas aspirações e então siga com confiança na direção dos seus objetivos.
obl(siga, confiança)
case(confiança, com)
~~~


<!-- Interlanguage links updated St lis 3 20:59:04 CET 2021 -->
