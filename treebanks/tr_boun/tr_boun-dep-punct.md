---
layout: base
title:  'Statistics of punct in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `punct`

This relation is universal.

20137 nodes (16%) are attached to their parents as `punct`.

12046 instances of `punct` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.01743060038735.

The following 14 pairs of parts of speech are connected with `punct`: <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-PUNCT.html">PUNCT</a></tt> (11378; 57% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-PUNCT.html">PUNCT</a></tt> (5437; 27% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-PUNCT.html">PUNCT</a></tt> (1678; 8% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-PUNCT.html">PUNCT</a></tt> (688; 3% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-PUNCT.html">PUNCT</a></tt> (268; 1% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-PUNCT.html">PUNCT</a></tt> (242; 1% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-PUNCT.html">PUNCT</a></tt> (219; 1% instances), <tt><a href="tr_boun-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_boun-pos-PUNCT.html">PUNCT</a></tt> (65; 0% instances), <tt><a href="tr_boun-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="tr_boun-pos-PUNCT.html">PUNCT</a></tt> (48; 0% instances), <tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_boun-pos-PUNCT.html">PUNCT</a></tt> (44; 0% instances), <tt><a href="tr_boun-pos-INTJ.html">INTJ</a></tt>-<tt><a href="tr_boun-pos-PUNCT.html">PUNCT</a></tt> (27; 0% instances), <tt><a href="tr_boun-pos-DET.html">DET</a></tt>-<tt><a href="tr_boun-pos-PUNCT.html">PUNCT</a></tt> (21; 0% instances), <tt><a href="tr_boun-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_boun-pos-PUNCT.html">PUNCT</a></tt> (18; 0% instances), <tt><a href="tr_boun-pos-X.html">X</a></tt>-<tt><a href="tr_boun-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 punct	color:blue
1	Fakülteyi	fakülte	NOUN	Noun	Case=Acc|Number=Sing|Person=3	2	obj	_	_
2	bitirenler	bitir	VERB	Verb	Case=Nom|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Part	6	csubj	_	_
3	en	en	ADV	Adverb	_	4	advmod	_	_
4	uçtan	uç	VERB	Verb	Case=Abl|Number=Sing|Person=3	6	obl	_	_
5	göreve	görev	NOUN	Noun	Case=Dat|Number=Sing|Person=3	6	obj	_	_
6	başlıyorlarmış	başla	VERB	Verb	Aspect=Prog|Evident=Nfh|Number=Plur|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	6	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 punct	color:blue
1	Saddam	Saddam	PROPN	Prop	Case=Nom|Number=Sing|Person=3	10	nsubj	_	_
2	Hüseyin	Hüseyin	PROPN	Prop	Case=Nom|Number=Sing|Person=3	1	flat	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	10	punct	_	_
4	42	42	NUM	ANum	NumType=Card	5	nummod	_	_
5	yaşında	yaş	ADJ	NAdj	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	10	advcl	_	_
6	iken	i	AUX	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Part	5	cop	_	_
7	bir	bir	DET	ANum	_	8	det	_	_
8	darbeyle	darbe	NOUN	Noun	Case=Ins|Number=Sing|Person=3	10	obl	_	_
9	iktidara	iktidar	NOUN	Noun	Case=Dat|Number=Sing|Person=3	10	obj	_	_
10	el	el	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
11	koydu	koy	VERB	Verb	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	10	compound	_	SpaceAfter=No
12	.	.	PUNCT	Punc	_	10	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 punct	color:blue
1	-	-	PUNCT	Punc	_	5	punct	_	_
2	Evet	evet	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	discourse	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	2	punct	_	_
4	gayet	gayet	ADV	Adverb	_	5	amod	_	_
5	basit	basit	ADJ	Adj	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	SpacesAfter=\n

~~~


