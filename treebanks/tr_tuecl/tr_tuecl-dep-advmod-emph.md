---
layout: base
title:  'Statistics of advmod:emph in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="tr_tuecl-dep-advmod.html">advmod</a></tt>.

5 nodes (1%) are attached to their parents as `advmod:emph`.

5 instances of `advmod:emph` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-ADV.html">ADV</a></tt> (2; 40% instances), <tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_tuecl-pos-ADV.html">ADV</a></tt> (1; 20% instances), <tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_tuecl-pos-ADV.html">ADV</a></tt> (1; 20% instances), <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-ADV.html">ADV</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advmod:emph	color:blue
1	Kutsal	kutsal	ADJ	_	_	2	amod	_	_
2	kitapsız	kitap	NOUN	_	Number=Sing|Polarity=Neg	3	amod	_	_
3	dinler	din	NOUN	_	Case=Nom|Number=Plur	5	nsubj	_	_
4	de	de	ADV	_	_	3	advmod:emph	_	_
5	var	var	ADJ	_	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:emph	color:blue
1	Sen	sen	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	_	_
2	de	de	ADV	_	_	1	advmod:emph	_	_
3	bizimle	biz	PRON	_	Case=Ins|Number=Plur|Person=1|PronType=Prs	4	obl	_	_
4	geliyorsun	gel	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=2|Tense=Pres	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	değil	değil	AUX	_	Polarity=Neg	4	aux	_	_
7	mi	mi	AUX	_	Number=Sing|Person=3|PronType=Int	4	aux:q	_	SpaceAfter=No
8	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 advmod:emph	color:blue
1	Sude	Sude	PROPN	_	Case=Nom|Number=Sing	6	nsubj	_	_
2	üç	üç	NUM	_	NumType=Card	3	nummod	_	_
3	saat	saat	ADV	_	Case=Nom	6	advmod	_	_
4	tir	i	AUX	_	Mood=Gen|Number=Sing|Person=3	3	cop	_	_
5	ofiste	ofis	NOUN	_	Case=Loc|Number=Sing	6	obl	_	_
6	yok	yok	ADJ	_	Polarity=Neg	0	root	_	_
7	muş	i	AUX	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	6	cop	_	_
8	,	,	PUNCT	_	_	6	punct	_	_
9	Ayşe	Ayşe	PROPN	_	Case=Nom|Number=Sing	11	nsubj	_	_
10	de	de	ADV	_	_	9	advmod:emph	_	_
11	evde	ev	NOUN	_	Case=Loc|Number=Sing	6	parataxis	_	_
12	değil	değil	AUX	_	Case=Nom|Number=Sing|Polarity=Neg	11	aux	_	_
13	miş	i	AUX	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	11	cop	_	_
14	.	.	PUNCT	_	_	11	punct	_	_

~~~


