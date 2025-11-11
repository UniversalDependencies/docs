---
layout: base
title:  'Statistics of amod in UD_Old_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Old_French-ALTM: Relations: `amod`

This relation is universal.

209 nodes (1%) are attached to their parents as `amod`.

169 instances of `amod` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.03349282296651.

The following 3 pairs of parts of speech are connected with `amod`: <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt> (204; 98% instances), <tt><a href="fro_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="fro_altm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	a	à	ADP	_	_	4	case	_	prpos=S|uppos=P
2	l'	le	DET	_	Definite=Def|PronType=Art	4	det	_	prpos=Da|uppos=D
3	autre	autre	ADJ	_	_	4	amod	_	prpos=Ag|uppos=ADJ
4	assise	assise	NOUN	_	Number=Sing	7	obl	_	prpos=Nc|SpaceAfter=No|uppos=NCS
5	,	,	PUNCT	_	_	4	punct	_	join=left|prpos=Fw|uppos=PON
6	il	il	PRON	_	PronType=Prs	7	nsubj	_	prpos=Pp|uppos=PRO
7	vint	venir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=VJ
8	a	à	ADP	_	_	9	case	_	prpos=S|uppos=P
9	cort	cour	NOUN	_	Number=Sing	7	obl	_	prpos=Nc|uppos=NCS

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 amod	color:blue
1	quar	car	CCONJ	_	_	5	cc	_	prpos=Cc|uppos=CONJO
2	le	le	DET	_	Definite=Def|PronType=Art	3	det	_	prpos=Da|uppos=D
3	roy	roi	NOUN	_	Number=Sing	5	nsubj	_	prpos=Nc|uppos=NCS
4	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	5	cop	_	prpos=Vuc|uppos=EJ
5	juge	juge	NOUN	_	Number=Sing	0	root	_	prpos=Nc|uppos=NCS
6	de	de	ADP	_	_	7	case	_	prpos=S|uppos=P
7	soi	soi	PRON	_	PronType=Prs	5	nmod	_	prpos=Pp|uppos=PRO
8	meïsmes	même	ADJ	_	_	7	amod	_	prpos=Ag|uppos=ADJ
9	et	et	CCONJ	_	_	11	cc	_	prpos=Cc|uppos=CONJO
10	ne	ne	ADV	_	Polarity=Neg	11	advmod	_	prpos=Rp|uppos=NEG
11	veut	vouloir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	5	conj	_	prpos=Vvc|uppos=MDJ
12	fere	faire	VERB	_	VerbForm=Inf	11	xcomp	_	prpos=Vvn|uppos=VX
13	tort	tort	NOUN	_	Number=Sing	12	obj	_	prpos=Nc|uppos=NCS
14	a	à	ADP	_	_	16	case	_	prpos=S|uppos=P
15	nul	nul	DET	_	Definite=Ind	16	det	_	prpos=Di|uppos=D
16	homme	homme	NOUN	_	Number=Sing	12	obl	_	prpos=Nc|SpaceAfter=No|uppos=NCS
17	.	.	PUNCT	_	_	5	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 amod	color:blue
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


