---
layout: base
title:  'Statistics of orphan in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `orphan`

This relation is universal.

16 nodes (0%) are attached to their parents as `orphan`.

14 instances of `orphan` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.125.

The following 13 pairs of parts of speech are connected with `orphan`: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (3; 19% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (2; 13% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 15 orphan	color:blue
1	A	à	ADP	_	_	3	case	_	_
2	aucun	aucun	DET	_	Gender=Masc|Number=Sing|Polarity=Neg|PronType=Neg	3	det	_	_
3	moment	moment	NOUN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	de	de	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	jour	jour	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
8	ou	ou	CCONJ	_	_	11	cc	_	_
9	de	de	ADP	_	_	11	case	_	_
10	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	nuit	nuit	NOUN	_	Gender=Fem|Number=Sing	7	conj	_	_
12	s'	si	SCONJ	_	_	15	mark	_	SpaceAfter=No
13	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	_
14	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	obj	_	_
15	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	orphan	_	SpaceAfter=No
16	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 27 orphan	color:blue
1	Cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	combinaison	combinaison	NOUN	_	Gender=Fem|Number=Sing	5	nsubj	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	spécialement	spécialement	ADV	_	_	5	advmod	_	_
5	précieuse	précieux	ADJ	_	Gender=Fem|Number=Sing	0	root	_	_
6	pour	pour	ADP	_	_	8	case	_	_
7	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
8	relations	relation	NOUN	_	Gender=Fem|Number=Plur	5	obl	_	_
9	ordinales	ordinal	ADJ	_	Gender=Fem|Number=Plur	8	amod	_	_
10	entre	entre	ADP	_	_	12	case	_	_
11	deux	deux	NUM	_	_	12	nummod	_	_
12	valeurs	valeur	NOUN	_	Gender=Fem|Number=Plur	8	nmod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	8	punct	_	_
14	où	où	ADV	_	PronType=Rel	20	advmod	_	_
15	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	17	det	_	_
16	trois	trois	NUM	_	_	17	nummod	_	_
17	relations	relation	NOUN	_	Gender=Fem|Number=Plur	20	nsubj	_	_
18	possibles	possible	ADJ	_	Gender=Fem|Number=Plur	17	amod	_	_
19	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	_
20	inférieur	inférieur	ADJ	_	Gender=Masc|Number=Sing	8	acl:relcl	_	_
21	à	à	ADP	_	_	20	orphan	_	SpaceAfter=No
22	,	,	PUNCT	_	_	23	punct	_	_
23	égal	égal	ADJ	_	Gender=Masc|Number=Sing	20	conj	_	SpaceAfter=No
24	,	,	PUNCT	_	_	20	punct	_	_
25	et	et	CCONJ	_	_	26	cc	_	_
26	supérieur	supérieur	ADJ	_	Gender=Masc|Number=Sing	20	conj	_	_
27	à	à	ADP	_	_	26	orphan	_	SpaceAfter=No
28	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 orphan	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	toponyme	toponyme	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
3	Mezzani	Mezzani	PROPN	_	_	2	appos	_	_
4	vient	venir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	de	de	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	mot	mot	NOUN	_	Gender=Masc|Number=Sing	4	obl:arg	_	_
8	latin	latin	ADJ	_	Gender=Masc|Number=Sing	7	amod	_	_
9	"	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	medianus	medianus	ADJ	_	Gender=Masc|Number=Sing	7	appos	_	SpaceAfter=No
11	"	"	PUNCT	_	_	10	punct	_	_
12	qui	qui	PRON	_	PronType=Rel	13	nsubj	_	_
13	signifie	signifier	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	_
14	à	à	ADP	_	_	16	case	_	INMWE=Yes
15	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	INMWE=Yes
16	milieu	milieu	NOUN	_	Gender=Masc|Number=Sing	13	obj	_	MWEPOS=NOUN
17	de	de	ADP	_	_	16	orphan	_	INMWE=Yes|SpaceAfter=No
18	,	,	PUNCT	_	_	20	punct	_	_
19	autrefois	autrefois	ADV	_	_	20	advmod	_	_
20	utilisé	utiliser	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	acl	_	_
21	pour	pour	ADP	_	_	22	mark	_	_
22	désigner	désigner	VERB	_	VerbForm=Inf	20	advcl	_	_
23	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	24	det	_	_
24	îles	île	NOUN	_	Gender=Fem|Number=Plur	22	obj	_	_
25	de	de	ADP	_	_	27	case	_	_
26	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	_	_
27	Pô	Pô	PROPN	_	_	24	nmod	_	SpaceAfter=No
28	.	.	PUNCT	_	_	4	punct	_	_

~~~


