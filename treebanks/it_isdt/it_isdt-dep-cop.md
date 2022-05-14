---
layout: base
title:  'Statistics of cop in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `cop`

This relation is universal.

3432 nodes (1%) are attached to their parents as `cop`.

2812 instances of `cop` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75087412587413.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-AUX.html">AUX</a></tt> (1361; 40% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-AUX.html">AUX</a></tt> (1202; 35% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-AUX.html">AUX</a></tt> (696; 20% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-AUX.html">AUX</a></tt> (76; 2% instances), <tt><a href="it_isdt-pos-ADV.html">ADV</a></tt>-<tt><a href="it_isdt-pos-AUX.html">AUX</a></tt> (33; 1% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-AUX.html">AUX</a></tt> (33; 1% instances), <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt>-<tt><a href="it_isdt-pos-AUX.html">AUX</a></tt> (27; 1% instances), <tt><a href="it_isdt-pos-X.html">X</a></tt>-<tt><a href="it_isdt-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="it_isdt-pos-SYM.html">SYM</a></tt>-<tt><a href="it_isdt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cop	color:blue
1	Questa	questo	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	2	det	2:det	_
2	ricchezza	ricchezza	NOUN	S	Gender=Fem|Number=Sing	5	nsubj	5:nsubj	_
3	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
4	tutta	tutto	PRON	PI	Gender=Fem|Number=Sing|PronType=Ind	5	nmod	5:nmod	_
5	apparenza	apparenza	NOUN	S	Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	FS	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cop	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	2:cop	_
2	vero	vero	ADJ	A	Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	2:punct	_
4	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	7	nsubj:pass	7:nsubj:pass	_
5	possiamo	potere	AUX	VM	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	aux	7:aux	_
6	essere	essere	AUX	VA	VerbForm=Inf	7	aux:pass	7:aux:pass	_
7	sostituiti	sostituire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	parataxis	2:parataxis	SpaceAfter=No
8	.	.	PUNCT	FS	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	3:aux	_
2	stata	essere	AUX	VA	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	cop	3:cop	_
3	quello	quello	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	0	root	0:root|7:obj	_
4	che	che	PRON	PR	PronType=Rel	7	obj	3:ref	_
5	ci	ci	PRON	PC	Clitic=Yes|PronType=Prs	7	expl	7:expl	_
6	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	7	expl:impers	7:expl:impers	_
7	attendeva	attendere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	acl:relcl	3:acl:relcl	SpaceAfter=No
8	:	:	PUNCT	FC	_	3	punct	3:punct	_

~~~


