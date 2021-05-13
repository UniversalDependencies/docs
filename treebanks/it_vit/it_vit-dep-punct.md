---
layout: base
title:  'Statistics of punct in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `punct`

This relation is universal.

31578 nodes (11%) are attached to their parents as `punct`.

22749 instances of `punct` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.65751472544176.

The following 14 pairs of parts of speech are connected with `punct`: <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-PUNCT.html">PUNCT</a></tt> (14855; 47% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-PUNCT.html">PUNCT</a></tt> (10557; 33% instances), <tt><a href="it_vit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_vit-pos-PUNCT.html">PUNCT</a></tt> (2579; 8% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-PUNCT.html">PUNCT</a></tt> (1714; 5% instances), <tt><a href="it_vit-pos-NUM.html">NUM</a></tt>-<tt><a href="it_vit-pos-PUNCT.html">PUNCT</a></tt> (792; 3% instances), <tt><a href="it_vit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_vit-pos-PUNCT.html">PUNCT</a></tt> (526; 2% instances), <tt><a href="it_vit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_vit-pos-PUNCT.html">PUNCT</a></tt> (344; 1% instances), <tt><a href="it_vit-pos-X.html">X</a></tt>-<tt><a href="it_vit-pos-PUNCT.html">PUNCT</a></tt> (97; 0% instances), <tt><a href="it_vit-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_vit-pos-PUNCT.html">PUNCT</a></tt> (52; 0% instances), <tt><a href="it_vit-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="it_vit-pos-PUNCT.html">PUNCT</a></tt> (33; 0% instances), <tt><a href="it_vit-pos-ADP.html">ADP</a></tt>-<tt><a href="it_vit-pos-PUNCT.html">PUNCT</a></tt> (17; 0% instances), <tt><a href="it_vit-pos-DET.html">DET</a></tt>-<tt><a href="it_vit-pos-PUNCT.html">PUNCT</a></tt> (6; 0% instances), <tt><a href="it_vit-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="it_vit-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), <tt><a href="it_vit-pos-AUX.html">AUX</a></tt>-<tt><a href="it_vit-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 punct	color:blue
1	Ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	3	det	_	SpaceAfter=No
3	acqua	acqua	NOUN	S	Gender=Fem|Number=Sing	1	obj	_	_
4	calda	caldo	ADJ	A	Gender=Fem|Number=Sing	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	10	punct	_	_
6	più	più	ADV	B	_	10	advmod	_	_
7	o	o	CCONJ	CC	_	8	cc	_	_
8	meno	meno	ADV	B	_	6	conj	_	_
9	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	10	expl	_	_
10	veste	vestire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	conj	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 punct	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
2	come	come	ADP	E	_	4	case	_	_
3	un'	uno	NUM	N	Gender=Fem|Number=Sing|NumType=Card	4	nummod	_	SpaceAfter=No
4	energia	energia	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
5	che	che	PRON	PR	PronType=Rel	7	nsubj	_	_
6	sta	stare	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	crescendo	crescere	VERB	V	VerbForm=Ger	4	acl:relcl	_	_
8	complessivamente	complessivamente	ADV	B	_	7	advmod	_	SpaceAfter=No
9	"	"	PUNCT	FB	_	7	punct	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 punct	color:blue
1	A	a	ADP	E	_	3	case	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	processo	processo	NOUN	S	Gender=Masc|Number=Sing	6	obl	_	_
4	di	di	ADP	E	_	5	case	_	_
5	Torvajanica	Torvajanica	PROPN	SP	_	3	nmod	_	_
6	smentito	smentire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	advcl	_	_
7	Said	Said	PROPN	SP	_	0	root	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	7	punct	_	_

~~~


