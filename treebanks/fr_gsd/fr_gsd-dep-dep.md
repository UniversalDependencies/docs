---
layout: base
title:  'Statistics of dep in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `dep`

This relation is universal.

100 nodes (0%) are attached to their parents as `dep`.

87 instances of `dep` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39.

The following 14 pairs of parts of speech are connected with `dep`: <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-PART.html">PART</a></tt> (84; 84% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (4; 4% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep	color:blue
1	Va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|wordform=va
2	-t	t	PART	_	_	3	dep	_	SpaceAfter=No
3	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	nsubj	_	wordform=il
4	se	se	PRON	_	Person=3|PronType=Prs	5	expl:pass	_	_
5	circonscrire	circonscrire	VERB	_	VerbForm=Inf	1	xcomp	_	_
6	à	à	ADP	_	_	9	case	_	_
7	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
8	seule	seul	ADJ	_	Gender=Fem|Number=Sing	9	amod	_	_
9	matière	matière	NOUN	_	Gender=Fem|Number=Sing	5	obl:arg	_	_
10	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 dep	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	wordform=la
2	viande	viande	NOUN	_	Gender=Fem|Number=Sing	4	nsubj	_	_
3	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	cop	_	_
4	succulente	succulent	ADJ	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	10	punct	_	_
6	et	et	CCONJ	_	_	10	cc	_	_
7	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	sauce	sauce	NOUN	_	Gender=Fem|Number=Sing	10	nsubj	_	_
9	se	se	PRON	_	Person=3|PronType=Prs	10	expl:pass	_	_
10	marie	marier	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	_
11	parfaitement	parfaitement	ADV	_	_	10	advmod	_	_
12	avec	avec	ADP	_	_	10	dep	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 dep	color:blue
1	Cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	wordform=cette
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
13	,	,	PUNCT	_	_	20	punct	_	_
14	où	où	ADV	_	PronType=Rel	20	advmod	_	_
15	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	17	det	_	_
16	trois	trois	NUM	_	_	17	nummod	_	_
17	relations	relation	NOUN	_	Gender=Fem|Number=Plur	20	nsubj	_	_
18	possibles	possible	ADJ	_	Gender=Fem|Number=Plur	17	amod	_	_
19	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	_
20	inférieur	inférieur	ADJ	_	Gender=Masc|Number=Sing	8	acl:relcl	_	_
21	à	à	ADP	_	_	20	dep	_	SpaceAfter=No
22	,	,	PUNCT	_	_	23	punct	_	_
23	égal	égal	ADJ	_	Gender=Masc|Number=Sing	20	conj	_	SpaceAfter=No
24	,	,	PUNCT	_	_	26	punct	_	_
25	et	et	CCONJ	_	_	26	cc	_	_
26	supérieur	supérieur	ADJ	_	Gender=Masc|Number=Sing	20	conj	_	_
27	à	à	ADP	_	_	26	orphan	_	SpaceAfter=No
28	.	.	PUNCT	_	_	5	punct	_	_

~~~


