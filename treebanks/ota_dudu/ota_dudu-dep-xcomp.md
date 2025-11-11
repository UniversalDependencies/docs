---
layout: base
title:  'Statistics of xcomp in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `xcomp`

This relation is universal.

37 nodes (0%) are attached to their parents as `xcomp`.

36 instances of `xcomp` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.7027027027027.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (26; 70% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (3; 8% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 xcomp	color:blue
1	aṣlâ	aṣlâ	ADV	_	_	3	advmod	_	_
2	râḥat	râḥat	ADJ	Adj	_	11	xcomp	_	_
3	olmadı	ol	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	_	_
4	ve	ve	CCONJ	_	_	7	cc	_	_
5	ṭuyınca	ṭuy	VERB	Conv	Polarity=Pos|VerbForm=Conv	6	advcl	_	_
6	ṭaʿâm	ṭaʿâm	NOUN	_	Case=Nom|Number=Sing|Person=3	11	obl:tmod	_	_
7	yimedi	ye	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	3	conj	_	_
8	ve	ve	CCONJ	_	_	11	cc	_	_
9	ḳanınca	ḳan	VERB	Conv	Polarity=Pos|VerbForm=Conv	10	advcl	_	_
10	uyḳu	uyḳu	NOUN	_	Case=Nom|Number=Sing|Person=3	7	obj	_	_
11	uyımadı	uyu	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	3	conj	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 xcomp	color:blue
1	ol	ol	DET	Demons	Definite=Def|PronType=Art	2	det	_	_
2	gün	gün	NOUN	_	Case=Nom|Number=Sing|Person=3	5	obl:tmod	_	_
3	gice	gice	NOUN	_	Case=Nom|Number=Sing|Person=3	4	xcomp	_	_
4	olınca	ol	VERB	Conv	Aspect=Perf|Polarity=Pos|VerbForm=Conv	5	advcl	_	_
5	gitdiler	git	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 xcomp	color:blue
1	yine	yine	ADV	_	_	3	advmod	_	_
2	aralarında	ara	ADJ	NAdj	Case=Loc|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	3	obl	_	_
3	muṣâlaḥa	muṣâlaḥa	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
4	oldı	ol	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	3	compound:lvc	_	_
5	barışdılar	barış	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	3	conj	_	_
6	ve	ve	CCONJ	_	_	7	cc	_	_
7	görüşdiler	görüş	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	5	conj	_	_
8	ve	ve	CCONJ	_	_	13	cc	_	_
9	mâlik	mâlik	NOUN	_	Case=Nom|Number=Sing|Person=3	10	nmod	_	_
10	ʿanterüñ	ʿanter	PROPN	Pers	Case=Gen|NameType=Prs|Number=Sing|Person=3	11	nmod:poss	_	_
11	ayaġın	ayaḳ	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	12	obj	_	_
12	öpmek	öp	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	13	xcomp	_	_
13	isdedi	isde	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	7	conj	_	_

~~~


