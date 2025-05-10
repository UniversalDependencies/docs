---
layout: base
title:  'Statistics of compound in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="ota_dudu-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="ota_dudu-dep-compound-redup.html">compound:redup</a></tt>.

86 nodes (1%) are attached to their parents as `compound`.

84 instances of `compound` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.02325581395349.

The following 8 pairs of parts of speech are connected with `compound`: <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (64; 74% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (14; 16% instances), <tt><a href="ota_dudu-pos-NUM.html">NUM</a></tt>-<tt><a href="ota_dudu-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_dudu-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	ḫalḳuñ	ḫalḳ	NOUN	_	Case=Gen|Number=Sing|Person=3	2	nmod:poss	_	_
2	izdiḥâmına	izdiḥâm	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	obl	_	_
3	binâ’en	binâ’en	ADP	PCDat	_	2	case	_	_
4	bekke	bekke	PROPN	Place	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing|Person=3	6	nsubj:pass	_	_
5	taʿbîr	taʿbîr	NOUN	_	Case=Nom|Number=Sing|Person=3	6	compound	_	_
6	ḳılınmışdur	ḳıl	VERB	_	Evident=Nfh|Number=Sing|Person=3|Polarity=Pos|Tense=Past|Voice=Pass	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	begler	beg	NOUN	_	Case=Nom|Number=Plur|Person=3	3	nsubj	_	_
2	ḫoş	ḫoş	ADJ	Adj	_	3	compound	_	_
3	kaluñ	kal	VERB	_	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|VerbForm=Fin	4	ccomp	_	_
4	dedi	de	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 28 compound	color:blue
1	baʿdehu	baʿdehu	ADV	_	_	34	advmod	_	_
2	mâh-ı	mâh	NOUN	_	Case=Nom|Number=Sing|Person=3	5	nmod	_	_
3	recebüñ	receb	NOUN	_	Case=Gen|Number=Sing|Person=3	2	nmod:poss	_	_
4	ṭoḳuzıncı	ṭoḳuz	NUM	ANum	NumType=Ord	5	nummod	_	_
5	güni	gün	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	34	obl:tmod	_	_
6	ki	ki	SCONJ	_	_	7	mark	_	_
7	yevm-i	yevm	NOUN	_	Case=Nom|Number=Sing|Person=3	5	appos	_	_
8	sebt	sebt	NOUN	_	Case=Nom|Number=Sing|Person=3	7	nmod:poss	_	_
9	idi	y	AUX	Overt	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	7	cop	_	_
10	ḥaleb	ḥaleb	PROPN	Place	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing|Person=3	11	nmod	_	_
11	beglerbegisi	beglerbegi	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	16	nmod	_	_
12	aḥmed	aḥmed	PROPN	Pers	Case=Nom|Gender=Masc|NameType=Prs|Number=Sing|Person=3	11	appos	_	_
13	paşanuñ	paşa	NOUN	_	Case=Gen|Number=Sing|Person=3	12	flat	_	_
14	ʿos̱mân	ʿos̱mân	PROPN	Pers	Case=Nom|Gender=Masc|NameType=Prs|Number=Sing|Person=3	15	nmod	_	_
15	nâm	nâm	NOUN	_	Case=Nom|Number=Sing|Person=3	16	nmod	_	_
16	vekîl-i	vekîl	NOUN	_	Case=Nom|Number=Sing|Person=3	23	nsubj	_	_
17	ḫarcı	ḫarc	NOUN	_	Case=Acc|Number=Sing|Person=3	16	nmod:poss	_	_
18	ḳırḳ	ḳırḳ	NUM	ANum	NumType=Card	19	compound	_	_
19	elli	elli	NUM	ANum	NumType=Card	20	nummod	_	_
20	miḳdârı	miḳdâr	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	21	nmod	_	_
21	âdemleriyle	âdem	NOUN	_	Case=Ins|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	23	obl	_	_
22	azıḳlanmaġa	azıḳlan	VERB	Vnoun	Case=Dat|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	23	obl	_	_
23	giderken	git	VERB	_	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Conv	34	advcl	_	_
24	sâbıḳ	sâbıḳ	ADJ	NAdj	_	26	nmod	_	_
25	uʾẕ-ẕikr	ẕikr	NOUN	_	Case=Nom|Number=Sing|Person=3	24	nmod	_	_
26	ḳazaḳ	ḳazaḳ	PROPN	Pers	Case=Nom|NameType=Prs|Number=Sing|Person=3	31	nmod	_	_
27	ḫân	ḫân	NOUN	_	Case=Nom|Number=Sing|Person=3	26	flat	_	_
28	üç	üç	NUM	ANum	NumType=Card	29	compound	_	_
29	dört	dört	NUM	ANum	NumType=Card	31	nummod	_	_
30	yüz	yüz	NUM	ANum	NumType=Card	29	flat	_	_
31	güm-râhân	güm-râh	ADJ	NAdj	Case=Nom|Number=Plur|Person=3	34	obl	_	_
32	ile	ile	CCONJ	_	_	31	case	_	_
33	muḳâbil	muḳâbil	ADJ	_	Case=Nom|Number=Sing|Person=3	34	compound:lvc	_	_
34	oldı	ol	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_

~~~


