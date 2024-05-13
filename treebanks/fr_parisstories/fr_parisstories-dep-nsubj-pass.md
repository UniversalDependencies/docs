---
layout: base
title:  'Statistics of nsubj:pass in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="fr_parisstories-dep-nsubj-caus.html">nsubj:caus</a></tt>.

45 nodes (0%) are attached to their parents as `nsubj:pass`.

45 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.62222222222222.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (43; 96% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (2; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	4	nsubj:pass	_	_
2	s'	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	4	obj	_	SpaceAfter=No
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	vues	voir	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubj:pass	color:blue
1	et	et	CCONJ	_	_	27	cc	_	_
2	comme	comme	SCONJ	_	_	10	mark	_	_
3	à	à	ADP	_	_	5	case	_	_
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Réunion	Réunion	PROPN	_	_	10	obl:mod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	8	det	_	_
8	saisons	saison	NOUN	_	Gender=Fem|Number=Plur	10	nsubj:pass	_	_
9	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
10	inversées	inverser	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	27	advcl	_	_
11	par	par	ADP	_	_	12	case	_	_
12	rapport	rapport	NOUN	_	Gender=Masc|Number=Sing	10	obl:mod	_	_
13	à	à	ADP	_	_	15	case	_	_
14	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	métropole	métropole	NOUN	_	Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	_	_
17	euh	euh	INTJ	_	_	10	discourse	_	SpaceAfter=No
18	,	,	PUNCT	_	_	10	punct	_	_
19	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	_
20	période	période	NOUN	_	Gender=Fem|Number=Sing	27	dislocated	_	_
21	de	de	ADP	_	_	22	case	_	_
22	Noël	Noël	PROPN	_	_	20	nmod	_	SpaceAfter=No
23	,	,	PUNCT	_	_	27	punct	_	_
24	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	27	nsubj	_	SpaceAfter=No
25	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	cop	_	_
26	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	27	det	_	SpaceAfter=No
27	été	été	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
28	pour	pour	ADP	_	_	29	case	_	_
29	nous	nous	PRON	_	Number=Plur|Person=1|PronType=Prs	27	obl:mod	_	SpaceAfter=No
30	.	.	PUNCT	_	_	27	punct	_	_

~~~


