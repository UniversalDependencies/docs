---
layout: base
title:  'Statistics of orphan in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `orphan`

This relation is universal.

43 nodes (0%) are attached to their parents as `orphan`.

22 instances of `orphan` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 12 pairs of parts of speech are connected with `orphan`: <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (22; 51% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (3; 7% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 19 orphan	color:blue
1	Il	il	PRON	PRO	PronType=Prs	2	nsubj	_	prpos=Pp
2	prend	prendre	VERB	VJ	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc
3	icy	ici	ADV	ADV	_	2	advmod	_	prpos=Rg
4	plainte	plainte	NOUN	NCS	Number=Sing	2	obj	_	prpos=Nc|SpaceAfter=No
5	,	,	PUNCT	PON	_	8	punct	_	join=left|prpos=Fw
6	pour	pour	ADP	P	_	8	case	_	prpos=S
7	toute	tout	DET	Q	Definite=Ind	8	det	_	prpos=Di
8	demande	demande	NOUN	NCS	Number=Sing	2	obl	_	prpos=Nc
9	ou	ou	CCONJ	CONJO	_	10	cc	_	prpos=Cc
10	querelle	querelle	NOUN	NCS	Number=Sing	8	conj	_	prpos=Nc|SpaceAfter=No
11	,	,	PUNCT	PON	_	8	punct	_	join=left|prpos=Fw
12	et	et	CCONJ	CONJO	_	14	cc	_	prpos=Cc|wordform=[et]
13	le	le	DET	D	Definite=Def|PronType=Art	14	det	_	prpos=Da
14	plaintif	plaintif	NOUN	NCS	Number=Sing	2	conj	_	prpos=Nc
15	et	et	CCONJ	CONJO	_	16	cc	_	prpos=Cc|wordform=[et]
16	querellé	querellé	NOUN	NCS	Number=Sing	14	conj	_	prpos=Nc
17	pour	pour	ADP	P	_	19	case	_	prpos=S
18	tout	tout	DET	Q	Definite=Ind	19	det	_	prpos=Di
19	demandeur	demandeur	NOUN	NCS	Number=Sing	14	orphan	_	prpos=Nc|wordform=dema[n]deur
20	et	et	CCONJ	CONJO	_	21	cc	_	prpos=Cc|wordform=[et]
21	defendeur	défendeur	NOUN	NCS	Number=Sing	19	conj	_	prpos=Nc|SpaceAfter=No
22	.	.	PUNCT	PON	_	2	punct	_	join=left|prpos=Fw

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 orphan	color:blue
1	Telle	tel	ADJ	ADJ	_	0	root	_	prpos=Ag
2	est	être	AUX	EJ	Number=Sing|Person=3|VerbForm=Fin	1	cop	_	prpos=Vuc
3	l'	le	DET	D	Definite=Def|PronType=Art	4	det	_	prpos=Da
4	opinion	opinion	NOUN	NCS	Number=Sing	1	nsubj	_	join=left|prpos=Nc|wordform=opinio[n]
5	de	de	ADP	P	_	7	case	_	prpos=S
6	la	le	DET	D	Definite=Def|PronType=Art	7	det	_	prpos=Da
7	glo.	glose	NOUN	NCS	Number=Sing	4	flat	_	prpos=Nc
8	in	in	ADP	FW	_	9	case	_	Lang=la|prpos=Xe
9	l.	lex	NOUN	FW	_	7	nmod	_	Lang=la|prpos=Xe
10	fi.	finalis	ADJ	FW	_	9	amod	_	Lang=la|prpos=Xe
11	C.	codex	NOUN	FW	_	13	orphan	_	Lang=la|prpos=Xe
12	de	de	ADP	FW	_	13	case	_	Lang=la|prpos=Xe
13	postul	postulo	ADJ	FW	_	9	nmod	_	Lang=la|prpos=Xe|SpaceAfter=No
14	.	.	PUNCT	PON	_	1	punct	_	join=left|prpos=Fw

~~~


~~~ conllu
# visual-style 74	bgColor:blue
# visual-style 74	fgColor:white
# visual-style 67	bgColor:blue
# visual-style 67	fgColor:white
# visual-style 67 74 orphan	color:blue
1	Hellyer	Hellier	PROPN	_	Number=Plur	3	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
2	Hamon	Hamon	PROPN	_	Number=Plur	1	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
3	dit	dire	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
4	et	et	CCONJ	_	_	5	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
5	raporte	rapporter	VERB	_	VerbForm=Fin	3	conj	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
6	que	que	SCONJ	_	_	25	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
7	il	il	PRON	_	ExtPos=ADP|PronType=Prs	12	case	_	gold_pos=PRON|prpos=Pp|uppos=PRO
8	y	y	PRON	_	PronType=Prs	7	fixed	_	gold_pos=PRON|prpos=Pp|uppos=PRO
9	a	avoir	VERB	_	VerbForm=Fin	7	fixed	_	gold_pos=VERB|prpos=Vuc|uppos=AJ
10	viron	viron	ADV	_	_	12	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
11	chinq	cinq	NUM	_	NumType=Card	12	nummod	_	gold_pos=NUM|prpos=Mc|uppos=ADJNUM
12	ans	an	NOUN	_	Number=Plur	25	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
13	ou	ou	CCONJ	_	_	14	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
14	vyron	viron	ADV	_	_	12	conj	_	gold_pos=ADV|prpos=Rg|uppos=ADV
15	que	que	SCONJ	_	_	25	mark	_	gold_pos=SCONJ|prpos=Cs|SpaceAfter=No|uppos=CONJS
16	,	,	PUNCT	_	_	15	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
17	estant	être	AUX	_	_	19	cop	_	gold_pos=AUX|prpos=Ga|uppos=EG
18	alhors	alors	ADV	_	_	19	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
19	serviteur	serviteur	NOUN	_	_	25	advcl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
20	de	de	ADP	_	_	21	case	_	gold_pos=ADP|prpos=S|uppos=P
21	Collas	Collas	PROPN	_	Number=Plur	19	nmod	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
22	Billot	Billot	PROPN	_	Number=Plur	21	flat	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRS
23	,	,	PUNCT	_	_	19	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
24	il	il	PRON	_	PronType=Prs	25	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
25	congnoest	connaître	VERB	_	VerbForm=Fin	3	ccomp	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
26	que	que	SCONJ	_	_	29	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
27	ledit	ledit	DET	_	Definite=Ind	28	det	_	gold_pos=DET|prpos=Di|uppos=D
28	Billot	Billot	PROPN	_	Number=Plur	29	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
29	prynt	prendre	VERB	_	VerbForm=Fin	25	ccomp	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
30	et	et	CCONJ	_	_	31	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
31	desroba	dérober	VERB	_	VerbForm=Fin	29	conj	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
32	cyeulx	chez	ADP	_	_	33	case	_	gold_pos=ADP|prpos=S|uppos=P
33	Collas	Collas	PROPN	_	Number=Plur	29	obl	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
34	Trohardy	Trohardy	PROPN	_	Number=Plur	33	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
35	une	un	DET	_	Definite=Ind	36	det	_	gold_pos=DET|prpos=Dn|uppos=D
36	perre	paire	NOUN	_	_	29	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
37	de	de	ADP	_	_	38	case	_	gold_pos=ADP|prpos=S|uppos=P
38	manches	manche	NOUN	_	Number=Plur	36	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
39	de	de	ADP	_	_	40	case	_	gold_pos=ADP|prpos=S|uppos=P
40	camelot	camelot	NOUN	_	_	38	nmod	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
41	,	,	PUNCT	_	_	29	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
42	et	et	CCONJ	_	_	44	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
43	une	un	DET	_	Definite=Ind	44	det	_	gold_pos=DET|prpos=Dn|uppos=D
44	poulle	poule	NOUN	_	_	29	conj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
45	cyeulx	chez	ADP	_	_	46	case	_	gold_pos=ADP|prpos=S|uppos=P
46	Collas	Collas	PROPN	_	Number=Plur	44	orphan	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
47	Martin	Martin	PROPN	_	Number=Plur	46	flat	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRS
48	,	,	PUNCT	_	_	46	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
49	fils	fils	NOUN	_	_	46	appos	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
50	Johan	Jehan	PROPN	_	Number=Plur	49	nmod	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRS
51	,	,	PUNCT	_	_	29	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
52	et	et	CCONJ	_	_	63	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
53	en	en	ADP	_	_	55	case	_	gold_pos=ADP|prpos=S|uppos=P
54	la	le	DET	_	Definite=Def	55	det	_	gold_pos=DET|prpos=Da|uppos=D
55	grange	grange	NOUN	_	_	63	orphan	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
56	de	de	ADP	_	_	58	case	_	gold_pos=ADP|prpos=S|uppos=P
57	le	le	DET	_	Definite=Def	58	det	_	gold_pos=DET|prpos=Da|uppos=D
58	hers	hoir	NOUN	_	Number=Plur	55	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
59	Guillome	Guillaume	PROPN	_	Number=Plur	58	nmod	_	gold_pos=PROPN|prpos=Np|uppos=NPRPL
60	de	de	PROPN	_	Number=Plur	59	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRPL
61	Rosell	Rosell	PROPN	_	Number=Plur	59	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRPL
62	une	un	DET	_	Definite=Ind	63	det	_	gold_pos=DET|prpos=Dn|uppos=D
63	poulle	poule	NOUN	_	_	29	conj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
64	,	,	PUNCT	_	_	29	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
65	et	et	CCONJ	_	_	67	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
66	le	le	DET	_	Definite=Def	67	det	_	gold_pos=DET|prpos=Da|uppos=D
67	drap	drap	NOUN	_	_	29	conj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
68	de	de	ADP	_	_	70	case	_	gold_pos=ADP|prpos=S|uppos=P
69	une	un	DET	_	Definite=Ind	70	det	_	gold_pos=DET|prpos=Dn|uppos=D
70	perre	paire	NOUN	_	_	67	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
71	de	de	ADP	_	_	72	case	_	gold_pos=ADP|prpos=S|uppos=P
72	chausses	chausse	NOUN	_	Number=Plur	70	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
73	cyeulx	chez	ADP	_	_	74	case	_	gold_pos=ADP|prpos=S|uppos=P
74	Collas	Collas	PROPN	_	Number=Plur	67	orphan	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
75	de	de	PROPN	_	Number=Plur	74	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
76	Gersy	Jersey	PROPN	_	Number=Plur	74	flat	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRS
77	,	,	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


