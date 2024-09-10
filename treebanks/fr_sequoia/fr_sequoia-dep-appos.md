---
layout: base
title:  'Statistics of appos in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `appos`

This relation is universal.

487 nodes (1%) are attached to their parents as `appos`.

487 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.60985626283368.

The following 14 pairs of parts of speech are connected with `appos`: <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (241; 49% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (120; 25% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (82; 17% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (9; 2% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (9; 2% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-X.html">X</a></tt> (4; 1% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 appos	color:blue
1	L'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	étude	étude	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
3	clinique	clinique	ADJ	_	Number=Sing	2	amod	_	_
4	ACUITY	ACUITY	PROPN	_	_	2	nmod	_	_
5	(	(	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	SCA	SCA	NOUN	_	_	2	appos	_	SpaceAfter=No
7	)	)	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 appos	color:blue
1	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Verdun	Verdun	PROPN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	ville	ville	NOUN	_	Gender=Fem|Number=Sing	2	appos	_	_
5	de	de	ADP	_	_	6	case	_	_
6	lumière	lumière	NOUN	_	Gender=Fem|Number=Sing	4	nmod	_	_
7	!	!	PUNCT	_	_	2	punct	_	SpaceAfter=No
8	"	"	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 appos	color:blue
1	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	incidence	incidence	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
3	de	de	ADP	_	_	5	case	_	_
4	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	fractures	fracture	NOUN	_	Gender=Fem|Number=Plur	2	nmod	_	_
6	en	en	ADP	_	_	7	case	_	SpaceAfter=No
7	%	%	NOUN	_	Gender=Masc	2	nmod	_	_
8	(	(	PUNCT	_	_	9	punct	_	SpaceAfter=No
9	IC	IC	PROPN	_	_	2	appos	_	SpaceAfter=No
10	)	)	PUNCT	_	_	9	punct	_	_

~~~


