---
layout: base
title:  'Statistics of reparandum in UD_Chinese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Chinese-GSD: Relations: `reparandum`

This relation is universal.

4 nodes (0%) are attached to their parents as `reparandum`.

4 instances of `reparandum` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75.

The following 3 pairs of parts of speech are connected with `reparandum`: <tt><a href="zh_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="zh_gsd-pos-PUNCT.html">PUNCT</a></tt> (2; 50% instances), <tt><a href="zh_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsd-pos-VERB.html">VERB</a></tt> (1; 25% instances), <tt><a href="zh_gsd-pos-X.html">X</a></tt>-<tt><a href="zh_gsd-pos-PUNCT.html">PUNCT</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 reparandum	color:blue
1	林	林	PROPN	NNP	_	21	nsubj	_	SpaceAfter=No
2	秀怡	秀怡	PROPN	NNP	_	1	flat:name	_	SpaceAfter=No
3	（	（	PUNCT	(	_	4	punct	_	SpaceAfter=No
4	，	，	PUNCT	,	_	1	reparandum	_	SpaceAfter=No
5	）	）	PUNCT	)	_	4	punct	_	SpaceAfter=No
6	，	，	PUNCT	,	_	7	punct	_	SpaceAfter=No
7	生	生	VERB	VV	_	21	advcl	_	SpaceAfter=No
8	於	於	VERB	VV	_	7	mark	_	SpaceAfter=No
9	香港	香港	PROPN	NNP	_	7	obj	_	SpaceAfter=No
10	，	，	PUNCT	,	_	7	punct	_	SpaceAfter=No
11	於	於	ADP	IN	_	18	case	_	SpaceAfter=No
12	第23	第23	NUM	CD	NumType=Ord	13	nummod	_	SpaceAfter=No
13	期	期	NOUN	NNB	_	18	nmod	_	SpaceAfter=No
14	無綫	無綫	PROPN	NNP	_	15	nmod	_	SpaceAfter=No
15	電視	電視	NOUN	NN	_	18	nmod	_	SpaceAfter=No
16	藝員	藝員	NOUN	NN	_	18	nmod	_	SpaceAfter=No
17	訓練	訓練	VERB	VV	_	18	compound	_	SpaceAfter=No
18	班	班	PART	SFN	_	19	obl	_	SpaceAfter=No
19	畢業	畢業	VERB	VV	_	21	advcl	_	SpaceAfter=No
20	後	後	ADP	IN	_	19	mark	_	SpaceAfter=No
21	成	成	VERB	VV	_	0	root	_	SpaceAfter=No
22	為	為	VERB	VC	_	21	mark	_	SpaceAfter=No
23	無綫	無綫	PROPN	NNP	_	24	nmod	_	SpaceAfter=No
24	電視	電視	NOUN	NN	_	28	nmod	_	SpaceAfter=No
25	（	（	PUNCT	(	_	26	punct	_	SpaceAfter=No
26	TVB	TVB	X	FW	_	24	appos	_	SpaceAfter=No
27	）	）	PUNCT	)	_	26	punct	_	SpaceAfter=No
28	藝員	藝員	NOUN	NN	_	21	obj	_	SpaceAfter=No
29	。	。	PUNCT	.	_	21	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 reparandum	color:blue
1	香港	香港	PROPN	NNP	_	3	nmod	_	SpaceAfter=No
2	天文	天文	NOUN	NN	_	3	compound	_	SpaceAfter=No
3	台	台	PART	SFN	_	22	nsubj	_	SpaceAfter=No
4	亦	亦	ADV	RB	_	8	mark	_	SpaceAfter=No
5	隨之	隨之	ADV	RB	_	8	advmod	_	SpaceAfter=No
6	把	把	ADP	BB	_	7	case	_	SpaceAfter=No
7	其	其	PRON	PRP	Person=3	8	obl:patient	_	SpaceAfter=No
8	升	升	VERB	VV	_	22	advcl	_	SpaceAfter=No
9	為	為	VERB	VC	_	8	mark	_	SpaceAfter=No
10	為	為	VERB	VC	_	9	reparandum	_	SpaceAfter=No
11	熱帶	熱帶	NOUN	NN	_	12	nmod	_	SpaceAfter=No
12	風暴	風暴	NOUN	NN	_	8	obj	_	SpaceAfter=No
13	，	，	PUNCT	,	_	22	punct	_	SpaceAfter=No
14	並	並	ADV	RB	_	22	mark	_	SpaceAfter=No
15	在	在	ADP	IN	_	21	case	_	SpaceAfter=No
16	當日	當日	NOUN	NN	_	21	nmod	_	SpaceAfter=No
17	晚上	晚上	NOUN	NN	_	21	nmod	_	SpaceAfter=No
18	7	7	NUM	CD	NumType=Card	19	nummod	_	SpaceAfter=No
19	時	時	NOUN	NNB	_	21	clf	_	SpaceAfter=No
20	15	15	NUM	CD	NumType=Card	21	nummod	_	SpaceAfter=No
21	分	分	NOUN	NNB	_	22	obl	_	SpaceAfter=No
22	發出	發出	VERB	VV	_	0	root	_	SpaceAfter=No
23	三	三	NUM	CD	NumType=Card	24	nummod	_	SpaceAfter=No
24	號	號	NOUN	NN	_	26	nmod	_	SpaceAfter=No
25	強風	強風	NOUN	NN	_	26	nmod	_	SpaceAfter=No
26	信號	信號	NOUN	NN	_	22	obj	_	SpaceAfter=No
27	，	，	PUNCT	,	_	22	punct	_	SpaceAfter=No
28	當時	當時	NOUN	NN	_	30	nmod:tmod	_	SpaceAfter=No
29	北冕	北冕	PROPN	NNP	_	30	nsubj	_	SpaceAfter=No
30	位	位	VERB	VV	_	22	parataxis	_	SpaceAfter=No
31	於	於	VERB	VV	_	30	mark	_	SpaceAfter=No
32	香港	香港	PROPN	NNP	_	38	nmod	_	SpaceAfter=No
33	東南	東南	NOUN	NN	_	38	nmod	_	SpaceAfter=No
34	偏	偏	ADP	IN	_	33	acl	_	SpaceAfter=No
35	南	南	NOUN	NN	_	34	nmod	_	SpaceAfter=No
36	約	約	ADV	RB	_	38	advmod	_	SpaceAfter=No
37	250	250	NUM	CD	NumType=Card	38	nummod	_	SpaceAfter=No
38	公里	公里	NOUN	NNB	_	30	obj	_	SpaceAfter=No
39	。	。	PUNCT	.	_	22	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 reparandum	color:blue
1	德輔	德輔	PROPN	NNP	_	2	nmod	_	SpaceAfter=No
2	爵士	爵士	NOUN	NN	_	17	nsubj	_	SpaceAfter=No
3	，	，	PUNCT	,	_	4	punct	_	SpaceAfter=No
4	GCMG	GCMG	X	FW	_	2	appos	_	SpaceAfter=No
5	（	（	PUNCT	(	_	6	punct	_	SpaceAfter=No
6	，	，	PUNCT	,	_	4	reparandum	_	SpaceAfter=No
7	）	）	PUNCT	)	_	6	punct	_	SpaceAfter=No
8	，	，	PUNCT	,	_	4	punct	_	SpaceAfter=No
9	是	是	AUX	VC	_	17	cop	_	SpaceAfter=No
10	英國	英國	PROPN	NNP	_	11	nsubj	_	SpaceAfter=No
11	派駐	派駐	VERB	VV	_	17	acl:relcl	_	SpaceAfter=No
12	香港	香港	PROPN	NNP	_	11	obj	_	SpaceAfter=No
13	的	的	PART	DEC	_	11	mark:relcl	_	SpaceAfter=No
14	第10	第10	NUM	CD	NumType=Ord	15	nummod	_	SpaceAfter=No
15	任	任	NOUN	NNB	_	17	nmod	_	SpaceAfter=No
16	港	港	PROPN	NNP	_	17	compound	_	SpaceAfter=No
17	督	督	PART	SFN	_	0	root	_	SpaceAfter=No
18	；	；	PUNCT	:	_	17	punct	_	SpaceAfter=No
19	在	在	ADP	IN	_	20	case	_	SpaceAfter=No
20	任職	任職	VERB	VV	_	24	xcomp	_	SpaceAfter=No
21	港	港	PROPN	NNP	_	22	compound	_	SpaceAfter=No
22	督	督	PART	SFN	_	20	obj	_	SpaceAfter=No
23	前	前	ADP	IN	_	20	mark	_	SpaceAfter=No
24	曾任	曾任	VERB	VV	_	17	parataxis	_	SpaceAfter=No
25	第三	第三	NUM	CD	NumType=Ord	26	nummod	_	SpaceAfter=No
26	任	任	NOUN	NNB	_	28	clf	_	SpaceAfter=No
27	斐濟	斐濟	PROPN	NNP	_	28	nmod	_	SpaceAfter=No
28	總督	總督	NOUN	NN	_	24	obj	_	SpaceAfter=No
29	兼	兼	CCONJ	CC	_	34	cc	_	SpaceAfter=No
30	西	西	NOUN	NN	_	34	nmod	_	SpaceAfter=No
31	太平	太平	PROPN	NNP	_	32	compound	_	SpaceAfter=No
32	洋	洋	PART	SFN	_	34	nmod	_	SpaceAfter=No
33	高級	高級	ADJ	JJ	_	34	amod	_	SpaceAfter=No
34	專員	專員	NOUN	NN	_	28	conj	_	SpaceAfter=No
35	（	（	PUNCT	(	_	37	punct	_	SpaceAfter=No
36	1880	1880	NUM	CD	NumType=Card	37	nummod	_	SpaceAfter=No
37	年	年	NOUN	NNB	_	28	nmod:tmod	_	SpaceAfter=No
38	-	-	PUNCT	HYPH	_	40	punct	_	SpaceAfter=No
39	1885	1885	NUM	CD	NumType=Card	40	nummod	_	SpaceAfter=No
40	年	年	NOUN	NNB	_	37	conj	_	SpaceAfter=No
41	）	）	PUNCT	)	_	37	punct	_	SpaceAfter=No
42	及	及	CCONJ	CC	_	48	cc	_	SpaceAfter=No
43	紐芬蘭	紐芬蘭	PROPN	NNP	_	48	nmod	_	SpaceAfter=No
44	第八	第八	NUM	CD	NumType=Ord	45	nummod	_	SpaceAfter=No
45	任	任	NOUN	NNB	_	48	clf	_	SpaceAfter=No
46	殖民	殖民	VERB	VV	_	47	compound	_	SpaceAfter=No
47	地	地	PART	SFN	_	48	nmod	_	SpaceAfter=No
48	總督	總督	NOUN	NN	_	28	conj	_	SpaceAfter=No
49	（	（	PUNCT	(	_	51	punct	_	SpaceAfter=No
50	1886	1886	NUM	CD	NumType=Card	51	nummod	_	SpaceAfter=No
51	年	年	NOUN	NNB	_	48	nmod:tmod	_	SpaceAfter=No
52	-	-	PUNCT	HYPH	_	54	punct	_	SpaceAfter=No
53	1887	1887	NUM	CD	NumType=Card	54	nummod	_	SpaceAfter=No
54	年	年	NOUN	NNB	_	51	conj	_	SpaceAfter=No
55	）	）	PUNCT	)	_	51	punct	_	SpaceAfter=No
56	。	。	PUNCT	.	_	17	punct	_	SpaceAfter=No

~~~


