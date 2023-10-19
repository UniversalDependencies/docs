---
layout: relation
title: 'flat:redup'
shortdef: 'reduplication'
udver: '2'
---

This relation is used generally for the reduplicating constructions, which in Latin can be used towards a variety of effects. It is not unknown to the language, though it appears quite infrequently (the two examples presented below are in fact the only occurrences among the IT-TB, LLCT and UDante treebanks). 

We consider a reduplication only in the case of the same word repeated one or more times in sequence, with no other words intervening, all of them having the same function and head in the clause. This excludes a) casual repetitions in sequence belonging to different phrases (e.g. *quod quid **est est** obiectum intellectus* 'for the object of the intellect **is** what a thing **is**', `train-s16691`, IT-TB) b) errors of transcription (*hoc autem quod est **per per** se necesse-esse*, `dev-s1055`, IT-TB) c) other kinds of reprises (*per quasdam **relationes**, quia per Papatum et per Imperiatum, que **relationes** sunt...* 'by virtue of certain **relationships**, i.e. by virtue of Papal and Imperial office, which are respectively **relationships** of...', `Mon-615` [*De Monarchia* III xi 6], UDante). The relation between them is a subtype of [flat](u-dep/flat) since there is no hierarchy in such a block, and so formally the linearly first element is the "head" for all the others. 

The function of the reduplication, in terms of morphological features, is expressed in the `MISC` field by the attribute [Reduplication](https://universaldependencies.org/misc.html#reduplication) as a temporary solution, on the token receiving the relation `flat:redup`.

It remains to be seen if cases of reduplication which are as of now traditionally treated as part of the lexicon or even inflectional paradigms will be reanalysed syntactically by means of the present dependency relation. Some examples:

* *sese*, [emphatic](la-feat/Form#Emp) form of the [reflexive](la-feat/Reflexive) [pronoun](la-pos/PRON) *se* and lemmatised as such e.g. in the IT-TB
    * completely parallel to *me me*, as shown in the second example  
* *tute*, [emphatic](la-feat/Form#Emp) form of [2nd person](la-feat/Person) singular [pronoun](la-pos/PRON), with dissimilation
* *quamquam* 'although' (also, for regular phonotactics, *quanquam*), reduplication ofthe relative element *quam* 'how much' (also acting as comparative [`SCONJ`](la-pos/SCONJ)) with apparent [indefinite](la-feat/ProType#Ind) meaning ('in whichever manner = however')



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


