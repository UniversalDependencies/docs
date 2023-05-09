---
layout: base
title:  'Statistics of xcomp:adj in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `xcomp:adj`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-xcomp.html">xcomp</a></tt>.
There are also 2 other language-specific subtypes of `xcomp`: <tt><a href="vi_vtb-dep-xcomp-dir.html">xcomp:dir</a></tt>, <tt><a href="vi_vtb-dep-xcomp-vcomp.html">xcomp:vcomp</a></tt>.

131 nodes (0%) are attached to their parents as `xcomp:adj`.

129 instances of `xcomp:adj` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.18320610687023.

The following 5 pairs of parts of speech are connected with `xcomp:adj`: <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (120; 92% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (4; 3% instances), <tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp:adj	color:blue
1	Con	con	NOUN	N	_	2	clf:det	_	_
2	đường	đường	NOUN	N	_	6	nsubj:pass	_	_
3	biển	biển	NOUN	N	_	2	nmod	_	_
4	Đông	Đông	PROPN	NNP	_	3	compound	_	_
5	đã	đã	ADV	ADV	_	6	advmod	_	_
6	chính thức	chính thức	ADJ	ADJ	_	0	root	_	_
7	được	được	AUX	AUX	_	8	aux:pass	_	_
8	khai thông	khai thông	VERB	V	_	6	xcomp:adj	_	_
9	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp:adj	color:blue
1	Cường	cường	PROPN	NNP	_	2	nsubj	_	_
2	phân tích	phân tích	VERB	V	_	0	root	_	_
3	nếu	nếu	SCONJ	SC	_	4	mark	_	_
4	liên quan	liên quan	VERB	V	_	2	advcl	_	_
5	càng	càng	ADV	Adv	_	6	advmod	_	_
6	dễ	dễ	ADJ	Adj	_	4	xcomp:adj	_	_
7	tìm	tìm	VERB	V	_	6	xcomp:adj	_	_
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp:adj	color:blue
1	Người	người	NOUN	N	_	7	obl	_	_
2	này	này	PRON	Pro	_	1	det:pmod	_	_
3	ông	ông	NOUN	Nc	_	4	clf:det	_	_
4	Phong	Phong	PROPN	NNP	_	7	nsubj	_	_
5	cũng	cũng	ADV	Adv	_	7	advmod	_	_
6	phải	phải	AUX	AUX	_	7	aux	_	_
7	có	có	ADV	Adv	_	0	root	_	_
8	quen biết	quen biết	VERB	V	_	7	xcomp:adj	_	_
9	.	.	PUNCT	.	_	7	punct	_	_

~~~


