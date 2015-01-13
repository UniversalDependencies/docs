---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
---

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.),
as a modifier not as a core complement. This includes things such as a temporal clause, consequence, conditional clause, purpose
clause, etc. The dependent must be clausal (or else it is an [advmod]()) and the dependent is the main predicate of the clause.

~~~ sdparse
K nehodě došlo , když přicházela noc . \n To accident it-came , when was-falling night .
advcl(došlo, přicházela)
advcl(it-came, was-falling)
~~~

~~~ sdparse
Jestliže víš , kdo to udělal , měl bys to říct učiteli . \n If you-know , who it did , should you it tell teacher .
advcl(měl, víš)
advcl(should, you-know)
~~~

~~~ sdparse
Spěchal , aby přišel včas . \n He-rushed , in-order-to come in-time .
advcl(Spěchal, přišel)
advcl(He-rushed, come)
~~~
