---
layout: base
title:  'Statistics of csubj in UD_Middle_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-ALTM: Relations: `csubj`

This relation is universal.

29 nodes (0%) are attached to their parents as `csubj`.

29 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 15.6206896551724.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (28; 97% instances), <tt><a href="frm_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj	color:blue
1	Et	et	CCONJ	_	_	2	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	est	être	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
3	assavoir	assavoir	VERB	_	VerbForm=Inf	2	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
4	que	que	SCONJ	_	_	8	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
5	le	le	DET	_	Definite=Def|PronType=Art	6	det	_	gold_pos=DET|prpos=Da|uppos=D
6	temps	temps	NOUN	_	Number=Sing	8	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
7	deu	dû	ADJ	_	NumType=Card	6	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
8	est	être	VERB	_	Number=Sing|Person=3|VerbForm=Fin	2	csubj	_	gold_pos=VERB|prpos=Vuc|uppos=EJ
9	dedens	dedans	ADP	_	_	12	case	_	gold_pos=ADP|prpos=S|uppos=P
10	la	le	DET	_	Definite=Def|PronType=Art	12	det	_	gold_pos=DET|prpos=Da|uppos=D
11	prouchaine	prochain	ADJ	_	_	12	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
12	assise	assise	NOUN	_	Number=Sing	8	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
13	.	.	PUNCT	_	_	2	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 csubj	color:blue
1	Et	et	CCONJ	_	_	18	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	s'	si	SCONJ	_	_	5	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
3	il	il	PRON	_	PronType=Prs	5	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
4	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	5	cop	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
5	ainsi	ainsi	ADV	_	_	18	advcl	_	gold_pos=ADV|prpos=Rg|uppos=ADV
6	que	que	SCONJ	_	_	12	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
7	le	le	DET	_	Definite=Def|PronType=Art	8	det	_	gold_pos=DET|prpos=Da|uppos=D
8	marchié	marché	NOUN	_	Number=Sing	12	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
9	ne	ne	ADV	_	PronType=Neg	12	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
10	sera	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	12	cop	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
11	pas	pas	ADV	_	PronType=Neg	12	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADVNEG
12	frauldeulx	fraudeux	ADJ	_	_	5	csubj	_	gold_pos=ADJ|prpos=Ag|SpaceAfter=No|uppos=ADJ
13	,	,	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
14	il	il	PRON	_	PronType=Prs	18	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
15	ne	ne	ADV	_	PronType=Neg	18	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
16	peult	pouvoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	18	aux	_	gold_pos=AUX|prpos=Vvc|uppos=MDJ
17	jà	jà	ADV	_	_	18	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
18	challoir	chaloir	VERB	_	VerbForm=Inf	0	root	_	gold_pos=VERB|prpos=Vvn|uppos=VX
19	se	si	SCONJ	_	_	23	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
20	l'	le	DET	_	Definite=Def|PronType=Art	21	det	_	gold_pos=DET|prpos=Da|uppos=D
21	adjournement	ajournement	NOUN	_	Number=Sing	23	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
22	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	23	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
23	fait	faire	VERB	_	Tense=Past|VerbForm=Part	18	advcl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
24	dedens	dedans	ADP	_	_	26	case	_	gold_pos=ADP|prpos=S|uppos=P
25	l'	le	DET	_	Definite=Def|PronType=Art	26	det	_	gold_pos=DET|prpos=Da|uppos=D
26	an	an	NOUN	_	Number=Sing	23	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
27	de	de	ADP	_	_	29	case	_	gold_pos=ADP|prpos=S|uppos=P
28	l'	le	DET	_	Definite=Def|PronType=Art	29	det	_	gold_pos=DET|prpos=Da|uppos=D
29	achat	achat	NOUN	_	Number=Sing	26	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
30	ou	ou	CCONJ	_	_	31	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
31	non	non	ADV	_	_	23	conj	_	gold_pos=ADV|prpos=Rg|SpaceAfter=No|uppos=ADV
32	,	,	PUNCT	_	_	23	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
33	maiz	mais	CCONJ	_	_	39	case	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
34	seullement	seulement	ADV	_	_	39	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
35	que	que	SCONJ	_	_	39	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
36	la	le	DET	_	Definite=Def|PronType=Art	37	det	_	gold_pos=DET|prpos=Da|uppos=D
37	commission	commission	NOUN	_	Number=Sing	39	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
38	soit	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	39	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
39	faicte	faire	VERB	_	Tense=Past|VerbForm=Part	23	conj	_	gold_pos=VERB|prpos=Ge|uppos=VPP
40	et	et	CCONJ	_	_	44	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
41	qu'	que	SCONJ	_	_	44	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
42	elle	il	PRON	_	PronType=Prs	44	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
43	soit	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	44	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
44	portée	porter	VERB	_	Tense=Past|VerbForm=Part	39	conj	_	gold_pos=VERB|prpos=Ge|uppos=VPP
45	à	à	ADP	_	_	47	case	_	gold_pos=ADP|prpos=S|uppos=P
46	le	le	DET	_	Definite=Def|PronType=Art	47	det	_	gold_pos=DET|prpos=Da|uppos=D
47	sergent	sergent	NOUN	_	Number=Sing	44	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
48	de	de	ADP	_	_	50	case	_	gold_pos=ADP|prpos=S|uppos=P
49	la	le	DET	_	Definite=Def|PronType=Art	50	det	_	gold_pos=DET|prpos=Da|uppos=D
50	verge	verge	NOUN	_	Number=Sing	47	nmod	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
51	,	,	PUNCT	_	_	44	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
52	et	et	CCONJ	_	_	60	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
53	la	le	DET	_	Definite=Def|PronType=Art	54	det	_	gold_pos=DET|prpos=Da|uppos=D
54	requeste	requête	NOUN	_	Number=Sing	60	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
55	de	de	ADP	_	_	57	case	_	gold_pos=ADP|prpos=S|uppos=P
56	l'	le	DET	_	Definite=Def|PronType=Art	57	det	_	gold_pos=DET|prpos=Da|uppos=D
57	adjournement	ajournement	NOUN	_	Number=Sing	54	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
58	à	à	ADP	_	_	59	case	_	gold_pos=ADP|prpos=S|uppos=P
59	lui	il	PRON	_	PronType=Prs	60	obl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
60	faicte	faire	VERB	_	Tense=Past|VerbForm=Part	44	conj	_	gold_pos=VERB|prpos=Ge|uppos=VPP
61	dedens	dedans	ADP	_	_	63	case	_	gold_pos=ADP|prpos=S|uppos=P
62	icellui	icelui	DET	_	PronType=Dem	63	det	_	gold_pos=DET|prpos=Dd|uppos=D
63	an	an	NOUN	_	Number=Sing	60	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
64	ou	où	PRON	_	PronType=Rel	69	obl	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
65	que	que	SCONJ	_	_	69	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
66	la	le	DET	_	Definite=Def|PronType=Art	67	det	_	gold_pos=DET|prpos=Da|uppos=D
67	requeste	requête	NOUN	_	Number=Sing	69	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
68	soit	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	69	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
69	faicte	faire	VERB	_	Tense=Past|VerbForm=Part	60	advcl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
70	dedens	dedans	ADP	_	_	72	case	_	gold_pos=ADP|prpos=S|uppos=P
71	icellui	icelui	DET	_	PronType=Dem	72	det	_	gold_pos=DET|prpos=Dd|uppos=D
72	an	an	NOUN	_	Number=Sing	69	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
73	jugie	juger	VERB	_	Tense=Past|VerbForm=Part	72	acl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
74	en	en	ADP	_	_	76	case	_	gold_pos=ADP|prpos=S|uppos=P
75	quelle	quel	DET	_	PronType=Int	76	det	_	gold_pos=DET|prpos=Dt|uppos=WD
76	juridicion	juridiction	NOUN	_	Number=Sing	78	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
77	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	78	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
78	assise	asseoir	VERB	_	Tense=Past|VerbForm=Part	73	ccomp	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
79	.	.	PUNCT	_	_	18	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


