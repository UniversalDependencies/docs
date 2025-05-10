---
layout: base
title:  'Statistics of nmod:poss in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="az_tuecl-dep-nmod.html">nmod</a></tt>.

2 nodes (0%) are attached to their parents as `nmod:poss`.

2 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt> (1; 50% instances), <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Bunun	bu	PRON	_	Case=Gen|Number=Sing|PronType=Dem	2	nmod:poss	_	_
2	abisi	abi	ADJ	_	Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	_
3	çoxtər	çox	ADV	_	Degree=Cmp	4	advmod	_	_
4	yaxçıdı	yaxçı	ADJ	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	8	punct	_	_
6	mənə	mən	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	8	obl	_	_
7	abini	abi	ADJ	_	Case=Acc|Number=Sing	8	obj	_	_
8	verərsən	ver	VERB	_	Aspect=Hab|Mood=Ind|Number=Sing|Person=2|Tense=Pres	4	parataxis	_	SpaceAfter=No
9	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Böyük	büyük	ADJ	_	_	2	amod	_	_
2	evdəki	ev	NOUN	_	Case=Loc|Number=Sing	3	nmod	_	_
3	uşağın	uşaq	NOUN	_	Case=Gen|Number=Sing	4	nmod:poss	_	_
4	tükləri	tük	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	_
5	sarıdır	sarı	ADJ	_	_	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	kiçik	kiçik	ADJ	_	_	8	amod	_	_
8	evdə	ev	NOUN	_	Case=Loc|Number=Sing	9	nmod	_	_
9	kinin	ki	NOUN	_	Case=Gen|Number=Sing	10	nmod	_	_
10	ki	ki	NOUN	_	Case=Nom|Number=Sing	11	nsubj	_	_
11	qəhveyidir	qəhveyi	ADJ	_	_	5	conj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


