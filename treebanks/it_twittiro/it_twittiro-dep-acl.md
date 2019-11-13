---
layout: base
title:  'Statistics of acl in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="it_twittiro-dep-acl-relcl.html">acl:relcl</a></tt>.

116 nodes (0%) are attached to their parents as `acl`.

113 instances of `acl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.87068965517241.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (96; 83% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="it_twittiro-pos-NUM.html">NUM</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl	color:blue
1	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	cosa	cosa	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
3	migliore	migliore	ADJ	A	Number=Sing	2	amod	_	_
4	da	da	ADP	E	_	5	mark	_	_
5	fare	fare	VERB	V	VerbForm=Inf	2	acl	_	_
6	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
7	prendere	prendere	VERB	V	VerbForm=Inf	2	csubj	_	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	governo	governo	NOUN	S	Gender=Masc|Number=Sing	7	obj	_	_
10	Monti	Monti	PROPN	SP	_	9	nmod	_	_
11	e	e	CCONJ	CC	_	12	cc	_	_
12	trasformar	trasformare	VERB	V	VerbForm=Inf	7	conj	_	_
13	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	obj	_	_
14	in	in	ADP	E	_	16	case	_	_
15	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	governo	governo	NOUN	S	Gender=Masc|Number=Sing	12	obl	_	_
17	Bounty	Bounty	PROPN	SP	_	16	nmod	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 acl	color:blue
1	@user	@user	SYM	SYM	_	4	vocative:mention	_	_
2	questa	questo	PRON	PD	Gender=Fem|Number=Sing|PronType=Dem	4	nsubj	_	_
3	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	#labuonascuola	#labuonascuola	SYM	SYM	_	0	root	_	_
5	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	6	iobj	_	_
6	chiedo	chiedere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
7	quale	quale	PRON	PQ	Number=Sing|PronType=Int	6	obj	_	_
8	possa	potere	AUX	VM	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
9	essere	essere	AUX	V	VerbForm=Inf	10	cop	_	_
10	quella	quello	PRON	PD	Gender=Fem|Number=Sing|PronType=Dem	7	acl:relcl	_	_
11	brutta	brutto	ADJ	A	Gender=Fem|Number=Sing	10	amod	_	_
12	#millegiorni	#millegiorni	SYM	SYM	_	4	parataxis:hashtag	_	_
13	per	per	ADP	E	_	14	mark	_	_
14	impoverire	impoverire	VERB	V	VerbForm=Inf	12	acl	_	_
15	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	16	det	_	SpaceAfter=No
16	Italia	Italia	PROPN	SP	_	14	obj	_	SpaceAfter=No
17	.	.	PUNCT	FS	_	12	punct	_	_
18	http://t.co/p77BUUmVRI	http://t.co/p77BUUmVRI	SYM	X	_	4	dep	_	SpaceAfter=\n

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 acl	color:blue
1	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	#lega	#lega	SYM	SYM	_	3	nsubj	_	_
3	contraria	contrario	ADJ	A	Gender=Fem|Number=Sing	0	root	_	_
4	a	a	ADP	E	_	6	case	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	governo	governo	NOUN	S	Gender=Masc|Number=Sing	3	obl	_	_
7	Monti	Monti	PROPN	SP	_	6	nmod	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	3	punct	_	_
9	Vorrei	volere	AUX	VM	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	sapere	sapere	VERB	V	VerbForm=Inf	3	parataxis	_	_
11	chi	chi	PRON	PR	PronType=Rel	13	nsubj	_	_
12	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	_
13	avuto	avere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	ccomp	_	_
14	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	coraggio	coraggio	NOUN	S	Gender=Masc|Number=Sing	13	obj	_	_
16	di	di	ADP	E	_	18	mark	_	_
17	essere	essere	AUX	V	VerbForm=Inf	18	cop	_	_
18	favorevole	favorevole	ADJ	A	Number=Sing	15	acl	_	_
19	a	a	ADP	E	_	21	case	_	_
20	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	lega	lega	PROPN	SP	_	18	obl	_	SpaceAfter=No
22	.	.	PUNCT	FS	_	10	punct	_	_

~~~


