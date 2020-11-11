---
layout: base
title:  'Statistics of ccomp in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `ccomp`

This relation is universal.

135 nodes (1%) are attached to their parents as `ccomp`.

135 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 20 pairs of parts of speech are connected with `ccomp`: <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (72; 53% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (9; 7% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (9; 7% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (9; 7% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (6; 4% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (5; 4% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 ccomp	color:blue
1	Seurataan	seurata	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	käynnistyykö	käynnistyä	VERB	_	Clitic=Ko|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	_
4	diureesi	diureesi	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	Gen=virtsaneritys

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp	color:blue
1	Uskomatonta	uskomaton	ADJ	_	Case=Par|Derivation=Ton|Number=Sing	2	amod	_	_
2	soopaa	soopa	NOUN	_	Case=Par|Number=Sing	0	root	_	_
3	vedota	vedota	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	2	csubj:cop	_	_
4	siihen	se	PRON	_	Case=Ill|Number=Sing|PronType=Dem	3	obl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	että	että	SCONJ	_	_	7	mark	_	_
7	sai	saada	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	ccomp	_	_
8	hyvän	hyvä	ADJ	_	Case=Gen|Degree=Pos|Number=Sing	9	amod	_	_
9	miehen	mies	NOUN	_	Case=Gen|Number=Sing	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 ccomp	color:blue
1	Kertoivat	kertoa	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	7	punct	_	_
3	että	että	SCONJ	_	_	7	mark	_	_
4	jalkojen	jalka	NOUN	_	Case=Gen|Number=Plur	5	nmod:gsubj	_	_
5	liikkuminen	liikkuminen	NOUN	_	Case=Nom|Derivation=Minen|Number=Sing	7	nsubj:cop	_	_
6	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	tahatonta	tahaton	ADJ	_	Case=Par|Degree=Pos|Number=Sing	1	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	_

~~~


