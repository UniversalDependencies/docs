---
layout: base
title:  'Statistics of compound:prt in UD_Icelandic-GC'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-GC: Relations: `compound:prt`

This relation is a language-specific subtype of .

408 nodes (0%) are attached to their parents as `compound:prt`.

389 instances of `compound:prt` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.41421568627451.

The following 2 pairs of parts of speech are connected with `compound:prt`: <tt><a href="is_gc-pos-VERB.html">VERB</a></tt>-<tt><a href="is_gc-pos-ADV.html">ADV</a></tt> (406; 100% instances), <tt><a href="is_gc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_gc-pos-ADV.html">ADV</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 compound:prt	color:blue
1	Tungumálaörðugleikar	tungumálaörðugleikar	NOUN	no_ft_nf_kk	Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	tag=no_ft_nf_kk
2	hjálpi	hjálpa	VERB	so_0_vh_p3_ft_nt_gm	Mood=Sub|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	_	tag=so_0_vh_p3_ft_nt_gm
3	ekki	ekki	ADV	ao	_	2	advmod	_	tag=ao
4	fyrir	fyrir	ADV	ao	_	2	compound:prt	_	SpaceAfter=No|tag=ao
5	.	_	PUNCT	grm	_	2	punct	_	tag=grm

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 compound:prt	color:blue
1	Það	það	PRON	pfn_et_nf_hk_p3	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	tag=pfn_et_nf_hk_p3
2	er	vera	AUX	so_1_nf_fh_p3_et_nt_gm	Case=Nom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	5	cop	_	tag=so_1_nf_fh_p3_et_nt_gm
3	líka	líka	ADV	eo	_	5	advmod	_	tag=eo
4	mikill	mikill	ADJ	lo_et_nf_kk_sb	Case=Nom|Gender=Masc|Number=Sing	5	amod	_	tag=lo_et_nf_kk_sb
5	áhugi	áhugi	NOUN	no_et_nf_kk	Case=Nom|Gender=Masc|Number=Sing	0	root	_	tag=no_et_nf_kk
6	erlendis	erlendis	ADV	ao	_	5	advmod	_	tag=ao
7	frá	frá	ADV	ao	_	5	compound:prt	_	tag=ao
8	á	á	ADP	fs_þgf	Case=Dat	10	case	_	tag=fs_þgf
9	íslenskum	íslenskur	ADJ	lo_et_þgf_kk_sb	Case=Dat|Gender=Masc|Number=Sing	10	amod	_	tag=lo_et_þgf_kk_sb
10	djassi	djass	NOUN	no_et_þgf_kk	Case=Dat|Gender=Masc|Number=Sing	5	obl	_	tag=no_et_þgf_kk
11	og	og	CCONJ	st	_	5	cc	_	tag=st
12	við	ég	PRON	pfn_ft_nf_p1	Case=Nom|Number=Plur|Person=1|PronType=Prs	13	nmod	_	tag=pfn_ft_nf_p1
13	Leifur	Leifur	PROPN	person_nf_kk	Case=Nom|Gender=Masc	14	nsubj	_	tag=person_nf_kk
14	finnum	finna	VERB	so_1_þgf_fh_p1_ft_nt_gm	Case=Dat|Mood=Ind|Number=Plur|Person=1|Tense=Pres|Voice=Act	5	conj	_	tag=so_1_þgf_fh_p1_ft_nt_gm
15	líka	líka	ADV	ao	_	14	obl	_	tag=ao
16	fyrir	fyrir	ADP	fs_þgf	Case=Dat	18	case	_	tag=fs_þgf
17	miklum	mikill	ADJ	lo_et_þgf_kk_sb	Case=Dat|Gender=Masc|Number=Sing	18	amod	_	tag=lo_et_þgf_kk_sb
18	áhuga	áhugi	NOUN	no_et_þgf_kk	Case=Dat|Gender=Masc|Number=Sing	15	obl	_	tag=no_et_þgf_kk
19	erlendra	erlendur	ADJ	lo_ft_ef_kk_sb	Case=Gen|Gender=Masc|Number=Plur	20	amod	_	tag=lo_ft_ef_kk_sb
20	gesta	gestur	NOUN	no_ft_ef_kk	Case=Gen|Gender=Masc|Number=Plur	18	nmod:poss	_	tag=no_ft_ef_kk
21	á	á	ADP	fs_þgf	Case=Dat	24	case	_	tag=fs_þgf
22	því	sá	PRON	fn_et_þgf_hk	Case=Dat|Gender=Neut|Number=Sing	24	nmod	_	tag=fn_et_þgf_hk
23	að	að	PART	nhm	_	24	mark	_	tag=nhm
24	koma	koma	VERB	so_0_nh_gm	VerbForm=Inf|Voice=Act	20	obl	_	tag=so_0_nh_gm
25	og	og	CCONJ	st	_	26	cc	_	tag=st
26	spila	spila	VERB	so_0_nh_gm	VerbForm=Inf|Voice=Act	24	conj	_	tag=so_0_nh_gm
27	á	á	ADP	fs_þgf	Case=Dat	28	case	_	tag=fs_þgf
28	Jazzhátíð	jazzhátíð	NOUN	no_et_þgf_kvk	Case=Dat|Gender=Fem|Number=Sing	26	obl	_	tag=no_et_þgf_kvk
29	Reykjavíkur	Reykjavík	NOUN	no_et_ef_kvk	Case=Gen|Gender=Fem|Number=Sing	28	nmod:poss	_	SpaceAfter=No|tag=no_et_ef_kvk
30	.	_	PUNCT	grm	_	5	punct	_	tag=grm

~~~


