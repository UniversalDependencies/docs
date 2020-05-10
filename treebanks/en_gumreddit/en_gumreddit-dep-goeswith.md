---
layout: base
title:  'Statistics of goeswith in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `goeswith`

This relation is universal.

3 nodes (0%) are attached to their parents as `goeswith`.

3 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `goeswith`: <tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (1; 33% instances), <tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 33% instances), <tt><a href="en_gumreddit-pos-X.html">X</a></tt>-<tt><a href="en_gumreddit-pos-X.html">X</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 goeswith	color:blue
1	_	_	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	2	nmod:poss	_	Entity=(person-2(person-3(person-4)|Lem=*LOWER*|Len=2
2	_	_	NOUN	NN	Number=Sing	7	nsubj	_	Entity=person-3)|Lem=_|Len=4
3	_	_	CCONJ	CC	_	4	cc	_	Lem=_|Len=3
4	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	conj	_	Entity=(person-4)person-2)|Lem=_|Len=1
5	_	_	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	7	cop	_	Lem=be|Len=4
6	_	_	ADP	IN	_	7	case	_	Lem=_|Len=2
7	_	_	PROPN	NNP	Number=Sing	0	root	_	Entity=(place-5)|Lem=_|Len=6
8	_	_	VERB	VBG	VerbForm=Ger	7	advcl	_	Lem=eat|Len=6
9	_	_	NOUN	NN	Number=Sing	8	obj	_	Entity=(object-6)|Lem=_|Len=9
10	_	_	CCONJ	CC	_	12	cc	_	Lem=_|Len=3
11	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	12	nsubj	_	Entity=(person-2)|Lem=_|Len=2
12	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	7	conj	_	Lem=notice|Len=7
13	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	_	Entity=(person-7|Lem=_|Len=1
14	_	_	NOUN	NN	Number=Sing	12	obj	_	Lem=_|Len=4
15	_	_	ADP	IN	_	17	case	_	Lem=_|Len=2|Typo=Yes
16	_	_	ADP	IN	_	15	goeswith	_	Lem=_|Len=4|Typo=Yes
17	_	_	PRON	PRP	Case=Acc|Number=Plur|Person=1|PronType=Prs	14	nmod	_	Entity=(person-2)person-7)|Lem=we|Len=2
18	_	_	VERB	VBG	VerbForm=Ger	14	acl	_	Lem=talk|Len=7
19	_	_	ADP	IN	_	21	case	_	Lem=_|Len=2
20	_	_	DET	DT	Definite=Def|PronType=Art	21	det	_	Lem=_|Len=3
21	_	_	NOUN	NN	Number=Sing	18	obl	_	Lem=_|Len=5
22	_	_	ADV	RB	_	23	advmod	_	Lem=_|Len=4
23	_	_	ADV	RB	_	18	advmod	_	Lem=_|Len=6|SpaceAfter=No
24	_	_	PUNCT	.	_	7	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 goeswith	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	Entity=(person-2)|Lem=*LOWER*|Len=2
2	_	_	AUX	MD	VerbForm=Fin	4	aux	_	Lem=_|Len=5|SpaceAfter=No
3	_	_	PART	RB	Polarity=Neg	4	advmod	_	Lem=not|Len=3
4	_	_	VERB	VB	VerbForm=Inf	0	root	_	Lem=_|Len=4
5	_	_	ADP	IN	_	4	ccomp	_	Lem=_|Len=4|Typo=Yes
6	_	_	VERB	VBG	VerbForm=Ger	5	goeswith	_	Lem=hear|Len=7|Typo=Yes
7	_	_	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	Entity=(person-7)|Lem=she|Len=3
8	_	_	NOUN	NN	Number=Sing	5	ccomp	_	Entity=(event-8|Lem=_|Len=4
9	_	_	SCONJ	IN	_	14	mark	_	Lem=_|Len=5
10	_	_	DET	DT	Definite=Ind|PronType=Art	11	det	_	Entity=(object-9|Lem=_|Len=1
11	_	_	NOUN	NN	Number=Sing	14	nsubj:pass	_	Entity=object-9)|Lem=_|Len=4
12	_	_	PART	RB	Polarity=Neg	14	advmod	_	Lem=_|Len=3
13	_	_	AUX	VBG	VerbForm=Ger	14	aux:pass	_	Lem=be|Len=5
14	_	_	VERB	VBN	Tense=Past|VerbForm=Part	8	ccomp	_	Entity=event-8)|Lem=pay|Len=4|SpaceAfter=No
15	_	_	PUNCT	.	_	4	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	_	_	X	FW	_	8	discourse	_	Lem=_|Len=2
2	_	_	X	FW	_	1	goeswith	_	Lem=_|Len=2
3	_	_	ADJ	JJ	Degree=Pos	4	amod	_	Entity=(abstract-107|Lem=*LOWER*|Len=12
4	_	_	NOUN	NN	Number=Sing|Polarity=Neg	8	nsubj	_	Entity=abstract-107)|Lem=_|Len=10
5	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	Lem=be|Len=2
6	_	_	ADV	RB	_	7	advmod	_	Lem=_|Len=2
7	_	_	PART	RB	Polarity=Neg	8	advmod	_	Lem=_|Len=3
8	_	_	ADJ	JJ	Degree=Pos	0	root	_	Lem=_|Len=4|SpaceAfter=No
9	_	_	PUNCT	.	_	8	punct	_	Lem=_|Len=1

~~~


