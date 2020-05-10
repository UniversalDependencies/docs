---
layout: base
title:  'Statistics of aux in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `aux`

This relation is universal.

1559 nodes (4%) are attached to their parents as `aux`.

1428 instances of `aux` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.13406029506094.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (1369; 88% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (77; 5% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (68; 4% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (23; 1% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (15; 1% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_ewt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 aux	color:blue
1	paljudel	palju	PRON	P	Case=Ade|Number=Plur|PronType=Ind	2	nmod	2:nmod	_
2	tesitel	teine	PRON	P	Case=Ade|Number=Plur|PronType=Dem	6	obl	6:obl	_
3	pead	pidama	AUX	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
4	seda	see	PRON	P	Case=Par|Number=Sing|PronType=Dem	6	obj	6:obj	_
5	menüüst	menüü	NOUN	S	Case=Ela|Number=Sing	6	obl	6:obl	_
6	tegema	tegema	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	Z	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Igasugune	iga_sugune	DET	P	Case=Nom|Number=Sing|PronType=Ind	2	det	2:det	_
2	abi	abi	NOUN	S	Case=Nom|Number=Sing	4	nsubj	4:nsubj	_
3	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	teretulnud	tere_tulnud	ADJ	A	Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	SpaceAfter=No
5	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 aux	color:blue
1	See	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	7	nsubj:cop	7:nsubj	_
2	muidugi	muidugi	ADV	D	_	7	advmod	7:advmod	_
3	ei	ei	AUX	V	Polarity=Neg	7	aux	7:aux	_
4	ole	olema	AUX	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
5	päris	päris	ADV	D	_	6	advmod	6:advmod	_
6	aus	aus	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	7	amod	7:amod	_
7	suhtumine	suhtumine	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	Z	_	7	punct	7:punct	_

~~~


