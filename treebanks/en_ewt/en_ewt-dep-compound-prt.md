---
layout: base
title:  'Statistics of compound:prt in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-compound.html">compound</a></tt>.

907 nodes (0%) are attached to their parents as `compound:prt`.

907 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.31973539140022.

The following 4 pairs of parts of speech are connected with `compound:prt`: <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-ADP.html">ADP</a></tt> (899; 99% instances), <tt><a href="en_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="en_ewt-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	We	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	3:nsubj	_
2	've	have	AUX	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	aux	3:aux	_
3	grown	grow	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
4	up	up	ADP	RP	_	3	compound:prt	3:compound:prt	SpaceAfter=No
5	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 compound:prt	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	_
2	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	like	like	ADP	RP	_	2	compound:prt	2:compound:prt	_
4	Ummmm	um	INTJ	UH	Style=Expr	7	discourse	7:discourse	CorrectForm=Um
5	i	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	7:nsubj	_
6	can	can	AUX	MD	VerbForm=Fin	7	aux	7:aux	_
7	see	see	VERB	VB	VerbForm=Inf	2	ccomp	2:ccomp	_
8	your	your	PRON	PRP$	Case=Gen|Person=2|Poss=Yes|PronType=Prs	10	nmod:poss	10:nmod:poss	_
9	ass	ass	NOUN	NN	Number=Sing	10	compound	10:compound	_
10	cheeks	cheek	NOUN	NNS	Number=Plur	7	obj	7:obj	SpaceAfter=No
11	...	...	PUNCT	,	_	13	punct	13:punct	SpaceAfter=No
12	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	nsubj	13:nsubj	_
13	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	parataxis	2:parataxis	_
14	like	like	ADP	RP	_	13	compound:prt	13:compound:prt	_
15	Oops	oops	INTJ	UH	_	18	discourse	18:discourse	_
16	did	do	AUX	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	18	aux	18:aux	_
17	i	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	18	nsubj	18:nsubj	_
18	forget	forget	VERB	VB	VerbForm=Inf	13	ccomp	13:ccomp	_
19	my	my	PRON	PRP$	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	20	nmod:poss	20:nmod:poss	_
20	Underwear	underwear	NOUN	NN	Number=Sing	18	obj	18:obj	SpaceAfter=No
21	???	???	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 compound:prt	color:blue
1	Run	run	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	0:root	_
2	for	for	ADP	IN	_	4	case	4:case	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	4:det	_
4	hills	hill	NOUN	NNS	Number=Plur	1	obl	1:obl:for	_
5	...	...	PUNCT	,	_	10	punct	10:punct	_
6	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	10	nsubj	10:nsubj	_
7	'll	will	AUX	MD	VerbForm=Fin	10	aux	10:aux	_
8	be	be	AUX	VB	VerbForm=Inf	10	cop	10:cop	_
9	much	much	ADV	RB	_	10	advmod	10:advmod	_
10	better	good	ADJ	JJR	Degree=Cmp	1	parataxis	1:parataxis	_
11	off	off	ADP	RP	_	10	compound:prt	10:compound:prt	SpaceAfter=No
12	!	!	PUNCT	.	_	1	punct	1:punct	_

~~~


