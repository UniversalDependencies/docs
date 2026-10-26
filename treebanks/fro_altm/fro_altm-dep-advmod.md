---
layout: base
title:  'Statistics of advmod in UD_Old_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Old_French-ALTM: Relations: `advmod`

This relation is universal.

845 nodes (6%) are attached to their parents as `advmod`.

703 instances of `advmod` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.86153846153846.

The following 7 pairs of parts of speech are connected with `advmod`: <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-ADV.html">ADV</a></tt> (753; 89% instances), <tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_altm-pos-ADV.html">ADV</a></tt> (37; 4% instances), <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-ADV.html">ADV</a></tt> (33; 4% instances), <tt><a href="fro_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="fro_altm-pos-ADV.html">ADV</a></tt> (17; 2% instances), <tt><a href="fro_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="fro_altm-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 advmod	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod	color:blue
1	et	et	CCONJ	_	_	2	cc	_	prpos=Cc|uppos=CONJO
2	meïstes	mettre	VERB	_	Number=Plur|Person=2|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=VJ
3	les	le	DET	_	Definite=Def|PronType=Art	4	det	_	prpos=Da|uppos=D
4	pleges	pleige	NOUN	_	Number=Plur	2	obj	_	prpos=Nc|uppos=NCPL
5	en	en	ADP	_	_	8	case	_	prpos=S|uppos=P
6	si	si	ADV	_	_	7	advmod	_	prpos=Rg|uppos=ADV
7	haut	haut	ADJ	_	_	8	amod	_	prpos=Ag|uppos=ADJ
8	lieu	lieu	NOUN	_	Number=Sing	2	obl	_	prpos=Nc|uppos=NCS
9	comme	comme	ADP	_	_	12	case	_	prpos=S|uppos=P
10	en	en	ADP	_	_	12	case	_	prpos=S|uppos=P
11	l'	le	DET	_	Definite=Def|PronType=Art	12	det	_	prpos=Da|uppos=D
12	eschequier	échiquier	NOUN	_	Number=Sing	8	nmod	_	prpos=Nc|SpaceAfter=No|uppos=NCS
13	,	,	PUNCT	_	_	2	punct	_	join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 advmod	color:blue
1	l'	le	DET	_	Definite=Def|PronType=Art	2	det	_	prpos=Da|uppos=D
2	omme	homme	NOUN	_	Number=Sing	3	nsubj	_	prpos=Nc|uppos=NCS
3	ne	ne	ADV	_	Polarity=Neg	4	advmod	_	prpos=Rp|uppos=NEG
4	vouloit	vouloir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=MDJ
5	paier	payer	VERB	_	VerbForm=Inf	4	xcomp	_	prpos=Vvn|uppos=VX
6	disme	dîme	NOUN	_	Number=Sing	5	obj	_	prpos=Nc|uppos=NCS
7	que	que	ADV	_	_	11	advmod	_	prpos=Rg|uppos=ADV
8	de	de	ADP	_	_	11	case	_	prpos=S|uppos=P
9	la	le	DET	_	Definite=Def|PronType=Art	11	det	_	prpos=Da|uppos=D
10	premiere	premier	ADJ	_	NumType=Ord	11	amod	_	prpos=Mo|uppos=ADJNUM
11	tonture	tonture	NOUN	_	Number=Sing	5	obl	_	prpos=Nc|SpaceAfter=No|uppos=NCS
12	,	,	PUNCT	_	_	5	punct	_	join=left|prpos=Fw|uppos=PON

~~~


