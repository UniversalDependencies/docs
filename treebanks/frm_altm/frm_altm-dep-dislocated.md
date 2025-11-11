---
layout: base
title:  'Statistics of dislocated in UD_Middle_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-ALTM: Relations: `dislocated`

This relation is universal.

4 nodes (0%) are attached to their parents as `dislocated`.

3 instances of `dislocated` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.75.

The following 3 pairs of parts of speech are connected with `dislocated`: <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-PRON.html">PRON</a></tt> (2; 50% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 37 dislocated	color:blue
1	§	§	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|prpos=Fo|uppos=PON
2	Item	item	ADV	_	_	3	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
3	est	être	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
4	à	à	ADP	_	_	5	mark	_	gold_pos=ADP|prpos=S|uppos=P
5	noter	noter	VERB	_	VerbForm=Inf	3	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
6	que	que	SCONJ	_	_	25	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
7	se	si	SCONJ	_	_	13	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
8	aucun	aucun	PRON	_	PronType=Ind	13	nsubj	_	gold_pos=PRON|prpos=Pi|uppos=PRO
9	d'	de	ADP	_	_	11	case	_	gold_pos=ADP|prpos=S|uppos=P
10	aucune	aucun	DET	_	PronType=Ind	11	det	_	gold_pos=DET|prpos=Di|uppos=D
11	justice	justice	NOUN	_	Number=Sing	8	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
12	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	13	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
13	adjourné	ajourner	VERB	_	Tense=Past|VerbForm=Part	25	advcl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
14	par	par	ADP	_	_	15	case	_	gold_pos=ADP|prpos=S|uppos=P
15	lettres	lettre	NOUN	_	Number=Plur	13	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
16	requisitores	réquisitoire	ADJ	_	_	15	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
17	ou	ou	CCONJ	_	_	18	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
18	aultrement	autrement	ADV	_	_	15	conj	_	gold_pos=ADV|prpos=Rg|uppos=ADV
19	à	à	ADP	_	_	22	case	_	gold_pos=ADP|prpos=S|uppos=P
20	les	le	DET	_	Definite=Def|PronType=Art	22	det	_	gold_pos=DET|prpos=Da|uppos=D
21	prouchaines	prochain	ADJ	_	_	22	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
22	assises	assise	NOUN	_	Number=Plur	13	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCPL
23	,	,	PUNCT	_	_	13	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
24	il	il	PRON	_	PronType=Prs	25	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
25	est	être	VERB	_	Number=Sing|Person=3|VerbForm=Fin	3	csubj	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
26	à	à	ADP	_	_	27	mark	_	gold_pos=ADP|prpos=S|uppos=P
27	noter	noter	VERB	_	VerbForm=Inf	25	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
28	déclairement	déclarément	ADV	_	_	27	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
29	à	à	ADP	_	_	31	case	_	gold_pos=ADP|prpos=S|uppos=P
30	quel	quel	DET	_	PronType=Int	31	det	_	gold_pos=DET|prpos=Dt|uppos=WD
31	jour	jour	NOUN	_	Number=Sing	35	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
32	icelles	icelui	DET	_	PronType=Dem	33	det	_	gold_pos=DET|prpos=Dd|uppos=D
33	assises	assise	NOUN	_	Number=Plur	35	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
34	doivent	devoir	AUX	_	Number=Plur|Person=3|VerbForm=Fin	35	aux	_	gold_pos=AUX|prpos=Vvc|uppos=MDJ
35	seoir	seoir	VERB	_	VerbForm=Inf	27	ccomp	_	gold_pos=VERB|prpos=Vvn|SpaceAfter=No|uppos=VX
36	;	;	PUNCT	_	_	27	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP
37	ce	ce	PRON	_	PronType=Dem	27	dislocated	_	gold_pos=PRON|prpos=Pd|uppos=PRO
38	qu'	que	PRON	_	PronType=Rel	41	obj	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
39	il	il	PRON	_	PronType=Prs	41	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
40	ne	ne	ADV	_	PronType=Neg	41	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
41	convendroit	convenir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	37	acl:relcl	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
42	pas	pas	ADV	_	PronType=Neg	41	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADVNEG
43	noter	noter	VERB	_	VerbForm=Inf	41	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
44	à	à	ADP	_	_	45	case	_	gold_pos=ADP|prpos=S|uppos=P
45	ceulx	celui	PRON	_	PronType=Dem	43	obl	_	gold_pos=PRON|prpos=Pd|uppos=PRO
46	demourant	demeurer	VERB	_	Tense=Pres|VerbForm=Part	45	acl	_	gold_pos=VERB|prpos=Ga|uppos=VG
47	à	à	ADP	_	_	49	case	_	gold_pos=ADP|prpos=S|uppos=P
48	le	le	DET	_	Definite=Def|PronType=Art	49	det	_	gold_pos=DET|prpos=Da|uppos=D
49	bailliage	bailliage	NOUN	_	Number=Sing	46	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
50	,	,	PUNCT	_	_	43	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
51	car	car	CCONJ	_	_	55	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
52	à	à	ADP	_	_	53	case	_	gold_pos=ADP|prpos=S|uppos=P
53	eulx	il	PRON	_	PronType=Prs	55	obl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
54	sont	être	AUX	_	Number=Plur|Person=3|VerbForm=Fin	55	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
55	magnifestées	manifester	VERB	_	Tense=Past|VerbForm=Part	41	conj	_	gold_pos=VERB|prpos=Ge|uppos=VPP
56	les	le	DET	_	Definite=Def|PronType=Art	57	det	_	gold_pos=DET|prpos=Da|uppos=D
57	assises	assise	NOUN	_	Number=Plur	55	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
58	et	et	CCONJ	_	_	62	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
59	non	non	ADV	_	PronType=Neg	62	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
60	à	à	ADP	_	_	62	case	_	gold_pos=ADP|prpos=S|uppos=P
61	le	les	DET	_	Definite=Def|PronType=Art	62	det	_	gold_pos=DET|prpos=Da|uppos=D
62	estrangés	étranger	NOUN	_	Number=Plur	53	conj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCPL
63	.	.	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 7 dislocated	color:blue
1	mais	mais	CCONJ	_	_	3	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	il	il	PRON	_	PronType=Prs	3	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
3	convient	convenir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
4	que	que	SCONJ	_	_	13	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
5	le	le	DET	_	Definite=Def|PronType=Art	7	det	_	gold_pos=DET|prpos=Da|uppos=D
6	dit	dit	ADJ	_	_	7	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
7	sergent	sergent	NOUN	_	Number=Sing	13	dislocated	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
8	,	,	PUNCT	_	_	13	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
9	se	si	SCONJ	_	_	11	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
10	il	il	PRON	_	PronType=Prs	11	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
11	vit	vivre	VERB	_	Number=Sing|Person=3|VerbForm=Fin	13	advcl	_	gold_pos=VERB|prpos=Vvc|SpaceAfter=No|uppos=VJ
12	,	,	PUNCT	_	_	11	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
13	viengne	venir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	3	ccomp	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
14	faire	faire	VERB	_	VerbForm=Inf	13	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
15	son	son	DET	_	Poss=Yes	16	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
16	record	record	NOUN	_	Number=Sing	14	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
17	par	par	ADP	_	_	19	case	_	gold_pos=ADP|prpos=S|uppos=P
18	sa	son	DET	_	Poss=Yes	19	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
19	bouche	bouche	NOUN	_	Number=Sing	14	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
20	présent	présent	ADJ	_	_	21	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
21	partie	partie	NOUN	_	Number=Sing	13	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
22	se	si	SCONJ	_	_	24	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
23	elle	il	PRON	_	PronType=Prs	24	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
24	requiert	requérir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	13	advcl	_	gold_pos=VERB|prpos=Vvc|SpaceAfter=No|uppos=VJ
25	;	;	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 16 dislocated	color:blue
1	Et	et	CCONJ	_	_	2	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	fait	faire	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
3	l'	le	DET	_	Definite=Def|PronType=Art	4	det	_	gold_pos=DET|prpos=Da|uppos=D
4	en	en	PRON	_	PronType=Prs	2	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
5	commandement	commandement	NOUN	_	Number=Sing	2	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
6	à	à	ADP	_	_	9	case	_	gold_pos=ADP|prpos=S|uppos=P
7	tous	tout	DET	_	PronType=Ind	9	det	_	gold_pos=DET|prpos=Di|uppos=D
8	les	le	DET	_	Definite=Def|PronType=Art	9	det	_	gold_pos=DET|prpos=Da|uppos=D
9	subjets	sujet	NOUN	_	Number=Plur	2	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
10	de	de	ADP	_	_	12	case	_	gold_pos=ADP|prpos=S|uppos=P
11	la	le	DET	_	Definite=Def|PronType=Art	12	det	_	gold_pos=DET|prpos=Da|uppos=D
12	duchié	duché	NOUN	_	Number=Sing	9	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
13	que	que	SCONJ	_	_	20	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
14	quicunques	quiconque	PRON	_	PronType=Ind	16	nsubj	_	gold_pos=PRON|prpos=Pi|uppos=PRO
15	le	il	PRON	_	PronType=Prs	16	obj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
16	verra	voir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	20	dislocated	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
17	qu'	que	SCONJ	_	_	20	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
18	il	il	PRON	_	PronType=Prs	20	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
19	lui	il	PRON	_	PronType=Prs	20	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
20	signiffie	signifier	VERB	_	Number=Sing|Person=3|VerbForm=Fin	2	ccomp	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
21	le	le	DET	_	Definite=Def|PronType=Art	23	det	_	gold_pos=DET|prpos=Da|uppos=D
22	dit	dit	ADJ	_	_	23	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
23	adjournement	ajournement	NOUN	_	Number=Sing	20	obj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
24	.	.	PUNCT	_	_	2	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


