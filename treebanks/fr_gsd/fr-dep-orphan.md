---
layout: base
title:  'Statistics of orphan in UD_French'
udver: '2'
---

## Treebank Statistics: UD_French: Relations: `orphan`

This relation is universal.

6 nodes (0%) are attached to their parents as `orphan`.

5 instances of `orphan` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.16666666666667.

The following 6 pairs of parts of speech are connected with `orphan`: <tt><a href="fr-pos-ADP.html">ADP</a></tt>-<tt><a href="fr-pos-ADP.html">ADP</a></tt> (1; 17% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-NUM.html">NUM</a></tt> (1; 17% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-SYM.html">SYM</a></tt> (1; 17% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-VERB.html">VERB</a></tt> (1; 17% instances), <tt><a href="fr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (1; 17% instances), <tt><a href="fr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr-pos-SYM.html">SYM</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 16 orphan	color:blue
1	En-dessous	en-dessous	ADP	_	_	4	case	_	_
2	de	de	ADP	_	_	1	fixed	_	_
3	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	température	température	NOUN	_	Gender=Fem|Number=Sing	11	obl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	matériau	matériau	NOUN	_	Gender=Masc|Number=Sing	11	nsubj	_	_
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
9	à	à	ADP	_	_	11	case	_	_
10	l'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	SpaceAfter=No
11	état	état	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
12	"	"	PUNCT	_	_	13	punct	_	SpaceAfter=No
13	supraconducteur	supraconducteur	NOUN	_	Gender=Masc|Number=Sing	11	compound	_	SpaceAfter=No
14	"	"	PUNCT	_	_	13	punct	_	SpaceAfter=No
15	,	,	PUNCT	_	_	16	punct	_	_
16	au-dessus	au-dessus	ADP	_	_	1	orphan	_	SpaceAfter=No
17	,	,	PUNCT	_	_	16	punct	_	_
18	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	19	nsubj	_	_
19	transite	transiter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	conj	_	_
20	à	à	ADP	_	_	22	case	_	_
21	l'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	SpaceAfter=No
22	état	état	NOUN	_	Gender=Masc|Number=Sing	19	obl	_	_
23	"	"	PUNCT	_	_	24	punct	_	SpaceAfter=No
24	normal	normal	ADJ	_	Gender=Masc|Number=Sing	22	amod	_	SpaceAfter=No
25	"	"	PUNCT	_	_	24	punct	_	_
26	et	et	CCONJ	_	_	27	cc	_	_
27	devient	devenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	conj	_	_
28	brutalement	brutalement	ADV	_	_	27	advmod	_	_
29	résistif	résistif	ADJ	_	Gender=Masc|Number=Sing	27	xcomp	_	_
30	ce	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	29	appos	_	_
31	qui	qui	PRON	_	PronType=Rel	32	nsubj	_	_
32	génère	générer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	30	acl:relcl	_	_
33	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	34	det	_	_
34	échauffement	échauffement	NOUN	_	Gender=Masc|Number=Sing	32	obj	_	_
35	par	par	ADP	_	_	36	case	_	_
36	effet	effet	NOUN	_	Gender=Masc|Number=Sing	32	obl	_	_
37	Joule	Joule	PROPN	_	_	36	compound	_	_
38	s'	si	SCONJ	_	_	41	mark	_	SpaceAfter=No
39	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	41	nsubj:pass	_	_
40	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	41	aux:pass	_	_
41	parcouru	parcourir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	32	advcl	_	_
42	par	par	ADP	_	_	44	case	_	_
43	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	44	det	_	_
44	courant	courant	NOUN	_	Gender=Masc|Number=Sing	41	obl	_	SpaceAfter=No
45	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 26 orphan	color:blue
1	En	en	ADP	_	_	2	case	_	_
2	1891	1891	NUM	_	_	5	obl	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
5	fonde	fonder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
7	«	«	PUNCT	_	_	8	punct	_	_
8	Société	société	NOUN	_	Gender=Fem|Number=Sing	5	obj	_	_
9	anonyme	anonyme	ADJ	_	Gender=Fem|Number=Sing	8	amod	_	_
10	de	de	ADP	_	_	12	case	_	_
11	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	chocolaterie	chocolaterie	NOUN	_	Gender=Fem|Number=Sing	8	nmod	_	_
13	d'	de	ADP	_	_	14	case	_	SpaceAfter=No
14	Aiguebelle	Aiguebelle	PROPN	_	_	12	nmod	_	_
15	»	»	PUNCT	_	_	8	punct	_	_
16	d'	de	ADP	_	_	18	case	_	SpaceAfter=No
17	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	capital	capital	NOUN	_	Gender=Masc|Number=Sing	8	nmod	_	_
19	d'	de	ADP	_	_	21	case	_	SpaceAfter=No
20	un	un	NUM	_	_	21	nummod	_	_
21	million	million	NOUN	_	Gender=Masc|Number=Sing	18	nmod	_	_
22	de	de	ADP	_	_	23	case	_	_
23	francs	franc	NOUN	_	Gender=Masc|Number=Plur	21	nmod	_	_
24	et	et	CCONJ	_	_	28	cc	_	_
25	en	en	ADP	_	_	26	case	_	_
26	1893	1893	NUM	_	_	28	orphan	_	_
27	l'	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	28	det	_	SpaceAfter=No
28	usine	usine	NOUN	_	Gender=Fem|Number=Sing	8	conj	_	_
29	de	de	ADP	_	_	30	case	_	_
30	chocolaterie	chocolaterie	NOUN	_	Gender=Fem|Number=Sing	28	nmod	_	_
31	de	de	ADP	_	_	32	case	_	_
32	Donzère	Donzère	PROPN	_	_	30	nmod	_	SpaceAfter=No
33	,	,	PUNCT	_	_	28	punct	_	_
34	qui	qui	PRON	_	PronType=Rel	35	nsubj	_	_
35	emploiera	employer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	28	acl:relcl	_	_
36	jusqu'	jusque	ADP	_	_	39	case	_	SpaceAfter=No
37	à	à	ADP	_	_	39	case	_	_
38	200	200	NUM	_	_	39	nummod	_	_
39	personnes	personne	NOUN	_	Gender=Fem|Number=Plur	35	obl	_	SpaceAfter=No
40	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 20 orphan	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	température	température	NOUN	_	Gender=Fem|Number=Sing	9	nsubj	_	_
3	minimale	minimal	ADJ	_	Gender=Fem|Number=Sing	2	amod	_	_
4	moyenne	moyen	ADJ	_	Gender=Fem|Number=Sing	2	amod	_	_
5	de	de	ADP	_	_	7	case	_	_
6	l'	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	SpaceAfter=No
7	année	année	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
8	se	se	PRON	_	Person=3|PronType=Prs	9	obj	_	_
9	situe	situer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	autour	autour	ADV	_	_	14	case	_	_
11	de	de	ADP	_	_	10	fixed	_	_
12	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	14	det	_	_
13	9	9	NUM	_	_	14	nummod	_	SpaceAfter=No
14	°	°	SYM	_	_	9	obl	_	SpaceAfter=No
15	C	C	NOUN	_	Gender=Masc|Number=Sing	14	compound	_	_
16	et	et	CCONJ	_	_	18	cc	_	_
17	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	maximale	maximale	NOUN	_	Gender=Fem|Number=Sing	9	conj	_	_
19	19	19	NUM	_	_	20	nummod	_	SpaceAfter=No
20	°	°	SYM	_	_	18	orphan	_	SpaceAfter=No
21	C	C	NOUN	_	Gender=Masc|Number=Sing	20	compound	_	SpaceAfter=No
22	.	.	PUNCT	_	_	9	punct	_	_

~~~


