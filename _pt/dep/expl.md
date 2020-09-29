---
layout: relation
title: 'expl'
shortdef: 'expletive'
---

There is no `expl` in Portuguese.
This relation captures expletive or pleonastic nominals. These are nominals that appear in an argument position of a predicate but which do not themselves satisfy any of the semantic roles of the predicate. The main predicate of the clause (the verb or predicate adjective or noun) is the governor. In English, this is the case for some uses of *it* and *there*: the existential *there*, and *it* when used in extraposition constructions.  (Note that both *it* and *there* also have non-expletive uses.) 



~~~ sdparse
There is a ghost in the room
expl(is, There)
~~~


~~~ sdparse
It is clear that we should decline .
expl(clear, It)
~~~

Some languages, as Portuguese, do not have expletives of the English sort, including most languages with free pro-drop (the ability to use zero anaphora rather than overt pronouns). In languages with expletives of this sort, they can be positioned where normally a core argument appears: the subject and direct object (and even indirect object) slots, as in the examples below. 



~~~ sdparse
ROOT há um processo de conglomerização de empresas
root(ROOT, há)
dobj(há, processo)
~~~

~~~ sdparse
Caso não haja fila , o período de uso pode ser maior .
mark(haja, caso)
dobj(haja, fila)
neg(haja, não)
advcl(maior, haja)
nsubj(maior, período)
~~~

<!-- Interlanguage links updated Út zář 29 20:43:18 CEST 2020 -->
