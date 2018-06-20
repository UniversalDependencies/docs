---
layout: base
title:  'Statistics of acl in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `acl`

This relation is universal.

7 nodes (1%) are attached to their parents as `acl`.

6 instances of `acl` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.42857142857143.

The following 4 pairs of parts of speech are connected with `acl`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (3; 43% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt> (2; 29% instances), <tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_ikdp-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-ADV.html">ADV</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 19 acl	color:blue
1	И	и	CCONJ	CC	_	9	cc	_	Lang=Mixed
2	как	как	ADV	Adv	_	9	advmod	_	Lang=Rus
3	коми	коми	NOUN	N	Case=Nom|Number=Sing	4	nmod	_	_
4	рӧдыс	рӧд	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	nsubj	_	_
5	всегда	всегда	ADV	Adv	_	9	advmod	_	Lang=Rus
6	чтоб	чтоб	SCONJ	CS	_	9	mark	_	Lang=Rus
7	по	по	ADP	Pr	_	8	case	_	Lang=Rus
8	прозвищу	прозвище	NOUN	N	Case=Dat|Number=Sing	9	obj	_	Lang=Rus
9	знали	знать	VERB	V	Number=Plur	0	root	_	Lang=Rus|SpaceAfter=No
10	,	,	PUNCT	CLB	_	9	punct	_	_
11	у	у	NOUN	N	_	12	case	_	Lang=Rus
12	нас	я	PRON	Pron	Person=1|PronType=Prs	13	obl	_	Lang=Rus
13	бабушка	бабушка	NOUN	N	Case=Nom|Number=Sing	14	nmod	_	Lang=Rus
14	Елена	Елена	PROPN	N	Case=Nom|Number=Sing	15	nsubj	_	_
15	вӧлі	вӧвны	AUX	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	19	cop	_	_
16	Зӧт	Зӧт	PROPN	N	Case=Nom|Number=Sing	15	nmod	_	_
17	Дань	Дань	PROPN	N	Case=Nom|Number=Sing	16	flat:name	_	_
18	Тимкалэн	Тимка	PROPN	N	Number=Sing	17	flat:name	_	_
19	нылыс	ныв	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	acl	_	SpaceAfter=No
20	.	.	PUNCT	CLB	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 28 acl	color:blue
1	Армияа	армия	NOUN	N	Case=Ill|Number=Sing	2	obl	_	Lang=Mixed
2	колэма	ковны	VERB	V	Evident=Nfh|Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	мунны	мунны	VERB	V	VerbForm=Inf	2	xcomp	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	значит	значит	PART	Pcle	_	7	discourse	_	Lang=Rus|SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	воома	воома	VERB	V	Evident=Nfh|Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	_
8	повесткаыс	повестка	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	nsubj	_	Lang=Mixed|SpaceAfter=No
9	,	,	PUNCT	CLB	_	10	punct	_	_
10	сыа	сыа	PRON	Pron	Case=Nom|Person=3|PronType=Prs	13	nsubj	_	_
11	сорок	сорок	NUM	Num	NumType=Card	12	nummod	_	Lang=Rus
12	первей	первей	ADJ	A	Case=Nom|Number=Sing	13	nummod	_	Lang=Rus
13	год	год	NOUN	N	Case=Nom|Number=Sing	2	conj	_	Lang=Mixed
14	вылэ	выв	ADP	Po	Case=Ill|Number=Sing	13	case	_	SpaceAfter=No
15	,	,	PUNCT	CLB	_	16	punct	_	_
16	а	а	CCONJ	CC	_	20	cc	_	_
17	двадцать	двадцать	NUM	Num	NumType=Card	18	nummod	_	Lang=Rus
18	третьей	третьей	NUM	Num	NumType=Card	19	nummod	_	Lang=Rus
19	год	год	NOUN	N	Case=Nom|Number=Sing	20	nmod	_	Lang=Mixed
20	выыса	выыса	ADJ	A	Case=Nom|Number=Sing	2	conj	_	_
21	ае	ай	NOUN	N	Case=Ill|Number=Sing	20	nsubj	_	SpaceAfter=No
22	,	,	PUNCT	CLB	_	23	punct	_	_
23	значит	значит	PART	Pcle	_	28	discourse	_	Lang=Rus|SpaceAfter=No
24	,	,	PUNCT	CLB	_	25	punct	_	_
25	а	а	CCONJ	CC	_	28	cc	_	Lang=Mixed
26	и	и	PART	Pcle	_	27	discourse	_	Lang=Mixed
27	вӧйнаыс	вӧйнаыс	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	28	nsubj	_	Lang=Mixed
28	суома	суома	VERB	V	Evident=Nfh|Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	7	acl	_	SpaceAfter=No
29	,	,	PUNCT	CLB	_	30	punct	_	_
30	и	и	CCONJ	CC	_	32	cc	_	Lang=Mixed
31	ае	ай	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	32	nsubj	_	_
32	мунэма	мунны	VERB	V	Evident=Nfh|Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	28	ccomp	_	_
33	вӧйна	вӧйна	NOUN	N	Case=Nom|Number=Sing	32	obl	_	_
34	вылэ	выв	ADP	Po	Case=Ill|Number=Sing	33	case	_	SpaceAfter=No
35	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 acl	color:blue
1	Омскейын	Омскейын	ADJ	A	Case=Ine	6	nmod	_	Lang=Mixed|SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	_
3	значит	значит	PART	Pcle	_	6	discourse	_	Lang=Rus|SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	военнэй	военнӧй	ADJ	A	Case=Nom|Number=Sing	6	amod	_	Lang=Mixed
6	училище	училище	NOUN	N	Case=Nom|Number=Sing	0	root	_	Lang=Mixed|SpaceAfter=No
7	,	,	PUNCT	CLB	_	6	punct	_	_
8	не	не	PART	Pcle	_	9	advmod	_	Lang=Mixed
9	вӧеннэй	вӧеннэй	ADJ	A	Case=Nom|Number=Sing	10	amod	_	Lang=Mixed
10	училище	училище	NOUN	N	Case=Nom|Number=Sing	6	conj	_	Lang=Mixed|SpaceAfter=No
11	,	,	PUNCT	CLB	_	12	punct	_	_
12	а	а	CCONJ	CC	_	13	cc	_	Lang=Mixed
13	курсъяс	курс	NOUN	N	Case=Nom|Number=Plur	6	acl	_	Lang=Mixed|SpaceAfter=No
14	,	,	PUNCT	CLB	_	13	punct	_	_
15	подготовка	подготовка	NOUN	N	_	18	nsubj	_	Lang=Mixed
16	куим	куим	NUM	Num	Case=Nom|Number=Sing|NumType=Card	17	nummod	_	_
17	месеча	месеча	NOUN	N	_	18	obl	_	Lang=Mixed
18	прӧйдитэма	прӧйдитны	VERB	V	Evident=Nfh|Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	13	conj	_	Lang=Mixed|SpaceAfter=No
19	,	,	PUNCT	CLB	_	20	punct	_	_
20	и	и	CCONJ	CC	_	21	cc	_	Lang=Mixed
21	вӧюйтіс	вӧюйтіс	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	13	conj	_	Lang=Mixed
22	сыа	сыа	PRON	Pron	Case=Nom|Person=3|PronType=Prs	21	nsubj	_	_
23	Ленинградскей	Ленинградскей	ADJ	A	Case=Nom|Number=Sing	24	amod	_	Lang=Mixed
24	фронт	фронт	NOUN	N	Case=Nom|Number=Sing	21	obl	_	Lang=Mixed
25	вылын	вылын	ADP	Po	Case=Ine|Number=Sing	24	case	_	SpaceAfter=No
26	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


