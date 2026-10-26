---
layout: base
title:  'Statistics of cop in UD_Old_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Old_French-ALTM: Relations: `cop`

This relation is universal.

82 nodes (1%) are attached to their parents as `cop`.

78 instances of `cop` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.15853658536585.

The following 4 pairs of parts of speech are connected with `cop`: <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-AUX.html">AUX</a></tt> (51; 62% instances), <tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_altm-pos-AUX.html">AUX</a></tt> (29; 35% instances), <tt><a href="fro_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="fro_altm-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="fro_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="fro_altm-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
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


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cop	color:blue
1	Jugié	juger	VERB	_	Tense=Past|VerbForm=Part	0	root	_	prpos=Ge|uppos=VPP
2	fu	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	1	aux:pass	_	prpos=Vuc|uppos=EJ
3	que	que	SCONJ	_	_	7	mark	_	prpos=Cs|uppos=CONJS
4	le	le	DET	_	Definite=Def|PronType=Art	5	det	_	prpos=Da|uppos=D
5	desbours	débours	NOUN	_	Number=Sing	7	nsubj	_	prpos=Nc|uppos=NCS
6	estoit	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	7	cop	_	prpos=Vuc|uppos=EJ
7	bon	bon	ADJ	_	_	1	ccomp	_	prpos=Ag|uppos=ADJ
8	et	et	CCONJ	_	_	9	cc	_	prpos=Cc|uppos=CONJO
9	loial	loyal	ADJ	_	_	7	conj	_	prpos=Ag|SpaceAfter=No|uppos=ADJ
10	.	.	PUNCT	_	_	1	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 cop	color:blue
1	Et	et	CCONJ	_	_	7	cc	_	prpos=Cc|uppos=CONJO
2	ce	ce	PRON	_	PronType=Dem	3	nsubj	_	prpos=Pd|uppos=PRO
3	pendant	pendre	VERB	_	Tense=Pres|VerbForm=Part	7	advcl	_	prpos=Ga|SpaceAfter=No|uppos=VG
4	,	,	PUNCT	_	_	7	punct	_	join=left|prpos=Fw|uppos=PON
5	le	le	DET	_	Definite=Def|PronType=Art	6	det	_	prpos=Da|uppos=D
6	tenant	tenant	NOUN	_	Number=Sing	7	nsubj	_	prpos=Nc|uppos=NCS
7	prist	prendre	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=VJ
8	un	un	DET	_	Definite=Ind|PronType=Art	9	det	_	prpos=Dn|uppos=D
9	brief	bref	NOUN	_	Number=Sing	7	obj	_	prpos=Nc|uppos=NCS
10	de	de	ADP	_	_	12	case	_	prpos=S|uppos=P
11	haute	haut	ADJ	_	_	12	amod	_	prpos=Ag|uppos=ADJ
12	establie	établie	NOUN	_	Number=Sing	9	nmod	_	prpos=Nc|uppos=NCS
13	a	à	ADP	_	_	15	case	_	prpos=S|uppos=P
14	le	le	DET	_	Definite=Def|PronType=Art	15	det	_	prpos=S|uppos=P
15	quel	quel	PRON	_	PronType=Rel	18	obl	_	prpos=Pr|uppos=WPRO
16	il	il	PRON	_	PronType=Prs	18	expl	_	prpos=Pp|uppos=PRO
17	estoit	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	18	aux:pass	_	prpos=Vuc|uppos=EJ
18	contenu	contenir	VERB	_	Tense=Past|VerbForm=Part	9	acl:relcl	_	prpos=Ge|uppos=VPP
19	que	que	SCONJ	_	_	20	mark	_	prpos=Cs|uppos=CONJS
20	miex	mieux	ADV	_	_	18	advmod	_	prpos=Rg|uppos=ADV
21	estoit	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	20	cop	_	prpos=Vuc|uppos=EJ
22	son	son	DET	_	Poss=Yes	23	det	_	prpos=Ds|uppos=DZ
23	droit	droit	NOUN	_	Number=Sing	25	obj	_	prpos=Nc|uppos=NCS
24	a	à	ADP	_	_	25	mark	_	prpos=S|uppos=P
25	tenir	tenir	VERB	_	VerbForm=Inf	20	xcomp	_	prpos=Vvn|uppos=VX
26	que	que	SCONJ	_	_	29	mark	_	prpos=Cs|uppos=CONJS
27	cil	cil	PRON	_	PronType=Dem	29	obj	_	prpos=Pd|uppos=PRO
28	a	à	ADP	_	_	29	mark	_	prpos=S|uppos=P
29	avoir	avoir	VERB	_	VerbForm=Inf	25	advcl	_	prpos=Vun|uppos=AX
30	qui	qui	PRON	_	PronType=Rel	31	nsubj	_	prpos=Pr|uppos=WPRO
31	demandoit	demander	VERB	_	Number=Sing|Person=3|VerbForm=Fin	27	acl:relcl	_	prpos=Vvc|SpaceAfter=No|uppos=VJ
32	.	.	PUNCT	_	_	7	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


