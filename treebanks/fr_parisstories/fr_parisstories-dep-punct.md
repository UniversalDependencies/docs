---
layout: base
title:  'Statistics of punct in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `punct`

This relation is universal.

8189 nodes (19%) are attached to their parents as `punct`.

5246 instances of `punct` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.75662474050556.

The following 14 pairs of parts of speech are connected with `punct`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PUNCT.html">PUNCT</a></tt> (3165; 39% instances), <tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_parisstories-pos-PUNCT.html">PUNCT</a></tt> (1591; 19% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-PUNCT.html">PUNCT</a></tt> (1381; 17% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-PUNCT.html">PUNCT</a></tt> (765; 9% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-PUNCT.html">PUNCT</a></tt> (427; 5% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-PUNCT.html">PUNCT</a></tt> (399; 5% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-PUNCT.html">PUNCT</a></tt> (106; 1% instances), <tt><a href="fr_parisstories-pos-DET.html">DET</a></tt>-<tt><a href="fr_parisstories-pos-PUNCT.html">PUNCT</a></tt> (99; 1% instances), <tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_parisstories-pos-PUNCT.html">PUNCT</a></tt> (97; 1% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-PUNCT.html">PUNCT</a></tt> (62; 1% instances), <tt><a href="fr_parisstories-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fr_parisstories-pos-PUNCT.html">PUNCT</a></tt> (44; 1% instances), <tt><a href="fr_parisstories-pos-X.html">X</a></tt>-<tt><a href="fr_parisstories-pos-PUNCT.html">PUNCT</a></tt> (23; 0% instances), <tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_parisstories-pos-PUNCT.html">PUNCT</a></tt> (18; 0% instances), <tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_parisstories-pos-PUNCT.html">PUNCT</a></tt> (12; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 punct	color:blue
1	donc	donc	ADV	_	_	4	advmod	_	_
2	comment	comment	ADV	_	_	4	advmod	_	_
3	je	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	fais	faire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	gougères	gougère	NOUN	_	Gender=Fem|Number=Plur	4	obj	_	_
7	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 punct	color:blue
1	parce	parce	ADV	_	ExtPos=SCONJ	9	mark	_	Idiom=Yes
2	que	que	SCONJ	_	_	1	fixed	_	InIdiom=Yes
3	euh	euh	INTJ	_	_	9	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	je	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
6	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	pas	pas	ADV	_	Polarity=Neg	9	advmod	_	_
8	très	très	ADV	_	_	9	advmod	_	_
9	douée	doué	ADJ	_	Gender=Fem|Number=Sing	0	root	_	_
10	en	en	ADP	_	_	11	case	_	_
11	philosophie	philosophie	NOUN	_	Gender=Fem|Number=Sing	9	obl:mod	_	_
12	à	à	ADP	_	_	14	case	_	_
13	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	base	base	NOUN	_	Gender=Fem|Number=Sing	9	obl:mod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 punct	color:blue
1	et	et	CCONJ	_	_	5	cc	_	_
2	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	SpaceAfter=No
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	soixante-quinze	soixante-quinze	NUM	_	Number=Plur	5	nummod	_	_
5	grammes	gramme	NOUN	_	Gender=Masc|Number=Plur	0	root	_	_
6	de	de	ADP	_	_	7	case	_	_
7	beurre	beurre	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	5	punct	_	_

~~~


