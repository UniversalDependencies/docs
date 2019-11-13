---
layout: base
title:  'Statistics of iobj in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `iobj`

This relation is universal.

181 nodes (0%) are attached to their parents as `iobj`.

141 instances of `iobj` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.60220994475138.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-PRON.html">PRON</a></tt> (170; 94% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-ADP.html">ADP</a></tt> (6; 3% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 iobj	color:blue
1	"	"	PUNCT	FB	_	11	punct	_	SpaceAfter=No
2	no	no	INTJ	I	Polarity=Neg	11	discourse	_	_
3	-	-	PUNCT	FC	_	6	punct	_	_
4	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	6	iobj	_	_
5	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	risposto	rispondere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	11	parataxis	_	_
7	-	-	PUNCT	FC	_	6	punct	_	SpaceAfter=No
8	,	,	PUNCT	FF	_	11	punct	_	_
9	a	a	ADP	E	_	10	case	_	_
10	me	me	PRON	PE	Number=Sing|Person=3|PronType=Prs	11	obl	_	_
11	piace	piacere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
12	stare	stare	VERB	V	VerbForm=Inf	11	ccomp	_	_
13	in	in	ADP	E	_	14	case	_	_
14	mezzo	mezzo	NOUN	S	Gender=Masc|Number=Sing	12	obl	_	_
15	a	a	ADP	E	_	17	case	_	_
16	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	gente	gente	NOUN	S	Gender=Fem|Number=Sing	14	nmod	_	SpaceAfter=No
18	.	.	PUNCT	FS	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 iobj	color:blue
1	Buttare	buttare	VERB	V	VerbForm=Inf	6	csubj	_	_
2	a	a	ADP	E	_	3	case	_	_
3	mare	mare	NOUN	S	Gender=Masc|Number=Sing	1	obl	_	_
4	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	legge	legge	NOUN	S	Gender=Fem|Number=Sing	1	obj	_	_
6	significherebbe	significare	VERB	V	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	6	punct	_	_
8	invece	invece	ADV	B	_	6	advmod	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	6	punct	_	_
10	togliere	togliere	VERB	V	VerbForm=Inf	6	ccomp	_	_
11	ad	a	ADP	E	_	10	iobj	_	_
12	amministratori	amministratore	NOUN	S	Gender=Masc|Number=Plur	11	nmod	_	_
13	e	e	CCONJ	CC	_	14	cc	_	_
14	imprese	impresa	NOUN	S	Gender=Fem|Number=Plur	12	conj	_	_
15	qualunque	qualunque	DET	DI	PronType=Ind	16	det	_	_
16	punto	punto	NOUN	S	Gender=Masc	10	obj	_	_
17	di	di	ADP	E	_	18	case	_	_
18	riferimento	riferimento	NOUN	S	Gender=Masc|Number=Sing	16	nmod	_	SpaceAfter=No
19	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 18 iobj	color:blue
1	Entrato	entrare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	advcl	_	_
2	in	in	ADP	E	_	3	case	_	_
3	sala	sala	NOUN	S	Gender=Fem|Number=Sing	1	obl	_	_
4	operatoria	operatorio	ADJ	A	Gender=Fem|Number=Sing	3	amod	_	_
5	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	avuto	avere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	arresto	arresto	NOUN	S	Gender=Masc|Number=Sing	6	obj	_	_
9	cardiaco	cardiaco	ADJ	A	Gender=Masc|Number=Sing	8	amod	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	8	punct	_	_
11	durato	durare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	8	acl	_	_
12	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	quarto	quarto	ADJ	NO	NumType=Ord	11	amod	_	_
14	d'	di	ADP	E	_	15	case	_	SpaceAfter=No
15	ora	ora	NOUN	S	Gender=Fem|Number=Sing	13	obl	_	SpaceAfter=No
16	,	,	PUNCT	FC	_	8	punct	_	_
17	che	che	PRON	PR	PronType=Rel	21	nsubj	_	_
18	gli	gli	PRON	PC	Clitic=Yes|Gender=Fem|Person=3|PronType=Prs	21	iobj	_	_
19	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	aux	_	_
20	stato	essere	AUX	VA	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	21	cop	_	_
21	fatale	fatale	ADJ	A	Number=Sing	8	acl:relcl	_	SpaceAfter=No
22	.	.	PUNCT	FS	_	6	punct	_	_

~~~


