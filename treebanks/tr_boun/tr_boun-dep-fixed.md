---
layout: base
title:  'Statistics of fixed in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `fixed`

This relation is universal.

9 nodes (0%) are attached to their parents as `fixed`.

9 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.11111111111111.

The following 5 pairs of parts of speech are connected with `fixed`: <tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (5; 56% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-ADP.html">ADP</a></tt> (1; 11% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (1; 11% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (1; 11% instances), <tt><a href="tr_boun-pos-DET.html">DET</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 fixed	color:blue
1	Kâtip	Kâtip	VERB	Verb	Case=Nom|Number=Sing|Person=3	10	nsubj	_	_
2	Lütfi'nin	Lütfi	NOUN	Noun	Case=Gen|Number=Sing|Person=3	1	flat	_	_
3	bugüne	bugün	NOUN	Noun	Case=Dat|Number=Sing|Person=3	10	obl	_	_
4	kadar	kadar	ADP	PCDat	_	3	case	_	_
5	bir	bir	DET	ANum	NumType=Card	6	det	_	_
6	tutuklu	tutuklu	NOUN	Noun	Case=Nom|Number=Sing|Person=3	10	obl	_	_
7	ya	ya	CCONJ	Conj	_	9	compound	_	_
8	da	da	CCONJ	Conj	_	7	fixed	_	_
9	hükümlüye	hükümlü	NOUN	Noun	Case=Dat|Number=Sing|Person=3	6	conj	_	_
10	tokat	Tokat	NOUN	Noun	Case=Nom|Number=Sing|Person=3	12	acl	_	_
11	attığı	at	VERB	Verb	Aspect=Perf|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	10	compound:lvc	_	_
12	duyulmamış	duy	VERB	Verb	Evident=Nfh|Number=Sing|Person=3|Polarity=Neg|Tense=Past|Voice=Pass	0	root	_	SpaceAfter=No
13	,	,	PUNCT	Punc	_	19	punct	_	_
14	ama	ama	CCONJ	Conj	_	19	cc	_	_
15	bu	bu	DET	Det	_	16	det	_	_
16	kez	kez	NOUN	Noun	Case=Nom|Number=Sing|Person=3	19	obl	_	_
17	atmak	at	VERB	Verb	Case=Nom|Polarity=Pos	19	advcl	_	_
18	için	için	ADP	PCNom	_	17	case	_	_
19	fırsat	fırsat	NOUN	Noun	Case=Nom|Number=Sing|Person=3	12	conj	_	_
20	kolluyor	kolla	VERB	Verb	Aspect=Prog|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	19	compound	_	SpaceAfter=No
21	.	.	PUNCT	Punc	_	19	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Tabi	tabi	ADV	Noun	Case=Nom|Number=Sing|Person=3	7	advmod	_	_
2	ki	ki	ADP	Rel	_	1	fixed	_	_
3	benim	ben	PRON	Pers	Case=Gen|Number=Sing|Person=1	4	nmod:poss	_	_
4	amacım	amaç	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	7	nsubj	_	_
5	kimsenin	kimse	NOUN	Noun	Case=Gen|Number=Sing|Person=3	6	nsubj	_	_
6	yapmadığını	yap	VERB	Verb	Aspect=Perf|Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Neg|Tense=Past|VerbForm=Part	7	ccomp	_	_
7	anlatmak	anlat	VERB	Verb	Case=Nom|Polarity=Pos	0	root	_	_
8	değil	değil	AUX	Neg	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	7	aux	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	7	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 fixed	color:blue
1	Ne	ne	ADV	Ques	Case=Nom|Number=Sing|Person=3	10	advmod	_	_
2	var	var	VERB	Verb	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres	1	fixed	_	_
3	ki	ki	CCONJ	Conj	_	1	fixed	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	10	punct	_	_
5	ünü	ün	NOUN	Noun	Case=Acc|Number=Sing|Person=3	10	nsubj	_	_
6	dünyayı	Dünya	NOUN	Noun	Case=Acc|Number=Sing|Person=3	7	obj	_	_
7	tuttuktan	tut	NOUN	Noun	Aspect=Perf|Case=Abl|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part	10	advcl	_	_
8	sonra	sonra	ADP	PCAbl	_	7	case	_	_
9	anca	anca	ADV	Adverb	_	10	advmod	_	_
10	çıkPotmiştir	çık	VERB	Verb	Evident=Nfh|Mood=Pot|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	_
11	yurtdışına	yurtdışı	NOUN	Noun	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	10	obl	_	SpaceAfter=No
12	.	.	PUNCT	Punc	_	10	punct	_	SpacesAfter=\n

~~~


