---
layout: base
title:  'Statistics of mark in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `mark`

This relation is universal.

1466 nodes (2%) are attached to their parents as `mark`.

1466 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.43246930422919.

The following 16 pairs of parts of speech are connected with `mark`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (784; 53% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-SCONJ.html">SCONJ</a></tt> (515; 35% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-SCONJ.html">SCONJ</a></tt> (60; 4% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-SCONJ.html">SCONJ</a></tt> (50; 3% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (25; 2% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (10; 1% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (5; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_sequoia-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mark	color:blue
1	à	à	ADP	_	_	2	mark	_	_
2	conserver	conserver	VERB	_	VerbForm=Inf	0	root	_	Subject=Generic
3	à	à	ADP	_	_	5	case	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	réfrigérateur	réfrigérateur	NOUN	_	Gender=Masc|Number=Sing	2	obl:mod	_	_
6	(	(	PUNCT	_	_	9	punct	_	SpaceAfter=No
7	entre	entre	ADP	_	_	9	case	_	_
8	2	2	NUM	_	NumType=Card	9	nummod	_	_
9	°C	°C	NOUN	_	_	2	obl:mod	_	_
10	et	et	CCONJ	_	_	12	cc	_	_
11	8	8	NUM	_	NumType=Card	12	nummod	_	_
12	°C	°C	NOUN	_	_	9	conj	_	SpaceAfter=No
13	)	)	PUNCT	_	_	9	punct	_	SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 mark	color:blue
1	Je	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	dois	devoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	toutefois	toutefois	ADV	_	_	2	advmod	_	_
4	être	être	AUX	_	VerbForm=Inf	5	cop	_	Subject=SubjRaising
5	honnête	honnête	ADJ	_	Number=Sing	2	xcomp	_	_
6	et	et	CCONJ	_	_	7	cc	_	_
7	dire	dire	VERB	_	VerbForm=Inf	5	conj	_	Subject=Instantiated
8	que	que	SCONJ	_	_	12	mark	_	_
9	personne	personne	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Neg	12	nsubj	_	_
10	ne	ne	ADV	_	Polarity=Neg	12	advmod	_	_
11	les	eux	PRON	_	Number=Plur|Person=3|PronType=Prs	12	obj	_	_
12	aide	aider	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 mark	color:blue
1	AUTRE(S)	autre	ADJ	_	Gender=Fem	2	amod	_	_
2	MISE(S)	mise	NOUN	_	Gender=Fem	0	root	_	_
3	EN	en	ADP	_	_	4	case	_	_
4	GARDE	garde	NOUN	_	Number=Sing	2	nmod	_	_
5	SPECIALE(S)	spécial	ADJ	_	Gender=Fem	2	amod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	SI	si	SCONJ	_	_	8	mark	_	_
8	NECESSAIRE	nécessaire	ADJ	_	Gender=Masc|Number=Sing	2	acl	_	_

~~~


