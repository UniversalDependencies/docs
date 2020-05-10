---
layout: base
title:  'Statistics of nsubj:pass in UD_Latvian-LVTB'
udver: '2'
---

## Treebank Statistics: UD_Latvian-LVTB: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="lv_lvtb-dep-nsubj.html">nsubj</a></tt>.

1605 nodes (1%) are attached to their parents as `nsubj:pass`.

1008 instances of `nsubj:pass` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.77071651090343.

The following 13 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt> (1186; 74% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-PRON.html">PRON</a></tt> (320; 20% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-PROPN.html">PROPN</a></tt> (62; 4% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-ADJ.html">ADJ</a></tt> (8; 0% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt> (7; 0% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-X.html">X</a></tt> (6; 0% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-SYM.html">SYM</a></tt> (4; 0% instances), <tt><a href="lv_lvtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="lv_lvtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lv_lvtb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt>-<tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv_lvtb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 6 nsubj:pass	color:blue
1	Ja	ja	SCONJ	cs	_	3	mark	3:mark	LvtbNodeId=a-d87-p90s5w1
2	tu	tu	PRON	pp20snn	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	3:nsubj	LvtbNodeId=a-d87-p90s5w2
3	zinātu	zināt	VERB	vmnc0t300an	Mood=Cnd|Polarity=Pos|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-d87-p90s5w3|SpaceAfter=No
4	,	,	PUNCT	zc	_	11	punct	11:punct	LvtbNodeId=a-d87-p90s5w4
5	cik	cik	ADV	r0q	PronType=Int	6	advmod	6:advmod	LvtbNodeId=a-d87-p90s5w5
6	naudas	nauda	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	11	nsubj:pass	11:nsubj:pass	LvtbNodeId=a-d87-p90s5w6
7	tevis	tu	PRON	pp20sgn	Case=Gen|Number=Sing|Person=2|PronType=Prs	11	obl	11:obl:dēļ	LvtbNodeId=a-d87-p90s5w7
8	dēļ	dēļ	ADP	stpg	_	7	case	7:case	LvtbNodeId=a-d87-p90s5w8
9	ir	būt	AUX	vcnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux:pass	11:aux:pass	LvtbNodeId=a-d87-p90s5w9
10	zemē	zeme	NOUN	ncfsl5	Case=Loc|Gender=Fem|Number=Sing	11	obl	11:obl:loc	LvtbNodeId=a-d87-p90s5w10
11	nomests	nomest	VERB	vmnpdmsnpsnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	3	ccomp	3:ccomp	LvtbNodeId=a-d87-p90s5w11|SpaceAfter=No
12	!	!	PUNCT	zs	_	3	punct	3:punct	LvtbNodeId=a-d87-p90s5w12

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


