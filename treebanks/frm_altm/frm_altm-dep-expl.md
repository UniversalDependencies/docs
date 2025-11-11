---
layout: base
title:  'Statistics of expl in UD_Middle_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-ALTM: Relations: `expl`

This relation is universal.

64 nodes (1%) are attached to their parents as `expl`.

63 instances of `expl` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.609375.

The following 4 pairs of parts of speech are connected with `expl`: <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-PRON.html">PRON</a></tt> (61; 95% instances), <tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="frm_altm-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="frm_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="frm_altm-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl	color:blue
1	et	et	CCONJ	_	_	4	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	ne	ne	ADV	_	PronType=Neg	4	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
3	se	se	PRON	_	PronType=Prs	4	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
4	fait	faire	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
5	cestuy	cist	DET	_	PronType=Dem	6	det	_	gold_pos=DET|prpos=Dd|uppos=D
6	adjournement	adjournement	NOUN	_	Number=Sing	4	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
7	général	général	ADJ	_	_	6	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
8	fors	fors	ADV	_	_	10	case	_	gold_pos=ADV|prpos=Rg|uppos=ADV
9	en	en	ADP	_	_	10	case	_	gold_pos=ADP|prpos=S|uppos=P
10	cas	cas	NOUN	_	Number=Sing	4	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
11	de	de	ADP	_	_	12	case	_	gold_pos=ADP|prpos=S|uppos=P
12	meuble	meuble	NOUN	_	Number=Sing	10	nmod	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
13	.	.	PUNCT	_	_	4	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 expl	color:blue
1	Item	item	ADV	_	_	14	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
2	après	après	ADP	_	_	5	case	_	gold_pos=ADP|prpos=S|uppos=P
3	le	le	DET	_	Definite=Def|PronType=Art	5	det	_	gold_pos=DET|prpos=Da|uppos=D
4	premier	premier	ADJ	_	NumType=Ord	5	amod	_	gold_pos=ADJ|prpos=Mo|uppos=ADJNUM
5	appel	appel	NOUN	_	Number=Sing	14	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
6	fait	faire	VERB	_	Tense=Past|VerbForm=Part	5	acl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
7	en	en	ADP	_	_	10	case	_	gold_pos=ADP|prpos=S|uppos=P
8	la	le	DET	_	Definite=Def|PronType=Art	10	det	_	gold_pos=DET|prpos=Da|uppos=D
9	première	premier	ADJ	_	NumType=Ord	10	amod	_	gold_pos=ADJ|prpos=Mo|uppos=ADJNUM
10	assise	assise	NOUN	_	Number=Sing	6	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
11	,	,	PUNCT	_	_	6	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
12	il	il	PRON	_	PronType=Prs	14	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
13	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	14	cop	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
14	bon	bon	ADJ	_	_	0	root	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
15	de	de	ADP	_	_	16	mark	_	gold_pos=ADP|prpos=S|uppos=P
16	faire	faire	VERB	_	VerbForm=Inf	14	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
17	l'	le	DET	_	Definite=Def|PronType=Art	18	det	_	gold_pos=DET|prpos=Da|uppos=D
18	adjournement	ajournement	NOUN	_	Number=Sing	16	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
19	de	de	ADP	_	_	20	case	_	gold_pos=ADP|prpos=S|uppos=P
20	contrainte	contrainte	NOUN	_	Number=Sing	18	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
21	à	à	ADP	_	_	23	case	_	gold_pos=ADP|prpos=S|uppos=P
22	l'	le	DET	_	Definite=Def|PronType=Art	23	det	_	gold_pos=DET|prpos=Da|uppos=D
23	uys	huis	NOUN	_	Number=Sing	16	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
24	et	et	CCONJ	_	_	25	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
25	ouye	ouïe	NOUN	_	Number=Sing	23	conj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
26	de	de	ADP	_	_	28	case	_	gold_pos=ADP|prpos=S|uppos=P
27	la	le	DET	_	Definite=Def|PronType=Art	28	det	_	gold_pos=DET|prpos=Da|uppos=D
28	parroisse	paroisse	NOUN	_	Number=Sing	23	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
29	par	par	ADP	_	_	31	case	_	gold_pos=ADP|prpos=S|uppos=P
30	la	le	DET	_	Definite=Def|PronType=Art	31	det	_	gold_pos=DET|prpos=Da|uppos=D
31	manière	manière	NOUN	_	Number=Sing	16	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
32	que	que	SCONJ	_	_	33	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
33	dessus	dessus	ADV	_	_	31	advmod	_	gold_pos=ADV|prpos=Rg|SpaceAfter=No|uppos=ADV
34	,	,	PUNCT	_	_	31	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
35	ut	ut	ADP	_	_	37	case	_	gold_pos=ADP|Lang=la|prpos=Xe|uppos=FW
36	primo	primo	ADV	_	_	37	advmod	_	gold_pos=ADV|Lang=la|prpos=Xe|uppos=FW
37	precedenti	praecedo	VERB	_	_	31	nmod	_	gold_pos=VERB|Lang=la|prpos=Xe|SpaceAfter=No|uppos=FW
38	.	.	PUNCT	_	_	14	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 expl	color:blue
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


