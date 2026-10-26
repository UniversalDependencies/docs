---
layout: base
title:  'Statistics of det in UD_Old_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Old_French-ALTM: Relations: `det`

This relation is universal.

2014 nodes (13%) are attached to their parents as `det`.

2014 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07944389275074.

The following 6 pairs of parts of speech are connected with `det`: <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-DET.html">DET</a></tt> (1810; 90% instances), <tt><a href="fro_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="fro_altm-pos-DET.html">DET</a></tt> (188; 9% instances), <tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_altm-pos-DET.html">DET</a></tt> (9; 0% instances), <tt><a href="fro_altm-pos-NUM.html">NUM</a></tt>-<tt><a href="fro_altm-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="fro_altm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fro_altm-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Item	item	ADV	_	_	6	advmod	_	prpos=Rg|SpaceAfter=No|uppos=ADV
2	,	,	PUNCT	_	_	1	punct	_	join=left|prpos=Fw|uppos=PON
3	uns	un	DET	_	Definite=Ind|PronType=Art	4	det	_	prpos=Dn|uppos=D
4	hons	homme	NOUN	_	Number=Sing	6	nsubj	_	prpos=Nc|uppos=NCS
5	estoit	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	6	aux:pass	_	prpos=Vuc|uppos=EJ
6	semons	semondre	VERB	_	Tense=Past|VerbForm=Part	0	root	_	prpos=Ge|uppos=VPP
7	a	à	ADP	_	_	9	case	_	prpos=S|uppos=P
8	les	le	DET	_	Definite=Def|PronType=Art	9	det	_	prpos=Da|uppos=D
9	erremens	errement	NOUN	_	Number=Plur	6	obl	_	prpos=Nc|uppos=NCPL
10	de	de	ADP	_	_	12	case	_	prpos=S|uppos=P
11	son	son	DET	_	Poss=Yes	12	det	_	prpos=Ds|uppos=DZ
12	pere	père	NOUN	_	Number=Sing	9	nmod	_	prpos=Nc|SpaceAfter=No|uppos=NCS
13	;	;	PUNCT	_	_	6	punct	_	join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 det	color:blue
1	Item	item	ADV	_	_	5	advmod	_	prpos=Rg|SpaceAfter=No|uppos=ADV
2	,	,	PUNCT	_	_	1	punct	_	join=left|prpos=Fw|uppos=PON
3	un	un	DET	_	Definite=Ind|PronType=Art	4	det	_	prpos=Dn|uppos=D
4	homme	homme	NOUN	_	Number=Sing	5	nsubj	_	prpos=Nc|uppos=NCS
5	estoit	être	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vuc|uppos=EJ
6	en	en	ADP	_	_	8	case	_	prpos=S|uppos=P
7	ij.	deux	NUM	_	NumType=Card	8	nummod	_	prpos=Mc|uppos=ADJNUM
8	deffautes	défaute	NOUN	_	Number=Plur	5	obl	_	prpos=Nc|uppos=NCPL
9	vers	vers	ADP	_	_	11	case	_	prpos=S|uppos=P
10	un	un	DET	_	Definite=Ind|PronType=Art	11	det	_	prpos=Dn|uppos=D
11	autre	autre	PRON	_	PronType=Ind	5	obl	_	prpos=Pi|SpaceAfter=No|uppos=PRO
12	;	;	PUNCT	_	_	5	punct	_	join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	et	et	CCONJ	_	_	3	cc	_	prpos=Cc|uppos=CONJO
2	n'	ne	ADV	_	Polarity=Neg	3	advmod	_	prpos=Rp|uppos=NEG
3	out	avoir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vuc|uppos=AJ
4	nul	nul	DET	_	Definite=Ind	5	det	_	prpos=Di|uppos=D
5	enfant	enfant	NOUN	_	Number=Sing	3	obj	_	prpos=Nc|uppos=NCS
6	le	le	DET	_	Definite=Def|PronType=Art	7	det	_	prpos=Da|uppos=D
7	puisné	puîné	ADJ	_	_	3	nsubj	_	prpos=Ag|uppos=ADJ
8	de	de	ADP	_	_	10	case	_	prpos=S|uppos=P
9	les	le	DET	_	Definite=Def|PronType=Art	10	det	_	prpos=Da|uppos=D
10	iij.	trois	NUM	_	NumType=Card	7	nmod	_	prpos=Mc|SpaceAfter=No|uppos=NUM
11	;	;	PUNCT	_	_	3	punct	_	join=left|prpos=Fw|uppos=PON

~~~


