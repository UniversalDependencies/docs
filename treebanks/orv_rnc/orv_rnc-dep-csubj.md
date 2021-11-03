---
layout: base
title:  'Statistics of csubj in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `csubj`

This relation is universal.

50 nodes (0%) are attached to their parents as `csubj`.

26 instances of `csubj` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.38.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (28; 56% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (13; 26% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (4; 8% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 csubj	color:blue
1	А	а	CCONJ	_	_	9	cc	_	_
2	в	въ	ADP	_	_	3	case	_	_
3	деревню	деревня	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	9	obl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	г.	государь	NOUN	_	Abbr=Yes	3	parataxis	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	ходить	ходити	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	9	csubj	_	_
8	будет	быти	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	9	cop	_	_
9	далеко	далекий	ADJ	AdjType=Predic	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 csubj	color:blue
1	А	а	CCONJ	_	_	6	cc	_	_
2	конюх	конюхъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
3	здесь	здѣсь	ADV	_	Degree=Pos	6	advmod	_	_
4	у	у	ADP	_	_	5	case	_	_
5	лошадей	лошадь	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	6	obl	_	_
6	один	одинъ	NUM	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	пасти	пасти	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	9	csubj	_	_
9	не	не	VERB	_	Polarity=Neg	6	conj	_	_
10	с	съ	ADP	_	_	11	case	_	_
11	кем	кто	PRON	_	Case=Ins|Gender=Masc|Number=Sing|PronType=Neg	9	obl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 30 csubj	color:blue
1	А	а	CCONJ	_	_	11	cc	_	_
2	мы	мы	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	11	nsubj	_	_
3	какъ	какъ	ADV	_	Degree=Pos	5	advmod	_	_
4	есть	быти	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	християне	християнинъ	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	11	advcl	_	_
6	по	по	ADP	_	_	8	case	_	_
7	християнскому	христианский	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
8	обычаю	обычай	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	11	obl	_	_
9	со	съ	ADP	_	_	10	case	_	_
10	смирением	смирение	NOUN	_	Case=Ins|Gender=Neut|Number=Sing	11	obl	_	_
11	напоминаем	напоминати	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
12	и	и	CCONJ	_	_	17	cc	_	_
13	бранитися	бранитися	VERB	_	Aspect=Imp|Reflex=Yes|VerbForm=Inf|Voice=Mid	17	xcomp	_	_
14	с	съ	ADP	_	_	15	case	_	_
15	тобою	ты	PRON	_	Case=Ins|Number=Sing|Person=2|PronType=Prs	13	obl	_	_
16	не	не	PART	_	Polarity=Neg	17	advmod	_	_
17	хотим	хотѣти	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	11	conj	_	SpaceAfter=No
18	,	,	PUNCT	_	_	24	punct	_	_
19	занеже	занеже	SCONJ	_	_	24	mark	_	_
20	тебѣ	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	24	iobj	_	_
21	со	съ	ADP	_	_	22	case	_	_
22	мною	я	PRON	_	Case=Ins|Number=Sing|Person=1|PronType=Prs	23	obl	_	_
23	бранитися	бранитися	VERB	_	Aspect=Imp|Reflex=Yes|VerbForm=Inf|Voice=Mid	24	csubj	_	_
24	честь	честь	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	17	advcl	_	SpaceAfter=No
25	,	,	PUNCT	_	_	31	punct	_	_
26	а	а	CCONJ	_	_	31	cc	_	_
27	мнѣ	я	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	31	iobj	_	_
28	с	съ	ADP	_	_	29	case	_	_
29	тобою	ты	PRON	_	Case=Ins|Number=Sing|Person=2|PronType=Prs	30	obl	_	_
30	бранитися	бранитися	VERB	_	Aspect=Imp|Reflex=Yes|VerbForm=Inf|Voice=Mid	31	csubj	_	_
31	безчестье	бесчестье	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	24	conj	_	SpaceAfter=No
32	.	.	PUNCT	_	_	11	punct	_	_

~~~


