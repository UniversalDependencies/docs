---
layout: base
title:  'Statistics of advmod in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: <tt><a href="ota_dudu-dep-advmod-emph.html">advmod:emph</a></tt>.

931 nodes (4%) are attached to their parents as `advmod`.

912 instances of `advmod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.72287862513426.

The following 14 pairs of parts of speech are connected with `advmod`: <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt> (583; 63% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt> (223; 24% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt> (87; 9% instances), <tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt> (12; 1% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-CCONJ.html">CCONJ</a></tt> (5; 1% instances), <tt><a href="ota_dudu-pos-PRON.html">PRON</a></tt>-<tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-CCONJ.html">CCONJ</a></tt> (5; 1% instances), <tt><a href="ota_dudu-pos-NUM.html">NUM</a></tt>-<tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="ota_dudu-pos-AUX.html">AUX</a></tt>-<tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ota_dudu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	behrām	behrām	PROPN	Pers	Case=Nom|NameType=Prs|Number=Sing|Person=3	5	nsubj	_	_
2	bunı	bu	PRON	Demons	Case=Acc|Number=Sing|Person=3|PronType=Dem	3	obj	_	_
3	alımaduġına	al	VERB	Ptcp	Aspect=Perf|Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Neg|Tense=Past|VerbForm=Part	5	ccomp	_	_
4	ḳatı	ḳatı	ADV	_	_	5	advmod	_	_
5	incindi	incin	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
6	ve	ve	CCONJ	_	_	7	cc	_	_
7	tasalandı	tasalan	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	5	conj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod	color:blue
1	ġayrı	ġayrı	ADV	_	_	2	advmod	_	_
2	fikr	fikr	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
3	itmesün	it	VERB	_	Mood=Imp|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	2	compound:lvc	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod	color:blue
1	yine	yine	ADV	_	_	3	advmod	_	_
2	behrāmıla	behrām	PROPN	Pers	Case=Ins|NameType=Prs|Number=Sing|Person=3	3	obl	_	_
3	muḳābil	muḳābil	ADJ	Adj	_	0	root	_	_
4	oldı	ol	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	3	compound:lvc	_	_
5	ve	ve	CCONJ	_	_	9	cc	_	_
6	iki	iki	NUM	ANum	NumType=Card	7	nummod	_	_
7	ṭarafdan	ṭaraf	NOUN	_	Case=Abl|Number=Sing|Person=3	9	obl	_	_
8	ṣaf	ṣaf	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
9	baġlandı	baġla	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Pass	3	conj	_	_

~~~


