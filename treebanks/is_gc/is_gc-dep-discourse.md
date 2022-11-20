---
layout: base
title:  'Statistics of discourse in UD_Icelandic-GC'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-GC: Relations: `discourse`

This relation is universal.

5 nodes (0%) are attached to their parents as `discourse`.

5 instances of `discourse` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.2.

The following 3 pairs of parts of speech are connected with `discourse`: <tt><a href="is_gc-pos-ADV.html">ADV</a></tt>-<tt><a href="is_gc-pos-INTJ.html">INTJ</a></tt> (3; 60% instances), <tt><a href="is_gc-pos-INTJ.html">INTJ</a></tt>-<tt><a href="is_gc-pos-INTJ.html">INTJ</a></tt> (1; 20% instances), <tt><a href="is_gc-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="is_gc-pos-INTJ.html">INTJ</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 discourse	color:blue
1	Ég	ég	PRON	pfn_et_nf_p1	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	tag=pfn_et_nf_p1
2	segi	segja	VERB	so_1_þf_fh_p1_et_nt_gm	Case=Acc|Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	0	root	_	tag=so_1_þf_fh_p1_et_nt_gm
3	þá	þá	ADV	ao	_	2	advmod	_	tag=ao
4	Nei	nei	ADV	uh	_	9	advmod	_	SpaceAfter=No|tag=uh
5	,	_	PUNCT	grm	_	4	punct	_	tag=grm
6	nei	nei	INTJ	uh	_	4	discourse	_	SpaceAfter=No|tag=uh
7	,	_	PUNCT	grm	_	6	punct	_	tag=grm
8	ég	ég	PRON	pfn_et_nf_p1	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	tag=pfn_et_nf_p1
9	er	vera	VERB	so_0_fh_p1_et_nt_gm	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	2	ccomp	_	tag=so_0_fh_p1_et_nt_gm
10	að	að	PART	nhm	_	11	mark	_	tag=nhm
11	fara	fara	VERB	so_0_nh_gm	VerbForm=Inf|Voice=Act	9	xcomp	_	tag=so_0_nh_gm
12	með	með	ADP	fs_þf	Case=Acc	13	case	_	tag=fs_þf
13	hann	hann	PRON	pfn_et_þf_kk_p3	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	obl	_	SpaceAfter=No|tag=pfn_et_þf_kk_p3
14	.	_	PUNCT	grm	_	2	punct	_	tag=grm

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 discourse	color:blue
1	Já	já	INTJ	uh	_	11	dep	_	SpaceAfter=No|tag=uh
2	,	_	PUNCT	grm	_	1	punct	_	tag=grm
3	já	já	INTJ	uh	_	1	discourse	_	SpaceAfter=No|tag=uh
4	,	_	PUNCT	grm	_	11	punct	_	tag=grm
5	þetta	þessi	PRON	fn_et_nf_hk	Case=Nom|Gender=Neut|Number=Sing	11	nsubj	_	tag=fn_et_nf_hk
6	er	vera	AUX	so_0_fh_p3_et_nt_gm	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	11	cop	_	tag=so_0_fh_p3_et_nt_gm
7	flest	margur	ADJ	lo_et_nf_hk_esb	Case=Nom|Degree=Sup|Gender=Neut|Number=Sing	11	obl	_	tag=lo_et_nf_hk_esb
8	meira	meira	ADV	ao_mst	Degree=Cmp	11	advmod	_	tag=ao_mst
9	og	og	ADV	ao_mst	Degree=Cmp	8	fixed	_	tag=ao_mst
10	minna	minna	ADV	ao_mst	Degree=Cmp	8	fixed	_	MWEEnd=Yes|tag=ao_mst
11	samtvinnað	samtvinna	VERB	so_0_lhþt_et	Number=Sing|VerbForm=Part	0	root	_	tag=so_0_lhþt_et
12	úr	úr	ADP	fs_þgf	Case=Dat	13	case	_	tag=fs_þgf
13	trúarpælingum	trúarpæling	NOUN	no_ft_þgf_kvk	Case=Dat|Gender=Fem|Number=Plur	11	obl	_	tag=no_ft_þgf_kvk
14	og	og	CCONJ	st	_	15	cc	_	tag=st
15	Biblíunni	Biblía	PROPN	sérnafn_et_þgf_kvk_gr	Case=Dat|Definite=Def|Gender=Fem|Number=Sing	13	conj	_	SpaceAfter=No|tag=sérnafn_et_þgf_kvk_gr
16	,	_	PUNCT	grm	_	15	punct	_	tag=grm
17	sem	sem	SCONJ	stt	_	18	mark	_	tag=stt
18	er	vera	VERB	so_1_nf_fh_p3_et_nt_gm	Case=Nom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	13	acl:relcl	_	tag=so_1_nf_fh_p3_et_nt_gm
19	afar	afar	ADV	eo	_	21	advmod	_	tag=eo
20	merkileg	merkilegur	ADJ	lo_et_nf_kvk_sb	Case=Nom|Gender=Fem|Number=Sing	21	amod	_	tag=lo_et_nf_kvk_sb
21	þjóðfræðiheimild	þjóðfræðiheimild	NOUN	no_et_nf_kvk	Case=Nom|Gender=Fem|Number=Sing	18	acl:relcl	_	SpaceAfter=No|tag=no_et_nf_kvk
22	.	_	PUNCT	grm	_	11	punct	_	tag=grm

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 discourse	color:blue
1	Þannig	þannig	ADV	ao	_	2	advmod	_	tag=ao
2	að	að	SCONJ	st	_	9	dep	_	tag=st
3	já	já	INTJ	uh	_	2	discourse	_	SpaceAfter=No|tag=uh
4	,	_	PUNCT	grm	_	3	punct	_	tag=grm
5	að	að	ADP	fs_þgf	Case=Dat	7	case	_	tag=fs_þgf
6	einhverju	einhver	PRON	fn_et_þgf_hk	Case=Dat|Gender=Neut|Number=Sing	7	nmod	_	tag=fn_et_þgf_hk
7	leyti	leyti	NOUN	no_et_þgf_hk	Case=Dat|Gender=Neut|Number=Sing	9	obl	_	tag=no_et_þgf_hk
8	er	vera	AUX	so_0_fh_p3_et_nt_gm	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	9	cop	_	tag=so_0_fh_p3_et_nt_gm
9	hægt	hægur	ADJ	lo_et_nf_hk_sb	Case=Nom|Gender=Neut|Number=Sing	0	root	_	tag=lo_et_nf_hk_sb
10	að	að	PART	nhm	_	11	mark	_	tag=nhm
11	loka	loka	VERB	so_1_þgf_nh_gm	Case=Dat|VerbForm=Inf|Voice=Act	9	xcomp	_	tag=so_1_þgf_nh_gm
12	sárunum	sár	NOUN	no_ft_þgf_hk_gr	Case=Dat|Definite=Def|Gender=Neut|Number=Plur	11	obj	_	tag=no_ft_þgf_hk_gr
13	og	og	CCONJ	st	_	11	cc	_	tag=st
14	ná	ná	VERB	so_0_nh_gm	VerbForm=Inf|Voice=Act	11	conj	_	tag=so_0_nh_gm
15	einhvers	einhver	PRON	fn_et_ef_kk	Case=Gen|Gender=Masc|Number=Sing	16	nmod	_	tag=fn_et_ef_kk
16	konar	konar	NOUN	no_et_ef_kk	Case=Gen|Gender=Masc|Number=Sing	14	obj	_	tag=no_et_ef_kk
17	bata	bati	NOUN	no_et_ef_kk	Case=Gen|Gender=Masc|Number=Sing	16	conj	_	SpaceAfter=No|tag=no_et_ef_kk
18	.	_	PUNCT	grm	_	9	punct	_	tag=grm

~~~


