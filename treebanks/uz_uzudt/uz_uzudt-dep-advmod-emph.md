---
layout: base
title:  'Statistics of advmod:emph in UD_Uzbek-UzUDT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UzUDT: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="uz_uzudt-dep-advmod.html">advmod</a></tt>.

6 nodes (0%) are attached to their parents as `advmod:emph`.

6 instances of `advmod:emph` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.66666666666667.

The following 4 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="uz_uzudt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_uzudt-pos-ADV.html">ADV</a></tt> (2; 33% instances), <tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_uzudt-pos-ADV.html">ADV</a></tt> (2; 33% instances), <tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_uzudt-pos-CCONJ.html">CCONJ</a></tt> (1; 17% instances), <tt><a href="uz_uzudt-pos-PRON.html">PRON</a></tt>-<tt><a href="uz_uzudt-pos-ADV.html">ADV</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod:emph	color:blue
1	u	tush	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
2	oʻtloqda	oʻtloq	NOUN	N	Case=Loc	7	obl	_	_
3	nihoyatda	nihoyat	ADV	D	_	4	advmod:emph	_	_
4	chuqur	chuqu	ADJ	A	_	5	amod	_	_
5	krater	krate	NOUN	N	Case=Nom	7	obj	_	_
6	foyda	foy	ADJ	N	_	7	compound	_	_
7	qiladi	qil	VERB	V	_	0	root	_	_
8	,	qil	PUNCT	Y	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 advmod:emph	color:blue
1	boshlovchi	boshlov	NOUN	N	_	2	nmod	_	_
2	bola	bol	NOUN	N	Case=Nom	9	nsubj	_	_
3	oʻzini	oʻz	PRON	P	Case=Acc|Number[psor]=Plur,Sing|Person[psor]=3|Reflex=Yes	9	obj	_	_
4	shuncha	shunch	ADV	P	_	9	advmod:emph	_	_
5	erkin	erkin	ADJ	A	_	9	advmod	_	_
6	va	erkin	CCONJ	C	_	7	cc	_	_
7	xushxol	xushxol	ADJ	A	_	5	conj	_	_
8	his	xushxol	NOUN	N	Case=Nom	9	compound	_	_
9	qiladi	qil	VERB	V	_	0	root	_	_
10	.	qil	PUNCT	Y	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 8 advmod:emph	color:blue
1	turkiy	turkiy	NOUN	N	Case=Nom	2	compound	_	_
2	millatlarining	millat	NOUN	N	Case=Gen|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	4	nmod:poss	_	_
3	anʼanaviy	anʼanaviy	ADJ	A	_	4	amod	_	_
4	madaniyati	madaniy	NOUN	N	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	6	nsubj	_	_
5	katta	katt	NOUN	A	Case=Nom	6	obl	_	_
6	xazina	xazin	NOUN	N	Case=Nom	13	parataxis	_	_
7	,	xazin	PUNCT	Y	_	6	punct	_	_
8	jumladin	jumladin	CCONJ	C	_	13	advmod:emph	_	_
9	uygʻur	uygʻu	NOUN	N	Case=Nom	11	nmod:poss	_	_
10	anʼanaviy	anʼanaviy	ADJ	A	_	11	amod	_	_
11	madaniyati	madaniy	NOUN	N	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	13	nsubj	_	_
12	bebaho	bebaho	NOUN	N	_	13	amod	_	_
13	boylik	boy	NOUN	N	Case=Nom	0	root	_	_
14	.	boy	PUNCT	Y	_	13	punct	_	_

~~~


