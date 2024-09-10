---
layout: base
title:  'Statistics of compound:svc in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `compound:svc`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-compound.html">compound</a></tt>.
There are also 11 other language-specific subtypes of `compound`: <tt><a href="vi_vtb-dep-compound-adj.html">compound:adj</a></tt>, <tt><a href="vi_vtb-dep-compound-amod.html">compound:amod</a></tt>, <tt><a href="vi_vtb-dep-compound-apr.html">compound:apr</a></tt>, <tt><a href="vi_vtb-dep-compound-atov.html">compound:atov</a></tt>, <tt><a href="vi_vtb-dep-compound-dir.html">compound:dir</a></tt>, <tt><a href="vi_vtb-dep-compound-pron.html">compound:pron</a></tt>, <tt><a href="vi_vtb-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="vi_vtb-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="vi_vtb-dep-compound-verbnoun.html">compound:verbnoun</a></tt>, <tt><a href="vi_vtb-dep-compound-vmod.html">compound:vmod</a></tt>, <tt><a href="vi_vtb-dep-compound-z.html">compound:z</a></tt>.

511 nodes (1%) are attached to their parents as `compound:svc`.

509 instances of `compound:svc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.02152641878669.

The following 8 pairs of parts of speech are connected with `compound:svc`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (453; 89% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt> (44; 9% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt> (6; 1% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound:svc	color:blue
1	Rồi	rồi	SCONJ	C	_	2	cc	_	_
2	chuyển	chuyển	VERB	V	_	0	root	_	_
3	về	về	VERB	V	_	2	compound:svc	_	_
4	tỉnh	tỉnh	NOUN	N	_	2	obj	_	_
5	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:svc	color:blue
1	Những	những	DET	Det	_	2	det	_	_
2	lần	lần	NOUN	N	_	5	obl:tmod	_	_
3	sau	sau	ADJ	Adj	_	2	amod	_	_
4	anh	anh	NOUN	N	_	5	nsubj	_	_
5	gọi	gọi	VERB	V	_	11	advcl	_	_
6	lại	lại	ADV	Adv	_	5	compound:svc	_	_
7	thì	thì	SCONJ	SC	_	11	mark	_	_
8	số	số	NOUN	N	_	11	nsubj	_	_
9	máy	máy	NOUN	N	_	8	nmod	_	_
10	này	này	PRON	Pro	_	8	det:pmod	_	_
11	tắt	tắt	VERB	V	_	0	root	_	_
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound:svc	color:blue
1	Sau	sau	ADP	Pre	_	5	obl	_	_
2	đó	đó	PRON	Pro	_	1	det:pmod	_	_
3	thì	thì	SCONJ	SC	_	5	mark	_	_
4	liên tục	liên tục	ADJ	Adj	_	5	advmod:adj	_	_
5	có	có	VERB	V	_	0	root	_	_
6	thư	thư	NOUN	N	_	8	nsubj	_	_
7	khủng bố	khủng bố	VERB	V	_	6	compound:vmod	_	_
8	gửi	gửi	VERB	V	_	5	ccomp	_	_
9	về	về	ADP	Pre	_	8	compound:svc	_	_
10	nhà	nhà	NOUN	N	_	9	obj	_	_
11	.	.	PUNCT	.	_	5	punct	_	_

~~~


