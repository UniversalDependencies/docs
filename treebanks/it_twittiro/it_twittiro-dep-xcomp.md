---
layout: base
title:  'Statistics of xcomp in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `xcomp`

This relation is universal.

261 nodes (1%) are attached to their parents as `xcomp`.

261 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.11111111111111.

The following 11 pairs of parts of speech are connected with `xcomp`: <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (182; 70% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (36; 14% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (26; 10% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (9; 3% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (2; 1% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	@user	@user	SYM	SYM	_	6	vocative:mention	_	SpaceAfter=No
2	:	:	PUNCT	FC	_	1	punct	_	_
3	Mario	mario	PROPN	SP	_	6	nsubj	_	_
4	Monti	Monti	PROPN	SP	_	3	flat:name	_	_
5	non	non	ADV	BN	PronType=Neg	6	advmod	_	_
6	sa	sapere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	impennare	impennare	VERB	V	VerbForm=Inf	6	xcomp	_	_
8	hahaha	hahaha	INTJ	I	_	6	discourse	_	_
9	:D	:D	SYM	SYM	_	6	discourse:emo	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 xcomp	color:blue
1	RT	retweet	NOUN	S	_	4	dep	_	_
2	@user1	@user1	SYM	SYM	_	4	vocative:mention	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	2	punct	_	_
4	@user2	@user2	SYM	SYM	_	0	root	_	_
5	number	number	X	SW	_	4	flat:foreign	_	_
6	one	one	X	SW	_	4	flat:foreign	_	_
7	da	da	ADP	E	_	8	case	_	_
8	Rocco	rocco	PROPN	SP	_	4	nmod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	4	punct	_	_
10	Puoi	potere	AUX	VM	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	morire	morire	VERB	V	VerbForm=Inf	4	parataxis	_	_
12	felice	felice	ADJ	A	Number=Sing	11	xcomp	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 xcomp	color:blue
1	@user	@user	SYM	SYM	_	8	vocative:mention	_	_
2	e	e	CCONJ	CC	_	4	discourse	_	_
3	meno	meno	ADV	B	_	4	advmod	_	_
4	male	male	ADV	B	_	8	advmod	_	_
5	che	che	SCONJ	CS	_	4	fixed	_	_
6	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	scuola	scuola	NOUN	S	Gender=Fem|Number=Sing	8	nsubj	_	_
8	serve	servire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	per	per	ADP	E	_	10	mark	_	_
10	educare	educare	VERB	V	VerbForm=Inf	8	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	8	punct	_	_
12	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	Caovur	Caovur	PROPN	SP	_	14	nsubj	_	_
14	sembra	sembrare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	parataxis	_	_
15	essere	essere	AUX	VA	VerbForm=Inf	16	aux	_	_
16	diventato	diventare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	14	xcomp	_	_
17	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	tribuna	tribuna	NOUN	S	Gender=Fem|Number=Sing	16	xcomp	_	_
19	politica	politico	ADJ	A	Gender=Fem|Number=Sing	18	amod	_	SpaceAfter=No
20	.	.	PUNCT	FS	_	8	punct	_	_
21	#labuonascuola	#labuonascuola	SYM	SYM	_	8	parataxis:hashtag	_	SpaceAfter=\n

~~~


