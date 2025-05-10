---
layout: base
title:  'Statistics of csubj in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `csubj`

This relation is universal.

2 nodes (0%) are attached to their parents as `csubj`.

2 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.5.

The following 1 pairs of parts of speech are connected with `csubj`: <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 64	bgColor:blue
# visual-style 64	fgColor:white
# visual-style 59	bgColor:blue
# visual-style 59	fgColor:white
# visual-style 59 64 csubj	color:blue
1	Pierres	Pierre	PROPN	_	Number=Plur	3	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
2	Allés	Allés	PROPN	_	Number=Plur	1	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
3	dit	dire	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
4	et	et	CCONJ	_	_	5	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
5	raporte	rapporter	VERB	_	VerbForm=Fin	3	conj	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
6	que	que	SCONJ	_	_	8	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
7	il	il	PRON	_	PronType=Prs	8	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
8	estoet	être	VERB	_	VerbForm=Fin	3	ccomp	_	gold_pos=VERB|prpos=Vuc|uppos=EJ
9	avuec	avec	ADP	_	_	11	case	_	gold_pos=ADP|prpos=S|uppos=P
10	la	le	DET	_	Definite=Def	11	det	_	gold_pos=DET|prpos=Da|uppos=D
11	compaignie	compagnie	NOUN	_	_	8	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
12	,	,	PUNCT	_	_	8	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
13	et	et	CCONJ	_	_	19	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
14	que	que	SCONJ	_	_	19	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
15	dempuys	depuis	ADV	_	_	19	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
16	il	il	PRON	_	PronType=Prs	19	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
17	s'	se	PRON	_	PronType=Prs	19	expl	_	gold_pos=PRON|prpos=Pp|SpaceAfter=No|uppos=PRO
18	en	en	PRON	_	PronType=Prs	19	obl	_	gold_pos=PRON|join=left|prpos=Pp|uppos=PRO
19	alla	aller	VERB	_	VerbForm=Fin	8	conj	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
20	a	à	ADP	_	_	22	case	_	gold_pos=ADP|prpos=S|uppos=P
21	sa	son	DET	_	_	22	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
22	maison	maison	NOUN	_	_	19	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
23	,	,	PUNCT	_	_	19	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
24	lessant	laisser	VERB	_	_	19	advcl	_	gold_pos=VERB|prpos=Ga|uppos=VG
25	Pierres	Pierre	PROPN	_	Number=Plur	24	obj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
26	Jehan	Jehan	PROPN	_	Number=Plur	25	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
27	et	et	CCONJ	_	_	29	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
28	son	son	DET	_	_	29	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
29	filz	fils	NOUN	_	_	25	conj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
30	et	et	CCONJ	_	_	31	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
31	Collas	Collas	PROPN	_	Number=Plur	25	conj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
32	Mangeur	Mangeur	PROPN	_	Number=Plur	31	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
33	beuvant	boire	VERB	_	_	25	acl	_	gold_pos=VERB|prpos=Ga|uppos=VG
34	et	et	CCONJ	_	_	36	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
35	lesditez	ledit	DET	_	Definite=Ind	36	det	_	gold_pos=DET|prpos=Di|uppos=D
36	tasses	tasse	NOUN	_	Number=Plur	24	conj	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
37	sur	sur	ADP	_	_	39	case	_	gold_pos=ADP|prpos=S|uppos=P
38	la	le	DET	_	Definite=Def	39	det	_	gold_pos=DET|prpos=Da|uppos=D
39	table	table	NOUN	_	_	36	orphan	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
40	,	,	PUNCT	_	_	8	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
41	mays	mais	CCONJ	_	_	54	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
42	que	que	SCONJ	_	_	54	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
43	le	le	DET	_	Definite=Def	44	det	_	gold_pos=DET|prpos=Da|uppos=D
44	londemain	lendemain	NOUN	_	_	54	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
45	ledit	ledit	DET	_	Definite=Ind	46	det	_	gold_pos=DET|prpos=Di|uppos=D
46	Lubin	Lubin	PROPN	_	Number=Plur	54	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
47	avuec	avec	ADP	_	_	49	case	_	gold_pos=ADP|prpos=S|uppos=P
48	les	le	DET	_	Definite=Def	49	det	_	gold_pos=DET|prpos=Da|uppos=D
49	aultres	autre	PRON	_	PronType=Ind	46	nmod	_	gold_pos=PRON|prpos=Pi|uppos=PRO
50	assemblés	assembler	VERB	_	VerbForm=Part	46	acl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
51	en	en	ADP	_	_	53	case	_	gold_pos=ADP|prpos=S|uppos=P
52	sa	son	DET	_	_	53	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
53	maison	maison	NOUN	_	_	50	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
54	disoient	dire	VERB	_	VerbForm=Fin	8	conj	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
55	tous	tout	PRON	_	PronType=Ind	54	obl	_	gold_pos=PRON|prpos=Pi|uppos=Q
56	que	que	SCONJ	_	_	59	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
57	il	il	PRON	_	PronType=Prs	59	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
58	estoet	être	AUX	_	VerbForm=Fin	59	cop	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
59	impossible	impossible	ADJ	_	_	54	ccomp	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
60	que	que	SCONJ	_	_	64	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
61	lesditez	ledit	DET	_	Definite=Ind	62	det	_	gold_pos=DET|prpos=Di|uppos=D
62	tasses	tasse	NOUN	_	Number=Plur	64	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
63	fussent	être	AUX	_	VerbForm=Fin	64	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
64	perdues	perdre	VERB	_	VerbForm=Part	59	csubj	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
65	.	.	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


