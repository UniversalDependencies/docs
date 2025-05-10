---
layout: base
title:  'Statistics of parataxis in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `parataxis`

This relation is universal.

6 nodes (0%) are attached to their parents as `parataxis`.

4 instances of `parataxis` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.16666666666667.

The following 4 pairs of parts of speech are connected with `parataxis`: <tt><a href="ota_dudu-pos-NUM.html">NUM</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (3; 50% instances), <tt><a href="ota_dudu-pos-PRON.html">PRON</a></tt>-<tt><a href="ota_dudu-pos-PROPN.html">PROPN</a></tt> (1; 17% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (1; 17% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 parataxis	color:blue
1	üçinci	üç	NUM	ANum	NumType=Ord	0	root	_	_
2	her	her	DET	_	Definite=Def|PronType=Art	4	det	_	_
3	ḳanġı	ḳanġı	DET	Adj	_	4	det	_	_
4	evde	ev	NOUN	_	Case=Loc|Number=Sing|Person=3	7	obl	_	_
5	ki	ki	SCONJ	_	_	4	mark	_	_
6	sâkin	sâkin	ADJ	Adj	_	7	compound:lvc	_	_
7	olur	ol	VERB	Ptcp	Aspect=Hab|Polarity=Pos|VerbForm=Part	1	parataxis	_	_
8	dı	y	AUX	Zero	Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	7	cop	_	_
9	kendülerden	kendü	PRON	Reflex	Case=Abl|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3|PronType=Prs|Reflex=Yes	18	obl	_	_
10	ṣoñra	ṣoñra	ADP	PCAbl	_	9	case	_	_
11	ol	ol	DET	Demons	Definite=Def|PronType=Art	12	det	_	_
12	ḫâne	ḫâne	NOUN	_	Case=Nom|Number=Sing|Person=3	18	nsubj	_	_
13	ḳırḳ	ḳırḳ	NUM	ANum	NumType=Card	14	nummod	_	_
14	yıla	yıl	NOUN	_	Case=Dat|Number=Sing|Person=3	18	obl:tmod	_	_
15	dek	dek	ADP	PCDat	_	14	case	_	_
16	misk	misk	NOUN	_	Case=Nom|Number=Sing|Person=3	18	obl	_	_
17	gibi	gibi	ADP	PCNom	_	16	case	_	_
18	ḳoḳardı	ḳoḳ	VERB	_	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	7	conj	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 parataxis	color:blue
1	ʿablenüñ	ʿable	PROPN	Pers	Case=Gen|NameType=Prs|Number=Sing|Person=3	2	nmod:poss	_	_
2	anasına	ana	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	obl	_	_
3	eyitdi	eyit	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
4	yâ	yâ	INTJ	_	_	5	discourse	_	_
5	sittâh	sittâh	PROPN	Pers	Case=Nom|NameType=Prs|Number=Sing|Person=3	6	parataxis	_	_
6	nedür	ne	PRON	Ques	Case=Nom|Number=Sing|Person=3|PronType=Int	3	ccomp	_	nullcop=3s
7	ḥâlüñ	ḥâl	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	obl	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 parataxis	color:blue
1	ṣıġırlar	ṣıġır	NOUN	_	Case=Nom|Number=Plur|Person=3	2	parataxis	_	_
2	ürkdi	ürk	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
3	andan	o	PRON	Demons	Case=Abl|Number=Sing|Person=3|PronType=Dem	5	obl	_	_
4	müteferriḳ	müteferriḳ	ADJ	Adj	_	5	compound:lvc	_	DerivedFrom=teferruḳ
5	oldı	ol	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	2	conj	_	_

~~~


