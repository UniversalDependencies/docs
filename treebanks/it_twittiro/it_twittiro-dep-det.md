---
layout: base
title:  'Statistics of det in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: <tt><a href="it_twittiro-dep-det-poss.html">det:poss</a></tt>, <tt><a href="it_twittiro-dep-det-predet.html">det:predet</a></tt>.

3301 nodes (11%) are attached to their parents as `det`.

3301 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15722508330809.

The following 12 pairs of parts of speech are connected with `det`: <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (2681; 81% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (363; 11% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (116; 4% instances), <tt><a href="it_twittiro-pos-NUM.html">NUM</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (35; 1% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (32; 1% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (29; 1% instances), <tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (16; 0% instances), <tt><a href="it_twittiro-pos-X.html">X</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (12; 0% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (11; 0% instances), <tt><a href="it_twittiro-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
1	Pure	pure	ADV	B	_	5	advmod	_	_
2	Passera	Passera	PROPN	SP	_	5	nsubj	_	_
3	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	5	expl	_	_
4	può	potere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	definire	definire	VERB	V	VerbForm=Inf	0	root	_	_
6	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	membro	membro	NOUN	S	Gender=Masc|Number=Sing	5	obj	_	_
8	di	di	ADP	E	_	10	case	_	_
9	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	governo	governo	NOUN	S	Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
11	?	?	PUNCT	FS	_	5	punct	_	_
12	#monti	#monti	SYM	SYM	_	5	parataxis:hashtag	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Assolto	assolvere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
2	Berlusconi	Berlusconi	PROPN	SP	_	1	nsubj:pass	_	SpaceAfter=No
3	.	.	PUNCT	FS	_	1	punct	_	_
4	L'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	5	det	_	SpaceAfter=No
5	Italia	italia	PROPN	SP	_	7	nsubj	_	_
6	era	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	cop	_	_
7	consenziente	consenziente	ADJ	A	Number=Sing	1	parataxis	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	1	punct	_	_
9	[	[	PUNCT	FB	_	10	punct	_	SpaceAfter=No
10	@user	@user	SYM	SYM	_	1	vocative:mention	_	SpaceAfter=No
11	]	]	PUNCT	FB	_	10	punct	_	SpaceAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	profezia	profezia	NOUN	S	Gender=Fem|Number=Sing	7	nsubj	_	_
3	di	di	ADP	E	_	5	case	_	_
4	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	#maya	#maya	SYM	SYM	_	2	nmod	_	_
6	non	non	ADV	BN	PronType=Neg	7	advmod	_	_
7	e'	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	che	che	SCONJ	CS	_	10	mark	_	_
9	era	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	10	cop	_	_
10	Mario	mario	PROPN	SP	_	7	ccomp	_	_
11	Monti	Monti	PROPN	SP	_	10	flat:name	_	_
12	?!	?!	PUNCT	FS	_	7	punct	_	_

~~~


