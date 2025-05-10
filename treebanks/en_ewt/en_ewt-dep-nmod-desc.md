---
layout: base
title:  'Statistics of nmod:desc in UD_English-EWT'
udver: '2'
---

## Treebank Statistics: UD_English-EWT: Relations: `nmod:desc`

This relation is a language-specific subtype of <tt><a href="en_ewt-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_ewt-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_ewt-dep-nmod-unmarked.html">nmod:unmarked</a></tt>.

385 nodes (0%) are attached to their parents as `nmod:desc`.

377 instances of `nmod:desc` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11948051948052.

The following 2 pairs of parts of speech are connected with `nmod:desc`: <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt> (298; 77% instances), <tt><a href="en_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_ewt-pos-NOUN.html">NOUN</a></tt> (87; 23% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:desc	color:blue
1	Dear	dear	ADJ	JJ	Degree=Pos	3	amod	3:amod	_
2	Dr.	Dr.	PROPN	NNP	Number=Sing	3	nmod:desc	3:nmod:desc	_
3	Vincent	Vincent	PROPN	NNP	Number=Sing	0	root	0:root	_
4	Kaminski	Kaminski	PROPN	NNP	Number=Sing	3	flat	3:flat	SpaceAfter=No
5	,	,	PUNCT	,	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:desc	color:blue
1	Any	any	DET	DT	PronType=Ind	2	det	2:det	_
2	news	news	NOUN	NN	Number=Sing	0	root	0:root	_
3	on	on	ADP	IN	_	5	case	5:case	_
4	Aunt	aunt	NOUN	NN	Number=Sing	5	nmod:desc	5:nmod:desc	_
5	Toni	Toni	PROPN	NNP	Number=Sing	2	nmod	2:nmod:on	SpaceAfter=No
6	?	?	PUNCT	.	_	2	punct	2:punct	_

~~~


