---
layout: relation
title: 'flat:redup'
shortdef: 'reduplication'
udver: '2'
---

This relation is used generally for reduplicating constructions, which in Latin can be used towards a variety of effects. They are not unknown to the language, though they appear quite infrequently (the three examples presented below are in fact the only occurrences among the IT-TB, LLCT and UDante treebanks in the current state of the annotation - see **Note**). 

We consider the case of a reduplication only when the same word is repeated one or more times in sequence, all of the repetitions having the same function and head in the clause, with no other words belonging to other phrases intervening (this condition allows for linearly non-adjacent reduplication, with reduplicated elements possibly governing their own dependents). These condition exclude 

1. casual sequential repetitions in sequence belonging to different phrases: each element gets its own relation 
    + e.g. *quod quid **est est** obiectum intellectus* 'for the object of the intellect **is** what a thing **is**' (`train-s16691`, IT-TB), both depending as `cop` respectively on *quid* and *obiectum*
1. transcription errors of any kind, which are managed through [`reparandum`](la-dep/reparandum)
    + e.g. *+ Ego Leo **notarius** **notarius** post traditam conplevi et dedi.* '+ I, **notary** **notary** Leo, have filled out and delivered after the hand-over' (`train-s6767`, LLCT)
1. other kinds of reprises, often treated by means of [`conj`](la-dep/conj) or similar
    + e.g. *per quasdam **relationes**, quia per Papatum et per Imperiatum, que **relationes** sunt...* 'by virtue of certain **relationships**, i.e. by virtue of Papal and Imperial office, which are respectively **relationships** of...' (`Mon-615` [*De Monarchia* III xi 6], UDante) 

The relation between the reduplicated elements is a subtype of [flat](u-dep/flat) since there is no hierarchy in such a block, and so formally the linearly first element is promoted as "head" for all the others. 

The function of the reduplication, in terms of morphological features, is expressed (as a temporary solution) in the `MISC` field by the attribute [Reduplication](https://universaldependencies.org/misc.html#reduplication), on the token receiving the relation `flat:redup`.

#### Note

It remains to be seen if cases of reduplication which are as of now traditionally treated as part of the lexicon or even inflectional paradigms will be reanalysed syntactically by means of the present dependency relation. Some examples:

* *sese*, [emphatic](la-feat/Form#Emp) form of the [reflexive](la-feat/Reflexive) [pronoun](la-pos/PRON) *se* and lemmatised as such e.g. in the IT-TB
    * completely parallel to *me me*, as shown in the second example  
* *tute*, [emphatic](la-feat/Form#Emp) form of [2nd person](la-feat/Person) singular [pronoun](la-pos/PRON), with dissimilation
* *quamquam* 'although' (also, for regular phonotactics, *quanquam*), reduplication of the relative element *quam* 'how much' (also acting as comparative [`SCONJ`](la-pos/SCONJ)) with [indefinite](la-feat/ProType#Ind) meaning ('in whichever manner = however')



~~~ sdparse
Quot quot autem exercitii varietates tendebant ad opus , tot tot ydiomatibus tunc genus humanum disiungitur ; et quanto excellentius exercebant , tanto rudius nunc barbarius que locuntur .
det(varietates, Quot)
flat:redup(Quot, quot)
det(ydiomatibus, tot-1)
flat:redup(tot-2, tot-2)
~~~

'**As many** as were the types of work involved in the enterprise, **so many** were the languages by which the human race was fragmented; and the more skill required for the type of work, the more rudimentary and barbaric the language they now spoke.' (`DVE-71` [*De vulgari eloquentia* I vii 7], UDante)

* the reduplication having [distributive](la-feat/NumType#Dist) value here, applied to the indefinite quantity expressed by the correlated [relative](la-feat/PronType#Rel) *quot* and [demonstrative](la-feat/PronType#Dem) *tot*. We note that a distributive form *quoteni* is attested (so one could also expect *quotenae varietates...*), while *toteni* is not, and this might have led to Dante's choice for reduplication.

~~~ sdparse
[...] cum Propheta sanctissimo me me subsequenter hortabor subsequentia subassummens [...]
obj(hortabor, me-1)
flat:redup(me-1, me-2)
~~~

'... [I] shall take heart along with the most holy prophet, by making **my own** the words of his which follow...' (`Mon-196` [*De Monarchia* II i 5], UDante)

* more literally '... together with the most holy prophet I will then encourage **myself**, adopting the following [words]...'
* the reduplication having [emphatic](la-feat/Form#Emp) force here


