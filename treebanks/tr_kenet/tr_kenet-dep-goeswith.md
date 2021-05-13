---
layout: base
title:  'Statistics of goeswith in UD_Turkish-Kenet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Kenet: Relations: `goeswith`

This relation is universal.

5 nodes (0%) are attached to their parents as `goeswith`.

5 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `goeswith`: <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="tr_kenet-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 goeswith	color:blue
1	Torununu	torun	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	obj	_	_
2	gizlice	gizlice	ADV	_	_	5	advmod	_	_
3	tavan	tavan	NOUN	_	Case=Nom|Number=Sing|Person=3	5	obl	_	_
4	arasında	ara	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	goeswith	_	_
5	saklamakta	sakla	NOUN	_	Case=Loc|Number=Sing|Person=3	6	advcl	_	_
6	olduğunu	ol	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	ccomp	_	_
7	öğrendiğinde	öğren	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	10	advcl	_	_
8	öfkeden	öfke	NOUN	_	Case=Abl|Number=Sing|Person=3	10	obl	_	_
9	deliye	deli	NOUN	_	Case=Dat|Number=Sing|Person=3	10	compound	_	_
10	dönmüştü	dön	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 goeswith	color:blue
1	Akrabalarıyla	akraba	NOUN	_	Case=Ins|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3	3	obl	_	_
2	kâşaneler	kâşane	NOUN	_	Case=Nom|Number=Plur|Person=3	3	obj	_	_
3	kurarak	kur	ADV	_	_	5	advcl	_	_
4	nasıl	nasıl	ADV	_	PronType=Int	5	advmod	_	_
5	yerleştikleri	yerleş	ADJ	_	_	9	ccomp	_	_
6	hiç	hiç	ADV	_	_	8	nmod	_	_
7	kimsenin	kimse	NOUN	_	Case=Gen|Number=Sing|Person=3	6	goeswith	_	_
8	gözünden	göz	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	obj	_	_
9	kaçmıyordu	kaç	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 goeswith	color:blue
1	Etrafında	etraf	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	13	obl	_	_
2	,	,	PUNCT	_	_	13	punct	_	_
3	bir	bir	DET	_	Definite=Ind	4	det	_	_
4	kolayını	kolay	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	obj	_	_
5	bulup	bul	ADV	_	_	7	advcl	_	_
6	dışarıya	dışarı	NOUN	_	Case=Dat|Number=Sing|Person=3	7	obl	_	_
7	sızanlardan	sız	NOUN	_	Case=Abl|Number=Plur|Person=3	9	acl	_	_
8	birkaç	birkaç	DET	_	Definite=Ind	9	det	_	_
9	kişi	kişi	NOUN	_	Case=Nom|Number=Sing|Person=3	13	nsubj	_	_
10	ha	ha	CCONJ	_	_	13	advmod	_	_
11	bire	bir	NOUN	_	Case=Dat|Number=Sing|Person=3	10	goeswith	_	_
12	ellerinden	el	NOUN	_	Case=Abl|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3	13	obl	_	_
13	öpüyor	öp	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
14	.	.	PUNCT	_	_	13	punct	_	_

~~~


