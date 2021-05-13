---
layout: base
title:  'Statistics of parataxis in UD_Buryat-BDT'
udver: '2'
---

## Treebank Statistics: UD_Buryat-BDT: Relations: `parataxis`

This relation is universal.

276 nodes (3%) are attached to their parents as `parataxis`.

253 instances of `parataxis` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.16666666666667.

The following 16 pairs of parts of speech are connected with `parataxis`: <tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt> (178; 64% instances), <tt><a href="bxr_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt> (25; 9% instances), <tt><a href="bxr_bdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt> (16; 6% instances), <tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bxr_bdt-pos-NOUN.html">NOUN</a></tt> (15; 5% instances), <tt><a href="bxr_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bxr_bdt-pos-NOUN.html">NOUN</a></tt> (13; 5% instances), <tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bxr_bdt-pos-ADJ.html">ADJ</a></tt> (10; 4% instances), <tt><a href="bxr_bdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bxr_bdt-pos-ADJ.html">ADJ</a></tt> (7; 3% instances), <tt><a href="bxr_bdt-pos-ADV.html">ADV</a></tt>-<tt><a href="bxr_bdt-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="bxr_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bxr_bdt-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bxr_bdt-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="bxr_bdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bxr_bdt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="bxr_bdt-pos-ADV.html">ADV</a></tt>-<tt><a href="bxr_bdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="bxr_bdt-pos-AUX.html">AUX</a></tt>-<tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="bxr_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bxr_bdt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="bxr_bdt-pos-PRON.html">PRON</a></tt>-<tt><a href="bxr_bdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="bxr_bdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 parataxis	color:blue
1	Хүүгэд	хүүгэн	NOUN	_	Case=Nom|Number=Plur	3	nsubj	_	_
2	печени	печени	NOUN	_	Case=Nom	3	obj	_	_
3	хэнхэй	хэ	VERB	_	_	0	root	_	SpaceAfter=No
4	;	;	PUNCT	_	_	6	punct	_	_
5	эжынь	эжы	NOUN	_	Case=Nom|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	_
6	шараа	шара	VERB	_	Mood=Des|Number=Sing|Person=3	3	parataxis	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 parataxis	color:blue
1	Эхэ	эхэ	NOUN	_	Case=Nom	2	compound	_	_
2	эсэгэнь	эсэгэ	NOUN	_	Case=Nom|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	_
3	жиирэй	жиирэй	ADJ	_	_	4	amod	_	_
4	зон	зон	NOUN	_	Case=Nom	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	колхозой	колхоз	NOUN	_	Case=Gen	7	nmod	_	_
7	ажалшад	ажал	VERB	_	_	4	parataxis	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 parataxis	color:blue
1	Би	би	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	асууһааб	асуу	VERB	_	VerbForm=Ger	5	parataxis	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	аян	аян	NOUN	_	Case=Nom	5	nsubj	_	_
5	дэмбэрэлтэй	дэмбэрэлтэй	ADJ	_	_	0	root	_	_
6	байгаа	бай	AUX	_	_	5	cop	_	_
7	гүү	гүү	PART	_	_	5	discourse	_	SpaceAfter=No
8	?	?	PUNCT	_	_	5	punct	_	_

~~~


