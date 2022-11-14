---
layout: base
title:  'Statistics of discourse in UD_Italian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParlaMint: Relations: `discourse`

This relation is universal.

4 nodes (0%) are attached to their parents as `discourse`.

3 instances of `discourse` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 4 pairs of parts of speech are connected with `discourse`: <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt> (1; 25% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-INTJ.html">INTJ</a></tt> (1; 25% instances), <tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="it_parlamint-pos-INTJ.html">INTJ</a></tt> (1; 25% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-INTJ.html">INTJ</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 discourse	color:blue
1	Deve	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
2	essere	essere	AUX	VA	VerbForm=Inf	3	aux	_	_
3	ristabilita	ristabilire	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	legalità	legalità	NOUN	S	Gender=Fem	3	nsubj	_	_
6	e	e	CCONJ	CC	_	11	cc	_	_
7	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
8	pene	pena	NOUN	S	Gender=Fem|Number=Plur	11	nsubj	_	_
9	devono	dovere	AUX	VM	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	_
10	essere	essere	AUX	V	VerbForm=Inf	11	cop	_	_
11	esemplari	esemplare	ADJ	A	Number=Plur	3	conj	_	SpaceAfter=No
12	,	,	PUNCT	FF	_	11	punct	_	_
13	altro	altro	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	11	discourse	_	_
14	che	che	ADP	E	_	15	case	_	_
15	scarcerazioni	scarcerazione	NOUN	S	Gender=Fem|Number=Plur	13	obl	_	SpaceAfter=No
16	!	!	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Sì	sì	INTJ	I	Polarity=Pos	3	discourse	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	signor	signore	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
4	Presidente	presidente	NOUN	S	Number=Sing	3	compound	_	SpaceAfter=No
5	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 discourse	color:blue
1	Le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	2	det	_	_
2	comunità	comunità	NOUN	S	Gender=Fem	8	nsubj	_	_
3	famiglia	famiglia	NOUN	S	Gender=Fem|Number=Sing	2	compound	_	_
4	sono	essere	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
5	-	-	PUNCT	FB	_	6	punct	_	_
6	ahimè	ahimè	INTJ	I	_	8	discourse	_	_
7	-	-	PUNCT	FB	_	6	punct	_	_
8	quelli	quello	PRON	PD	Gender=Masc|Number=Plur|PronType=Dem	0	root	_	_
9	che	che	PRON	PR	PronType=Rel	20	nsubj	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	9	punct	_	_
11	con	con	ADP	E	_	13	case	_	_
12	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	parola	parola	NOUN	S	Gender=Fem|Number=Sing	20	obl	_	_
14	oggi	oggi	ADV	B	_	15	advmod	_	_
15	desueta	desueto	ADJ	A	Gender=Fem|Number=Sing	13	amod	_	SpaceAfter=No
16	,	,	PUNCT	FF	_	13	punct	_	_
17	erano	essere	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	20	cop	_	_
18	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	20	det	_	_
19	«	«	PUNCT	FB	_	20	punct	_	SpaceAfter=No
20	orfanotrofi	orfanotrofio	NOUN	S	Gender=Masc|Number=Plur	8	acl	_	SpaceAfter=No
21	»	»	PUNCT	FB	_	20	punct	_	_
22	di	di	ADP	E	_	24	case	_	_
23	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	24	det	_	_
24	volta	volta	NOUN	S	Gender=Fem|Number=Sing	20	nmod	_	SpaceAfter=No
25	,	,	PUNCT	FF	_	20	punct	_	_
26	gestiti	gestire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	20	acl	_	_
27	da	da	ADP	E	_	28	case	_	_
28	laici	laico	NOUN	S	Gender=Masc|Number=Plur	26	obl	_	_
29	o	o	CCONJ	CC	_	31	cc	_	_
30	da	da	ADP	E	_	31	case	_	_
31	organizzazioni	organizzazione	NOUN	S	Gender=Fem|Number=Plur	28	conj	_	_
32	religiose	religioso	ADJ	A	Gender=Fem|Number=Plur	31	amod	_	SpaceAfter=No
33	.	.	PUNCT	FS	_	8	punct	_	_

~~~


