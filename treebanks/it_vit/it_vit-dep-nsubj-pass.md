---
layout: base
title:  'Statistics of nsubj:pass in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="it_vit-dep-nsubj.html">nsubj</a></tt>.

1471 nodes (1%) are attached to their parents as `nsubj:pass`.

1085 instances of `nsubj:pass` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.20598232494901.

The following 12 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (1149; 78% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-PRON.html">PRON</a></tt> (160; 11% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt> (123; 8% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-NUM.html">NUM</a></tt> (16; 1% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_vit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it_vit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	Tale	tale	DET	DD	Number=Sing|PronType=Dem	2	det	_	_
2	documentazione	documentazione	NOUN	S	Gender=Fem|Number=Sing	5	nsubj:pass	_	_
3	deve	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	essere	essere	AUX	VA	VerbForm=Inf	5	aux:pass	_	_
5	presentata	presentare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	in	in	ADP	E	_	7	case	_	_
7	carta	carta	NOUN	S	Gender=Fem|Number=Sing	5	obl	_	_
8	legale	legale	ADJ	A	Number=Sing	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	Cosa	cosa	NOUN	S	Gender=Fem	0	root	_	_
2	che	che	PRON	PR	PronType=Rel	6	nsubj:pass	_	_
3	era	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	aux:pass	_	_
4	già	già	ADV	B	_	6	advmod	_	_
5	stata	essere	AUX	VA	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	6	aux:pass	_	_
6	tentata	tentare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	1	acl:relcl	_	_
7	con	con	ADP	E	_	9	case	_	_
8	l'	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	open	open	X	SW	Foreign=Yes|Gender=Masc|Number=Sing	6	obl	_	_
10	space	space	X	SW	Foreign=Yes|Gender=Masc|Number=Sing	9	flat:foreign	_	SpaceAfter=No
11	"	"	PUNCT	FB	_	1	punct	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj:pass	color:blue
1	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Precedenza	Precedenza	PROPN	SP	_	8	nsubj:pass	_	_
3	a	a	ADP	E	_	4	case	_	_
4	parità	parità	NOUN	S	Gender=Fem	8	obl	_	_
5	di	di	ADP	E	_	6	case	_	_
6	punteggio	punteggio	NOUN	S	Gender=Masc|Number=Sing	4	nmod	_	_
7	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:pass	_	_
8	determinata	determinare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
9	da	da	ADP	E	_	11	case	_	_
10	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	età	età	NOUN	S	Gender=Fem	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	8	punct	_	_

~~~


