---
layout: base
title:  'Statistics of cop in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `cop`

This relation is universal.

3361 nodes (1%) are attached to their parents as `cop`.

2739 instances of `cop` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.74977685212734.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-AUX.html">AUX</a></tt> (1317; 39% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-AUX.html">AUX</a></tt> (1176; 35% instances), <tt><a href="it-pos-PRON.html">PRON</a></tt>-<tt><a href="it-pos-AUX.html">AUX</a></tt> (697; 21% instances), <tt><a href="it-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it-pos-AUX.html">AUX</a></tt> (74; 2% instances), <tt><a href="it-pos-ADV.html">ADV</a></tt>-<tt><a href="it-pos-AUX.html">AUX</a></tt> (33; 1% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-AUX.html">AUX</a></tt> (33; 1% instances), <tt><a href="it-pos-NUM.html">NUM</a></tt>-<tt><a href="it-pos-AUX.html">AUX</a></tt> (27; 1% instances), <tt><a href="it-pos-X.html">X</a></tt>-<tt><a href="it-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it-pos-SYM.html">SYM</a></tt>-<tt><a href="it-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cop	color:blue
1	Questa	questo	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	ricchezza	ricchezza	NOUN	S	Gender=Fem|Number=Sing	5	nsubj	_	_
3	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	tutta	tutto	PRON	PI	Gender=Fem|Number=Sing|PronType=Ind	5	nmod	_	_
5	apparenza	apparenza	NOUN	S	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cop	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	vero	vero	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	7	nsubj:pass	_	_
5	possiamo	potere	AUX	VM	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	essere	essere	AUX	VA	VerbForm=Inf	7	aux:pass	_	_
7	sostituiti	sostituire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	parataxis	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
2	stata	essere	AUX	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	cop	_	_
3	quello	quello	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	0	root	_	_
4	che	che	PRON	PR	PronType=Rel	7	obj	_	_
5	ci	ci	PRON	PC	Clitic=Yes|PronType=Prs	7	expl	_	_
6	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	7	expl:impers	_	_
7	attendeva	attendere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	acl:relcl	_	SpaceAfter=No
8	:	:	PUNCT	FC	_	3	punct	_	_

~~~


