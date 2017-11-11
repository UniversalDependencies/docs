---
layout: base
title:  'Statistics of det:predet in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="it-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it-dep-det-poss.html">det:poss</a></tt>.

394 nodes (0%) are attached to their parents as `det:predet`.

394 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1243654822335.

The following 6 pairs of parts of speech are connected with `det:predet`: <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-DET.html">DET</a></tt> (371; 94% instances), <tt><a href="it-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it-pos-DET.html">DET</a></tt> (16; 4% instances), <tt><a href="it-pos-PRON.html">PRON</a></tt>-<tt><a href="it-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="it-pos-NUM.html">NUM</a></tt>-<tt><a href="it-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det:predet	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 det:predet	color:blue
1	Mica	mica	ADV	BN	PronType=Neg	6	advmod	_	_
2	tutta	tutto	DET	T	Gender=Fem|Number=Sing|PronType=Tot	4	det:predet	_	_
3	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	4	det	_	SpaceAfter=No
4	America	America	PROPN	SP	_	6	nsubj	_	_
5	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	vissuto	vivere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	a	a	ADP	E	_	9	case	_	_
8	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	Ok	Ok	PROPN	SP	_	6	obl	_	_
10	Corral	Corral	PROPN	SP	_	9	flat:name	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det:predet	color:blue
1	Tutti	tutto	DET	T	Gender=Masc|Number=Plur|PronType=Tot	3	det:predet	_	_
2	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	altri	altro	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	7	nsubj	_	_
4	erano	essere	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	7	cop	_	_
5	di	di	ADP	E	_	7	case	_	_
6	diversa	diverso	DET	DI	Gender=Fem|Number=Sing|PronType=Ind	7	det	_	_
7	opinione	opinione	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
8	e	e	CCONJ	CC	_	12	cc	_	_
9	così	così	ADV	B	_	12	advmod	_	_
10	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux:pass	_	_
11	stato	essere	AUX	VA	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	12	aux:pass	_	_
12	deciso	decidere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	conj	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	7	punct	_	_

~~~


