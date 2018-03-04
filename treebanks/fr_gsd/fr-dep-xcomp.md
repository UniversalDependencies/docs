---
layout: base
title:  'Statistics of xcomp in UD_French'
udver: '2'
---

## Treebank Statistics: UD_French: Relations: `xcomp`

This relation is universal.

3937 nodes (1%) are attached to their parents as `xcomp`.

3921 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.32994665989332.

The following 24 pairs of parts of speech are connected with `xcomp`: <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-VERB.html">VERB</a></tt> (2751; 70% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (523; 13% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-ADJ.html">ADJ</a></tt> (392; 10% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-PROPN.html">PROPN</a></tt> (181; 5% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-NUM.html">NUM</a></tt> (24; 1% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-PRON.html">PRON</a></tt> (24; 1% instances), <tt><a href="fr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr-pos-VERB.html">VERB</a></tt> (6; 0% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-X.html">X</a></tt> (5; 0% instances), <tt><a href="fr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-SYM.html">SYM</a></tt> (4; 0% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr-pos-ADV.html">ADV</a></tt>-<tt><a href="fr-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr-pos-NUM.html">NUM</a></tt>-<tt><a href="fr-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr-pos-PRON.html">PRON</a></tt>-<tt><a href="fr-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr-pos-PRON.html">PRON</a></tt>-<tt><a href="fr-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-INTJ.html">INTJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Dieu	Dieu	PROPN	_	_	2	nsubj	_	_
2	veuille	vouloir	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	avoir	avoir	VERB	_	VerbForm=Inf	2	xcomp	_	_
4	en	en	ADP	_	_	5	case	_	_
5	paix	paix	NOUN	_	Gender=Fem|Number=Sing	3	obl	_	_
6	ton	son	DET	_	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	7	det	_	_
7	âme	âme	NOUN	_	Gender=Fem|Number=Sing	3	obj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp	color:blue
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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	junk-food	junk-food	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	_	_
3	rend	rendre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	aussi	aussi	ADV	_	_	5	advmod	_	_
5	accro	accro	ADJ	_	Gender=Masc|Number=Sing	3	xcomp	_	_
6	que	que	SCONJ	_	_	8	mark	_	_
7	les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
8	drogues	drogue	NOUN	_	Gender=Fem|Number=Plur	5	obl	_	_
9	dures	dur	ADJ	_	Gender=Fem|Number=Plur	8	amod	_	_
10	!	!	PUNCT	_	_	3	punct	_	_

~~~


