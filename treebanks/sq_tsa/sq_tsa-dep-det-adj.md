---
layout: base
title:  'Statistics of det:adj in UD_Albanian-TSA'
udver: '2'
---

## Treebank Statistics: UD_Albanian-TSA: Relations: `det:adj`

This relation is a language-specific subtype of <tt><a href="sq_tsa-dep-det.html">det</a></tt>.
There are also 2 other language-specific subtypes of `det`: <tt><a href="sq_tsa-dep-det-noun.html">det:noun</a></tt>, <tt><a href="sq_tsa-dep-det-pron.html">det:pron</a></tt>.

34 nodes (4%) are attached to their parents as `det:adj`.

34 instances of `det:adj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `det:adj`: <tt><a href="sq_tsa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_tsa-pos-DET.html">DET</a></tt> (34; 100% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 det:adj	color:blue
1	Interesi	interes	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	11	nsubj	11:nsubj	_
2	për	për	ADP	_	_	3	case	3:case	_
3	gjuhën	gjuhë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	1	nmod	1:nmod	_
4	gjermane	gjerman	ADJ	_	Gender=Fem|Number=Sing	3	amod	3:amod	_
5	në	në	ADP	_	_	6	case	6:case	_
6	Shqipëri	Shqipëri	PROPN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	11	obl	11:obl	_
7	ka	kam	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	11	aux	11:aux	_
8	qenë	jam	AUX	_	VerbForm=Part	11	cop	11:cop	_
9	përherë	përherë	ADV	_	_	11	advmod	11:advmod	_
10	i	i	DET	_	Gender=Masc	11	det:adj	11:det:adj	_
11	madh	madh	ADJ	_	Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	11:punct	_

~~~


