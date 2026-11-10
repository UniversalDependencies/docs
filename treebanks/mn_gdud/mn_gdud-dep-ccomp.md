---
layout: base
title:  'Statistics of ccomp in UD_Mongolian-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Mongolian-GDUD: Relations: `ccomp`

This relation is universal.

11 nodes (2%) are attached to their parents as `ccomp`.

10 instances of `ccomp` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.18181818181818.

The following 4 pairs of parts of speech are connected with `ccomp`: <tt><a href="mn_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="mn_gdud-pos-VERB.html">VERB</a></tt> (8; 73% instances), <tt><a href="mn_gdud-pos-PRON.html">PRON</a></tt>-<tt><a href="mn_gdud-pos-ADJ.html">ADJ</a></tt> (1; 9% instances), <tt><a href="mn_gdud-pos-PRON.html">PRON</a></tt>-<tt><a href="mn_gdud-pos-VERB.html">VERB</a></tt> (1; 9% instances), <tt><a href="mn_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="mn_gdud-pos-AUX.html">AUX</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 ccomp	color:blue
1	Bi	bi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
2	Dulmaa-g	Dulmaa	PROPN	_	Case=Acc	4	nsubj	_	_
3	margaash	margaash	ADV	_	_	4	advmod	_	_
4	ire-x-iig	ire	VERB	_	Case=Acc|Tense=Fut|VerbForm=Inf	5	ccomp	_	_
5	med-ne	med	VERB	_	Aspect=Imp|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 ccomp	color:blue
1	Us	us	NOUN	_	Case=Nom	2	nsubj	_	_
2	xüiten	xüiten	ADJ	_	Degree=Pos	4	ccomp	_	_
3	ge-j	ge	VERB	_	VerbForm=Conv	4	mark	_	PartType=Quot
4	bi	bi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	med-ne	med	VERB	_	Aspect=Imp|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 ccomp	color:blue
1	Bi	bi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	_	_
2	gež	gež	SCONJ	_	_	6	mark	_	_
3	ix	ix	ADV	_	Degree=Pos	4	advmod	_	_
4	unši-ž	unši	VERB	_	VerbForm=Conv	6	advcl	_	_
5	talaar	talaar	ADP	_	_	4	case	_	_
6	biči-x	bič	VERB	_	Tense=Fut|VerbForm=Part	1	ccomp	_	_
7	jumsan	jumsan	PART	_	_	6	discourse	_	_
8	önöö	önöö	DET	_	PronType=Dem	9	det	_	_
9	nom-oo	nom	NOUN	_	Case=Acc|Reflex=Yes	10	obj	_	_
10	duusa-x-güj	duus	VERB	_	Polarity=Neg|Tense=Fut|VerbForm=Part	13	xcomp	_	_
11	l	l	PART	_	_	13	advmod	_	_
12	baj-na	baj	AUX	_	Mood=Ind|Tense=Pres	13	aux	_	_
13	ø	ø	VERB	_	_	0	root	_	SpaceAfter=No
14	.	.	PUNCT	_	_	13	punct	_	_

~~~


