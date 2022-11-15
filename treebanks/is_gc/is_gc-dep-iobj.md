---
layout: base
title:  'Statistics of iobj in UD_Icelandic-GC'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-GC: Relations: `iobj`

This relation is universal.

390 nodes (0%) are attached to their parents as `iobj`.

367 instances of `iobj` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.67435897435897.

The following 11 pairs of parts of speech are connected with `iobj`: <tt><a href="is_gc-pos-VERB.html">VERB</a></tt>-<tt><a href="is_gc-pos-PRON.html">PRON</a></tt> (165; 42% instances), <tt><a href="is_gc-pos-VERB.html">VERB</a></tt>-<tt><a href="is_gc-pos-NOUN.html">NOUN</a></tt> (136; 35% instances), <tt><a href="is_gc-pos-VERB.html">VERB</a></tt>-<tt><a href="is_gc-pos-ADJ.html">ADJ</a></tt> (29; 7% instances), <tt><a href="is_gc-pos-VERB.html">VERB</a></tt>-<tt><a href="is_gc-pos-PROPN.html">PROPN</a></tt> (26; 7% instances), <tt><a href="is_gc-pos-VERB.html">VERB</a></tt>-<tt><a href="is_gc-pos-VERB.html">VERB</a></tt> (14; 4% instances), <tt><a href="is_gc-pos-VERB.html">VERB</a></tt>-<tt><a href="is_gc-pos-ADV.html">ADV</a></tt> (11; 3% instances), <tt><a href="is_gc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_gc-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="is_gc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_gc-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="is_gc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_gc-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="is_gc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_gc-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="is_gc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_gc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 iobj	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	Gáfu	gefa	VERB	so_2_þgf_þf_fh_p3_ft_þt_gm	Case=Acc|Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Act	0	root	_	tag=so_2_þgf_þf_fh_p3_ft_þt_gm
2	ríkisstjórninni	ríkisstjórn	NOUN	no_et_þgf_kvk_gr	Case=Dat|Definite=Def|Gender=Fem|Number=Sing	1	iobj	_	tag=no_et_þgf_kvk_gr
3	rauða	rauður	ADJ	lo_et_þf_hk_vb	Case=Acc|Gender=Neut|Number=Sing	4	amod	_	tag=lo_et_þf_hk_vb
4	spjaldið	spjald	NOUN	no_et_þf_hk_gr	Case=Acc|Definite=Def|Gender=Neut|Number=Sing	1	obj	_	tag=no_et_þf_hk_gr
5	vegna	vegna	ADP	fs_ef	Case=Gen	6	case	_	tag=fs_ef
6	ljósmæðradeilunnar	ljósmæðradeila	NOUN	no_et_ef_kvk_gr	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	1	obl	_	tag=no_et_ef_kvk_gr

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 iobj	color:blue
1	Það	sá	PRON	fn_et_nf_hk	Case=Nom|Gender=Neut|Number=Sing	2	nsubj	_	tag=fn_et_nf_hk
2	eigi	eiga	VERB	so_2_þf_þf_vh_p3_et_nt_gm	Case=Acc|Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	tag=so_2_þf_þf_vh_p3_et_nt_gm
3	ekki	ekki	ADV	ao	_	2	advmod	_	tag=ao
4	skilið	skilinn	ADJ	lo_et_þf_hk_sb	Case=Acc|Gender=Neut|Number=Sing	2	iobj	_	tag=lo_et_þf_hk_sb
5	það	sá	PRON	fn_et_þf_hk	Case=Acc|Gender=Neut|Number=Sing	6	nmod	_	tag=fn_et_þf_hk
6	orðspor	orðspor	NOUN	no_et_þf_hk	Case=Acc|Gender=Neut|Number=Sing	2	obj	_	tag=no_et_þf_hk
7	sem	sem	SCONJ	stt	_	10	mark	_	tag=stt
8	það	það	PRON	pfn_et_nf_hk_p3	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	tag=pfn_et_nf_hk_p3
9	hefur	hafa	AUX	so_0_fh_p3_et_nt_gm	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	10	aux	_	tag=so_0_fh_p3_et_nt_gm
10	fengið	fá	VERB	so_0_sagnb_gm	VerbForm=Sup|Voice=Act	6	acl:relcl	_	tag=so_0_sagnb_gm
11	á	á	ADP	fs_þf	Case=Acc	12	case	_	tag=fs_þf
12	sig	sig	PRON	abfn_þf	Case=Acc|PronType=Prs	10	obl	_	tag=abfn_þf
13	í	í	ADP	fs_þf	Case=Acc	15	case	_	tag=fs_þf
14	gegnum	gegnum	ADP	fs_þf	Case=Acc	13	fixed	_	MWEEnd=Yes|tag=fs_þf
15	tíðina	tíð	ADV	no_et_þf_kvk_gr	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	10	advmod	_	SpaceAfter=No|tag=no_et_þf_kvk_gr
16	.	_	PUNCT	grm	_	2	punct	_	tag=grm

~~~


