---
layout: base
title:  'Statistics of cop in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `cop`

This relation is universal.

508 nodes (2%) are attached to their parents as `cop`.

482 instances of `cop` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.88385826771654.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt> (255; 50% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt> (144; 28% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt> (39; 8% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt> (25; 5% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt> (19; 4% instances), <tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt>-<tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt> (16; 3% instances), <tt><a href="it_twittiro-pos-X.html">X</a></tt>-<tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="it_twittiro-pos-DET.html">DET</a></tt>-<tt><a href="it_twittiro-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cop	color:blue
1	RT	retweet	NOUN	S	_	2	dep	_	_
2	@user	@user	SYM	SYM	_	4	vocative:mention	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	2	punct	_	_
4	Spero	sperare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	sia	essere	AUX	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	colite	colite	NOUN	S	Gender=Fem|Number=Sing	4	ccomp	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	6	punct	_	_
8	Ma	ma	CCONJ	CC	_	9	cc	_	_
9	ho	avere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	conj	_	_
10	paura	paura	NOUN	S	Gender=Fem|Number=Sing	9	obj	_	_
11	sia	essere	AUX	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	amore	amore	NOUN	S	Gender=Masc|Number=Sing	9	advcl	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cop	color:blue
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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 cop	color:blue
1	Vado	andare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	in	in	ADP	E	_	3	case	_	_
3	bagno	bagno	NOUN	S	Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No
4	.	.	PUNCT	FS	_	1	punct	_	_
5	Evacuo	evacuare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
6	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	PDL	PDL	PROPN	SP	_	5	obj	_	_
8	e	e	CCONJ	CC	_	10	cc	_	_
9	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	Governo	governo	NOUN	S	Gender=Masc|Number=Sing	7	conj	_	_
11	Monti	Monti	PROPN	SP	_	10	nmod	_	_
12	che	che	PRON	PR	PronType=Rel	15	nsubj	_	_
13	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	_
14	in	in	ADP	E	_	15	case	_	_
15	me	me	PRON	PE	Number=Sing|Person=1|PronType=Prs	10	acl:relcl	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	1	punct	_	_

~~~


