---
layout: base
title:  'Statistics of det in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: <tt><a href="it_isdt-dep-det-poss.html">det:poss</a></tt>, <tt><a href="it_isdt-dep-det-predet.html">det:predet</a></tt>.

46345 nodes (16%) are attached to their parents as `det`.

46331 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14394217283418.

The following 10 pairs of parts of speech are connected with `det`: <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-DET.html">DET</a></tt> (40832; 88% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-DET.html">DET</a></tt> (3180; 7% instances), <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt>-<tt><a href="it_isdt-pos-DET.html">DET</a></tt> (1101; 2% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-DET.html">DET</a></tt> (569; 1% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-DET.html">DET</a></tt> (300; 1% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-DET.html">DET</a></tt> (157; 0% instances), <tt><a href="it_isdt-pos-ADV.html">ADV</a></tt>-<tt><a href="it_isdt-pos-DET.html">DET</a></tt> (98; 0% instances), <tt><a href="it_isdt-pos-SYM.html">SYM</a></tt>-<tt><a href="it_isdt-pos-DET.html">DET</a></tt> (83; 0% instances), <tt><a href="it_isdt-pos-X.html">X</a></tt>-<tt><a href="it_isdt-pos-DET.html">DET</a></tt> (21; 0% instances), <tt><a href="it_isdt-pos-ADP.html">ADP</a></tt>-<tt><a href="it_isdt-pos-DET.html">DET</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Tutti	tutto	DET	T	Gender=Masc|Number=Plur|PronType=Tot	3	det:predet	3:det:predet	_
2	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	3:det	_
3	esseri	essere	NOUN	S	Gender=Masc|Number=Plur	5	nsubj	5:nsubj|9:nsubj	_
4	umani	umano	ADJ	A	Gender=Masc|Number=Plur	3	amod	3:amod	_
5	sanno	sapere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
6	di	di	ADP	E	_	9	mark	9:mark	_
7	poter	potere	AUX	VM	VerbForm=Inf	9	aux	9:aux	_
8	essere	essere	AUX	V	VerbForm=Inf	9	cop	9:cop	_
9	più	più	ADV	B	_	5	xcomp	5:xcomp	_
10	di	di	ADP	E	_	11	case	11:case	_
11	ciò	ciò	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	9	obl	9:obl:di|13:nsubj	_
12	che	che	PRON	PR	PronType=Rel	13	nsubj	11:ref	_
13	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	11:acl:relcl	SpaceAfter=No
14	.	.	PUNCT	FS	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Alcune	alcuno	DET	DI	Gender=Fem|Number=Plur|PronType=Ind	2	det	2:det	_
2	chiamate	chiamata	NOUN	S	Gender=Fem|Number=Plur	3	nsubj	3:nsubj	_
3	partirono	partire	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	da	da	ADP	E	_	6	case	6:case	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	6:det	_
6	Quirinale	Quirinale	PROPN	SP	_	3	obl	3:obl:da	SpaceAfter=No
7	.	.	PUNCT	FS	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Da	da	ADP	E	_	3	case	3:case	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	3:det	_
3	'93	'93	NUM	N	NumType=Card	4	obl	4:obl:da	_
4	dirige	dirigere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	6:det	_
6	Festival	festival	NOUN	S	Gender=Masc|Number=Sing	4	obj	4:obj	_
7	di	di	ADP	E	_	8	case	8:case	_
8	Taormina	Taormina	PROPN	SP	_	6	nmod	6:nmod:di	SpaceAfter=No
9	.	.	PUNCT	FS	_	4	punct	4:punct	_

~~~


