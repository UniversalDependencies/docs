---
layout: base
title:  'Statistics of vocative in UD_Old_Russian-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_Russian-RNC: Relations: `vocative`

This relation is universal.

70 nodes (0%) are attached to their parents as `vocative`.

42 instances of `vocative` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.82857142857143.

The following 5 pairs of parts of speech are connected with `vocative`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (57; 81% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (7; 10% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (3; 4% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 vocative	color:blue
1	Царь	царь	NOUN	OOV|Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	4	vocative	_	_
2	государь	государь	NOUN	Animacy[lex]=Anim	Case=Nom|Gender=Masc|Number=Sing	1	appos	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	смилуйся	смиловатися	VERB	OOV|Transit=Intr	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|Reflex=Yes|VerbForm=Fin	0	root	_	_
5	пожалуй	пожаловати	VERB	OOV|Transit=Tran	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	4	discourse	_	SpaceAfter=No
6	!	!	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 13 vocative	color:blue
1	Потому	потому	ADV	_	Degree=Pos	8	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	государь	государь	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	8	vocative	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	нас	мы	PRON	_	Case=Gen|Number=Plur|Person=1|PronType=Prs	8	nsubj:pass	_	_
6	немало	немало	NUM	_	Case=Nom	5	nummod:gov	_	_
7	и	и	PART	_	_	8	advmod	_	_
8	написано	написати	VERB	_	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
9	,	,	PUNCT	_	_	28	punct	_	_
10	а	а	CCONJ	_	_	28	cc	_	_
11	платежщиков	платежчикъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	28	nmod	_	SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	_
13	государь	государь	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	28	vocative	_	SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	_	_
15	нас	мы	PRON	_	Case=Gen|Number=Plur|Person=1|PronType=Prs	11	appos	_	SpaceAfter=No
16	,	,	PUNCT	_	_	22	punct	_	_
17	которые	который	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	22	nsubj	_	_
18	у	въ	ADP	_	_	21	case	_	_
19	твоих	твой	DET	_	Case=Loc|Gender=Neut|Number=Plur|Poss=Yes	21	det	_	_
20	государевых	государевъ	ADJ	_	Case=Loc|Degree=Pos|Gender=Neut|Number=Plur|Variant=Long	21	amod	_	_
21	делах	дѣло	NOUN	_	Case=Loc|Gender=Neut|Number=Plur	22	obl	_	_
22	ходим	ходити	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	15	acl:relcl	_	SpaceAfter=No
23	,	,	PUNCT	_	_	22	punct	_	_
24	одна	одинъ	NUM	_	Case=Nom|Gender=Fem|Number=Sing	28	nummod	_	_
25	и	и	CCONJ	_	_	27	cc	_	_
26	с	съ	ADP	_	_	27	case	_	_
27	восмьдесят	восмьдесятъ	NUM	_	Case=Ins	24	conj	_	_
28	человек	человѣкъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	8	conj	_	SpaceAfter=No
29	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 vocative	color:blue
1	Уне	уне	VERB	_	_	0	root	_	_
2	бы	бы	AUX	_	Analyt=Yes|Mood=Cnd	1	aux	_	_
3	ти	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	1	iobj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	Упадыше	Упадышъ	PROPN	_	Case=Voc|Gender=Masc|Number=Sing	1	vocative	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	аще	аще	SCONJ	_	_	12	mark	_	_
8	не	не	PART	_	Polarity=Neg	12	advmod	_	_
9	был	быти	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes	12	aux	_	_
10	бы	бы	AUX	_	Analyt=Yes|Mood=Cnd	12	aux	_	_
11	во	въ	ADP	_	_	12	case	_	_
12	утробѣ	утроба	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	1	advcl	_	_
13	матерьни	матерний	ADJ	_	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	12	amod	_	SpaceAfter=No
14	,	,	PUNCT	_	_	18	punct	_	_
15	не	не	PART	_	Polarity=Neg	18	advmod	_	_
16	бы	бы	AUX	_	Analyt=Yes|Mood=Cnd	18	aux	_	_
17	былъ	быти	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes	18	aux	_	_
18	нареченъ	наречи	VERB	_	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	12	conj	_	_
19	предатель	предатель	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	18	xcomp	_	_
20	Новуграду	Новъградъ	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	19	nmod	_	SpaceAfter=No
21	.	.	PUNCT	_	_	1	punct	_	_

~~~


