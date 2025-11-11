---
layout: base
title:  'Statistics of orphan in UD_Uzbek-UzUDT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UzUDT: Relations: `orphan`

This relation is universal.

5 nodes (0%) are attached to their parents as `orphan`.

3 instances of `orphan` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.

The following 3 pairs of parts of speech are connected with `orphan`: <tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt> (3; 60% instances), <tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_uzudt-pos-ADJ.html">ADJ</a></tt> (1; 20% instances), <tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 orphan	color:blue
1	dov	kengay	ADV	D	_	3	compound	_	_
2	-	kengay	PUNCT	Y	_	1	punct	_	_
3	daraxtlar	daraxt	NOUN	N	_	16	nsubj	_	_
4	qator	qato	NOUN	N	Case=Nom	6	compound:redup	_	_
5	–	qato	PUNCT	V	_	4	punct	_	_
6	qator	qato	NOUN	N	Case=Nom	7	amod	_	_
7	uylarga	uylar	NOUN	V	Case=Dat|Number=Plur	0	root	_	_
8	,	uylar	PUNCT	Y	_	12	punct	_	_
9	xilma	xilma	NOUN	N	Case=Nom	11	compound:redup	_	_
10	-	xilma	PUNCT	Y	_	9	punct	_	_
11	xil	xilma	NOUN	N	Case=Nom	12	amod	_	_
12	jihozlarga	jihoz	NOUN	N	Case=Dat|Number=Plur	7	orphan	_	_
13	,	jihoz	PUNCT	Y	_	12	punct	_	_
14	uy	jihoz	NOUN	N	Case=Nom	15	nmod:poss	_	_
15	buyumlariga	buyum	NOUN	N	_	16	nmod	_	_
16	aylibdi	ayl	VERB	V	_	7	conj	_	_
17	.	ayl	PUNCT	Y	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 16 orphan	color:blue
1	as	qilmayt	NOUN	N	Case=Nom	3	compound:redup	_	_
2	–	qilmayt	PUNCT	V	_	1	punct	_	_
3	hushini	hush	NOUN	N	Case=Acc|Number[psor]=Plur,Sing|Person[psor]=3	4	obj	_	_
4	yo'qutib	yo'qut	VERB	V	_	7	advcl	_	_
5	nima	nima	PRON	P	Case=Nom|PronType=Int	6	obj	_	_
6	qilarini	qilar	VERB	V	_	7	ccomp	_	_
7	bilmayotgan	bilm	VERB	V	_	8	acl	_	_
8	odamlar	oda	NOUN	N	Case=Nom|Number=Plur	9	nmod	_	_
9	oldida	old	NOUN	N	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	14	obl	_	_
10	u	old	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	_
11	oʻzini	oʻz	PRON	P	Case=Acc|Number[psor]=Plur,Sing|Person[psor]=3|Reflex=Yes	14	obj	_	_
12	shunchilik	shunchi	ADV	P	_	13	advmod	_	_
13	savlatli	savlatl	ADJ	A	_	14	amod	_	_
14	tutardiki	tut	VERB	V	_	21	parataxis	_	_
15	,	tut	PUNCT	Y	_	14	punct	_	_
16	xuddi	xud	ADJ	T	_	21	orphan	_	_
17	balo	balo	NOUN	N	Case=Nom	19	compound:redup	_	_
18	–	balo	PUNCT	N	_	17	punct	_	_
19	qazoga	qazo	NOUN	N	Case=Dat	20	obl	_	_
20	uchragan	uchra	VERB	V	Case=Nom|Tense=Past|VerbForm=Part	21	acl	_	_
21	odamlariga	odam	NOUN	N	_	0	root	_	_
22	emas	emas	ADV	V	_	21	advmod	_	_
23	,	emas	PUNCT	Y	_	29	punct	_	_
24	balki	bal	CCONJ	C	_	29	cc	_	_
25	balo	balo	NOUN	N	Case=Nom	27	compound:redup	_	_
26	–	balo	PUNCT	V	_	25	punct	_	_
27	qazoga	qazo	NOUN	N	_	29	obl	_	_
28	buyruq	buyruq	NOUN	N	Case=Nom	29	compound	_	_
29	berayotgandek	berayotgande	VERB	V	_	21	conj	_	_
30	,	berayotgande	PUNCT	Y	_	38	punct	_	_
31	hatto	hatto	CCONJ	C	_	38	cc	_	_
32	halokatga	halokat	NOUN	N	Case=Dat	33	obl	_	_
33	uchrgan	uchr	VERB	V	Case=Nom|Tense=Past|VerbForm=Part	34	acl	_	_
34	kema	kema	NOUN	N	_	38	nsubj	_	_
35	uning	uning	PRON	P	Case=Gen|Number=Sing|Person=3|PronType=Prs	36	nmod:poss	_	_
36	ko'rsatmalariga	ko'rsatma	NOUN	N	Case=Dat|Number=Plur|Number[psor]=Plur|Person[psor]=3	37	obl	_	_
37	boʻysunayotgandek	bo'ysunmoq	VERB	V	Aspect=Prog|VerbForm=Conv	38	xcomp	_	_
38	bo'lardi	bo'lmoq	VERB	V	_	21	conj	_	_
39	.	.	PUNCT	Y	_	21	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 17 orphan	color:blue
1	osmonni	osmon	NOUN	N	Case=Acc	30	csubj	_	_
2	koʻm-koʻk	koʻm-koʻk	ADJ	Adj	_	1	xcomp	_	_
3	,	,	PUNCT	Y	_	9	punct	_	_
4	daryo	daryo	NOUN	N	Case=Nom	7	nmod:poss	_	_
5	,	daryo	PUNCT	Y	_	6	punct	_	_
6	koʻl	koʻl	NOUN	N	Case=Nom	4	conj	_	_
7	suvlarini	suv	NOUN	N	Case=Acc|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	9	obj	_	_
8	tiniq	tiniq	ADJ	A	_	9	advmod	_	_
9	turishga	turmoq	VERB	V	Case=Dat	1	conj	_	_
10	,	,	PUNCT	Y	_	17	punct	_	_
11	dov	dov	ADV	D	_	13	compound:redup	_	_
12	-	-	PUNCT	Y	_	11	punct	_	_
13	daraxtlarni	daraxt	NOUN	N	Case=Acc|Number=Plur	17	obj	_	_
14	yashil	yashil	ADJ	A	_	16	compound	_	_
15	-	yashil	PUNCT	Y	_	14	punct	_	_
16	baquvvat	baquvvat	ADJ	A	_	17	advmod	_	_
17	boʻlishiga	boʻlmoq	VERB	V	Case=Dat	9	orphan	_	_
18	,	,	PUNCT	Y	_	17	punct	_	_
19	hayvonlarni	hayvon	NOUN	N	Case=Acc|Number=Plur	24	obj	_	_
20	erkin	erkin	ADJ	A	_	21	compound:redup	_	_
21	holatda	holat	ADJ	A	_	22	advmod	_	_
22	yashashga	yasha	NOUN	N	_	24	advcl	_	_
23	ega	yasha	NOUN	N	Case=Nom	24	compound	_	_
24	qilish	qili	VERB	V	Case=Nom	1	conj	_	_
25	.	.	PUNCT	Y	_	1	punct	_	_
26	.	.	PUNCT	Y	_	1	punct	_	_
27	.	.	PUNCT	Y	_	1	punct	_	_
28	bizning	biz	PRON	P	Case=Gen|Number=Plur|Person=1|PronType=Prs	30	nmod:poss	_	_
29	umumiy	umumiy	ADJ	A	_	30	amod	_	_
30	orzuyimiz	orzu	NOUN	N	_	0	root	_	_
31	.	.	PUNCT	Y	_	30	punct	_	_

~~~


