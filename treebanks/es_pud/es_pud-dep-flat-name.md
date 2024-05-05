---
layout: base
title:  'Statistics of flat:name in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-flat.html">flat</a></tt>.

200 nodes (1%) are attached to their parents as `flat:name`.

200 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14.

The following 8 pairs of parts of speech are connected with `flat:name`: <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (173; 87% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (14; 7% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (7; 4% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-DET.html">DET</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat:name	color:blue
1	Durán	Durán	PROPN	NNP	Gender=Masc|Number=Sing	2	nsubj	_	_
2	ejerce	ejercer	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	de	de	ADP	IN	_	4	case	_	_
4	portavoz	portavoz	NOUN	NN	Gender=Masc|Number=Sing	2	obl	_	_
5	y	y	CCONJ	CC	_	6	cc	_	_
6	Ángel	Ángel	PROPN	NNP	Gender=Masc|Number=Sing	2	conj	_	orig_deprel=nsubj
7	Pintado	Pintado	PROPN	NNP	Gender=Masc|Number=Sing	6	flat:name	_	_
8	de	de	ADP	IN	_	6	orphan	_	orig_deprel=obl
9	tesorero	tesorero	NOUN	NN	Gender=Masc|Number=Sing	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	Habló	hablar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	para	para	ADP	IN	_	3	case	_	_
3	CNN	CNN	PROPN	NNP	Number=Sing	1	obl	_	_
4	Style	style	NOUN	NN	Number=Sing	3	flat:name	_	Proper=True
5	acerca	acerca	ADV	RB	_	8	case	_	_
6	de	de	ADP	IN	_	5	fixed	_	_
7	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	experiencia	experiencia	NOUN	NN	Gender=Fem|Number=Sing	1	obl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat:name	color:blue
1	Durante	durante	ADP	IN	_	3	case	_	_
2	la	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	guerra	guerra	NOUN	NN	Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	se	él	PRON	SE	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	compound:prt	_	_
6	utilizó	utilizar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
7	constantemente	constantemente	ADV	RB	_	6	advmod	_	_
8	a	a	ADP	IN	_	9	case	_	_
9	Pearl	pearl	NOUN	NN	Number=Sing	6	obl	_	Proper=True
10	Harbor	harbor	NOUN	NN	Number=Sing	9	flat:name	_	Proper=True
11	como	como	ADP	IN	_	12	case	_	_
12	propaganda	propaganda	NOUN	NN	Gender=Fem|Number=Sing	6	obl	_	_
13	estadounidense	estadounidense	ADJ	JJ	Gender=Fem|Number=Sing	12	amod	_	SpaceAfter=No|Proper=True
14	.	.	PUNCT	.	_	6	punct	_	_

~~~


