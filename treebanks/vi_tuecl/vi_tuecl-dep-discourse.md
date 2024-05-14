---
layout: base
title:  'Statistics of discourse in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `discourse`

This relation is universal.

19 nodes (1%) are attached to their parents as `discourse`.

11 instances of `discourse` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.15789473684211.

The following 5 pairs of parts of speech are connected with `discourse`: <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-PART.html">PART</a></tt> (9; 47% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-PART.html">PART</a></tt> (4; 21% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-INTJ.html">INTJ</a></tt> (4; 21% instances), <tt><a href="vi_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_tuecl-pos-PART.html">PART</a></tt> (1; 5% instances), <tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_tuecl-pos-PART.html">PART</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 discourse	color:blue
1	Những	những	DET	_	_	2	det	_	_
2	quyết định	quyết định	NOUN	_	_	7	obj	_	_
3	này	này	DET	_	PronType=Dem	2	det	_	_
4	ta	ta	PRON	_	Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
5	không	không	ADV	_	Polarity=Neg	7	advmod	_	_
6	hề	hề	PART	_	Polarity=Neg	7	advmod	_	_
7	đưa ra	đưa ra	VERB	_	_	0	root	_	_
8	hấp tấp	hấp tấp	ADJ	_	_	7	ccomp	_	_
9	đâu	đâu	PART	_	_	7	discourse	_	_
10	.	.	PUNCT	_	_	7	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 discourse	color:blue
1	Mà	mà	PART	_	_	9	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	9	punct	_	_
3	đây	đây	PRON	_	Deixis=Prox|PronType=Dem	6	reparandum	_	_
4	là	là	AUX	_	VerbType=Cop	7	reparandum	_	_
5	--	--	PUNCT	_	_	6	punct	_	_
6	đây	đây	PRON	_	Deixis=Prox|PronType=Dem	9	nsubj	_	_
7	là	là	AUX	_	VerbType=Cop	9	cop	_	_
8	một	một	NUM	_	NumType=Card	9	nummod	_	_
9	trích dẫn	trích dẫn	NOUN	_	_	0	root	_	_
10	đại diện	đại diện	ADJ	_	_	9	amod	_	_
11	từ	từ	ADP	_	_	14	case	_	_
12	một	một	NUM	_	NumType=Card	14	nummod	_	_
13	người	người	NOUN	_	_	12	clf	_	_
14	mẹ	mẹ	NOUN	_	_	16	nsubj:pass	_	_
15	bị	bị	AUX	_	VerbType=Mod|Voice=Pass	16	aux:pass	_	_
16	bủa vây	bủa vây	VERB	_	Typo=Yes	9	nmod	_	CorrectForm=bao vây
17	:	:	PUNCT	_	_	9	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	Dù sao	dù sao	INTJ	_	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	5	punct	_	_
3	tôi	tôi	PRON	_	Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
4	sẽ	sẽ	ADV	_	AdvType=Tim|Tense=Fut	5	advmod	_	_
5	nhìn thấy	nhìn thấy	VERB	_	_	0	root	_	_
6	bạn	bạn	PRON	_	Number=Sing|Person=2|PronType=Prs	5	obj	_	_
7	trong	trong	ADP	_	_	8	case	_	_
8	video	video	NOUN	_	_	5	obl	_	_
9	tiếp theo	tiếp theo	ADJ	_	_	8	amod	_	_
10	.	.	PUNCT	_	_	5	punct	_	SpaceAfter=No

~~~


