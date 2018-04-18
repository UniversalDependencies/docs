---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

The `case` relation is used for any case-marking element which is treated as a separate syntactic word (including prepositions, postpositions, and clitic case markers). Case-marking elements are treated as dependents of the noun they attach to or introduce. (Thus, contrary to SD, UD abandons treating a preposition as a mediator between a modified word and its object.) The `case` relation aims at providing a more uniform analysis of nominal elements, prepositions and case in morphologically rich languages: a nominal in an oblique case will receive the same dependency structure as a nominal introduced by an adposition.

~~~ sdparse
the Chair 's office
det(Chair-2, the-1)
nmod(office-4, Chair-2)
case(Chair-2, 's-3)
~~~

~~~ sdparse
the office of the Chair
det(office-2, the-1)
nmod(office-2, Chair-5)
case(Chair-5, of-3)
det(Chair-5, the-4)
~~~

French:

~~~ sdparse
le bureau du président \n the office of the_Chair
det(bureau, le)
nmod(bureau, président)
case(président, du)
~~~

Hebrew:

~~~ sdparse
hwa/PRON rah/VERB at/PART[Case=Acc] h/DET klb/NOUN \n he saw ACC the dog  
obj(rah-2, klb-5)
case(klb-5, at-3)
~~~


When case markers are morphemes, they are not divided off the noun as a separate case dependent,
but the noun as a whole is analyzed as [obl]() (if dependent on a predicate) or [nmod]() (if dependent on noun).
To overtly mark case,
<a href="../pos/index.html">POS tags</a> and
<a href="../feat/index.html">features</a>
are included in the representation as shown below on a Russian example
(put your mouse pointer over the words to see additional morphosyntactic features).

~~~ conllu
# I wrote the letter with a quill.
1   Я         ja         PRON   _   Case=Nom|Number=Sing|Person=1|PronType=Prs        2   nsubj   _   I
2   написал   napisat'   VERB   _   Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act   0   root    _   wrote
3   письмо    pis'mo     NOUN   _   Case=Acc|Gender=Neut|Number=Sing                  2   obj    _   the-letter
4   пером     pero       NOUN   _   Case=Ins|Gender=Neut|Number=Sing                  2   obl    _   with-a-quill
~~~

This treatment provides parallelism between different constructions
across and within languages. A good result is that we now have greater
parallelism between prepositional phrases and subordinate clauses,
which are often introduced by a preposition in some languages (but note that 
the relation should be [mark]() in those cases):

~~~ sdparse
Sue left after the rehearsal
nsubj(left-2, Sue-1)
obl(left-2, rehearsal-5)
det(rehearsal-5, the-4)
case(rehearsal-5, after-3)
~~~

~~~ sdparse
Sue left after we did
nsubj(left-2, Sue-1)
advcl(left-2, did-5)
mark(did-5, after-3)
nsubj(did-5, we-4)
~~~

We also obtain parallel constructions for


- the possessive alternation

~~~ sdparse
the Chair 's office
det(Chair-2, the-1)
nmod(office-4, Chair-2)
case(Chair-2, 's-3)
~~~

~~~ sdparse
the office of the Chair
det(office-2, the-1)
nmod(office-2, Chair-5)
case(Chair-5, of-3)
det(Chair-5, the-4)
~~~


- variant forms with case, a preposition or a
postposition in Finnish

~~~ sdparse
etsiä ilman johtolankaa \n to_search without clue.PARTITIVE
obl(etsiä, johtolankaa)
case(johtolankaa, ilman)
~~~

~~~ sdparse
etsiä taskulampun kanssa \n to_search torch.GENITIVE with
obl(etsiä, taskulampun)
case(taskulampun, kanssa)
~~~

~~~ sdparse
etsiä johtolangatta \n to_search clue.ABESSIVE
obl(etsiä, johtolangatta)
~~~


- the dative alternation where the prepositional construction gets a similar
analysis to the double object construction

~~~ sdparse
give the children the toys
obj(give, toys)
iobj(give, children)
~~~

~~~ sdparse
give the toys to the children
obj(give, toys)
obl(give, children)
case(children, to)
~~~

~~~ conllu
# give the toys to the children
1     donner    donner   VERB   _   VerbForm=Inf               0   root   _   give
2     les       le       DET    _   Definite=Def|Number=Plur   3   det    _   the
3     jouets    jouet    NOUN   _   Gender=Masc|Number=Plur    1   obj   _   toys
4-5   aux       _        _      _   _                          _   _      _   _
4     à         à        ADP    _   _                          6   case   _   to
5     les       le       DET    _   Definite=Def|Number=Plur   6   det    _   the
6     enfants   enfant   NOUN   _   Gender=Masc|Number=Plur    1   obl   _   children
~~~

Another advantage of this new analysis is that it provides a treatment
of prepositional phrases that are predicative complements of "be" that is consistent with the treatment of nominal predicative
complements:

~~~ sdparse
Sue is in shape
nsubj(shape-4, Sue-1)
cop(shape-4, is-2)
case(shape-4, in-3)
~~~

When prepositions are stacked (that is, there is a sequence of prepositions), there are two possible analyses. If the sequence is a frozen combination with a specific meaning, then the best analysis is as `fixed`. An English example of this is *out of*:

~~~ sdparse
Out of all this , something good will come .
case(this-4, Out-1)
fixed(Out-1, of-2)
det(this-4, all-3)
obl(come, this-4)
~~~

However, if various combinations of prepositions can be used to express different meaning combinations or nuances, then  each preposition is independently analyzed as a case dependent. Examples of this in English include *up beside* (which can alternate with *down beside* or *up near*) or *except during* which can alternate with *as during* or *except after*:

~~~ sdparse
The cafe up beside the lookout
det(cafe-2, The-1)
case(lookout-6, up-3)
case(lookout-6, beside-4)
det(lookout-6, the-5)
nmod(cafe-2, lookout-6)
~~~
