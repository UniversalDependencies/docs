---
layout: base
title:  'Statistics of aux in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="es_ancora-dep-aux-pass.html">aux:pass</a></tt>.

7607 nodes (1%) are attached to their parents as `aux`.

7443 instances of `aux` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37031681346129.

The following 11 pairs of parts of speech are connected with `aux`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (7101; 93% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (238; 3% instances), <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (196; 3% instances), <tt><a href="es_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (28; 0% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (23; 0% instances), <tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (8; 0% instances), <tt><a href="es_ancora-pos-ADV.html">ADV</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="es_ancora-pos-DET.html">DET</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-NUM.html">NUM</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-ADP.html">ADP</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	El	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	error	error	NOUN	NOUN	Gender=Masc|Number=Sing	6	nsubj	_	_
3	fue	ser	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	_
4	haber	haber	AUX	AUX	VerbForm=Inf	6	aux	_	_
5	lo	él	PRON	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	6	obj	_	_
6	comprado	comprar	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	en	en	ADP	ADP	AdpType=Prep	8	case	_	_
8	rebajas	rebaja	NOUN	NOUN	Gender=Fem|Number=Plur	6	obl	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	El	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	resultado	resultado	NOUN	NOUN	Gender=Masc|Number=Sing	5	nsubj	_	_
3	está	estar	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	siendo	ser	AUX	AUX	VerbForm=Ger	5	cop	_	_
5	fulminante	fulminante	ADJ	ADJ	Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 aux	color:blue
1	El	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	rival	rival	NOUN	NOUN	Number=Sing	0	root	_	_
3	por	por	ADP	ADP	AdpType=Prep	5	case	_	_
4	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	oro	oro	NOUN	NOUN	Gender=Masc|Number=Sing	2	nmod	_	_
6	va	ir	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux	_	_
7	a	a	ADP	ADP	AdpType=Prep	2	case	_	_
8	ser	ser	AUX	AUX	VerbForm=Inf	2	cop	_	_
9	Rusia	Rusia	PROPN	PROPN	_	2	nsubj	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	PunctType=Comm	13	punct	_	_
11	que	que	PRON	PRON	PronType=Int,Rel	13	nsubj	_	_
12	se	él	PRON	PRON	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	13	expl:pv	_	_
13	impuso	imponer	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	acl	_	_
14	a	a	ADP	ADP	AdpType=Prep	15	case	_	_
15	Portugal	Portugal	PROPN	PROPN	_	13	obj	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	PunctType=Peri	2	punct	_	_

~~~


