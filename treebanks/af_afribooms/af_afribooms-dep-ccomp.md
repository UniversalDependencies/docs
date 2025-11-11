---
layout: base
title:  'Statistics of ccomp in UD_Afrikaans-AfriBooms'
udver: '2'
---

## Treebank Statistics: UD_Afrikaans-AfriBooms: Relations: `ccomp`

This relation is universal.

913 nodes (2%) are attached to their parents as `ccomp`.

878 instances of `ccomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.16429353778751.

The following 11 pairs of parts of speech are connected with `ccomp`: <tt><a href="af_afribooms-pos-NOUN.html">NOUN</a></tt>-<tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt> (651; 71% instances), <tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt>-<tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt> (184; 20% instances), <tt><a href="af_afribooms-pos-PRON.html">PRON</a></tt>-<tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt> (44; 5% instances), <tt><a href="af_afribooms-pos-ADJ.html">ADJ</a></tt>-<tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="af_afribooms-pos-PROPN.html">PROPN</a></tt>-<tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="af_afribooms-pos-ADV.html">ADV</a></tt>-<tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="af_afribooms-pos-AUX.html">AUX</a></tt>-<tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="af_afribooms-pos-DET.html">DET</a></tt>-<tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="af_afribooms-pos-SYM.html">SYM</a></tt>-<tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="af_afribooms-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="af_afribooms-pos-NUM.html">NUM</a></tt>-<tt><a href="af_afribooms-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	Die	die	DET	LB	Definite=Def|PronType=Art	2	det	_	_
2	inligting	inligting	NOUN	NM	Number=Sing	10	nsubj:pass	_	_
3	wat	wat	PRON	PB	PronType=Rel	5	obj	_	_
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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 ccomp	color:blue
1	Ons	ons	PRON	PEMP	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
2	moet	moet	AUX	VTUOM	Tense=Pres|VerbForm=Fin,Inf|VerbType=Mod	7	aux	_	_
3	egter	egter	ADV	BS	Degree=Pos	7	advmod	_	_
4	nie	nie	ADV	BS	Degree=Pos	7	advmod	_	_
5	die	die	DET	LB	Definite=Def|PronType=Art	6	det	_	_
6	uitdagings	uitdaging	NOUN	NSM	Number=Plur	7	obj	_	_
7	onderskat	onderskat	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	0	root	_	_
8	wat	wat	PRON	PB	PronType=Rel	13	nsubj	_	_
9	ons	ons	PRON	PEMP	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	13	obj	_	_
10	in	in	ADP	SVS	AdpType=Prep	12	case	_	_
11	die	die	DET	LB	Definite=Def|PronType=Art	12	det	_	_
12	gesig	gesig	NOUN	NSE	Number=Sing	13	obl	_	_
13	staar	staar	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	7	ccomp	_	_
14	nie	nie	PART	UPO	PartType=Neg	13	advmod	_	SpaceAfter=No
15	.	.	PUNCT	ZE	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 ccomp	color:blue
1	Dit	dit	PRON	PDOENP	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	is	wees	AUX	VTHOK	Tense=Pres|VerbForm=Fin,Inf|VerbType=Cop	4	cop	_	_
3	veral	veral	ADV	BS	Degree=Pos	4	advmod	_	_
4	belangrik	belangrik	ADJ	ASP	AdjType=Pred|Case=Nom|Degree=Pos	0	root	_	_
5	in	in	ADP	SVS	AdpType=Prep	7	case	_	_
6	die	die	DET	LB	Definite=Def|PronType=Art	7	det	_	_
7	Grondslagfase	grondslagfase	NOUN	NSE	Number=Sing	4	obl	_	_
8	wanneer	wanneer	PRON	PB	PronType=Rel	7	amod	_	_
9	kinders	kind	NOUN	NSM	Number=Plur	8	obj	_	_
10	leer	leer	VERB	VTUOA	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	8	ccomp	_	_
11	lees	lees	NOUN	NA	Number=Sing	10	obj	_	_
12	en	en	CCONJ	KN	_	11	cc	_	_
13	skryf	skryf	VERB	VTHOO	Subcat=Intr|Tense=Pres|VerbForm=Fin,Inf	11	conj	_	SpaceAfter=No
14	.	.	PUNCT	ZE	_	8	punct	_	_

~~~


