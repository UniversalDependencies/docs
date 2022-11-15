---
layout: base
title:  'Statistics of advmod:adj in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `advmod:adj`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="vi_vtb-dep-advmod-dir.html">advmod:dir</a></tt>, <tt><a href="vi_vtb-dep-advmod-neg.html">advmod:neg</a></tt>.

402 nodes (1%) are attached to their parents as `advmod:adj`.

214 instances of `advmod:adj` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35074626865672.

The following 12 pairs of parts of speech are connected with `advmod:adj`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (238; 59% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (96; 24% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (19; 5% instances), <tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (14; 3% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt> (10; 2% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt> (9; 2% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt> (8; 2% instances), <tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-NUM.html">NUM</a></tt>-<tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="vi_vtb-pos-X.html">X</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advmod:adj	color:blue
1	Du kích	du kích	NOUN	N	_	2	nsubj	_	_
2	rút	rút	VERB	V	_	0	root	_	_
3	êm	êm	ADJ	Adj	_	2	advmod:adj	_	_
4	xuống	xuống	ADP	Pre	_	5	case	_	_
5	lòng	lòng	NOUN	N	_	2	obl:comp	_	_
6	đất	đất	NOUN	N	_	5	compound	_	_
7	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advmod:adj	color:blue
1	Đó	đó	PRON	Pro	_	5	nsubj	_	_
2	là	là	AUX	V	_	5	cop	_	_
3	khoảng	khoảng	ADJ	Adj	_	5	advmod:adj	_	_
4	cuối	cuối	ADJ	Adj	_	5	compound:amod	_	_
5	năm	năm	NOUN	N	_	0	root	_	_
6	1963	1963	NUM	Num	_	5	flat:date	_	_
7	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 advmod:adj	color:blue
1	Những	những	DET	Det	_	2	det	_	_
2	quan khách	quan khách	NOUN	N	_	5	nsubj	_	_
3	lịch lãm	lịch lãm	ADJ	Adj	_	2	amod	_	_
4	ấy	ấy	PRON	Pro	_	2	det:pmod	_	_
5	ngửa	ngửa	VERB	V	_	0	root	_	_
6	mặt	mặt	NOUN	N	_	5	obj	_	_
7	cười	cười	VERB	V	_	5	xcomp	_	_
8	đầy	đầy	ADJ	Adj	_	9	advmod:adj	_	_
9	mãn nguyện	mãn nguyện	ADJ	Adj	_	7	xcomp	_	_
10	.	.	PUNCT	.	_	5	punct	_	_

~~~


