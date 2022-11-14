---
layout: base
title:  'Statistics of nsubj:pass in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="vi_vtb-dep-nsubj-nn.html">nsubj:nn</a></tt>, <tt><a href="vi_vtb-dep-nsubj-xsubj.html">nsubj:xsubj</a></tt>.

170 nodes (0%) are attached to their parents as `nsubj:pass`.

169 instances of `nsubj:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.77058823529412.

The following 11 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (127; 75% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (14; 8% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (14; 8% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="vi_vtb-pos-X.html">X</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="vi_vtb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="vi_vtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="vi_vtb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 2 nsubj:pass	color:blue
1	Chú	chú	NOUN	Nc	_	2	clf:det	_	_
2	hổ	hổ	NOUN	N	_	14	nsubj:pass	_	_
3	do	do	ADP	Pre	_	5	case	_	_
4	chính	chính	PART	Prt	_	5	discourse	_	_
5	bàn tay	bàn tay	NOUN	N	_	2	obl	_	_
6	các	các	DET	Det	_	8	det	_	_
7	"	"	PUNCT	``	_	8	punct	_	_
8	bà đỡ	bà đỡ	NOUN	N	_	5	nmod:poss	_	_
9	"	"	PUNCT	``	_	8	punct	_	_
10	vườn	vườn	NOUN	N	_	5	obl	_	_
11	thú	thú	NOUN	N	_	10	compound	_	_
12	Hà Nội	Hà Nội	PROPN	NNP	_	10	nmod	_	_
13	đã	đã	ADV	Adv	_	14	advmod	_	_
14	ra đời	ra đời	VERB	V	_	0	root	_	_
15	.	.	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nsubj:pass	color:blue
1	Bà	bà	NOUN	N	_	2	nsubj	_	_
2	nghẹn ngào	nghẹn ngào	VERB	V	_	0	root	_	_
3	:	:	PUNCT	:	_	2	punct	_	_
4	"	"	PUNCT	``	_	9	punct	_	_
5	có	có	VERB	V	_	9	advcl	_	_
6	khi	khi	NOUN	N	_	5	compound	_	_
7	nó	nó	PRON	Pro	_	9	nsubj:pass	_	_
8	bị	bị	AUX	AUX	_	9	aux:pass	_	_
9	chở	chở	VERB	V	_	2	parataxis	_	_
10	về	về	VERB	V	_	9	compound:dir	_	_
11	bằng	bằng	ADP	Pre	_	12	case	_	_
12	xe	xe	NOUN	N	_	9	obl	_	_
13	heo	heo	NOUN	N	_	12	compound	_	_
14	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 nsubj:pass	color:blue
1	Hàng phố	hàng phố	NOUN	N	_	2	nsubj	_	_
2	nói	nói	VERB	V	_	0	root	_	_
3	Liên	Liên	PROPN	NNP	_	7	nsubj:pass	_	_
4	vừa	vừa	ADV	Adv	_	7	advmod	_	_
5	được	được	AUX	AUX	_	7	aux:pass	_	_
6	nhà trai	nhà trai	NOUN	N	_	7	obl:agent	_	_
7	ăn hỏi	ăn hỏi	VERB	V	_	2	ccomp	_	_
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


