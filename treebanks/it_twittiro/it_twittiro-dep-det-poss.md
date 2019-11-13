---
layout: base
title:  'Statistics of det:poss in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="it_twittiro-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_twittiro-dep-det-predet.html">det:predet</a></tt>.

103 nodes (0%) are attached to their parents as `det:poss`.

99 instances of `det:poss` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.0873786407767.

The following 6 pairs of parts of speech are connected with `det:poss`: <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (98; 95% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_twittiro-pos-X.html">X</a></tt>-<tt><a href="it_twittiro-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:poss	color:blue
1	desidero	desiderare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	esprimere	esprimere	VERB	V	VerbForm=Inf	1	xcomp	_	_
3	tutto	tutto	DET	DI	PronType=Ind	6	det:predet	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	mio	mio	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	sostegno	sostegno	NOUN	S	Gender=Masc|Number=Sing	2	obj	_	_
7	a	a	ADP	E	_	9	case	_	_
8	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	governo	governo	NOUN	S	Gender=Masc|Number=Sing	6	nmod	_	_
10	Monti	Monti	PROPN	SP	_	9	nmod	_	_
11	Python	Python	PROPN	SP	_	10	flat:name	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det:poss	color:blue
1	#labuonascuola	#labuonascuola	SYM	SYM	_	2	parataxis:hashtag	_	_
2	visto	vistare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ke	che	DET	DQ	PronType=Int	4	det	_	_
4	comunicazione	comunicazione	NOUN	S	Gender=Fem|Number=Sing	2	obj	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	nostro	nostro	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	7	det:poss	_	_
7	PdC	PdC	PROPN	SP	_	2	obl	_	SpaceAfter=No
8	?	?	PUNCT	FS	_	2	punct	_	_
9	parlando	parlare	VERB	V	VerbForm=Ger	14	advcl	_	_
10	di	di	ADP	E	_	12	case	_	_
11	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	precariato	precariato	NOUN	S	Gender=Masc|Number=Sing	9	obl	_	_
13	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux	_	_
14	spostato	spostare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	parataxis	_	_
15	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	16	det	_	SpaceAfter=No
16	asse	asse	NOUN	S	Gender=Masc|Number=Sing	14	obj	_	_
17	di	di	ADP	E	_	19	case	_	_
18	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	questione	questione	NOUN	S	Gender=Fem|Number=Sing	16	nmod	_	_
20	scuola	scuola	NOUN	S	Gender=Fem|Number=Sing	19	compound	_	_
21	..	..	PUNCT	FS	_	19	punct	_	_
22	di	di	ADP	E	_	23	case	_	_
23	cui	cui	PRON	PR	PronType=Rel	26	obl	_	_
24	nn	non	ADV	BN	PronType=Neg	26	advmod	_	_
25	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	26	expl:impers	_	_
26	parla	parlare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	acl:relcl	_	SpaceAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det:poss	color:blue
1	@user	@user	SYM	SYM	_	7	vocative:mention	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	mio	mio	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	4	det:poss	_	_
4	#primogiornodiscuola	#primogiornodiscuola	SYM	SYM	_	7	nsubj	_	_
5	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	a	a	ADP	E	_	7	case	_	_
7	casa	casa	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
8	grazie	grazie	NOUN	S	_	11	case	_	_
9	a	a	ADP	E	_	8	fixed	_	_
10	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	11	det	_	_
11	tagli	taglio	NOUN	S	Gender=Masc|Number=Plur	7	obl	_	_
12	di	di	ADP	E	_	14	case	_	_
13	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	riforma	riforma	NOUN	S	Gender=Fem|Number=Sing	11	nmod	_	_
15	Gelmini	Gelmini	PROPN	SP	_	14	nmod	_	_
16	#labuonascuola	#labuonascuola	SYM	SYM	_	7	parataxis:hashtag	_	_
17	#assunzioneprecariGaE	#assunzioneprecariGaE	SYM	SYM	_	7	parataxis:hashtag	_	SpaceAfter=\n

~~~


