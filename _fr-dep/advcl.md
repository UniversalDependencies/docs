---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
---

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.),
as a modifier not as a core complement. This includes things such as a temporal clause, consequence, conditional clause, purpose
clause, etc. The dependent must be clausal (or else it is an [advmod]()) and the dependent is the main predicate of the clause.

~~~ sdparse
L'accident s'est produit quand il faisait noir \n The accident happened when it was dark
advcl(produit, faisait)
~~~

~~~ sdparse
Si tu sais qui l'a fait, tu devrais le dire au professeur \n If you know who did it, you should tell the teacher
advcl(dire, sais)
~~~

~~~ sdparse
Il faut venir tôt pour avoir de la place \n One needs to get there early to have a seat
advcl(venir, avoir)
~~~
