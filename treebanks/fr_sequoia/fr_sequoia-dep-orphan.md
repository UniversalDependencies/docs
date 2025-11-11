---
layout: base
title:  'Statistics of orphan in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `orphan`

This relation is universal.

39 nodes (0%) are attached to their parents as `orphan`.

36 instances of `orphan` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.56410256410256.

The following 12 pairs of parts of speech are connected with `orphan`: <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (20; 51% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (4; 10% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (3; 8% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (2; 5% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 27 orphan	color:blue
1	De	de	ADP	_	_	3	case	_	_
2	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	somme	somme	NOUN	_	Number=Sing	11	obl:mod	_	Gender[lex]=Fem
4	de	de	ADP	_	_	6	case	_	_
5	4,2	4,2	NUM	_	NumType=Card	6	nummod	_	Number[lex]=Plur
6	milliards	milliard	NOUN	_	Number=Plur|NumType=Card	3	nmod	_	Gender[lex]=Masc|SpaceAfter=No
7	,	,	PUNCT	_	_	3	punct	_	_
8	80	80	NUM	_	NumType=Card	9	nummod	_	Number[lex]=Plur|SpaceAfter=No
9	%	%	NOUN	_	_	11	nsubj:pass	_	Gender[lex]=Masc
10	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux:pass	_	_
11	consacré	consacrer	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	Tense[denom]=Past
12	à	à	ADP	_	_	14	case	_	_
13	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	reconstruction	reconstruction	NOUN	_	Number=Sing	11	obl:arg	_	Gender[lex]=Fem|SpaceAfter=No
15	,	,	PUNCT	_	_	17	punct	_	_
16	17	17	NUM	_	NumType=Card	17	nummod	_	Number[lex]=Plur|SpaceAfter=No
17	%	%	NOUN	_	_	11	conj	_	Gender[lex]=Masc
18	à	à	ADP	_	_	20	case	_	_
19	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	_
20	démocratie	démocratie	NOUN	_	Number=Sing	17	orphan	_	Gender[lex]=Fem
21	et	et	CCONJ	_	_	24	cc	_	_
22	seulement	seulement	ADV	_	_	24	advmod	_	_
23	3	3	NUM	_	NumType=Card	24	nummod	_	Number[lex]=Plur|SpaceAfter=No
24	%	%	NOUN	_	_	11	conj	_	Gender[lex]=Masc
25	à	à	ADP	_	_	27	case	_	_
26	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	27	det	_	_
27	sécurité	sécurité	NOUN	_	Number=Sing	24	orphan	_	Gender[lex]=Fem|SpaceAfter=No
28	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 orphan	color:blue
1	François	François	PROPN	_	Gender=Masc|Number=Sing	5	nsubj	_	_
2	Mitterrand	Mitterrand	PROPN	_	_	1	flat:name	_	Gender[lex]=Unknown
3	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	cop	_	_
4	alors	alors	ADV	_	_	5	advmod	_	_
5	ministre	ministre	NOUN	_	Number=Sing	0	root	_	Gender[lex]=Masc
6	de	de	ADP	_	_	8	case	_	_
7	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	8	det	_	_
8	Colonies	colonie	NOUN	_	Number=Plur	5	nmod	_	Gender[lex]=Fem
9	(	(	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	à	à	ADP	_	ExtPos=ADV	5	advmod	_	Idiom=Yes
11	partir	partir	VERB	_	VerbForm=Inf	10	fixed	_	InIdiom=Yes|Subject=Generic
12	de	de	ADP	_	_	13	case	_	_
13	1950	1950	NUM	_	NumType=Card	10	obl:arg	_	Number[lex]=Sing|SpaceAfter=No
14	)	)	PUNCT	_	_	10	punct	_	_
15	et	et	CCONJ	_	_	16	cc	_	_
16	René	René	PROPN	_	Gender=Masc|Number=Sing	5	conj	_	_
17	Bousquet	Bousquet	PROPN	_	_	16	flat:name	_	Gender[lex]=Unknown
18	directeur	directeur	NOUN	_	Number=Sing	16	orphan	_	Gender[lex]=Masc
19	de	de	ADP	_	_	21	case	_	_
20	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	Banque	banque	NOUN	_	Number=Sing	18	nmod	_	Gender[lex]=Fem
22	d'	de	ADP	_	_	23	case	_	SpaceAfter=No
23	Indochine	Indochine	PROPN	_	_	21	nmod	_	Gender[lex]=Unknown|SpaceAfter=No
24	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 22 orphan	color:blue
1	Les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	3	det	_	_
2	deux	deux	NUM	_	NumType=Card	3	nummod	_	Number[lex]=Plur
3	premiers	premier	ADJ	_	Gender=Masc|Number=Plur|NumType=Ord	5	nsubj:pass	_	_
4	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
5	libérés	libérer	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	Tense[denom]=Past
6	en	en	ADP	_	_	7	case	_	_
7	juin	juin	NOUN	_	Number=Sing	5	obl:mod	_	Gender[lex]=Masc|SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	Aurel	Aurel	PROPN	_	Gender=Masc|Number=Sing	5	conj	_	_
10	Cornéa	Cornéa	PROPN	_	_	9	flat:name	_	Gender[lex]=Unknown
11	en	en	ADP	_	_	12	case	_	_
12	décembre	décembre	NOUN	_	Number=Sing	9	orphan	_	Gender[lex]=Masc
13	de	de	ADP	_	_	16	case	_	_
14	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
15	même	même	ADJ	_	Number=Sing	16	amod	_	Gender[ctxt]=Fem
16	année	année	NOUN	_	Number=Sing	12	nmod	_	Gender[lex]=Fem
17	et	et	CCONJ	_	_	18	cc	_	_
18	Jean	Jean	PROPN	_	Gender=Fem|Number=Sing	5	conj	_	_
19	Louis	Louis	PROPN	_	Gender=Masc|Number=Sing	18	flat:name	_	_
20	Normandin	Normandin	PROPN	_	_	18	nmod	_	Gender[lex]=Unknown
21	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	27	27	NUM	_	NumType=Card	18	orphan	_	Number[lex]=Sing
23	novembre	novembre	NOUN	_	Number=Sing	22	nmod	_	Gender[lex]=Masc
24	de	de	ADP	_	_	26	case	_	_
25	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	26	det	_	Gender[ctxt]=Fem|SpaceAfter=No
26	année	année	NOUN	_	Number=Sing	23	nmod	_	Gender[lex]=Fem
27	suivante	suivant	ADJ	_	Gender=Fem|Number=Sing	26	amod	_	SpaceAfter=No
28	,	,	PUNCT	_	_	22	punct	_	_
29	en	en	ADP	_	_	31	case	_	_
30	même	même	ADJ	_	Number=Sing	31	amod	_	Gender[ctxt]=Masc
31	temps	temps	NOUN	_	_	20	nmod	_	Gender[lex]=Masc
32	qu'	que	SCONJ	_	_	35	case	_	SpaceAfter=No
33	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	35	det	_	_
34	autre	autre	ADJ	_	Number=Sing	35	amod	_	Gender[ctxt]=Masc
35	journaliste	journaliste	NOUN	_	Number=Sing	31	nmod	_	Gender[lex]=Masc|SpaceAfter=No
36	,	,	PUNCT	_	_	37	punct	_	_
37	Roger	Roger	PROPN	_	Gender=Masc|Number=Sing	35	appos	_	_
38	Auque	Auque	PROPN	_	_	37	flat:name	_	Gender[lex]=Unknown|SpaceAfter=No
39	,	,	PUNCT	_	_	37	punct	_	_
40	enlevé	enlever	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	35	acl	_	Tense[denom]=Past
41	en	en	ADP	_	_	42	case	_	_
42	janvier	janvier	NOUN	_	Number=Sing	40	obl:mod	_	Gender[lex]=Masc
43	1987	1987	NUM	_	NumType=Card	42	nmod	_	Number[lex]=Sing|SpaceAfter=No
44	.	.	PUNCT	_	_	5	punct	_	_

~~~


