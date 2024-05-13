---
layout: base
title:  'Statistics of acl:relcl in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-acl.html">acl</a></tt>.
There are also 3 other language-specific subtypes of `acl`: <tt><a href="vi_vtb-dep-acl-subj.html">acl:subj</a></tt>, <tt><a href="vi_vtb-dep-acl-tmod.html">acl:tmod</a></tt>, <tt><a href="vi_vtb-dep-acl-tonp.html">acl:tonp</a></tt>.

23 nodes (0%) are attached to their parents as `acl:relcl`.

23 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.30434782608696.

The following 4 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (20; 87% instances), <tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl:relcl	color:blue
1	Hùng	hùng	PROPN	NNP	_	2	nsubj	_	_
2	giật mình	giật mình	VERB	V	_	0	root	_	_
3	:	:	PUNCT	:	_	8	punct	_	_
4	"	"	PUNCT	``	_	8	punct	_	_
5	Nhưng	nhưng	SCONJ	SC	_	8	mark	_	_
6	đó	đó	PRON	Pro	_	8	nsubj	_	_
7	là	là	AUX	V	_	8	cop	_	_
8	nhà	nhà	NOUN	N	_	2	parataxis	_	_
9	ông	ông	NOUN	N	_	10	nsubj	_	_
10	thuê	thuê	VERB	V	_	8	acl:relcl	_	_
11	cơ mà	cơ mà	PART	Prt	_	8	discourse	_	_
12	?	?	PUNCT	?	_	8	punct	_	_
13	"	"	PUNCT	``	_	8	punct	_	_
14	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 41	bgColor:blue
# visual-style 41	fgColor:white
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 38 41 acl:relcl	color:blue
1	Ngày	ngày	NOUN	N	_	15	obl:tmod	_	_
2	13/9	13/9	NUM	Num	_	1	flat:date	_	_
3	,	,	PUNCT	N	_	15	punct	_	_
4	Luo Qili	luo qili	PROPN	NNP	_	15	nsubj	_	_
5	,	,	PUNCT	PUNCT	_	7	punct	_	_
6	một	một	NUM	Num	_	7	nummod	_	_
7	người	người	NOUN	N	_	4	appos	_	_
8	bán	bán	VERB	V	_	7	acl:subj	_	_
9	quần áo	quần áo	NOUN	N	_	8	obj	_	_
10	trong	trong	ADP	Pre	_	12	case	_	_
11	các	các	DET	Det	_	12	det	_	_
12	bản	bản	NOUN	Nc	_	8	obl	_	_
13	,	,	PROPN	NNP	_	15	compound	_	_
14	đã	đã	ADV	Adv	_	15	advmod	_	_
15	xem	xem	VERB	V	_	0	root	_	_
16	kỹ	kỹ	ADJ	Adj	_	15	advmod:adj	_	_
17	video	video	NOUN	NB	_	15	obj	_	_
18	về	về	ADP	Pre	_	19	case	_	_
19	phản ứng	phản ứng	NOUN	N	_	15	obl:about	_	_
20	của	của	ADP	Pre	_	21	case	_	_
21	mẹ	mẹ	NOUN	N	_	19	nmod:poss	_	_
22	Xinmei	xinmei	PROPN	NNP	_	21	compound	_	_
23	trước	trước	NOUN	N	_	24	case	_	_
24	thác	thác	NOUN	N	_	15	obl:comp	_	_
25	nước	nước	NOUN	N	_	24	compound	_	_
26	và	và	CCONJ	CC	_	28	cc	_	_
27	con	con	NOUN	N	_	28	clf:det	_	_
28	đường	đường	NOUN	N	_	24	conj	_	_
29	24	24	NUM	Num	_	30	nummod	_	_
30	khúc	khúc	NOUN	N	_	28	nmod	_	_
31	cua	cua	NOUN	N	_	30	compound	_	_
32	,	,	PUNCT	PUNCT	_	35	punct	_	_
33	qua	qua	VERB	V	_	35	advcl	_	_
34	đó	đó	PRON	Pro	_	33	obj	_	_
35	nhận	nhận	VERB	V	_	15	conj	_	_
36	thấy	thấy	VERB	V	_	35	compound:svc	_	_
37	hai	hai	NUM	Num	_	38	nummod	_	_
38	từ	từ	ADP	Pre	_	35	obj	_	_
39	mà	mà	SCONJ	SC	_	41	mark	_	_
40	bà	bà	NOUN	N	_	41	nsubj	_	_
41	nói	nói	VERB	V	_	38	acl:relcl	_	_
42	:	:	PUNCT	PUNCT	_	44	punct	_	_
43	"	"	PUNCT	PUNCT	_	44	punct	_	_
44	Bollings	bollings	NOUN	NNP	_	41	parataxis	_	_
45	"	"	PUNCT	PUNCT	_	44	punct	_	_
46	và	và	CCONJ	CC	_	48	cc	_	_
47	"	"	PUNCT	PUNCT	_	48	punct	_	_
48	Ndaelndongl	ndaelndongl	PROPN	NNP	_	44	conj	_	_
49	"	"	PUNCT	PUNCT	_	48	punct	_	_
50	.	.	PUNCT	PUNCT	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 20 acl:relcl	color:blue
1	Phía	phía	NOUN	N	_	7	obl	_	_
2	sau	sau	NOUN	N	_	1	compound	_	_
3	cột	cột	NOUN	N	_	1	nmod	_	_
4	đá	đá	NOUN	N	_	3	compound	_	_
5	sừng sững	sừng sững	ADJ	ADJ	_	3	amod	_	_
6	lại	lại	ADV	ADV	_	7	advmod	_	_
7	hiện	hiện	VERB	V	_	0	root	_	_
8	những	những	DET	DET	_	9	det	_	_
9	cửa	cửa	NOUN	N	_	7	obj	_	_
10	hang	hang	NOUN	N	_	9	compound	_	_
11	khác	khác	ADJ	ADJ	_	9	amod	_	_
12	,	,	PUNCT	PUNCT	_	13	punct	_	_
13	sâu	sâu	ADJ	ADJ	_	9	acl:subj	_	_
14	hun hút	hun hút	ADJ	ADJ	_	13	compound:adj	_	_
15	mà	mà	SCONJ	C	_	20	mark	_	_
16	ánh	ánh	NOUN	N	_	17	clf:det	_	_
17	đèn	đèn	NOUN	N	_	20	nsubj	_	_
18	ăcqui	ăcqui	NOUN	NB	_	17	compound	_	_
19	không	không	ADV	ADV	_	20	advmod:neg	_	_
20	đủ	đủ	ADJ	ADJ	_	9	acl:relcl	_	_
21	sức	sức	NOUN	N	_	20	obl:adv	_	_
22	chiếu	chiếu	VERB	V	_	21	acl:subj	_	_
23	sáng	sáng	NOUN	N	_	22	compound:verbnoun	_	_
24	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


