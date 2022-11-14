---
layout: base
title:  'Statistics of cop in UD_Italian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParlaMint: Relations: `cop`

This relation is universal.

259 nodes (1%) are attached to their parents as `cop`.

251 instances of `cop` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.87258687258687.

The following 7 pairs of parts of speech are connected with `cop`: <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-AUX.html">AUX</a></tt> (119; 46% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-AUX.html">AUX</a></tt> (104; 40% instances), <tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="it_parlamint-pos-AUX.html">AUX</a></tt> (22; 8% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-AUX.html">AUX</a></tt> (7; 3% instances), <tt><a href="it_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="it_parlamint-pos-AUX.html">AUX</a></tt> (4; 2% instances), <tt><a href="it_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="it_parlamint-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="it_parlamint-pos-DET.html">DET</a></tt>-<tt><a href="it_parlamint-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	Lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Stato	stato	NOUN	S	Gender=Masc|Number=Sing	5	nsubj	_	_
3	deve	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	essere	essere	AUX	V	VerbForm=Inf	5	cop	_	_
5	presente	presente	ADJ	A	Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 cop	color:blue
1	Dobbiamo	dovere	AUX	VM	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	riconoscere	riconoscere	VERB	V	VerbForm=Inf	0	root	_	_
3	che	che	SCONJ	CS	_	9	mark	_	_
4	questa	questo	PRON	PD	Gender=Fem|Number=Sing|PronType=Dem	9	nsubj	_	_
5	dev'	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	SpaceAfter=No
6	essere	essere	AUX	V	VerbForm=Inf	9	cop	_	_
7	comunque	comunque	ADV	B	_	2	advmod	_	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	priorità	priorità	NOUN	S	Gender=Fem	2	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Non	non	ADV	BN	PronType=Neg	3	advmod	_	_
2	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	questo	questo	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	0	root	_	_
4	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	spirito	spirito	NOUN	S	Gender=Masc|Number=Sing	3	nsubj	_	_
6	di	di	ADP	E	_	8	case	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	provvedimento	provvedimento	NOUN	S	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	3	punct	_	_

~~~


