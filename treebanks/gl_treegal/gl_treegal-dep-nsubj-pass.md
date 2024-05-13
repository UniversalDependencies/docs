---
layout: base
title:  'Statistics of nsubj:pass in UD_Galician-TreeGal'
udver: '2'
---

## Treebank Statistics: UD_Galician-TreeGal: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="gl_treegal-dep-nsubj.html">nsubj</a></tt>.

25 nodes (0%) are attached to their parents as `nsubj:pass`.

25 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.16.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt> (14; 56% instances), <tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_treegal-pos-PRON.html">PRON</a></tt> (9; 36% instances), <tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 18 nsubj:pass	color:blue
1	O	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
2	ex	ex	ADJ	A0ms	Gender=Masc|Number=Sing	3	amod	_	_
3	sindicalista	sindicalista	NOUN	Scms	Gender=Masc|Number=Sing	13	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	Q,	_	3	punct	_	_
5	hoxe	hoxe	ADV	Wn	_	8	advmod	_	_
6	con	con	ADP	P	AdpType=Prep	8	case	_	_
7	escaso	escaso	ADJ	A0ms	Gender=Masc|Number=Sing	8	amod	_	_
8	predicamento	predicamento	NOUN	Scms	Gender=Masc|Number=Sing	3	nmod	_	_
9	en	en	ADP	P	AdpType=Prep	11	case	_	_
10	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	país	país	NOUN	Scms	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
12	,	,	PUNCT	Q,	_	3	punct	_	_
13	logrou	lograr	VERB	Vei30s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
14	non	non	ADV	Wn	_	13	advmod	_	_
15	obstante	obstante	ADJ	A0as	Gender=Com	14	fixed	_	_
16	que	que	SCONJ	Cs	_	24	mark	_	_
17	esta	este	DET	Edfs	Gender=Fem|Number=Sing|PronType=Dem	18	det	_	_
18	opinión	opinión	NOUN	Scfs	Gender=Fem|Number=Sing	24	nsubj:pass	_	_
19	sobre	sobre	ADP	P	AdpType=Prep	21	case	_	_
20	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	emisora	emisora	NOUN	Scfs	Gender=Fem|Number=Sing	18	nmod	_	_
22	fose	ser	AUX	Ves30s	Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	24	aux:pass	_	_
23	moi	moito	ADV	Wm	_	24	advmod	_	_
24	comentada	comentar	VERB	V0p0fs	Gender=Fem|Number=Sing|VerbForm=Part	13	ccomp	_	SpaceAfter=No
25	.	.	PUNCT	Q.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 nsubj:pass	color:blue
1	Hai	haber	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	moitas	moito	DET	Idfp	Gender=Fem|Number=Plur|PronType=Ind	3	det	_	_
3	obras	obra	NOUN	Scfp	Gender=Fem|Number=Plur	1	obj	_	_
4	que	que	PRON	Tnfp	Gender=Fem|Number=Plur|PronType=Rel	8	nsubj:pass	_	_
5	aínda	aínda	ADV	Wn	_	8	advmod	_	_
6	non	non	ADV	Wn	Polarity=Neg	8	advmod	_	_
7	foron	ser	AUX	Vei30p	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	8	aux:pass	_	_
8	tocadas	tocar	VERB	V0p0fp	Gender=Fem|Number=Plur|VerbForm=Part	3	acl	_	SpaceAfter=No
9	,	,	PUNCT	Q,	_	15	punct	_	_
10	que	que	PRON	Tnfp	Gender=Fem|Number=Plur|PronType=Rel	16	obj	_	_
11	non	non	ADV	Wm	Polarity=Neg	12	advmod	_	_
12	todo	todo	DET	Idms	Gender=Masc|Number=Sing|PronType=Ind	14	det	_	_
13	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	mundo	mundo	NOUN	Scms	Gender=Masc|Number=Sing	15	nsubj	_	_
15	quere	querer	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	conj	_	_
16	facer	facer	VERB	V0f000	VerbForm=Inf	15	xcomp	_	SpaceAfter=No
17	.	.	PUNCT	Q.	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:pass	color:blue
1	Contos	conto	NOUN	Scmp	Gender=Masc|Number=Plur	5	nsubj:pass	_	_
2	por	por	ADP	P	AdpType=Prep	3	case	_	_
3	palabras	palabra	NOUN	Scfp	Gender=Fem|Number=Plur	1	nmod	_	_
4	foi	ser	AUX	Vei30s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux:pass	_	_
5	merecente	merecente	ADJ	A0ms	Gender=Masc|Number=Sing	0	root	_	_
6	en	en	ADP	P	AdpType=Prep	9	case	_	_
7	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	seu	seu	DET	Md3sms	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	9	det	_	_
9	tempo	tempo	NOUN	Scms	Gender=Masc|Number=Sing	5	obl	_	_
10	de	de	ADP	P	AdpType=Prep	12	case	_	_
11	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	premio	premio	NOUN	Scms	Gender=Masc|Number=Sing	5	obl	_	_
13	Lazarillo	lazarillo	PROPN	Sp00	_	12	nmod	_	_
14	e	e	CCONJ	Cc	_	16	cc	_	_
15	foi	ser	AUX	Vei30s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	16	aux:pass	_	_
16	incluído	incluír	VERB	V0p0ms	Gender=Masc|Number=Sing|VerbForm=Part	5	conj	_	_
17	en	en	ADP	P	AdpType=Prep	19	case	_	_
18	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	lista	lista	NOUN	Scfs	Gender=Fem|Number=Sing	16	obl	_	_
20	de	de	ADP	P	AdpType=Prep	21	case	_	_
21	honra	honra	NOUN	Scfs	Gender=Fem|Number=Sing	19	nmod	_	_
22	de	de	ADP	P	AdpType=Prep	24	case	_	_
23	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	_	_
24	IBBY	ibby	PROPN	Zgms	Gender=Masc|Number=Sing	21	nmod	_	SpaceAfter=No
25	,	,	PUNCT	Q,	_	16	punct	_	_
26	traducido	traducir	VERB	V0p0ms	Gender=Masc|Number=Sing|VerbForm=Part	5	conj	_	_
27	a	a	ADP	P	AdpType=Prep	29	case	_	_
28	varios	varios	DET	Idmp	Gender=Masc|Number=Plur|PronType=Ind	29	det	_	_
29	idiomas	idioma	NOUN	Scmp	Gender=Masc|Number=Plur	26	obl	_	_
30	agora	agora	ADV	Wn	_	33	advmod	_	_
31	con	con	ADP	P	AdpType=Prep	33	case	_	_
32	as	o	DET	Ddfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	33	det	_	_
33	ilustracións	ilustración	NOUN	Scfp	Gender=Fem|Number=Plur	29	nmod	_	_
34	de	de	ADP	P	AdpType=Prep	35	case	_	_
35	Enjamio	enjamio	PROPN	Sp00	_	33	nmod	_	_
36	e	e	CCONJ	Cc	_	43	cc	_	_
37	en	en	ADP	P	AdpType=Prep	39	case	_	_
38	esta	este	DET	Edfs	Gender=Fem|Number=Sing|PronType=Dem	39	det	_	_
39	edición	edición	NOUN	Scfs	Gender=Fem|Number=Sing	43	obl	_	_
40	que	que	PRON	Tnfs	Gender=Fem|Number=Sing|PronType=Rel	41	nsubj	_	_
41	coido	coidar	VERB	Vpi10s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	39	acl	_	_
42	definitiva	definitivo	ADJ	A0fs	Gender=Fem|Number=Sing	41	xcomp	_	_
43	agardo	agardar	VERB	Vpi10s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	conj	_	_
44	que	que	SCONJ	Cs	_	45	mark	_	_
45	siga	seguir	VERB	Vps30s	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	43	ccomp	_	_
46	a	a	ADP	P	AdpType=Prep	47	mark	_	_
47	recolleitar	recolleitar	VERB	V0f000	VerbForm=Inf	45	xcomp	_	_
48	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	49	det	_	_
49	favor	favor	NOUN	Scms	Gender=Masc|Number=Sing	47	obj	_	_
50	de	de	ADP	P	AdpType=Prep	52	case	_	_
51	os	o	DET	Ddmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	52	det	_	_
52	lectores	lector	NOUN	Scmp	Gender=Masc|Number=Plur	49	nmod	_	SpaceAfter=No
53	,	,	PUNCT	Q,	_	47	punct	_	_
54	como	como	ADV	Wr	PronType=Rel	55	advmod	_	_
55	fixo	facer	VERB	Vei30s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	47	advcl	_	_
56	dende	dende	ADP	P	AdpType=Prep	59	case	_	_
57	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	59	det	_	_
58	súa	seu	DET	Md3sfs	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	59	det	_	_
59	publicación	publicación	NOUN	Scfs	Gender=Fem|Number=Sing	55	obl	_	SpaceAfter=No
60	.	.	PUNCT	Q.	_	5	punct	_	_

~~~


