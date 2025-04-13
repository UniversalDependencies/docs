---
layout: base
title:  'Statistics of xcomp in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `xcomp`

This relation is universal.

878 nodes (2%) are attached to their parents as `xcomp`.

867 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.06719817767654.

The following 14 pairs of parts of speech are connected with `xcomp`: <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (674; 77% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (116; 13% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (40; 5% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (26; 3% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-AUX.html">AUX</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	І	і	CCONJ	CCONJ	_	6	cc	_	_
2	тому	тому	ADV	ADV	_	6	advmod	_	_
3	ми	ми	PRON	PRON	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	_
4	цього	це	PRON	PRON	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	7	obj	_	_
5	не	не	PART	PART	Polarity=Neg	6	advmod:neg	_	_
6	хочемо	хотіти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
7	допустити	допустити	VERB	VERB	Aspect=Perf|VerbForm=Inf	6	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	Шановні	шановний	ADJ	ADJ	Case=Voc|Degree=Pos|Number=Plur	2	amod	_	_
2	колеги	колега	NOUN	NOUN	Animacy=Anim|Case=Voc|Gender=Fem,Masc|Number=Plur	4	vocative	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	готові	готовий	ADJ	ADJ	Case=Nom|Number=Plur	0	root	_	_
5	голосувати	голосувати	VERB	VERB	Aspect=Imp|VerbForm=Inf	4	xcomp	_	SpaceAfter=No
6	?	?	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	Шановні	шановний	ADJ	ADJ	Case=Voc|Degree=Pos|Number=Plur	2	amod	_	_
2	колеги	колега	NOUN	NOUN	Animacy=Anim|Case=Voc|Gender=Fem,Masc|Number=Plur	5	vocative	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	законопроект	законопроект	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
5	вважається	вважатися	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin	0	root	_	_
6	відхиленим	відхилений	ADJ	ADJ	Aspect=Perf|Case=Ins|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	5	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


