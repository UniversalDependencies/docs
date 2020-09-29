---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.), as a modifier, not as a core complement. This includes things such as a temporal clause, consequence, conditional clause, purpose clause, etc. The dependent must be clausal (otherwise it is an <code>advmod</code>) and the dependent is the main predicate of the clause (a verbal predicate or a noun if the verb is omitted).

`advcl` covers the following typology of cases:

* participial modifiers

~~~ sdparse
Muore folgorata/VERB[VerbForm=Part] sotto la doccia
advcl(Muore, folgorata)
~~~

* finite clausal modifiers

~~~ sdparse
Quando lui muore/VERB[VerbForm=Fin] l' azienda sbanda paurosamente
advcl(sbanda, muore)
~~~

* infinitival modifiers

~~~ sdparse
Mi fecero pagare gli hezbollah per liberare/VERB[VerbForm=Inf] due ostaggi
advcl(pagare, liberare)
~~~

* gerundival modifiers

~~~ sdparse
risolvere i problemi di approvvigionamento alimentare acquistando/VERB[VerbForm=Ger] una fazenda
advcl(risolvere, acquistando)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:16 CEST 2020 -->
