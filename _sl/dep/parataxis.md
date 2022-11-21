---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
udver: '2'
---

The `parataxis` relation holds between a word (usually the head of the main clause) and other elements which are not linked to it by a relation of coordination, subordination, or any other type of core grammatical relation. This relation is typically used for various types of **run-on sentences** which are presented in more detail below. 
The 7parataxis` relation is used for **run-on sentences** that can be broken up into individual units and are not explicitly separated by any conjunction (apart from punctuation like a comma, semicolon, or colon). The head of the relation is always the first clause in the sequence.
~~~ sdparse
Svetujemo : Bodite pozitivni do sebe in svoje okolice . \n We-advise : Be positive towards yourself and your environment .
parataxis(Svetujemo,pozitivni)
cop(pozitivni,Bodite)
parataxis(We-advise,positive)
cop(positive,Be)
~~~

There are currently also three special types of **coordination** that use the `parataxis` relation:
- Coordinate clauses where the linking word—usually marked with the `advmod` relation—occurs in the **middle of the clause** (and not at the start, as is the case with `conj` and `cc`). 
~~~ sdparse
Nekaj ljudi iz te bolnišnice odide drugam , nekaj pa jih pride iz drugih . \n Some people from this hospital go elsewhere , some CONJ of-them come from others .
parataxis(odide,pride)
parataxis(go,come)
~~~

- **Asyndetic coordination** where several main or subordinate clauses are semantically in coordination, but there is no explicit coordinating conjunction between them. 
~~~ sdparse
Prišel , videl , zmagal . \n I-came , I-saw , I-won .
parataxis(Prišel,videl)
parataxis(Prišel,zmagal)
parataxis(I-came,I-saw)
parataxis(I-came,I-won)
~~~

- Comments that are introduced by pronominal conjunctions such as **kar**, **s čimer**, **pri čemer** which do not refer to any specific item, but to the preceding clause as a whole. 
~~~ sdparse
Konec tedna je blagovnica v Cerknici samevala , kar je izkoristil nepridiprav iz bližnje okolice . \n At-the-end of-the-week was the-store in Cerknica empty , which was exploited-by a-ne're-do-well from the-surrounding area .
parataxis(samevala,izkoristil)
parataxis(empty,exploited-by)
~~~

In the case of **parenthetical clauses**, regardless of the position of the parenthetical clause, the head of the main clause is treated as the head of the relation, while the head of the parenthesis is treated as its dependent. 
~~~ sdparse
Glavni žrtvi bova , kaže , prav midva . \n Main victims will-be , it-seems , precisely us . 
parataxis(žrtvi,kaže)
cop(žrtvi,bova)
parataxis(victims,it-seems)
cop(victims,will-be)
~~~

The `parataxis` relation is also used for linking together the reported clause and the reporting clause in **reported speech**. Regardless of the order in which the reported clause and the reporting clause appear, the head of the relation is always the first clause in the sequence. 
~~~ sdparse
Takole se je glasil : " Ali mora kmet res vedno le ubogati ? " \n This REFLEX aux-PAST it-said : " Does have-to a-farmer really always only obey ? "
parataxis(glasil,mora)
parataxis(it-said,have-to)
~~~
~~~ sdparse
" To je Victor , " je pojasnil Victor Riccio . \n " This is Victor , " aux-PAST explained Victor Riccio .
parataxis(Victor-4,pojasnil)
parataxis(Victor-16,explained)
~~~
~~~ sdparse
" Nimam časa , " sem butasto bleknila , " ker moram na postajo . \n " I-do-not-have time , " aux-PAST stupidly I-said , " because I-have-to-go to station .
parataxis(Nimam,bleknila)
advcl(Nimam,moram)
parataxis(I-do-not-have,I-said)
advcl(I-do-not-have,I-have-to-go)
~~~

In addition to linking together clauses, the `parataxis` relation is also used for **paratactical nominal phrases** that do not fit into any other grammatical category, such as in the introductory parts of press articles: 
~~~ sdparse
Postojna - Z nedeljskim mitingom so se končali Dnevi vojske \n Postojna - With Sunday's meeting aux-PAST REFLEX ended Days of-the-army
parataxis(končali,Postojna-1)
parataxis(ended,Postojna-12)
~~~

Only parenthetical clauses with verbs receive the `parataxis` relation. See the discourse relation for more on parenthetical interjections (e.g., *Že vidimo, kajne, kako nam Kajn postaja bližji*). If an element is set off from the rest of the sentence by some type of punctuation mainly for adding stylistic emphasis—that is to say, it could function just as well within the sentence without the punctuation (for example, *Kolikor vem, ima ta beseda, vsaj pri večini ljudi, negativen prizvok* or *V minulih dveh tednih smo, res ne pretirano javno, pripravljali ukrepe*)—then the element is analyzed as an ordinary internal element, not as `parataxis`. 
