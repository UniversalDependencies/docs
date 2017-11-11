---
layout: base
title:  'Statistics of nummod in UD_Afrikaans'
udver: '2'
---

## Treebank Statistics: UD_Afrikaans: Relations: `nummod`

This relation is universal.

461 nodes (1%) are attached to their parents as `nummod`.

461 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34056399132321.

The following 12 pairs of parts of speech are connected with `nummod`: <tt><a href="af-pos-NOUN.html">NOUN</a></tt>-<tt><a href="af-pos-DET.html">DET</a></tt> (205; 44% instances), <tt><a href="af-pos-NOUN.html">NOUN</a></tt>-<tt><a href="af-pos-NUM.html">NUM</a></tt> (149; 32% instances), <tt><a href="af-pos-NOUN.html">NOUN</a></tt>-<tt><a href="af-pos-ADJ.html">ADJ</a></tt> (51; 11% instances), <tt><a href="af-pos-NOUN.html">NOUN</a></tt>-<tt><a href="af-pos-SYM.html">SYM</a></tt> (45; 10% instances), <tt><a href="af-pos-DET.html">DET</a></tt>-<tt><a href="af-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="af-pos-NOUN.html">NOUN</a></tt>-<tt><a href="af-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="af-pos-NUM.html">NUM</a></tt>-<tt><a href="af-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="af-pos-NUM.html">NUM</a></tt>-<tt><a href="af-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="af-pos-PRON.html">PRON</a></tt>-<tt><a href="af-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="af-pos-PROPN.html">PROPN</a></tt>-<tt><a href="af-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="af-pos-SYM.html">SYM</a></tt>-<tt><a href="af-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="af-pos-VERB.html">VERB</a></tt>-<tt><a href="af-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	Dit	dit	PRON	PDOENP	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
2	het	het	AUX	VUOT	Tense=Pres|VerbForm=Fin,Inf|VerbType=Aux	10	aux	_	_
3	'n	'n	DET	LO	Definite=Ind|PronType=Art	4	det	_	_
4	verskil	verskil	NOUN	NSE	Number=Sing	10	obj	_	_
5	aan	aan	ADP	SVS	AdpType=Prep	7	case	_	_
6	baie	baie	DET	THAO	PronType=Ind	7	nummod	_	_
7	Suid-Afrikaners	Suid-Afrikaner	NOUN	NSM	Number=Plur	9	nmod	_	_
8	se	se	PART	UPS	PartType=Gen	7	case	_	_
9	lewens	lewe	NOUN	NSM	Number=Plur	10	obl	_	_
10	gemaak	maak	VERB	VVHOG	Subcat=Tran|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
11	.	.	PUNCT	ZE	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	In	in	ADP	SVS	AdpType=Prep	3	case	_	_
2	albei	albei	NUM	THAB	_	3	nummod	_	_
3	gevalle	geval	NOUN	NSM	Number=Plur	6	obl	_	_
4	is	is	AUX	VTHOK	Tense=Pres|VerbForm=Fin,Inf|VerbType=Cop	6	cop	_	_
5	die	die	DET	LB	Definite=Def|PronType=Art	6	det	_	_
6	privaatsektor	privaatsektor	NOUN	NSE	Number=Sing	0	root	_	_
7	ver	ver	ADV	BS	Degree=Pos	4	advmod	_	_
8	agter	agter	ADP	SVS	AdpType=Prep	4	amod	_	SpaceAfter=No
9	.	.	PUNCT	ZE	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	Verlede	verlede	ADJ	ASA	AdjType=Attr|Case=Nom|Degree=Pos	2	amod	_	_
2	jaar	jaar	NOUN	NSE	Number=Sing	11	nmod	_	_
3	het	het	AUX	VUOT	Tense=Pres|VerbForm=Fin,Inf|VerbType=Aux	11	aux	_	_
4	ons	ons	PRON	PEMP	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	11	nsubj	_	_
5	ons	ons	PRON	PEMB	Number=Plur|Person=1|Poss=Yes|PronType=Prs	7	det	_	_
6	eerste	eerste	ADJ	TRAB	AdjType=Attr|Case=Nom|Degree=Pos	7	nummod	_	_
7	resessie	resessie	NOUN	NSE	Number=Sing	11	obj	_	_
8	in	in	ADP	SVS	AdpType=Prep	10	case	_	_
9	17	17	SYM	RS	_	10	nummod	_	_
10	jaar	jaar	NOUN	NSE	Number=Sing	11	obl	_	_
11	ervaar	ervaar	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	0	root	_	SpaceAfter=No
12	.	.	PUNCT	ZE	_	11	punct	_	_

~~~


