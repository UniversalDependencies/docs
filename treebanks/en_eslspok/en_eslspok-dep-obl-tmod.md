---
layout: base
title:  'Statistics of obl:tmod in UD_English-ESLSpok'
udver: '2'
---

## Treebank Statistics: UD_English-ESLSpok: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="en_eslspok-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_eslspok-dep-obl-npmod.html">obl:npmod</a></tt>.

77 nodes (0%) are attached to their parents as `obl:tmod`.

44 instances of `obl:tmod` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.16883116883117.

The following 8 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="en_eslspok-pos-VERB.html">VERB</a></tt>-<tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt> (59; 77% instances), <tt><a href="en_eslspok-pos-VERB.html">VERB</a></tt>-<tt><a href="en_eslspok-pos-PROPN.html">PROPN</a></tt> (5; 6% instances), <tt><a href="en_eslspok-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="en_eslspok-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="en_eslspok-pos-ADV.html">ADV</a></tt>-<tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_eslspok-pos-AUX.html">AUX</a></tt>-<tt><a href="en_eslspok-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="en_eslspok-pos-NUM.html">NUM</a></tt>-<tt><a href="en_eslspok-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl:tmod	color:blue
1	he	_	PRON	PRP	_	2	nsubj	_	_
2	runs	_	VERB	VBZ	_	0	root	_	_
3	every	_	DET	DT	_	4	det	_	_
4	morning	_	NOUN	NN	_	2	obl:tmod	_	_
5	around	_	ADP	IN	_	6	case	_	_
6	here	_	ADV	RB	_	2	obl	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl:tmod	color:blue
1	and	_	CCONJ	CC	_	3	cc	_	_
2	we	_	PRON	PRP	_	3	nsubj	_	_
3	came	_	VERB	VBD	_	0	root	_	_
4	back	_	ADV	RB	_	3	advmod	_	_
5	last	_	ADJ	JJ	_	6	amod	_	_
6	Thursday	_	PROPN	NNP	_	3	obl:tmod	_	_
7	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 obl:tmod	color:blue
1	But	_	CCONJ	CC	_	13	cc	_	_
2	from	_	ADP	IN	_	3	case	_	_
3	Monday	_	PROPN	NNP	_	13	obl	_	_
4	to	_	PART	TO	_	5	case	_	_
5	Friday	_	PROPN	NNP	_	13	obl	_	_
6	,	_	PUNCT	,	_	13	punct	_	_
7	yeah	_	INTJ	UH	_	13	discourse	_	_
8	,	_	PUNCT	,	_	10	punct	_	_
9	almost	_	ADV	RB	_	10	advmod	_	_
10	everyday	_	NOUN	NN	_	13	obl:tmod	_	_
11	,	_	PUNCT	,	_	10	punct	_	_
12	very	_	ADV	RB	_	13	advmod	_	_
13	busy	_	ADJ	JJ	_	0	root	_	_
14	.	_	PUNCT	.	_	13	punct	_	_

~~~


