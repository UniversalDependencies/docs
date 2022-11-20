---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

Nominal modifiers `(nmod)` are nominal phrases that modify a different nominal phrase. 
In Slovene this relation is typically used for **nominal postmodifiers** of different kinds **that do not agree with the head word (in case, number…)**, such as postmodifiers in the genitive, nominative, or other cases, as well as prepositional postmodifying phrases. 

~~~ sdparse
prava poplava patentov za zdravila \n a-real flood of-patents for medicinal-products
nmod(poplava,patentov)
nmod(patentov,zdravila)
case(zdravila,za)
nmod(flood,of-patents)
nmod(of-patents,medicinal-products)
case(medicinal-products,for)
~~~
~~~ sdparse
nevšečnosti na televiziji BBC \n unpleasantness on television BBC
nmod(nevšečnosti,televiziji)
nmod(televiziji,BBC)
case(televiziji,na)
nmod(unpleasantness,television)
nmod(television,BBC)
case(television,on)
~~~
~~~ sdparse
prilagajanje evropskim merilom \ n adapting-to European standards
nmod(prilagajanje,merilom)
nmod(adapting-to,standards)
~~~

With **nominal postmodifiers that agree with the head word (in case, number… )**, the head of the `nmod` relation is the first noun of the sequence.
~~~ sdparse
v državah članicah EU \n In countries members of-EU
nmod(državah,članicah)
nmod(članicah,EU)
nmod(countries,members)
nmod(members,of-EU)
~~~
~~~ sdparse
Mariborčan Iztok Božič \n Maribor-resident Iztok Božič
nmod(Mariborčan,Iztok-2)
nmod(Maribor-resident,Iztok-6)
~~~
~~~ sdparse
Harrisonov prijatelj Michael Palin \n Harrison's friend Michael Palin
nmod(prijatelj,Michael-3)
nmod(friend,Michael-8)
~~~

The `nmod` relation is also used for **nominal modifiers of adjectives** within phrases.
~~~ sdparse
ta na pogled prostodušna opazka \n this at a-glance sincere remark
amod(opazka,prostodušna)
nmod(prostodušna,pogled)
case(pogled,na)
amod(remark,sincere)
nmod(sincere,a-glance)
case(a-glance,at)
~~~
~~~ sdparse
773 metrov visok vrh \n 773 meter high peak
amod(vrh,visok)
nmod(visok,metrov)
amod(peak,high)
nmod(high,meter)
~~~

Note that `nmod` is used only for nominal modifiers of adjectives which act as modifiers within a larger phrase. If a noun modifies an adjective acting as the subject complement (i.e., an adjective that stands next to the verb *biti*, as in *otroci so razporejeni v vrsto*), the nominal phrase is treated as an argument of the subject complement, to which it is linked by the `obl` relation. 

In accordance with the general practice of the adopted SSJ system, the SSJ-UD treebank also uses the `nmod` relation for **nominal modifiers in adverbial phrases** as in the examples below: 
~~~ sdparse
na plenarnem zasedanju leto kasneje \n on the-plenary session a-year later
nmod(kasneje,leto)
nmod(later,a-year)
~~~
~~~ sdparse
Genska tehnologija pa je šla v tem smislu še korak dlje . \n Genetic technology though has gone in this sense another step further .
nmod(dlje,korak)
nmod(further,step)
~~~
