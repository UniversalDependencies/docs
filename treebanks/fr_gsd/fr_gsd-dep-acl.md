---
layout: base
title:  'Statistics of acl in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fr_gsd-dep-acl-relcl.html">acl:relcl</a></tt>.

5081 nodes (1%) are attached to their parents as `acl`.

4912 instances of `acl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.53847667781933.

The following 18 pairs of parts of speech are connected with `acl`: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (4394; 86% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (473; 9% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (133; 3% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (19; 0% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (16; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (10; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (9; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (9; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl	color:blue
1	Dans	dans	ADP	_	_	2	case	_	_
2	Magicka	Magicka	PROPN	_	_	7	obl:mod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	Excalibur	Excalibur	PROPN	_	_	7	nsubj	_	_
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	épée	épée	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
8	fournie	fournir	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	_
9	avec	avec	ADP	_	_	11	case	_	_
10	son	son	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	11	det	_	_
11	rocher	rocher	NOUN	_	Gender=Masc|Number=Sing	8	obl:mod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 acl	color:blue
1	Secourue	secourir	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	5	acl	_	_
2	par	par	ADP	_	_	3	case	_	_
3	Mitterrand	Mitterrand	PROPN	_	_	1	obl:agent	_	SpaceAfter=No
4	,	,	PUNCT	_	_	1	punct	_	_
5	Marguerite	Marguerite	PROPN	_	_	7	nsubj	_	_
6	Duras	Duras	PROPN	_	_	5	flat:name	_	_
7	réussit	réussir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	à	à	ADP	_	_	10	mark	_	_
9	s'	se	PRON	_	Person=3|PronType=Prs	10	expl:comp	_	SpaceAfter=No
10	échapper	échapper	VERB	_	VerbForm=Inf	7	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl	color:blue
1	Je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	n'	ne	ADV	_	Polarity=Neg	3	advmod	_	SpaceAfter=No
3	ai	avoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	rien	rien	PRON	_	Number=Sing|Polarity=Neg	3	obj	_	_
5	à	à	ADP	_	_	6	mark	_	_
6	faire	faire	VERB	_	VerbForm=Inf	4	acl	_	_
7	!	!	PUNCT	_	_	3	punct	_	_

~~~


