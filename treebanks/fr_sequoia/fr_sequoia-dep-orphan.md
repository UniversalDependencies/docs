---
layout: base
title:  'Statistics of orphan in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `orphan`

This relation is universal.

38 nodes (0%) are attached to their parents as `orphan`.

34 instances of `orphan` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.60526315789474.

The following 13 pairs of parts of speech are connected with `orphan`: <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (19; 50% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (4; 11% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 27 orphan	color:blue
1	De	de	ADP	_	_	3	case	_	_
2	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	somme	somme	NOUN	_	Gender=Fem|Number=Sing	11	obl:mod	_	_
4	de	de	ADP	_	_	6	case	_	_
5	4,2	4,2	NUM	_	NumType=Card	6	nummod	_	_
6	milliards	milliard	NOUN	_	Gender=Masc|Number=Plur|NumType=Card	3	nmod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	_	_
8	80	80	NUM	_	NumType=Card	9	nummod	_	SpaceAfter=No
9	%	%	NOUN	_	Gender=Masc	11	nsubj:pass	_	_
10	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux:pass	_	_
11	consacré	consacrer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
12	à	à	ADP	_	_	14	case	_	_
13	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	reconstruction	reconstruction	NOUN	_	Gender=Fem|Number=Sing	11	obl:arg	_	SpaceAfter=No
15	,	,	PUNCT	_	_	17	punct	_	_
16	17	17	NUM	_	NumType=Card	17	nummod	_	SpaceAfter=No
17	%	%	NOUN	_	Gender=Masc	11	conj	_	_
18	à	à	ADP	_	_	20	case	_	_
19	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	_
20	démocratie	démocratie	NOUN	_	Gender=Fem|Number=Sing	17	orphan	_	_
21	et	et	CCONJ	_	_	24	cc	_	_
22	seulement	seulement	ADV	_	_	24	advmod	_	_
23	3	3	NUM	_	NumType=Card	24	nummod	_	SpaceAfter=No
24	%	%	NOUN	_	Gender=Masc	11	conj	_	_
25	à	à	ADP	_	_	27	case	_	_
26	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	27	det	_	_
27	sécurité	sécurité	NOUN	_	Gender=Fem|Number=Sing	24	orphan	_	SpaceAfter=No
28	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 orphan	color:blue
1	François	François	PROPN	_	Gender=Masc|Number=Sing	5	nsubj	_	_
2	Mitterrand	Mitterrand	PROPN	_	_	1	flat:name	_	_
3	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	cop	_	_
4	alors	alors	ADV	_	_	5	advmod	_	_
5	ministre	ministre	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
6	de	de	ADP	_	_	8	case	_	_
7	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	8	det	_	_
8	Colonies	colonie	NOUN	_	Gender=Fem|Number=Plur	5	nmod	_	_
9	(	(	PUNCT	_	_	5	punct	_	SpaceAfter=No
10	à	à	ADP	_	_	5	dep	_	ExtPos=ADV
11	partir	partir	VERB	_	VerbForm=Inf	10	fixed	_	_
12	de	de	ADP	_	_	13	case	_	_
13	1950	1950	NUM	_	NumType=Card	10	dep	_	SpaceAfter=No
14	)	)	PUNCT	_	_	5	punct	_	_
15	et	et	CCONJ	_	_	16	cc	_	_
16	René	René	PROPN	_	Gender=Masc|Number=Sing	5	conj	_	_
17	Bousquet	Bousquet	PROPN	_	_	16	flat:name	_	_
18	directeur	directeur	NOUN	_	Gender=Masc|Number=Sing	16	orphan	_	_
19	de	de	ADP	_	_	21	case	_	_
20	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	Banque	banque	NOUN	_	Gender=Fem|Number=Sing	18	nmod	_	_
22	d'	de	ADP	_	_	23	case	_	SpaceAfter=No
23	Indochine	Indochine	PROPN	_	_	21	nmod	_	SpaceAfter=No
24	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 33 35 orphan	color:blue
1	-	-	PUNCT	_	_	6	punct	_	_
2	15	15	NUM	_	NumType=Card	6	nmod	_	_
3	juillet	juillet	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	_
4	2005	2005	NUM	_	NumType=Card	3	nmod	_	_
5	:	:	PUNCT	_	_	6	punct	_	_
6	Réquisitoire	réquisitoire	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
7	de	de	ADP	_	_	9	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	parquet	parquet	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
10	,	,	PUNCT	_	_	9	punct	_	_
11	qui	qui	PRON	_	PronType=Rel	12	nsubj	_	_
12	demande	demander	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	acl:relcl	_	_
13	quatre	quatre	NUM	_	NumType=Card	14	nummod	_	_
14	ans	an	NOUN	_	Gender=Masc|Number=Plur	12	obj	_	_
15	de	de	ADP	_	_	16	case	_	_
16	prison	prison	NOUN	_	Gender=Fem|Number=Sing	14	nmod	_	_
17	dont	dont	PRON	_	PronType=Rel	19	nmod	_	_
18	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	an	an	NOUN	_	Gender=Masc|Number=Sing	14	acl:relcl	_	_
20	ferme	ferme	ADJ	_	Number=Sing	19	amod	_	_
21	contre	contre	ADP	_	_	22	case	_	_
22	Didier	Didier	PROPN	_	Gender=Masc|Number=Sing	14	nmod	_	_
23	Schuller	Schuller	PROPN	_	_	22	flat:name	_	SpaceAfter=No
24	,	,	PUNCT	_	_	22	punct	_	_
25	qualifié	qualifier	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	22	acl	_	_
26	de	de	ADP	_	_	28	case	_	_
27	"	"	PUNCT	_	_	28	punct	_	SpaceAfter=No
28	fanfaron	fanfaron	NOUN	_	Gender=Masc|Number=Sing	25	xcomp	_	SpaceAfter=No
29	"	"	PUNCT	_	_	28	punct	_	SpaceAfter=No
30	,	,	PUNCT	_	_	14	punct	_	_
31	et	et	CCONJ	_	_	33	cc	_	_
32	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	33	det	_	_
33	relaxe	relaxe	NOUN	_	Gender=Fem|Number=Sing	14	conj	_	_
34	pour	pour	ADP	_	_	35	case	_	_
35	Patrick	Patrick	PROPN	_	Gender=Masc|Number=Sing	33	orphan	_	_
36	Balkany	Balkany	PROPN	_	_	35	flat:name	_	SpaceAfter=No
37	.	.	PUNCT	_	_	6	punct	_	_

~~~


