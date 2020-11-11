---
layout: base
title:  'Statistics of case in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `case`

This relation is universal.

32684 nodes (11%) are attached to their parents as `case`.

32455 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5871068412679.

The following 11 pairs of parts of speech are connected with `case`: <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (23274; 71% instances), <tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (5271; 16% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (1794; 5% instances), <tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (778; 2% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (773; 2% instances), <tt><a href="no_bokmaal-pos-DET.html">DET</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (287; 1% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (264; 1% instances), <tt><a href="no_bokmaal-pos-ADV.html">ADV</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (142; 0% instances), <tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (88; 0% instances), <tt><a href="no_bokmaal-pos-X.html">X</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (10; 0% instances), <tt><a href="no_bokmaal-pos-SYM.html">SYM</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Thomassen	Thomassen	PROPN	_	_	4	nsubj	_	_
2	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	på	på	ADP	_	_	4	case	_	_
4	vei	vei	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
5	til	til	ADP	_	_	8	case	_	_
6	sin	sin	PRON	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	8	nmod	_	_
7	neste	neste	DET	_	Definite=Def|PronType=Dem	8	det	_	_
8	gjerning	gjerning	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
9	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	_	_
3	en	en	DET	_	Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
4	fremmed	fremmed	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	5	amod	_	_
5	tanke	tanke	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
6	for	for	ADP	_	_	7	case	_	_
7	Borten	Borten	PROPN	_	_	5	obl	_	SpaceAfter=No
8	.	$.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 case	color:blue
1	Man	man	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|PronType=Prs	2	nsubj	_	_
2	bryter	bryte	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	anstendighet	anstendighet	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	2	obj	_	_
4	for	for	SCONJ	_	_	6	mark	_	_
5	å	å	PART	_	_	6	mark	_	_
6	si	si	VERB	_	VerbForm=Inf	2	advcl	_	_
7	seg	seg	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	6	obj	_	_
8	enig	enig	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	6	xcomp	_	_
9	i	i	ADP	_	_	10	case	_	_
10	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	obl	_	_
11	alle	alle	PRON	_	Number=Plur|Person=3|PronType=Prs,Tot	13	nsubj	_	_
12	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	13	cop	_	_
13	enige	enig	ADJ	_	Degree=Pos|Number=Plur	10	acl:relcl	_	_
14	om	om	ADP	_	_	13	obl	_	SpaceAfter=No
15	.	$.	PUNCT	_	_	2	punct	_	_

~~~


