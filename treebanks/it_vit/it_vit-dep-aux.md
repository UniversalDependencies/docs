---
layout: base
title:  'Statistics of aux in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="it_vit-dep-aux-pass.html">aux:pass</a></tt>.

5378 nodes (2%) are attached to their parents as `aux`.

5362 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40628486426181.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (5091; 95% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (124; 2% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (99; 2% instances), <tt><a href="it_vit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (23; 0% instances), <tt><a href="it_vit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (15; 0% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (14; 0% instances), <tt><a href="it_vit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (11; 0% instances), <tt><a href="it_vit-pos-X.html">X</a></tt>-<tt><a href="it_vit-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
2	come	come	ADP	E	_	4	case	_	_
3	un'	uno	NUM	N	Gender=Fem|Number=Sing|NumType=Card	4	nummod	_	SpaceAfter=No
4	energia	energia	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
5	che	che	PRON	PR	PronType=Rel	7	nsubj	_	_
6	sta	stare	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	crescendo	crescere	VERB	V	VerbForm=Ger	4	acl:relcl	_	_
8	complessivamente	complessivamente	ADV	B	_	7	advmod	_	SpaceAfter=No
9	"	"	PUNCT	FB	_	7	punct	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux	color:blue
1	"	"	PUNCT	FB	_	6	punct	_	SpaceAfter=No
2	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
3	stato	essere	AUX	VA	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	cop	_	_
4	tutto	tutto	DET	T	Gender=Masc|Number=Sing|PronType=Ind	6	det:predet	_	_
5	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	equivoco	equivoco	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
7	da	da	ADP	E	_	8	mark	_	_
8	riempire	riempire	VERB	V	VerbForm=Inf	6	advcl	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	che	che	PRON	PR	PronType=Rel	4	nsubj	_	_
2	dev'	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	SpaceAfter=No
3	essere	essere	AUX	VA	VerbForm=Inf	4	cop	_	_
4	immediato	immediato	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	6	punct	_	_
6	tempestivo	tempestivo	ADJ	A	Gender=Masc|Number=Sing	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	4	punct	_	_

~~~


