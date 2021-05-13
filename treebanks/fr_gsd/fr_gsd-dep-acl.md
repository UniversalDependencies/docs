---
layout: base
title:  'Statistics of acl in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fr_gsd-dep-acl-relcl.html">acl:relcl</a></tt>.

4877 nodes (1%) are attached to their parents as `acl`.

4822 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.43817920852983.

The following 16 pairs of parts of speech are connected with `acl`: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (4262; 87% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (415; 9% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (116; 2% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (17; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (15; 0% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (15; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (15; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (9; 0% instances), <tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl	color:blue
1	Dans	dans	ADP	_	_	2	case	_	wordform=dans
2	Magicka	Magicka	PROPN	_	_	7	obl:mod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	Excalibur	Excalibur	PROPN	_	_	7	nsubj	_	_
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	épée	épée	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
8	fournie	fournir	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	_
9	avec	avec	ADP	_	_	11	case	_	_
10	son	son	DET	_	Number=Sing|Number[psor]=Sing|Person[psor]=3|PronType=Prs	11	det	_	_
11	rocher	rocher	NOUN	_	Gender=Masc|Number=Sing	8	obl:mod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 acl	color:blue
1	L'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No|wordform=l'
2	Abbé	Abbé	PROPN	_	Number=Sing	5	nsubj	_	_
3	Othon	Othon	PROPN	_	_	2	appos	_	_
4	y	y	PRON	_	Person=3|PronType=Prs	5	obl:arg	_	_
5	envoie	envoyer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	Albéric	Albéric	PROPN	_	_	5	obj	_	_
7	accompagné	accompagner	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	acl	_	_
8	de	de	ADP	_	_	10	case	_	_
9	quelques	quelque	DET	_	Number=Plur|PronType=Ind	10	det	_	_
10	moines	moine	NOUN	_	Gender=Masc|Number=Plur	7	obl:agent	_	SpaceAfter=No
11	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl	color:blue
1	Je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	wordform=je
2	n'	ne	ADV	_	Polarity=Neg	3	advmod	_	SpaceAfter=No
3	ai	avoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	rien	rien	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Neg	3	obj	_	_
5	à	à	ADP	_	_	6	mark	_	_
6	faire	faire	VERB	_	VerbForm=Inf	4	acl	_	_
7	!	!	PUNCT	_	_	3	punct	_	_

~~~


