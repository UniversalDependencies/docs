---
layout: base
title:  'Statistics of aux in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="it_markit-dep-aux-pass.html">aux:pass</a></tt>.

725 nodes (2%) are attached to their parents as `aux`.

725 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33793103448276.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-AUX.html">AUX</a></tt> (675; 93% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-AUX.html">AUX</a></tt> (28; 4% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-AUX.html">AUX</a></tt> (15; 2% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="it_markit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_markit-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-DET.html">DET</a></tt>-<tt><a href="it_markit-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_markit-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 aux	color:blue
1	Ma	ma	CCONJ	CC	_	4	cc	_	_
2	sono	essere	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	davvero	davvero	ADV	B	_	4	advmod	_	_
4	loro	loro	PRON	PE	Gender=Fem|Number=Plur|Person=3|PronType=Prs	0	root	_	_
5	a	a	ADP	E	_	8	mark	_	_
6	dover	dovere	AUX	VM	VerbForm=Inf	8	aux	_	_
7	essere	essere	AUX	VA	VerbForm=Inf	8	aux:pass	_	_
8	arrabbiati	arrabbiare	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	4	xcomp	_	_
9	?	?	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 15 aux	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
2	secondo	secondo	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	3	amod	_	_
3	punto	punto	NOUN	S	Gender=Masc|Number=Sing	9	nsubj	_	_
4	su	su	ADP	E	_	5	case	_	_
5	cui	cui	PRON	PR	Number=Plur|Person=3|PronType=Rel	6	obl	_	_
6	lavora	lavorare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	_
7	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	l'	il	DET	RD	_	9	det	_	_
9	istituzione	istituzione	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
10	di	di	ADP	E	_	12	case	_	_
11	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	governo	governo	NOUN	S	Gender=Masc|Number=Sing	9	nmod	_	_
13	europeo	europeo	ADJ	A	Gender=Masc|Number=Sing	12	amod	_	_
14	che	che	PRON	PR	_	18	nsubj	_	_
15	abbia	avere	AUX	VA	Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	18	aux	_	_
16	sempre	sempre	ADV	B	_	17	advmod	_	_
17	maggior	grande	ADJ	A	_	18	amod	_	_
18	potere	potere	NOUN	S	Gender=Masc|Number=Sing	12	acl:relcl	_	_
19	decisionale	decisionale	ADJ	A	Gender=Masc|Number=Sing	18	amod	_	_
20	su	su	ADP	E	_	23	case	_	_
21	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	23	det	_	_
22	altri	altro	ADJ	A	_	23	amod	_	_
23	Stati	stato	NOUN	S	Gender=Masc|Number=Plur	18	nmod	_	_
24	.	.	PUNCT	FS	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 aux	color:blue
1	Questo	questo	PRON	PD	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
2	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	problema	problema	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
5	che	che	PRON	PR	_	9	nsubj	_	_
6	spesso	spesso	ADV	B	_	9	advmod	_	_
7	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
8	stato	essere	AUX	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	cop	_	_
9	presente	presente	ADJ	A	Gender=Masc|Number=Sing	4	acl:relcl	_	_
10	in	in	ADP	E	_	13	case	_	_
11	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
12	nostro	nostro	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	13	det:poss	_	_
13	secolo	secolo	NOUN	S	Gender=Masc|Number=Sing	9	obl	_	_
14	.	.	PUNCT	FS	_	4	punct	_	_

~~~


