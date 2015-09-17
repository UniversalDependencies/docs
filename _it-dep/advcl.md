---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
---

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.), as a modifier not as a core complement. This includes things such as a temporal clause, consequence, conditional clause, purpose clause, etc. The dependent must be clausal (or else it is an advmod) and the dependent is the main predicate of the clause.

`advcl` cover the following typology of cases:

* participial modifiers

~~~ sdparse
Muore folgorata sotto la doccia
advcl(Muore, folgorata)
~~~

* finite clausal modifiers

~~~ sdparse
Quando lui muore l' azienda sbanda paurosamente
advcl(muore, sbanda)
~~~

* infinitival modifiers

~~~ sdparse
Mi fecero pagare gli hezbollah per liberare due ostaggi
advcl(pagare, liberare)
~~~

* gerundival modifiers

~~~ sdparse
risolvere i problemi di approvvigionamento alimentare acquistando una fazenda
advcl(risolvere, acquistando)
~~~
