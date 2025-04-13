---
layout: base
title:  'Statistics of xcomp in UD_Portuguese-DANTEStocks'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-DANTEStocks: Relations: `xcomp`

This relation is universal.

499 nodes (1%) are attached to their parents as `xcomp`.

497 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.54709418837675.

The following 10 pairs of parts of speech are connected with `xcomp`: <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (402; 81% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-ADJ.html">ADJ</a></tt> (54; 11% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt> (20; 4% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt> (8; 2% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="pt_dantestocks-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	já	já	ADV	_	_	2	advmod	_	_
2	imaginou	imaginar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	ver	ver	VERB	_	VerbForm=Inf	2	xcomp	_	_
4	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	#PETR4	#PETR4	PROPN	_	_	3	obj	_	_
6	voltando	voltar	VERB	_	VerbForm=Ger	5	acl	_	_
7	para	para	ADP	_	_	8	case	_	_
8	baixo	baixo	NOUN	_	Gender=Masc|Number=Sing	6	obl	_	_
9	de	de	ADP	_	_	11	case	_	_
10	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	11	det	_	_
11	R$	R$	SYM	_	_	8	nmod	_	SpaceAfter=No
12	13	13	NUM	_	NumType=Card	11	nummod	_	_
13	?	?	PUNCT	_	_	2	punct	_	_
14	=)	=)	SYM	_	_	2	discourse	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	OIBR4	OIBR4	PROPN	_	_	3	nsubj	_	_
2	vai	ir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	abrir	abrir	VERB	_	VerbForm=Inf	0	root	_	_
4	bombando	bombar	VERB	_	VerbForm=Ger	3	advcl	_	SpaceAfter=No
5	!	!	PUNCT	_	_	3	punct	_	SpaceAfter=No
6	!	!	PUNCT	_	_	3	punct	_	SpaceAfter=No
7	!	!	PUNCT	_	_	3	punct	_	_
8	Fiquem	ficar	VERB	_	Mood=Imp|Number=Plur|Person=3|VerbForm=Fin	3	parataxis	_	_
9	atentos	atento	ADJ	_	Gender=Masc|Number=Plur	8	xcomp	_	SpaceAfter=No
10	!	!	PUNCT	_	_	8	punct	_	SpaceAfter=No
11	!	!	PUNCT	_	_	8	punct	_	SpaceAfter=No
12	!	!	PUNCT	_	_	8	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	#BRAP4	#BRAP4	PROPN	_	_	2	nsubj	_	_
2	fica	ficar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	EX	ex-dividendo	NOUN	_	Abbr=Yes|Gender=Masc|Number=Sing	2	xcomp	_	FullForm=ex-dividendo
4	em	em	ADP	_	_	5	case	_	_
5	JCP	JCP	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
6	e	e	CCONJ	_	_	7	cc	_	_
7	Dividendos	dividendo	NOUN	_	Gender=Masc|Number=Plur	5	conj	_	_
8	hoje	hoje	ADV	_	_	2	advmod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


