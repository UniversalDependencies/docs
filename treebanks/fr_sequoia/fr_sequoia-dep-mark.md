---
layout: base
title:  'Statistics of mark in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `mark`

This relation is universal.

1497 nodes (2%) are attached to their parents as `mark`.

1497 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.39412157648631.

The following 15 pairs of parts of speech are connected with `mark`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (759; 51% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-SCONJ.html">SCONJ</a></tt> (503; 34% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-SCONJ.html">SCONJ</a></tt> (81; 5% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-SCONJ.html">SCONJ</a></tt> (61; 4% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (27; 2% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (25; 2% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-SCONJ.html">SCONJ</a></tt> (11; 1% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (10; 1% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-SCONJ.html">SCONJ</a></tt> (6; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mark	color:blue
1	à	à	ADP	_	_	2	mark	_	_
2	conserver	conserver	VERB	_	VerbForm=Inf	0	root	_	_
3	à	à	ADP	_	_	5	case	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	réfrigérateur	réfrigérateur	NOUN	_	Gender=Masc|Number=Sing	2	obl:mod	_	_
6	(	(	PUNCT	_	_	2	punct	_	SpaceAfter=No
7	entre	entre	ADP	_	_	9	case	_	_
8	2	2	NUM	_	NumType=Card	9	nummod	_	_
9	°C	°C	NOUN	_	_	2	obl:mod	_	_
10	et	et	CCONJ	_	_	12	cc	_	_
11	8	8	NUM	_	NumType=Card	12	nummod	_	_
12	°C	°C	NOUN	_	_	9	conj	_	SpaceAfter=No
13	)	)	PUNCT	_	_	2	punct	_	SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 mark	color:blue
1	Je	il	PRON	_	Number=Sing|Person=1	2	nsubj	_	_
2	dois	devoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	toutefois	toutefois	ADV	_	_	2	advmod	_	_
4	être	être	AUX	_	VerbForm=Inf	5	cop	_	_
5	honnête	honnête	ADJ	_	Number=Sing	2	xcomp	_	_
6	et	et	CCONJ	_	_	7	cc	_	_
7	dire	dire	VERB	_	VerbForm=Inf	5	conj	_	_
8	que	que	SCONJ	_	_	12	mark	_	_
9	personne	personne	PRON	_	Number=Sing	12	nsubj	_	_
10	ne	ne	ADV	_	Polarity=Neg	12	advmod	_	_
11	les	le	PRON	_	Number=Plur|Person=3	12	obj	_	_
12	aide	aider	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 mark	color:blue
1	Je	il	PRON	_	Number=Sing|Person=1	3	nsubj	_	_
2	ne	ne	ADV	_	Polarity=Neg	3	advmod	_	_
3	pense	penser	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	vraiment	vraiment	ADV	_	_	5	advmod	_	_
5	pas	pas	ADV	_	Polarity=Neg	3	advmod	_	_
6	que	que	SCONJ	_	_	10	mark	_	_
7	cela	cela	PRON	_	Number=Sing|PronType=Dem	10	nsubj	_	_
8	soit	être	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
9	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	problème	problème	NOUN	_	Gender=Masc|Number=Sing	3	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


