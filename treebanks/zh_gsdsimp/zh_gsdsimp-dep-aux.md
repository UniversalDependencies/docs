---
layout: base
title:  'Statistics of aux in UD_Chinese-GSDSimp'
udver: '2'
---

## Treebank Statistics: UD_Chinese-GSDSimp: Relations: `aux`

This relation is universal.
There are 2 language-specific subtypes of `aux`: <tt><a href="zh_gsdsimp-dep-aux-aspect.html">aux:aspect</a></tt>, <tt><a href="zh_gsdsimp-dep-aux-pass.html">aux:pass</a></tt>.

879 nodes (1%) are attached to their parents as `aux`.

879 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.55745164960182.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="zh_gsdsimp-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_gsdsimp-pos-AUX.html">AUX</a></tt> (837; 95% instances), <tt><a href="zh_gsdsimp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_gsdsimp-pos-AUX.html">AUX</a></tt> (26; 3% instances), <tt><a href="zh_gsdsimp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_gsdsimp-pos-AUX.html">AUX</a></tt> (10; 1% instances), <tt><a href="zh_gsdsimp-pos-PART.html">PART</a></tt>-<tt><a href="zh_gsdsimp-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="zh_gsdsimp-pos-ADP.html">ADP</a></tt>-<tt><a href="zh_gsdsimp-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux	color:blue
1	这种	这种	DET	DT	_	2	det	_	SpaceAfter=No
2	车辆	车辆	NOUN	NN	_	10	nsubj	_	SpaceAfter=No
3	如果	如果	ADP	IN	_	4	case	_	SpaceAfter=No
4	归	归	VERB	VV	_	10	xcomp	_	SpaceAfter=No
5	私人	私人	NOUN	NN	_	6	nsubj	_	SpaceAfter=No
6	拥有	拥有	VERB	VV	_	4	ccomp	_	SpaceAfter=No
7	，	，	PUNCT	,	_	10	punct	_	SpaceAfter=No
8	多半	多半	ADV	RB	_	10	advmod	_	SpaceAfter=No
9	会	会	AUX	MD	_	10	aux	_	SpaceAfter=No
10	设置	设置	VERB	VV	_	0	root	_	SpaceAfter=No
11	昂贵	昂贵	ADJ	JJ	_	14	amod	_	SpaceAfter=No
12	的	的	PART	DEC	_	11	mark:relcl	_	SpaceAfter=No
13	音频	音频	NOUN	NN	_	14	nmod	_	SpaceAfter=No
14	设备	设备	NOUN	NN	_	10	obj	_	SpaceAfter=No
15	、	、	PUNCT	EC	_	17	punct	_	SpaceAfter=No
16	电视	电视	NOUN	NN	_	17	compound	_	SpaceAfter=No
17	机	机	PART	SFN	_	14	conj	_	SpaceAfter=No
18	、	、	PUNCT	EC	_	20	punct	_	SpaceAfter=No
19	影碟	影碟	NOUN	NN	_	20	compound	_	SpaceAfter=No
20	机	机	PART	SFN	_	14	conj	_	SpaceAfter=No
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
1	当	当	ADP	IN	_	6	case	_	SpaceAfter=No
2	《	《	PUNCT	(	_	3	punct	_	SpaceAfter=No
3	Game	Game	X	FW	_	6	nsubj	_	_
4	Informer	Informer	X	FW	_	3	flat:foreign	_	SpaceAfter=No
5	》	》	PUNCT	)	_	3	punct	_	SpaceAfter=No
6	提到	提到	VERB	VV	_	15	ccomp	_	SpaceAfter=No
7	游戏	游戏	NOUN	NN	_	8	nsubj	_	SpaceAfter=No
8	在	在	VERB	VV	_	12	acl:relcl	_	SpaceAfter=No
9	日本	日本	PROPN	NNP	_	8	obj	_	SpaceAfter=No
10	的	的	PART	DEC	_	8	mark:relcl	_	SpaceAfter=No
11	知名	知名	ADJ	JJ	_	12	compound	_	SpaceAfter=No
12	度	度	PART	SFN	_	6	obj	_	SpaceAfter=No
13	时	时	ADP	IN	_	6	mark	_	SpaceAfter=No
14	甚至	甚至	ADV	RB	_	15	mark	_	SpaceAfter=No
15	说	说	VERB	VV	_	0	root	_	SpaceAfter=No
16	“	“	PUNCT	``	_	19	punct	_	SpaceAfter=No
17	四百万	四百万	NUM	CD	NumType=Card	19	nummod	_	SpaceAfter=No
18	日本	日本	PROPN	NNP	_	19	compound	_	SpaceAfter=No
19	人	人	PART	SFN	_	21	nsubj	_	SpaceAfter=No
20	可能	可能	AUX	MD	_	21	aux	_	SpaceAfter=No
21	错	错	ADJ	JJ	_	15	ccomp	_	SpaceAfter=No
22	了	了	PART	UH	_	21	discourse	_	SpaceAfter=No
23	”	”	PUNCT	''	_	21	punct	_	SpaceAfter=No
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
4	从	从	ADP	IN	_	5	case	_	SpaceAfter=No
5	上	上	NOUN	NN	_	13	nmod	_	SpaceAfter=No
6	、	、	PUNCT	EC	_	7	punct	_	SpaceAfter=No
7	左	左	NOUN	NN	_	5	conj	_	SpaceAfter=No
8	、	、	PUNCT	EC	_	9	punct	_	SpaceAfter=No
9	右方	右方	NOUN	NN	_	5	conj	_	SpaceAfter=No
10	均	均	ADV	RB	_	13	advmod	_	SpaceAfter=No
11	可	可	AUX	MD	_	13	aux	_	SpaceAfter=No
12	为	为	AUX	VC	_	13	cop	_	SpaceAfter=No
13	部字	部字	NOUN	NN	_	3	xcomp	_	SpaceAfter=No
14	。	。	PUNCT	.	_	3	punct	_	SpaceAfter=No

~~~


