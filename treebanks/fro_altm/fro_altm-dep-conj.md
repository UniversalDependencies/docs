---
layout: base
title:  'Statistics of conj in UD_Old_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Old_French-ALTM: Relations: `conj`

This relation is universal.

618 nodes (4%) are attached to their parents as `conj`.

618 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.4288025889968.

The following 18 pairs of parts of speech are connected with `conj`: <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-VERB.html">VERB</a></tt> (358; 58% instances), <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (163; 26% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (18; 3% instances), <tt><a href="fro_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (13; 2% instances), <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-VERB.html">VERB</a></tt> (11; 2% instances), <tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_altm-pos-VERB.html">VERB</a></tt> (9; 1% instances), <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-PRON.html">PRON</a></tt> (9; 1% instances), <tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="fro_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="fro_altm-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="fro_altm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="fro_altm-pos-NUM.html">NUM</a></tt>-<tt><a href="fro_altm-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fro_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fro_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="fro_altm-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 conj	color:blue
1	il	il	PRON	_	PronType=Prs	2	nsubj	_	prpos=Pp|uppos=PRO
2	vint	venir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=VJ
3	a	à	ADP	_	_	4	case	_	prpos=S|uppos=P
4	court	cour	NOUN	_	Number=Sing	2	obl	_	prpos=Nc|uppos=NCS
5	et	et	CCONJ	_	_	6	cc	_	prpos=Cc|uppos=CONJO
6	gaja	gager	VERB	_	Number=Sing|Person=3|VerbForm=Fin	2	conj	_	prpos=Vvc|uppos=VJ
7	loy	loi	NOUN	_	Number=Sing	6	obj	_	prpos=Nc|uppos=NCS
8	vers	vers	ADP	_	_	10	case	_	prpos=S|uppos=P
9	le	le	DET	_	Definite=Def|PronType=Art	10	det	_	prpos=Da|uppos=D
10	serjant	sergent	NOUN	_	Number=Sing	6	obl	_	prpos=Nc|uppos=NCS
11	de	de	ADP	_	_	13	case	_	prpos=S|uppos=P
12	l'	le	DET	_	Definite=Def|PronType=Art	13	det	_	prpos=Da|uppos=D
13	ajornement	ajournement	NOUN	_	Number=Sing	7	nmod	_	prpos=Nc|SpaceAfter=No|uppos=NCS
14	;	;	PUNCT	_	_	2	punct	_	join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 conj	color:blue
1	L'	le	DET	_	Definite=Def|PronType=Art	2	det	_	prpos=Da|uppos=D
2	omme	homme	NOUN	_	Number=Sing	3	nsubj	_	prpos=Nc|uppos=NCS
3	prist	prendre	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=VJ
4	un	un	DET	_	Definite=Ind|PronType=Art	5	det	_	prpos=Dn|uppos=D
5	brief	bref	NOUN	_	Number=Sing	3	obj	_	prpos=Nc|uppos=NCS
6	de	de	ADP	_	_	7	case	_	prpos=S|uppos=P
7	fie	fief	NOUN	_	Number=Sing	5	nmod	_	prpos=Nc|uppos=NCS
8	lay	lai	ADJ	_	_	7	amod	_	prpos=Ag|uppos=ADJ
9	et	et	CCONJ	_	_	11	cc	_	prpos=Cc|uppos=CONJO
10	de	de	ADP	_	_	11	case	_	prpos=S|uppos=P
11	aumosne	aumône	NOUN	_	Number=Sing	7	conj	_	prpos=Nc|uppos=NCS

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 conj	color:blue
1	la	le	DET	_	Definite=Def|PronType=Art	2	det	_	prpos=Da|uppos=D
2	mere	mère	NOUN	_	Number=Sing	3	nsubj	_	prpos=Nc|uppos=NCS
3	mourut	mourir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=VJ
4	toute	tout	ADV	_	_	5	advmod	_	prpos=Rg|uppos=ADV
5	saisie	saisir	VERB	_	Tense=Past|VerbForm=Part	3	xcomp	_	prpos=Ge|uppos=VPP
6	et	et	CCONJ	_	_	9	cc	_	prpos=Cc|uppos=CONJO
7	en	en	ADP	_	_	9	case	_	prpos=S|uppos=P
8	l'	le	DET	_	Definite=Def|PronType=Art	9	det	_	prpos=Da|uppos=D
9	hommage	hommage	NOUN	_	Number=Sing	5	conj	_	prpos=Nc|uppos=NCS
10	de	de	ADP	_	_	12	case	_	prpos=S|uppos=P
11	les	le	DET	_	Definite=Def|PronType=Art	12	det	_	prpos=Da|uppos=D
12	seignors	seigneur	NOUN	_	Number=Plur	9	nmod	_	prpos=Nc|uppos=NCPL
13	de	de	ADP	_	_	16	case	_	prpos=S|uppos=P
14	le	le	DET	_	Definite=Def|PronType=Art	16	det	_	prpos=Da|uppos=D
15	dit	dit	ADJ	_	_	16	amod	_	prpos=Ag|uppos=ADJ
16	heritage	héritage	NOUN	_	Number=Sing	12	nmod	_	prpos=Nc|SpaceAfter=No|uppos=NCS
17	,	,	PUNCT	_	_	3	punct	_	join=left|prpos=Fw|uppos=PON

~~~


