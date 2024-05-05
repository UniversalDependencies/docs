---
layout: base
title:  'Statistics of nmod:poss in UD_Vietnamese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-TueCL: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="vi_tuecl-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="vi_tuecl-dep-nmod-tmod.html">nmod:tmod</a></tt>.

19 nodes (1%) are attached to their parents as `nmod:poss`.

19 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.42105263157895.

The following 4 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-PRON.html">PRON</a></tt> (12; 63% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt> (5; 26% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="vi_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_tuecl-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:poss	color:blue
1	Quân đội	quân đội	NOUN	_	_	5	nsubj:pass	_	_
2	ông ấy	ông ấy	PRON	_	Gender=Masc|Number=Sing|Person=3|Polite=Form|PronType=Prs	1	nmod:poss	_	_
3	đã	đã	ADV	_	AdvType=Tim|Tense=Past	5	advmod	_	_
4	được	được	AUX	_	VerbType=Aux|Voice=Pass	5	aux:pass	_	_
5	rèn	rèn	VERB	_	_	0	root	_	_
6	dũa	dũa	VERB	_	Typo=Yes	5	xcomp	_	CorrectForm=giũa
7	qua	qua	ADP	_	_	8	case	_	_
8	hàng	hàng	NOUN	_	_	5	obl	_	_
9	trăm	trăm	NUM	_	_	8	nummod	_	_
10	trận	trận	NOUN	_	_	8	nmod	_	_
11	với	với	ADP	_	_	12	case	_	_
12	quân	quân	NOUN	_	_	10	nmod	_	_
13	Anh	Anh	ADJ	_	_	12	amod	_	_
14	.	.	PUNCT	_	_	5	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 nmod:poss	color:blue
1	Đâu	đâu	PRON	_	PronType=Int	4	nsubj	_	_
2	là	là	AUX	_	_	4	cop	_	_
3	tiềm năng	tiềm năng	ADJ	_	_	4	amod	_	_
4	ảnh hưởng	ảnh hưởng	NOUN	_	_	0	root	_	_
5	lên	lên	ADP	_	_	6	case	_	_
6	khả năng	khả năng	NOUN	_	_	4	nmod	_	_
7	nhìn	nhìn	VERB	_	_	6	acl	_	_
8	của	của	ADP	_	_	9	case	_	_
9	bệnh nhân	bệnh nhân	NOUN	_	_	6	nmod:poss	_	_
10	?	?	PUNCT	_	_	4	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 nmod:poss	color:blue
1	Không	không	ADV	_	Polarity=Neg	4	advmod	_	_
2	phải	phải	AUX	_	VerbType=Aux	4	aux	_	_
3	của	của	ADP	_	_	4	case	_	_
4	ông	ông	PRON	_	Gender=Masc|Number=Sing|Person=2|Polite=Form|PronType=Prs	15	advcl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	10	punct	_	_
6	cũng	cũng	ADV	_	_	10	advmod	_	_
7	không	không	ADV	_	Polarity=Neg	10	advmod	_	_
8	phải	phải	AUX	_	VerbType=Aux	10	aux	_	_
9	của	của	ADP	_	_	10	case	_	_
10	chúng tôi	chúng tôi	PRON	_	Number=Plur|Person=1|PronType=Prs	4	conj	_	SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	_	_
12	vậy	vậy	PART	_	_	15	discourse	_	_
13	hắn	hắn	PRON	_	Gender=Masc|Number=Sing|Person=3|Polite=Infm|PronType=Prs	15	nsubj	_	_
14	ở	ở	ADP	_	_	15	case	_	_
15	phe	phe	NOUN	_	_	0	root	_	_
16	ai	ai	DET	_	PronType=Int	15	nmod:poss	_	_
17	?	?	PUNCT	_	_	15	punct	_	SpaceAfter=No

~~~


