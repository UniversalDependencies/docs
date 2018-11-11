---
layout: base
title:  'Statistics of iobj in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="fr_gsd-dep-iobj-agent.html">iobj:agent</a></tt>.

845 nodes (0%) are attached to their parents as `iobj`.

840 instances of `iobj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.52426035502959.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (790; 93% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (28; 3% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (21; 2% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	Elle	elle	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	y	y	PRON	_	_	3	iobj	_	_
3	incarnera	incarner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Poussette	Poussette	PROPN	_	_	3	obj	_	_
6	de	de	ADP	_	_	7	case	_	_
7	Manon	Manon	PROPN	_	_	5	nmod	_	_
8	peu	peu	ADV	_	_	10	det	_	MWEPOS=DET
9	de	un	DET	_	Definite=Ind|PronType=Art	8	fixed	_	_
10	temps	temps	NOUN	_	Gender=Masc|Number=Sing	3	obl	_	_
11	après	après	ADV	_	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 iobj	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	réalité	réalité	NOUN	_	Gender=Fem|Number=Sing	7	nsubj	_	_
3	en	en	PRON	_	Person=3	7	iobj	_	_
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
5	malheureusement	malheureusement	ADV	_	_	7	advmod	_	_
6	toute	tout	ADV	_	_	7	advmod	_	_
7	différente	différent	ADJ	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 iobj	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
2	en	en	PRON	_	Person=3	8	iobj	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
4	de	de	ADP	_	_	8	advmod	_	MWEPOS=ADV
5	même	même	ADV	_	_	4	fixed	_	_
6	pour	pour	ADP	_	_	8	case	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	master	master	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
9	recherche	recherche	NOUN	_	Gender=Fem|Number=Sing	8	compound	_	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


