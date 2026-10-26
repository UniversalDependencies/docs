---
layout: base
title:  'Statistics of acl in UD_Middle_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-ALTM: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="frm_altm-dep-acl-relcl.html">acl:relcl</a></tt>.

73 nodes (1%) are attached to their parents as `acl`.

72 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.0958904109589.

The following 6 pairs of parts of speech are connected with `acl`: <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (63; 86% instances), <tt><a href="frm_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt> (3; 4% instances), <tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl	color:blue
1	mais	mais	CCONJ	_	_	9	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	la	le	DET	_	Definite=Def|PronType=Art	3	det	_	gold_pos=DET|prpos=Da|uppos=D
3	fourme	fourme	NOUN	_	Number=Sing	9	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
4	de	de	ADP	_	_	6	case	_	gold_pos=ADP|prpos=S|uppos=P
5	le	le	DET	_	Definite=Def|PronType=Art	6	det	_	gold_pos=DET|prpos=Da|uppos=D
6	faire	faire	VERB	_	VerbForm=Inf	3	acl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
7	se	se	PRON	_	PronType=Prs	9	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
8	peult	pouvoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	9	aux	_	gold_pos=AUX|prpos=Vvc|uppos=MDJ
9	changier	changer	VERB	_	VerbForm=Inf	0	root	_	gold_pos=VERB|prpos=Vvn|SpaceAfter=No|uppos=VX
10	,	,	PUNCT	_	_	9	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 acl	color:blue
1	Toutes	tout	DET	_	ExtPos=ADV|PronType=Ind	4	advmod	_	gold_pos=DET|prpos=Di|uppos=D
2	voyes	voie	NOUN	_	Number=Plur	1	fixed	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
3	il	il	PRON	_	PronType=Prs	4	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
4	est	être	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vuc|uppos=EJ
5	à	à	ADP	_	_	6	mark	_	gold_pos=ADP|prpos=S|uppos=P
6	noter	noter	VERB	_	VerbForm=Inf	4	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
7	que	que	SCONJ	_	_	32	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
8	de	de	ADP	_	_	9	case	_	gold_pos=ADP|prpos=S|uppos=P
9	ce	ce	PRON	_	PronType=Dem	32	obl	_	gold_pos=PRON|prpos=Pd|uppos=PRO
10	que	que	SCONJ	_	_	14	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
11	le	le	DET	_	Definite=Def|PronType=Art	12	det	_	gold_pos=DET|prpos=Da|uppos=D
12	querellant	querellant	NOUN	_	Number=Sing	14	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
13	a	avoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	14	aux	_	gold_pos=AUX|prpos=Vuc|uppos=AJ
14	obtenu	obtenir	VERB	_	Tense=Past|VerbForm=Part	9	acl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
15	le	le	DET	_	Definite=Def|PronType=Art	17	det	_	gold_pos=DET|prpos=Da|uppos=D
16	premier	premier	ADJ	_	NumType=Ord	17	amod	_	gold_pos=ADJ|prpos=Mo|uppos=ADJNUM
17	deffault	défaut	NOUN	_	Number=Sing	14	obj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
18	,	,	PUNCT	_	_	32	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
19	se	si	SCONJ	_	_	22	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
20	le	le	DET	_	Definite=Def|PronType=Art	21	det	_	gold_pos=DET|prpos=Da|uppos=D
21	querellé	querellé	NOUN	_	Number=Sing	22	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
22	amende	amender	VERB	_	Number=Sing|Person=3|VerbForm=Fin	32	advcl	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
23	de	de	ADP	_	_	25	case	_	gold_pos=ADP|prpos=S|uppos=P
24	sa	son	DET	_	Poss=Yes	25	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
25	volonté	volonté	NOUN	_	Number=Sing	22	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
26	icelle	icelui	DET	_	PronType=Dem	27	det	_	gold_pos=DET|prpos=Dd|uppos=D
27	deffaulte	défaute	NOUN	_	Number=Sing	22	obj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
28	,	,	PUNCT	_	_	22	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
29	icellui	icelui	DET	_	PronType=Dem	30	det	_	gold_pos=DET|prpos=Dd|uppos=D
30	querellant	querellant	NOUN	_	Number=Sing	32	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
31	aura	avoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	32	aux	_	gold_pos=AUX|prpos=Vuc|uppos=AJ
32	attaint	atteindre	VERB	_	Tense=Past|VerbForm=Part	4	csubj	_	gold_pos=VERB|prpos=Ge|uppos=VPP
33	la	le	DET	_	Definite=Def|PronType=Art	34	det	_	gold_pos=DET|prpos=Da|uppos=D
34	veue	vue	NOUN	_	Number=Sing	32	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
35	estre	être	AUX	_	VerbForm=Inf	36	aux:pass	_	gold_pos=AUX|prpos=Vun|uppos=EX
36	termée	termer	VERB	_	Tense=Past|VerbForm=Part	32	xcomp	_	gold_pos=VERB|prpos=Ge|uppos=VPP
37	par	par	ADP	_	_	38	case	_	gold_pos=ADP|prpos=S|uppos=P
38	jugement	jugement	NOUN	_	Number=Sing	36	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
39	,	,	PUNCT	_	_	36	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
40	et	et	CCONJ	_	_	41	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
41	tenue	tenir	VERB	_	Tense=Past|VerbForm=Part	36	conj	_	gold_pos=VERB|prpos=Ge|uppos=VPP
42	par	par	ADP	_	_	43	case	_	gold_pos=ADP|prpos=S|uppos=P
43	jugement	jugement	NOUN	_	Number=Sing	41	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
44	,	,	PUNCT	_	_	36	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
45	se	si	SCONJ	_	_	49	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
46	il	il	PRON	_	PronType=Prs	49	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
47	n'	ne	ADV	_	PronType=Neg	49	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
48	y	y	PRON	_	PronType=Prs	49	obl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
49	vient	venir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	32	advcl	_	gold_pos=VERB|prpos=Vvc|SpaceAfter=No|uppos=VJ
50	.	.	PUNCT	_	_	32	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 acl	color:blue
1	Et	et	CCONJ	_	_	11	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	par	par	ADP	_	_	3	case	_	gold_pos=ADP|prpos=S|uppos=P
3	vertu	vertu	NOUN	_	Number=Sing	11	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
4	d'	de	ADP	_	_	6	case	_	gold_pos=ADP|prpos=S|uppos=P
5	icellui	icelui	DET	_	PronType=Dem	6	det	_	gold_pos=DET|prpos=Dd|uppos=D
6	adjournement	ajournement	NOUN	_	Number=Sing	3	nmod	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
7	,	,	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
8	il	il	PRON	_	PronType=Prs	11	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
9	a	avoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	11	aux	_	gold_pos=AUX|prpos=Vuc|uppos=AJ
10	esté	être	AUX	_	Tense=Past|VerbForm=Part	11	aux:pass	_	gold_pos=AUX|prpos=Ge|uppos=EPP
11	appellé	appeler	VERB	_	Tense=Past|VerbForm=Part	0	root	_	gold_pos=VERB|prpos=Ge|uppos=VPP
12	à	à	ADP	_	_	16	case	_	gold_pos=ADP|prpos=S|uppos=P
13	les	le	DET	_	Definite=Def|PronType=Art	16	det	_	gold_pos=DET|prpos=Da|uppos=D
14	dittes	dit	ADJ	_	_	16	acl	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
15	prouchaines	prochain	ADJ	_	_	16	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
16	assises	assise	NOUN	_	Number=Plur	11	xcomp	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
17	et	et	CCONJ	_	_	18	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
18	derraines	derrain	ADJ	_	_	16	conj	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
19	passées	passer	VERB	_	Tense=Past|VerbForm=Part	16	acl	_	gold_pos=AUX|prpos=Ge|SpaceAfter=No|uppos=VPP
20	,	,	PUNCT	_	_	16	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
21	à	à	ADP	_	_	22	case	_	gold_pos=ADP|prpos=S|uppos=P
22	lesquelles	lequel	PRON	_	PronType=Rel	26	obl	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
23	il	il	PRON	_	PronType=Prs	26	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
24	n'	ne	ADV	_	PronType=Neg	26	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
25	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	26	aux	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
26	venu	venir	VERB	_	Tense=Past|VerbForm=Part	16	acl:relcl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
27	ne	ni	CCONJ	_	_	28	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
28	comparu	comparaître	VERB	_	Tense=Past|VerbForm=Part	26	conj	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
29	.	.	PUNCT	_	_	11	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


