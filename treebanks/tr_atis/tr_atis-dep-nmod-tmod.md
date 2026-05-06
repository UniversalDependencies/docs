---
layout: base
title:  'Statistics of nmod:tmod in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="tr_atis-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="tr_atis-dep-nmod-poss.html">nmod:poss</a></tt>.

1232 nodes (3%) are attached to their parents as `nmod:tmod`.

1232 instances of `nmod:tmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.85957792207792.

The following 18 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (585; 47% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (278; 23% instances), <tt><a href="tr_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (143; 12% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (122; 10% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (26; 2% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (22; 2% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (17; 1% instances), <tt><a href="tr_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (11; 1% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (7; 1% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:tmod	color:blue
1	Yarın	yarın	NOUN	_	Case=Nom|Number=Sing	3	nmod:tmod	_	_
2	erken	erken	ADJ	_	_	3	amod	_	_
3	saatte	saat	NOUN	_	Case=Loc|Number=Sing	6	obl:tmod	_	_
4	Columbus'tan	columbus	PROPN	_	Case=Abl|Number=Sing	5	nmod	_	_
5	Minneapolis'e	minneapolis	PROPN	_	Case=Dat|Number=Sing	6	obl	_	_
6	uçmak	uç	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	7	xcomp	_	_
7	istiyorum	iste	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 nmod:tmod	color:blue
1	2	2	NUM	_	NumType=Card	2	nummod	_	_
2	Mart'ta	mart	PROPN	_	Case=Loc|Number=Sing	9	nmod:tmod	_	_
3	New	new	PROPN	_	Case=Nom|Number=Sing	5	nmod	_	_
4	York'tan	york	PROPN	_	Case=Abl|Number=Sing	3	flat	_	_
5	Las	Las	PROPN	_	Case=Nom|Number=Sing	9	nmod	_	_
6	Vegas'a	vegas	PROPN	_	Case=Dat|Number=Sing	5	flat	_	_
7	aktarmasız	aktarmasız	ADJ	_	_	9	amod	_	_
8	bir	bir	DET	_	Definite=Ind|PronType=Art	9	det	_	_
9	uçuş	uçuş	NOUN	_	Case=Nom|Number=Sing	10	obj	_	_
10	istiyorum	iste	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:tmod	color:blue
1	Nashville'den	nashville	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Cleveland'a	cleveland	PROPN	_	Case=Dat|Number=Sing	5	nmod	_	_
3	pazar	pazar	NOUN	_	Case=Nom|Number=Sing	4	nmod	_	_
4	günü	gün	NOUN	_	Case=Acc|Number=Sing	5	nmod:tmod	_	_
5	9'dan	9	NUM	_	Case=Abl|Number=Sing|NumType=Card	0	root	_	_
6	önce	önce	ADV	_	_	5	case	_	_

~~~


