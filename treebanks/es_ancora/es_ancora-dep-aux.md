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
Average distance between parent and child is 1.37268305508085.

The following 11 pairs of parts of speech are connected with `aux`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (7101; 93% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (238; 3% instances), <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (196; 3% instances), <tt><a href="es_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (28; 0% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (23; 0% instances), <tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (8; 0% instances), <tt><a href="es_ancora-pos-ADV.html">ADV</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="es_ancora-pos-DET.html">DET</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-NUM.html">NUM</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-ADP.html">ADP</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	error	error	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
3	fue	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	_
4	haber	haber	AUX	_	VerbForm=Inf	6	aux	_	_
5	lo	él	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	6	obj	_	_
6	comprado	comprar	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	en	en	ADP	_	_	8	case	_	_
8	rebajas	rebaja	NOUN	_	Gender=Fem|Number=Plur	6	obl	_	SpaceAfter=No
9	.	.	PUNCT	_	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	resultado	resultado	NOUN	_	Gender=Masc|Number=Sing	5	nsubj	_	_
3	está	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	siendo	ser	AUX	_	VerbForm=Ger	5	cop	_	_
5	fulminante	fulminante	ADJ	_	Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 aux	color:blue
1	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	rival	rival	NOUN	_	Number=Sing	0	root	_	_
3	por	por	ADP	_	_	5	case	_	_
4	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	oro	oro	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	_
6	va	ir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux	_	_
7	a	a	ADP	_	_	2	case	_	_
8	ser	ser	AUX	_	VerbForm=Inf	2	cop	_	_
9	Rusia	Rusia	PROPN	_	_	2	nsubj	_	SpaceAfter=No
10	,	,	PUNCT	_	PunctType=Comm	13	punct	_	_
11	que	que	PRON	_	PronType=Int,Rel	13	nsubj	_	_
12	se	él	PRON	_	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	13	expl:pv	_	_
13	impuso	imponer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	acl	_	_
14	a	a	ADP	_	_	15	case	_	_
15	Portugal	Portugal	PROPN	_	_	13	obj	_	SpaceAfter=No
16	.	.	PUNCT	_	PunctType=Peri	2	punct	_	_

~~~


