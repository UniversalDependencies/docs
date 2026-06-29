---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
udver: '2'
---

A numeric modifier of a noun is any [number](NUM) phrase that serves to modify the meaning of the noun with a quantity.

~~~ conllu
# visual-style 2 1 nummod color:blue
1	երեք	երեք	NUM	_	NumForm=Word|NumType=Card	2	nummod	_	_
2	հետ	հետ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	_
~~~

~~~ conllu
# visual-style 3 1 nummod color:blue
1	ԳՃ	Գճ	NUM	_	NumForm=Armenian|NumType=Card	3	nummod	_	SpaceAfter=No
2	.	.	PUNCT	_	_	1	punct	_	_
3	դեկան	դեկան	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	nmod	_	_
4	պերպեռատ	պերպեռատ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	_
~~~

Note that indefinite quantifiers such as _մի_/_mi_ “a (one)”, _մի այլ_/_mi ayl_ “another” are tagged [DET]() rather than [NUM](). Therefore their relation to the quantified noun is not `nummod` but [det]():

~~~ conllu
# visual-style 2 1 det color:blue
# visual-style 3 1 det color:blue
1	ազգ	ազգ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	_
2	մի	մի	DET	_	PronType=Art	1	det	_	_
3	այլ	այլ	DET	_	PronType=Ind	1	det	_	_
~~~

## Additional remarks

Note that two numeral words are joined using the [flat]() relation.
Also note that intensifiers are attached to the head of the phrase and not to the number.
This is in accord with the UD guidelines.

~~~ conllu
# visual-style 1 2 flat color:blue
1	հարոյր	հարոյր	NUM	_	NumForm=Word|NumType=Card	0	root	_	_
2	տասնուիաւթն	տասնուիաւթն	NUM	_	NumForm=Word|NumType=Card	1	flat	_	_
~~~

Similarly there may be other nodes (such as punctuation) that are attached to the head of the phrase
and they are related to the whole phrase rather than directly to the head noun:

~~~ conllu
# visual-style 8 1 punct color:blue
# visual-style 8 9 punct color:blue
# visual-style 8 3 nummod color:blue
1	(	(	PUNCT	_	_	8	punct	_	SpaceAfter=No
2	հետ	հետ	ADP	_	_	8	case	_	_
3	Գ	Գ.	NUM	_	NumForm=Armenian|NumType=Card	8	nummod	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_
5	/	/	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	3	3	NUM	_	NumForm=Digit|NumType=Card	3	appos	_	SpaceAfter=No
7	/	/	PUNCT	_	_	6	punct	_	_
8	աւուրն	աւուր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	0	root	_	SpaceAfter=No
9	)	)	PUNCT	_	_	8	punct	_	_
~~~

## Dates

Dates are annotated as follows: if present, the day is the head, the month is _nmod:poss_ and the year is _nummod_:
<!-- Interlanguage links updated Po 29. června 2026, 18:00:17 CEST -->
