---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
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

In FrenchSpoken we also use the `advcl`relation. Here are some examples:

~~~ sdparse
ils ont fait médecine parce que euh ça va être un métier stable \n they studied medecine because uh it's gonna be a steady job
advcl(fait, va)
mark(va, parce)
~~~

~~~ sdparse
ça donne un aspect plus moderne quand même si tu mets le tissu tout autour \n it gives a more modern look if you put the fabric all around 
advcl(donne, mets)
mark(mets, si)
~~~

However we introduce a new subrelation [advcl:periph]() for averbial clause modifiers that cannot be clefted. 
