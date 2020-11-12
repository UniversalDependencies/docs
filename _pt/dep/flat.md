---
layout: relation
title: 'flat'
redirect_from: "pt/dep/name.html"
shortdef: 'name'
---

`flat` is one of the three relations for compounding in UD (together
with [compound]() and [fixed]()).
It is used for proper nouns constituted of multiple nominal
elements. For example, `flat` would be used between the words of
_Hillary Clinton, Rio de Janeiro,_ or _Dom Pedro I_ but not to
replace the usual relations in a phrasal or clausal name like _O rei da Suécia_ or the novels _O senhor dos anéis_.
Words joined by `flat` should all be part of a minimal noun phrase;
otherwise regular syntactic relations should be used.  This is
basically similar to the treatment of noun compounds with
[compound](), except that in many cases parts of the name may be
another nominal element such as an adjective _(Páginas Amarelas)._

In general, names are annotated in a flat, head-initial structure, in
which all words in the name modify the first one using the `flat`
label.

~~~ sdparse
Dom Pedro I
name(Dom-1, I-3)
name(Dom-1, Pedro-2)
~~~

For organization names with clear syntactic modification structure, the dependencies should reflect the syntactic modification structure using regular syntactic relation, as in:.

~~~ sdparse
Procuradoria Geral da República
amod(Procuradoria, Geral)
compound(Procuradoria, República)
~~~

In addition, regular syntactic relations are used:
(i) for a modifying determiner or
(ii) to connect together the words of a description or name which involve embedded prepositional phrases, sentences, etc.

~~~ sdparse
os Estados Unidos
det(Estados, os)
~~~

~~~ sdparse
Miguel de Cervantes 
name(Miguel, Cervantes)
case(Cervantes, de)
~~~

~~~ sdparse
O rei de a Suécia
det(rei-2, O-1)
nmod(rei-2, Suécia-4)
case(Suécia-4, de-3)
~~~

~~~ sdparse
Rio de Janeiro
case(Janeiro, de)
nmod(Rio, Janeiro)
~~~

In the case of proper entities named after people, e.g. _Fundação Getúlio Vargas_, the `flat` relation should only be used inside the person name, with the rest of the construction analyzed compositionally using normal syntactic relations:

~~~ sdparse
Fundação Getúlio Vargas
compound(Fundação, Getúlio)
name(Getúlio, Vargas)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:27 CET 2020 -->
