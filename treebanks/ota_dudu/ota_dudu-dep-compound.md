---
layout: base
title:  'Statistics of compound in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="ota_dudu-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="ota_dudu-dep-compound-redup.html">compound:redup</a></tt>.

138 nodes (1%) are attached to their parents as `compound`.

134 instances of `compound` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05797101449275.

The following 5 pairs of parts of speech are connected with `compound`: <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (120; 87% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (14; 10% instances), <tt><a href="ota_dudu-pos-NUM.html">NUM</a></tt>-<tt><a href="ota_dudu-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_dudu-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound	color:blue
1	gelip	gel	VERB	Conv	Polarity=Pos|VerbForm=Conv	4	advcl	_	_
2	melik	melik	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nmod	_	_
3	züheyre	züheyr	PROPN	Pers	Case=Dat|Gender=Masc|NameType=Prs|Number=Sing|Person=3	4	obl	_	_
4	ḫaber	ḫaber	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
5	virdiler	vir	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	4	compound	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	tażarruʿlar	tażarruʿ	NOUN	_	Case=Nom|Number=Plur|Person=3	2	nsubj	_	_
2	ḳılup	ḳıl	VERB	Conv	Polarity=Pos|VerbForm=Conv	4	advcl	_	_
3	oldı	ol	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	4	compound	_	_
4	peşīmān	peşīmān	ADJ	Adj	_	0	root	_	_
5	pes	pes	ADV	_	_	6	advmod	_	_
6	āzād	āzād	ADJ	Adj	_	4	conj	_	_
7	eyledi	eyle	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	6	compound:lvc	_	_
8	ol	ol	DET	Demons	Definite=Def|PronType=Art	10	det	_	_
9	kān-ı	kān	NOUN	_	Case=Nom|Number=Sing|Person=3	6	obj	_	_
10	iḥsān	iḥsān	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nmod:poss	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 28 compound	color:blue
1	baʿdehu	baʿdehu	ADV	_	_	33	advmod	_	_
2	māh-ı	māh	NOUN	_	Case=Nom|Number=Sing|Person=3	5	nmod	_	_
3	recebüñ	receb	NOUN	_	Case=Gen|Number=Sing|Person=3	2	nmod:poss	_	_
4	ṭoḳuzıncı	ṭoḳuz	NUM	ANum	NumType=Ord	5	nummod	_	_
5	güni	gün	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	33	obl:tmod	_	_
6	ki	ki	SCONJ	_	_	7	mark	_	_
7	yevm-i	yevm	NOUN	_	Case=Nom|Number=Sing|Person=3	5	appos	_	_
8	sebt	sebt	NOUN	_	Case=Nom|Number=Sing|Person=3	7	nmod:poss	_	_
9	idi	y	AUX	Overt	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	7	cop	_	_
10	ḥaleb	ḥaleb	PROPN	Place	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing|Person=3	11	nmod	_	_
11	beglerbegisi	beglerbegi	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	12	nmod	_	_
12	aḥmed	aḥmed	PROPN	Pers	Case=Nom|Gender=Masc|NameType=Prs|Number=Sing|Person=3	16	nmod	_	_
13	paşanuñ	paşa	NOUN	_	Case=Gen|Number=Sing|Person=3	12	flat	_	_
14	ʿos̱mān	ʿos̱mān	PROPN	Pers	Case=Nom|Gender=Masc|NameType=Prs|Number=Sing|Person=3	15	nmod	_	_
15	nām	nām	NOUN	_	Case=Nom|Number=Sing|Person=3	16	nmod	_	_
16	vekīl-i	vekīl	NOUN	_	Case=Nom|Number=Sing|Person=3	23	nsubj	_	_
17	ḫarcı	ḫarc	NOUN	_	Case=Acc|Number=Sing|Person=3	16	nmod:poss	_	_
18	ḳırḳ	ḳırḳ	NUM	ANum	NumType=Card	19	compound	_	_
19	elli	elli	NUM	ANum	NumType=Card	20	nummod	_	_
20	miḳdārı	miḳdār	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	21	nmod	_	_
21	ādemleriyle	ādem	NOUN	_	Case=Ins|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	23	obl	_	_
22	azıḳlanmaġa	azıḳlan	VERB	Vnoun	Case=Dat|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	23	obl	_	_
23	giderken	git	VERB	Conv	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Conv	33	advcl	_	_
24	sābıḳ	sābıḳ	ADJ	NAdj	_	26	nmod	_	_
25	uʾẕ-ẕikr	ẕikr	NOUN	_	Case=Nom|Number=Sing|Person=3	24	nmod	_	_
26	ḳazaḳ	ḳazaḳ	PROPN	Pers	Case=Nom|NameType=Prs|Number=Sing|Person=3	31	nmod	_	_
27	ḫān	ḫān	NOUN	_	Case=Nom|Number=Sing|Person=3	26	flat	_	_
28	üç	üç	NUM	ANum	NumType=Card	29	compound	_	_
29	dört	dört	NUM	ANum	NumType=Card	31	nummod	_	_
30	yüz	yüz	NUM	ANum	NumType=Card	29	flat	_	_
31	güm-rāhān	güm-rāh	ADJ	NAdj	Case=Nom|Number=Plur|Person=3	33	obl	_	_
32	ile	ile	CCONJ	_	_	31	case	_	_
33	muḳābil	muḳābil	ADJ	Adj	Case=Nom|Number=Sing|Person=3	0	root	_	_
34	oldı	ol	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	33	compound:lvc	_	_

~~~


