---
layout: base
title:  'Statistics of expl in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `expl`

This relation is universal.

54 nodes (0%) are attached to their parents as `expl`.

53 instances of `expl` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31481481481481.

The following 3 pairs of parts of speech are connected with `expl`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (50; 93% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (3; 6% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 expl	color:blue
1	_	_	SCONJ	IN	_	3	mark	_	Lem=*LOWER*|Len=2
2	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	3	nsubj	_	Entity=(person-5)|Lem=_|Len=3
3	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	12	advcl	_	Lem=_|Len=3
4	_	_	DET	DT	Definite=Ind|PronType=Art	6	det	_	Entity=(object-41|Lem=_|Len=1
5	_	_	NOUN	NN	Number=Sing	6	compound	_	Lem=_|Len=8
6	_	_	NOUN	NN	Number=Sing	3	obj	_	Lem=_|Len=4
7	_	_	ADP	IN	_	8	case	_	Lem=_|Len=2
8	_	_	PROPN	NNP	Number=Sing	6	nmod	_	Entity=(person-42|Lem=_|Len=5
9	_	_	PROPN	NNP	Number=Sing	8	flat	_	Entity=object-41)person-42)|Lem=_|Len=4|SpaceAfter=No
10	_	_	PUNCT	,	_	3	punct	_	Lem=_|Len=1
11	_	_	PRON	EX	_	12	expl	_	Lem=_|Len=5
12	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Lem=be|Len=2
13	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	_	Lem=_|Len=1
14	_	_	NOUN	NN	Number=Sing	12	nsubj	_	Lem=_|Len=6
15	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	18	nsubj	_	Entity=(object-41)|Lem=_|Len=2
16	_	_	AUX	MD	VerbForm=Fin	18	aux	_	Lem=_|Len=5
17	_	_	AUX	VB	VerbForm=Inf	18	cop	_	Lem=_|Len=2
18	_	_	ADJ	JJ	Degree=Pos	14	acl:relcl	_	Lem=_|Len=5
19	_	_	DET	DT	Definite=Ind|PronType=Art	20	det	_	Entity=(abstract-43|Lem=_|Len=1
20	_	_	NOUN	NN	Number=Sing	18	xcomp	_	Lem=_|Len=3
21	_	_	ADP	IN	_	22	case	_	Lem=_|Len=2
22	_	_	NOUN	NN	Number=Sing	20	nmod	_	Entity=abstract-43)|Lem=_|Len=5|SpaceAfter=No
23	_	_	PUNCT	.	_	12	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 expl	color:blue
1	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	Lem=*LOWER*|Len=4
2	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	_	Entity=(abstract-84)|Lem=_|Len=2
3	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	_	Lem=be|Len=3
4	_	_	DET	DT	Definite=Def|PronType=Art	5	det	_	Lem=_|Len=3
5	_	_	NOUN	NN	Number=Sing	1	ccomp	_	Lem=_|Len=4
6	_	_	ADP	IN	_	10	obl	_	Entity=(abstract-84|Lem=_|Len=4
7	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	10	nsubj	_	Entity=(person-85)|Lem=_|Len=3
8	_	_	AUX	MD	VerbForm=Fin	10	aux	_	Lem=_|Len=5
9	_	_	ADV	RB	_	10	advmod	_	Lem=_|Len=6
10	_	_	VERB	VB	VerbForm=Inf	5	csubj	_	Lem=_|Len=4
11	_	_	NOUN	NN	Number=Sing	10	obj	_	Entity=(abstract-47)|Lem=_|Len=8
12	_	_	CCONJ	CC	_	13	cc	_	Lem=_|Len=3
13	_	_	NOUN	NN	Number=Sing	11	conj	_	Entity=(abstract-65)abstract-84)|Lem=_|Len=11
14	_	_	ADV	RB	_	1	advmod	_	Lem=_|Len=6|SpaceAfter=No
15	_	_	PUNCT	.	_	1	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl	color:blue
1	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	Lem=be|Len=2
2	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	Entity=(event-136)|Lem=_|Len=2
3	_	_	ADJ	JJ	Degree=Pos	0	root	_	Lem=_|Len=5
4	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	obj	_	Lem=_|Len=2
5	_	_	PART	TO	_	6	mark	_	Entity=(event-136|Lem=_|Len=2
6	_	_	VERB	VB	VerbForm=Inf	3	advcl	_	Lem=_|Len=4
7	_	_	NUM	CD	NumType=Card	8	nummod	_	Entity=(time-138|Lem=_|Len=1
8	_	_	NOUN	NNS	Number=Plur	6	obj	_	Entity=time-138)|Lem=second|Len=7
9	_	_	SYM	SYM	_	10	nummod	_	Entity=(time-139|Lem=_|Len=1
10	_	_	NOUN	NNS	Number=Plur	6	obl:npmod	_	Lem=time|Len=5
11	_	_	ADP	IN	_	12	case	_	Lem=_|Len=3
12	_	_	NOUN	NN	Number=Sing	10	nmod	_	Entity=(time-140)time-139)|Lem=_|Len=3
13	_	_	PART	TO	_	14	mark	_	Lem=_|Len=2
14	_	_	VERB	VB	VerbForm=Inf	3	csubj	_	Lem=_|Len=5
15	_	_	NUM	CD	NumType=Card	16	nummod	_	Entity=(time-141|Lem=_|Len=1
16	_	_	NOUN	NNS	Number=Plur	14	obj	_	Entity=time-141)|Lem=minute|Len=7
17	_	_	PART	TO	_	18	mark	_	Lem=_|Len=2
18	_	_	VERB	VB	VerbForm=Inf	14	xcomp	_	Lem=_|Len=8
19	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	18	obj	_	Entity=(event-122)event-136)|Lem=_|Len=2|SpaceAfter=No
20	_	_	PUNCT	.	_	3	punct	_	Lem=_|Len=1

~~~


