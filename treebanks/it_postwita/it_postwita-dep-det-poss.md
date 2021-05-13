---
layout: base
title:  'Statistics of det:poss in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_postwita-dep-det-predet.html">det:predet</a></tt>.

593 nodes (0%) are attached to their parents as `det:poss`.

559 instances of `det:poss` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10286677908938.

The following 9 pairs of parts of speech are connected with `det:poss`: <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (562; 95% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (15; 3% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det:poss	color:blue
1	@user	@user	SYM	SYM	_	5	vocative:mention	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	tuo	tuo	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	4	det:poss	_	_
4	moroso	moroso	NOUN	S	Gender=Masc|Number=Sing	5	nsubj	_	_
5	sa	sapere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	che	che	SCONJ	CS	_	9	mark	_	_
7	oggi	oggi	ADV	B	_	9	advmod	_	_
8	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	9	expl	_	_
9	tornava	tornare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	ccomp	_	_
10	a	a	ADP	E	_	11	case	_	_
11	scuola	scuola	NOUN	S	Gender=Fem|Number=Sing	9	obl	_	_
12	?!	?!	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det:poss	color:blue
1	#OMMHSC	#OMMHSC	SYM	SYM	_	6	parataxis:hashtag	_	_
2	Oh	oh	INTJ	I	_	6	discourse	_	_
3	mio	mio	DET	AP	Poss=Yes|PronType=Prs	4	det:poss	_	_
4	Dio	Dio	PROPN	SP	_	6	discourse	_	_
5	Che	che	DET	DE	PronType=Exc	6	det	_	_
6	gol	gol	NOUN	S	Gender=Masc	0	root	_	_
7	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	fatto	fare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	acl	_	_
9	#Belhanda	#Belhanda	SYM	SYM	_	8	nsubj	_	_
10	😲😲😱😲😱	😲😲😱😲😱	SYM	SYM	_	6	discourse:emo	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 det:poss	color:blue
1	#Grillo	#Grillo	SYM	SYM	_	9	parataxis:hashtag	_	_
2	a	a	ADP	E	_	4	case	_	_
3	5	5	NUM	N	NumType=Card	4	nummod	_	_
4	Stelle	Stelle	PROPN	SP	_	1	obl	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	1	punct	_	_
6	in	in	ADP	E	_	8	case	_	_
7	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	#Sondaggi	#Sondaggi	SYM	SYM	_	9	obl	_	_
9	schizza	schizzare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	a	a	ADP	E	_	11	case	_	_
11	7,2	7,2	NUM	N	NumType=Card	9	nummod	_	_
12	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
13	suo	suo	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	14	det:poss	_	_
14	#Movimento	#Movimento	SYM	SYM	_	9	nsubj	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	9	punct	_	_
16	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	Trionfo	trionfo	NOUN	S	Gender=Masc|Number=Sing	9	parataxis	_	_
18	di	di	ADP	E	_	21	case	_	_
19	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
20	Anti	anti	ADJ	A	_	21	amod	_	_
21	#Politica	#Politica	SYM	SYM	_	17	nmod	_	SpaceAfter=No
22	.	.	PUNCT	FS	_	17	punct	_	_

~~~


