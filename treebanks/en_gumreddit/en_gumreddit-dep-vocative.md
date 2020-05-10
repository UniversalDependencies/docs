---
layout: base
title:  'Statistics of vocative in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `vocative`

This relation is universal.

8 nodes (0%) are attached to their parents as `vocative`.

5 instances of `vocative` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.375.

The following 3 pairs of parts of speech are connected with `vocative`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (4; 50% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (3; 38% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 5 vocative	color:blue
1	_	_	CCONJ	CC	_	11	cc	_	Lem=*LOWER*|Len=3
2	_	_	PRON	DT	Number=Sing|PronType=Dem	11	nsubj	_	Entity=(abstract-69)|Lem=_|Len=4|SpaceAfter=No
3	_	_	PUNCT	,	_	2	punct	_	Lem=_|Len=1
4	_	_	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	5	nmod:poss	_	Entity=(person-70(person-8)|Lem=_|Len=2
5	_	_	NOUN	NNS	Number=Plur	11	vocative	_	Entity=person-70)|Lem=friend|Len=7|SpaceAfter=No
6	_	_	PUNCT	,	_	5	punct	_	Lem=_|Len=1
7	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	Lem=be|Len=2
8	_	_	PUNCT	``	_	9	punct	_	Entity=(abstract-69|Lem="|Len=1|SpaceAfter=No
9	_	_	NOUN	NN	Number=Sing	11	compound	_	Lem=_|Len=7|SpaceAfter=No
10	_	_	PUNCT	''	_	9	punct	_	Lem="|Len=1
11	_	_	NOUN	NN	Number=Sing	0	root	_	Entity=abstract-69)|Lem=_|Len=2|SpaceAfter=No
12	_	_	PUNCT	.	_	11	punct	_	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 vocative	color:blue
1	_	_	PUNCT	``	_	6	punct	_	Lem=''|Len=1|SpaceAfter=No
2	_	_	SCONJ	WRB	PronType=Int	6	mark	_	Lem=*LOWER*|Len=3
3	_	_	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	6	aux	_	Lem=_|Len=2|SpaceAfter=No
4	_	_	PART	RB	Polarity=Neg	6	advmod	_	Lem=not|Len=3
5	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	6	nsubj	_	Entity=(organization-76)|Lem=_|Len=3
6	_	_	VERB	VB	VerbForm=Inf	0	root	_	Lem=_|Len=4
7	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	obj	_	Entity=(abstract-74)|Lem=_|Len=2
8	_	_	PRON	PRP	Case=Nom|Person=2|PronType=Prs	10	discourse	_	Entity=(organization-76)|Lem=_|Len=3
9	_	_	ADJ	JJ	Degree=Pos	10	amod	_	Entity=(organization-76|Lem=_|Len=5
10	_	_	NOUN	NN	Number=Sing	6	vocative	_	Entity=organization-76)|Lem=_|Len=7|SpaceAfter=No
11	_	_	PUNCT	.	_	6	punct	_	Lem=_|Len=1|SpaceAfter=No
12	_	_	PUNCT	.	_	6	punct	_	Lem=_|Len=1|SpaceAfter=No
13	_	_	PUNCT	''	_	6	punct	_	Lem=''|Len=1

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 vocative	color:blue
1	_	_	CCONJ	CC	_	3	cc	_	Lem=_|Len=3
2	_	_	PUNCT	:	_	1	punct	_	Lem=_|Len=3
3	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	dep	_	Entity=(object-2)|Lem=_|Len=2
4	_	_	PUNCT	:	_	3	punct	_	Lem=_|Len=3
5	_	_	PUNCT	:	_	3	punct	_	Lem=_|Len=3
6	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	Entity=(object-2)|Lem=_|Len=2
7	_	_	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	Lem=slip|Len=7
8	_	_	PUNCT	:	_	10	punct	_	Lem=_|Len=3
9	_	_	ADV	RB	_	10	advmod	_	Lem=_|Len=4
10	_	_	VERB	VB	VerbForm=Inf	7	parataxis	_	Lem=_|Len=3
11	_	_	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	12	nmod:poss	_	Entity=(person-7(person-3)|Lem=_|Len=2
12	_	_	NOUN	NN	Number=Sing	10	obj	_	Entity=person-7)|Lem=_|Len=4|SpaceAfter=No
13	_	_	PUNCT	,	_	18	punct	_	Lem=_|Len=1
14	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	18	nsubj	_	Entity=(person-3)|Lem=_|Len=1
15	_	_	ADV	RB	_	18	advmod	_	Lem=_|Len=6
16	_	_	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	18	cop	_	Lem=be|Len=2
17	_	_	DET	DT	Definite=Ind|PronType=Art	18	det	_	Entity=(person-3|Lem=_|Len=1
18	_	_	NOUN	NN	Number=Sing	10	parataxis	_	Entity=person-3)|Lem=_|Len=5
19	_	_	PUNCT	:	_	20	punct	_	Lem=_|Len=3
20	_	_	ADJ	JJ	Degree=Pos	18	discourse	_	Lem=_|Len=5
21	_	_	NOUN	NN	Number=Sing	20	vocative	_	Entity=(person-7)|Lem=_|Len=5|SpaceAfter=No
22	_	_	PUNCT	.	_	7	punct	_	Lem=_|Len=1

~~~


