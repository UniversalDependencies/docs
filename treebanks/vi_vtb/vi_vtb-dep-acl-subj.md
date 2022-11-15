---
layout: base
title:  'Statistics of acl:subj in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `acl:subj`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-acl.html">acl</a></tt>.
There are also 3 other language-specific subtypes of `acl`: <tt><a href="vi_vtb-dep-acl-relcl.html">acl:relcl</a></tt>, <tt><a href="vi_vtb-dep-acl-tmod.html">acl:tmod</a></tt>, <tt><a href="vi_vtb-dep-acl-tonp.html">acl:tonp</a></tt>.

674 nodes (2%) are attached to their parents as `acl:subj`.

671 instances of `acl:subj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.74777448071217.

The following 14 pairs of parts of speech are connected with `acl:subj`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (556; 82% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (44; 7% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (34; 5% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (15; 2% instances), <tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (10; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 acl:subj	color:blue
1	Khi	khi	NOUN	N	_	7	obl:tmod	_	_
2	vào	vào	VERB	V	_	1	acl:tmod	_	_
3	quét	quét	VERB	V	_	2	xcomp	_	_
4	chuồng	chuồng	NOUN	N	_	3	obj	_	_
5	,	,	PUNCT	,	_	1	punct	_	_
6	nó	nó	PRON	Pro	_	7	nsubj	_	_
7	vượt	vượt	VERB	V	_	0	root	_	_
8	qua	qua	ADV	Adv	_	7	compound:svc	_	_
9	song	song	NOUN	N	_	7	obj	_	_
10	sắt	sắt	NOUN	N	_	9	compound	_	_
11	khép	khép	VERB	V	_	9	acl:subj	_	_
12	hờ	hờ	ADJ	Adj	_	11	xcomp	_	_
13	lao	lao	VERB	V	_	7	xcomp	_	_
14	vào	vào	ADP	Pre	_	15	case	_	_
15	anh	anh	NOUN	N	_	13	obl:comp	_	_
16	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 acl:subj	color:blue
1	Hai	hai	NUM	Num	_	2	nummod	_	_
2	chị	chị	NOUN	N	_	3	nsubj	_	_
3	lấy	lấy	VERB	V	_	0	root	_	_
4	từ	từ	ADP	Pre	_	6	case	_	_
5	trong	trong	ADP	Pre	_	6	case	_	_
6	túi xách	túi xách	NOUN	N	_	3	obl:comp	_	_
7	ra	ra	ADV	Adv	_	3	advmod:dir	_	_
8	một	một	NUM	Num	_	10	nummod	_	_
9	cuốn	cuốn	NOUN	Nc	_	8	clf	_	_
10	nhật ký	nhật ký	NOUN	N	_	3	obj	_	_
11	đã	đã	ADV	Adv	_	12	advmod	_	_
12	ố	ố	ADJ	Adj	_	10	acl:subj	_	_
13	vàng	vàng	ADJ	Adj	_	12	compound:adj	_	_
14	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl:subj	color:blue
1	Bà	bà	NOUN	N	_	3	nsubj	_	_
2	không	không	ADV	Adv	_	3	advmod:neg	_	_
3	muốn	muốn	VERB	V	_	0	root	_	_
4	Nụ	Nụ	PROPN	NNP	_	3	obj	_	_
5	quan hệ	quan hệ	VERB	V	_	4	acl:subj	_	_
6	với	với	ADP	Pre	_	7	case	_	_
7	Hùng	Hùng	PROPN	NNP	_	5	obl:with	_	_
8	nhưng	nhưng	SCONJ	SC	_	13	mark	_	_
9	lý do	lý do	NOUN	N	_	13	nsubj	_	_
10	của	của	ADP	Pre	_	11	case	_	_
11	bà	bà	NOUN	N	_	9	nmod:poss	_	_
12	rất	rất	ADV	Adv	_	13	advmod	_	_
13	mơ hồ	mơ hồ	ADJ	Adj	_	3	advcl	_	_
14	.	.	PUNCT	.	_	3	punct	_	_

~~~


