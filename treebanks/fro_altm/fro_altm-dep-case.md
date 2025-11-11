---
layout: base
title:  'Statistics of case in UD_Old_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Old_French-ALTM: Relations: `case`

This relation is universal.

1535 nodes (10%) are attached to their parents as `case`.

1535 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66319218241042.

The following 8 pairs of parts of speech are connected with `case`: <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-ADP.html">ADP</a></tt> (1252; 82% instances), <tt><a href="fro_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="fro_altm-pos-ADP.html">ADP</a></tt> (243; 16% instances), <tt><a href="fro_altm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fro_altm-pos-ADP.html">ADP</a></tt> (14; 1% instances), <tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_altm-pos-ADP.html">ADP</a></tt> (8; 1% instances), <tt><a href="fro_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="fro_altm-pos-ADP.html">ADP</a></tt> (7; 0% instances), <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-ADV.html">ADV</a></tt> (7; 0% instances), <tt><a href="fro_altm-pos-NUM.html">NUM</a></tt>-<tt><a href="fro_altm-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="fro_altm-pos-DET.html">DET</a></tt>-<tt><a href="fro_altm-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 case	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	la	le	DET	_	Definite=Def|PronType=Art	2	det	_	prpos=Da|uppos=D
2	veüe	vue	NOUN	_	Number=Sing	4	nsubj	_	prpos=Nc|uppos=NCS
3	s'	se	PRON	_	PronType=Prs	4	expl	_	prpos=Pp|uppos=PRO
4	asist	asseoir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=VJ
5	entr'	entre	ADP	_	_	6	case	_	prpos=S|uppos=P
6	els	il	PRON	_	PronType=Ind	4	obl	_	prpos=Pi|SpaceAfter=No|uppos=PRO
7	.	.	PUNCT	_	_	4	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 case	color:blue
1	Jugié	juger	VERB	_	Tense=Past|VerbForm=Part	0	root	_	prpos=Ge|uppos=VPP
2	fut	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	1	aux:pass	_	prpos=Vuc|uppos=EJ
3	que	que	SCONJ	_	_	11	mark	_	prpos=Cs|uppos=CONJS
4	les	le	DET	_	Definite=Def|PronType=Art	5	det	_	prpos=Da|uppos=D
5	homme	homme	NOUN	_	Number=Plur	11	nsubj	_	prpos=Nc|uppos=NCPL
6	de	de	ADP	_	_	9	case	_	prpos=S|uppos=P
7	le	le	DET	_	Definite=Def|PronType=Art	9	det	_	prpos=Da|uppos=D
8	dit	dit	ADJ	_	_	9	amod	_	prpos=Ag|uppos=ADJ
9	Robert	Robert	PROPN	_	Number=Sing	5	nmod	_	prpos=Np|uppos=NPRS
10	seraient	être	AUX	_	Number=Plur|Person=3|VerbForm=Fin	11	aux:pass	_	prpos=Vuc|uppos=EJ
11	oïz	ouïr	VERB	_	Tense=Past|VerbForm=Part	1	ccomp	_	prpos=Ge|SpaceAfter=No|uppos=VPP
12	.	.	PUNCT	_	_	1	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


