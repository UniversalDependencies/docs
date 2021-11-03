---
layout: base
title:  'Statistics of cc in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `cc`

This relation is universal.

876 nodes (3%) are attached to their parents as `cc`.

872 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.76826484018265.

The following 11 pairs of parts of speech are connected with `cc`: <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-CCONJ.html">CCONJ</a></tt> (421; 48% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-CCONJ.html">CCONJ</a></tt> (274; 31% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-CCONJ.html">CCONJ</a></tt> (103; 12% instances), <tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_partut-pos-CCONJ.html">CCONJ</a></tt> (21; 2% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-CCONJ.html">CCONJ</a></tt> (19; 2% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-ADV.html">ADV</a></tt> (18; 2% instances), <tt><a href="fr_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_partut-pos-CCONJ.html">CCONJ</a></tt> (8; 1% instances), <tt><a href="fr_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_partut-pos-CCONJ.html">CCONJ</a></tt> (6; 1% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="fr_partut-pos-DET.html">DET</a></tt>-<tt><a href="fr_partut-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	Et	et	CCONJ	CC	_	4	cc	_	_
2	de	de	ADP	E	_	4	case	_	_
3	quelle	quel	DET	DQ	Gender=Fem|Number=Sing|PronType=Int	4	det	_	_
4	façon	façon	NOUN	S	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
5	?	?	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	Et	et	CCONJ	CC	_	5	cc	_	_
2	franchement	franchement	ADV	B	_	5	advmod	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	suis	être	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
6	face	face	NOUN	S	Gender=Fem|Number=Sing	9	case	_	_
7	à	à	ADP	E	_	6	fixed	_	_
8	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	obstacle	obstacle	NOUN	S	Gender=Masc|Number=Sing	5	obl	_	_
10	majeur	majeur	ADJ	A	Gender=Masc|Number=Sing	9	amod	_	SpaceAfter=No
11	:	:	PUNCT	FC	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	Mais	mais	CCONJ	CC	_	4	cc	_	_
2	voici	voici	ADP	E	_	4	discourse	_	_
3	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	champignon	champignon	ADJ	A	Number=Sing	0	root	_	_
5	qui	qui	PRON	PR	PronType=Rel	11	nsubj	_	_
6	n'	ne	PART	PART	Polarity=Neg	11	advmod	_	SpaceAfter=No
7	est	être	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
8	plus	plus	ADV	B	_	11	advmod	_	_
9	de	de	ADP	E	_	11	case	_	_
10	première	premier	ADJ	NO	Gender=Fem|Number=Sing|NumType=Ord	11	amod	_	_
11	jeunesse	jeunesse	NOUN	S	Gender=Fem|Number=Sing	4	acl:relcl	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	4	punct	_	_

~~~


