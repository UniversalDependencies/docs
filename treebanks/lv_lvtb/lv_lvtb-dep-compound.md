---
layout: base
title:  'Statistics of compound in UD_Latvian-LVTB'
udver: '2'
---

## Treebank Statistics: UD_Latvian-LVTB: Relations: `compound`

This relation is universal.

206 nodes (0%) are attached to their parents as `compound`.

201 instances of `compound` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.0631067961165.

The following 8 pairs of parts of speech are connected with `compound`: <tt><a href="lv_lvtb-pos-PRON.html">PRON</a></tt>-<tt><a href="lv_lvtb-pos-PRON.html">PRON</a></tt> (140; 68% instances), <tt><a href="lv_lvtb-pos-DET.html">DET</a></tt>-<tt><a href="lv_lvtb-pos-PRON.html">PRON</a></tt> (28; 14% instances), <tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt> (14; 7% instances), <tt><a href="lv_lvtb-pos-ADV.html">ADV</a></tt>-<tt><a href="lv_lvtb-pos-ADV.html">ADV</a></tt> (13; 6% instances), <tt><a href="lv_lvtb-pos-NUM.html">NUM</a></tt>-<tt><a href="lv_lvtb-pos-NUM.html">NUM</a></tt> (8; 4% instances), <tt><a href="lv_lvtb-pos-ADV.html">ADV</a></tt>-<tt><a href="lv_lvtb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="lv_lvtb-pos-NUM.html">NUM</a></tt>-<tt><a href="lv_lvtb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound	color:blue
1	Te	te	ADV	r0p	PronType=Dem	4	advmod	4:advmod	LvtbNodeId=a-d29-p299s2w1
2	tev	tu	PRON	pp20sdn	Case=Dat|Number=Sing|Person=2|PronType=Prs	4	obl	4:obl:dat	LvtbNodeId=a-d29-p299s2w2
3	nu	nu	ADV	rpt	Degree=Pos	4	advmod	4:advmod	LvtbNodeId=a-d29-p299s2w3
4	bija	būt	VERB	vmnisii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	9	ccomp	9:ccomp	LvtbNodeId=a-d29-p299s2w4|SpaceAfter=No
5	,	,	PUNCT	zc	_	4	punct	4:punct	LvtbNodeId=a-d29-p299s2w5
6	tu	tu	PRON	pp20snn	Case=Nom|Number=Sing|Person=2|PronType=Prs	9	nsubj	9:nsubj	LvtbNodeId=a-d29-p299s2w6
7	pats	pats	PRON	pg0msnn	Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	6	compound	6:compound	LvtbNodeId=a-d29-p299s2w7
8	sev	sevis	PRON	px000dn	Case=Dat|PronType=Rcp|Reflex=Yes	9	iobj	9:iobj	LvtbNodeId=a-d29-p299s2w8
9	saki	sacīt	VERB	vmnipt32san	Evident=Fh|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-d29-p299s2w9|SpaceAfter=No
10	.	.	PUNCT	zs	_	9	punct	9:punct	LvtbNodeId=a-d29-p299s2w10

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	Vai	vai	CCONJ	cc	_	4	cc	4:cc	LvtbNodeId=a-d21-p15s5w1
2	tā	tā	DET	pd3fsnn	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	4	det	4:det	LvtbNodeId=a-d21-p15s5w2
3	pati	pati	PRON	pg0fsnn	Case=Nom|Gender=Fem|Number=Sing|PronType=Tot	2	compound	2:compound	LvtbNodeId=a-d21-p15s5w3
4	Ikea	Ikea	PROPN	np0000	_	0	root	0:root	LvtbNodeId=a-d21-p15s5w4|SpaceAfter=No
5	.	.	PUNCT	zs	_	4	punct	4:punct	LvtbNodeId=a-d21-p15s5w5

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 compound	color:blue
1	Nagus	nags	NOUN	ncmpn1	Case=Nom|Gender=Masc|Number=Plur	3	obj	3:obj	CorrectedForm=Nagi|CorrectionType=Spelling|LvtbNodeId=a-c60-p30s3w1
2	ir	būt	AUX	vcnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	3:aux	LvtbNodeId=a-c60-p30s3w2
3	jāvīlē	vīlēt	VERB	vmnd0t200an	Mood=Nec|Polarity=Pos|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-c60-p30s3w3
4	tikai	tikai	PART	q	_	5	discourse	5:discourse	LvtbNodeId=a-c60-p30s3w4
5	vienā	viens	NUM	mcsmsl	Case=Loc|Gender=Masc|Number=Sing|NumType=Card	6	nummod	6:nummod	LvtbNodeId=a-c60-p30s3w5
6	virzienā	virziens	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	3	obl	3:obl:loc	LvtbNodeId=a-c60-p30s3w6
7	–	–	PUNCT	zd	_	9	punct	9:punct	LvtbNodeId=a-c60-p30s3w7
8	no	no	ADP	spsg	_	9	case	9:case	LvtbNodeId=a-c60-p30s3w8
9	malas	mala	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	6	obl	6:obl:gen	LvtbNodeId=a-c60-p30s3w9
10	uz	uz	ADP	spsa	_	11	case	11:case	LvtbNodeId=a-c60-p30s3w10
11	vidu	vidus	NOUN	ncmsa3	Case=Acc|Gender=Masc|Number=Sing	9	compound	9:compound	LvtbNodeId=a-c60-p30s3w11|SpaceAfter=No
12	.	.	PUNCT	zs	_	3	punct	3:punct	LvtbNodeId=a-c60-p30s3w12

~~~


