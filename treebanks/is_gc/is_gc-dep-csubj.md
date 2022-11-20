---
layout: base
title:  'Statistics of csubj in UD_Icelandic-GC'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-GC: Relations: `csubj`

This relation is universal.

3 nodes (0%) are attached to their parents as `csubj`.

3 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.33333333333333.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="is_gc-pos-VERB.html">VERB</a></tt>-<tt><a href="is_gc-pos-VERB.html">VERB</a></tt> (2; 67% instances), <tt><a href="is_gc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_gc-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj	color:blue
1	Bjarni	Bjarni	PROPN	person_et_nf_kk	Case=Nom|Gender=Masc|Number=Sing	2	obl	_	tag=person_et_nf_kk
2	sagðist	segja	VERB	so_0_fh_p3_et_þt_mm	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Mid	0	root	_	tag=so_0_fh_p3_et_þt_mm
3	litlar	lítill	ADJ	lo_ft_þf_kvk	Case=Acc|Gender=Fem|Number=Plur	4	amod	_	tag=lo_ft_þf_kvk
4	áhyggjur	áhyggja	NOUN	no_ft_þf_kvk	Case=Acc|Gender=Fem|Number=Plur	5	obj	_	tag=no_ft_þf_kvk
5	hafa	hafa	VERB	so_1_þf_nh_gm	Case=Acc|VerbForm=Inf|Voice=Act	2	csubj	_	SpaceAfter=No|tag=so_1_þf_nh_gm
6	,	,	PUNCT	grm	_	5	punct	_	tag=grm
7	enda	enda	CCONJ	st	_	2	cc	_	tag=st
8	séu	vera	VERB	so_0_vh_p3_ft_nt_gm	Mood=Sub|Number=Plur|Person=3|Tense=Pres|Voice=Act	2	conj	_	tag=so_0_vh_p3_ft_nt_gm
9	um	um	ADV	eo	_	11	advmod	_	tag=eo
10	þrjár	þrír	NUM	to_ft_nf_kvk	Case=Nom|Gender=Fem|Number=Plur	11	nummod	_	tag=to_ft_nf_kvk
11	kannanir	könnun	NOUN	no_ft_nf_kvk	Case=Nom|Gender=Fem|Number=Plur	8	nsubj	_	tag=no_ft_nf_kvk
12	í	í	ADP	fs_þgf	Case=Dat	13	case	_	tag=fs_þgf
13	mánuði	mánuður	NOUN	no_et_þgf_kk	Case=Dat|Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No|tag=no_et_þgf_kk
14	.	.	PUNCT	grm	_	2	punct	_	tag=grm

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Nauðsynlegt	nauðsynlegur	ADJ	lo_et_nf_hk_sb	Case=Nom|Gender=Neut|Number=Sing	0	root	_	tag=lo_et_nf_hk_sb
2	að	að	PART	nhm	_	3	mark	_	tag=nhm
3	koma	koma	VERB	so_0_nh_gm	VerbForm=Inf|Voice=Act	1	csubj	_	tag=so_0_nh_gm
4	í	í	ADP	fs_þf	Case=Acc	5	case	_	tag=fs_þf
5	veg	vegur	NOUN	no_et_þf_kk	Case=Acc|Gender=Masc|Number=Sing	3	obl	_	tag=no_et_þf_kk
6	fyrir	fyrir	ADP	fs_þf	Case=Acc	8	case	_	tag=fs_þf
7	frekari	frekur	ADJ	lo_et_þf_kk_mst	Case=Acc|Degree=Cmp|Gender=Masc|Number=Sing	8	amod	_	tag=lo_et_þf_kk_mst
8	skaða	skaði	NOUN	no_et_þf_kk	Case=Acc|Gender=Masc|Number=Sing	5	obl	_	tag=no_et_þf_kk

~~~


