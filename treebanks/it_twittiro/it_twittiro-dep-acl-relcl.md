---
layout: base
title:  'Statistics of acl:relcl in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="it_twittiro-dep-acl.html">acl</a></tt>.

207 nodes (1%) are attached to their parents as `acl:relcl`.

205 instances of `acl:relcl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.78743961352657.

The following 11 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (103; 50% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (75; 36% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (9; 4% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 acl:relcl	color:blue
1	Governo	governo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
2	Monti	Monti	PROPN	SP	_	1	nmod	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	5	punct	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	nome	nome	NOUN	S	Gender=Masc|Number=Sing	1	appos	_	_
6	giusto	giusto	ADJ	A	Gender=Masc|Number=Sing	5	amod	_	_
7	per	per	ADP	E	_	9	case	_	_
8	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	paese	paese	NOUN	S	Gender=Masc|Number=Sing	5	nmod	_	_
10	che	che	PRON	PR	PronType=Rel	11	nsubj	_	_
11	ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	acl:relcl	_	_
12	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	destino	destino	NOUN	S	Gender=Masc|Number=Sing	11	obj	_	_
14	in	in	ADP	E	_	15	case	_	_
15	salita	salita	NOUN	S	Gender=Fem|Number=Sing	13	nmod	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl:relcl	color:blue
1	#ultimaparola	#ultimaparola	SYM	SYM	_	4	parataxis:hashtag	_	_
2	#Grillo	#Grillo	SYM	SYM	_	4	nsubj	_	_
3	come	come	ADP	E	_	4	case	_	_
4	#Gesù	#Gesù	SYM	SYM	_	0	root	_	SpaceAfter=No
5	?	?	PUNCT	FS	_	4	punct	_	_
6	A	a	ADP	E	_	7	case	_	_
7	quanto	quanto	PRON	PR	PronType=Rel	9	advcl	_	_
8	pare	parere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	_
9	dice	dire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
10	solo	solo	ADV	B	_	11	advmod	_	_
11	#verità	#verità	SYM	SYM	_	9	obj	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	@user	@user	SYM	SYM	_	4	vocative:mention	_	_
2	ma	ma	CCONJ	CC	_	4	discourse	_	_
3	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	Vanity	Vanity	PROPN	SP	_	0	root	_	_
5	Fair	fair	PROPN	SP	_	4	flat:name	_	_
6	che	che	PRON	PR	PronType=Rel	7	nsubj	_	_
7	travisa	travisare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
8	o	o	CCONJ	CC	_	16	cc	_	_
9	in	in	ADP	E	_	11	case	_	_
10	ogni	ogni	DET	DI	Number=Sing|PronType=Ind	11	det	_	_
11	giornale	giornale	NOUN	S	Gender=Masc|Number=Sing	16	obl	_	_
12	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
13	buona	buono	ADJ	A	Gender=Fem|Number=Sing	14	amod	_	_
14	scuola	scuola	NOUN	S	Gender=Fem|Number=Sing	16	nsubj	_	_
15	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	16	expl	_	_
16	trasforma	trasformare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	_
17	come	come	ADP	E	_	19	case	_	_
18	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	Barpapapa'	barpapapa'	PROPN	SP	_	16	obl	_	SpaceAfter=No
20	?	?	PUNCT	FS	_	16	punct	_	SpacesAfter=\n

~~~


