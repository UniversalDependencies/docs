---
layout: base
title:  'Statistics of flat in UD_Middle_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-ALTM: Relations: `flat`

This relation is universal.

10 nodes (0%) are attached to their parents as `flat`.

10 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.6.

The following 4 pairs of parts of speech are connected with `flat`: <tt><a href="frm_altm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="frm_altm-pos-PROPN.html">PROPN</a></tt> (4; 40% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (3; 30% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-PROPN.html">PROPN</a></tt> (2; 20% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 flat	color:blue
1	Primo	primo	ADV	_	_	4	advmod	_	gold_pos=ADV|prpos=Rg|SpaceAfter=No|uppos=ADV
2	:	:	PUNCT	_	_	1	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
3	il	il	PRON	_	PronType=Prs	4	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
4	convient	convenir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
5	lever	lever	VERB	_	VerbForm=Inf	4	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
6	sa	son	DET	_	Poss=Yes	7	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
7	dolléance	doléance	NOUN	_	Number=Sing	5	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
8	qui	qui	PRON	_	PronType=Rel	9	nsubj	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
9	contient	contenir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	7	acl:relcl	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
10	ceste	ce	DET	_	PronType=Dem	11	det	_	gold_pos=DET|prpos=Dd|uppos=D
11	fourme	fourme	NOUN	_	Number=Sing	9	obj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
12	:	:	PUNCT	_	_	11	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
13	Guillaume	Guillaume	PROPN	_	Number=Sing	11	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
14	du	du	PROPN	_	Number=Sing	13	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
15	Hamel	Hamel	PROPN	_	Number=Sing	13	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
16	bailly	bailli	NOUN	_	Number=Sing	13	appos	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
17	,	,	PUNCT	_	_	13	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
18	etc.	etc	ADV	_	_	13	conj	_	gold_pos=ADV|prpos=Rg|SpaceAfter=No|uppos=ADV
19	,	,	PUNCT	_	_	13	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
20	à	à	ADP	_	_	22	case	_	gold_pos=ADP|prpos=S|uppos=P
21	tel	tel	ADJ	_	_	22	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
22	sergent	sergent	NOUN	_	Number=Sing	13	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
23	etc	etc	ADV	_	_	13	conj	_	gold_pos=ADV|prpos=Rg|SpaceAfter=No|uppos=ADV
24	.	.	PUNCT	_	_	4	punct	_	gold_pos=PUNCT|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 33 35 flat	color:blue
1	Et	et	CCONJ	_	_	10	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	après	après	ADP	_	_	5	mark	_	gold_pos=ADP|prpos=S|uppos=P
3	icellui	icelui	DET	_	PronType=Dem	4	det	_	gold_pos=DET|prpos=Dd|uppos=D
4	adjournement	ajournement	NOUN	_	Number=Sing	5	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
5	fait	faire	VERB	_	Tense=Past|VerbForm=Part	10	advcl	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
6	,	,	PUNCT	_	_	10	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
7	l'	le	DET	_	Definite=Def|PronType=Art	8	det	_	gold_pos=DET|prpos=Da|uppos=D
8	en	on	PRON	_	PronType=Prs	10	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
9	doit	devoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	10	aux	_	gold_pos=AUX|prpos=Vvc|uppos=MDJ
10	faire	faire	VERB	_	VerbForm=Inf	0	root	_	gold_pos=VERB|prpos=Vvn|uppos=VX
11	appeller	appeler	VERB	_	VerbForm=Inf	10	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
12	icellui	icelui	DET	_	PronType=Dem	13	det	_	gold_pos=DET|prpos=Dd|uppos=D
13	adjourné	ajourné	NOUN	_	Number=Sing	11	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
14	à	à	ADP	_	_	17	case	_	gold_pos=ADP|prpos=S|uppos=P
15	la	le	DET	_	Definite=Def|PronType=Art	17	det	_	gold_pos=DET|prpos=Da|uppos=D
16	prouchaine	prochain	ADJ	_	_	17	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
17	assise	assise	NOUN	_	Number=Sing	11	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
18	et	et	CCONJ	_	_	20	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
19	puis	puis	ADV	_	_	20	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
20	faire	faire	VERB	_	VerbForm=Inf	10	conj	_	gold_pos=VERB|prpos=Vvn|uppos=VX
21	l'	le	DET	_	Definite=Def|PronType=Art	22	det	_	gold_pos=DET|prpos=Da|uppos=D
22	adjournement	ajournement	NOUN	_	Number=Sing	20	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
23	par	par	ADP	_	_	24	case	_	gold_pos=ADP|prpos=S|uppos=P
24	contrainte	contrainte	NOUN	_	Number=Sing	22	nmod	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
25	,	,	PUNCT	_	_	28	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
26	ut	ut	ADP	_	_	28	case	_	gold_pos=ADP|Lang=la|prpos=Xe|uppos=FW
27	in	in	ADP	_	_	28	case	_	gold_pos=ADP|Lang=la|prpos=Xe|uppos=FW
28	cappitulo	capitulum	NOUN	_	_	20	obl	_	gold_pos=NOUN|Lang=la|prpos=Xe|uppos=FW
29	de	de	ADP	_	_	30	case	_	gold_pos=ADP|prpos=S|uppos=P
30	justice	justice	NOUN	_	Number=Sing	28	flat	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
31	et	et	CCONJ	_	_	33	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
32	in	in	ADP	_	_	33	case	_	gold_pos=ADP|Lang=la|prpos=Xe|uppos=FW
33	cappitullo	capitulum	NOUN	_	_	28	conj	_	gold_pos=NOUN|Lang=la|prpos=Xe|uppos=FW
34	de	de	ADP	_	_	35	case	_	gold_pos=ADP|prpos=S|uppos=P
35	terme	terme	NOUN	_	Number=Sing	33	flat	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
36	passé	passer	VERB	_	Tense=Past|VerbForm=Part	35	acl	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
37	,	,	PUNCT	_	_	40	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
38	qui	qui	PRON	_	PronType=Rel	40	nsubj	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
39	se	se	PRON	_	PronType=Prs	40	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
40	fait	faire	VERB	_	Number=Sing|Person=3|VerbForm=Fin	22	acl:relcl	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
41	en	en	ADP	_	_	43	case	_	gold_pos=ADP|prpos=S|uppos=P
42	ceste	ce	DET	_	PronType=Dem	43	det	_	gold_pos=DET|prpos=Dd|uppos=D
43	fourme	fourme	NOUN	_	Number=Sing	40	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
44	,	,	PUNCT	_	_	43	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
45	c'	ce	PRON	_	ExtPos=ADV|PronType=Dem	49	advmod	_	gold_pos=PRON|prpos=Pd|uppos=PRO
46	est	être	VERB	_	Number=Sing|Person=3|VerbForm=Fin	45	fixed	_	gold_pos=VERB|prpos=Vuc|uppos=EJ
47	assavoir	assavoir	VERB	_	VerbForm=Inf	45	fixed	_	gold_pos=VERB|prpos=Vvn|uppos=VX
48	après	après	ADP	_	_	49	case	_	gold_pos=ADP|prpos=S|uppos=P
49	ce	ce	PRON	_	PronType=Dem	43	conj	_	gold_pos=PRON|prpos=Pd|uppos=PRO
50	que	qui	PRON	_	PronType=Rel	51	nsubj	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
51	dit	dire	VERB	_	Tense=Past|VerbForm=Part	49	acl:relcl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
52	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	51	aux	_	gold_pos=AUX|prpos=Vuc|SpaceAfter=No|uppos=EJ
53	,	,	PUNCT	_	_	49	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
54	silicet	scilicet	ADV	_	_	49	advmod	_	gold_pos=ADV|Lang=la|prpos=Xe|SpaceAfter=No|uppos=FW
55	.	.	PUNCT	_	_	10	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 flat	color:blue
1	Primo	primo	ADV	_	_	4	advmod	_	gold_pos=ADV|prpos=Rg|SpaceAfter=No|uppos=ADV
2	:	:	PUNCT	_	_	1	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
3	il	il	PRON	_	PronType=Prs	4	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
4	convient	convenir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
5	lever	lever	VERB	_	VerbForm=Inf	4	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
6	sa	son	DET	_	Poss=Yes	7	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
7	dolléance	doléance	NOUN	_	Number=Sing	5	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
8	qui	qui	PRON	_	PronType=Rel	9	nsubj	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
9	contient	contenir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	7	acl:relcl	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
10	ceste	ce	DET	_	PronType=Dem	11	det	_	gold_pos=DET|prpos=Dd|uppos=D
11	fourme	fourme	NOUN	_	Number=Sing	9	obj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
12	:	:	PUNCT	_	_	11	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
13	Guillaume	Guillaume	PROPN	_	Number=Sing	11	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
14	du	du	PROPN	_	Number=Sing	13	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
15	Hamel	Hamel	PROPN	_	Number=Sing	13	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
16	bailly	bailli	NOUN	_	Number=Sing	13	appos	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
17	,	,	PUNCT	_	_	13	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
18	etc.	etc	ADV	_	_	13	conj	_	gold_pos=ADV|prpos=Rg|SpaceAfter=No|uppos=ADV
19	,	,	PUNCT	_	_	13	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
20	à	à	ADP	_	_	22	case	_	gold_pos=ADP|prpos=S|uppos=P
21	tel	tel	ADJ	_	_	22	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
22	sergent	sergent	NOUN	_	Number=Sing	13	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
23	etc	etc	ADV	_	_	13	conj	_	gold_pos=ADV|prpos=Rg|SpaceAfter=No|uppos=ADV
24	.	.	PUNCT	_	_	4	punct	_	gold_pos=PUNCT|prpos=Fw|uppos=PON

~~~


