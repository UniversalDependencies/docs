---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal dependents of another noun or noun phrase and functionally corresponds to an attribute, or genitive (possessive) complement. In Mandarin, it is expressed with the 的 _de_ particle, as in (1), between the preceding complement and the following head noun. The particle depends on the complement as a [case]() dependent.

~~~ conllu
# visual-style 3 1 nmod	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	你	_	PRON	_	_	3	nmod	_	2SG
2	的	_	PART	_	_	1	case	_	GEN
3	電話	_	NOUN	_	_	0	root	_	phone

1	"your	_	_	_	_	0	_	_	_
2	phone"	_	_	_	_	0	_	_	_

~~~

Sometimes the particle may be omitted, specifically when the possessor is a pronoun, and often (but not exclusively) when the possessed object is a kinship term, as in (2). 

~~~ conllu
# visual-style 2 1 nmod	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
1	你	_	PRON	_	_	2	nmod	_	2SG
2	公公	_	NOUN	_	_	0	root	_	grandfather

1	"your	_	_	_	_	0	_	_	_
2	grandfather"	_	_	_	_	0	_	_	_

~~~

Attributive or associative relations between two nouns, or a pronoun and a noun, may also be expressed with the particle 的 _de_. 

~~~ conllu
# visual-style 3 1 nmod	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	目前	_	NOUN	_	_	3	nmod	_	now
2	的	_	PART	_	_	1	case	_	GEN
3	情況	_	NOUN	_	_	0	root	_	situation

1	"current	_	_	_	_	0	_	_	_
2	situation"	_	_	_	_	0	_	_	_

~~~

~~~ conllu
# visual-style 3 1 nmod	color:blue
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
1	這樣	_	PRON	_	_	3	nmod	_	such
2	的	_	PART	_	_	1	case	_	GEN
3	體能	_	NOUN	_	_	0	root	_	stamina

1	"such	_	_	_	_	0	_	_	_
2	stamina"	_	_	_	_	0	_	_	_

~~~

But if a noun modifies another noun without the particle 的 _de_, and the relationship is not a possessive one, it is treated as a noun-noun compound (see [compound]()).


<!-- Interlanguage links updated Út zář 29 18:41:27 CEST 2020 -->
