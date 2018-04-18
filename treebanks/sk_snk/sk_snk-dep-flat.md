---
layout: base
title:  'Statistics of flat in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="sk_snk-dep-flat-foreign.html">flat:foreign</a></tt>.

14 nodes (0%) are attached to their parents as `flat`.

14 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.35714285714286.

The following 2 pairs of parts of speech are connected with `flat`: <tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (13; 93% instances), <tt><a href="sk_snk-pos-PRON.html">PRON</a></tt>-<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 flat	color:blue
1	Okolo	okolo	ADP	Eu2	AdpType=Prep|Case=Gen	2	case	2:case	_
2	neho	ono	PRON	PFns2	Case=Gen|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	obl	4:obl	_
3	neskôr	neskôr	ADV	Dx	Degree=Pos	4	advmod	4:advmod	_
4	vyrástlo	vyrásť	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
5	nové	nový	ADJ	AAns1x	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	6	amod	6:amod	_
6	mesto	mesto	NOUN	SSns1	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	4:nsubj	_
7	nazývané	nazývaný	ADJ	Gtns1x	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	6	amod	6:amod	_
8	Spalato	spalato	PROPN	SSns1:r	Case=Nom|Gender=Neut|Number=Sing	7	obl	7:obl	_
9	–	–	PUNCT	Z	_	10	punct	10:punct	_
10	Split	split	PROPN	SSis1:r	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	flat	8:flat	SpaceAfter=No
11	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat	color:blue
1	On	on	PRON	PFms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	6:nsubj	_
2	–	–	PUNCT	Z	_	3	punct	3:punct	_
3	Kristus	kristus	PROPN	SSms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	flat	1:flat	_
4	je	byť	AUX	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
5	novou	nový	ADJ	AAfs7x	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	6	amod	6:amod	_
6	možnosťou	možnosť	NOUN	SSfs7	Case=Ins|Gender=Fem|Number=Sing	0	root	0:root	_
7	orientácie	orientácia	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	6	nmod	6:nmod	SpaceAfter=No
8	,	,	PUNCT	Z	_	9	punct	9:punct	_
9	cestou	cesta	NOUN	SSfs7	Case=Ins|Gender=Fem|Number=Sing	6	conj	0:root|6:conj	_
10	znovuzrodenia	znovuzrodenie	NOUN	SSns2	Case=Gen|Gender=Neut|Number=Sing	9	nmod	9:nmod	SpaceAfter=No
11	,	,	PUNCT	Z	_	13	punct	13:punct	_
12	novej	nový	ADJ	AAfs2x	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	13	amod	13:amod	_
13	nádeje	nádej	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	10	conj	9:nmod|10:conj	_
14	a	a	CCONJ	O	_	15	cc	15:cc	_
15	lásky	láska	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	10	conj	9:nmod|10:conj	SpaceAfter=No
16	,	,	PUNCT	Z	_	18	punct	18:punct	_
17	ktorá	ktorý	DET	PAfs1	Case=Nom|Gender=Fem|Number=Sing|PronType=Int,Rel	18	nsubj	18:nsubj	_
18	hľadá	hľadať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	15	acl	15:acl	_
19	tých	ten	DET	PFmp4	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	18	obj	18:obj	SpaceAfter=No
20	,	,	PUNCT	Z	_	22	punct	22:punct	_
21	ktorí	ktorý	DET	PAmp1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	22	nsubj	22:nsubj	_
22	sú	byť	VERB	VKepc+	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	19	acl	19:acl	_
23	na	na	ADP	Eu6	AdpType=Prep|Case=Loc	24	case	24:case	_
24	ceste	cesta	NOUN	SSfs6	Case=Loc|Gender=Fem|Number=Sing	22	obl	22:obl	_
25	rezignácie	rezignácia	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	24	nmod	24:nmod	SpaceAfter=No
26	,	,	PUNCT	Z	_	27	punct	27:punct	_
27	ubití	ubitý	ADJ	Gtmp1x	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	21	xcomp	21:xcomp	_
28	ľudským	ľudský	ADJ	AAis7x	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	29	amod	29:amod|31:amod	_
29	egoizmom	egoizmus	NOUN	SSis7	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	27	obj	27:obj	_
30	a	a	CCONJ	O	_	31	cc	31:cc	_
31	hriechom	hriech	NOUN	SSis7	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	29	conj	27:obj|29:conj	SpaceAfter=No
32	.	.	PUNCT	Z	_	6	punct	6:punct	_

~~~


