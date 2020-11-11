---
layout: base
title:  'Statistics of nmod in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `nmod`

This relation is universal.
There are 3 language-specific subtypes of `nmod`: <tt><a href="tr_gb-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="tr_gb-dep-nmod-part.html">nmod:part</a></tt>, <tt><a href="tr_gb-dep-nmod-tmod.html">nmod:tmod</a></tt>.

961 nodes (6%) are attached to their parents as `nmod`.

952 instances of `nmod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55775234131113.

The following 23 pairs of parts of speech are connected with `nmod`: <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (530; 55% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (155; 16% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (94; 10% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (38; 4% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (28; 3% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (24; 2% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (19; 2% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (15; 2% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (10; 1% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="tr_gb-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="tr_gb-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="tr_gb-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	Çamaşırları	çamaşır	NOUN	_	Case=Acc|Number=Plur	5	obj	_	_
2	gene	gene	ADV	_	_	5	advmod	_	_
3	makinanın	makina	NOUN	_	Case=Gen|Number=Sing	4	nmod	_	_
4	içinde	iç	NOUN	_	Case=Loc|Number[psor]=Sing|Person[psor]=3	5	obl	_	_
5	bırakmışım	bırak	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	Dün	dün	NOUN	_	Case=Nom|Number=Sing	5	obl:tmod	_	_
2	Zeki’nin	Zeki	PROPN	_	Case=Gen|Number=Sing	3	nmod	_	_
3	ablası	abla	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	_
4	işten	iş	NOUN	_	Case=Abl|Number=Sing	5	obl	_	_
5	ayrılmış	ayrıl	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod	color:blue
1	Bugün	bugün	NOUN	_	Case=Nom|Number=Sing	3	obl:tmod	_	_
2	Ziya’yla	Ziya	PROPN	_	Case=Ins|Number=Sing	3	obl	_	_
3	buluştuğunuz	buluştuk	VERB	_	Mood=Ind|Number[psor]=Plur|Person[psor]=2|Tense=Past|VerbForm=Part	6	obl:tmod	_	_
4	zaman	zaman	ADP	_	Case=Nom|Number=Sing	3	mark	_	_
5	bana	ben	PRON	_	Case=Dat|Number=Sing|Person=1|Polarity=Pos|PronType=Prs	6	nmod	_	_
6	telefon	telefon	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
7	edin	et	VERB	_	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	compound	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


