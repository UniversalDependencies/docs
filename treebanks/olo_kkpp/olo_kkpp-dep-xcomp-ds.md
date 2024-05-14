---
layout: base
title:  'Statistics of xcomp:ds in UD_Livvi-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Livvi-KKPP: Relations: `xcomp:ds`

This relation is a language-specific subtype of <tt><a href="olo_kkpp-dep-xcomp.html">xcomp</a></tt>.

2 nodes (0%) are attached to their parents as `xcomp:ds`.

2 instances of `xcomp:ds` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `xcomp:ds`: <tt><a href="olo_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 xcomp:ds	color:blue
1	Arbaituksen	arbaitus	NOUN	NOUN	Case=Gen|Number=Sing	2	nmod:poss	_	_
2	akku	akku	NOUN	NOUN	Case=Nom|Number=Sing	5	nsubj:cop	_	_
3	oli	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	_
4	ylen	ylen	ADV	ADV	_	5	advmod	_	_
5	viizas	viizas	ADJ	ADJ	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	9	punct	_	_
7	kaikkien	kaikki	ADJ	ADJ	Case=Gen|Number=Plur	8	amod	_	_
8	arbaituksien	arbaitus	NOUN	NOUN	Case=Gen|Number=Plur	9	nmod:poss	_	_
9	tiedäi	tiedäi	NOUN	NOUN	Case=Nom|Number=Sing	5	appos	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	14	punct	_	_
11	hänes	häi	PRON	PRON	Case=Ine|Number=Sing|Person=3|PronType=Prs	14	obl	_	_
12	oli	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	14	cop	_	_
13	ylen	ylen	ADV	ADV	_	14	advmod	_	_
14	jygei	jygei	ADJ	ADJ	Case=Nom|Number=Sing	5	parataxis	_	_
15	piästä	piästä	VERB	VERB	VerbForm=Inf	14	xcomp:ds	_	_
16	eroh	ero	NOUN	NOUN	Case=Ill|Number=Sing	15	obl	_	SpaceAfter=No
17	.	.	PUNCT	PUNCT	_	15	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp:ds	color:blue
1	Häi	Häi	PRON	PRON	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	pani	panna	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	ukon	ukko	NOUN	NOUN	Case=Acc|Number=Sing	4	nsubj	_	_
4	pezemäh	pestä	VERB	VERB	VerbForm=Inf	2	xcomp:ds	_	_
5	mašinua	mašin	NOUN	NOUN	Case=Par|Number=Sing	4	obj	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


