---
layout: base
title:  'Statistics of csubj:pass in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-csubj.html">csubj</a></tt>.

169 nodes (0%) are attached to their parents as `csubj:pass`.

151 instances of `csubj:pass` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.37278106508876.

The following 4 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (164; 97% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj:pass	color:blue
1	Объявили	объявить	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	_	_	4	punct	4:punct	_
3	что	что	SCONJ	_	_	4	mark	4:mark	_
4	решено	решить	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	1	ccomp	1:ccomp	_
5	продлить	продлить	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	4	csubj:pass	4:csubj:pass	_
6	испытания	испытание	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	5	obj	5:obj	_
7	на	на	ADP	_	_	8	case	8:case	_
8	сутки	сутки	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	5	obl	5:obl	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 csubj:pass	color:blue
1	Человек	человек	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	_
2	в	в	ADP	_	_	3	case	3:case	_
3	пенсне	пенсне	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	1	nmod	1:nmod	_
4	добавил	добавить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	8:punct	_
6	что	что	SCONJ	_	_	8	mark	8:mark	_
7	дедушка	дедушка	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	8	nsubj:pass	8:nsubj:pass	_
8	задержан	задержать	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	4	ccomp	4:ccomp	_
9	и	и	CCONJ	_	_	15	cc	15:cc	SpaceAfter=No
10	,	,	PUNCT	_	_	9	punct	15:punct	_
11	когда	когда	ADV	_	Degree=Pos	13	advmod	13:advmod	_
12	будет	быть	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	aux:pass	13:aux:pass	_
13	отпущен	отпустить	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	15	csubj:pass	15:csubj:pass	SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	15:punct	_
15	неизвестно	неизвестный	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	8	conj	8:conj	SpaceAfter=No
16	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 csubj:pass	color:blue
1	-	-	PUNCT	_	_	7	punct	7:punct	_
2	Ведь	ведь	PART	_	_	7	advmod	7:advmod	_
3	этим	этот	DET	_	Case=Dat|Number=Plur	6	det	6:det	_
4	двум	два	NUM	_	Case=Dat	6	nummod	6:nummod	_
5	разным	разный	ADJ	_	Case=Dat|Degree=Pos|Number=Plur	6	amod	6:amod	_
6	мирам	мир	NOUN	_	Animacy=Inan|Case=Dat|Gender=Masc|Number=Plur	7	iobj	7:iobj	_
7	предопределено	предопределить	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	_
8	свыше	свыше	ADV	_	Degree=Pos	7	advmod	7:advmod	_
9	быть	быть	AUX	_	Aspect=Imp|VerbForm=Inf|Voice=Act	10	cop	10:cop	_
10	вместе	вместе	ADV	_	Degree=Pos	7	csubj:pass	7:csubj	SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	15:punct	_
12	и	и	CCONJ	_	_	15	cc	15:cc	_
13	они	они	PRON	_	Case=Nom|Number=Plur|Person=3	15	nsubj	15:nsubj	_
14	не	не	PART	_	_	15	advmod	15:advmod	_
15	могут	мочь	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	7:conj	_
16	друг	друг	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	15	obl	15:obl	_
17	без	без	ADP	_	_	16	fixed	16:fixed	_
18	друга	друг	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	16	fixed	16:fixed	SpaceAfter=No
19	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


