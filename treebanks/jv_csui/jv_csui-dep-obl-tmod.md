---
layout: base
title:  'Statistics of obl:tmod in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="jv_csui-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="jv_csui-dep-obl-agent.html">obl:agent</a></tt>.

135 nodes (1%) are attached to their parents as `obl:tmod`.

70 instances of `obl:tmod` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.02222222222222.

The following 9 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (98; 73% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt> (11; 8% instances), <tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (8; 6% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-NUM.html">NUM</a></tt> (7; 5% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 obl:tmod	color:blue
1	Taun	_	NOUN	_	Number=Sing	4	obl:tmod	_	_
2	iki	_	DET	_	Polite=Infm|PronType=Dem	1	det	_	_
3	pamarentah	_	NOUN	_	Number=Sing	4	nsubj	_	_
4	ngundhakake	_	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
5	rega	_	NOUN	_	Number=Sing|Polite=Infm	4	obj	_	_
6	bensin	_	NOUN	_	Number=Sing	5	nmod	_	SpaceAfter=No
7	.	_	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 14 obl:tmod	color:blue
1	Saperangan	_	DET	_	Number=Plur|PronType=Ind	2	det	_	_
2	bocah	_	NOUN	_	Number=Sing|Polite=Infm	3	nsubj	_	_
3	mbabar	_	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
4	beksan	_	NOUN	_	Number=Sing	3	obl	_	_
5	Krido	_	PROPN	_	_	4	nmod	_	_
6	Warok	_	PROPN	_	_	5	flat:name	_	_
7	ing	_	ADP	_	Polite=Infm	8	case	_	_
8	Alun-Alun	_	PROPN	_	_	3	nmod	_	_
9	Ponorogo	_	PROPN	_	_	8	flat:name	_	SpaceAfter=No
10	,	_	PUNCT	_	_	11	punct	_	_
11	Jawa	_	PROPN	_	_	8	nmod	_	_
12	Timur	_	PROPN	_	_	11	flat:name	_	SpaceAfter=No
13	,	_	PUNCT	_	_	14	punct	_	_
14	Rabu	_	PROPN	_	_	3	obl:tmod	_	_
15	(	_	PUNCT	_	_	16	punct	_	SpaceAfter=No
16	15	_	NUM	_	NumType=Card	14	appos	_	SpaceAfter=No
17	/	_	PUNCT	_	_	18	punct	_	SpaceAfter=No
18	6	_	NUM	_	NumType=Card	16	flat	_	SpaceAfter=No
19	/	_	PUNCT	_	_	20	punct	_	SpaceAfter=No
20	2022	_	NUM	_	NumType=Card	16	flat	_	SpaceAfter=No
21	)	_	PUNCT	_	_	16	punct	_	SpaceAfter=No
22	.	_	PUNCT	_	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:tmod	color:blue
1	Sawise	_	SCONJ	_	Polite=Infm	2	mark	_	_
2	lara	_	ADJ	_	Polite=Infm	9	advcl	_	_
3	mataun-taun	_	NOUN	_	Number=Sing	2	obl:tmod	_	SpaceAfter=No
4	,	_	PUNCT	_	_	2	punct	_	_
5	raga	_	NOUN	_	Number=Sing	9	nsubj	_	_
6	e	_	PRON	_	Number=Sing|Person=3|Polite=Infm|PronType=Prs	5	nmod:poss	_	_
7	Pak	_	PROPN	_	_	5	nmod:poss	_	_
8	Kartijo	_	PROPN	_	_	7	flat:name	_	_
9	mentelas	_	VERB	_	Mood=Ind|Voice=Act	0	root	_	SpaceAfter=No
10	.	_	PUNCT	_	_	9	punct	_	_

~~~


