---
layout: base
title:  'Statistics of xcomp in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `xcomp`

This relation is universal.

433 nodes (1%) are attached to their parents as `xcomp`.

433 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22170900692841.

The following 5 pairs of parts of speech are connected with `xcomp`: <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (416; 96% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (8; 2% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (7; 2% instances), <tt><a href="tr_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 xcomp	color:blue
1	Denver'den	denver	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	San	san	PROPN	_	Case=Nom|Number=Sing	8	obl	_	_
3	Francisco'ya	francisco	PROPN	_	Case=Dat|Number=Sing	2	flat	_	_
4	en	en	ADV	_	Degree=Sup	5	advmod	_	_
5	az	az	ADJ	_	_	6	amod	_	_
6	bir	bir	NUM	_	NumType=Card	7	nummod	_	_
7	durakla	durak	NOUN	_	Case=Ins|Number=Sing	8	obl	_	_
8	uçmak	uç	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	9	xcomp	_	_
9	istiyorum	iste	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 xcomp	color:blue
1	Denver'de	denver	PROPN	_	Case=Loc|Number=Sing	2	obl	_	_
2	yaşıyorum	yaşa	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ve	ve	CCONJ	_	_	7	cc	_	_
4	Pittsburgh'a	pittsburgh	PROPN	_	Case=Dat|Number=Sing	5	obl	_	_
5	seyahat	seyahat	NOUN	_	Case=Nom|Number=Sing	7	xcomp	_	_
6	etmek	et	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	5	compound	_	_
7	istiyorum	iste	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	conj	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 xcomp	color:blue
1	Baltimore'den	baltimore	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Boston'a	boston	PROPN	_	Case=Dat|Number=Sing	3	obl	_	_
3	gitmek	git	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	7	xcomp	_	_
4	için	için	ADP	_	_	3	mark	_	_
5	günün	gün	NOUN	_	Case=Gen|Number=Sing	7	nmod:poss	_	_
6	son	son	ADJ	_	_	7	amod	_	_
7	uçuşu	uçuş	NOUN	_	Case=Acc|Number=Sing	8	nsubj	_	_
8	nedir	ne	X	_	Number=Sing	0	root	_	_

~~~


