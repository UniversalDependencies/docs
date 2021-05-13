---
layout: base
title:  'Statistics of nsubj:pass in UD_Latvian-LVTB'
udver: '2'
---

## Treebank Statistics: UD_Latvian-LVTB: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="lv_lvtb-dep-nsubj.html">nsubj</a></tt>.

1919 nodes (1%) are attached to their parents as `nsubj:pass`.

1177 instances of `nsubj:pass` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.75143303804065.

The following 12 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt> (1437; 75% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-PRON.html">PRON</a></tt> (363; 19% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-PROPN.html">PROPN</a></tt> (75; 4% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt> (10; 1% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-ADJ.html">ADJ</a></tt> (9; 0% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-X.html">X</a></tt> (7; 0% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-SYM.html">SYM</a></tt> (6; 0% instances), <tt><a href="lv_lvtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt>-<tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv_lvtb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj:pass	color:blue
1	Kāpēc	kāpēc	ADV	r0c	PronType=Int	5	advmod	5:advmod	LvtbNodeId=a-d173-p1127s3w1
2	tad	tad	PART	q	_	5	discourse	5:discourse	LvtbNodeId=a-d173-p1127s3w2
3	cilvēkam	cilvēks	NOUN	ncmsd1	Case=Dat|Gender=Masc|Number=Sing	5	iobj	5:iobj	LvtbNodeId=a-d173-p1127s3w3
4	kājas	kāja	NOUN	ncfpn4	Case=Nom|Gender=Fem|Number=Plur	5	nsubj:pass	5:nsubj:pass	LvtbNodeId=a-d173-p1127s3w4
5	dotas	dot	VERB	vmnpdfpnpsnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	LvtbNodeId=a-d173-p1127s3w5|SpaceAfter=No
6	?	?	PUNCT	zs	_	5	punct	5:punct	LvtbNodeId=a-d173-p1127s3w6

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Viņa	viņa	PRON	pp3fsnn	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	3:nsubj:pass	LvtbNodeId=a-d197-p78s6w1
2	nav	būt	AUX	vcnipii30ay	Evident=Fh|Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	3:aux:pass	LvtbNodeId=a-d197-p78s6w2
3	precēta	precēt	VERB	vmnpdfsnpsnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	LvtbNodeId=a-d197-p78s6w3|SpaceAfter=No
4	.	.	PUNCT	zs	_	3	punct	3:punct	LvtbNodeId=a-d197-p78s6w4

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 nsubj:pass	color:blue
1	Celtniecības	celtniecība	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	2	nmod	2:nmod:gen	LvtbNodeId=a-p1299-p3s1w1
2	konkursā	konkurss	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	3	obl	3:obl:loc	LvtbNodeId=a-p1299-p3s1w2
3	izraudzīta	izraudzīt	VERB	vmnpdfsnpsnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	LvtbNodeId=a-p1299-p3s1w3
4	Ventspils	Ventspils	PROPN	npmsn1	Case=Nom|Gender=Masc|Number=Sing	6	nmod	6:nmod:nom	LvtbNodeId=a-p1299-p3s1w4
5	SIA	SIA	NOUN	yn	Abbr=Yes	6	nmod	6:nmod	LvtbNodeId=a-p1299-p3s1w5
6	Venceb	Venceb	PROPN	np0000	_	3	nsubj:pass	3:nsubj:pass	LvtbNodeId=a-p1299-p3s1w6|SpaceAfter=No
7	.	.	PUNCT	zs	_	3	punct	3:punct	LvtbNodeId=a-p1299-p3s1w7

~~~


