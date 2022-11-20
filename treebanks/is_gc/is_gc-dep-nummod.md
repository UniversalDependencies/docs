---
layout: base
title:  'Statistics of nummod in UD_Icelandic-GC'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-GC: Relations: `nummod`

This relation is universal.

1128 nodes (1%) are attached to their parents as `nummod`.

847 instances of `nummod` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="is_gc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_gc-pos-NUM.html">NUM</a></tt> (813; 72% instances), <tt><a href="is_gc-pos-ADV.html">ADV</a></tt>-<tt><a href="is_gc-pos-NUM.html">NUM</a></tt> (182; 16% instances), <tt><a href="is_gc-pos-NUM.html">NUM</a></tt>-<tt><a href="is_gc-pos-NUM.html">NUM</a></tt> (63; 6% instances), <tt><a href="is_gc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_gc-pos-NUM.html">NUM</a></tt> (31; 3% instances), <tt><a href="is_gc-pos-PRON.html">PRON</a></tt>-<tt><a href="is_gc-pos-NUM.html">NUM</a></tt> (24; 2% instances), <tt><a href="is_gc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_gc-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="is_gc-pos-VERB.html">VERB</a></tt>-<tt><a href="is_gc-pos-NUM.html">NUM</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	Þá	þá	ADV	ao_fst	Degree=Pos	4	advmod	_	tag=ao_fst
2	mældist	mæla	VERB	so_1_nf_fh_p3_et_þt_mm	Case=Nom|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Mid	4	xcomp	_	tag=so_1_nf_fh_p3_et_þt_mm
3	hann	hann	PRON	pfn_et_nf_kk_p3	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	tag=pfn_et_nf_kk_p3
4	1040,6	1040,6	NUM	mælieining	_	0	root	_	tag=mælieining
5	hPa	hPa	NUM	mælieining	_	4	flat	_	MWEEnd=Yes|tag=mælieining
6	og	og	CCONJ	st	_	4	cc	_	tag=st
7	80	80	NUM	tala_ft_ef_hk	Case=Gen|Gender=Neut|Number=Plur|NumType=Card	8	nummod	_	tag=tala_ft_ef_hk
8	ára	ár	NOUN	no_ft_ef_hk	Case=Gen|Gender=Neut|Number=Plur	9	obl	_	tag=no_ft_ef_hk
9	met	met	NOUN	no_et_nf_hk	Case=Nom|Gender=Neut|Number=Sing	10	nsubj	_	tag=no_et_nf_hk
10	slegið	slá	VERB	so_0_lhþt_et	Number=Sing|VerbForm=Part	4	conj	_	SpaceAfter=No|tag=so_0_lhþt_et
11	.	_	PUNCT	grm	_	4	punct	_	tag=grm

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	Á	á	ADP	fs_þgf	Case=Dat	3	case	_	tag=fs_þgf
2	níu	níu	NUM	töl_ft_þgf_hk	Case=Dat|Gender=Neut|Number=Plur	3	nummod	_	tag=töl_ft_þgf_hk
3	árum	ár	ADV	no_ft_þgf_hk	Case=Dat|Gender=Neut|Number=Plur	9	advmod	_	tag=no_ft_þgf_hk
4	hans	hann	PRON	pfn_et_ef_kk_p3	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nmod:poss	_	tag=pfn_et_ef_kk_p3
5	hjá	hjá	ADP	fs_þgf	Case=Dat	6	case	_	tag=fs_þgf
6	FH	FH	PROPN	fyrirtæki_et_þgf_hk	Case=Dat|Gender=Neut|Number=Sing	3	obl	_	tag=fyrirtæki_et_þgf_hk
7	hefði	hafa	AUX	so_0_vh_p3_et_þt_gm	Mood=Sub|Number=Sing|Person=3|Tense=Past|Voice=Act	9	aux	_	tag=so_0_vh_p3_et_þt_gm
8	aldrei	aldrei	ADV	ao	_	9	advmod	_	tag=ao
9	komið	koma	VERB	so_0_sagnb_gm	VerbForm=Sup|Voice=Act	0	root	_	tag=so_0_sagnb_gm
10	upp	upp	ADV	ao	_	9	advmod	_	tag=ao
11	krísa	krísa	NOUN	no_et_nf_kvk	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	SpaceAfter=No|tag=no_et_nf_kvk
12	.	.	PUNCT	grm	_	9	punct	_	tag=grm

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nummod	color:blue
1	Þá	þá	ADV	ao	_	2	advmod	_	tag=ao
2	unnu	vinna	VERB	so_1_þf_fh_p3_ft_þt_gm	Case=Acc|Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Act	0	root	_	tag=so_1_þf_fh_p3_ft_þt_gm
3	Haukar	Haukar	PROPN	fyrirtæki_ft_nf_hk	Case=Nom|Gender=Neut|Number=Plur	2	nsubj	_	tag=fyrirtæki_ft_nf_hk
4	stórsigur	stórsigur	NOUN	no_et_þf_kk	Case=Acc|Gender=Masc|Number=Sing	2	obj	_	tag=no_et_þf_kk
5	á	á	ADP	fs_þgf	Case=Dat	6	case	_	tag=fs_þgf
6	Aftureldingu	Afturelding	PROPN	fyrirtæki_et_þgf_kvk	Case=Dat|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No|tag=fyrirtæki_et_þgf_kvk
7	,	,	PUNCT	grm	_	6	punct	_	tag=grm
8	27	27	NUM	tala	NumType=Card	2	obl	_	SpaceAfter=No|tag=tala
9	:	:	PUNCT	grm	_	8	punct	_	tag=grm
10	14	14	NUM	tala	NumType=Card	8	nummod	_	SpaceAfter=No|tag=tala
11	.	.	PUNCT	grm	_	2	punct	_	tag=grm

~~~


