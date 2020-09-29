---
layout: relation
title:  'cop'
shortdef : 'copula'
---

*Warning: DRAFT*

A copula verb is a linking verb that joins a subject with a predicate.
Copular clauses receive a special treatment. The
predicative acts as the head word of the clause, and the copular verb
depends on it using a `cop` (*copula*) dependency. The `cop` relation
is only applied when the verb is used to link a subject to its predicate
(although the subject may be left out).

The full list of copula verbs is as follows:

* _бол-_ "be, become"
* _е-_ "be" (defective)

If the morphological analyser used outputs an е- copula in aorist third person
then this is attached as a leaf node.

~~~ sdparse
Бұл ойын <ø . \n It game is . 
cop(ойын-2, <ø-3)
nsubj(ойын-2, Бұл-1)
punct(ойын-2, .-4)
~~~

If the copula is not third person it has overt person marking: 

~~~ sdparse
Мен студент <пін . \n I student am .
cop(студент-2, <пін-3)
nsubj(студент-2, Мен-1)
punct(студент-2, .-4)
~~~

In the past it surfaces as еді-:

~~~ sdparse
Бірақ кеше өте суық еді ! \n But yesterday very cold was-it !
advmod(суық-4, өте-3)
cop(суық-4, еді-5)
~~~

Use of "бол" without a predicate:

~~~ sdparse
Эрте заманда Эрназар деген киши болуптур . \n Early time-in Ernazar called person was .

~~~

Use of "бол" without subject or predicate:

~~~ sdparse 
Шылым шегуге болмайды . \n Cigarette smoking is-allowed-not .

~~~

*Warning: DRAFT*
<!-- Interlanguage links updated Út zář 29 20:23:26 CEST 2020 -->
