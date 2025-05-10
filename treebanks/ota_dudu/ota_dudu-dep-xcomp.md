---
layout: base
title:  'Statistics of xcomp in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `xcomp`

This relation is universal.

31 nodes (0%) are attached to their parents as `xcomp`.

30 instances of `xcomp` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83870967741935.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (21; 68% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (5; 16% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 xcomp	color:blue
1	meger	meger	ADV	_	_	11	advmod	_	_
2	kim	kim	SCONJ	_	_	1	mark	_	_
3	eḥibbâ-yı	ḥabîb	NOUN	_	Case=Nom|Number=Plur|Person=3	6	nmod	_	_
4	şeyḫden	şeyḫ	NOUN	_	Case=Abl|Number=Sing|Person=3	3	nmod:poss	_	_
5	baʿżı	baʿżı	DET	Det	Definite=Ind|PronType=Art	6	det	_	_
6	kimesneyi	kimesne	NOUN	_	Case=Acc|Number=Sing|Person=3	8	obj	_	_
7	żiyâfet	żiyâfet	NOUN	_	Case=Nom|Number=Sing|Person=3	8	compound:lvc	_	_
8	itmek	it	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	9	xcomp	_	_
9	isteyüp	iste	VERB	Conv	Polarity=Pos|VerbForm=Conv	11	advcl	_	_
10	terk	terk	NOUN	_	Case=Nom|Number=Sing|Person=3	11	compound:lvc	_	_
11	eylemişler	eyle	VERB	_	Aspect=Hab|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
12	imiş	y	AUX	Overt	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	11	cop	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 xcomp	color:blue
1	hemân	hemân	CCONJ	_	_	4	cc	_	_
2	islâm-ı	islâm	PROPN	_	Case=Nom|Number=Sing|Person=3	4	obl	_	_
3	mecâzîden	mecâzî	ADJ	Adj	Case=Abl	2	amod	_	_
4	çıḳmaḳ	çıḳ	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	6	xcomp	_	_
5	küfr-i	küfr	NOUN	_	Case=Gen|Number=Sing|Person=3	7	nmod	_	_
6	ḥaḳîkîye	ḥaḳîkî	ADJ	NAdj	Case=Dat|Number=Sing|Person=3	5	amod	_	_
7	girmek	gir	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	0	root	_	_
8	dür	y	AUX	Zero	Aspect=Perf|Number=Sing|Person=3|Tense=Pres	7	cop	_	_

~~~


