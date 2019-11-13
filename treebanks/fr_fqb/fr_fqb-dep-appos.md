---
layout: base
title:  'Statistics of appos in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `appos`

This relation is universal.

55 nodes (0%) are attached to their parents as `appos`.

55 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.56363636363636.

The following 2 pairs of parts of speech are connected with `appos`: <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (54; 98% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 appos	color:blue
1	Quand	quand	ADV	_	PronType=Int	10	advmod	_	_
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	cardinal	cardinal	NOUN	_	Gender=Masc|Number=Sing	10	nsubj	_	_
4	Juan	Juan	PROPN	_	Gender=Masc|Number=Sing	3	appos	_	_
5	Jesus	Jesus	PROPN	_	Gender=Masc|Number=Sing	4	flat:name	_	_
6	Posadas	Posadas	PROPN	_	_	4	flat:name	_	_
7	Ocampo	Ocampo	PROPN	_	_	4	flat:name	_	_
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:tense	_	SpaceAfter=No
9	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	10	expl:subj	_	_
10	mort	mourir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
11	?	?	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 appos	color:blue
1	Quel	quel	DET	_	Gender=Masc|Number=Sing|PronType=Int	2	det	_	_
2	comédien	comédien	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	célèbre	célèbre	ADJ	_	Number=Sing	0	root	_	_
5	pour	pour	ADP	_	_	7	case	_	_
6	sa	son	DET	_	Gender=Fem|Number=Sing|Poss=Yes	7	det	_	_
7	réplique	réplique	NOUN	_	Gender=Fem|Number=Sing	4	obl:arg	_	_
8	"	"	PUNCT	_	_	9	punct	_	SpaceAfter=No
9	Can	Can	X	_	_	7	appos	_	_
10	we	we	X	_	_	9	flat:foreign	_	_
11	talk	talk	X	_	_	9	flat:foreign	_	SpaceAfter=No
12	"	"	PUNCT	_	_	9	punct	_	_
13	?	?	PUNCT	_	_	4	punct	_	_

~~~


