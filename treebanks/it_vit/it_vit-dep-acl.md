---
layout: base
title:  'Statistics of acl in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="it_vit-dep-acl-relcl.html">acl:relcl</a></tt>.

1725 nodes (1%) are attached to their parents as `acl`.

1672 instances of `acl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.78492753623188.

The following 15 pairs of parts of speech are connected with `acl`: <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-VERB.html">VERB</a></tt> (1541; 89% instances), <tt><a href="it_vit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_vit-pos-VERB.html">VERB</a></tt> (84; 5% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-VERB.html">VERB</a></tt> (54; 3% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt> (16; 1% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (14; 1% instances), <tt><a href="it_vit-pos-X.html">X</a></tt>-<tt><a href="it_vit-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="it_vit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_vit-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_vit-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl	color:blue
1	"	"	PUNCT	FB	_	3	punct	_	SpaceAfter=No
2	quattro	quattro	NUM	N	NumType=Card	3	nummod	_	_
3	minuti	minuto	NOUN	S	Gender=Masc|Number=Plur	0	root	_	_
4	per	per	ADP	E	_	6	mark	_	_
5	non	non	ADV	BN	PronType=Neg	6	advmod	_	_
6	morire	morire	VERB	V	VerbForm=Inf	3	acl	_	SpaceAfter=No
7	"	"	PUNCT	FB	_	3	punct	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl	color:blue
1	Null	nulla	DET	DI	Gender=Masc|Number=Sing|PronType=Ind	2	det	_	_
2	altro	altro	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	0	root	_	_
3	da	da	ADP	E	_	4	mark	_	_
4	fare	fare	VERB	V	VerbForm=Inf	2	acl	_	_
5	prima	prima	ADV	B	_	8	case	_	_
6	di	di	ADP	E	_	5	fixed	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	voto	voto	NOUN	S	Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl	color:blue
1	Allegria	allegria	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
2	per	per	ADP	E	_	4	case	_	_
3	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	4	det	_	_
4	parole	parola	NOUN	S	Gender=Fem	1	nmod	_	_
5	di	di	ADP	E	_	6	case	_	_
6	Lucio	Lucio	PROPN	SP	_	4	nmod	_	_
7	Dalla	Dalla	PROPN	SP	_	6	flat:name	_	SpaceAfter=No
8	,	,	PUNCT	FF	_	6	punct	_	_
9	chiamato	chiamare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	acl	_	_
10	a	a	ADP	E	_	12	case	_	_
11	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	telefono	telefono	NOUN	S	Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	1	punct	_	_

~~~


