---
layout: base
title:  'Statistics of obl:tmod in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="jv_csui-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="jv_csui-dep-obl-agent.html">obl:agent</a></tt>.

132 nodes (1%) are attached to their parents as `obl:tmod`.

70 instances of `obl:tmod` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.06060606060606.

The following 8 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (98; 74% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt> (11; 8% instances), <tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (8; 6% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-NUM.html">NUM</a></tt> (7; 5% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 obl:tmod	color:blue
1	Taun	taun	NOUN	_	Number=Sing	4	obl:tmod	_	_
2	iki	iki	DET	_	Polite=Infm|PronType=Dem	1	det	_	_
3	pamarentah	pamarentah	NOUN	_	Number=Sing	4	nsubj	_	_
4	ngundhakake	undhak	VERB	_	Voice=Act	0	root	_	_
5	rega	rega	NOUN	_	Number=Sing|Polite=Infm	4	obj	_	_
6	bensin	bensin	NOUN	_	Number=Sing	5	nmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 14 obl:tmod	color:blue
1	Saperangan	perangan	DET	_	Number=Plur|PronType=Ind	2	det	_	_
2	bocah	bocah	NOUN	_	Number=Sing|Polite=Infm	3	nsubj	_	_
3	mbabar	babar	VERB	_	Voice=Act	0	root	_	_
4	beksan	beksan	NOUN	_	Number=Sing	3	obl	_	_
5	Krido	krido	PROPN	_	_	4	nmod	_	_
6	Warok	warok	PROPN	_	_	5	flat:name	_	_
7	ing	ing	ADP	_	Polite=Infm	8	case	_	_
8	Alun-Alun	alun-alun	PROPN	_	_	3	nmod	_	_
9	Ponorogo	ponorogo	PROPN	_	_	8	flat:name	_	SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	_
11	Jawa	jawa	PROPN	_	_	8	nmod	_	_
12	Timur	timur	PROPN	_	_	11	flat:name	_	SpaceAfter=No
13	,	,	PUNCT	_	_	14	punct	_	_
14	Rabu	rabu	PROPN	_	_	3	obl:tmod	_	_
15	(	(	PUNCT	_	_	16	punct	_	SpaceAfter=No
16	15	15	NUM	_	NumType=Card	14	appos	_	SpaceAfter=No
17	/	/	PUNCT	_	_	18	punct	_	SpaceAfter=No
18	6	6	NUM	_	NumType=Card	16	flat	_	SpaceAfter=No
19	/	/	PUNCT	_	_	20	punct	_	SpaceAfter=No
20	2022	2022	NUM	_	NumType=Card	16	flat	_	SpaceAfter=No
21	)	)	PUNCT	_	_	16	punct	_	SpaceAfter=No
22	.	.	PUNCT	_	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:tmod	color:blue
1	Sawise	wis	SCONJ	_	Polite=Infm	2	mark	_	_
2	lara	lara	ADJ	_	Polite=Infm	9	advcl	_	_
3	mataun-taun	taun	NOUN	_	Number=Sing	2	obl:tmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	_
5	raga	raga	NOUN	_	Number=Sing	9	nsubj	_	_
6	e	e	PRON	_	Number=Sing|Person=3|Polite=Infm|PronType=Prs	5	nmod:poss	_	_
7	Pak	pak	PROPN	_	_	5	nmod:poss	_	_
8	Kartijo	kartijo	PROPN	_	_	7	flat:name	_	_
9	mentelas	telas	VERB	_	Voice=Act	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


