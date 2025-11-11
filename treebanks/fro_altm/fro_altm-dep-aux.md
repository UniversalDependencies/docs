---
layout: base
title:  'Statistics of aux in UD_Old_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Old_French-ALTM: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="fro_altm-dep-aux-pass.html">aux:pass</a></tt>.

434 nodes (3%) are attached to their parents as `aux`.

432 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44470046082949.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-AUX.html">AUX</a></tt> (429; 99% instances), <tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_altm-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_altm-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	Adonc	adonc	ADV	_	_	2	advmod	_	prpos=Rg|uppos=ADV
2	voult	vouloir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=MDJ
3	le	le	DET	_	Definite=Def|PronType=Art	4	det	_	prpos=Da|uppos=D
4	suitour	suiteur	NOUN	_	Number=Sing	2	nsubj	_	prpos=Nc|uppos=NCS
5	avoir	avoir	AUX	_	VerbForm=Inf	6	aux	_	prpos=Vun|uppos=AX
6	ataint	atteindre	VERB	_	Tense=Past|VerbForm=Part	2	xcomp	_	prpos=Ge|uppos=VPP
7	ce	ce	PRON	_	PronType=Dem	6	obj	_	prpos=Pd|uppos=PRO
8	qui	qui	PRON	_	PronType=Rel	9	nsubj	_	prpos=Pr|uppos=WPRO
9	pendoit	pendre	VERB	_	Number=Sing|Person=3|VerbForm=Fin	7	acl:relcl	_	prpos=Vvc|uppos=VJ
10	a	à	ADP	_	_	12	case	_	prpos=S|uppos=P
11	le	le	DET	_	Definite=Def|PronType=Art	12	det	_	prpos=Da|uppos=D
12	brief	bref	NOUN	_	Number=Sing	9	obl	_	prpos=Nc|uppos=NCS

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 26 aux	color:blue
1	Mais	mais	CCONJ	_	_	30	cc	_	SpaceAfter=No
2	,	,	PUNCT	_	_	30	punct	_	join=left|prpos=Fs|uppos=PONFP
3	se	si	SCONJ	_	_	15	mark	_	join=left|prpos=Fs|uppos=PONFP
4	la	la	DET	_	Definite=Def	5	det	_	_
5	cause	cause	NOUN	_	_	15	nsubj	_	_
6	de	de	ADP	_	_	7	case	_	_
7	quoi	quoi	PRON	_	PronType=Rel	12	obl	_	_
8	le	le	DET	_	Definite=Def|PronType=Art	9	det	_	_
9	mariage	mariage	NOUN	_	_	12	nsubj	_	_
10	avoit	avoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	12	aux	_	_
11	esté	être	AUX	_	Tense=Past|VerbForm=Part	12	aux:pass	_	_
12	departi	départir	VERB	_	Tense=Past|VerbForm=Part	5	acl:relcl	_	_
13	eüst	avoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	15	aux	_	join=left|prpos=Fs|uppos=PONFP
14	esté	être	AUX	_	Tense=Past|VerbForm=Part	15	aux:pass	_	_
15	fete	faire	VERB	_	Tense=Past|VerbForm=Part	30	advcl	_	join=left|prpos=Fs|uppos=PONFP
16	a	à	ADP	_	_	18	case	_	join=left|prpos=Fs|uppos=PONFP
17	le	le	DET	_	Definite=Def|PronType=Art	18	det	_	join=left|prpos=Fs|uppos=PONFP
18	devant	devant	NOUN	_	_	15	obl	_	join=left|prpos=Fs|uppos=PONFP
19	de	de	ADP	_	_	21	case	_	_
20	le	le	DET	_	Definite=Def|PronType=Art	21	det	_	_
21	mariage	mariage	NOUN	_	_	18	nmod	_	SpaceAfter=No
22	,	,	PUNCT	_	_	30	punct	_	join=left|prpos=Fs|uppos=PONFP
23	le	le	DET	_	Definite=Def|PronType=Art	24	det	_	_
24	mariage	mariage	NOUN	_	_	30	nsubj	_	_
25	n'	ne	ADV	_	Polarity=Neg	30	advmod	_	_
26	eüst	avoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	30	aux	_	_
27	onques	onques	ADV	_	_	30	advmod	_	_
28	esté	être	AUX	_	Tense=Past|VerbForm=Part	30	cop	_	_
29	ne	ni	CCONJ	_	_	30	cc	_	_
30	bon	bon	ADJ	_	_	0	root	_	_
31	ne	ni	CCONJ	_	_	32	cc	_	_
32	loial	loyal	ADJ	_	_	30	conj	_	SpaceAfter=No
33	;	;	PUNCT	_	_	30	punct	_	_
34	par	par	ADP	_	_	35	case	_	_
35	quoi	quoi	PRON	_	PronType=Rel	41	obl	_	_
36	la	le	DET	_	Definite=Def|PronType=Art	37	det	_	_
37	fame	femme	NOUN	_	_	41	nsubj	_	_
38	ne	n'	ADV	_	_	41	advmod	_	_
39	eüst	avoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	41	aux	_	_
40	pas	pas	ADV	_	Polarity=Neg	41	advmod	_	_
41	eu	avoir	VERB	_	Tense=Past|VerbForm=Part	30	advcl	_	_
42	douaire	douaire	NOUN	_	_	41	obj	_	_
43	par	par	ADP	_	_	44	case	_	_
44	droit	droit	NOUN	_	_	41	obl	_	_
45	ne	ni	CCONJ	_	_	47	cc	_	_
46	par	par	ADP	_	_	47	case	_	_
47	coustume	coutume	NOUN	_	_	44	conj	_	SpaceAfter=No
48	.	.	PUNCT	_	_	30	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 15 aux	color:blue
1	mes	mais	CCONJ	_	_	5	cc	_	prpos=Cc|uppos=CONJO
2	l'	le	DET	_	Definite=Def|PronType=Art	3	det	_	prpos=Dn|uppos=D
3	en	on	PRON	_	PronType=Prs	5	nsubj	_	prpos=Pp|uppos=PRO
4	doit	devoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	5	aux	_	prpos=Vvc|uppos=MDJ
5	demander	demander	VERB	_	VerbForm=Inf	0	root	_	prpos=Vvn|uppos=VX
6	tant	tant	ADV	_	_	7	advmod	_	prpos=Rg|uppos=ADV
7	seulement	seulement	ADV	_	_	5	advmod	_	prpos=Rg|uppos=ADV
8	se	si	SCONJ	_	_	18	mark	_	prpos=Cs|uppos=CONJS
9	cil	cil	PRON	_	PronType=Dem	18	nsubj	_	prpos=Pd|uppos=PRO
10	qui	qui	PRON	_	PronType=Rel	12	nsubj	_	prpos=Pr|uppos=WPRO
11	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	12	aux:pass	_	prpos=Vuc|uppos=EJ
12	vouchié	voucher	VERB	_	Tense=Past|VerbForm=Part	9	acl:relcl	_	prpos=Ge|uppos=VPP
13	a	à	ADP	_	_	14	case	_	prpos=S|uppos=P
14	garant	garant	NOUN	_	Number=Sing	12	obl	_	prpos=Nc|uppos=NCS
15	doit	devoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	18	aux	_	prpos=Vvc|uppos=MDJ
16	estre	être	AUX	_	VerbForm=Inf	18	cop	_	prpos=Vun|uppos=EX
17	son	son	DET	_	Poss=Yes	18	det	_	prpos=Ds|uppos=DZ
18	garant	garant	NOUN	_	Number=Sing	5	ccomp	_	prpos=Nc|uppos=NCS
19	ou	ou	CCONJ	_	_	20	cc	_	prpos=Cc|uppos=CONJO
20	non	non	ADV	_	_	18	conj	_	prpos=Rg|SpaceAfter=No|uppos=ADVNEG
21	.	.	PUNCT	_	_	5	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


