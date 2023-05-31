---
layout: base
title:  'Statistics of aux in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="es_ancora-dep-aux-pass.html">aux:pass</a></tt>.

7261 nodes (1%) are attached to their parents as `aux`.

7104 instances of `aux` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32846715328467.

The following 11 pairs of parts of speech are connected with `aux`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (6805; 94% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (215; 3% instances), <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (183; 3% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (23; 0% instances), <tt><a href="es_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (15; 0% instances), <tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (8; 0% instances), <tt><a href="es_ancora-pos-ADV.html">ADV</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="es_ancora-pos-DET.html">DET</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-NUM.html">NUM</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-ADP.html">ADP</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	El	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	2:det	_
2	error	error	NOUN	ncms000	Gender=Masc|Number=Sing	6	nsubj	6:nsubj	ArgTem=arg1:tem
3	fue	ser	AUX	vsis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	6:cop	_
4	haber	haber	AUX	van0000	VerbForm=Inf	6	aux	6:aux	_
5	lo	él	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	6	obj	6:obj	_
6	comprado	comprar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	ArgTem=arg2:atr
7	en	en	ADP	sps00	_	8	case	8:case	_
8	rebajas	rebaja	NOUN	ncfp000	Gender=Fem|Number=Plur	6	obl	6:obl	SpaceAfter=No|ArgTem=argM:adv
9	.	.	PUNCT	fp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	El	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	2:det	_
2	resultado	resultado	NOUN	ncms000	Gender=Masc|Number=Sing	5	nsubj	5:nsubj	ArgTem=arg1:tem
3	está	estar	AUX	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
4	siendo	ser	AUX	vsg0000	VerbForm=Ger	5	cop	5:cop	_
5	fulminante	fulminante	ADJ	aq0cs0	Number=Sing	0	root	0:root	SpaceAfter=No|ArgTem=arg2:atr
6	.	.	PUNCT	fp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	"	"	PUNCT	fe	PunctType=Quot	5	punct	5:punct	SpaceAfter=No
2	Ha	haber	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
3	sido	ser	AUX	vsp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	cop	5:cop	ArgTem=arg1:pat
4	un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	5:det	_
5	año	año	NOUN	ncms000	Gender=Masc|Number=Sing	0	root	0:root	ArgTem=arg2:atr
6	muy	mucho	ADV	rg	_	7	advmod	7:advmod	_
7	atípico	atípico	ADJ	aq0ms0	Gender=Masc|Number=Sing	5	amod	5:amod	SpaceAfter=No
8	.	.	PUNCT	fp	PunctType=Peri	5	punct	5:punct	_

~~~


