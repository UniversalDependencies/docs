---
layout: base
title:  'Statistics of cop in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `cop`

This relation is universal.

5619 nodes (2%) are attached to their parents as `cop`.

5375 instances of `cop` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.15020466275138.

The following 12 pairs of parts of speech are connected with `cop`: <tt><a href="en_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (2812; 50% instances), <tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (1960; 35% instances), <tt><a href="en_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (288; 5% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (189; 3% instances), <tt><a href="en_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (174; 3% instances), <tt><a href="en_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (91; 2% instances), <tt><a href="en_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (36; 1% instances), <tt><a href="en_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (25; 0% instances), <tt><a href="en_ewt-pos-DET.html">DET</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (20; 0% instances), <tt><a href="en_ewt-pos-ADP.html">ADP</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (17; 0% instances), <tt><a href="en_ewt-pos-X.html">X</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="en_ewt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_ewt-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	That	that	PRON	DT	Number=Sing|PronType=Dem	3	nsubj	3:nsubj	SpaceAfter=No
2	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	right	right	ADJ	JJ	Degree=Pos	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	3:punct	_
5	folks	folks	NOUN	UH	_	3	parataxis	3:parataxis	SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	5:nsubj	_
2	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	5:cop	_
3	on	on	ADP	IN	_	5	case	5:case	_
4	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	5	nmod:poss	5:nmod:poss	_
5	way	way	NOUN	NN	Number=Sing	0	root	0:root	_
6	to	to	ADP	IN	_	8	case	8:case	_
7	my	my	PRON	PRP$	Number=Sing|Person=1|Poss=Yes|PronType=Prs	8	nmod:poss	8:nmod:poss	_
8	wedding	wedding	NOUN	NN	Number=Sing	5	nmod	5:nmod:to	_
9	fearing	fear	VERB	VBG	VerbForm=Ger	1	acl	1:acl	_
10	death	death	NOUN	NN	Number=Sing	9	obj	9:obj	SpaceAfter=No
11	,	,	PUNCT	,	_	9	punct	9:punct	_
12	basically	basically	ADV	RB	_	9	advmod	9:advmod	SpaceAfter=No
13	.	.	PUNCT	.	_	5	punct	5:punct	SpaceAfter=No
14	"	"	PUNCT	''	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Here	here	ADV	RB	PronType=Dem	0	root	0:root	SpaceAfter=No
2	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	1:cop	_
3	an	a	DET	DT	Definite=Ind|PronType=Art	4	det	4:det	_
4	excerpt	excerpt	NOUN	NN	Number=Sing	1	nsubj	1:nsubj	_
5	from	from	ADP	IN	_	7	case	7:case	_
6	the	the	DET	DT	Definite=Def|PronType=Art	7	det	7:det	_
7	article	article	NOUN	NN	Number=Sing	4	nmod	4:nmod:from	SpaceAfter=No
8	:	:	PUNCT	:	_	1	punct	1:punct	_

~~~


