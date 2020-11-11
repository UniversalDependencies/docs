---
layout: base
title:  'Statistics of det:predet in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-det.html">det</a></tt>.

208 nodes (0%) are attached to their parents as `det:predet`.

208 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.4375.

The following 7 pairs of parts of speech are connected with `det:predet`: <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (191; 92% instances), <tt><a href="en_ewt-pos-DET.html">DET</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (8; 4% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 det:predet	color:blue
1	This	this	PRON	DT	Number=Sing|PronType=Dem	5	nsubj	5:nsubj	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
3	the	the	DET	DT	Definite=Def|PronType=Art	5	det	5:det	_
4	best	best	ADJ	JJS	Degree=Sup	5	amod	5:amod	_
5	solution	solution	NOUN	NN	Number=Sing	0	root	0:root	_
6	given	give	VERB	VBN	Tense=Past|VerbForm=Part	5	advcl	5:advcl	_
7	all	all	DET	PDT	_	9	det:predet	9:det:predet	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	9:det	_
9	uncertainties	uncertainty	NOUN	NNS	Number=Plur	6	nsubj	6:nsubj	_
10	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	11	nsubj	11:nsubj	_
11	face	face	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	9	acl:relcl	9:acl:relcl	SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det:predet	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	_
2	prefer	prefer	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	Royal	Royal	PROPN	NNP	Number=Sing	4	compound	4:compound	_
4	Caribbean	Caribbean	PROPN	NNP	Number=Sing	2	obj	2:obj	_
5	out	out	ADP	IN	_	8	case	8:case	_
6	of	of	ADP	IN	_	8	case	8:case	_
7	all	all	DET	PDT	_	8	det:predet	8:det:predet	_
8	these	this	DET	DT	Number=Plur|PronType=Dem	2	obl	2:obl:of	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 det:predet	color:blue
1	Houseboat	houseboat	NOUN	NN	Number=Sing	7	nsubj	7:nsubj	_
2	in	in	ADP	IN	_	3	case	3:case	_
3	Kerala	Kerala	PROPN	NNP	Number=Sing	1	nmod	1:nmod:in	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
5	a	a	DET	DT	Definite=Ind|PronType=Art	7	det	7:det	_
6	good	good	ADJ	JJ	Degree=Pos	7	amod	7:amod	_
7	option	option	NOUN	NN	Number=Sing	0	root	0:root	_
8	for	for	ADP	IN	_	9	case	9:case	_
9	you	you	PRON	PRP	Case=Acc|Person=2|PronType=Prs	7	nmod	7:nmod:for	SpaceAfter=No
10	,	,	PUNCT	,	_	13	punct	13:punct	_
11	all	all	DET	PDT	_	13	det:predet	13:det:predet	_
12	the	the	DET	DT	Definite=Def|PronType=Art	13	det	13:det	_
13	best	best	ADJ	JJS	Degree=Sup	7	parataxis	7:parataxis	SpaceAfter=No
14	!!!	!!!	PUNCT	.	_	13	punct	13:punct	_

~~~


