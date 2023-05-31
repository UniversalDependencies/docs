---
layout: base
title:  'Statistics of acl in UD_Karelian-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Karelian-KKPP: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="krl_kkpp-dep-acl-relcl.html">acl:relcl</a></tt>.

7 nodes (0%) are attached to their parents as `acl`.

6 instances of `acl` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.71428571428571.

The following 6 pairs of parts of speech are connected with `acl`: <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt> (2; 29% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-ADP.html">ADP</a></tt> (1; 14% instances), <tt><a href="krl_kkpp-pos-NUM.html">NUM</a></tt>-<tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt> (1; 14% instances), <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt> (1; 14% instances), <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt> (1; 14% instances), <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 acl	color:blue
1	Tämän	tämä	PRON	PRON	Case=Gen|Number=Sing|PronType=Dem	2	det	_	_
2	pelin	peli	NOUN	NOUN	Case=Gen|Number=Sing	5	obl	_	_
3	jälkeh	jälkeh	ADP	ADP	_	2	case	_	_
4	lapšilla	lapši	NOUN	NOUN	Case=Ade|Number=Plur	5	obl	_	_
5	ilmeštyy	ilmeštyö	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	halu	halu	NOUN	NOUN	Case=Nom|Number=Sing	5	obj	_	_
7	lukie	lukie	VERB	VERB	VerbForm=Inf	6	acl	_	_
8	”	”	PUNCT	PUNCT	_	7	punct	_	SpaceAfter=No
9	Kalevalan	Kalevala	PROPN	PROPN	Case=Gen|Number=Sing	7	obj	_	PropnType=Al|SpaceAfter=No
10	”	”	PUNCT	PUNCT	_	12	punct	_	_
11	ta	ta	CCONJ	CCONJ	_	12	cc	_	_
12	tiijuštua	tiijuštua	VERB	VERB	VerbForm=Inf	7	conj	_	_
13	enemmäh	enemmäh	ADV	ADV	_	12	advmod	_	_
14	hahmošta	hahmo	NOUN	NOUN	Case=Ine|Number=Sing	12	obl	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	12	punct	_	_
16	kenen	ken	PRON	PRON	Case=Gen|Number=Sing	17	nmod:poss	_	PronType=Interr
17	roolissa	rooli	NOUN	NOUN	Case=Ine|Number=Sing	19	obl	_	_
18	hyö	hyö	PRON	PRON	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	_	_
19	pelattih	pelata	VERB	VERB	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	5	conj	_	_
20	tätä	tämä	PRON	PRON	Case=Par|Number=Sing|PronType=Dem	21	det	_	_
21	šeikkailupelie	seikkailu#peli	NOUN	NOUN	Case=Par|Number=Sing	19	obj	_	SpaceAfter=No
22	.	.	PUNCT	PUNCT	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 acl	color:blue
1	Toimehpivon	toimeh#pito	NOUN	NOUN	Case=Gen|Number=Sing	2	nmod:poss	_	_
2	järještäjät	järještäjä	NOUN	NOUN	Case=Nom|Number=Plur	16	nsubj	_	_
3	–	–	PUNCT	PUNCT	_	9	punct	_	_
4	Venäjän	Venäjä	PROPN	PROPN	Case=Gen|Number=Sing	9	nmod	_	PropnType=Top
5	valtijollini	valtijollini	ADJ	ADJ	Case=Nom|Number=Sing	9	amod	_	_
6	Polenovilla	Polenov	PROPN	PROPN	Case=Ade|Number=Sing	7	obl	_	PropnType=Cog
7	nimetty	nimetä	ADP	ADP	Number=Sing|Voice=Pass	9	acl	_	_
8	rahvahanluomistyön	rahvahan#luomis#työ	NOUN	NOUN	Case=Gen|Number=Sing	9	nmod:poss	_	_
9	talo	talo	NOUN	NOUN	Case=Nom|Number=Sing	2	appos	_	_
10	ta	ta	CCONJ	CCONJ	_	14	cc	_	_
11	Karjalan	Karjala	PROPN	PROPN	Case=Gen|Number=Sing	13	nmod:poss	_	PropnType=Top
12	kanšallisien	kanšallini	ADJ	ADJ	Case=Gen|Number=Plur	13	amod	_	_
13	kulttuurien	kulttuuri	NOUN	NOUN	Case=Gen|Number=Plur	14	nmod:poss	_	_
14	keškuš	keškuš	NOUN	NOUN	Case=Nom|Number=Sing	9	conj	_	_
15	–	–	PUNCT	PUNCT	_	9	punct	_	_
16	kučutah	kuččuo	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
17	festivalih	festivali	NOUN	NOUN	Case=Ill|Number=Sing	16	obl	_	_
18	rahvahan-	rahvaš	NOUN	NOUN	Case=Gen|Number=Sing	16	obj	_	_
19	ta	ta	CCONJ	CCONJ	_	20	cc	_	_
20	folkloriteatterija	folklori#teatteri	NOUN	NOUN	Case=Par|Number=Plur	16	obj	_	SpaceAfter=No
21	,	,	PUNCT	PUNCT	_	22	punct	_	_
22	tanšši-	tanšši	NOUN	NOUN	Case=Nom|Number=Sing	20	conj	_	SpaceAfter=No
23	,	,	PUNCT	PUNCT	_	24	punct	_	_
24	laulu-	laulu	NOUN	NOUN	Case=Nom|Number=Sing	20	conj	_	_
25	ta	ta	CCONJ	CCONJ	_	26	cc	_	_
26	musiikkikollektiivija	musiikki#kollektiivi	NOUN	NOUN	Case=Par|Number=Plur	20	conj	_	_
27	šekä	šekä	CCONJ	CCONJ	_	28	cc	_	_
28	yksityisesiintyjie	yksityis#esiintyjä	NOUN	NOUN	Case=Par|Number=Plur	26	conj	_	SpaceAfter=No
29	.	.	PUNCT	PUNCT	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 acl	color:blue
1	WWF	WWF	PROPN	PROPN	Abbr=Yes|Case=Nom|Number=Sing	3	nsubj:cop	_	_
2	on	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	yksi	yksi	NUM	NUM	Case=Nom|Number=Sing	0	root	_	_
4	šuurimmista	šuuri	ADJ	ADJ	Case=Ine|Degree=Sup|Number=Plur	6	amod	_	_
5	kanšainvälisistä	kansainvälini	ADJ	ADJ	Case=Ine|Number=Plur	6	amod	_	_
6	järještöistä	järještö	NOUN	NOUN	Case=Ela|Number=Plur	3	obl	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	9	punct	_	_
8	kumpani	kumpaine	PRON	PRON	Case=Nom|Number=Sing|PronType=Ind	9	nsubj	_	_
9	šuojelou	šuojella	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl	_	_
10	luontuo	luonto	NOUN	NOUN	Case=Par|Number=Sing	9	obj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	9	punct	_	_

~~~


