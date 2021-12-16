---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

A coordinating conjunction relation (<code>cc</code>) holds between the head conjunct of a coordinate structure (which is taken to be the first conjunct) and any of the coordinating conjunctions involved in the structure. This also includes the first element in paired conjunctions like "*sia … sia*" (both…and). 

<code>cc</code> also marks the relation between a sentence initial coordinating conjunction and the sentence root. 

~~~ sdparse
Due bambini e quattro tecnici
cc(bambini, e)
~~~
~~~ sdparse
a il mare e su le strade
cc(mare, e)
~~~
~~~ sdparse
Gli occhi luccicano e la bocca si tende .
cc(luccicano, e)
~~~
~~~ sdparse
né auspicabile né fattibile
cc(auspicabile, né-1)
cc(auspicabile, né-3)
~~~
~~~ sdparse
Ma già si parla di epurazioni
cc(parla, Ma)
~~~
~~~ sdparse
Ma non è il caso di pensare
cc(caso, Ma)
~~~

Elements that can assume the role of <code>cc</code> are POS tagged as <code>CONJ</code> and <code>SCONJ</code>, but there are also some <code>ADV</code> elements that have the role of conjunctions because they are used in a multiword expressions (for more on that see [fixed]()).

~~~ sdparse
Il nome di Sartori , così come il quello di Alma , compare .
cc(nome, così)
mwe(così, come)
~~~

**NB** Note that punctuation is never treated as coordinating conjunction. 

For more on coordination, see the [conj]() relation.
<!-- Interlanguage links updated St lis 3 20:58:43 CET 2021 -->
