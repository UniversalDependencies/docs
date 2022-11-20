---
layout: base
title:  'Statistics of fixed in UD_Icelandic-GC'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-GC: Relations: `fixed`

This relation is universal.

1300 nodes (1%) are attached to their parents as `fixed`.

1300 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.19153846153846.

The following 14 pairs of parts of speech are connected with `fixed`: <tt><a href="is_gc-pos-ADV.html">ADV</a></tt>-<tt><a href="is_gc-pos-ADV.html">ADV</a></tt> (986; 76% instances), <tt><a href="is_gc-pos-ADP.html">ADP</a></tt>-<tt><a href="is_gc-pos-ADP.html">ADP</a></tt> (195; 15% instances), <tt><a href="is_gc-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="is_gc-pos-SCONJ.html">SCONJ</a></tt> (44; 3% instances), <tt><a href="is_gc-pos-ADP.html">ADP</a></tt>-<tt><a href="is_gc-pos-PRON.html">PRON</a></tt> (18; 1% instances), <tt><a href="is_gc-pos-ADV.html">ADV</a></tt>-<tt><a href="is_gc-pos-ADP.html">ADP</a></tt> (16; 1% instances), <tt><a href="is_gc-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="is_gc-pos-SCONJ.html">SCONJ</a></tt> (13; 1% instances), <tt><a href="is_gc-pos-ADP.html">ADP</a></tt>-<tt><a href="is_gc-pos-SCONJ.html">SCONJ</a></tt> (10; 1% instances), <tt><a href="is_gc-pos-ADP.html">ADP</a></tt>-<tt><a href="is_gc-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="is_gc-pos-ADP.html">ADP</a></tt>-<tt><a href="is_gc-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="is_gc-pos-ADV.html">ADV</a></tt>-<tt><a href="is_gc-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="is_gc-pos-PRON.html">PRON</a></tt>-<tt><a href="is_gc-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="is_gc-pos-PRON.html">PRON</a></tt>-<tt><a href="is_gc-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="is_gc-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="is_gc-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="is_gc-pos-X.html">X</a></tt>-<tt><a href="is_gc-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 fixed	color:blue
1	Biskup	biskup	NOUN	no_et_nf_kk	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	tag=no_et_nf_kk
2	Íslands	Ísland	NOUN	no_et_ef_hk	Case=Gen|Gender=Neut|Number=Sing	1	nmod:poss	_	tag=no_et_ef_hk
3	tjáði	tjá	VERB	so_1_þf_fh_p3_et_þt_gm	Case=Acc|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	tag=so_1_þf_fh_p3_et_þt_gm
4	sig	sig	PRON	abfn_þf	Case=Acc|PronType=Prs	3	obj	_	tag=abfn_þf
5	á	á	ADV	ao	_	3	advmod	_	tag=ao
6	liðnu	liðnu	ADV	ao	_	5	fixed	_	tag=ao
7	ári	ári	ADV	ao	_	5	fixed	_	MWEEnd=Yes|tag=ao
8	um	um	ADP	fs_þf	Case=Acc	11	case	_	tag=fs_þf
9	ýmis	ýmis	PRON	fn_ft_þf_hk	Case=Acc|Gender=Neut|Number=Plur	11	nmod	_	tag=fn_ft_þf_hk
10	brýn	brýnn	ADJ	lo_ft_þf_hk_sb	Case=Acc|Gender=Neut|Number=Plur	11	amod	_	tag=lo_ft_þf_hk_sb
11	samfélagsmál	samfélagsmál	NOUN	no_ft_þf_hk	Case=Acc|Gender=Neut|Number=Plur	3	obl	_	SpaceAfter=No|tag=no_ft_þf_hk
12	.	_	PUNCT	grm	_	3	punct	_	tag=grm

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	Hægri	hægri	ADJ	lo_et_nf_kk_vb	Case=Nom|Gender=Masc|Number=Sing	2	amod	_	tag=lo_et_nf_kk_vb
2	fóturinn	fótur	NOUN	no_et_nf_kk_gr	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	5	nsubj	_	tag=no_et_nf_kk_gr
3	á	á	ADP	fs_þgf	Case=Dat	4	case	_	tag=fs_þgf
4	mér	ég	PRON	pfn_et_þgf_p1	Case=Dat|Number=Sing|Person=1|PronType=Prs	2	obl	_	tag=pfn_et_þgf_p1
5	fór	fara	VERB	so_0_fh_p3_et_þt_gm	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	tag=so_0_fh_p3_et_þt_gm
6	ofan	ofan	ADP	fs	_	10	case	_	tag=fs
7	í	í	ADP	fs_þf	Case=Acc	6	fixed	_	tag=fs_þf
8	sjóðandi	sjóðandi	ADJ	lo_et_þf_hk_sb	Case=Acc|Gender=Neut|Number=Sing	10	amod	_	tag=lo_et_þf_hk_sb
9	heitt	heitur	ADJ	lo_et_þf_hk_sb	Case=Acc|Gender=Neut|Number=Sing	10	amod	_	tag=lo_et_þf_hk_sb
10	vatnið	vatn	NOUN	no_et_þf_hk_gr	Case=Acc|Definite=Def|Gender=Neut|Number=Sing	5	obl	_	tag=no_et_þf_hk_gr
11	og	og	CCONJ	st	_	5	cc	_	tag=st
12	festist	festa	VERB	so_0_fh_p3_et_þt_mm	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Mid	5	conj	_	SpaceAfter=No|tag=so_0_fh_p3_et_þt_mm
13	.	_	PUNCT	grm	_	5	punct	_	tag=grm

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 fixed	color:blue
1	Mín	minn	PRON	fn_et_nf_kvk	Case=Nom|Gender=Fem|Number=Sing	2	nmod	_	tag=fn_et_nf_kvk
2	skoðun	skoðun	NOUN	no_et_nf_kvk	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	tag=no_et_nf_kvk
3	er	vera	VERB	so_1_nf_fh_p3_et_nt_gm	Case=Nom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	tag=so_1_nf_fh_p3_et_nt_gm
4	að	að	SCONJ	st	_	11	mark	_	tag=st
5	ef	ef	SCONJ	st	_	4	fixed	_	tag=st
6	þau	það	PRON	pfn_ft_nf_hk_p3	Case=Nom|Gender=Neut|Number=Plur|Person=3|PronType=Prs	7	nsubj	_	tag=pfn_ft_nf_hk_p3
7	ætla	ætla	VERB	so_0_fh_p3_ft_nt_gm	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	11	advcl	_	tag=so_0_fh_p3_ft_nt_gm
8	að	að	PART	nhm	_	9	mark	_	tag=nhm
9	gera	gera	VERB	so_0_nh_gm	VerbForm=Inf|Voice=Act	7	xcomp	_	tag=so_0_nh_gm
10	þá	þá	ADV	ao	_	11	advmod	_	tag=ao
11	þarf	þurfa	VERB	so_0_fh_p3_et_nt_gm	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	ccomp	_	tag=so_0_fh_p3_et_nt_gm
12	að	að	PART	nhm	_	13	mark	_	tag=nhm
13	mennta	mennta	VERB	so_0_nh_gm	VerbForm=Inf|Voice=Act	11	xcomp	_	tag=so_0_nh_gm
14	fólk	fólk	NOUN	no_et_þf_hk	Case=Acc|Gender=Neut|Number=Sing	13	obj	_	SpaceAfter=No|tag=no_et_þf_hk
15	.	_	PUNCT	grm	_	3	punct	_	tag=grm

~~~


