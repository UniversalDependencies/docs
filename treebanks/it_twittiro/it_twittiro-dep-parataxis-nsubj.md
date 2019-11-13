---
layout: base
title:  'Statistics of parataxis:nsubj in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `parataxis:nsubj`

This relation is a language-specific subtype of <tt><a href="it_twittiro-dep-parataxis.html">parataxis</a></tt>.
There are also 5 other language-specific subtypes of `parataxis`: <tt><a href="it_twittiro-dep-parataxis-appos.html">parataxis:appos</a></tt>, <tt><a href="it_twittiro-dep-parataxis-discourse.html">parataxis:discourse</a></tt>, <tt><a href="it_twittiro-dep-parataxis-hashtag.html">parataxis:hashtag</a></tt>, <tt><a href="it_twittiro-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="it_twittiro-dep-parataxis-obj.html">parataxis:obj</a></tt>.

6 nodes (0%) are attached to their parents as `parataxis:nsubj`.

4 instances of `parataxis:nsubj` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.16666666666667.

The following 5 pairs of parts of speech are connected with `parataxis:nsubj`: <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (2; 33% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt> (1; 17% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (1; 17% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (1; 17% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 parataxis:nsubj	color:blue
1	NOI	noi	PRON	PE	Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	TIREREMO	tirare	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin	0	root	_	_
3	DIRITTO	diritto	ADV	B	_	2	advmod	_	_
4	..	..	PUNCT	FS	_	8	punct	_	_
5	chi	chi	PRON	PR	PronType=Rel	8	nsubj	_	_
6	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
7	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	detto	dire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	parataxis	_	SpaceAfter=No
9	?	?	PUNCT	FS	_	8	punct	_	_
10	Mussolini	Mussolini	PROPN	SP	_	8	parataxis:nsubj	_	SpaceAfter=No
11	?	?	PUNCT	FS	_	10	punct	_	_
12	No	No	INTJ	I	_	10	discourse	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	12	punct	_	_
14	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	governo	governo	NOUN	S	Gender=Masc|Number=Sing	10	parataxis	_	_
16	Monti	Monti	PROPN	SP	_	15	nmod	_	SpaceAfter=No
17	.	.	PUNCT	FS	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 parataxis:nsubj	color:blue
1	Pakistano	pakistano	PROPN	SP	_	2	nsubj	_	_
2	aggredisce	aggredire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	moglie	moglie	NOUN	S	Gender=Fem|Number=Sing	2	obj	_	_
5	a	a	ADP	E	_	6	case	_	_
6	bastonate	bastonata	NOUN	S	Gender=Fem|Number=Plur	2	obl	_	_
7	perché	perché	SCONJ	CS	_	10	mark	_	_
8	“	“	PUNCT	FB	_	10	punct	_	SpaceAfter=No
9	troppo	troppo	ADV	B	_	10	advmod	_	_
10	occidentale	occidentale	ADJ	A	Number=Sing	2	advcl	_	SpaceAfter=No
11	“	“	PUNCT	FB	_	10	punct	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	10	punct	_	_
13	Lui	egli	PRON	PE	Number=Sing|Person=3|PronType=Prs	10	parataxis:nsubj	_	SpaceAfter=No
14	,	,	PUNCT	FF	_	15	punct	_	_
15	dico	dire	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	13	parataxis:discourse	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	15	punct	_	_
17	[	[	PUNCT	FB	_	18	punct	_	SpaceAfter=No
18	@user	@user	SYM	SYM	_	2	vocative:mention	_	SpaceAfter=No
19	]	]	PUNCT	FB	_	18	punct	_	SpaceAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 parataxis:nsubj	color:blue
1	#Albertazzi	#Albertazzi	SYM	SYM	_	3	nsubj	_	_
2	subito	subito	ADV	B	_	3	advmod	_	_
3	carico	carico	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
4	a	a	ADP	E	_	5	case	_	_
5	@user	@user	SYM	SYM	_	3	obl	_	SpaceAfter=No
6	:	:	PUNCT	FC	_	5	punct	_	_
7	Mario	mario	PROPN	SP	_	11	parataxis:nsubj	_	_
8	#Monti	#Monti	SYM	SYM	_	7	flat:name	_	SpaceAfter=No
9	?	?	PUNCT	FS	_	7	punct	_	_
10	E'	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
11	moscio	moscio	ADJ	A	Gender=Masc|Number=Sing	3	parataxis	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	11	punct	_	_
13	Come	Come	ADP	E	_	14	case	_	_
14	#Montolivo	#Montolivo	SYM	SYM	_	11	parataxis:hashtag	_	SpaceAfter=No
15	,	,	PUNCT	FF	_	17	punct	_	_
16	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	centrocampista	centrocampista	NOUN	S	Gender=Masc|Number=Sing	14	appos	_	_
18	di	di	ADP	E	_	20	case	_	_
19	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	_
20	#Fiorentina	#Fiorentina	SYM	SYM	_	17	nmod	_	_

~~~


