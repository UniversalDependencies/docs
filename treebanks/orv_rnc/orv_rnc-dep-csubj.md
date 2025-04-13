---
layout: base
title:  'Statistics of csubj in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `csubj`

This relation is universal.
There are 2 language-specific subtypes of `csubj`: <tt><a href="orv_rnc-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="orv_rnc-dep-csubj-pass.html">csubj:pass</a></tt>.

188 nodes (0%) are attached to their parents as `csubj`.

96 instances of `csubj` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.97872340425532.

The following 15 pairs of parts of speech are connected with `csubj`: <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (94; 50% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (57; 30% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (9; 5% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (1; 1% instances).


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
5	г.	государь	NOUN	_	Abbr=Yes	3	vocative	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	ходить	ходити	VERB	_	VerbForm=Inf|Voice=Act	9	csubj	_	_
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
3	здесь	здѣсь	ADV	_	Degree=Pos|PronType=Dem	6	advmod	_	upos="ADVPRO"|_
4	у	у	ADP	_	_	5	case	_	_
5	лошадей	лошадь	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	6	obl	_	_
6	один	одинъ	NUM	_	Case=Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	пасти	пасти	VERB	_	VerbForm=Inf|Voice=Act	9	csubj	_	_
9	не	не	VERB	_	Polarity=Neg	6	conj	_	_
10	с	съ	ADP	_	_	11	case	_	_
11	кем	кто	PRON	_	Case=Ins|Gender=Masc|Number=Sing|PronType=Neg	9	obl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 csubj	color:blue
1	И	и	CCONJ	_	_	4	cc	_	norm="И"
2	Фрол	Фролъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	4	nsubj	_	norm="Фрол"
3	Скобеев	Скобѣевъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	2	flat:name	_	norm="Скобеев"
4	стал	стати	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	norm="стал"
5	говорить	говорити	VERB	_	VerbForm=Inf|Voice=Act	4	xcomp	_	norm="говорить"
6	сестре	сестра	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	5	iobj	_	norm="сестре"|check=@
7	своей	свой	DET	_	Case=Dat|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	6	det	_	norm="своей"|SpaceAfter=No|check=@
8	:	:	PUNCT	_	_	14	punct	_	norm=":"
9	«	«	PUNCT	_	_	14	punct	_	norm="«"|SpaceAfter=No
10	Ну	ну	PART	_	_	14	discourse	_	norm="Ну"|SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	norm=","
12	сестрица	сестрица	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	14	vocative	_	norm="сестрица"|SpaceAfter=No
13	,	,	PUNCT	_	_	12	punct	_	norm=","
14	пора	пора	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	5	parataxis	_	norm="пора"
15	тебе	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	14	iobj	_	norm="тебе"
16	убираться	убиратися	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Mid	14	csubj	_	norm="убираться"
17	и	и	CCONJ	_	_	18	cc	_	norm="и"
18	ехать	ѣхати	VERB	_	VerbForm=Inf|Voice=Act	16	conj	_	norm="ехать"
19	в	въ	ADP	_	_	20	case	_	norm="в"|check=@
20	гости	гость	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	18	obl	_	norm="гости"|SpaceAfter=No|check=@
21	»	»	PUNCT	_	_	14	punct	_	norm="»"|SpaceAfter=No
22	.	.	PUNCT	_	_	4	punct	_	norm="."

~~~


