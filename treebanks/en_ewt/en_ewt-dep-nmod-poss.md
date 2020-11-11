---
layout: base
title:  'Statistics of nmod:poss in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_ewt-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="en_ewt-dep-nmod-tmod.html">nmod:tmod</a></tt>.

4446 nodes (2%) are attached to their parents as `nmod:poss`.

4445 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.64372469635628.

The following 18 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (3628; 82% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (406; 9% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (252; 6% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (71; 2% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (43; 1% instances), <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (27; 1% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="en_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="en_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="en_ewt-pos-DET.html">DET</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_ewt-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_ewt-pos-X.html">X</a></tt>-<tt><a href="en_ewt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod:poss	color:blue
1	When	when	SCONJ	WRB	PronType=Int	3	mark	3:mark	_
2	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	3:nsubj	_
3	saw	see	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	11	advcl	11:advcl:when	_
4	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	_
5	cartoon	cartoon	NOUN	NN	Number=Sing	3	obj	3:obj	_
6	of	of	ADP	IN	_	8	case	8:case	_
7	their	they	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	8	nmod:poss	8:nmod:poss	_
8	prophet	prophet	NOUN	NN	Number=Sing	5	nmod	5:nmod:of	SpaceAfter=No
9	,	,	PUNCT	,	_	11	punct	11:punct	_
10	people	people	NOUN	NNS	Number=Plur	11	nsubj	11:nsubj|13:nsubj:xsubj	_
11	had	have	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
12	to	to	PART	TO	_	13	mark	13:mark	_
13	die	die	VERB	VB	VerbForm=Inf	11	xcomp	11:xcomp	SpaceAfter=No
14	.	.	PUNCT	.	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:poss	color:blue
1	We	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	3:nsubj	_
2	will	will	AUX	MD	VerbForm=Fin	3	aux	3:aux	_
3	meeting	meet	VERB	VBG	VerbForm=Ger	0	root	0:root	_
4	Rod	Rod	PROPN	NNP	Number=Sing	6	nmod:poss	6:nmod:poss	_
5	's	's	PART	POS	_	4	case	4:case	_
6	office	office	NOUN	NN	Number=Sing	3	obj	3:obj	_
7	EB	EB	PROPN	NNP	Number=Sing	6	list	6:list	SpaceAfter=No
8	4054	4054	NUM	CD	NumType=Card	7	nummod	7:nummod	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nmod:poss	color:blue
1	First	first	ADJ	JJ	Degree=Pos|NumType=Ord	2	amod	2:amod	_
2	time	time	NOUN	NN	Number=Sing	12	obl:tmod	12:obl:tmod	_
3	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	4:nsubj|5:nsubj:xsubj	_
4	started	start	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	2	acl:relcl	2:acl:relcl	_
5	wearing	wear	VERB	VBG	VerbForm=Ger	4	xcomp	4:xcomp	_
6	woman	woman	NOUN	NN	Number=Sing	8	nmod:poss	8:nmod:poss	_
7	's	's	PART	POS	_	6	case	6:case	_
8	lingerie	lingerie	NOUN	NN	Number=Sing	5	obj	5:obj	_
9	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	12:nsubj	_
10	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	12	cop	12:cop	_
11	very	very	ADV	RB	_	12	advmod	12:advmod	_
12	young	young	ADJ	JJ	Degree=Pos	0	root	0:root	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	12:punct	_

~~~


