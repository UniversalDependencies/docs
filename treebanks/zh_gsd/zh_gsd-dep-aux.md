---
layout: base
title:  'Statistics of aux in UD_Chinese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Chinese-GSD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="zh_gsd-dep-aux-pass.html">aux:pass</a></tt>.

1834 nodes (1%) are attached to their parents as `aux`.

951 instances of `aux` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.76444929116685.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="zh_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsd-pos-AUX.html">AUX</a></tt> (1787; 97% instances), <tt><a href="zh_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_gsd-pos-AUX.html">AUX</a></tt> (28; 2% instances), <tt><a href="zh_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_gsd-pos-AUX.html">AUX</a></tt> (11; 1% instances), <tt><a href="zh_gsd-pos-PART.html">PART</a></tt>-<tt><a href="zh_gsd-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="zh_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="zh_gsd-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux	color:blue
1	這種	這種	DET	DT	_	2	det	_	SpaceAfter=No
2	車輛	車輛	NOUN	NN	_	10	nsubj	_	SpaceAfter=No
3	如果	如果	ADP	IN	_	4	case	_	SpaceAfter=No
4	歸	歸	VERB	VV	_	10	xcomp	_	SpaceAfter=No
5	私人	私人	NOUN	NN	_	6	nsubj	_	SpaceAfter=No
6	擁有	擁有	VERB	VV	_	4	ccomp	_	SpaceAfter=No
7	，	，	PUNCT	,	_	10	punct	_	SpaceAfter=No
8	多半	多半	ADV	RB	_	10	advmod	_	SpaceAfter=No
9	會	會	AUX	MD	_	10	aux	_	SpaceAfter=No
10	設置	設置	VERB	VV	_	0	root	_	SpaceAfter=No
11	昂貴	昂貴	ADJ	JJ	_	14	amod	_	SpaceAfter=No
12	的	的	PART	DEC	_	11	mark:rel	_	SpaceAfter=No
13	音頻	音頻	NOUN	NN	_	14	nmod	_	SpaceAfter=No
14	設備	設備	NOUN	NN	_	10	obj	_	SpaceAfter=No
15	、	、	PUNCT	EC	_	17	punct	_	SpaceAfter=No
16	電視	電視	NOUN	NN	_	17	compound	_	SpaceAfter=No
17	機	機	PART	SFN	_	14	conj	_	SpaceAfter=No
18	、	、	PUNCT	EC	_	20	punct	_	SpaceAfter=No
19	影碟	影碟	NOUN	NN	_	20	compound	_	SpaceAfter=No
20	機	機	PART	SFN	_	14	conj	_	SpaceAfter=No
21	，	，	PUNCT	,	_	23	punct	_	SpaceAfter=No
22	以及	以及	CCONJ	CC	_	23	cc	_	SpaceAfter=No
23	吧台	吧台	NOUN	NN	_	14	conj	_	SpaceAfter=No
24	和	和	CCONJ	CC	_	25	cc	_	SpaceAfter=No
25	冰箱	冰箱	NOUN	NN	_	23	conj	_	SpaceAfter=No
26	。	。	PUNCT	.	_	10	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 aux	color:blue
1	當	當	ADP	IN	_	6	case	_	SpaceAfter=No
2	《	《	PUNCT	(	_	3	punct	_	SpaceAfter=No
3	Game	Game	X	FW	_	6	nsubj	_	_
4	Informer	Informer	X	FW	_	3	flat:foreign	_	SpaceAfter=No
5	》	》	PUNCT	)	_	3	punct	_	SpaceAfter=No
6	提到	提到	VERB	VV	_	15	ccomp	_	SpaceAfter=No
7	遊戲	遊戲	NOUN	NN	_	8	nsubj	_	SpaceAfter=No
8	在	在	VERB	VV	_	12	acl:relcl	_	SpaceAfter=No
9	日本	日本	PROPN	NNP	_	8	obj	_	SpaceAfter=No
10	的	的	PART	DEC	_	8	mark:rel	_	SpaceAfter=No
11	知名	知名	ADJ	JJ	_	12	compound	_	SpaceAfter=No
12	度	度	PART	SFN	_	6	obj	_	SpaceAfter=No
13	時	時	ADP	IN	_	6	mark	_	SpaceAfter=No
14	甚至	甚至	ADV	RB	_	15	mark	_	SpaceAfter=No
15	說	說	VERB	VV	_	0	root	_	SpaceAfter=No
16	「	「	PUNCT	``	_	19	punct	_	SpaceAfter=No
17	四百萬	四百萬	NUM	CD	NumType=Card	19	nummod	_	SpaceAfter=No
18	日本	日本	PROPN	NNP	_	19	compound	_	SpaceAfter=No
19	人	人	PART	SFN	_	21	nsubj	_	SpaceAfter=No
20	可能	可能	AUX	MD	_	21	aux	_	SpaceAfter=No
21	錯	錯	ADJ	JJ	_	15	ccomp	_	SpaceAfter=No
22	了	了	PART	UH	_	21	discourse	_	SpaceAfter=No
23	」	」	PUNCT	''	_	21	punct	_	SpaceAfter=No
24	。	。	PUNCT	.	_	15	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 aux	color:blue
1	爪部	爪部	NOUN	NN	_	3	nsubj	_	SpaceAfter=No
2	通常	通常	ADV	RB	_	3	advmod	_	SpaceAfter=No
3	是	是	VERB	VC	_	0	root	_	SpaceAfter=No
4	從	從	ADP	IN	_	5	case	_	SpaceAfter=No
5	上	上	NOUN	NN	_	13	nmod	_	SpaceAfter=No
6	、	、	PUNCT	EC	_	7	punct	_	SpaceAfter=No
7	左	左	NOUN	NN	_	5	conj	_	SpaceAfter=No
8	、	、	PUNCT	EC	_	9	punct	_	SpaceAfter=No
9	右方	右方	NOUN	NN	_	5	conj	_	SpaceAfter=No
10	均	均	ADV	RB	_	13	advmod	_	SpaceAfter=No
11	可	可	AUX	MD	_	13	aux	_	SpaceAfter=No
12	為	為	AUX	VC	_	13	cop	_	SpaceAfter=No
13	部字	部字	NOUN	NN	_	3	xcomp	_	SpaceAfter=No
14	。	。	PUNCT	.	_	3	punct	_	SpaceAfter=No

~~~


