---
layout: base
title:  'Statistics of obl:tmod in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="tr_atis-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="tr_atis-dep-obl-agent.html">obl:agent</a></tt>.

729 nodes (2%) are attached to their parents as `obl:tmod`.

729 instances of `obl:tmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.5761316872428.

The following 15 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (428; 59% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (78; 11% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (73; 10% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (37; 5% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (36; 5% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (29; 4% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (16; 2% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (8; 1% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:tmod	color:blue
1	Pazartesi	pazartesi	PROPN	_	Case=Nom|Number=Sing	2	nmod	_	_
2	günleri	gün	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	3	obl:tmod	_	_
3	olan	ol	ADJ	_	_	6	acl	_	_
4	kule	kule	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nmod	_	_
5	hava	hava	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nmod	_	_
6	uçuşlarını	uç	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	7	obj	_	_
7	listeleyin	listele	VERB	_	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 obl:tmod	color:blue
1	Denver'den	denver	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Pittsburgh'a	pittsburgh	PROPN	_	Case=Dat|Number=Sing	3	obl	_	_
3	olan	ol	ADJ	_	_	5	acl	_	_
4	hangi	hangi	ADJ	_	_	5	amod	_	_
5	uçuş	uç	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
6	sabah	sabah	NOUN	_	Case=Nom|Number=Sing|Person=3	9	obl:tmod	_	_
7	en	en	ADV	_	Degree=Sup	8	advmod	_	_
8	erken	erken	ADV	_	_	9	advmod	_	_
9	gelir	gel	VERB	_	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 obl:tmod	color:blue
1	Yarın	yarın	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nmod:tmod	_	_
2	erken	erken	ADJ	_	_	3	amod	_	_
3	saatte	saat	NOUN	_	Case=Loc|Number=Sing|Person=3	6	obl:tmod	_	_
4	Columbus'tan	columbus	PROPN	_	Case=Abl|Number=Sing	5	nmod	_	_
5	Minneapolis'e	minneapolis	PROPN	_	Case=Dat|Number=Sing	6	obl	_	_
6	uçmak	uç	NOUN	_	Case=Nom|Number=Sing|Person=3	7	xcomp	_	_
7	istiyorum	iste	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


