---
layout: relation
title: 'case'
shortdef: 'case marking'
---

The `case` relation for Greek is used for prepositions.

~~~ sdparse
« Κυριαρχήσαμε σε όλο το παιχνίδι » .
case(παιχνίδι, σε)
nmod(Κυριαρχήσαμε, παιχνίδι)
~~~

~~~ sdparse
Δε σταμάτησαν από την αρχή ως το τέλος 
case(αρχή,  από)
case(τέλος, ως)
nmod(σταμάτησαν, αρχή)
nmod(σταμάτησαν, τέλος)
~~~

A small list of postpositions in fixed expressions are labeled with `case`. **TODO:** An alternative analysis would be to label them using the [mwe](fixed) relation.

~~~ sdparse
λόγου χάριν 
case(λόγου,  χάριν)
~~~

~~~ sdparse
παραδείγματος χάριν 
case(παραδείγματος,  χάριν)
~~~

~~~ sdparse
τιμής ένεκεν
case(τιμής,  ένεκεν)
~~~
 


Certain adverbs may be followed by prepositions. We label these adverbs with the `case` relation and attach to them the prepositions with a [mwe] relation.

~~~ sdparse
ενάντια σε όλα τα εμπόδια 
case(εμπόδια, ενάντια)
mwe(ενάντια, σε)
~~~

~~~ sdparse
ανεξάρτητα από τη θεματική περιοχή
case(περιοχή, ανεξάρτητα)
mwe(ανεξάρτητα, από)
~~~

~~~ sdparse
μαζί μ' εκείνους
case(εκείνους, μαζί)
mwe(μαζί, μ')
~~~

~~~ sdparse
πίσω από τον Γιάννη
case(Γιάννη, πίσω)
mwe(πίσω, από)
~~~

We use the `case` relation when these adverbs take a clitic in genitive as a complement.

~~~ sdparse
ανάμεσά τους
case(τους, ανάμεσά)
~~~

~~~ sdparse
δίπλα της
case(της, δίπλα)
~~~

When prepositions are used as subordinate conjunctions to introduce clauses, they are labelled with the [mark](mark) relation. See [mark](mark) for more examples.

~~~ sdparse
Δεν συμμετείχα πριν τη συναντήσω .
advcl(συμμετείχα, συναντήσω)
mark(συναντήσω, πριν)
~~~


## TODO 

Add guidelines on tokenization of  _στ-_ preposition+article combinations.
<!-- Interlanguage links updated Čt lis 12 09:43:15 CET 2020 -->
