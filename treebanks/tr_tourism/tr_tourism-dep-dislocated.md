---
layout: base
title:  'Statistics of dislocated in UD_Turkish-Tourism'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Tourism: Relations: `dislocated`

This relation is universal.

5 nodes (0%) are attached to their parents as `dislocated`.

4 instances of `dislocated` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `dislocated`: <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-SCONJ.html">SCONJ</a></tt> (2; 40% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-ADV.html">ADV</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dislocated	color:blue
1	TAVSİYE	tavsiye	NOUN	_	Case=Nom|Number=Sing|Person=3	2	compound	_	_
2	EDERİM	et	VERB	_	Aspect=Hab|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
3	TAVSİYE	tavsiye	NOUN	_	Case=Nom|Number=Sing|Person=3	2	dislocated	_	_
4	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 dislocated	color:blue
1	2017	2017	NUM	_	NumType=Card	2	nummod	_	_
2	YILI	yıl	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	nmod	_	_
3	İÇİN	için	ADP	_	_	2	case	_	_
4	DÜŞÜNDÜĞÜM	düşün	ADJ	_	_	6	acl	_	_
5	BİR	bir	DET	_	Definite=Ind	6	det	_	_
6	SEYAHAT	seyahat	NOUN	_	Case=Nom|Number=Sing|Person=3	7	nmod	_	_
7	PLANLAMAM	planla	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	8	nmod	_	_
8	YOK	yok	ADJ	_	_	12	parataxis	_	_
9	OLURSA	ol	VERB	_	Aspect=Hab|Mood=Cnd|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	12	advcl	_	_
10	EĞER	eğer	SCONJ	_	_	9	dislocated	_	_
11	DEĞERLENDİRMEYE	değerlendir	NOUN	_	Case=Dat|Number=Sing|Person=3	12	obj	_	_
12	ÇALIŞIRIM	çalış	VERB	_	Aspect=Hab|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
13	.	.	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 dislocated	color:blue
1	YEMEKLER	yemek	NOUN	_	Case=Nom|Number=Plur|Person=3	2	list	_	_
2	ANİMASYON	animasyon	NOUN	_	Case=Nom|Number=Sing|Person=3	5	list	_	_
3	ÇALIŞANLARIN	çalışan	NOUN	_	Case=Gen|Number=Plur|Person=3	5	nmod	_	_
4	GÜLER	güler	NOUN	_	Case=Nom|Number=Sing|Person=3	5	nmod	_	_
5	YÜZLÜLÜĞÜ	yüz	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	list	_	_
6	VE	ve	CCONJ	_	_	5	cc	_	_
7	YARDIMSEVERLİĞİ	yardımsever	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	list	_	_
8	ODALARIN	oda	NOUN	_	Case=Gen|Number=Plur|Person=3	9	nmod	_	_
9	TEMİZLENMESİ	temizle	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	14	obl	_	_
10	KISACASI	kısacası	ADV	_	_	14	advmod	_	_
11	ÇOK	çok	ADV	_	_	12	advmod	_	_
12	MEMNUN	memnun	ADJ	_	_	13	compound	_	_
13	KALARAK	kal	ADV	_	_	14	dislocated	_	_
14	AYRILDIK	ayrıl	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
15	.	.	PUNCT	_	_	14	punct	_	_

~~~


