---
layout: base
title:  'Statistics of csubj in UD_Turkish-Kenet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Kenet: Relations: `csubj`

This relation is universal.

399 nodes (0%) are attached to their parents as `csubj`.

385 instances of `csubj` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.28070175438596.

The following 22 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (211; 53% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (55; 14% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (38; 10% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (37; 9% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (9; 2% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (8; 2% instances), <tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (8; 2% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 csubj	color:blue
1	Oyunun	oyun	NOUN	_	Case=Gen|Number=Sing|Person=3	3	nsubj	_	_
2	afişte	afiş	NOUN	_	Case=Loc|Number=Sing|Person=3	3	obl	_	_
3	kalması	kal	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	obl	_	_
4	için	için	ADP	_	_	3	case	_	_
5	başarıyla	başarı	NOUN	_	Case=Ins|Number=Sing|Person=3	6	obl	_	_
6	oynanması	oyna	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	csubj	_	_
7	gerekir	gerek	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 csubj	color:blue
1	Burada	burada	ADV	_	_	3	advmod	_	_
2	sigara	sigara	NOUN	_	Case=Nom|Number=Sing|Person=3	3	compound	_	_
3	içmek	iç	NOUN	_	Case=Nom|Number=Sing|Person=3	8	csubj	_	_
4	ve	ve	CCONJ	_	_	6	cc	_	_
5	lakırtıya	lakırtı	NOUN	_	Case=Dat|Number=Sing|Person=3	6	compound	_	_
6	karışmak	karış	NOUN	_	Case=Nom|Number=Sing|Person=3	3	conj	_	_
7	onların	o	PRON	_	PronType=Dem	8	nmod	_	_
8	haddi	had	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	_
9	değildi	değil	AUX	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	aux	_	_
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 csubj	color:blue
1	Yalnız	yalnız	ADV	_	_	10	advmod	_	_
2	ortada	orta	NOUN	_	Case=Loc|Number=Sing|Person=3	4	obl	_	_
3	tef	tef	NOUN	_	Case=Nom|Number=Sing|Person=3	4	obj	_	_
4	çalan	çal	ADJ	_	_	10	csubj	_	_
5	,	,	PUNCT	_	_	6	punct	_	_
6	bunların	bu	PRON	_	PronType=Dem	7	nmod	_	_
7	arasına	ara	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	10	obl	_	_
8	kaza	kaza	NOUN	_	Case=Nom|Number=Sing|Person=3	10	obl	_	_
9	ile	ile	ADP	_	_	8	case	_	_
10	düşmüş	düş	VERB	_	Aspect=Perf|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	_
11	gibi	gibi	ADP	_	_	10	case	_	_
12	.	.	PUNCT	_	_	10	punct	_	_

~~~


