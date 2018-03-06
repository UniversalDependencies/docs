---
layout: base
title:  'Statistics of cc in UD_Afrikaans'
udver: '2'
---

## Treebank Statistics: UD_Afrikaans: Relations: `cc`

This relation is universal.

1886 nodes (4%) are attached to their parents as `cc`.

1861 instances of `cc` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5694591728526.

The following 22 pairs of parts of speech are connected with `cc`: <tt><a href="af-pos-NOUN.html">NOUN</a></tt>-<tt><a href="af-pos-CCONJ.html">CCONJ</a></tt> (902; 48% instances), <tt><a href="af-pos-VERB.html">VERB</a></tt>-<tt><a href="af-pos-CCONJ.html">CCONJ</a></tt> (370; 20% instances), <tt><a href="af-pos-ADJ.html">ADJ</a></tt>-<tt><a href="af-pos-CCONJ.html">CCONJ</a></tt> (149; 8% instances), <tt><a href="af-pos-ADP.html">ADP</a></tt>-<tt><a href="af-pos-CCONJ.html">CCONJ</a></tt> (110; 6% instances), <tt><a href="af-pos-X.html">X</a></tt>-<tt><a href="af-pos-CCONJ.html">CCONJ</a></tt> (108; 6% instances), <tt><a href="af-pos-PRON.html">PRON</a></tt>-<tt><a href="af-pos-CCONJ.html">CCONJ</a></tt> (51; 3% instances), <tt><a href="af-pos-AUX.html">AUX</a></tt>-<tt><a href="af-pos-CCONJ.html">CCONJ</a></tt> (44; 2% instances), <tt><a href="af-pos-ADV.html">ADV</a></tt>-<tt><a href="af-pos-CCONJ.html">CCONJ</a></tt> (35; 2% instances), <tt><a href="af-pos-PROPN.html">PROPN</a></tt>-<tt><a href="af-pos-CCONJ.html">CCONJ</a></tt> (30; 2% instances), <tt><a href="af-pos-NOUN.html">NOUN</a></tt>-<tt><a href="af-pos-SCONJ.html">SCONJ</a></tt> (26; 1% instances), <tt><a href="af-pos-SYM.html">SYM</a></tt>-<tt><a href="af-pos-CCONJ.html">CCONJ</a></tt> (17; 1% instances), <tt><a href="af-pos-ADJ.html">ADJ</a></tt>-<tt><a href="af-pos-SCONJ.html">SCONJ</a></tt> (14; 1% instances), <tt><a href="af-pos-DET.html">DET</a></tt>-<tt><a href="af-pos-CCONJ.html">CCONJ</a></tt> (10; 1% instances), <tt><a href="af-pos-VERB.html">VERB</a></tt>-<tt><a href="af-pos-SCONJ.html">SCONJ</a></tt> (6; 0% instances), <tt><a href="af-pos-NUM.html">NUM</a></tt>-<tt><a href="af-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="af-pos-ADV.html">ADV</a></tt>-<tt><a href="af-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="af-pos-ADP.html">ADP</a></tt>-<tt><a href="af-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="af-pos-AUX.html">AUX</a></tt>-<tt><a href="af-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="af-pos-PROPN.html">PROPN</a></tt>-<tt><a href="af-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="af-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="af-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="af-pos-SYM.html">SYM</a></tt>-<tt><a href="af-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="af-pos-X.html">X</a></tt>-<tt><a href="af-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cc	color:blue
1	Ons	ons	PRON	PEMP	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	vereis	vereis	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	0	root	_	_
3	uitnemendheid	uitnemendheid	NOUN	NA	Number=Sing	2	obj	_	_
4	en	en	CCONJ	KN	_	3	cc	_	_
5	harde	hard	ADJ	ASA	AdjType=Attr|Case=Nom|Degree=Pos	6	amod	_	_
6	werk	werk	NOUN	NA	Number=Sing	3	conj	_	SpaceAfter=No
7	.	.	PUNCT	ZE	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 cc	color:blue
1	Dit	dit	PRON	PDOENP	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	is	is	AUX	VTHOK	Tense=Pres|VerbForm=Fin,Inf|VerbType=Cop	4	cop	_	_
3	'n	'n	DET	LO	Definite=Ind|PronType=Art	4	det	_	_
4	ideaal	ideaal	NOUN	NSE	Number=Sing	0	root	_	_
5	waarvoor	waarvoor	PRON	PB	PronType=Rel	7	nsubj	_	_
6	ek	ek	PRON	PEENP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
7	hoop	hoop	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	4	ccomp	_	_
8	om	om	ADP	SVS	AdpType=Prep	10	case	_	_
9	te	te	PART	UPI	PartType=Inf	10	mark	_	_
10	lewe	lewe	VERB	VTHOO	Subcat=Intr|Tense=Pres|VerbForm=Fin,Inf	7	obl	_	_
11	en	en	CCONJ	KN	_	10	cc	_	_
12	te	te	PART	UPI	PartType=Inf	13	mark	_	_
13	bereik	bereik	VERB	VTHOO	Subcat=Intr|Tense=Pres|VerbForm=Fin,Inf	10	xcomp	_	SpaceAfter=No
14	.	.	PUNCT	ZE	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cc	color:blue
1	Ekonomiese	ekonomies	ADJ	ASA	AdjType=Attr|Case=Nom|Degree=Pos	3	amod	_	_
2	en	en	CCONJ	KN	_	1	cc	_	_
3	Bestuurswetenskappe	bestuurswetenskap	NOUN	NSM	Number=Plur	0	root	_	SpaceAfter=No
4	.	.	PUNCT	ZE	_	3	punct	_	_

~~~


