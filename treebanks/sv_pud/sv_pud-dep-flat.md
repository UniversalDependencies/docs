---
layout: base
title:  'Statistics of flat in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="sv_pud-dep-flat-name.html">flat:name</a></tt>.

1 nodes (0%) are attached to their parents as `flat`.

1 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `flat`: <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 flat	color:blue
1	Hon	hon	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nsubj	2:nsubj	_
2	mördade	mörda	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	Andre	Andre	PROPN	PM|NOM	Case=Nom	2	obl	2:obl	_
4	Price	Price	PROPN	PM|NOM	Case=Nom	3	flat:name	3:flat:name	_
5	III	3	NUM	RG|NOM	Case=Nom	3	flat	3:flat	_
6	genom	genom	ADP	PP	_	8	mark	8:mark	_
7	att	att	PART	IE	_	8	mark	8:mark	_
8	pressa	pressa	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	2	advcl	2:advcl:att	_
9	hans	hans	PRON	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes	10	nmod:poss	10:nmod:poss	_
10	ansikte	ansikte	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	8	obj	8:obj	_
11	mot	mot	ADP	PP	_	13	case	13:case	_
12	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing	13	det	13:det	_
13	luftmadrass	luftmadrass	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	8	obl	8:obl:mot	_
14	i	i	ADP	PP	_	16	case	16:case	_
15	hennes	hennes	PRON	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes	16	nmod:poss	16:nmod:poss	_
16	vardagsrum	vardagsrum	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	8	obl	8:obl:i	_
17	innan	innan	SCONJ	SN	_	19	mark	19:mark	_
18	hon	hon	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	19	nsubj	19:nsubj|20:nsubj	_
19	försökte	försöka	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	advcl	8:advcl:innan	_
20	göra	göra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	19	xcomp	19:xcomp	_
21	samma	samma	DET	DT|UTR/NEU|SIN/PLU|IND	Definite=Ind	22	det	22:det	_
22	sak	sak	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	20	obj	20:obj	_
23	mot	mot	ADP	PP	_	26	case	26:case	_
24	sin	sin	PRON	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes	25	nmod:poss	25:nmod:poss	_
25	dotter	dotter	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	26	nmod	26:nmod	_
26	Angel	Angel	PROPN	PM|NOM	Case=Nom	20	obl	20:obl:mot	SpaceAfter=No
27	,	,	PUNCT	MID	_	28	punct	28:punct	_
28	sade	säga	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	2	parataxis	2:parataxis	_
29	polisen	polis	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	28	nsubj	28:nsubj	SpaceAfter=No
30	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


