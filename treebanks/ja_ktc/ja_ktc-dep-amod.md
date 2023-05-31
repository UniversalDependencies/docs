---
layout: base
title:  'Statistics of amod in UD_Japanese-KTC'
udver: '2'
---

## Treebank Statistics: UD_Japanese-KTC: Relations: `amod`

This relation is universal.

1375 nodes (1%) are attached to their parents as `amod`.

1375 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.50763636363636.

The following 4 pairs of parts of speech are connected with `amod`: <tt><a href="ja_ktc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_ktc-pos-ADJ.html">ADJ</a></tt> (1301; 95% instances), <tt><a href="ja_ktc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_ktc-pos-NOUN.html">NOUN</a></tt> (66; 5% instances), <tt><a href="ja_ktc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja_ktc-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="ja_ktc-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_ktc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 15 amod	color:blue
1	_	タケムラ	PROPN	PROPN	_	2	compound	_	Offset=0-2
2	_	_	NOUN	NOUN	_	23	nsubj	_	Offset=2-3
3	_	_	ADP	ADP	_	2	case	_	Offset=3-4
4	_	_	NOUN	NOUN	_	13	nmod	_	Offset=4-7
5	_	_	PUNCT	PUNCT	_	4	punct	_	Offset=7-8
6	_	クボ	PROPN	PROPN	_	7	compound	_	Offset=8-10
7	_	_	NOUN	NOUN	_	13	iobj	_	Offset=10-11
8	_	_	ADP	ADP	_	7	case	_	Offset=11-12
9	_	_	ADP	ADP	_	7	case	_	Offset=12-13
10	_	トウキョウ	PROPN	PROPN	_	11	compound	_	Offset=13-15
11	_	_	NOUN	NOUN	_	13	nmod	_	Offset=15-17
12	_	_	ADP	ADP	_	11	case	_	Offset=17-18
13	_	_	VERB	VERB	_	23	advcl	_	Offset=18-20
14	_	_	PUNCT	PUNCT	_	13	punct	_	Offset=20-21
15	_	_	ADJ	ADJ	_	17	amod	_	Offset=21-25
16	_	_	NOUN	NOUN	_	17	compound	_	Offset=25-27
17	_	_	NOUN	NOUN	_	19	dep	_	Offset=27-29
18	_	_	ADP	ADP	_	19	dep	_	Offset=29-30
19	_	つく	VERB	VERB	_	23	advcl	_	Offset=30-32
20	_	_	SCONJ	SCONJ	_	19	mark	_	Offset=32-33
21	_	_	NOUN	NOUN	_	22	compound	_	Offset=33-35
22	_	_	NOUN	NOUN	_	23	dep	_	Offset=35-37
23	_	為る	VERB	VERB	_	0	root	_	Offset=37-38
24	_	_	AUX	AUX	_	23	aux	_	Offset=38-39
25	_	_	PUNCT	PUNCT	_	23	punct	_	Offset=39-40

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 amod	color:blue
1	_	其の	DET	DET	_	2	det	_	Offset=0-2
2	_	_	NOUN	NOUN	_	14	advcl	_	Offset=2-6
3	_	だ	AUX	AUX	_	2	cop	_	Offset=6-7
4	_	_	PUNCT	PUNCT	_	2	punct	_	Offset=7-8
5	_	_	NOUN	NOUN	_	6	nmod	_	Offset=8-10
6	_	纏める	VERB	VERB	_	10	acl	_	Offset=10-13
7	_	_	AUX	AUX	_	6	aux	_	Offset=13-14
8	_	_	NOUN	NOUN	_	10	nmod	_	Offset=14-16
9	_	_	ADP	ADP	_	8	case	_	Offset=16-17
10	_	_	NOUN	NOUN	_	14	nsubj	_	Offset=17-19
11	_	_	ADP	ADP	_	10	case	_	Offset=19-20
12	_	_	NOUN	NOUN	_	14	amod	_	Offset=20-22
13	_	だ	AUX	AUX	_	12	cop	_	Offset=22-23
14	_	_	NOUN	NOUN	_	0	root	_	Offset=23-27
15	_	_	AUX	AUX	_	14	cop	_	Offset=27-28
16	_	_	PUNCT	PUNCT	_	14	punct	_	Offset=28-29

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 amod	color:blue
1	_	マッチ-match（合致・試合）	NOUN	NOUN	_	2	compound	_	Offset=0-3
2	_	レース-race（競争）	NOUN	NOUN	_	16	nmod	_	Offset=3-6
3	_	_	ADP	ADP	_	2	case	_	Offset=6-7
4	_	_	ADP	ADP	_	2	case	_	Offset=7-8
5	_	二	NUM	NUM	_	6	nummod	_	Offset=8-9
6	_	_	NOUN	NOUN	_	11	nsubj	_	Offset=9-10
7	_	_	ADP	ADP	_	6	case	_	Offset=10-11
8	_	_	ADJ	ADJ	_	9	amod	_	Offset=11-14
9	_	_	PROPN	PROPN	_	11	dobj	_	Offset=14-17
10	_	_	ADP	ADP	_	9	case	_	Offset=17-18
11	_	繰り返す	VERB	VERB	_	14	nmod	_	Offset=18-22
12	_	_	SCONJ	SCONJ	_	11	mark	_	Offset=22-25
13	_	_	ADP	ADP	_	11	dep	_	Offset=25-26
14	_	_	NOUN	NOUN	_	16	iobj	_	Offset=26-28
15	_	_	ADP	ADP	_	14	case	_	Offset=28-29
16	_	成る	VERB	VERB	_	0	root	_	Offset=29-31
17	_	_	PUNCT	PUNCT	_	16	punct	_	Offset=31-32

~~~


