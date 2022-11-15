---
layout: base
title:  'Statistics of acl:tonp in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `acl:tonp`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-acl.html">acl</a></tt>.
There are also 3 other language-specific subtypes of `acl`: <tt><a href="vi_vtb-dep-acl-relcl.html">acl:relcl</a></tt>, <tt><a href="vi_vtb-dep-acl-subj.html">acl:subj</a></tt>, <tt><a href="vi_vtb-dep-acl-tmod.html">acl:tmod</a></tt>.

82 nodes (0%) are attached to their parents as `acl:tonp`.

82 instances of `acl:tonp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.03658536585366.

The following 3 pairs of parts of speech are connected with `acl:tonp`: <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (67; 82% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (13; 16% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 acl:tonp	color:blue
1	Sự	sự	NOUN	Nc	_	0	root	_	_
2	quản lý	quản lý	VERB	V	_	1	acl:tonp	_	_
3	"	"	PUNCT	``	_	4	punct	_	_
4	mềm yếu	mềm yếu	ADJ	Adj	_	1	amod	_	_
5	"	"	PUNCT	``	_	4	punct	_	_
6	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl:tonp	color:blue
1	Khó	khó	ADJ	Adj	_	0	root	_	_
2	mà	mà	SCONJ	SC	_	3	mark	_	_
3	giúp	giúp	VERB	V	_	1	xcomp	_	_
4	được	được	ADV	Adv	_	3	advmod	_	_
5	gì	gì	PRON	Pro	_	3	obj	_	_
6	cho	cho	ADP	Pre	_	7	case	_	_
7	nỗi	nỗi	NOUN	Nc	_	3	obl	_	_
8	buồn	buồn	ADJ	Adj	_	7	acl:tonp	_	_
9	khổ	khổ	ADJ	Adj	_	8	compound:adj	_	_
10	đó	đó	PRON	Pro	_	7	det:pmod	_	_
11	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl:tonp	color:blue
1	Trong	trong	ADP	Pre	_	2	case	_	_
2	cái	cái	NOUN	Nc	_	9	obl	_	_
3	thay da đổi thịt	thay da đổi thịt	X	X	_	2	acl:tonp	_	_
4	của	của	ADP	Pre	_	5	case	_	_
5	Thái Mỹ	Thái Mỹ	PROPN	NNP	_	2	nmod:poss	_	_
6	,	,	PUNCT	,	_	2	punct	_	_
7	nhiều	nhiều	ADJ	Adj	_	8	amod	_	_
8	người	người	NOUN	N	_	9	nsubj	_	_
9	nhắc	nhắc	VERB	V	_	0	root	_	_
10	đến	đến	ADP	Pre	_	12	case	_	_
11	"	"	PUNCT	``	_	12	punct	_	_
12	tổ	tổ	NOUN	N	_	9	obl:about	_	_
13	nhân dân	nhân dân	NOUN	N	_	12	compound	_	_
14	"	"	PUNCT	``	_	12	punct	_	_
15	.	.	PUNCT	.	_	9	punct	_	_

~~~


