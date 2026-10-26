---
layout: base
title:  'Statistics of parataxis in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `parataxis`

This relation is universal.

3 nodes (0%) are attached to their parents as `parataxis`.

3 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 3 pairs of parts of speech are connected with `parataxis`: <tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 33% instances), <tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt> (1; 33% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 parataxis	color:blue
1	Mizin	miz	NOUN	_	Case=Gen|Number=Sing	2	nmod	_	_
2	üstündə	üst	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obl	_	_
3	çox	çox	ADJ	_	_	4	amod	_	_
4	kitab	kitab	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	_
5	var	var	ADJ	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	kitabxanda	kitabxana	NOUN	_	Case=Loc|Number=Sing	8	obl	_	_
8	yox	yox	ADJ	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	parataxis	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 parataxis	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 parataxis	color:blue
1	Nəticələr	Nəticə	NOUN	_	Case=Nom|Number=Plur	2	nsubj	_	_
2	gəlmış	gəl	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
3	;	;	PUNCT	_	_	2	punct	_	_
4	belə	belə	PRON	_	_	2	parataxis	_	_
5	dəyil	dəyil	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	4	aux	_	SpaceAfter=No
6	?	?	PUNCT	_	_	2	punct	_	_

~~~


