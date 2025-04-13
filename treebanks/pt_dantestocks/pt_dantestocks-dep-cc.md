---
layout: base
title:  'Statistics of cc in UD_Portuguese-DANTEStocks'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-DANTEStocks: Relations: `cc`

This relation is universal.

1699 nodes (2%) are attached to their parents as `cc`.

1697 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.73454973513832.

The following 17 pairs of parts of speech are connected with `cc`: <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-CCONJ.html">CCONJ</a></tt> (505; 30% instances), <tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_dantestocks-pos-CCONJ.html">CCONJ</a></tt> (415; 24% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-CCONJ.html">CCONJ</a></tt> (384; 23% instances), <tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_dantestocks-pos-CCONJ.html">CCONJ</a></tt> (223; 13% instances), <tt><a href="pt_dantestocks-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_dantestocks-pos-CCONJ.html">CCONJ</a></tt> (54; 3% instances), <tt><a href="pt_dantestocks-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_dantestocks-pos-CCONJ.html">CCONJ</a></tt> (41; 2% instances), <tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_dantestocks-pos-CCONJ.html">CCONJ</a></tt> (30; 2% instances), <tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_dantestocks-pos-CCONJ.html">CCONJ</a></tt> (22; 1% instances), <tt><a href="pt_dantestocks-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_dantestocks-pos-SYM.html">SYM</a></tt> (11; 1% instances), <tt><a href="pt_dantestocks-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_dantestocks-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="pt_dantestocks-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_dantestocks-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="pt_dantestocks-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_dantestocks-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pt_dantestocks-pos-X.html">X</a></tt>-<tt><a href="pt_dantestocks-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="pt_dantestocks-pos-DET.html">DET</a></tt>-<tt><a href="pt_dantestocks-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="pt_dantestocks-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_dantestocks-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	PETR4	PETR4	PROPN	_	_	3	nsubj	_	_
2	13	13	NUM	_	NumType=Card	3	nummod	_	_
3	reau	real	NOUN	_	Gender=Masc|Number=Sing|Typo=Yes	0	root	_	CorrectForm=reais|CorrectNumber=Plur|SpaceAfter=No
4	!	!	PUNCT	_	_	3	punct	_	_
5	e	e	CCONJ	_	_	6	cc	_	_
6	caindo	cair	VERB	_	VerbForm=Ger	3	conj	_	_
7	sem	sem	ADP	_	_	8	case	_	_
8	nocao	noção	NOUN	_	Gender=Fem|Number=Sing|Typo=Yes	6	obl	_	CorrectForm=noção
9	de	de	ADP	_	_	10	case	_	_
10	fundo	fundo	NOUN	_	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
11	...	...	PUNCT	_	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	esqueceram	esquecer	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	que	que	SCONJ	_	_	7	mark	_	_
3	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	#PRML3	#PRML3	PROPN	_	_	7	nsubj	_	_
5	ou	ou	CCONJ	_	_	6	cc	_	_
6	#LLXL3	#LLXL3	PROPN	_	_	4	conj	_	_
7	sairia	sair	VERB	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	1	ccomp	_	_
8	de	de	ADP	_	_	10	case	_	_
9	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	indice	índice	NOUN	_	Gender=Masc|Number=Sing|Typo=Yes	7	obl	_	CorrectForm=índice|SpaceAfter=No
11	?	?	PUNCT	_	_	1	punct	_	SpaceAfter=No
12	!	!	PUNCT	_	_	1	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	#PDGR3	#PDGR3	PROPN	_	_	2	nmod	_	_
2	Suportes	suporte	NOUN	_	Gender=Masc|Number=Plur	0	root	_	_
3	e	e	CCONJ	_	_	4	cc	_	_
4	resistências	resistência	NOUN	_	Gender=Fem|Number=Plur	2	conj	_	_
5	http://t.co/2HnLmAflrF	http://t.co/2HnLmAflrF	SYM	_	_	2	parataxis	_	SpaceAfter=No

~~~


