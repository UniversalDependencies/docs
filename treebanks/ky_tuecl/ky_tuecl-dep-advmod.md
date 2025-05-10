---
layout: base
title:  'Statistics of advmod in UD_Kyrgyz-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Kyrgyz-TueCL: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: <tt><a href="ky_tuecl-dep-advmod-emph.html">advmod:emph</a></tt>.

47 nodes (4%) are attached to their parents as `advmod`.

35 instances of `advmod` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.82978723404255.

The following 6 pairs of parts of speech are connected with `advmod`: <tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_tuecl-pos-ADV.html">ADV</a></tt> (34; 72% instances), <tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_tuecl-pos-ADV.html">ADV</a></tt> (6; 13% instances), <tt><a href="ky_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ky_tuecl-pos-ADV.html">ADV</a></tt> (3; 6% instances), <tt><a href="ky_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="ky_tuecl-pos-ADV.html">ADV</a></tt> (2; 4% instances), <tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	Алар	алар	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	5	nsubj	_	_
2	кимдин	ким	PRON	_	_	3	nsubj	_	_
3	жазганын	жаз	VERB	_	_	5	ccomp	_	_
4	эч	эч	ADV	_	_	5	advmod	_	_
5	билишпейт	бил	VERB	_	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 advmod	color:blue
1	Ал	ал	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	унаа	унаа	NOUN	_	_	4	obj	_	_
3	сатып	сат	VERB	_	_	4	compound	_	_
4	алды	ал	VERB	_	_	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	бирок	бирок	CCONJ	_	_	8	cc	_	_
7	анын	ал	PRON	_	_	8	nmod	_	_
8	иниси	ини	NOUN	_	_	4	conj	_	_
9	жөн	жөн	ADV	_	_	11	advmod	_	_
10	гана	гана	ADV	_	_	9	advmod:emph	_	_
11	велосипед	велосипед	NOUN	_	_	8	orphan	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 advmod	color:blue
1	Дүкөндө	дүкөн	NOUN	_	_	3	obl	_	_
2	жемиш	жемиш	NOUN	_	_	3	nsubj	_	_
3	бар	бар	ADJ	_	_	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	бирок	бирок	CCONJ	_	_	6	cc	_	_
6	жакшы	жакшы	ADJ	_	_	3	conj	_	_
7	эмес	эмес	ADV	_	_	6	advmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


