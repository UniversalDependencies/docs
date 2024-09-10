---
layout: base
title:  'Statistics of obl in UD_Classical_Chinese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-TueCL: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="lzh_tuecl-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="lzh_tuecl-dep-obl-tmod.html">obl:tmod</a></tt>.

6 nodes (1%) are attached to their parents as `obl`.

6 instances of `obl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.66666666666667.

The following 3 pairs of parts of speech are connected with `obl`: <tt><a href="lzh_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_tuecl-pos-NOUN.html">NOUN</a></tt> (4; 67% instances), <tt><a href="lzh_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_tuecl-pos-PRON.html">PRON</a></tt> (1; 17% instances), <tt><a href="lzh_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_tuecl-pos-VERB.html">VERB</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obl	color:blue
1	其	其	PRON	_	Person=3|PronType=Prs	2	nmod	_	Gloss=[3PRON]|SpaceAfter=No
2	翼	翼	NOUN	_	_	3	nsubj	_	Gloss=wing|SpaceAfter=No
3	若	若	VERB	_	Degree=Equ	0	root	_	Gloss=be-like|SpaceAfter=No
4	垂	垂	VERB	_	_	7	acl	_	Gloss=hang-down|SpaceAfter=No|Translit=通“陲”
5	天	天	NOUN	_	Case=Loc	4	obl	_	Gloss=heaven|SpaceAfter=No
6	之	之	SCONJ	_	_	4	mark	_	Gloss='s|SpaceAfter=No
7	雲	雲	NOUN	_	_	3	obj	_	Gloss=cloud|SpaceAfter=No|Translit=云

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl	color:blue
1	置	置	VERB	_	_	5	csubj	_	Gloss=place|SpaceAfter=No
2	杯	杯	NOUN	_	_	1	obj	_	Gloss=cup|SpaceAfter=No
3	焉	焉	PRON	_	PronType=Dem	1	obl	_	Gloss=there|SpaceAfter=No
4	則	則	ADV	_	AdvType=Tim	5	amod	_	Gloss=then|SpaceAfter=No
5	膠	膠	VERB	_	_	0	root	_	Gloss=[surname]|SpaceAfter=No

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 obl	color:blue
1	是	是	PRON	_	PronType=Dem	2	det	_	Gloss=this|SpaceAfter=No
2	鳥	鳥	NOUN	_	_	8	nsubj	_	Gloss=bird|SpaceAfter=No|Translit=鸟
3	也	也	PART	_	_	2	case	_	Gloss=that-which|SpaceAfter=No
4	海	海	NOUN	_	Case=Loc	5	nsubj	_	Gloss=sea|SpaceAfter=No
5	運	運	VERB	_	_	8	advcl	_	Gloss=revolve|SpaceAfter=No|Translit=运
6	則	則	ADV	_	AdvType=Tim	8	advmod	_	Gloss=then|SpaceAfter=No|Translit=则
7	將	將	ADV	_	AdvType=Tim|Tense=Fut	8	advmod	_	Gloss=about-to|SpaceAfter=No|Translit=将
8	徙	徙	VERB	_	_	0	root	_	Gloss=move|SpaceAfter=No
9	於	於	ADP	_	_	11	case	_	Gloss=at|SpaceAfter=No|Translit=于
10	南	南	NOUN	_	Case=Loc	11	obl:lmod	_	Gloss=south|SpaceAfter=No
11	冥	冥	VERB	_	Degree=Pos	8	obl	_	Gloss=dark|SpaceAfter=No

~~~


