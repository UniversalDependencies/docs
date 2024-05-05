---
layout: base
title:  'Statistics of amod in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `amod`

This relation is universal.

60 nodes (3%) are attached to their parents as `amod`.

51 instances of `amod` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.3.

The following 5 pairs of parts of speech are connected with `amod`: <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-ADJ.html">ADJ</a></tt> (54; 90% instances), <tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_tuecl-pos-ADJ.html">ADJ</a></tt> (3; 5% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="vi_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 amod	color:blue
1	Hắn	hắn	PRON	_	Gender=Masc|Number=Sing|Person=3|Polite=Infm|PronType=Prs	2	nsubj	_	_
2	trầm tĩnh	trầm tĩnh	VERB	_	_	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	có	có	VERB	_	_	2	conj	_	_
5	uống	uống	VERB	_	_	4	xcomp	_	_
6	rượu	rượu	NOUN	_	_	5	obj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	_	_
8	nhưng	nhưng	CCONJ	_	_	11	cc	_	_
9	không	không	ADV	_	Polarity=Neg	11	advmod	_	_
10	tới	tới	ADP	_	_	11	case	_	_
11	nỗi	nỗi	NOUN	_	_	2	conj	_	_
12	say	say	ADJ	_	_	11	amod	_	_
13	quá	quá	ADV	_	AdvType=Deg	12	advmod	_	_
14	.	.	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Lớn	lớn	ADJ	_	_	2	amod	_	_
2	lên	lên	VERB	_	_	5	advcl	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	chỉ	chỉ	ADV	_	AdvType=Mod	5	advmod	_	_
5	có	có	VERB	_	_	0	root	_	_
6	sáu	sáu	NUM	_	NumType=Card	7	nummod	_	_
7	người	người	NOUN	_	_	5	nsubj	_	_
8	Ả Rập	Ả Rập	PROPN	_	NameType=Nat	7	nmod	_	_
9	trong	trong	ADP	_	_	10	case	_	_
10	thành phố	thành phố	NOUN	_	_	7	nmod	_	_
11	của	của	ADP	_	_	12	case	_	_
12	tôi	tôi	PRON	_	Number=Sing|Person=1|PronType=Prs	10	nmod:poss	_	SpaceAfter=No
13	,	,	PUNCT	_	_	19	punct	_	_
14	và	và	CCONJ	_	_	19	cc	_	_
15	tất cả	tất cả	DET	_	PronType=Tot	16	det	_	_
16	họ	họ	PRON	_	Number=Plur|Person=3|PronType=Prs	19	nsubj	_	_
17	đều	đều	ADV	_	_	19	advmod	_	_
18	là	là	AUX	_	VerbType=Cop	19	cop	_	_
19	thành viên	thành viên	NOUN	_	_	5	conj	_	_
20	trong	trong	ADP	_	_	21	case	_	_
21	gia đình	gia đình	NOUN	_	_	19	nmod	_	_
22	tôi	tôi	PRON	_	Number=Sing|Person=1|PronType=Prs	21	nmod:poss	_	_
23	.	.	PUNCT	_	_	5	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 14 amod	color:blue
1	Cả hai	cả hai	DET	_	PronType=Tot	2	det	_	_
2	bệnh nhân	bệnh nhân	NOUN	N	_	5	nsubj	_	_
3	đều	đều	ADV	_	_	5	advmod	_	_
4	được	được	AUX	_	VerbType=Aux|Voice=Pass	5	aux:pass	_	_
5	đưa	đưa	VERB	_	_	0	root	_	_
6	vào	vào	ADP	_	_	5	compound:prt	_	_
7	bởi	bởi	ADP	_	_	8	case	_	_
8	bác sĩ	bác sĩ	NOUN	_	_	5	obl	_	_
9	Leed	Leed	PROPN	_	NameType=Prs	8	compound	_	SpaceAfter=No
10	,	,	PUNCT	_	_	16	punct	_	_
11	cả hai	cả hai	DET	_	PronType=Tot	16	nsubj	_	_
12	đều	đều	ADV	_	_	16	advmod	_	_
13	không	không	ADV	_	Polarity=Neg	16	advmod	_	_
14	phải	phải	AUX	_	VerbType=Aux	16	amod	_	_
15	là	là	AUX	_	_	16	cop	_	_
16	khách	khách	NOUN	_	_	5	advcl	_	_
17	quen thuộc	quen thuộc	ADJ	_	_	16	amod	_	_
18	của	của	ADP	_	_	19	case	_	_
19	anh ta	anh ta	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	16	nmod	_	_
20	.	.	PUNCT	_	_	5	punct	_	SpaceAfter=No

~~~


