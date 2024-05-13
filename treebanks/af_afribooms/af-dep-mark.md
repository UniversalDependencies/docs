---
layout: base
title:  'Statistics of mark in UD_Afrikaans'
udver: '2'
---

## Treebank Statistics: UD_Afrikaans: Relations: `mark`

This relation is universal.

1051 nodes (2%) are attached to their parents as `mark`.

983 instances of `mark` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32350142721218.

The following 7 pairs of parts of speech are connected with `mark`: <tt><a href="af-pos-VERB.html">VERB</a></tt>-<tt><a href="af-pos-PART.html">PART</a></tt> (977; 93% instances), <tt><a href="af-pos-AUX.html">AUX</a></tt>-<tt><a href="af-pos-PART.html">PART</a></tt> (62; 6% instances), <tt><a href="af-pos-VERB.html">VERB</a></tt>-<tt><a href="af-pos-SCONJ.html">SCONJ</a></tt> (6; 1% instances), <tt><a href="af-pos-AUX.html">AUX</a></tt>-<tt><a href="af-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="af-pos-VERB.html">VERB</a></tt>-<tt><a href="af-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="af-pos-AUX.html">AUX</a></tt>-<tt><a href="af-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="af-pos-NOUN.html">NOUN</a></tt>-<tt><a href="af-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark	color:blue
1	Deur	deur	ADP	SVS	AdpType=Prep	4	case	_	_
2	saam	saam	ADV	UPW	Degree=Pos	4	compound:prt	_	_
3	te	te	PART	UPI	PartType=Inf	4	mark	_	_
4	werk	werk	VERB	VTHOO	Subcat=Intr|Tense=Pres|VerbForm=Fin,Inf	9	obl	_	SpaceAfter=No
5	,	,	PUNCT	ZM	_	4	punct	_	_
6	kan	kan	AUX	VTUOM	Tense=Pres|VerbForm=Fin,Inf|VerbType=Mod	9	aux	_	_
7	ons	ons	PRON	PEMP	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	9	nsubj	_	_
8	meer	baie	DET	THBO	PronType=Ind	9	obj	_	_
9	bereik	bereik	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	0	root	_	SpaceAfter=No
10	.	.	PUNCT	ZE	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 mark	color:blue
1	Ons	ons	PRON	PEMP	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	_
2	is	is	AUX	VTHOK	Tense=Pres|VerbForm=Fin,Inf|VerbType=Cop	6	cop	_	_
3	nie	nie	ADV	BS	Degree=Pos	2	advmod	_	_
4	'n	'n	DET	LO	Definite=Ind|PronType=Art	6	det	_	_
5	waterryke	waterryk	ADJ	ASA	AdjType=Attr|Case=Nom|Degree=Pos	6	amod	_	_
6	land	land	NOUN	NSE	Number=Sing	0	root	_	_
7	nie	nie	PART	UPO	PartType=Neg	2	mark	_	SpaceAfter=No
8	.	.	PUNCT	ZE	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 18 mark	color:blue
1	En	en	CCONJ	KN	_	14	amod	_	_
2	omdat	omdat	SCONJ	KO	_	14	amod	_	_
3	ons	ons	PRON	PEMP	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	_
4	nie	nie	ADV	BS	Degree=Pos	6	advmod	_	_
5	genoeg	genoeg	ADV	BS	Degree=Pos	6	advmod	_	_
6	gespaar	spaar	VERB	VVHOO	Subcat=Intr|Tense=Past|VerbForm=Part	2	dep	_	_
7	het	het	AUX	VUOT	Tense=Pres|VerbForm=Fin,Inf|VerbType=Aux	6	aux	_	_
8	nie	nie	PART	UPO	PartType=Neg	6	advmod	_	SpaceAfter=No
9	,	,	PUNCT	ZM	_	6	punct	_	_
10	moes	moet	AUX	VVUOM	Tense=Past|VerbForm=Fin|VerbType=Mod	14	aux	_	_
11	ons	ons	PRON	PEMP	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	14	nsubj	_	_
12	op	op	ADP	SVS	AdpType=Prep	13	case	_	_
13	korttermyn-kapitaalvloei	korttermyn-kapitaalvloei	NOUN	NA	Number=Sing	14	obl	_	_
14	staatmaak	staatmaak	VERB	VTHSO	Subcat=Intr|Tense=Pres|VerbForm=Fin,Inf	0	root	_	_
15	om	om	ADP	SVS	AdpType=Prep	23	case	_	_
16	die	die	DET	LB	Definite=Def|PronType=Art	17	det	_	_
17	tekort	tekort	NOUN	NSE	Number=Sing	23	obj	_	_
18	sowel	sowel	SCONJ	KO	_	23	mark	_	_
19	as	as	SCONJ	KO	_	23	amod	_	_
20	ons	ons	PRON	PEMP	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	21	det	_	_
21	beleggingsprogramme	beleggingsprogram	NOUN	NSM	Number=Plur	19	dep	_	_
22	te	te	PART	UPI	PartType=Inf	23	mark	_	_
23	finansier	finansier	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	14	obl	_	SpaceAfter=No
24	.	.	PUNCT	ZE	_	23	punct	_	_

~~~


