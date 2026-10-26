---
layout: base
title:  'Statistics of advcl in UD_Old_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Old_French-ALTM: Relations: `advcl`

This relation is universal.

401 nodes (3%) are attached to their parents as `advcl`.

210 instances of `advcl` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.9850374064838.

The following 8 pairs of parts of speech are connected with `advcl`: <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-VERB.html">VERB</a></tt> (359; 90% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (14; 3% instances), <tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_altm-pos-VERB.html">VERB</a></tt> (8; 2% instances), <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-VERB.html">VERB</a></tt> (7; 2% instances), <tt><a href="fro_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="fro_altm-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 advcl	color:blue
1	le	le	DET	_	Definite=Def|PronType=Art	2	det	_	prpos=Da|uppos=D
2	deffendeor	défendeur	NOUN	_	Number=Sing	3	nsubj	_	prpos=Nc|uppos=NCS
3	proposoit	proposer	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=VJ
4	plusors	plusieurs	DET	_	Definite=Ind	5	det	_	prpos=Di|uppos=Q
5	articles	article	NOUN	_	Number=Plur	3	obl	_	prpos=Nc|uppos=NCPL
6	por	pour	ADP	_	_	9	mark	_	prpos=S|uppos=P
7	le	le	DET	_	Definite=Def|PronType=Art	8	det	_	prpos=Da|uppos=D
8	brief	bref	NOUN	_	Number=Sing	9	obj	_	prpos=Nc|uppos=NCS
9	abatre	abattre	VERB	_	VerbForm=Inf	3	advcl	_	prpos=Vvn|SpaceAfter=No|uppos=VX
10	.	.	PUNCT	_	_	3	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 19 advcl	color:blue
1	Son	son	DET	_	Poss=Yes	2	det	_	prpos=Ds|uppos=DZ
2	nevou	neveu	NOUN	_	Number=Sing	3	nsubj	_	prpos=Nc|uppos=NCS
3	demanda	demander	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=VJ
4	les	le	DET	_	Definite=Def|PronType=Art	6	det	_	prpos=Da|uppos=D
5	iij.	trois	NUM	_	NumType=Card	6	nummod	_	prpos=Mc|uppos=ADJNUM
6	mines	mine	NOUN	_	Number=Plur	3	obj	_	prpos=Nc|uppos=NCPL
7	d'	de	ADP	_	_	8	case	_	prpos=S|uppos=P
8	orge	orge	NOUN	_	Number=Sing	6	nmod	_	prpos=Nc|uppos=NCS
9	par	par	ADP	_	_	11	case	_	prpos=S|uppos=P
10	la	le	DET	_	Definite=Def|PronType=Art	11	det	_	prpos=Da|uppos=D
11	borse	bourse	NOUN	_	Number=Sing	3	obl	_	prpos=Nc|uppos=NCS
12	si	si	ADV	_	ExtPos=SCONJ	19	mark	_	prpos=Rg|uppos=ADV
13	comme	comme	SCONJ	_	_	12	fixed	_	prpos=Cs|uppos=CONJS
14	il	il	PRON	_	PronType=Prs	19	nsubj	_	prpos=Pp|uppos=PRO
15	estoit	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	19	cop	_	prpos=Vuc|uppos=EJ
16	le	le	DET	_	Definite=Def|PronType=Art	19	det	_	prpos=Da|uppos=D
17	plus	plus	ADV	_	_	18	advmod	_	prpos=Rg|uppos=ADV
18	prochain	prochain	ADJ	_	_	19	amod	_	prpos=Ag|uppos=ADJ
19	hoir	hoir	NOUN	_	Number=Sing	3	advcl	_	prpos=Nc|uppos=NCS
20	de	de	ADP	_	_	21	case	_	prpos=S|uppos=P
21	cele	cil	PRON	_	PronType=Dem	19	nmod	_	prpos=Pd|uppos=PRO
22	qui	qui	PRON	_	PronType=Rel	24	nsubj	_	prpos=Pr|uppos=WPRO
23	le	il	PRON	_	PronType=Prs	24	obj	_	prpos=Pp|uppos=PRO
24	vendi	vendre	VERB	_	Number=Sing|Person=3|VerbForm=Fin	21	acl:relcl	_	prpos=Vvc|SpaceAfter=No|uppos=VJ
25	.	.	PUNCT	_	_	3	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 advcl	color:blue
1	Jugié	juger	VERB	_	Tense=Past|VerbForm=Part	0	root	_	prpos=Ge|uppos=VPP
2	fu	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	1	aux:pass	_	prpos=Vuc|uppos=EJ
3	que	que	SCONJ	_	_	7	mark	_	prpos=Cs|uppos=CONJS
4	li	le	DET	_	Definite=Def|PronType=Art	5	det	_	prpos=Da|uppos=D
5	don	don	NOUN	_	Number=Sing	7	nsubj	_	prpos=Nc|uppos=NCS
6	estoit	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	7	cop	_	prpos=Vuc|uppos=EJ
7	bon	bon	ADJ	_	_	1	ccomp	_	prpos=Ag|uppos=ADJ
8	quant	quand	SCONJ	_	_	12	mark	_	prpos=Cs|uppos=CONJS
9	le	le	DET	_	Definite=Def|PronType=Art	10	det	_	prpos=Da|uppos=D
10	mariage	mariage	NOUN	_	Number=Sing	12	nsubj	_	prpos=Nc|uppos=NCS
11	estoit	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	12	aux:pass	_	prpos=Vuc|uppos=EJ
12	fet	faire	VERB	_	Tense=Past|VerbForm=Part	7	advcl	_	prpos=Ge|uppos=VPP
13	sus	sus	ADP	_	_	14	case	_	prpos=S|uppos=P
14	cen	ce	PRON	_	PronType=Dem	12	obl	_	prpos=Pd|uppos=PRO
15	et	et	CCONJ	_	_	20	cc	_	prpos=Cc|uppos=CONJO
16	il	il	PRON	_	PronType=Prs	20	nsubj	_	prpos=Pp|uppos=PRO
17	n'	ne	ADV	_	Polarity=Neg	20	advmod	_	prpos=Rp|uppos=NEG
18	avoit	avoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	20	aux	_	prpos=Vuc|uppos=AJ
19	pas	pas	ADV	_	Polarity=Neg	20	advmod	_	prpos=Rg|uppos=ADVNEG
20	donné	donner	VERB	_	Tense=Past|VerbForm=Part	7	conj	_	prpos=Ge|uppos=VPP
21	plus	plus	ADV	_	_	20	advmod	_	prpos=Rg|uppos=ADV
22	que	que	SCONJ	_	_	24	mark	_	prpos=Cs|uppos=CONJS
23	le	le	DET	_	Definite=Def|PronType=Art	24	det	_	prpos=Da|uppos=D
24	tiers	tiers	NOUN	_	Number=Sing	20	obj	_	prpos=Nc|uppos=NCS
25	de	de	ADP	_	_	27	case	_	prpos=S|uppos=P
26	sa	son	DET	_	Poss=Yes	27	det	_	prpos=Ds|uppos=DZ
27	terre	terre	NOUN	_	Number=Sing	24	nmod	_	prpos=Nc|SpaceAfter=No|uppos=NCS
28	.	.	PUNCT	_	_	1	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


