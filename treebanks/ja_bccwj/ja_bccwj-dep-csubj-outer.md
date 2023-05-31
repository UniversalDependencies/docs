---
layout: base
title:  'Statistics of csubj:outer in UD_Japanese-BCCWJ'
udver: '2'
---

## Treebank Statistics: UD_Japanese-BCCWJ: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="ja_bccwj-dep-csubj.html">csubj</a></tt>.

30 nodes (0%) are attached to their parents as `csubj:outer`.

30 instances of `csubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 18.5333333333333.

The following 8 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="ja_bccwj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_bccwj-pos-VERB.html">VERB</a></tt> (19; 63% instances), <tt><a href="ja_bccwj-pos-ADV.html">ADV</a></tt>-<tt><a href="ja_bccwj-pos-VERB.html">VERB</a></tt> (4; 13% instances), <tt><a href="ja_bccwj-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_bccwj-pos-ADJ.html">ADJ</a></tt> (2; 7% instances), <tt><a href="ja_bccwj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_bccwj-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="ja_bccwj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_bccwj-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="ja_bccwj-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_bccwj-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="ja_bccwj-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_bccwj-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="ja_bccwj-pos-X.html">X</a></tt>-<tt><a href="ja_bccwj-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 4 csubj:outer	color:blue
1	_	_	NOUN	_	_	4	obl	_	BBIL=B|BPT=1|LBIL=B|LPOS=0|SpaceAfter=No|UI=553
2	_	_	ADP	_	_	1	case	_	BBIL=I|BPT=2|LBIL=B|LPOS=1|SpaceAfter=No|UI=9
3	_	_	PUNCT	_	_	1	punct	_	BBIL=I|BPT=0|LBIL=B|LPOS=2|SpaceAfter=No|UI=1
4	_	_	VERB	_	_	27	csubj:outer	_	BBIL=B|BPT=1|LBIL=B|LPOS=69|SpaceAfter=No|UI=6130
5	_	_	AUX	_	_	4	aux	_	BBIL=I|BPT=2|LBIL=B|LPOS=7|SpaceAfter=No|UI=117
6	_	_	SCONJ	_	_	4	mark	_	BBIL=I|BPT=3|LBIL=B|LPOS=37|SpaceAfter=No|UI=0
7	_	_	ADP	_	_	4	case	_	BBIL=I|BPT=3|LBIL=B|LPOS=6|SpaceAfter=No|UI=4
8	_	_	PUNCT	_	_	4	punct	_	BBIL=I|BPT=0|LBIL=B|LPOS=2|SpaceAfter=No|UI=1
9	_	_	NOUN	_	_	11	nmod	_	BBIL=B|BPT=1|LBIL=B|LPOS=0|SpaceAfter=No|UI=2736
10	_	_	ADP	_	_	9	case	_	BBIL=I|BPT=2|LBIL=B|LPOS=1|SpaceAfter=No|UI=0
11	_	_	NOUN	_	_	23	obl	_	BBIL=B|BPT=1|LBIL=B|LPOS=0|SpaceAfter=No|UI=857
12	_	_	ADP	_	_	11	case	_	BBIL=I|BPT=2|LBIL=B|LPOS=1|SpaceAfter=No|UI=5
13	_	_	NOUN	_	_	16	nmod	_	BBIL=B|BPT=1|LBIL=B|LPOS=0|SpaceAfter=No|UI=43775
14	_	_	ADP	_	_	13	case	_	BBIL=I|BPT=2|LBIL=B|LPOS=1|SpaceAfter=No|UI=0
15	_	_	NOUN	_	_	16	compound	_	BBIL=B|BPT=0|LBIL=B|LPOS=0|SpaceAfter=No|UI=149659
16	_	_	NOUN	_	_	23	obl	_	BBIL=I|BPT=1|LBIL=I|LPOS=0|SpaceAfter=No|UI=205320
17	_	_	ADP	_	_	16	case	_	BBIL=I|BPT=3|LBIL=B|LPOS=1|SpaceAfter=No|UI=53
18	_	_	AUX	_	_	17	fixed	_	BBIL=I|BPT=3|LBIL=I|LPOS=1|PUDL=する|SpaceAfter=No|UI=55
19	_	_	SCONJ	_	_	17	fixed	_	BBIL=I|BPT=2|LBIL=I|LPOS=1|SpaceAfter=No|UI=54
20	_	_	PUNCT	_	_	16	punct	_	BBIL=I|BPT=0|LBIL=B|LPOS=2|SpaceAfter=No|UI=1
21	_	_	NOUN	_	_	23	obl	_	BBIL=B|BPT=1|LBIL=B|LPOS=0|SpaceAfter=No|UI=159812
22	_	_	ADP	_	_	21	case	_	BBIL=I|BPT=2|LBIL=B|LPOS=1|SpaceAfter=No|UI=5
23	_	_	VERB	_	_	27	csubj	_	BBIL=B|BPT=1|LBIL=B|LPOS=69|SpaceAfter=No|UI=6130
24	_	_	AUX	_	_	23	aux	_	BBIL=I|BPT=2|LBIL=B|LPOS=7|SpaceAfter=No|UI=117
25	_	_	SCONJ	_	_	23	mark	_	BBIL=I|BPT=3|LBIL=B|LPOS=37|SpaceAfter=No|UI=0
26	_	_	ADP	_	_	23	case	_	BBIL=I|BPT=3|LBIL=B|LPOS=1|SpaceAfter=No|UI=6
27	_	_	NOUN	_	_	0	root	_	BBIL=B|BPT=4|LBIL=B|LPOS=0|SpaceAfter=No|UI=431
28	_	_	PART	_	_	27	mark	_	BBIL=I|BPT=2|LBIL=B|LPOS=29|SpaceAfter=No|UI=20
29	_	_	PART	_	_	27	mark	_	BBIL=I|BPT=3|LBIL=B|LPOS=29|SpaceAfter=No|UI=147
30	_	_	PUNCT	_	_	27	punct	_	BBIL=I|BPT=0|LBIL=B|LPOS=5|SpaceAfter=No|UI=2
31	_	_	PUNCT	_	_	27	punct	_	BBIL=I|BPT=0|LBIL=B|LPOS=5|SpaceAfter=No|UI=2
32	_	_	PUNCT	_	_	27	punct	_	BBIL=I|BPT=0|LBIL=B|LPOS=5|SpaceAfter=No|UI=2

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 csubj:outer	color:blue
1	_	_	NOUN	_	_	3	obj	_	BBIL=B|BPT=1|LBIL=B|LPOS=0|SpaceAfter=No|UI=1386
2	_	_	ADP	_	_	1	case	_	BBIL=I|BPT=2|LBIL=B|LPOS=1|SpaceAfter=No|UI=3
3	_	_	VERB	_	_	10	csubj:outer	_	BBIL=B|BPT=1|LBIL=B|LPOS=38|SpaceAfter=No|UI=10134
4	_	_	AUX	_	_	3	aux	_	BBIL=I|BPT=2|LBIL=B|LPOS=7|SpaceAfter=No|UI=7
5	_	_	SCONJ	_	_	3	mark	_	BBIL=I|BPT=3|LBIL=B|LPOS=37|SpaceAfter=No|UI=0
6	_	_	ADP	_	_	3	case	_	BBIL=I|BPT=3|LBIL=B|LPOS=6|SpaceAfter=No|UI=4
7	_	_	PUNCT	_	_	3	punct	_	BBIL=I|BPT=0|LBIL=B|LPOS=2|SpaceAfter=No|UI=1
8	_	_	PRON	_	_	10	nsubj	_	BBIL=B|BPT=1|LBIL=B|LPOS=22|SpaceAfter=No|UI=62
9	_	_	ADP	_	_	8	case	_	BBIL=I|BPT=2|LBIL=B|LPOS=1|SpaceAfter=No|UI=6
10	_	_	ADV	_	_	0	root	_	BBIL=B|BPT=4|LBIL=B|LPOS=10|SpaceAfter=No|UI=374
11	_	_	PUNCT	_	_	10	punct	_	BBIL=I|BPT=0|LBIL=B|LPOS=5|SpaceAfter=No|UI=2

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 26 csubj:outer	color:blue
1	_	_	NOUN	_	_	3	obl	_	BBIL=B|BPT=1|LBIL=B|LPOS=0|SpaceAfter=No|UI=1407
2	_	_	ADP	_	_	1	case	_	BBIL=I|BPT=2|LBIL=B|LPOS=1|SpaceAfter=No|UI=8
3	_	_	VERB	_	_	5	acl	_	BBIL=B|BPT=1|LBIL=B|LPOS=23|SpaceAfter=No|UI=3138
4	_	_	AUX	_	_	3	aux	_	BBIL=I|BPT=2|LBIL=B|LPOS=7|SpaceAfter=No|UI=7
5	_	_	NOUN	_	_	10	nmod	_	BBIL=B|BPT=1|LBIL=B|LPOS=0|SpaceAfter=No|UI=145
6	_	_	ADP	_	_	5	case	_	BBIL=I|BPT=2|LBIL=B|LPOS=1|SpaceAfter=No|UI=0
7	_	_	NOUN	_	_	10	nmod	_	BBIL=B|BPT=1|LBIL=B|LPOS=0|SpaceAfter=No|UI=890
8	_	_	ADP	_	_	7	case	_	BBIL=I|BPT=2|LBIL=B|LPOS=1|SpaceAfter=No|UI=0
9	_	_	NOUN	_	_	10	compound	_	BBIL=B|BPT=0|LBIL=B|LPOS=0|SpaceAfter=No|UI=71982
10	_	_	NOUN	_	_	16	obj	_	BBIL=I|BPT=1|LBIL=I|LPOS=0|PUDL=よう|SpaceAfter=No|UI=73367
11	_	_	ADP	_	_	10	case	_	BBIL=I|BPT=2|LBIL=B|LPOS=1|SpaceAfter=No|UI=3
12	_	_	NOUN	_	_	14	compound	_	BBIL=B|BPT=0|LBIL=B|LPOS=0|SpaceAfter=No|UI=1087
13	_	_	NOUN	_	_	14	compound	_	BBIL=I|BPT=0|LBIL=I|LPOS=0|SpaceAfter=No|UI=2224
14	_	_	NOUN	_	_	16	nsubj	_	BBIL=I|BPT=1|LBIL=I|LPOS=0|SpaceAfter=No|UI=1084
15	_	_	ADP	_	_	14	case	_	BBIL=I|BPT=2|LBIL=B|LPOS=1|SpaceAfter=No|UI=6
16	_	_	VERB	_	_	39	advcl	_	BBIL=B|BPT=1|LBIL=B|LPOS=34|SpaceAfter=No|UI=20124
17	_	_	AUX	_	_	16	aux	_	BBIL=I|BPT=2|LBIL=B|LPOS=26|SpaceAfter=No|UI=23
18	_	_	PUNCT	_	_	16	punct	_	BBIL=I|BPT=0|LBIL=B|LPOS=2|SpaceAfter=No|UI=1
19	_	_	NOUN	_	_	39	nsubj	_	BBIL=B|BPT=1|LBIL=B|LPOS=0|SpaceAfter=No|UI=227
20	_	_	ADP	_	_	19	case	_	BBIL=I|BPT=2|LBIL=B|LPOS=6|SpaceAfter=No|UI=4
21	_	_	PUNCT	_	_	22	punct	_	BBIL=B|BPT=0|LBIL=B|LPOS=14|SpaceAfter=No|UI=13
22	_	_	INTJ	_	_	26	discourse	_	BBIL=I|BPT=1|LBIL=B|LPOS=60|SpaceAfter=No|UI=1879
23	_	_	PUNCT	_	_	22	punct	_	BBIL=I|BPT=0|LBIL=B|LPOS=13|SpaceAfter=No|UI=14
24	_	_	ADP	_	_	22	case	_	BBIL=I|BPT=2|LBIL=B|LPOS=1|SpaceAfter=No|UI=8
25	_	_	PUNCT	_	_	26	punct	_	BBIL=B|BPT=0|LBIL=B|LPOS=14|SpaceAfter=No|UI=13
26	_	_	ADJ	_	_	32	csubj:outer	_	BBIL=I|BPT=1|LBIL=B|LPOS=18|SpaceAfter=No|UI=2607
27	_	_	PUNCT	_	_	26	punct	_	BBIL=I|BPT=0|LBIL=B|LPOS=13|SpaceAfter=No|UI=14
28	_	_	ADP	_	_	26	case	_	BBIL=I|BPT=2|LBIL=B|LPOS=1|SpaceAfter=No|UI=6
29	_	_	NUM	_	_	30	nummod	_	BBIL=B|BPT=0|LBIL=B|LPOS=4|SpaceAfter=No|UI=134898
30	_	_	NOUN	_	_	32	nsubj	_	BBIL=I|BPT=1|LBIL=I|LPOS=4|SpaceAfter=No|UI=196832
31	_	_	ADP	_	_	30	case	_	BBIL=I|BPT=2|LBIL=B|LPOS=6|SpaceAfter=No|UI=10
32	_	_	VERB	_	_	35	acl	_	BBIL=B|BPT=1|LBIL=B|LPOS=32|SpaceAfter=No|UI=396
33	_	_	SCONJ	_	_	32	mark	_	BBIL=I|BPT=3|LBIL=B|LPOS=20|SpaceAfter=No|UI=616
34	_	_	VERB	_	_	33	fixed	_	BBIL=I|BPT=2|LBIL=I|LPOS=20|PUDL=ある|SpaceAfter=No|UI=1231
35	_	_	NOUN	_	_	39	obj	_	BBIL=B|BPT=1|LBIL=B|LPOS=0|SpaceAfter=No|UI=1393
36	_	_	ADP	_	_	35	case	_	BBIL=I|BPT=2|LBIL=B|LPOS=1|SpaceAfter=No|UI=3
37	_	_	PRON	_	_	39	obl	_	BBIL=B|BPT=1|LBIL=B|LPOS=22|SpaceAfter=No|UI=847
38	_	_	ADP	_	_	37	case	_	BBIL=I|BPT=2|LBIL=B|LPOS=1|SpaceAfter=No|UI=5
39	_	_	VERB	_	_	0	root	_	BBIL=B|BPT=4|LBIL=B|LPOS=46|SpaceAfter=No|UI=5024
40	_	_	AUX	_	_	39	aux	_	BBIL=I|BPT=2|LBIL=B|LPOS=7|SpaceAfter=No|UI=7
41	_	_	PUNCT	_	_	39	punct	_	BBIL=I|BPT=0|LBIL=B|LPOS=5|SpaceAfter=No|UI=2

~~~


