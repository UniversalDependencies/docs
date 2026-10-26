---
layout: base
title:  'Statistics of nsubj in UD_Old_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Old_French-ALTM: Relations: `nsubj`

This relation is universal.

1515 nodes (10%) are attached to their parents as `nsubj`.

1436 instances of `nsubj` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.31287128712871.

The following 11 pairs of parts of speech are connected with `nsubj`: <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-PRON.html">PRON</a></tt> (859; 57% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (577; 38% instances), <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-PRON.html">PRON</a></tt> (33; 2% instances), <tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_altm-pos-PRON.html">PRON</a></tt> (13; 1% instances), <tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (11; 1% instances), <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="fro_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fro_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	il	il	PRON	_	PronType=Prs	3	nsubj	_	prpos=Pp|uppos=PRO
2	se	se	PRON	_	PronType=Prs	3	expl	_	prpos=Pp|uppos=PRO
3	lessa	laisser	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=VJ
4	metre	mettre	VERB	_	VerbForm=Inf	3	xcomp	_	prpos=Vvn|uppos=VX
5	en	en	ADP	_	_	6	case	_	prpos=S|uppos=P
6	defaute	défaute	NOUN	_	Number=Sing	4	obl	_	prpos=Nc|SpaceAfter=No|uppos=NCS
7	;	;	PUNCT	_	_	3	punct	_	join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nsubj	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Ce	ce	PRON	_	PronType=Dem	4	nsubj	_	prpos=Pd|uppos=PRO
2	sont	être	AUX	_	Number=Plur|Person=3|VerbForm=Fin	4	cop	_	prpos=Vuc|uppos=EJ
3	les	le	DET	_	Definite=Def|PronType=Art	4	det	_	prpos=Da|uppos=D
4	cas	cas	NOUN	_	Number=Plur	0	root	_	prpos=Nc|uppos=NCPL
5	especials	espécial	ADJ	_	_	4	amod	_	prpos=Ag|uppos=ADJ
6	ou	où	PRON	_	PronType=Rel	9	obl	_	prpos=Pr|uppos=WPRO
7	il	il	PRON	_	PronType=Prs	9	expl	_	prpos=Pp|uppos=PRO
8	n'	ne	ADV	_	Polarity=Neg	9	advmod	_	prpos=Rp|uppos=NEG
9	a	avoir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	4	acl:relcl	_	prpos=Vuc|uppos=AJ
10	point	point	ADV	_	Polarity=Neg	9	advmod	_	prpos=Rg|uppos=ADVNEG
11	de	de	DET	_	Definite=Ind	12	det	_	prpos=Dn|uppos=D
12	respit	répit	NOUN	_	Number=Sing	9	obj	_	prpos=Nc|SpaceAfter=No|uppos=NCS
13	.	.	PUNCT	_	_	4	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


