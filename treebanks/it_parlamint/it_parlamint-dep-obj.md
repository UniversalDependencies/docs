---
layout: base
title:  'Statistics of obj in UD_Italian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParlaMint: Relations: `obj`

This relation is universal.

890 nodes (4%) are attached to their parents as `obj`.

765 instances of `obj` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.52022471910112.

The following 8 pairs of parts of speech are connected with `obj`: <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (701; 79% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt> (180; 20% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 obj	color:blue
1	Quanti	quanto	DET	DQ	Gender=Masc|Number=Plur|PronType=Int	2	det	_	_
2	nuclei	nucleo	NOUN	S	Gender=Masc|Number=Plur	8	obj	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	6	punct	_	_
4	a	a	ADP	E	_	6	case	_	_
5	quel	quello	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	6	det	_	_
6	punto	punto	NOUN	S	Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	6	punct	_	_
8	andremmo	andare	VERB	V	Mood=Cnd|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
9	a	a	ADP	E	_	10	mark	_	_
10	scardinare	scardinare	VERB	V	VerbForm=Inf	8	xcomp	_	SpaceAfter=No
11	?	?	PUNCT	FS	_	8	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obj	color:blue
1	No	no	INTJ	I	Polarity=Neg	7	discourse	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	3	punct	_	_
3	signor	signore	NOUN	S	Gender=Masc|Number=Sing	7	vocative	_	_
4	Presidente	presidente	NOUN	S	Number=Sing	3	compound	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	3	punct	_	_
6	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	7	obj	_	_
7	rimetto	rimettere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
8	a	a	ADP	E	_	10	case	_	_
9	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	relatrice	relatore	NOUN	S	Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obj	color:blue
1	In	in	ADP	E	_	2	case	_	_
2	particolare	particolare	NOUN	S	Gender=Masc|Number=Sing	13	obl	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	per	per	ADP	E	_	5	case	_	_
5	quanto	quanto	PRON	PR	Gender=Masc|Number=Sing|PronType=Rel	13	obl	_	_
6	riguarda	riguardare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl	_	_
7	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	CPR	CPR	PROPN	SP	_	6	obj	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	5	punct	_	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
11	vero	vero	ADJ	A	Gender=Masc|Number=Sing	12	amod	_	_
12	problema	problema	NOUN	S	Gender=Masc|Number=Sing	13	nsubj	_	_
13	concerne	concernere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
14	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	16	det	_	_
15	nuovi	nuovo	ADJ	A	Gender=Masc|Number=Plur	16	amod	_	_
16	ingressi	ingresso	NOUN	S	Gender=Masc|Number=Plur	13	obj	_	SpaceAfter=No
17	,	,	PUNCT	FF	_	16	punct	_	_
18	che	che	PRON	PR	PronType=Rel	20	nsubj	_	_
19	andrebbero	andare	AUX	VA	Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	20	aux	_	_
20	evitati	evitare	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	16	acl	_	_
21	perché	perché	SCONJ	CS	_	23	mark	_	_
22	potrebbero	potere	AUX	VM	Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	23	aux	_	_
23	diffondere	diffondere	VERB	V	VerbForm=Inf	20	advcl	_	_
24	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	contagio	contagio	NOUN	S	Gender=Masc|Number=Sing	23	obj	_	_
26	a	a	ADP	E	_	28	case	_	_
27	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	28	det	_	_
28	interno	interno	NOUN	S	Gender=Masc|Number=Sing	23	obl	_	_
29	di	di	ADP	E	_	31	case	_	_
30	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	31	det	_	_
31	centri	centro	NOUN	S	Gender=Masc|Number=Plur	28	nmod	_	SpaceAfter=No
32	.	.	PUNCT	FS	_	13	punct	_	SpacesAfter=\n

~~~


