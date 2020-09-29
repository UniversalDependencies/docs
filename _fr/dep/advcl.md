---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.), as a modifier not as a core complement.
This includes things such as a temporal clause, consequence, conditional clause, purpose clause, etc.
The dependent must be clausal (or else it is an [advmod]()) and the dependent is the main predicate of the clause.

~~~ sdparse
L'accident s'est produit quand il faisait noir \n The accident happened when it was dark
advcl(produit, faisait)
~~~

~~~ sdparse
Il faut venir tôt pour avoir de la place \n One needs to get there early to have a seat
advcl(venir, avoir)
~~~

Here are some examples from **UD_French-Spoken**:

~~~ sdparse
ils ont fait médecine parce que euh ça va être un métier stable \n they studied medecine because uh it's gonna be a steady job
advcl(fait, va)
~~~

~~~ sdparse
ça donne un aspect plus moderne quand même si tu mets le tissu tout autour \n it gives a more modern look if you put the fabric all around
advcl(donne, mets)
~~~

<!-- Interlanguage links updated Út zář 29 20:43:07 CEST 2020 -->
