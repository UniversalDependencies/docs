---
layout: base
title:  'Statistics of det:predet in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-det.html">det</a></tt>.

216 nodes (0%) are attached to their parents as `det:predet`.

216 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.43518518518519.

The following 6 pairs of parts of speech are connected with `det:predet`: <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (198; 92% instances), <tt><a href="en_ewt-pos-DET.html">DET</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (8; 4% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 det:predet	color:blue
1	This	this	PRON	DT	Number=Sing|PronType=Dem	5	nsubj	5:nsubj	_
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
3	the	the	DET	DT	Definite=Def|PronType=Art	5	det	5:det	_
4	best	good	ADJ	JJS	Degree=Sup	5	amod	5:amod	_
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
3	Royal	Royal	ADJ	NNP	Degree=Pos	4	amod	4:amod	_
4	Caribbean	Caribbean	PROPN	NNP	Number=Sing	2	obj	2:obj	_
5	out	out	ADP	IN	_	8	case	8:case	_
6	of	of	ADP	IN	_	8	case	8:case	_
7	all	all	DET	PDT	_	8	det:predet	8:det:predet	_
8	these	this	DET	DT	Number=Plur|PronType=Dem	2	obl	2:obl:of	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det:predet	color:blue
1	What	what	PRON	WP	PronType=Int	3	det:predet	3:det:predet	_
2	a	a	DET	DT	Definite=Ind|PronType=Art	3	det	3:det	_
3	group	group	NOUN	NN	Number=Sing	0	root	0:root	SpaceAfter=No
4	!	!	PUNCT	.	_	3	punct	3:punct	_

~~~


