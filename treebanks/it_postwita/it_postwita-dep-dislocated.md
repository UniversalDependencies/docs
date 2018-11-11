---
layout: base
title:  'Statistics of dislocated in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `dislocated`

This relation is universal.

133 nodes (0%) are attached to their parents as `dislocated`.

87 instances of `dislocated` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.08270676691729.

The following 15 pairs of parts of speech are connected with `dislocated`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (75; 56% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (18; 14% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (14; 11% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (12; 9% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-DET.html">DET</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PUNCT.html">PUNCT</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 dislocated	color:blue
1	@user	@user	SYM	SYM	_	8	vocative:mention	_	_
2	ok	ok	INTJ	I	_	8	discourse	_	_
3	grazie	grazie	INTJ	I	_	8	discourse	_	_
4	mille	mille	NUM	N	NumType=Card	3	nummod	_	_
5	c:	c:	SYM	SYM	_	8	discourse:emo	_	_
6	te	te	PRON	PC	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	8	expl	_	_
7	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
8	do	dare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
9	dopo	dopo	ADV	B	_	8	advmod	_	_
10	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	foto	foto	NOUN	S	Gender=Fem	8	dislocated	_	SpaceAfter=No
12	?	?	PUNCT	FS	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 dislocated	color:blue
1	"	"	PUNCT	FB	_	4	punct	_	_
2	#Grillo	#Grillo	SYM	SYM	_	4	dislocated	_	_
3	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	obj	_	_
4	voto	votare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	solo	solo	ADV	B	_	7	advmod	_	_
6	questa	questo	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	7	det	_	_
7	volta	volta	NOUN	S	Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
8	,	,	PUNCT	FF	_	4	punct	_	_
9	tanto	tanto	ADV	B	_	12	mark	_	_
10	non	non	ADV	BN	PronType=Neg	12	advmod	_	_
11	può	potere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
12	fare	fare	VERB	V	VerbForm=Inf	4	advcl	_	_
13	più	più	ADV	B	_	12	advmod	_	_
14	di	di	ADP	E	_	16	case	_	_
15	tanti	tanto	DET	DI	PronType=Ind	16	det	_	_
16	danni	danno	NOUN	S	Gender=Masc|Number=Plur	13	obl	_	SpaceAfter=No
17	.	.	PUNCT	FS	_	4	punct	_	_
18	"	"	PUNCT	FB	_	4	punct	_	_
19	#erroredrammatico	#erroredrammatico	SYM	SYM	_	4	parataxis:hashtag	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 dislocated	color:blue
1	Ma	ma	CCONJ	CC	_	6	discourse	_	_
2	Mario	mario	PROPN	SP	_	6	nsubj	_	_
3	Monti	Monti	PROPN	SP	_	2	flat:name	_	_
4	ce	ce	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	6	expl	_	_
5	l'	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obj	_	SpaceAfter=No
6	ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	tuìtter	tuìtter	PROPN	SP	_	6	dislocated	_	SpaceAfter=No
8	?	?	PUNCT	FS	_	6	punct	_	_

~~~


