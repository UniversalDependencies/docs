---
layout: base
title:  'Statistics of parataxis in UD_Uzbek-UzUDT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UzUDT: Relations: `parataxis`

This relation is universal.

57 nodes (1%) are attached to their parents as `parataxis`.

56 instances of `parataxis` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.52631578947368.

The following 13 pairs of parts of speech are connected with `parataxis`: <tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt> (28; 49% instances), <tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt> (8; 14% instances), <tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt> (7; 12% instances), <tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt> (4; 7% instances), <tt><a href="uz_uzudt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_uzudt-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="uz_uzudt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_uzudt-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="uz_uzudt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="uz_uzudt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_uzudt-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_uzudt-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="uz_uzudt-pos-NUM.html">NUM</a></tt>-<tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_uzudt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_uzudt-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 parataxis	color:blue
1	ular	u	PRON	P	Case=Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	_
2	seni	sen	NOUN	P	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	3	obj	_	_
3	tashlab	tashla	VERB	V	_	4	advcl	_	_
4	ketmasalar	ket	VERB	V	_	9	parataxis	_	_
5	,	,	PUNCT	Y	_	4	punct	_	_
6	ularga	u	PRON	P	Case=Dat|Number=Plur|Person=3|PronType=Prs	9	obl	_	_
7	mangu	mangu	ADJ	D	_	9	advmod	_	_
8	asiylik	asiylik	NOUN	N	Case=Nom	9	compound	_	_
9	qilasan	qil	VERB	V	Aspect=Hab|Mood=Ind|Number=Sing|Person=2|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	_
10	.	.	PUNCT	Y	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 11 parataxis	color:blue
1	<	<	PUNCT	Y	_	17	punct	_	_
2	<	<	PUNCT	Y	_	17	punct	_	_
3	lekin	lekin	CCONJ	C	_	17	cc	_	_
4	,	,	PUNCT	Y	_	3	punct	_	_
5	bu	bu	PRON	P	Case=Nom|PronType=Dem	6	det	_	_
6	payt	payt	NOUN	N	Case=Nom	11	nsubj	_	_
7	tabiat	tabiat	NOUN	N	Case=Nom	8	compound	_	_
8	dunyosi	dunyo	NOUN	N	_	11	nmod	_	_
9	bilan	bilan	ADP	R	_	8	case	_	_
10	abadiy	abadiy	ADJ	A	_	11	advmod	_	_
11	xo'shlashgan	xo'shlash	NOUN	N	_	17	parataxis	_	_
12	edi	edi	AUX	V	Mood=Cnd|Number=Sing|Person=3	11	aux	_	_
13	,	,	PUNCT	Y	_	12	punct	_	_
14	u	u	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	17	nsubj	_	_
15	yana	yana	ADV	D	_	17	advmod	_	_
16	qaytib	qayt	VERB	V	Aspect=Perf|VerbForm=Conv	17	advcl	_	_
17	kelolmaydi	kel	VERB	V	_	0	root	_	_
18	.	.	PUNCT	Y	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 parataxis	color:blue
1	bir	bir	NUM	M	NumType=Ord	3	compound:redup	_	_
2	–	-	PUNCT	N	_	1	punct	_	_
3	birini	bir	NUM	M	Case=Acc|Number[psor]=Plur,Sing|NumType=Ord|Person[psor]=3	4	obj	_	_
4	itariship	itar	VERB	V	_	9	parataxis	_	_
5	,	,	PUNCT	Y	_	6	punct	_	_
6	qistaship	qista	NOUN	N	_	4	conj	_	_
7	,	,	PUNCT	Y	_	4	punct	_	_
8	qayiqlarga	qayiq	NOUN	N	Case=Acc|Number=Plur	9	obj	_	_
9	oʻrnashishga	oʻrna	NOUN	N	_	11	obl	_	_
10	harakat	harakat	NOUN	N	_	11	compound	_	_
11	qilardi	qil	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
12	.	.	PUNCT	Y	_	11	punct	_	_

~~~


