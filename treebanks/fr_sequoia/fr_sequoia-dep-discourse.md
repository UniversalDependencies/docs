---
layout: base
title:  'Statistics of discourse in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `discourse`

This relation is universal.

3 nodes (0%) are attached to their parents as `discourse`.

2 instances of `discourse` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.66666666666667.

The following 2 pairs of parts of speech are connected with `discourse`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-INTJ.html">INTJ</a></tt> (2; 67% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-INTJ.html">INTJ</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 1 discourse	color:blue
1	Eh	eh	INTJ	_	_	15	discourse	_	EXTPOS=I|MWE=eh_bien
2	bien	bien	ADV	_	_	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	_	_	15	punct	_	_
4	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	célèbre	célèbre	ADJ	_	Number=Sing	6	amod	_	_
6	retraité	retraité	NOUN	_	Gender=Masc|Number=Sing	15	nsubj	_	_
7	américain	américain	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	6	punct	_	_
9	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	10	det	_	SpaceAfter=No
10	astronaute	astronaute	NOUN	_	Number=Sing	6	appos	_	_
11	John	John	PROPN	_	Gender=Masc|Number=Sing	10	appos	_	_
12	Glenn	Glenn	PROPN	_	Gender=Masc|Number=Sing	11	flat:name	_	SpaceAfter=No
13	,	,	PUNCT	_	_	15	punct	_	_
14	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	aux:tense	_	_
15	parti	partir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
16	dans	dans	ADP	_	_	18	case	_	_
17	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	18	det	_	SpaceAfter=No
18	espace	espace	NOUN	_	Number=Sing	15	obl:arg	_	_
19	à	à	ADP	_	_	21	case	_	_
20	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	21	det	_	SpaceAfter=No
21	âge	âge	NOUN	_	Gender=Masc|Number=Sing	15	obl:mod	_	_
22	de	de	ADP	_	_	24	case	_	_
23	69	69	NUM	_	NumType=Card	24	nummod	_	_
24	ans	an	NOUN	_	Gender=Masc|Number=Plur	21	nmod	_	SpaceAfter=No
25	.	.	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	Hélas	hélas	INTJ	_	_	6	discourse	_	_
2	ce	ce	PRON	_	Number=Sing|Person=3	6	nsubj	_	_
3	n'	ne	ADV	_	Polarity=Neg	6	advmod	_	SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	pas	pas	ADV	_	Polarity=Neg	6	advmod	_	_
6	satisfaisant	satisfaisant	ADJ	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


