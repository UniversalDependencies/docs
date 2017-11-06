---
layout: base
title:  'Statistics of expl in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `expl`

This relation is universal.

86 nodes (0%) are attached to their parents as `expl`.

64 instances of `expl` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.87209302325581.

The following 7 pairs of parts of speech are connected with `expl`: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (50; 58% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (13; 15% instances), <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (10; 12% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (8; 9% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 expl	color:blue
1	Men	men	CCONJ	KN	_	3	cc	_	_
2	ännu	ännu	ADV	AB	_	3	advmod	_	_
3	finns	finnas	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	3	expl	_	_
5	frågor	fråga	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	3	nsubj	_	_
6	som	som	PRON	HP|-|-|-	PronType=Int,Rel	9	nsubj	_	_
7	inte	inte	ADV	AB	Polarity=Neg	9	advmod	_	_
8	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
9	besvarade	besvarad	ADJ	PC|PRF|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part	5	acl:relcl	_	SpaceAfter=No
10	.	.	PUNCT	MAD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 expl	color:blue
1	I	i	ADP	PP	_	3	case	_	_
2	detta	denna	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing	3	det	_	_
3	sammanhang	sammanhang	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	6	obl	_	_
4	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
5	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	6	expl	_	_
6	rimligt	rimlig	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
7	att	att	PART	IE	_	8	mark	_	_
8	rasa	rasa	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	6	csubj	_	_
9	mot	mot	ADP	PP	_	10	case	_	_
10	handeln	handel	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	8	obl	_	SpaceAfter=No
11	.	.	PUNCT	MAD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl	color:blue
1	Jag	jag	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
2	tror	tro	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	4	expl	_	_
4	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
5	därför	därför	ADV	AB	_	4	dislocated	_	_
6	de	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur	7	nsubj	_	_
7	fördjupat	fördjupa	VERB	VB|SUP|AKT	VerbForm=Sup|Voice=Act	5	acl:relcl	_	_
8	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def	7	obj	_	_
9	i	i	ADP	PP	_	10	case	_	_
10	mönster	mönster	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	obl	_	_
11	och	och	CCONJ	KN	_	12	cc	_	_
12	färg	färg	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	10	conj	_	SpaceAfter=No
13	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


