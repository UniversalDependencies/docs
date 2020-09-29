---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
---

An appositional modifier serves to identify its head in a different way. This relation is usually established between noun phrases.

~~~ sdparse
Am plecat cu Alexandru , vărul meu . \n Have-I left with Alexandru , cousin-the my . 
appos(Alexandru, vărul)
~~~

However, other parts of speech and even clauses can also be involved in the relation:

~~~ sdparse
Gustul fructului era ciudat , adică dulce-amărui . \n  . Taste-the fruit-the-of was strange , that_is sweet-bitter .
appos(ciudat, dulce-amărui)
~~~

~~~ sdparse
Ne-am întâlnit aici , unde am stabilit . \n Us-have met here , where have-we established .
appos(aici, stabilit)
~~~

The apposition can be introduced by an adverb (e.g. 'adică', 'anume', 'respectiv', 'alias', etc.), which is analysed as a 'mark' for the apposotion:

~~~ sdparse
A reușind muncind , adică asudând . \n Has succeeded working , that_is sweating .
appos(muncind, asudând)
mark(asudând, adică)
~~~

It includes parenthesized examples, as well as defining abbreviations in one of these structures.

~~~ sdparse
Venerabilul ( adică eu ) merge diseară la întrunire . \n Honorable-the ( that_is I ) goes tonight at meeting. 
appos(Venerabilul, eu)
~~~

~~~ sdparse
Banca Comercială Română ( BCR ) \n Bank-the Commercial Romanian ( BCR )  
appos(Banca, BCR)
~~~

'appos' is also used to link key-value pairs in addresses, signatures, etc.:

~~~ sdparse
Ana Ionescu , Str Rozelor , tel : 0245.756.547 , email : ana@yahoo.com
name(Ana, Ionescu)
list(Ana, Str)
appos(Str, Rozelor)
list(Ana, tel)
appos(tel, 0245.756.547)
list(Ana, email)
appos(email, ana@yahoo.com)
~~~
<!-- Interlanguage links updated Út zář 29 20:31:43 CEST 2020 -->
