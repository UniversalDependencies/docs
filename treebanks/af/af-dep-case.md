---
layout: base
title:  'Statistics of case in UD_Afrikaans'
udver: '2'
---

## Treebank Statistics: UD_Afrikaans: Relations: `case`

This relation is universal.

6266 nodes (13%) are attached to their parents as `case`.

6108 instances of `case` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.49824449409512.

The following 21 pairs of parts of speech are connected with `case`: <tt><a href="af-pos-NOUN.html">NOUN</a></tt>-<tt><a href="af-pos-ADP.html">ADP</a></tt> (4584; 73% instances), <tt><a href="af-pos-VERB.html">VERB</a></tt>-<tt><a href="af-pos-ADP.html">ADP</a></tt> (817; 13% instances), <tt><a href="af-pos-PROPN.html">PROPN</a></tt>-<tt><a href="af-pos-ADP.html">ADP</a></tt> (200; 3% instances), <tt><a href="af-pos-SYM.html">SYM</a></tt>-<tt><a href="af-pos-ADP.html">ADP</a></tt> (151; 2% instances), <tt><a href="af-pos-PRON.html">PRON</a></tt>-<tt><a href="af-pos-ADP.html">ADP</a></tt> (142; 2% instances), <tt><a href="af-pos-NOUN.html">NOUN</a></tt>-<tt><a href="af-pos-PART.html">PART</a></tt> (127; 2% instances), <tt><a href="af-pos-X.html">X</a></tt>-<tt><a href="af-pos-ADP.html">ADP</a></tt> (121; 2% instances), <tt><a href="af-pos-ADV.html">ADV</a></tt>-<tt><a href="af-pos-ADP.html">ADP</a></tt> (28; 0% instances), <tt><a href="af-pos-AUX.html">AUX</a></tt>-<tt><a href="af-pos-ADP.html">ADP</a></tt> (24; 0% instances), <tt><a href="af-pos-PROPN.html">PROPN</a></tt>-<tt><a href="af-pos-PART.html">PART</a></tt> (18; 0% instances), <tt><a href="af-pos-ADJ.html">ADJ</a></tt>-<tt><a href="af-pos-ADP.html">ADP</a></tt> (11; 0% instances), <tt><a href="af-pos-DET.html">DET</a></tt>-<tt><a href="af-pos-ADP.html">ADP</a></tt> (10; 0% instances), <tt><a href="af-pos-X.html">X</a></tt>-<tt><a href="af-pos-PART.html">PART</a></tt> (9; 0% instances), <tt><a href="af-pos-NUM.html">NUM</a></tt>-<tt><a href="af-pos-ADP.html">ADP</a></tt> (7; 0% instances), <tt><a href="af-pos-ADP.html">ADP</a></tt>-<tt><a href="af-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="af-pos-PRON.html">PRON</a></tt>-<tt><a href="af-pos-PART.html">PART</a></tt> (4; 0% instances), <tt><a href="af-pos-ADP.html">ADP</a></tt>-<tt><a href="af-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="af-pos-DET.html">DET</a></tt>-<tt><a href="af-pos-PART.html">PART</a></tt> (3; 0% instances), <tt><a href="af-pos-NOUN.html">NOUN</a></tt>-<tt><a href="af-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="af-pos-NOUN.html">NOUN</a></tt>-<tt><a href="af-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="af-pos-NUM.html">NUM</a></tt>-<tt><a href="af-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case	color:blue
1	Die	die	DET	LB	Definite=Def|PronType=Art	2	det	_	_
2	inligting	inligting	NOUN	NM	Number=Sing	10	nsubj:pass	_	_
3	wat	wat	PRON	PB	PronType=Rel	5	nsubj	_	_
4	jy	jy	PRON	PTENP	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	_
5	verstrek	verstrek	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	2	ccomp	_	SpaceAfter=No
6	,	,	PUNCT	ZM	_	5	punct	_	_
7	word	word	AUX	VTUOP	Tense=Pres|VerbForm=Fin,Inf|VerbType=Pas	10	aux:pass	_	_
8	aan	aan	ADP	SVS	AdpType=Prep	9	case	_	_
9	speurders	speurder	NOUN	NSM	Number=Plur	10	iobj	_	_
10	oorgedra	oordra	VERB	VVHOG	Subcat=Tran|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
11	.	.	PUNCT	ZE	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 case	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	Bewys	bewys	NOUN	NSE	Number=Sing	7	nsubj:pass	_	_
2	van	van	ADP	SVS	AdpType=Prep	3	case	_	_
3	betaling	betaling	NOUN	NSE	Number=Sing	1	nmod	_	_
4	moet	moet	AUX	VTUOM	Tense=Pres|VerbForm=Fin,Inf|VerbType=Mod	7	aux	_	_
5	na	na	ADP	SVS	AdpType=Prep	6	case	_	_
6	0123298292	0123298292	PROPN	NEE	Number=Sing	7	obl	_	_
7	gefaks	faks	VERB	VVHOG	Subcat=Tran|Tense=Past|VerbForm=Part	0	root	_	_
8	word	word	AUX	VTUOP	Tense=Pres|VerbForm=Fin,Inf|VerbType=Pas	7	aux:pass	_	SpaceAfter=No
9	.	.	PUNCT	ZE	_	7	punct	_	_

~~~


