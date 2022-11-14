---
layout: base
title:  'Statistics of compound:ext in UD_Cantonese-HK'
udver: '2'
---

## Treebank Statistics: UD_Cantonese-HK: Relations: `compound:ext`

This relation is a language-specific subtype of <tt><a href="yue_hk-dep-compound.html">compound</a></tt>.
There are also 4 other language-specific subtypes of `compound`: <tt><a href="yue_hk-dep-compound-dir.html">compound:dir</a></tt>, <tt><a href="yue_hk-dep-compound-quant.html">compound:quant</a></tt>, <tt><a href="yue_hk-dep-compound-vo.html">compound:vo</a></tt>, <tt><a href="yue_hk-dep-compound-vv.html">compound:vv</a></tt>.

17 nodes (0%) are attached to their parents as `compound:ext`.

16 instances of `compound:ext` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05882352941176.

The following 6 pairs of parts of speech are connected with `compound:ext`: <tt><a href="yue_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="yue_hk-pos-PART.html">PART</a></tt> (11; 65% instances), <tt><a href="yue_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="yue_hk-pos-ADP.html">ADP</a></tt> (2; 12% instances), <tt><a href="yue_hk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yue_hk-pos-ADP.html">ADP</a></tt> (1; 6% instances), <tt><a href="yue_hk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="yue_hk-pos-PART.html">PART</a></tt> (1; 6% instances), <tt><a href="yue_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="yue_hk-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="yue_hk-pos-VERB.html">VERB</a></tt>-<tt><a href="yue_hk-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:ext	color:blue
1	唱	唱	VERB	_	_	0	root	_	SpaceAfter=No
2	得	得	PART	_	_	1	compound:ext	_	SpaceAfter=No
3	幾	幾	ADV	_	_	4	advmod	_	SpaceAfter=No
4	好	好	ADJ	_	_	1	xcomp	_	SpaceAfter=No
5	㗎	㗎	PART	_	_	1	discourse:sp	_	SpaceAfter=No
6	！	！	PUNCT	_	_	1	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:ext	color:blue
1	滴	滴	VERB	_	_	0	root	_	SpaceAfter=No
2	到	到	ADP	_	_	1	compound:ext	_	SpaceAfter=No
3	周圍	周圍	ADV	_	_	5	advmod	_	SpaceAfter=No
4	都	都	ADV	_	_	5	advmod	_	SpaceAfter=No
5	係	係	VERB	_	_	1	xcomp	_	SpaceAfter=No
6	！	！	PUNCT	_	_	1	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 compound:ext	color:blue
1	選	選	VERB	_	_	5	reparandum	_	SpaceAfter=No
2	-	-	PUNCT	_	_	1	punct	_	SpaceAfter=No
3	《	《	PUNCT	_	_	5	punct	_	SpaceAfter=No
4	議事	議事	VERB	_	_	5	acl	_	SpaceAfter=No
5	規則	規則	NOUN	_	_	9	obl	_	SpaceAfter=No
6	》	》	PUNCT	_	_	5	punct	_	SpaceAfter=No
7	裏便	裏便	NOUN	_	_	5	case:loc	_	SpaceAfter=No
8	，	，	PUNCT	_	_	9	punct	_	SpaceAfter=No
9	係	係	VERB	_	_	0	root	_	SpaceAfter=No
10	有	有	VERB	_	_	13	reparandum	_	SpaceAfter=No
11	清楚	清楚	ADJ	_	_	10	obj	_	SpaceAfter=No
12	-	-	PUNCT	_	_	10	punct	_	SpaceAfter=No
13	講	講	VERB	_	_	9	ccomp	_	SpaceAfter=No
14	到	到	ADP	_	_	15	compound:ext	_	SpaceAfter=No
15	明	明	ADJ	_	_	13	xcomp	_	SpaceAfter=No
16	，	，	PUNCT	_	_	13	punct	_	SpaceAfter=No
17	我哋	我哋	PRON	_	_	28	nmod	_	SpaceAfter=No
18	呢	呢	DET	_	_	28	det	_	SpaceAfter=No
19	一	一	NUM	_	_	28	nummod	_	SpaceAfter=No
20	個	個	NOUN	_	NounType=Clf	19	clf	_	SpaceAfter=No
21	，	，	PUNCT	_	_	28	punct	_	SpaceAfter=No
22	由	由	ADP	_	_	23	mark	_	SpaceAfter=No
23	宣誓	宣誓	VERB	_	_	28	acl	_	SpaceAfter=No
24	去到	去到	ADP	_	_	25	mark	_	SpaceAfter=No
25	選	選	VERB	_	_	28	acl	_	SpaceAfter=No
26	主席	主席	NOUN	_	_	25	obj	_	SpaceAfter=No
27	嘅	嘅	PART	_	_	23	mark:rel	_	SpaceAfter=No
28	程序	程序	NOUN	_	_	13	obj	_	SpaceAfter=No
29	。	。	PUNCT	_	_	9	punct	_	SpaceAfter=No

~~~


