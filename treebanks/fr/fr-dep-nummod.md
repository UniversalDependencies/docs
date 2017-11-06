---
layout: base
title:  'Statistics of nummod in UD_French'
udver: '2'
---

## Treebank Statistics: UD_French: Relations: `nummod`

This relation is universal.

5510 nodes (1%) are attached to their parents as `nummod`.

4849 instances of `nummod` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10998185117967.

The following 17 pairs of parts of speech are connected with `nummod`: <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-NUM.html">NUM</a></tt> (4581; 83% instances), <tt><a href="fr-pos-SYM.html">SYM</a></tt>-<tt><a href="fr-pos-NUM.html">NUM</a></tt> (407; 7% instances), <tt><a href="fr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr-pos-NUM.html">NUM</a></tt> (364; 7% instances), <tt><a href="fr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr-pos-PROPN.html">PROPN</a></tt> (43; 1% instances), <tt><a href="fr-pos-X.html">X</a></tt>-<tt><a href="fr-pos-NUM.html">NUM</a></tt> (38; 1% instances), <tt><a href="fr-pos-NUM.html">NUM</a></tt>-<tt><a href="fr-pos-NUM.html">NUM</a></tt> (34; 1% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-NUM.html">NUM</a></tt> (12; 0% instances), <tt><a href="fr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr-pos-NUM.html">NUM</a></tt> (9; 0% instances), <tt><a href="fr-pos-PRON.html">PRON</a></tt>-<tt><a href="fr-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="fr-pos-SYM.html">SYM</a></tt>-<tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr-pos-NUM.html">NUM</a></tt>-<tt><a href="fr-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="fr-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="fr-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	fêté	fêter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	22	22	NUM	_	_	6	nummod	_	_
6	mai	mai	NOUN	_	Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	taux	taux	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
3	atteint	atteindre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	même	même	ADV	_	_	5	advmod	_	_
5	50	50	NUM	_	_	6	nummod	_	SpaceAfter=No
6	%	%	SYM	_	_	3	obj	_	_
7	dans	dans	ADP	_	_	9	case	_	_
8	certains	certain	DET	_	Gender=Masc|Number=Plur	9	det	_	_
9	centres	centre	NOUN	_	Gender=Masc|Number=Plur	3	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nummod	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	roi	roi	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
3	Mutesa	Mutesa	PROPN	_	_	2	appos	_	_
4	II	II	NUM	_	_	3	nummod	_	_
5	en	en	PRON	_	Person=3	6	iobj	_	_
6	devient	devenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	président	président	NOUN	_	Gender=Masc|Number=Sing	6	xcomp	_	_
9	à	à	ADP	_	_	10	case	_	_
10	vie	vie	NOUN	_	Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


