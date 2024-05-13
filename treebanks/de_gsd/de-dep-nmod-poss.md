---
layout: base
title:  'Statistics of nmod:poss in UD_German'
udver: '2'
---

## Treebank Statistics: UD_German: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="de-dep-nmod.html">nmod</a></tt>.

76 nodes (0%) are attached to their parents as `nmod:poss`.

76 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22368421052632.

The following 2 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="de-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de-pos-DET.html">DET</a></tt> (73; 96% instances), <tt><a href="de-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de-pos-ADJ.html">ADJ</a></tt> (3; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Deren	der	DET	PDAT	PronType=Dem	2	nmod:poss	_	_
2	Zahlungsmittel	Zahlungsmittel	NOUN	NN	_	0	root	_	_
3	waren	sein	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	2	cop	_	_
4	Transferrubel	Transferrubel	PROPN	NN	Case=Nom|Number=Sing	2	nsubj	_	_
5	und	und	CCONJ	KON	_	6	cc	_	_
6	Goldreserven	Goldreserve	NOUN	NN	_	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:poss	color:blue
1	﻿Seine	﻿Seine	ADJ	ADJA	_	3	nmod:poss	_	_
2	ältere	alt	ADJ	ADJA	Case=Nom|Number=Sing	3	amod	_	_
3	Schwester	Schwester	NOUN	NN	Case=Nom|Number=Sing	7	nsubj	_	_
4	Eniola	Eniola	PROPN	NE	_	3	appos	_	_
5	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	englische	englisch	ADJ	ADJA	Degree=Pos	7	amod	_	_
7	Fußballnationalspielerin	Fußballnationalspielerin	NOUN	NN	_	0	root	_	SpaceAfter=No
8	.	.	PUNCT	$.	_	7	punct	_	_

~~~


