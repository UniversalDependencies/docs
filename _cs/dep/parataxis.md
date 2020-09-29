---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
udver: '2'
---

The parataxis relation (from Greek for “place side by side”) is a
relation between a word (often the main predicate of a sentence) and other
elements, such as a sentential parenthetical or a clause after a “:” or
a “;”, placed side by side without any explicit
coordination, subordination, or argument relation with the head word. Parataxis is a discourse-like equivalent of coordination, and so usually obeys an iconic ordering. Hence it is normal for the first part of a sentence to be the head and the second part to be the parataxis dependent, regardless of the headedness properties of the language.  But things do get more complicated, such as cases of parentheticals, which appear medially.

## An inventory of constructions to which parataxis has been applied

### Treatment of reported speech

For this reported speech example:

~~~ sdparse
Ten člověk , řekl Honza , odjel brzy ráno . \n The guy , said Honza , left early in-the-morning .
parataxis(odjel, řekl)
parataxis(left, said)
~~~

there are paraphrases that convey essentially the same meaning but
with a different syntactic structure. When the reported speech is embedded in a subordinate clause (with or 
without an overt complementizer _že_ “that”), the subordinate clause is a [ccomp]() of the speech verb. When the
reported speech follows the speech verb and is separated by a colon, the reported speech forms a main clause
that attaches to the preceding main clause with a [parataxis]() relation, hence with the speech verb as its head.
However, when the speech verb occurs as a medial or final parenthetical, the relation is reversed and the speech
verb is treated as a [parataxis]() of the reported speech. 
This analysis is not uncontroversial but follows many authorities, such as Huddleston and Pullum (2002),
_The Cambridge Grammar of the English Language_ (see chapter 11, section 9). 

~~~ sdparse
Honza řekl , že ten člověk odjel brzy ráno . \n Honza said , that the guy left early in-the-morning .
ccomp(řekl, odjel)
ccomp(said, left)
~~~

~~~ sdparse
Honza řekl : „ Ten člověk odjel brzy ráno . “ \n Honza said : “ The guy left early in-the-morning . ”
parataxis(řekl, odjel)
parataxis(said, left)
~~~

~~~ sdparse
„ Ten člověk odjel brzy ráno , “ řekl Honza . \n “ The guy left early in-the-morning , ” said Honza .
parataxis(odjel, řekl)
parataxis(left, said)
~~~

~~~ sdparse
„ Ten člověk , “ řekl Honza , „ odjel brzy ráno . “ \n “ The guy , ” said Honza , “ left early in-the-morning . ”
parataxis(odjel, řekl)
parataxis(left, said)
~~~

An argument for this analysis is that in the cases analyzed as embedding, the entire clause
can be further embedded (_I was taken aback when John said the guy left early in the morning._),
while this is not possible with medial or final placement of the speech verb 
(_*I was taken aback when the guy left early this morning, John said._).

### News article bylines

The `parataxis` relation should be used to connect the parts of a news article byline.
There does not seem to be a better relation to use.

~~~ sdparse
Washington ( CNN ) :
parataxis(Washington, CNN)
~~~

### Interjected clauses and phrases

~~~ sdparse
V posledních letech se srovnávání rozšiřuje , přinejmenším pokud jde o platy , na sousední státy . \n In recent years is comparison extended , at-least as concerns about salaries , to neighboring countries .
parataxis(rozšiřuje, jde)
parataxis(extended, concerns)
~~~

## Diffs

### Prague Dependency Treebank

At present the PDT data converted to UD use `parataxis` only for interjected parentheticals.
The other examples above are analyzed differently (legacy PDT structure).
<!-- Interlanguage links updated Út zář 29 20:43:26 CEST 2020 -->
