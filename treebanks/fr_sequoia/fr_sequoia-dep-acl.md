---
layout: base
title:  'Statistics of acl in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fr_sequoia-dep-acl-relcl.html">acl:relcl</a></tt>.

1069 nodes (2%) are attached to their parents as `acl`.

1065 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.11693171188026.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (1004; 94% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (36; 3% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (17; 2% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl	color:blue
1	Quel	quel	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	risque	risque	NOUN	_	Gender=Masc|Number=Sing	1	nsubj	_	_
5	associé	associer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	4	acl	_	_
6	à	à	ADP	_	_	8	case	_	_
7	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	utilisation	utilisation	NOUN	_	Gender=Fem|Number=Sing	5	obl:arg	_	_
9	d'	de	ADP	_	_	10	case	_	SpaceAfter=No
10	Aclasta	Aclasta	PROPN	_	_	8	nmod	_	_
11	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 14 acl	color:blue
1	-	-	PUNCT	_	_	2	punct	_	_
2	Jean-Claude	Jean-Claude	PROPN	_	_	0	root	_	_
3	Méry	Méry	PROPN	_	_	2	flat:name	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	ancien	ancien	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
6	collecteur	collecteur	NOUN	_	Gender=Masc|Number=Sing	2	appos	_	_
7	de	de	ADP	_	_	8	case	_	_
8	fonds	fonds	NOUN	_	Gender=Masc|Number=Plur	6	nmod	_	_
9	occulte	occulte	ADJ	_	Number=Sing	8	amod	_	_
10	de	de	ADP	_	_	12	case	_	_
11	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	RPR	RPR	PROPN	_	_	8	nmod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	6	punct	_	_
14	décédé	décéder	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl	_	SpaceAfter=No
15	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 19 acl	color:blue
1	Les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	Irakiens	irakien	NOUN	_	Gender=Masc|Number=Plur	5	nsubj	_	_
3	lui	lui	PRON	_	Number=Sing|Person=3|PronType=Prs	5	iobj	_	_
4	avaient	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	5	aux:tense	_	_
5	plongé	plonger	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	tête	tête	NOUN	_	Gender=Fem|Number=Sing	5	obj	_	_
8	dans	dans	ADP	_	_	10	case	_	_
9	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	bassin	bassin	NOUN	_	Gender=Masc|Number=Sing	5	obl:arg	_	SpaceAfter=No
11	,	,	PUNCT	_	_	5	punct	_	_
12	jusqu'	jusque	ADP	_	_	14	case	_	SpaceAfter=No
13	à	à	ADP	_	_	14	case	_	_
14	ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	obl:mod	_	_
15	qu'	que	SCONJ	_	_	19	mark	_	SpaceAfter=No
16	il	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	19	nsubj:pass	_	_
17	soit	être	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	aux:pass	_	_
18	presque	presque	ADV	_	_	19	advmod	_	_
19	noyé	noyer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	14	acl	_	SpaceAfter=No
20	.	.	PUNCT	_	_	14	punct	_	_

~~~


