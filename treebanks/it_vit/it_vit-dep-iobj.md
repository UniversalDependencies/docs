---
layout: base
title:  'Statistics of iobj in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `iobj`

This relation is universal.

430 nodes (0%) are attached to their parents as `iobj`.

319 instances of `iobj` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45813953488372.

The following 8 pairs of parts of speech are connected with `iobj`: <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-PRON.html">PRON</a></tt> (414; 96% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="it_vit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_vit-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_vit-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 iobj	color:blue
1	Forse	forse	ADV	B	_	5	advmod	_	_
2	non	non	ADV	BN	PronType=Neg	5	advmod	_	_
3	le	le	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	iobj	_	_
4	era	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	aux	_	_
5	piaciuto	piacere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	5	punct	_	_
7	chissà	chissà	ADV	B	_	5	advmod	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 iobj	color:blue
1	"	"	PUNCT	FB	_	4	punct	_	SpaceAfter=No
2	ne	ne	PRON	PC	Clitic=Yes|PronType=Prs	4	iobj	_	_
3	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	sicuro	sicuro	ADJ	A	Number=Sing	0	root	_	SpaceAfter=No
5	?	?	PUNCT	FS	_	4	punct	_	_

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
15	qualunque	qualunque	DET	DI	Number=Sing|PronType=Ind	16	det	_	_
16	punto	punto	NOUN	S	Gender=Masc	10	obj	_	_
17	di	di	ADP	E	_	18	case	_	_
18	riferimento	riferimento	NOUN	S	Gender=Masc|Number=Sing	16	nmod	_	SpaceAfter=No
19	.	.	PUNCT	FS	_	6	punct	_	_

~~~


