---
layout: base
title:  'Statistics of nmod in UD_Naga-Suansu'
udver: '2'
---

## Treebank Statistics: UD_Naga-Suansu: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="nmf_suansu-dep-nmod-poss.html">nmod:poss</a></tt>.

32 nodes (1%) are attached to their parents as `nmod`.

25 instances of `nmod` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5625.

The following 9 pairs of parts of speech are connected with `nmod`: <tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt> (17; 53% instances), <tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nmf_suansu-pos-PRON.html">PRON</a></tt> (6; 19% instances), <tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nmf_suansu-pos-PROPN.html">PROPN</a></tt> (2; 6% instances), <tt><a href="nmf_suansu-pos-NUM.html">NUM</a></tt>-<tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="nmf_suansu-pos-PRON.html">PRON</a></tt>-<tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="nmf_suansu-pos-PRON.html">PRON</a></tt>-<tt><a href="nmf_suansu-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="nmf_suansu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nmf_suansu-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt>-<tt><a href="nmf_suansu-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod	color:blue
1	dahthamdi	dahtham	NOUN	_	Case=Top|Number=Sing	7	obj	7:obj	_
2	zahai	zahai	PART	_	_	7	discourse	7:discourse	_
3	thathok	thathok	NOUN	_	Number=Sing	1	nmod	1:nmod	_
4	phangenahndi	phange	NUM	_	Case=LocTop|NumForm=Word|NumType=Card	3	nummod	3:nummod	_
5	woanda	woanda	ADP	_	_	3	case	3:case	_
6	khakhahnnan	khakhahnnan	ADV	_	_	7	advmod	7:advmod	_
7	rung	rung	VERB	_	VerbForm=Inf	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	7:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod	color:blue
1	Renan	renan	SCONJ	_	_	3	mark	3:mark	_
2	nahn	nahn	PRON	_	Number=Sing|Person=2|PronType=Prs	3	nsubj	3:nsubj	_
3	thema	the	VERB	_	Aspect=Imp|Mood=Ind|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	ga	ga	AUX	_	Evident=Nfh	3	aux	3:aux	_
5	nahnnan	nahn	PRON	_	Case=Erg|Number=Sing|Person=2|PronType=Prs	7	nmod	7:nmod	_
6	makhwada	makhwa	NOUN	_	Case=Abl|Number=Sing	7	nmod	7:nmod	_
7	runghapha	rungha	NOUN	_	Aspect=Imp|Number=Plur|Tense=Pqp|VerbForm=Vnoun	3	xcomp	3:xcomp	_
8	dai	dai	AUX	_	Mood=Jus	3	aux	3:aux	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	3:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod	color:blue
1	Nahn	nahn	PRON	_	Number=Sing|Person=2|PronType=Prs	5	nsubj	5:nsubj	_
2	Soviet	Soviet	PROPN	_	Number=Sing	4	nmod	4:nmod	_
3	Unionnahn	Union	PROPN	_	Case=Loc|Number=Sing	2	flat:name	2:flat:name	_
4	mari	mari	NOUN	_	Number=Sing	5	obl	5:obl	_
5	lalama	la	AUX	_	Mood=Int|Polarity=Neg|VerbForm=Fin	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	7:punct	_
7	Lieutenant	Lieutenant	PROPN	_	Number=Sing	5	vocative	5:vocative	_
8	Powers	Powers	PROPN	_	Number=Sing	7	flat	7:flat	SpacesAfter=\n

~~~


