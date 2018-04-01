---
layout: base
title:  'Statistics of det in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: <tt><a href="it-dep-det-poss.html">det:poss</a></tt>, <tt><a href="it-dep-det-predet.html">det:predet</a></tt>.

45404 nodes (15%) are attached to their parents as `det`.

45390 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14492115232138.

The following 12 pairs of parts of speech are connected with `det`: <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-DET.html">DET</a></tt> (39998; 88% instances), <tt><a href="it-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it-pos-DET.html">DET</a></tt> (3106; 7% instances), <tt><a href="it-pos-NUM.html">NUM</a></tt>-<tt><a href="it-pos-DET.html">DET</a></tt> (1060; 2% instances), <tt><a href="it-pos-PRON.html">PRON</a></tt>-<tt><a href="it-pos-DET.html">DET</a></tt> (569; 1% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-DET.html">DET</a></tt> (302; 1% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-DET.html">DET</a></tt> (158; 0% instances), <tt><a href="it-pos-ADV.html">ADV</a></tt>-<tt><a href="it-pos-DET.html">DET</a></tt> (97; 0% instances), <tt><a href="it-pos-SYM.html">SYM</a></tt>-<tt><a href="it-pos-DET.html">DET</a></tt> (83; 0% instances), <tt><a href="it-pos-X.html">X</a></tt>-<tt><a href="it-pos-DET.html">DET</a></tt> (19; 0% instances), <tt><a href="it-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="it-pos-DET.html">DET</a></tt> (6; 0% instances), <tt><a href="it-pos-ADP.html">ADP</a></tt>-<tt><a href="it-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="it-pos-ADV.html">ADV</a></tt>-<tt><a href="it-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Tutti	tutto	DET	T	Gender=Masc|Number=Plur|PronType=Tot	3	det:predet	_	_
2	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	esseri	essere	NOUN	S	Gender=Masc|Number=Plur	5	nsubj	_	ExtraSubj=Yes
4	umani	umano	ADJ	A	Gender=Masc|Number=Plur	3	amod	_	_
5	sanno	sapere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	di	di	ADP	E	_	9	mark	_	_
7	poter	potere	AUX	VM	VerbForm=Inf	9	aux	_	_
8	essere	essere	AUX	V	VerbForm=Inf	9	cop	_	_
9	più	più	ADV	B	_	5	xcomp	_	_
10	di	di	ADP	E	_	11	case	_	_
11	ciò	ciò	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	9	obl	_	_
12	che	che	PRON	PR	PronType=Rel	13	nsubj	_	_
13	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Alcune	alcuno	DET	DI	Gender=Fem|Number=Plur|PronType=Ind	2	det	_	_
2	chiamate	chiamata	NOUN	S	Gender=Fem|Number=Plur	3	nsubj	_	_
3	partirono	partire	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	da	da	ADP	E	_	6	case	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Quirinale	Quirinale	PROPN	SP	_	3	obl	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Da	da	ADP	E	_	3	case	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	'93	'93	NUM	N	NumType=Card	4	obl	_	_
4	dirige	dirigere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Festival	festival	NOUN	S	Gender=Masc|Number=Sing	4	obj	_	_
7	di	di	ADP	E	_	8	case	_	_
8	Taormina	Taormina	PROPN	SP	_	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	4	punct	_	_

~~~


