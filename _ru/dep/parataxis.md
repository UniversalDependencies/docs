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
Тот парень , сказал Вася , ушёл рано утром  . \n The guy , said Vasya , left early in-the-morning .
parataxis(ушёл, сказал)
parataxis(left, said)
~~~

There are paraphrases that convey essentially the same meaning but with a different syntactic structure. When the reported speech is embedded in a subordinate clause (with or without an overt complementizer _что_ “that”), the subordinate clause is a [ccomp]() of the speech verb. When the reported speech follows the speech verb and is separated by a colon, the reported speech forms a main clause that attaches to the preceding main clause with a [parataxis]() relation, hence with the speech verb as its head.
However, when the speech verb occurs as a medial or final parenthetical, the relation is reversed and the speech verb is treated as a [parataxis]() of the reported speech. 
This analysis is not uncontroversial but follows many authorities, such as Huddleston and Pullum (2002),
_The Cambridge Grammar of the English Language_ (see chapter 11, section 9). 

~~~ sdparse
Вася сказал , что тот парень ушёл рано утром . \n Vasya said , that the guy left early in-the-morning .
ccomp(сказал, ушёл)
ccomp(said, left)
~~~

~~~ sdparse
Вася сказал : " Тот парень ушёл рано утром . " \n Vasya said : " The guy left early in-the-morning . "
parataxis(сказал, ушёл)
parataxis(said, left)
~~~

~~~ sdparse
" Тот парень ушёл рано утром , " сказал Вася . \n " The guy left early in-the-morning , " said Vasya .
parataxis(ушёл, сказал)
parataxis(left, said)
~~~

~~~ sdparse
" Тот парень , " — сказал Вася , — " ушёл рано утром . " \n " The guy , " — said Vasya , — " left early in-the-morning . "
parataxis(ушёл, сказал)
parataxis(left, said)
~~~

An argument for this analysis is that in the cases analyzed as embedding, the entire clause can be further embedded 
(_I was taken aback when John said the guy left early in the morning._),
while this is not possible with medial or final placement of the speech verb 
(_*I was taken aback when the guy left early this morning, John said._).

### Parataxis in brackets

The `parataxis` relation is used to connect parts of the sentence written as explanation in brackets. It is also used to connect the parts of a news article byline. 

~~~ sdparse
Вашингтон ( CNN ) :
parataxis(Вашингтон, CNN)
~~~
<!-- Interlanguage links updated St lis 3 20:59:07 CET 2021 -->
