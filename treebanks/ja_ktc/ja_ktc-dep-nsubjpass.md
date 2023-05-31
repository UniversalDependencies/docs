---
layout: base
title:  'Statistics of nsubjpass in UD_Japanese-KTC'
udver: '2'
---

## Treebank Statistics: UD_Japanese-KTC: Relations: `nsubjpass`

This relation is universal.

598 nodes (0%) are attached to their parents as `nsubjpass`.

598 instances of `nsubjpass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.46153846153846.

The following 5 pairs of parts of speech are connected with `nsubjpass`: <tt><a href="ja_ktc-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_ktc-pos-NOUN.html">NOUN</a></tt> (584; 98% instances), <tt><a href="ja_ktc-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_ktc-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="ja_ktc-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_ktc-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="ja_ktc-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_ktc-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="ja_ktc-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_ktc-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 nsubjpass	color:blue
1	_	_	NOUN	NOUN	_	3	nmod	_	Offset=0-3
2	_	_	ADP	ADP	_	1	case	_	Offset=3-4
3	_	_	NOUN	NOUN	_	5	iobj	_	Offset=4-6
4	_	_	ADP	ADP	_	3	case	_	Offset=6-7
5	_	言う	VERB	VERB	_	6	acl	_	Offset=7-9
6	_	事	NOUN	NOUN	_	13	advcl	_	Offset=9-11
7	_	_	ADP	ADP	_	6	case	_	Offset=11-12
8	_	_	PRON	PRON	_	13	nsubj	_	Offset=12-14
9	_	_	ADP	ADP	_	8	case	_	Offset=14-15
10	_	_	ADJ	ADJ	_	11	amod	_	Offset=15-18
11	_	_	NOUN	NOUN	_	13	iobj	_	Offset=18-19
12	_	_	ADP	ADP	_	11	case	_	Offset=19-20
13	_	上る	VERB	VERB	_	21	advcl	_	Offset=20-22
14	_	_	AUX	AUX	_	13	aux	_	Offset=22-23
15	_	_	SCONJ	SCONJ	_	13	mark	_	Offset=23-26
16	_	_	PUNCT	PUNCT	_	13	punct	_	Offset=26-27
17	_	未だ	ADV	ADV	_	21	advmod	_	Offset=27-29
18	_	_	ADJ	ADJ	_	19	amod	_	Offset=29-33
19	_	_	NOUN	NOUN	_	21	nsubjpass	_	Offset=33-35
20	_	_	ADP	ADP	_	19	case	_	Offset=35-36
21	_	作る	VERB	VERB	_	0	root	_	Offset=36-38
22	_	れる	AUX	AUX	_	21	auxpass	_	Offset=38-39
23	_	_	SCONJ	SCONJ	_	21	mark	_	Offset=39-40
24	_	居る	AUX	AUX	_	21	aux	_	Offset=40-41
25	_	_	AUX	AUX	_	21	neg	_	Offset=41-43
26	_	_	PUNCT	PUNCT	_	21	punct	_	Offset=43-44

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 1 nsubjpass	color:blue
1	_	イスラエル-Israel	PROPN	PROPN	_	14	nsubjpass	_	Offset=0-5
2	_	_	PUNCT	PUNCT	_	1	punct	_	Offset=5-6
3	_	インド-India	PROPN	PROPN	_	1	conj	_	Offset=6-9
4	_	_	PUNCT	PUNCT	_	1	punct	_	Offset=9-10
5	_	パキスタン-Pakistan	PROPN	PROPN	_	1	conj	_	Offset=10-15
6	_	_	ADP	ADP	_	1	case	_	Offset=15-16
7	_	_	NOUN	NOUN	_	8	compound	_	Offset=16-18
8	_	_	NOUN	NOUN	_	12	nmod	_	Offset=18-19
9	_	_	ADP	ADP	_	8	case	_	Offset=19-20
10	_	_	NOUN	NOUN	_	12	compound	_	Offset=20-23
11	_	_	NOUN	NOUN	_	12	compound	_	Offset=23-25
12	_	_	NOUN	NOUN	_	14	nmod	_	Offset=25-26
13	_	_	ADP	ADP	_	12	case	_	Offset=26-27
14	_	見る	VERB	VERB	_	22	advcl	_	Offset=27-28
15	_	られる	AUX	AUX	_	14	auxpass	_	Offset=28-30
16	_	_	SCONJ	SCONJ	_	14	mark	_	Offset=30-31
17	_	居る	AUX	AUX	_	14	aux	_	Offset=31-33
18	_	_	SCONJ	SCONJ	_	14	mark	_	Offset=33-34
19	_	_	PUNCT	PUNCT	_	14	punct	_	Offset=34-35
20	_	_	NOUN	NOUN	_	22	iobj	_	Offset=35-38
21	_	_	ADP	ADP	_	20	case	_	Offset=38-39
22	_	_	VERB	VERB	_	0	root	_	Offset=39-41
23	_	為る	AUX	AUX	_	22	aux	_	Offset=41-42
24	_	_	SCONJ	SCONJ	_	22	mark	_	Offset=42-43
25	_	居る	AUX	AUX	_	22	aux	_	Offset=43-44
26	_	_	AUX	AUX	_	22	neg	_	Offset=44-46
27	_	_	PUNCT	PUNCT	_	22	punct	_	Offset=46-47

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 18 nsubjpass	color:blue
1	_	_	NOUN	NOUN	_	7	nmod	_	Offset=0-2
2	_	_	PUNCT	PUNCT	_	1	punct	_	Offset=2-3
3	_	_	NOUN	NOUN	_	1	conj	_	Offset=3-5
4	_	_	PUNCT	PUNCT	_	1	punct	_	Offset=5-6
5	_	リズム-rhythm	NOUN	NOUN	_	1	conj	_	Offset=6-9
6	_	_	ADP	ADP	_	1	case	_	Offset=9-10
7	_	_	NOUN	NOUN	_	11	dobj	_	Offset=10-12
8	_	_	ADP	ADP	_	7	case	_	Offset=12-13
9	_	_	NOUN	NOUN	_	11	iobj	_	Offset=13-15
10	_	_	ADP	ADP	_	9	case	_	Offset=15-16
11	_	為る	VERB	VERB	_	13	acl	_	Offset=16-17
12	_	_	AUX	AUX	_	11	aux	_	Offset=17-18
13	_	_	NOUN	NOUN	_	18	nmod	_	Offset=18-19
14	_	_	PUNCT	PUNCT	_	13	punct	_	Offset=19-20
15	_	何	PRON	PRON	_	18	dobj	_	Offset=20-22
16	_	_	ADP	ADP	_	15	case	_	Offset=22-23
17	_	_	ADV	ADV	_	18	advmod	_	Offset=23-25
18	_	_	VERB	VERB	_	28	nsubjpass	_	Offset=25-27
19	_	_	PART	PART	_	18	mark	_	Offset=27-28
20	_	_	ADP	ADP	_	18	dep	_	Offset=28-29
21	_	_	PUNCT	PUNCT	_	18	punct	_	Offset=29-30
22	_	其の	DET	DET	_	23	det	_	Offset=30-32
23	_	_	NOUN	NOUN	_	26	nmod	_	Offset=32-33
24	_	_	ADP	ADP	_	23	case	_	Offset=33-34
25	_	_	NOUN	NOUN	_	26	compound	_	Offset=34-36
26	_	_	NOUN	NOUN	_	28	iobj	_	Offset=36-37
27	_	_	ADP	ADP	_	26	case	_	Offset=37-38
28	_	返す	VERB	VERB	_	0	root	_	Offset=38-40
29	_	_	AUX	AUX	_	28	auxpass	_	Offset=40-43
30	_	_	PUNCT	PUNCT	_	28	punct	_	Offset=43-44

~~~


