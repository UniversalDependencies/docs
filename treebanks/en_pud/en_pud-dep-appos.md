---
layout: base
title:  'Statistics of appos in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `appos`

This relation is universal.

142 nodes (1%) are attached to their parents as `appos`.

142 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.27464788732394.

The following 14 pairs of parts of speech are connected with `appos`: <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (62; 44% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (23; 16% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (19; 13% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (19; 13% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="en_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="en_pud-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_pud-pos-X.html">X</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 appos	color:blue
1	Her	she	PRON	PRP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	_	_
2	1981	1981	NUM	CD	NumType=Card	3	compound	_	_
3	album	album	NOUN	NN	Number=Sing	7	nsubj	_	_
4	Wild	wild	ADJ	JJ	Degree=Pos	5	amod	_	_
5	West	west	PROPN	NN	Number=Sing	3	appos	_	_
6	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	_	_
7	one	one	NUM	CD	NumType=Card	0	root	_	_
8	of	of	ADP	IN	_	11	case	_	_
9	her	she	PRON	PRP$	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	11	nmod:poss	_	_
10	biggest	biggest	ADJ	JJS	Degree=Sup	11	amod	_	_
11	sellers	seller	NOUN	NNS	Number=Plur	7	nmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 appos	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	_
2	will	will	AUX	MD	VerbForm=Fin	3	aux	_	_
3	play	play	VERB	VB	VerbForm=Inf	0	root	_	_
4	on	on	ADP	IN	_	5	case	_	_
5	Saturday	Saturday	PROPN	NNP	Number=Sing	3	obl	_	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	_	_
7	10	10	NUM	CD	NumType=Card	8	nummod	_	_
8	June	June	PROPN	NNP	Number=Sing	5	appos	_	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 15 appos	color:blue
1	Miami	Miami	PROPN	NNP	Number=Sing	2	compound	_	_
2	Bass	bass	NOUN	NN	Number=Sing	3	compound	_	_
3	producers	producer	NOUN	NNS	Number=Plur	5	nsubj	_	_
4	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	_	_
5	clinical	clinical	ADJ	JJ	Degree=Pos	0	root	_	_
6	in	in	ADP	IN	_	8	case	_	_
7	the	the	DET	DT	Definite=Def|PronType=Art	8	det	_	_
8	art	art	NOUN	NN	Number=Sing	5	obl	_	_
9	of	of	ADP	IN	_	10	mark	_	_
10	moving	move	VERB	VBG	VerbForm=Ger	8	acl	_	_
11	butts	butt	NOUN	NNS	Number=Plur	10	obj	_	SpaceAfter=No
12	—	—	PUNCT	:	_	8	punct	_	SpaceAfter=No
13	their	they	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	15	nmod:poss	_	_
14	main	main	ADJ	JJ	Degree=Pos	15	amod	_	_
15	concern	concern	NOUN	NN	Number=Sing	8	appos	_	SpaceAfter=No
16	.	.	PUNCT	.	_	5	punct	_	_

~~~


