---
layout: base
title:  'Statistics of aux in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="it_isdt-dep-aux-pass.html">aux:pass</a></tt>.

6036 nodes (2%) are attached to their parents as `aux`.

6025 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38270377733598.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-AUX.html">AUX</a></tt> (5777; 96% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-AUX.html">AUX</a></tt> (124; 2% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-AUX.html">AUX</a></tt> (96; 2% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-AUX.html">AUX</a></tt> (26; 0% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-AUX.html">AUX</a></tt> (8; 0% instances), <tt><a href="it_isdt-pos-ADV.html">ADV</a></tt>-<tt><a href="it_isdt-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt>-<tt><a href="it_isdt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 aux	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	2:cop	_
2	vero	vero	ADJ	A	Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	2:punct	_
4	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	7	nsubj:pass	7:nsubj:pass	_
5	possiamo	potere	AUX	VM	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	aux	7:aux	_
6	essere	essere	AUX	VA	VerbForm=Inf	7	aux:pass	7:aux:pass	_
7	sostituiti	sostituire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	parataxis	2:parataxis	SpaceAfter=No
8	.	.	PUNCT	FS	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 aux	color:blue
1	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	_
2	gara	gara	NOUN	S	Gender=Fem|Number=Sing	8	nsubj	8:nsubj	_
3	di	di	ADP	E	_	4	case	4:case	_
4	Goteborg	Goteborg	PROPN	SP	_	2	nmod	2:nmod:di	_
5	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	8:aux	_
6	stata	essere	AUX	VA	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	8	cop	8:cop	_
7	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	8:det	_
8	passaggio	passaggio	NOUN	S	Gender=Masc|Number=Sing	0	root	0:root	_
9	di	di	ADP	E	_	10	case	10:case	_
10	consegne	consegna	NOUN	S	Gender=Fem|Number=Plur	8	nmod	8:nmod:di	SpaceAfter=No
11	:	:	PUNCT	FC	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 aux	color:blue
1	Erano	essere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	2	cop	2:cop	_
2	slegati	slegare	ADJ	A	Gender=Masc|Number=Plur	0	root	0:root	_
3	e	e	CCONJ	CC	_	9	cc	9:cc	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	5:det	_
5	cosa	cosa	NOUN	S	Gender=Fem|Number=Sing	9	nsubj	9:nsubj	_
6	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	9:aux	_
7	stata	essere	AUX	VA	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	9	cop	9:cop	_
8	loro	loro	PRON	PE	Number=Plur|Person=3|PronType=Prs	9	iobj	9:iobj	_
9	fatale	fatale	ADJ	A	Number=Sing	2	conj	2:conj:e	SpaceAfter=No
10	.	.	PUNCT	FS	_	2	punct	2:punct	_

~~~


