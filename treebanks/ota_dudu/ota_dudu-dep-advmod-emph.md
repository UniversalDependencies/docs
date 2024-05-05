---
layout: base
title:  'Statistics of advmod:emph in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="ota_dudu-dep-advmod.html">advmod</a></tt>.

7 nodes (1%) are attached to their parents as `advmod:emph`.

7 instances of `advmod:emph` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 5 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-PART.html">PART</a></tt> (3; 43% instances), <tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_dudu-pos-PART.html">PART</a></tt> (1; 14% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt> (1; 14% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-CCONJ.html">CCONJ</a></tt> (1; 14% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-PART.html">PART</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 advmod:emph	color:blue
1	ḥalḳa	ḥalḳ	NOUN	_	Case=Dat|Number=Sing|Person=3	3	obl	_	_
2	doġru	doġru	ADP	PCDat	_	1	case	_	_
3	gitmenin	git	VERB	Vnoun	Case=Gen|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	5	nmod:poss	_	_
4	ikinci	iki	NUM	NNum	Case=Nom|Number=Sing|NumType=Ord|Person=3	5	amod	_	_
5	vazîfesi	vazîfe	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	nsubj	_	_
6	de	de	PART	Emph	_	5	advmod:emph	_	_
7	ḥalḳa	ḥalḳ	NOUN	_	Case=Dat|Number=Sing|Person=3	9	obl	_	_
8	medeniyyet	medeniyyet	NOUN	_	Case=Acc|Number=Sing|Person=3	9	obj	_	_
9	götürmek	götür	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	0	root	_	_
10	tir	i	AUX	Zero	Aspect=Perf|Number=Sing|Person=3|Tense=Pres	9	cop	_	_
11	.	.	PUNCT	Stop	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advmod:emph	color:blue
1	evet	evet	INTJ	_	_	11	discourse	_	SpaceAfter=No
2	,	,	PUNCT	Comma	_	1	punct	_	_
3	biraz	biraz	ADV	_	_	5	amod	_	_
4	da	da	PART	Emph	_	3	advmod:emph	_	_
5	ʿaşḳtan	ʿaşḳ	NOUN	_	Case=Abl|Number=Sing|Person=3	11	obl	_	SpaceAfter=No
6	,	,	PUNCT	Comma	_	5	punct	_	_
7	daha	daha	ADV	_	_	8	advmod	_	_
8	doġrusu	doġru	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	11	amod	_	_
9	yine	yine	ADV	_	_	11	advmod	_	_
10	ʿaşḳtan	ʿaşḳ	NOUN	_	Case=Abl|Number=Sing|Person=3	11	obl	_	_
11	baḥsedelim	baḥset	VERB	_	Mood=Opt|Number=Plur|Person=1|Polarity=Pos	0	root	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 advmod:emph	color:blue
1	yine	yine	ADV	_	_	2	advmod	_	_
2	olmaz	ol	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	12	advcl	_	_
3	ise	i	PART	Topic	_	2	discourse	_	_
4	üçüncü	üç	NUM	NNum	Case=Nom|Number=Sing|NumType=Ord|Person=3	5	nummod	_	_
5	defʿa	defʿa	NOUN	_	Case=Nom|Number=Sing|Person=3	12	obl	_	_
6	on	on	NUM	ANum	NumType=Card	7	nummod	_	_
7	bir	bir	NUM	ANum	NumType=Card	8	nummod	_	_
8	gice	gece	NOUN	_	Case=Nom|Number=Sing|Person=3	12	obl	_	_
9	daḫı	daḫı	ADV	Emph	_	8	advmod:emph	_	_
10	eyleye	eyle	VERB	_	Mood=Imp|Number=Sing|Person=3|Polarity=Pos	12	obl	_	_
11	elbette	elbette	ADV	_	_	12	advmod	_	_
12	musaḫḫar	musaḫḫar	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
13	olur	ol	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	12	compound:lvc	_	_

~~~


