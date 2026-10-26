---
layout: base
title:  'Statistics of nsubj in UD_Kyrgyz-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Kyrgyz-TueCL: Relations: `nsubj`

This relation is universal.
There are 2 language-specific subtypes of `nsubj`: <tt><a href="ky_tuecl-dep-nsubj-outer.html">nsubj:outer</a></tt>, <tt><a href="ky_tuecl-dep-nsubj-pass.html">nsubj:pass</a></tt>.

168 nodes (13%) are attached to their parents as `nsubj`.

168 instances of `nsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.69642857142857.

The following 13 pairs of parts of speech are connected with `nsubj`: <tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_tuecl-pos-PROPN.html">PROPN</a></tt> (56; 33% instances), <tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt> (34; 20% instances), <tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_tuecl-pos-PRON.html">PRON</a></tt> (25; 15% instances), <tt><a href="ky_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt> (19; 11% instances), <tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_tuecl-pos-PROPN.html">PROPN</a></tt> (15; 9% instances), <tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_tuecl-pos-PRON.html">PRON</a></tt> (5; 3% instances), <tt><a href="ky_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ky_tuecl-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_tuecl-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="ky_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ky_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ky_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="ky_tuecl-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ky_tuecl-pos-PART.html">PART</a></tt>-<tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ky_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Мэри	Мэри	PROPN	_	_	3	nsubj	_	_
2	коло	коло	NOUN	_	_	3	obl	_	_
3	утту	ут	VERB	_	_	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	Питер	Питер	PROPN	_	_	3	conj	_	_
6	күмүш	күмүш	NOUN	_	_	5	orphan	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	Джейн	Джейн	PROPN	_	_	3	conj	_	_
9	алтын	алтын	NOUN	_	_	8	orphan	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Кыз	кыз	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	досуна	дос	NOUN	_	Case=Dat|Number=Sing	4	obl	_	_
3	кат	кат	NOUN	_	Case=Nom|Number=Sing	4	obj	_	_
4	жазды	жаз	VERB	_	_	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 nsubj	color:blue
1	Ал	ал	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
2	тамеки	тамеки	NOUN	_	_	3	obj	_	_
3	чегүүнү	чек	VERB	_	_	7	ccomp	_	_
4	жана	жана	CCONJ	_	_	6	cc	_	_
5	арак	арак	NOUN	_	_	6	obj	_	_
6	ичүүнү	ич	VERB	_	_	3	conj	_	_
7	токтотууга	токто	VERB	_	_	9	xcomp	_	_
8	аракет	араке	VERB	_	_	9	obj	_	_
9	кылды	кыл	VERB	_	_	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


