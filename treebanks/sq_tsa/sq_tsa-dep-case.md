---
layout: base
title:  'Statistics of case in UD_Albanian-TSA'
udver: '2'
---

## Treebank Statistics: UD_Albanian-TSA: Relations: `case`

This relation is universal.

80 nodes (9%) are attached to their parents as `case`.

80 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35.

The following 6 pairs of parts of speech are connected with `case`: <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_tsa-pos-ADP.html">ADP</a></tt> (69; 86% instances), <tt><a href="sq_tsa-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sq_tsa-pos-ADP.html">ADP</a></tt> (5; 6% instances), <tt><a href="sq_tsa-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_tsa-pos-ADP.html">ADP</a></tt> (3; 4% instances), <tt><a href="sq_tsa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_tsa-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_tsa-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="sq_tsa-pos-NUM.html">NUM</a></tt>-<tt><a href="sq_tsa-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
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


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 15 case	color:blue
1	Pastoristët	pastorist	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	2	nsubj	2:nsubj	_
2	jetojnë	jetoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	0:root	_
3	një	një	DET	_	Gender=Fem	4	det	4:det	_
4	jetë	jetë	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	2	obj	2:obj	_
5	nomade	nomad	ADJ	_	Gender=Fem|Number=Sing	4	amod	4:amod	SpaceAfter=No
6	,	,	PUNCT	_	_	2	punct	2:punct	_
7	duke	duke	PART	_	_	8	mark	8:mark	_
8	lëvizur	lëviz	VERB	_	Aspect=Imp|Tense=Pres|VerbForm=Ger|Voice=Act	2	advcl	2:advcl	_
9	kopetë	kope	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Plur	8	obj	8:obj	_
10	e	i	DET	_	Gender=Fem|Number=Plur	11	det:pron	11:det:pron	_
11	tyre	ata	PRON	_	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	9	nmod:poss	9:nmod:poss	_
12	nga	nga	ADP	_	_	14	case	14:case	_
13	një	një	NUM	_	_	14	nummod	14:nummod	_
14	kullotë	kullotë	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	8	obl	8:obl	_
15	në	në	ADP	_	_	17	case	17:case	_
16	një	një	NUM	_	_	17	nummod	17:nummod	_
17	tjetër	tjetër	PRON	_	Gender=Fem|Number=Sing|PronType=Ind	8	obl	8:obl	SpaceAfter=No
18	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


