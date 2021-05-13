---
layout: base
title:  'Statistics of xcomp in UD_Buryat-BDT'
udver: '2'
---

## Treebank Statistics: UD_Buryat-BDT: Relations: `xcomp`

This relation is universal.

161 nodes (2%) are attached to their parents as `xcomp`.

145 instances of `xcomp` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.46583850931677.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt> (148; 92% instances), <tt><a href="bxr_bdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt> (6; 4% instances), <tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bxr_bdt-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="bxr_bdt-pos-AUX.html">AUX</a></tt>-<tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="bxr_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bxr_bdt-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bxr_bdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Би	би	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	хэлээб	хэ	VERB	_	Mood=Des|Number=Sing|Person=1|Voice=Rcp	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	ерэхэ	ерэ	VERB	_	_	2	xcomp	_	_
5	шадалтай	шадалтай	ADJ	_	_	4	aux	_	_
6	гэжэ	гэ	VERB	_	VerbForm=Inf	4	discourse	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 xcomp	color:blue
1	Шүлэгүүдыень	шүлэг	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	2	nmod	_	_
2	уншаад	уншаад	ADJ	_	_	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	һанаа	һанаа	CCONJ	_	_	2	cc	_	_
5	бодолдоо	бодол	NOUN	_	Case=Dat|Reflex=Yes	6	nmod	_	_
6	абаад	абаад	ADJ	_	_	2	conj	_	_
7	туршагты	турша	VERB	_	VerbForm=Ger	2	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 xcomp	color:blue
1	Зүрхэ	зүрхэн	NOUN	_	Case=Nom	4	nsubj	_	_
2	сэдьхэлни	сэдьхэл	NOUN	_	Case=Nom	3	nmod	_	_
3	доһолоод	доһолоод	ADJ	_	_	4	xcomp	_	_
4	абаба	аба	VERB	_	Aspect=Perf|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


