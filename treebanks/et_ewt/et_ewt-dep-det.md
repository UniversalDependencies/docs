---
layout: base
title:  'Statistics of det in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `det`

This relation is universal.

572 nodes (2%) are attached to their parents as `det`.

562 instances of `det` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31818181818182.

The following 9 pairs of parts of speech are connected with `det`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (515; 90% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (17; 3% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (12; 2% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (11; 2% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (8; 1% instances), <tt><a href="et_ewt-pos-DET.html">DET</a></tt>-<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Zopp	Zopp	PROPN	S	Case=Nom|Number=Sing	3	nsubj	3:nsubj	_
2	ei	ei	AUX	V	Polarity=Neg	3	aux	3:aux	_
3	löönud	lööma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	ühtki	üks	DET	P	Case=Par|Number=Sing|PronType=Ind	5	det	5:det	_
5	ässa	äss	NOUN	S	Case=Par|Number=Sing	3	obj	3:obj	SpaceAfter=No
6	,	,	PUNCT	Z	_	9	punct	9.1:punct	_
7	kuid	kuid	CCONJ	J	_	9	cc	9.1:cc	_
8	ka	ka	ADV	D	_	9	advmod	9:advmod	_
9	vastane	vastane	NOUN	S	Case=Nom|Number=Sing	3	conj	9.1:nsubj	_
10	vaid	vaid	ADV	D	_	11	advmod	11:advmod	_
11	ühe	üks	NUM	N	Case=Gen|Number=Sing|NumType=Card	9	orphan	9.1:obj	SpaceAfter=No
12	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Ja	ja	CCONJ	J	_	4	cc	4:cc	_
2	kõik	kõik	DET	P	Case=Nom|Number=Plur|PronType=Tot	3	det	3:det	_
3	nad	tema	PRON	P	Case=Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj	4:nsubj	_
4	said	saama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	sanyakusse	sanyaku	NOUN	S	Case=Ill|Number=Sing	4	obl	4:obl	SpaceAfter=No
6	,	,	PUNCT	Z	_	4	punct	4:punct	_
7	eranditult	eranditult	ADV	D	_	4	advmod	4:advmod	SpaceAfter=No
8	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	(	(	PUNCT	Z	_	6	punct	6:punct	SpaceAfter=No
2	Miks	miks	ADV	D	_	6	mark	6:mark	_
3	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
4	kõik	kõik	DET	P	Case=Nom|Number=Sing|PronType=Tot	5	det	5:det	_
5	maitsev	maitsev	ADJ	A	Case=Nom|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	6	nsubj:cop	6:nsubj	_
6	kahjulik	kahjulik	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	0:root	_
7	või	või	CCONJ	J	_	8	cc	8:cc	_
8	paksukstegev	paksu	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	conj	6:conj	SpaceAfter=No
9	!	!	PUNCT	Z	_	6	punct	6:punct	SpaceAfter=No
10	?	?	PUNCT	Z	_	6	punct	6:punct	SpaceAfter=No
11	)	)	PUNCT	Z	_	6	punct	6:punct	_

~~~


