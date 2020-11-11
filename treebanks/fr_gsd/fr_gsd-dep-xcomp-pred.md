---
layout: base
title:  'Statistics of xcomp:pred in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `xcomp:pred`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `xcomp`: <tt><a href="fr_gsd-dep-xcomp-obj.html">xcomp:obj</a></tt>, <tt><a href="fr_gsd-dep-xcomp-obl.html">xcomp:obl</a></tt>.

1372 nodes (0%) are attached to their parents as `xcomp:pred`.

1363 instances of `xcomp:pred` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.09620991253644.

The following 13 pairs of parts of speech are connected with `xcomp:pred`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (566; 41% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (397; 29% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (193; 14% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (138; 10% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (24; 2% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (22; 2% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (14; 1% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (9; 1% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-INTJ.html">INTJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp:pred	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	wordform=le
2	roi	roi	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
3	Mutesa	Mutesa	PROPN	_	_	2	appos	_	_
4	II	II	NUM	_	Number=Plur	3	nmod	_	_
5	en	en	PRON	_	Person=3|PronType=Prs	8	nmod	_	_
6	devient	devenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	président	président	NOUN	_	Gender=Masc|Number=Sing	6	xcomp:pred	_	_
9	à	à	ADP	_	_	10	case	_	_
10	vie	vie	NOUN	_	Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp:pred	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	wordform=la
2	junk-food	junk-food	NOUN	_	Gender=Fem|Number=Sing	3	nsubj	_	_
3	rend	rendre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	aussi	aussi	ADV	_	_	5	advmod	_	_
5	accro	accro	ADJ	_	Gender=Masc|Number=Sing	3	xcomp:pred	_	_
6	que	que	SCONJ	_	_	8	case	_	_
7	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	8	det	_	_
8	drogues	drogue	NOUN	_	Gender=Fem|Number=Plur	4	obj	_	_
9	dures	dur	ADJ	_	Gender=Fem|Number=Plur	8	amod	_	_
10	!	!	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp:pred	color:blue
1	Ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	wordform=ils
2	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux:tense	_	_
3	communément	communément	ADV	_	_	4	advmod	_	_
4	appelés	appeler	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
5	Intercom	Intercom	PROPN	_	_	4	xcomp:pred	_	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


