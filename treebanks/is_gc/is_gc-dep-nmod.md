---
layout: base
title:  'Statistics of nmod in UD_Icelandic-GC'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-GC: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="is_gc-dep-nmod-poss.html">nmod:poss</a></tt>.

2226 nodes (2%) are attached to their parents as `nmod`.

1760 instances of `nmod` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32120395327943.

The following 10 pairs of parts of speech are connected with `nmod`: <tt><a href="is_gc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_gc-pos-PRON.html">PRON</a></tt> (1810; 81% instances), <tt><a href="is_gc-pos-VERB.html">VERB</a></tt>-<tt><a href="is_gc-pos-PRON.html">PRON</a></tt> (184; 8% instances), <tt><a href="is_gc-pos-ADV.html">ADV</a></tt>-<tt><a href="is_gc-pos-PRON.html">PRON</a></tt> (113; 5% instances), <tt><a href="is_gc-pos-PRON.html">PRON</a></tt>-<tt><a href="is_gc-pos-PRON.html">PRON</a></tt> (59; 3% instances), <tt><a href="is_gc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_gc-pos-PRON.html">PRON</a></tt> (51; 2% instances), <tt><a href="is_gc-pos-ADP.html">ADP</a></tt>-<tt><a href="is_gc-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="is_gc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_gc-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="is_gc-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="is_gc-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="is_gc-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="is_gc-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="is_gc-pos-NUM.html">NUM</a></tt>-<tt><a href="is_gc-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	Landsbankinn	landsbanki	PROPN	fyrirtæki_et_nf_kk_gr	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	tag=fyrirtæki_et_nf_kk_gr
2	fékk	fá	VERB	so_1_þf_fh_p3_et_þt_gm	Case=Acc|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	11	ccomp	_	tag=so_1_þf_fh_p3_et_þt_gm
3	öll	allur	PRON	fn_ft_þf_hk	Case=Acc|Gender=Neut|Number=Plur	4	nmod	_	tag=fn_ft_þf_hk
4	gögn	gögn	NOUN	no_ft_þf_hk	Case=Acc|Gender=Neut|Number=Plur	2	obj	_	tag=no_ft_þf_hk
5	og	og	CCONJ	st	_	2	cc	_	tag=st
6	gat	gat	VERB	so_0_fh_p3_et_þt_gm	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	7	xcomp	_	tag=so_0_fh_p3_et_þt_gm
7	kynnt	kynna	VERB	so_2_þgf_þf_sagnb_gm	Case=Acc|VerbForm=Sup|Voice=Act	2	conj	_	tag=so_2_þgf_þf_sagnb_gm
8	sér	sig	PRON	abfn_þgf	Case=Dat|PronType=Prs	7	iobj	_	tag=abfn_þgf
9	þetta	þessi	PRON	fn_et_þf_hk	Case=Acc|Gender=Neut|Number=Sing	7	obj	_	SpaceAfter=No|tag=fn_et_þf_hk
10	,	,	PUNCT	grm	_	9	punct	_	tag=grm
11	sagði	sagður	VERB	so_0_fh_p3_et_þt_gm	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	tag=so_0_fh_p3_et_þt_gm
12	Haukur	Haukur	PROPN	person_nf_kk	Case=Nom|Gender=Masc	11	nsubj	_	SpaceAfter=No|tag=person_nf_kk
13	.	.	PUNCT	grm	_	11	punct	_	tag=grm

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod	color:blue
1	Þarf	þurfa	VERB	so_0_fh_p3_et_nt_gm	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	tag=so_0_fh_p3_et_nt_gm
2	fjölskyldan	fjölskylda	NOUN	no_et_nf_kvk_gr	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	1	nsubj	_	tag=no_et_nf_kvk_gr
3	á	á	ADP	fs_þgf	Case=Dat	6	case	_	tag=fs_þgf
4	þeim	sá	PRON	fn_ft_þgf_kvk	Case=Dat|Gender=Fem|Number=Plur	6	nmod	_	tag=fn_ft_þgf_kvk
5	að	að	PART	nhm	_	6	mark	_	tag=nhm
6	halda	halda	VERB	so_0_nh_gm	VerbForm=Inf|Voice=Act	1	obl	_	SpaceAfter=No|tag=so_0_nh_gm
7	?	_	PUNCT	grm	_	1	punct	_	tag=grm

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Þetta	þessi	PRON	fn_et_þf_hk	Case=Acc|Gender=Neut|Number=Sing	2	nmod	_	tag=fn_et_þf_hk
2	árið	ár	ADV	no_et_þf_hk_gr	Case=Acc|Definite=Def|Gender=Neut|Number=Sing	3	advmod	_	tag=no_et_þf_hk_gr
3	kvaka	kvaka	VERB	so_1_þf_fh_p3_ft_nt_gm	Case=Acc|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	_	tag=so_1_þf_fh_p3_ft_nt_gm
4	þau	það	PRON	pfn_ft_nf_hk_p3	Case=Nom|Gender=Neut|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	tag=pfn_ft_nf_hk_p3
5	af	af	ADP	fs_þgf	Case=Dat	7	case	_	tag=fs_þgf
6	sömu	sami	PRON	fn_et_þgf_kvk	Case=Dat|Gender=Fem|Number=Sing	7	nmod	_	tag=fn_et_þgf_kvk
7	einlægni	einlægni	NOUN	no_et_þgf_kvk	Case=Dat|Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No|tag=no_et_þgf_kvk
8	:	:	PUNCT	grm	_	11	punct	_	tag=grm
9	Hatrið	hatur	NOUN	no_et_nf_hk_gr	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	11	nsubj	_	tag=no_et_nf_hk_gr
10	mun	muna	VERB	so_0_fh_p3_et_nt_gm	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	11	xcomp	_	tag=so_0_fh_p3_et_nt_gm
11	sigra	sigra	VERB	so_0_nh_gm	VerbForm=Inf|Voice=Act	3	obj	_	SpaceAfter=No|tag=so_0_nh_gm
12	!	!	PUNCT	grm	_	3	punct	_	tag=grm

~~~


