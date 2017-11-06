---
layout: base
title:  'Statistics of iobj in UD_French'
udver: '2'
---

## Treebank Statistics: UD_French: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="fr-dep-iobj-agent.html">iobj:agent</a></tt>.

837 nodes (0%) are attached to their parents as `iobj`.

832 instances of `iobj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.70250896057348.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-PRON.html">PRON</a></tt> (768; 92% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-PRON.html">PRON</a></tt> (39; 5% instances), <tt><a href="fr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr-pos-PRON.html">PRON</a></tt> (24; 3% instances), <tt><a href="fr-pos-PRON.html">PRON</a></tt>-<tt><a href="fr-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="fr-pos-ADV.html">ADV</a></tt>-<tt><a href="fr-pos-PRON.html">PRON</a></tt> (1; 0% instances).


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
8	peu	peu	ADV	_	_	10	det	_	_
9	de	un	DET	_	Definite=Ind|PronType=Art	8	fixed	_	_
10	temps	temps	NOUN	_	Gender=Masc|Number=Sing	3	obl	_	_
11	après	après	ADV	_	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

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
4	de	de	ADP	_	_	5	case	_	_
5	même	même	ADV	_	_	8	advmod	_	_
6	pour	pour	ADP	_	_	8	case	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	master	master	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
9	recherche	recherche	NOUN	_	Gender=Fem|Number=Sing	8	compound	_	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 iobj	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	coût	coût	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
3	en	en	PRON	_	Person=3	6	iobj	_	_
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	moins	moins	ADV	_	_	6	advmod	_	_
6	difficile	difficile	ADJ	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


