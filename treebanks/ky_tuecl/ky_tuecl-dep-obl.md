---
layout: base
title:  'Statistics of obl in UD_Kyrgyz-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Kyrgyz-TueCL: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="ky_tuecl-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="ky_tuecl-dep-obl-tmod.html">obl:tmod</a></tt>.

94 nodes (8%) are attached to their parents as `obl`.

94 instances of `obl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.04255319148936.

The following 8 pairs of parts of speech are connected with `obl`: <tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt> (48; 51% instances), <tt><a href="ky_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt> (13; 14% instances), <tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_tuecl-pos-PROPN.html">PROPN</a></tt> (12; 13% instances), <tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_tuecl-pos-PRON.html">PRON</a></tt> (11; 12% instances), <tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt> (6; 6% instances), <tt><a href="ky_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ky_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ky_tuecl-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_tuecl-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl	color:blue
1	Кыз	кыз	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	досуна	дос	NOUN	_	Case=Dat|Number=Sing	4	obl	_	_
3	кат	кат	NOUN	_	Case=Nom|Number=Sing	4	obj	_	_
4	жазды	жаз	VERB	_	_	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl	color:blue
1	Дүкөндө	дүкөн	NOUN	_	_	3	obl	_	_
2	жемиш	жемиш	NOUN	_	_	3	nsubj	_	_
3	бар	бар	ADJ	_	_	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	бирок	бирок	CCONJ	_	_	6	cc	_	_
6	жакшы	жакшы	ADJ	_	_	3	conj	_	_
7	эмес	эмес	ADV	_	_	6	advmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obl	color:blue
1	Ал	ал	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	Франциянын	Франция	PROPN	_	_	3	nmod	_	_
3	борбору	борбор	NOUN	_	_	4	nmod	_	_
4	Парижде	Париж	PROPN	_	_	5	obl	_	_
5	чоңойду	чоңой	VERB	_	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


