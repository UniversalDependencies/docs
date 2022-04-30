---
layout: relation
title: 'parataxis:insert'
shortdef: 'parataxis insert'
udver: '2'
---

This relation is used only in **UD_French-Spoken**: the `parataxis:insert` relation is used for parenthetical clauses which could not be considered as independent sentences, since they are not saturated.
In French such clauses can usually be found in formal writings (news, tales etc.). They are also typically caracterized by an inversion of the subject.

N.B.: When the parenthetical clause is saturated, the [parataxis:parenth]() relation is more appropriate.

~~~ sdparse
Demain, déclara gravement Mathilde, il faudra partir dès l'aube. \n Tommorow, Mathilde declared gravely, we must leave at dawn.
parataxis:insert(faudra, déclara)
~~~

~~~ sdparse
vraiment dit Job la vie de l'homme sur Terre est une corvée \n truely, said Job, man's life on earth is nothing more than pressed service
parataxis:insert(corvée, dit)
~~~
<!-- Interlanguage links updated St lis 3 20:59:08 CET 2021 -->
