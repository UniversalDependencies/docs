---
layout: base
title:  'Statistics of csubj in UD_Portuguese-DANTEStocks'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-DANTEStocks: Relations: `csubj`

This relation is universal.

104 nodes (0%) are attached to their parents as `csubj`.

90 instances of `csubj` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.81730769230769.

The following 9 pairs of parts of speech are connected with `csubj`: <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (53; 51% instances), <tt><a href="pt_dantestocks-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (18; 17% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (16; 15% instances), <tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (9; 9% instances), <tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_dantestocks-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj	color:blue
1	já	já	ADV	_	_	2	advmod	_	_
2	pode	poder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	emitir	emitir	VERB	_	VerbForm=Inf	2	csubj	_	_
4	atestado	atestado	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
5	de	de	ADP	_	_	6	case	_	_
6	óbito	óbito	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_
7	de	de	ADP	_	_	9	case	_	_
8	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	#PETR4	#PETR4	PROPN	_	_	6	nmod	_	_
10	?	?	PUNCT	_	_	2	punct	_	_
11	o.O	o.O	SYM	_	_	2	discourse	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 csubj	color:blue
1	#OIBR4	#OIBR4	PROPN	_	_	4	nsubj	_	_
2	e	e	CCONJ	_	_	3	cc	_	_
3	#POMO4	#POMO4	PROPN	_	_	1	conj	_	_
4	afundando	afundar	VERB	_	VerbForm=Ger	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	triste	triste	ADJ	_	Number=Sing	4	parataxis	_	_
7	ver	ver	VERB	_	VerbForm=Inf	6	csubj	_	_
8	isso	isso	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	7	obj	_	_
9	acontecer	acontecer	VERB	_	VerbForm=Inf	7	xcomp	_	_
10	com	com	ADP	_	_	12	case	_	_
11	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	papel	papel	NOUN	_	Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 csubj	color:blue
1	@stancatiTrader	@stancatiTrader	PROPN	_	_	5	vocative	_	_
2	@MWpatterns	@MWpatterns	PROPN	_	_	5	vocative	_	_
3	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
4	unica	único	ADJ	_	Gender=Fem|Number=Sing|Typo=Yes	5	amod	_	CorrectForm=única
5	certeza	certeza	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
6	que	que	SCONJ	_	_	9	mark	_	_
7	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	VALE5	VALE5	PROPN	_	_	9	nsubj	_	_
9	cai	cair	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	csubj	_	_
10	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	resto	resto	NOUN	_	Gender=Masc|Number=Sing	13	nsubj	_	_
12	ta	estar	AUX	_	Abbr=Yes|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	13	cop	_	CorrectForm=tá|FullForm=está
13	foda	foda	NOUN	_	Gender=Fem|Number=Sing	5	conj	_	_
14	mesmo	mesmo	ADV	_	_	13	advmod	_	SpaceAfter=No

~~~


