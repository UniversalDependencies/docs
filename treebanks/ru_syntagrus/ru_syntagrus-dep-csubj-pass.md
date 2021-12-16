---
layout: base
title:  'Statistics of csubj:pass in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-csubj.html">csubj</a></tt>.

217 nodes (0%) are attached to their parents as `csubj:pass`.

189 instances of `csubj:pass` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.38248847926267.

The following 4 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (211; 97% instances), <tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="ru_syntagrus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (1; 0% instances).


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
8	сутки	сутки	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	5	obl	5:obl:на:acc	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 10 csubj:pass	color:blue
1	Я	я	PRON	_	Case=Nom|Number=Sing|Person=1	2	nsubj	2:nsubj|3:nsubj	_
2	решила	решить	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	пережидать	пережидать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	2	xcomp	2:xcomp	_
4	карантин	карантин	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obj	3:obj	_
5	на	на	ADP	_	_	6	case	6:case	_
6	даче	дача	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	3	obl	3:obl:на:loc	SpaceAfter=No
7	,	,	PUNCT	_	_	15	punct	15:punct	_
8	поскольку	поскольку	SCONJ	_	_	15	mark	15:mark	_
9	быть	быть	AUX	_	Aspect=Imp|VerbForm=Inf|Voice=Act	10	aux:pass	10:aux:pass	_
10	запертой	запереть	VERB	_	Aspect=Perf|Case=Ins|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	15	csubj:pass	15:csubj:pass	_
11	в	в	ADP	_	_	13	case	13:case	_
12	московской	московский	ADJ	_	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	13	amod	13:amod	_
13	квартире	квартира	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	10	obl	10:obl:в:loc	_
14	еще	еще	PART	_	_	15	advmod	15:advmod	_
15	хуже	плохой	ADJ	_	Degree=Cmp	3	advcl	3:advcl:поскольку	SpaceAfter=No
16	.	.	PUNCT	_	_	2	punct	2:punct	_~

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 csubj:pass	color:blue
1	-	-	PUNCT	_	_	7	punct	7:punct	_
2	Ведь	ведь	PART	_	_	7	advmod	7:advmod	_
3	этим	этот	DET	_	Case=Dat|Number=Plur|PronType=Dem	6	det	6:det	_
4	двум	два	NUM	_	Case=Dat|NumType=Card	6	nummod	6:nummod	_
5	разным	разный	ADJ	_	Case=Dat|Degree=Pos|Number=Plur	6	amod	6:amod	_
6	мирам	мир	NOUN	_	Animacy=Inan|Case=Dat|Gender=Masc|Number=Plur	7	iobj	7:iobj	_
7	предопределено	предопределить	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	_
8	свыше	свыше	ADV	_	Degree=Pos	7	advmod	7:advmod	_
9	быть	быть	AUX	_	Aspect=Imp|VerbForm=Inf|Voice=Act	10	cop	10:cop	_
10	вместе	вместе	ADV	_	Degree=Pos	7	csubj:pass	7:csubj	SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	15:punct	_
12	и	и	CCONJ	_	_	15	cc	15:cc	_
13	они	они	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	15	nsubj	15:nsubj	_
14	не	не	PART	_	_	15	advmod	15:advmod	_
15	могут	мочь	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	0:root|7:conj	_
16	друг	друг	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	15	obl	15:obl:nom	_
17	без	без	ADP	_	_	16	fixed	16:fixed	_
18	друга	друг	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	16	fixed	16:fixed	SpaceAfter=No
19	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


