---
layout: base
title:  'Statistics of csubj in UD_Turkish-Kenet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Kenet: Relations: `csubj`

This relation is universal.

407 nodes (0%) are attached to their parents as `csubj`.

392 instances of `csubj` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.2948402948403.

The following 18 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (188; 46% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (73; 18% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (62; 15% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (39; 10% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (11; 3% instances), <tt><a href="tr_kenet-pos-X.html">X</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (8; 2% instances), <tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-X.html">X</a></tt>-<tt><a href="tr_kenet-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 csubj	color:blue
1	Oyunun	oyun	NOUN	_	Case=Gen|Number=Sing	3	nsubj	_	_
2	afişte	afiş	NOUN	_	Case=Loc|Number=Sing	3	nmod	_	_
3	kalması	kalma	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obl	_	_
4	için	için	ADP	_	_	3	case	_	_
5	başarıyla	başarı	NOUN	_	Case=Ins|Number=Sing	6	obl	_	_
6	oynanması	oyna	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|VerbForm=Vnoun|Voice=Pass	7	csubj	_	_
7	gerekir	gerek	VERB	_	Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 csubj	color:blue
1	Burada	burada	ADV	_	_	3	advmod	_	_
2	sigara	sigara	NOUN	_	Case=Nom|Number=Sing	3	compound	_	_
3	içmek	iç	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	8	csubj	_	_
4	ve	ve	CCONJ	_	_	6	cc	_	_
5	lakırtıya	lakırtı	NOUN	_	Case=Dat|Number=Sing	6	compound	_	_
6	karışmak	karış	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	3	conj	_	_
7	onların	o	PRON	_	Case=Gen|Number=Plur|Person=3|PronType=Dem	8	nmod	_	_
8	haddi	had	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	_
9	değildi	değil	AUX	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Neg|Tense=Past	8	aux	_	_
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 csubj	color:blue
1	Lisan	lisan	NOUN	_	Case=Nom|Number=Sing	2	nmod	_	_
2	kursunu	kurs	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obj	_	_
3	filan	filan	ADJ	_	_	2	advmod	_	_
4	alıp	al	VERB	_	Polarity=Pos|VerbForm=Conv	5	compound	_	_
5	sattığı	sat	VERB	_	Aspect=Perf|Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Vnoun	6	csubj	_	_
6	yokmuş	yok	ADJ	_	Aspect=Perf|Number=Sing|Person=3|Polarity=Neg	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


