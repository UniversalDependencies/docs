---
layout: base
title:  'Statistics of compound:prt in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-compound.html">compound</a></tt>.

910 nodes (0%) are attached to their parents as `compound:prt`.

910 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.32197802197802.

The following 5 pairs of parts of speech are connected with `compound:prt`: <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-ADP.html">ADP</a></tt> (888; 98% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-ADV.html">ADV</a></tt> (14; 2% instances), <tt><a href="en_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="en_ewt-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-ADP.html">ADP</a></tt> (1; 0% instances).


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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:prt	color:blue
1	Jacques	Jacques	PROPN	NNP	Number=Sing	3	nsubj	3:nsubj|5:nsubj:xsubj	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	ready	ready	ADJ	JJ	Degree=Pos	0	root	0:root	_
4	to	to	PART	TO	_	5	mark	5:mark	_
5	drop	drop	VERB	VB	VerbForm=Inf	3	xcomp	3:xcomp	_
6	in	in	ADV	RP	_	5	compound:prt	5:compound:prt	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	9:det	_
8	dollar	dollar	NOUN	NN	Number=Sing	9	compound	9:compound	_
9	amount	amount	NOUN	NN	Number=Sing	5	obj	5:obj	_
10	on	on	ADP	IN	_	12	case	12:case	_
11	the	the	DET	DT	Definite=Def|PronType=Art	12	det	12:det	_
12	release	release	NOUN	NN	Number=Sing	5	obl	5:obl:on	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	3:punct	_

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


