---
layout: base
title:  'Statistics of expl in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `expl`

This relation is universal.

91 nodes (1%) are attached to their parents as `expl`.

87 instances of `expl` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.76923076923077.

The following 4 pairs of parts of speech are connected with `expl`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (62; 68% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (22; 24% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (6; 7% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 expl	color:blue
1	_	_	SCONJ	IN	_	3	mark	_	Discourse=condition:33->34|Lem=*LOWER*|Len=2
2	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	3	nsubj	_	Entity=(person-5)|Lem=_|Len=3
3	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	12	advcl	_	Lem=_|Len=3
4	_	_	DET	DT	Definite=Ind|PronType=Art	6	det	_	Entity=(object-41|Lem=_|Len=1
5	_	_	NOUN	NN	Number=Sing	6	compound	_	Lem=_|Len=8
6	_	_	NOUN	NN	Number=Sing	3	obj	_	Lem=_|Len=4
7	_	_	ADP	IN	_	8	case	_	Lem=_|Len=2
8	_	_	PROPN	NNP	Number=Sing	6	nmod	_	Entity=(person-42|Lem=_|Len=5
9	_	_	PROPN	NNP	Number=Sing	8	flat	_	Entity=object-41)person-42)|Lem=_|Len=4|SpaceAfter=No
10	_	_	PUNCT	,	_	3	punct	_	Lem=_|Len=1
11	_	_	PRON	EX	_	12	expl	_	Discourse=justify:34->51|Lem=_|Len=5
12	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Lem=be|Len=2
13	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	_	Lem=_|Len=1
14	_	_	NOUN	NN	Number=Sing	12	nsubj	_	Lem=_|Len=6
15	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	18	nsubj	_	Discourse=elaboration:35->34|Entity=(object-41)|Lem=_|Len=2
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
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 expl	color:blue
1	_	_	ADP	IN	_	3	case	_	Discourse=attribution:4->5|Lem=*LOWER*|Len=2
2	_	_	DET	DT	Definite=Def|PronType=Art	3	det	_	Entity=(event-11|Lem=_|Len=3
3	_	_	NOUN	NN	Number=Sing	8	obl	_	Lem=_|Len=5
4	_	_	ADV	RB	_	3	advmod	_	Entity=event-11)|Lem=_|Len=4|SpaceAfter=No
5	_	_	PUNCT	,	_	3	punct	_	Lem=_|Len=1
6	_	_	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	7	nmod:poss	_	Entity=(person-7(person-3)|Lem=_|Len=2
7	_	_	NOUN	NN	Number=Sing	8	nsubj	_	Entity=person-7)|Lem=_|Len=4
8	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	Lem=reiterate|Len=10
9	_	_	ADJ	JJ	Degree=Pos	10	amod	_	Entity=(time-12|Lem=_|Len=4
10	_	_	NOUN	NNS	Number=Plur	8	obl:npmod	_	Entity=time-12)|Lem=time|Len=5
11	_	_	ADP	IN	_	12	case	_	Lem=_|Len=2
12	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	8	obl	_	Entity=(person-3)|Lem=I|Len=2
13	_	_	ADV	RB	_	15	advmod	_	Discourse=elaboration:5->3|Lem=_|Len=4
14	_	_	SCONJ	WRB	PronType=Int	15	mark	_	Lem=_|Len=3
15	_	_	ADJ	JJ	Degree=Pos	8	ccomp	_	Lem=_|Len=9
16	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	15	expl	_	Entity=(abstract-13)|Lem=_|Len=2
17	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	15	cop	_	Lem=be|Len=3
18	_	_	PART	TO	_	19	mark	_	Entity=(abstract-13|Lem=_|Len=2
19	_	_	VERB	VB	VerbForm=Inf	15	csubj	_	Lem=_|Len=4
20	_	_	DET	DT	Definite=Ind|PronType=Art	22	det	_	Entity=(abstract-14|Lem=_|Len=1
21	_	_	ADJ	JJ	Degree=Pos	22	amod	_	Lem=_|Len=4
22	_	_	NOUN	NN	Number=Sing	19	obj	_	Entity=abstract-13)abstract-14)|Lem=_|Len=10|SpaceAfter=No
23	_	_	PUNCT	.	_	8	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 expl	color:blue
1	_	_	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	Discourse=concession:77->76|Lem=*LOWER*|Len=4
2	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	_	Entity=(abstract-85)|Lem=_|Len=2
3	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	_	Lem=be|Len=3
4	_	_	DET	DT	Definite=Def|PronType=Art	5	det	_	Lem=_|Len=3
5	_	_	NOUN	NN	Number=Sing	1	ccomp	_	Lem=_|Len=4
6	_	_	ADP	IN	_	10	obl	_	Entity=(abstract-85|Lem=_|Len=4
7	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	10	nsubj	_	Entity=(person-86)|Lem=_|Len=3
8	_	_	AUX	MD	VerbForm=Fin	10	aux	_	Lem=_|Len=5
9	_	_	ADV	RB	_	10	advmod	_	Lem=_|Len=6
10	_	_	VERB	VB	VerbForm=Inf	5	csubj	_	Lem=_|Len=4
11	_	_	NOUN	NN	Number=Sing	10	obj	_	Entity=(abstract-48)|Lem=_|Len=8
12	_	_	CCONJ	CC	_	13	cc	_	Lem=_|Len=3
13	_	_	NOUN	NN	Number=Sing	11	conj	_	Entity=(abstract-66)abstract-85)|Lem=_|Len=11
14	_	_	ADV	RB	_	1	advmod	_	Lem=_|Len=6|SpaceAfter=No
15	_	_	PUNCT	.	_	1	punct	_	Lem=_|Len=1

~~~


