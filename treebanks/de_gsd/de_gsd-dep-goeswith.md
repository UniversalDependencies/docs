---
layout: base
title:  'Statistics of goeswith in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `goeswith`

This relation is universal.

2 nodes (0%) are attached to their parents as `goeswith`.

2 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 1 pairs of parts of speech are connected with `goeswith`: <tt><a href="de_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="de_gsd-pos-X.html">X</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 goeswith	color:blue
1	Die	der	DET	ART	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	_
2	großen	groß	ADJ	ADJA	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	7	amod	_	_
3	Ist	sein	AUX	VAINF	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	compound	_	NamedEntity=Yes|SpaceAfter=No
4	-	-	PUNCT	$(	_	5	punct	_	SpaceAfter=No
5	Wert	Wert	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	7	compound	_	NamedEntity=Yes|SpaceAfter=No
6	-	-	PUNCT	$(	_	7	punct	_	SpaceAfter=No
7	Anzeigen	Anzeige	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur	14	nsubj:pass	_	_
8	wer	werden	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	14	aux:pass	_	CorrectForm=werden
9	-	_	X	$(	_	8	goeswith	_	_
10	den	_	X	ART	_	8	goeswith	_	_
11	durch	durch	ADP	APPR	_	13	case	_	_
12	eine	ein	DET	ART	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	Balkenanzeige	Balkenanzeige	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	14	obl	_	_
14	unterstützt	unterstützen	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
15	,	,	PUNCT	$,	_	23	punct	_	_
16	die	der	PRON	PRELS	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	23	nsubj	_	_
17	zusätzlich	zusätzlich	ADJ	ADJD	Degree=Pos	23	advmod	_	_
18	farblich	farblich	ADJ	ADJD	Degree=Pos	23	advmod	_	_
19	das	der	DET	ART	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	20	det	_	_
20	Erreichen	Erreichen	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	23	obj	_	_
21	des	der	DET	ART	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	22	det	_	_
22	Toleranzfensters	Toleranzfenster	NOUN	NN	Case=Gen|Gender=Neut|Number=Sing	20	nmod	_	_
23	anzeigt	anzeigen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	acl:relcl	_	SpaceAfter=No
24	.	.	PUNCT	$.	_	14	punct	_	_

~~~


