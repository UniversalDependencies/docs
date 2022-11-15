---
layout: base
title:  'Statistics of parataxis:discourse in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `parataxis:discourse`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-parataxis.html">parataxis</a></tt>.
There are also 5 other language-specific subtypes of `parataxis`: <tt><a href="it_postwita-dep-parataxis-appos.html">parataxis:appos</a></tt>, <tt><a href="it_postwita-dep-parataxis-hashtag.html">parataxis:hashtag</a></tt>, <tt><a href="it_postwita-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="it_postwita-dep-parataxis-nsubj.html">parataxis:nsubj</a></tt>, <tt><a href="it_postwita-dep-parataxis-obj.html">parataxis:obj</a></tt>.

24 nodes (0%) are attached to their parents as `parataxis:discourse`.

22 instances of `parataxis:discourse` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.29166666666667.

The following 6 pairs of parts of speech are connected with `parataxis:discourse`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (18; 75% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 parataxis:discourse	color:blue
1	@user	@user	SYM	SYM	_	7	vocative	_	_
2	SENTI	sentire	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	7	parataxis:discourse	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	MONDANI	mondano	NOUN	S	Gender=Masc|Number=Plur	7	dislocated	_	_
5	LO	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
6	POSSONO	potere	AUX	VM	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	DIRE	dire	VERB	V	VerbForm=Inf	0	root	_	_
8	SOLO	solo	ADV	B	_	7	advmod	_	_
9	GLI	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	10	det	_	_
10	SHADOWHUNTERS	SHADOWHUNTERS	PROPN	SP	_	7	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	7	punct	_	_
12	OK	ok	INTJ	I	_	7	discourse	_	SpaceAfter=No
13	?	?	PUNCT	FS	_	12	punct	_	_
14	OK	ok	INTJ	I	_	7	discourse	_	_
15	uu	uu	INTJ	I	_	7	discourse	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 15 parataxis:discourse	color:blue
1	Mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	2	iobj	_	_
2	sembra	sembrare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ingiusto	ingiusto	ADJ	A	Gender=Masc|Number=Sing	2	xcomp	_	_
4	criticare	criticare	VERB	V	VerbForm=Inf	2	csubj	_	_
5	@user	@user	SYM	SYM	_	4	obj	_	_
6	per	per	ADP	E	_	9	case	_	_
7	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	9	det	_	_
8	sue	suo	DET	AP	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	9	det:poss	_	_
9	battute	battuta	NOUN	S	Gender=Fem|Number=Plur	4	obl	_	_
10	su	su	ADP	E	_	12	case	_	_
11	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	Juve	Juve	PROPN	SP	_	9	nmod	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	12	punct	_	_
14	Voglio	volere	AUX	VM	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	15	aux	_	_
15	dire	dire	VERB	V	VerbForm=Inf	18	parataxis:discourse	_	SpaceAfter=No
16	,	,	PUNCT	FF	_	15	punct	_	_
17	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	cop	_	_
18	banale	banale	ADJ	A	Number=Sing	2	parataxis	_	_
19	anche	anche	ADV	B	_	21	advmod	_	_
20	quando	quando	SCONJ	CS	_	21	mark	_	_
21	parla	parlare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	advcl	_	_
22	d'	di	ADP	E	_	23	case	_	SpaceAfter=No
23	altro	altro	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	21	obl	_	SpaceAfter=No
24	,	,	PUNCT	FF	_	25	punct	_	_
25	eh	eh	INTJ	I	_	18	discourse	_	SpaceAfter=No
26	.	.	PUNCT	FS	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 parataxis:discourse	color:blue
1	Fantastico	fantastico	ADJ	A	Gender=Masc|Number=Sing	7	parataxis:discourse	_	SpaceAfter=No
2	:	:	PUNCT	FC	_	1	punct	_	_
3	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	posto	posto	NOUN	S	Gender=Masc|Number=Sing	7	nsubj	_	_
5	fisso	fisso	ADJ	A	Gender=Masc|Number=Sing	4	amod	_	_
6	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	noioso	noioso	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
8	!	!	PUNCT	FS	_	7	punct	_	_
9	(	(	PUNCT	FB	_	10	punct	_	SpaceAfter=No
10	Mario	mario	PROPN	SP	_	7	parataxis	_	_
11	Monti	Monti	PROPN	SP	_	10	flat:name	_	SpaceAfter=No
12	)	)	PUNCT	FB	_	10	punct	_	_
13	Questa	questo	PRON	PD	Gender=Fem|Number=Sing|PronType=Dem	16	nsubj	_	_
14	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	cop	_	_
15	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	migliore	migliore	ADJ	A	Number=Sing	7	parataxis	_	_
17	di	di	ADP	E	_	20	case	_	_
18	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
19	21°	21°	ADJ	NO	NumType=Ord	20	amod	_	_
20	secolo	secolo	NOUN	S	Gender=Masc|Number=Sing	16	obl	_	_
21	e	e	CCONJ	CC	_	22	cc	_	_
22	fa	fare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	conj	_	_
23	capire	capire	VERB	V	VerbForm=Inf	22	ccomp	_	_
24	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
25	nostro	nostro	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	26	det:poss	_	_
26	Capo	Capo	PROPN	SP	_	31	nsubj	_	_
27	di	di	ADP	E	_	29	case	_	_
28	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	29	det	_	_
29	Governo	governo	NOUN	S	Gender=Masc|Number=Sing	26	nmod	_	_
30	che	che	DET	DQ	PronType=Int	31	det	_	_
31	elemento	elemento	NOUN	S	Gender=Masc|Number=Sing	23	ccomp	_	_
32	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	31	cop	_	_

~~~


