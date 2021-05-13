---
layout: base
title:  'Statistics of compound in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="kk_ktb-dep-compound-lvc.html">compound:lvc</a></tt>.

121 nodes (1%) are attached to their parents as `compound`.

117 instances of `compound` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49586776859504.

The following 15 pairs of parts of speech are connected with `compound`: <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (68; 56% instances), <tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt>-<tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt> (23; 19% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt> (11; 9% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="kk_ktb-pos-ADV.html">ADV</a></tt>-<tt><a href="kk_ktb-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt>-<tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	-	-	PUNCT	guio	_	8	punct	_	_
2	Бас	бас	NOUN	n	Case=Nom	3	compound	_	_
3	прокуратураның	прокуратура	NOUN	n	Case=Gen	7	nmod:poss	_	_
4	және	және	CCONJ	cnjcoo	_	6	cc	_	_
5	Бас	бас	NOUN	n	Case=Nom	6	compound	_	_
6	прокурордың	прокурор	NOUN	n	Case=Gen	3	conj	_	_
7	жұмысын	жұмыс	NOUN	n	Case=Acc|Number[psor]=Plur,Sing|Person[psor]=3	8	obj	_	_
8	қолдаймын	қолда	VERB	v	Aspect=Hab|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
9	.	.	PUNCT	sent	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	Мұнай	мұнай	NOUN	n	Case=Nom	2	obj	_	_
2	өндіру	өндір	VERB	v	Case=Nom|VerbForm=Ger	7	csubj	_	_
3	20	20	NUM	num	NumType=Card	4	compound	_	_
4	миллион	миллион	NUM	num	NumType=Card	5	nummod	_	_
5	тоннаға	тонна	NOUN	n	Case=Dat	7	obl	_	_
6	дейін	дейін	ADP	post	_	5	case	_	_
7	ұлғайды	ұлғай	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Зейнетақы	зейнетақы	NOUN	n	Case=Nom	2	nmod:poss	_	_
2	жинақтарының	жинақ	NOUN	n	Case=Gen|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	3	nmod:poss	_	_
3	көлемі	көлем	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	7	nsubj	_	_
4	2,2	2,2	NUM	num	NumType=Card	5	compound	_	_
5	трлн.	трлн.	NOUN	abbr	_	6	nummod	_	_
6	теңгеге	теңге	NOUN	n	Case=Dat	7	obl	_	_
7	артты	арт	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


