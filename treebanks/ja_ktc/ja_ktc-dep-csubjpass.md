---
layout: base
title:  'Statistics of csubjpass in UD_Japanese-KTC'
udver: '2'
---

## Treebank Statistics: UD_Japanese-KTC: Relations: `csubjpass`

This relation is universal.

4 nodes (0%) are attached to their parents as `csubjpass`.

4 instances of `csubjpass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 11.75.

The following 2 pairs of parts of speech are connected with `csubjpass`: <tt><a href="ja_ktc-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_ktc-pos-VERB.html">VERB</a></tt> (3; 75% instances), <tt><a href="ja_ktc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_ktc-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 csubjpass	color:blue
1	_	_	NOUN	NOUN	_	3	dobj	_	Offset=0-3
2	_	_	ADP	ADP	_	1	case	_	Offset=3-4
3	_	_	VERB	VERB	_	7	csubjpass	_	Offset=4-6
4	_	為る	AUX	AUX	_	3	aux	_	Offset=6-8
5	_	_	SCONJ	SCONJ	_	3	mark	_	Offset=8-9
6	_	_	ADP	ADP	_	3	case	_	Offset=9-10
7	_	買う	VERB	VERB	_	0	root	_	Offset=10-12
8	_	れる	AUX	AUX	_	7	auxpass	_	Offset=12-13
9	_	_	AUX	AUX	_	7	aux	_	Offset=13-14
10	_	_	SCONJ	SCONJ	_	7	mark	_	Offset=14-15
11	_	_	AUX	AUX	_	7	cop	_	Offset=15-16
12	_	_	PUNCT	PUNCT	_	7	punct	_	Offset=16-17

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 1 csubjpass	color:blue
1	_	_	NOUN	NOUN	_	34	csubjpass	_	Offset=0-2
2	_	だ	AUX	AUX	_	1	cop	_	Offset=2-3
3	_	_	SCONJ	SCONJ	_	1	mark	_	Offset=3-4
4	_	_	ADP	ADP	_	1	case	_	Offset=4-5
5	_	_	NOUN	NOUN	_	9	nsubj	_	Offset=5-7
6	_	_	ADP	ADP	_	5	case	_	Offset=7-8
7	_	グローバル-global	ADJ	ADJ	_	8	amod	_	Offset=8-13
8	_	_	NOUN	NOUN	_	9	dep	_	Offset=13-14
9	_	為る	VERB	VERB	_	13	case	_	Offset=14-16
10	_	_	SCONJ	SCONJ	_	9	mark	_	Offset=16-17
11	_	_	ADP	ADP	_	9	case	_	Offset=17-18
12	_	_	ADP	ADP	_	9	case	_	Offset=18-19
13	_	_	NOUN	NOUN	_	32	nmod	_	Offset=19-20
14	_	だ	AUX	AUX	_	13	cop	_	Offset=20-21
15	_	_	PUNCT	PUNCT	_	13	punct	_	Offset=21-22
16	_	_	ADJ	ADJ	_	17	amod	_	Offset=22-24
17	_	_	NOUN	NOUN	_	19	nmod	_	Offset=24-25
18	_	_	ADP	ADP	_	17	case	_	Offset=25-26
19	_	_	NOUN	NOUN	_	23	nsubj	_	Offset=26-28
20	_	_	ADP	ADP	_	19	case	_	Offset=28-29
21	_	_	NOUN	NOUN	_	23	iobj	_	Offset=29-32
22	_	_	ADP	ADP	_	21	case	_	Offset=32-33
23	_	成る	VERB	VERB	_	32	advcl	_	Offset=33-35
24	_	_	PUNCT	PUNCT	_	23	punct	_	Offset=35-36
25	_	_	NOUN	NOUN	_	26	compound	_	Offset=36-38
26	_	_	NOUN	NOUN	_	30	nmod	_	Offset=38-39
27	_	_	ADP	ADP	_	26	case	_	Offset=39-40
28	_	_	ADP	ADP	_	26	case	_	Offset=40-41
29	_	_	NOUN	NOUN	_	30	compound	_	Offset=41-43
30	_	_	NOUN	NOUN	_	32	nsubjpass	_	Offset=43-45
31	_	_	ADP	ADP	_	30	case	_	Offset=45-46
32	_	脅かす	VERB	VERB	_	34	acl	_	Offset=46-49
33	_	_	AUX	AUX	_	32	auxpass	_	Offset=49-51
34	_	事	NOUN	NOUN	_	0	root	_	Offset=51-53
35	_	_	AUX	AUX	_	34	cop	_	Offset=53-54
36	_	_	PUNCT	PUNCT	_	34	punct	_	Offset=54-55

~~~


