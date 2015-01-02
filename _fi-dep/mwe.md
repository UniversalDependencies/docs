---
layout: relation
title:  'mwe'
shortdef : 'multi-word expression'
---

The multi-word expression (modifier) relation is used for certain
fixed expressions that behave as a unit.

Multiword expressions are annotated in a flat, head-initial structure,
in which all words in the expression modify the first one using the
mwe label.

<!-- fname:dep.pdf -->
~~~ sdparse
Itse asiassa hän tuli jo eilen . \n As_a matter_of_fact he came already yesterday .
mwe(Itse-1, asiassa-2)
advmod(tuli-4, Itse-1)
nsubj(tuli-4, hän-3)
advmod(tuli-4, eilen-6)
advmod(eilen-6, jo-5)
punct(tuli-4, .-7)
~~~

<!--details-->

The following expressions are considered idiomatic, and their parts
are to be combined with the dependency type `mwe` in UD Finnish.  Note
that this is not intended to be a closed list, but rather a list of
examples that were encountered while annotating the TDT corpus.  The
two-part expressions that fall into the categories of coordinating and
subordinating conjunctions are omitted here, and instead listed under
[cc]() and [mark](), respectively. Due to the idiomatic nature of
these two-part expressions, the translations may on occasion not be
very natural.

### Adverbs:

* _aika lailla_ "quite some"
* _aina vain_ "forever and ever"
* _aivan kuin_ "just like"
* _alun alkaen_ "from the beginning, originally"
* _alun perin_ "originally"
* _ennen aikojaan_ "prematurely"
* _ennen kaikkea_ "first and foremost"
* _ennen muuta_ "first and foremost"
* _ennen pitkää_ "before long"
* _entä jos_ "what if"
* _heti perään_ "right after"
* _hyvissä ajoin_ "on time, in good time"
* _ihan vaan_ "only"
* _ikään kuin_ "kind of"
* _ilman muuta_ "of course"
* _itse asiassa_ "as a matter of fact, in fact"
* _ja niin edelleen_ "and so on"
* _jonkin verran_ "some, to some extent"
* _jossain määrin, siinä määrin, missä määrin_ "some, to some extent, to that extent"
* _kaiken aikaa_ "all the time"
* _kaiken kaikkiaan_ "all in all"
* _kaikin puolin_ "in all ways"
* _kerta kaikkiaan_ "completely, once and for all"
* _loppujen lopuksi_ "in the end"
* _muun muassa_ "among others"
* _miten niin_ "how so"
* _missä sattuu, mistä sattuu, minne sattuu_ "wherever"
* _mitä jos_ "what if"
* _niin ikään_ "also"
* _niin kuin_ "like"
* _niin sanotusti_ "so to say"
* _noin vain_ "just like that"
* _no kun_ "well"
* _no niin_ "alright"
* _näillä näkymin_ "with the current knowledge"
* _näin ollen_ "this being so"
* _pikku hiljaa_ "little by little"
* _pilvin pimein_ "plenty of"
* _piri pintaan_ "full"
* _päällisin puolin_ "from the surface of it"
* _saman tien_ "at once"
* _saman verran_ "the same amount"
* _sen koom(m)in_ "since then"
* _sen suuremmin_ "any more than that"
* _sen kun vaan_ "go ahead"
* _sen verran_ "that amount"
* _siellä täällä_ "here and there"
* _siinä sivussa_ "on the side"
* _silloin tällöin_ "every now and then"
* _sillä aikaa_ "meanwhile"
* _sitä mukaa_ "accordingly"
* _sitä paitsi_ "besides"
* _sivumennen sanoen_ "by the way"
* _summa summarum_ "all in all"
* _suuna päänä_ "headfirst"
* _suurin piirtein_ "just about"
* _ties vaikka_ "who knows"
* _toisin sanoen_ "in other words"
* _tuon tuosta_ "all the time"
* _tuosta vain_ "just like that"
* _tämän tästä_ "all the time"
* _vähän kuin_ "a bit like"
* _yhtä aikaa_ "at the same time"
* _yhtä kaikki_ "all the same"
* _yhtä paljon_ "the same amount, as much"
* _yleisesti ottaen_ "generally speaking"

### Adjectives:

* _niin kutsuttu_ "so called"
* _niin sanottu_ "so called"

### Adpositions:

* _lukuun ottamatta_ "disregarding"

### Determiners:

* _itse kukin_ "each"
* _joka ainoa_ "each and every one"

### Interjections:

* _ai ai_ "oh oh, tut tut"
* _ai niin_ "oh yeah"
* _ei jumalauta_ "goddammit"
* _ei vitsit_ "oh dear"
* _hei hei_ "hey hey, bye bye"
* _hip hip hurraa_ "hip hip hooray"
* _hitto vie_ "dammit"
* _jep jep_ "yep yep"
* _kas kummaa_ "surprise surprise"
* _mitä vittua_ "what the fuck"
* _no joo_ "well yeah"
* _piru vie_ "dammit"
* _totta kai_ "of course"
* _voi että_ "oh dear"
* _voi po(i)jat_ "oh boy"

### Nominals:

* _missä ikinä_ "wherever"

### Other: (the POS may vary)

* _mikä tahansa_ "whichever, whatever"
* _mikä vain_ "whichever, whatever"
