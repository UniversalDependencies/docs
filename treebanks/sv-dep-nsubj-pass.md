---
layout: base
title:  'Statistics of nsubj:pass in UD_Swedish'
udver: '2'
---

## Treebank Statistics: UD_Swedish: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="sv-dep-nsubj.html">nsubj</a></tt>.

1330 nodes (1%) are attached to their parents as `nsubj:pass`.

1088 instances of `nsubj:pass` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.74285714285714.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (976; 73% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-PRON.html">PRON</a></tt> (327; 25% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-ADJ.html">ADJ</a></tt> (15; 1% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-ADV.html">ADV</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	Två	två	NUM	RG|NOM	Case=Nom|NumType=Card	2	nummod	_	_
2	huvudfaktorer	huvudfaktor	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	4	nsubj:pass	_	_
3	kan	kunna	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	urskiljas	urskilja	VERB	VB|INF|SFO	VerbForm=Inf|Voice=Pass	0	root	_	_
5	som	som	PRON	HP|-|-|-	PronType=Rel	6	nsubj	_	_
6	förklarar	förklara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	_	_
7	men	men	CCONJ	KN	_	9	cc	_	_
8	inte	inte	ADV	AB	Polarity=Neg	9	advmod	_	_
9	ursäktar	ursäkta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	SpaceAfter=No
10	:	:	PUNCT	MAD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Detta	denna	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj:pass	_	_
2	återspeglas	återspegla	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	också	också	ADV	AB	_	2	advmod	_	_
4	i	i	ADP	PP	_	5	case	_	_
5	siffrorna	siffra	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	2	obl	_	_
6	för	för	ADP	PP	_	7	case	_	_
7	gymnasiet	gymnasium	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:pass	color:blue
1	De	en	DET	DT|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	intagna	ta_in	ADJ	PC|PRF|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part	3	nsubj:pass	_	_
3	isoleras	isolera	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	socialt	social	ADV	AB|POS	Degree=Pos	3	advmod	_	_
5	och	och	CCONJ	KN	_	6	cc	_	_
6	återfaller	återfalla	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
7	i	i	ADP	PP	_	9	case	_	_
8	stor	stor	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	9	amod	_	_
9	utsträckning	utsträckning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	obl	_	_
10	till	till	ADP	PP	_	11	case	_	_
11	brottslighet	brottslighet	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	obl	_	SpaceAfter=No
12	.	.	PUNCT	MAD	_	3	punct	_	_

~~~


