---
layout: base
title:  'Statistics of orphan in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `orphan`

This relation is universal.

40 nodes (0%) are attached to their parents as `orphan`.

30 instances of `orphan` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5.

The following 14 pairs of parts of speech are connected with `orphan`: <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (15; 38% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-ADV.html">ADV</a></tt> (5; 13% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (4; 10% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (4; 10% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="it_isdt-pos-SYM.html">SYM</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 orphan	color:blue
1	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	_
2	bimba	bimbo	NOUN	S	Gender=Fem|Number=Sing	5	nsubj	5:nsubj|12:nsubj|20:nsubj:pass	_
3	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	5	expl	5:expl	_
4	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
5	fatta	fare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
6	male	male	ADV	B	_	5	obj	5:obj	_
7	a	a	ADP	E	_	9	case	9:case	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	9:det	_
9	spalla	spalla	NOUN	S	Gender=Fem|Number=Sing	6	obl	6:obl:a	SpaceAfter=No
10	,	,	PUNCT	FF	_	12	punct	12:punct	_
11	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	12:det	_
12	bimbo	bimbo	NOUN	S	Gender=Masc|Number=Sing	5	conj	5:conj	_
13	a	a	ADP	E	_	15	case	15:case	_
14	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	15:det	_
15	manina	manina	NOUN	S	Gender=Fem|Number=Sing	12	orphan	12.1:obl:a	SpaceAfter=No
16	,	,	PUNCT	FF	_	20	punct	20:punct	_
17	ma	ma	CCONJ	CC	_	20	cc	20:cc	_
18	sono	essere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	20	aux:pass	20:aux:pass	_
19	stati	essere	AUX	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	20	cop	20:cop	_
20	eroici	eroico	ADJ	A	Gender=Masc|Number=Plur	5	conj	5:conj:ma	_
21	un’	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	23	det	23:det	SpaceAfter=No
22	intera	intero	ADJ	A	Gender=Fem|Number=Sing	23	amod	23:amod	_
23	notte	notte	NOUN	S	Gender=Fem|Number=Sing	20	obl	20:obl	_
24	a	a	ADP	E	_	26	case	26:case	_
25	1.400	1.400	NUM	N	NumType=Card	26	nummod	26:nummod	_
26	metri	metro	NOUN	S	Gender=Masc|Number=Plur	20	obl	20:obl:a	_
27	con	con	ADP	E	_	29	case	29:case	_
28	meno	meno	ADV	B	_	29	advmod	29:advmod	_
29	5	5	NUM	N	NumType=Card	20	nummod	20:nummod	_
30	di	di	ADP	E	_	31	case	31:case	_
31	temperatura	temperatura	NOUN	S	Gender=Fem|Number=Sing	29	nmod	29:nmod:di	SpaceAfter=No
32	.	.	PUNCT	FS	_	5	punct	5:punct	_

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
18	,	,	PUNCT	FF	_	21	punct	18.1:punct	_
19	complessivamente	complessivamente	ADV	B	_	21	orphan	18.1:advmod	_
20	1,3	1,3	NUM	N	NumType=Card	21	nummod	21:nummod	_
21	miliardi	miliardo	NOUN	S	Gender=Masc|Number=Plur	8	conj	18.1:obj	_
22	di	di	ADP	E	_	23	case	23:case	_
23	passeggeri	passeggero	NOUN	S	Gender=Masc|Number=Plur	21	nmod	21:nmod:di	_
24	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	25	det	25:det	SpaceAfter=No
25	anno	anno	NOUN	S	Gender=Masc|Number=Sing	21	orphan	18.1:obl	SpaceAfter=No
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
11	e	e	CCONJ	CC	_	17	cc	11.1:cc	_
12	a	a	ADP	E	_	14	case	14:case	_
13	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	14:det	_
14	Cecenia	Cecenia	PROPN	SP	_	17	orphan	11.1:obl:a	_
15	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	17:det	_
16	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	17	det:poss	17:det:poss	_
17	libertà	libertà	NOUN	S	Gender=Fem	5	conj	11.1:obj	SpaceAfter=No
18	"	"	PUNCT	FB	_	5	punct	5:punct	SpaceAfter=No
19	?	?	PUNCT	FS	_	3	punct	3:punct	_

~~~


