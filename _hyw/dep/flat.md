---
layout: relation
title: 'flat'
shortdef: 'flat'
udver: '2'
---

The `flat` relation is used to combine the elements of an expression where none of the immediate components can be identified as the sole head using standard substitution tests.
This includes both cases where more than one component passes the head test, and cases where no component does.
Note also that the `flat` relation is appropriate in such cases only when no more specific relation applies. For example, in coordination structures annotated with the [conj]() relation, any of the conjuncts can usually replace the whole.

Flat expressions are annotated with a flat structure, where all subsequent components in the expression are attached to the first one using the `flat` label. The assumption is that in these expressions, the `flat` relations
are not syntactic head-modifier relations, and that the structural annotation is in principle arbitrary.
The components of a flat expression may have their own dependents, including nested flat structures.



The `flat` relation is also used for numerals and numerical expressions that lack phrasal structure. The most left numeral is the head, the other numerals are attached as its modifiers. Note, that for numerical (spacial and time) distributions and ranges the [flat:dist]() and [flat:range]() relations are used.

Date expressions which have a very clear syntactic structure, as in _the 21th of September of 1991 year_, should be annotated with regular dependency relations. In other cases, they have a flat structure with no clearly discernible head, as in _18 December 2015_, in which case the `flat` relation should be used. 

~~~ conllu
# visual-style 3 4 flat color:blue
# visual-style 3 6 flat color:blue
1	Չորեքշաբթի	Չորեքշաբթի	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=Čorek’šabt’i|LTranslit=Čorek’šabt’i|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	Translit=,|LTranslit=,
3	Յուլիս	Յուլիս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	1	appos	_	Translit=Yowlis|LTranslit=Yowlis
4	7	7	NUM	_	NumForm=Digit|NumType=Card	3	flat	_	Translit=7|LTranslit=7|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	Translit=,|LTranslit=,
6	2021	2021	NUM	_	NumForm=Digit|NumType=Card	3	flat	_	Translit=2021|LTranslit=2021
~~~
