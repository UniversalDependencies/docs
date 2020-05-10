---
layout: base
title:  'Statistics of obj in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `obj`

This relation is universal.

2050 nodes (5%) are attached to their parents as `obj`.

1057 instances of `obj` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.26536585365854.

The following 10 pairs of parts of speech are connected with `obj`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1403; 68% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (550; 27% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (34; 2% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (18; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (18; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (17; 1% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obj	color:blue
1	onia	Onia	PROPN	S	Case=Gen|Number=Sing	2	nmod	2:nmod	_
2	fotopoe	foto_pood	NOUN	S	Case=Gen|Number=Sing	3	nmod	3:nmod	_
3	peded	pede	NOUN	S	Case=Nom|Number=Plur	4	nsubj	4:nsubj	_
4	korrutavad	korrutama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	nagunii	nagu_nii	ADV	D	_	4	advmod	4:advmod	_
6	selle	see	DET	P	Case=Gen|Number=Sing|PronType=Dem	7	det	7:det	_
7	hinna	hind	NOUN	S	Case=Gen|Number=Sing	4	obj	4:obj	_
8	2X	2X	NOUN	Y	Abbr=Yes	4	obl	4:obl	SpaceAfter=No
9	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 obj	color:blue
1	paljudel	palju	PRON	P	Case=Ade|Number=Plur|PronType=Ind	2	nmod	2:nmod	_
2	tesitel	teine	PRON	P	Case=Ade|Number=Plur|PronType=Dem	6	obl	6:obl	_
3	pead	pidama	AUX	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
4	seda	see	PRON	P	Case=Par|Number=Sing|PronType=Dem	6	obj	6:obj	_
5	menüüst	menüü	NOUN	S	Case=Ela|Number=Sing	6	obl	6:obl	_
6	tegema	tegema	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	Z	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obj	color:blue
1	Unustasid	unustama	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	Hokutoriki	Hokutoriki	PROPN	S	Case=Gen|Number=Sing	1	obj	1:obj	SpaceAfter=No
3	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


