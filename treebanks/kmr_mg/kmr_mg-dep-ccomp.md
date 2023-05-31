---
layout: base
title:  'Statistics of ccomp in UD_Kurmanji-MG'
udver: '2'
---

## Treebank Statistics: UD_Kurmanji-MG: Relations: `ccomp`

This relation is universal.

138 nodes (1%) are attached to their parents as `ccomp`.

137 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.16666666666667.

The following 12 pairs of parts of speech are connected with `ccomp`: <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt> (89; 64% instances), <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt> (20; 14% instances), <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-ADJ.html">ADJ</a></tt> (7; 5% instances), <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-AUX.html">AUX</a></tt> (5; 4% instances), <tt><a href="kmr_mg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="kmr_mg-pos-PRON.html">PRON</a></tt>-<tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="kmr_mg-pos-AUX.html">AUX</a></tt>-<tt><a href="kmr_mg-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="kmr_mg-pos-AUX.html">AUX</a></tt>-<tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="kmr_mg-pos-VERB.html">VERB</a></tt>-<tt><a href="kmr_mg-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Diviya bû	divêtin	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	0	root	_	_
2	tiştekî	tişt	NOUN	n	Case=Con|Gender=Masc|Number=Sing|PronType=Ind	4	nsubj	_	_
3	mihim	mihim	ADJ	adj	Degree=Pos	2	amod	_	_
4	qewimî	qewimin	VERB	vblex	Tense=Past|VerbForm=Part	1	ccomp	_	_
5	biwa	bûn	AUX	vaux	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux	_	SpaceAfter=No
6	.	.	PUNCT	sent	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp	color:blue
1	Kî	kî	PRON	prn	PronType=Int	2	nsubj	_	_
2	zane	zanîn	VERB	vblex	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	discourse	_	_
3	heye	hebûn	VERB	vbhaver	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	ko	ku	SCONJ	cnjsub	_	6	mark	_	_
5	dengê	deng	NOUN	n	Case=Con|Definite=Def|Gender=Masc|Number=Sing	3	ccomp	_	_
6	cinan	cin	NOUN	n	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	5	nmod:poss	_	_
7	bû	bûn	AUX	vbcop	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	Walê	walê	ADV	adv	_	2	advmod	_	_
2	dixuye	xuyan	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ko	ku	SCONJ	cnjsub	_	5	mark	_	_
4	gelek	gelek	ADV	preadv	_	5	advmod	_	_
5	xemxwar	xemxwar	ADJ	adj	Degree=Pos	2	ccomp	_	_
6	e	bûn	AUX	vbcop	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
7	û	û	CCONJ	cnjcoo	_	5	cc	_	_
8	misîbetin	musîbet	NOUN	n	Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	11	nsubj	_	_
9	lê	li	ADP	pr	AdpType=Prep	10	case	_	_
10	_	ew	PRON	prn	Case=Acc|Gender=Fem,Masc|Number=Sing|PronType=Dem	11	nmod	_	_
11	qewimîne	qewimin	VERB	vblex	Evident=Nfh|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	5	conj	_	SpaceAfter=No
12	.	.	PUNCT	sent	_	2	punct	_	_

~~~


