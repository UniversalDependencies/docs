---
layout: base
title:  'Statistics of orphan in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `orphan`

This relation is universal.

42 nodes (0%) are attached to their parents as `orphan`.

32 instances of `orphan` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.57142857142857.

The following 15 pairs of parts of speech are connected with `orphan`: <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (16; 38% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-ADV.html">ADV</a></tt> (5; 12% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (4; 10% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (4; 10% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="it_isdt-pos-SYM.html">SYM</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 18 orphan	color:blue
1	Se	se	SCONJ	CS	_	10	mark	10:mark	_
2	uno	uno	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	10	nsubj	10:nsubj|13:nsubj	_
3	o	o	CCONJ	CC	_	4	cc	4:cc	_
4	più	più	PRON	PI	PronType=Ind	2	conj	2:conj:o|10:nsubj|13:nsubj	_
5	di	di	ADP	E	_	6	case	6:case	_
6	essi	esso	PRON	PE	Gender=Masc|Number=Plur|Person=3|PronType=Prs	4	nmod	4:nmod:di	_
7	sono	essere	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	cop	10:cop	_
8	da	da	ADP	E	_	10	case	10:case	_
9	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	10:det	_
10	parte	parte	NOUN	S	Gender=Fem|Number=Sing	24	advcl	24:advcl:da	SpaceAfter=No
11	,	,	PUNCT	FF	_	13	punct	13:punct	_
12	e	e	CCONJ	CC	_	13	cc	13:cc	_
13	uno	uno	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	10	conj	10:conj:e|24:advcl:se	_
14	o	o	CCONJ	CC	_	15	cc	15:cc	_
15	più	più	PRON	PI	PronType=Ind	13	conj	13:conj:o	_
16	da	da	ADP	E	_	18	case	18:case	_
17	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	18:det	_
18	parte	parte	NOUN	S	Gender=Fem|Number=Sing	10	orphan	10:orphan	_
19	opposta	opposto	ADJ	A	Gender=Fem|Number=Sing	18	amod	18:amod	SpaceAfter=No
20	,	,	PUNCT	FF	_	10	punct	10:punct	_
21	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	22:det	_
22	muro	muro	NOUN	S	Gender=Masc|Number=Sing	24	nsubj:pass	24:nsubj:pass|25:nsubj	_
23	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	aux:pass	24:aux:pass	_
24	reputato	reputare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
25	comune	comune	ADJ	A	Number=Sing	24	xcomp	24:xcomp	SpaceAfter=No
26	:	:	PUNCT	FC	_	24	punct	24:punct	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 orphan	color:blue
1	In	in	ADP	E	_	3	case	3:case	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	3:det	_
3	2005	2005	NUM	N	NumType=Card	8	obl	8:obl:in	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	3:punct	_
5	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	6:det	_
6	Linea	Linea	PROPN	SP	_	8	nsubj	8:nsubj|21:nsubj	_
7	Yamanote	Yamanote	PROPN	SP	_	6	nmod	6:nmod	_
8	trasportava	trasportare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	0:root	_
9	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	10:det	_
10	media	media	NOUN	S	Gender=Fem|Number=Sing	8	obj	8:obj	_
11	di	di	ADP	E	_	13	case	13:case	_
12	3,55	3,55	NUM	N	NumType=Card	13	nummod	13:nummod	_
13	milioni	milione	NOUN	S	Gender=Masc|Number=Plur	10	nmod	10:nmod:di	_
14	di	di	ADP	E	_	15	case	15:case	_
15	passeggeri	passeggero	NOUN	S	Gender=Masc|Number=Plur	13	nmod	13:nmod:di	_
16	ogni	ogni	DET	DI	Number=Sing|PronType=Ind	17	det	17:det	_
17	giorno	giorno	NOUN	S	Gender=Masc|Number=Sing	8	obl	8:obl	SpaceAfter=No
18	,	,	PUNCT	FF	_	21	punct	21:punct	_
19	complessivamente	complessivamente	ADV	B	_	21	orphan	21:orphan	_
20	1,3	1,3	NUM	N	NumType=Card	21	nummod	21:nummod	_
21	miliardi	miliardo	NOUN	S	Gender=Masc|Number=Plur	8	conj	8:conj	_
22	di	di	ADP	E	_	23	case	23:case	_
23	passeggeri	passeggero	NOUN	S	Gender=Masc|Number=Plur	21	nmod	21:nmod:di	_
24	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	25	det	25:det	SpaceAfter=No
25	anno	anno	NOUN	S	Gender=Masc|Number=Sing	21	orphan	21:orphan	SpaceAfter=No
26	.	.	PUNCT	FS	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 orphan	color:blue
1	Chi	chi	PRON	PQ	PronType=Int	3	nsubj	3:nsubj	_
2	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	3:aux	_
3	detto	dire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
4	"	"	PUNCT	FB	_	5	punct	5:punct	SpaceAfter=No
5	lasciamo	lasciare	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	ccomp	3:ccomp	_
6	a	a	ADP	E	_	7	case	7:case	_
7	Yeltsin	Yeltsin	PROPN	SP	_	5	obl	5:obl:a	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	10:det	_
9	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	10	det:poss	10:det:poss	_
10	vodka	vodka	NOUN	S	Gender=Fem	5	obj	5:obj	_
11	e	e	CCONJ	CC	_	17	cc	17:cc	_
12	a	a	ADP	E	_	14	case	14:case	_
13	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	14:det	_
14	Cecenia	Cecenia	PROPN	SP	_	17	orphan	17:orphan	_
15	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	17:det	_
16	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	17	det:poss	17:det:poss	_
17	libertà	libertà	NOUN	S	Gender=Fem	5	conj	3:ccomp|5:conj:e	SpaceAfter=No
18	"	"	PUNCT	FB	_	5	punct	5:punct	SpaceAfter=No
19	?	?	PUNCT	FS	_	3	punct	3:punct	_

~~~


