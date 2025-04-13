---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

Oblique nominals (`obl`) are nouns and other nominal phrases that function as non-core (oblique) arguments of the verb.  
In Slovene, this relation is typically used for **prepositional phrases** functioning as arguments of the predicate, regardless of their meaning or omissibility (this includes objects as well as adjuncts).
~~~ sdparse
medtem pa se bodo pogovorili z razredom \n in-the-meantime CONJ REFLEX they will talk to the-class
obl(pogovorili,razredom)
case(razredom,z)
obl(talk,the-class)
case(the-class,to)
~~~
~~~ sdparse
Billovo vozilo je stalo na parkirišču pred bolnišnico . \n Bill's vehicle aux-PAST stood in parking-lot in-front-of hospital .
obl(stalo,parkirišču)
case(parkirišču,na)
obl(stood,parking-lot)
case(parking-lot,in)
~~~
~~~ sdparse
slikarstvo je sicer res vezano na besedilno predlogo \n painting is actually really linked to textual source
obl(vezano,predlogo)
case(predlogo,na)
obl(linked,source)
case(source,to)
~~~

Oblique nominals **without prepositions** mostly include adjuncts of time (answers to *kdaj, koliko časa?*) and adjuncts of manner or degree (answers to *kako, na kakšen način, koliko?*).
~~~ sdparse
Evropska komisija vsako jesen objavlja letno poročilo \n European Comission every autumn publishes yearly report
obl(objavlja,jesen)
obl(publishes,autumn)
~~~
~~~ sdparse
učinki pa so znani že več stoletij \n effects CONJ have-been known already for-several centuries
obl(znani,stoletij)
obl(known,centuries)
~~~
~~~ sdparse
Odprava napake naj bi stala 64 milijonov mark \n Correcting the-error apparently would cost 64 million marks
obl(stala,milijonov)
obl(cost,million)
~~~

The `obl` relation is currently also used for the adjective *sam* in all its syntactic roles except when it functions as the subject (e.g. *sam ni prevzel enakih navad*), a premodifier in a phrase (e.g. *en sam napad*) or a subject complement (e.g. *na barki sva sama*).

~~~ sdparse
Najraje bi sam poklical Kyla Craiga \n Most-rather I-would myself call Kyle Craig
obl(poklical,sam)
obl(call,myself)
~~~
~~~ sdparse
Nekatere slike so visele same zase \n Some paintings aux-PAST hung by-themselves
obl(visele,same)
obl(hung,by-themselves)
~~~

Similarly, this relation is applied to the adjectives *drug*, *ves*, *prvi* and *zadnji* when they do not perform the role of grammatical subject. The subject in such sentences is usually explicitly expressed. 
~~~ sdparse
Kandidata pa zato obtožujeta drug drugega . \n The-candidates CONJ therefore blame each other .
obl(obtožujeta,drug)
obj(obtožujeta,drugega)
obl(blame,each)
obj(blame,other)
~~~
~~~ sdparse
Odmerki deksametazona so , kot se zdi , vsi enako učinkoviti . \n Doses of-dexamethasone are , as it seems , all equally effective .
obl(učinkoviti,vsi)
cop(učinkoviti,so)
obl(effective,all)
cop(effective,are)
~~~
~~~ sdparse
Zdravnik John Langdon Down je leta 1866 ta sindrom prvi opisal . \n Doctor John Langdon Down aux-PAST in-the-year 1866 this syndrome for-the-first-time described .
obl(opisal,prvi)
obl(described,for-the-first-time)
~~~

The `obl` relation is currently also used for comparative constructions that are realized by nominal phrases. This includes independent arguments of the predicate in the form of adjuncts of manner, that take the predicate as their head (the first two examples below), as well as actual comparatives, that take the property being compared as their head (the last two examples below).
~~~ sdparse
kot prva drsalka je nastopila v filmih \n as first ice-skater she appeared in films
obl(nastopila,drsalka)
case(drsalka,kot)
obl(appeared,ice-skater)
case(ice-skater,as)
~~~
~~~ sdparse
konflikt razume kot spopad \n the-conflict he-understands as a-fight
obl(razume,spopad)
case(spopad,kot)
obl(he-understands,a-fight)
case(a-fight,as)
~~~
~~~ sdparse
Dimenzije okvirjev so večje od vzorčenga dela šablone . \n The-dimensions of-the-frames are larger than the-sample part of-the-template 
obl(večje,dela)
case(dela,od)
obl(larger,part)
case(part,than)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:15 CET -->
