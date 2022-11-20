---
layout: base
title:  'Statistics of compound:adj in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `compound:adj`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-compound.html">compound</a></tt>.
There are also 11 other language-specific subtypes of `compound`: <tt><a href="vi_vtb-dep-compound-amod.html">compound:amod</a></tt>, <tt><a href="vi_vtb-dep-compound-apr.html">compound:apr</a></tt>, <tt><a href="vi_vtb-dep-compound-atov.html">compound:atov</a></tt>, <tt><a href="vi_vtb-dep-compound-dir.html">compound:dir</a></tt>, <tt><a href="vi_vtb-dep-compound-pron.html">compound:pron</a></tt>, <tt><a href="vi_vtb-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="vi_vtb-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="vi_vtb-dep-compound-svc.html">compound:svc</a></tt>, <tt><a href="vi_vtb-dep-compound-verbnoun.html">compound:verbnoun</a></tt>, <tt><a href="vi_vtb-dep-compound-vmod.html">compound:vmod</a></tt>, <tt><a href="vi_vtb-dep-compound-z.html">compound:z</a></tt>.

9 nodes (0%) are attached to their parents as `compound:adj`.

9 instances of `compound:adj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `compound:adj`: <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (8; 89% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-X.html">X</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 compound:adj	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 compound:adj	color:blue
1	Đẻ	đẻ	VERB	V	_	0	root	_	_
2	bốn	bốn	NUM	Num	_	4	nummod	_	_
3	đứa	đứa	NOUN	Nc	_	2	clf	_	_
4	con	con	NOUN	N	_	1	obj	_	_
5	,	,	PUNCT	,	_	6	punct	_	_
6	nuôi	nuôi	VERB	V	_	1	parataxis	_	_
7	đứa	đứa	NOUN	Nc	_	10	nsubj	_	_
8	nào	nào	PRON	Pro	_	7	det:pmod	_	_
9	cũng	cũng	ADV	Adv	_	10	advmod	_	_
10	mạnh	mạnh	ADJ	Adj	_	6	xcomp	_	_
11	khù	khù	X	X	_	10	compound:adj	_	_
12	!	!	PUNCT	!	_	1	punct	_	_
13	"	"	PUNCT	``	_	1	punct	_	_
14	.	.	PUNCT	.	_	1	punct	_	_

~~~


