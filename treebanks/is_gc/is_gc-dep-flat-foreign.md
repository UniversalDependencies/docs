---
layout: base
title:  'Statistics of flat:foreign in UD_Icelandic-GC'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-GC: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="is_gc-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="is_gc-dep-flat-name.html">flat:name</a></tt>.

120 nodes (0%) are attached to their parents as `flat:foreign`.

120 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.56666666666667.

The following 5 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="is_gc-pos-X.html">X</a></tt>-<tt><a href="is_gc-pos-X.html">X</a></tt> (105; 88% instances), <tt><a href="is_gc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_gc-pos-X.html">X</a></tt> (11; 9% instances), <tt><a href="is_gc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_gc-pos-X.html">X</a></tt> (2; 2% instances), <tt><a href="is_gc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_gc-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="is_gc-pos-VERB.html">VERB</a></tt>-<tt><a href="is_gc-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:foreign	color:blue
1	Hatrið	hatur	NOUN	no_et_nf_hk_gr	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	3	nsubj	_	tag=no_et_nf_hk_gr
2	mun	munu	AUX	so_0_fh_p3_et_nt_gm	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	aux	_	tag=so_0_fh_p3_et_nt_gm
3	sigra	sigra	VERB	so_0_nh_gm	VerbForm=Inf|Voice=Act	0	root	_	SpaceAfter=No|tag=so_0_nh_gm
4	,	_	PUNCT	grm	_	3	punct	_	tag=grm
5	hate	hate	X	foreign	_	3	flat:foreign	_	tag=foreign
6	will	will	X	foreign	_	5	flat:foreign	_	tag=foreign
7	prevail	prevail	X	foreign	_	5	flat:foreign	_	SpaceAfter=No|tag=foreign
8	.	_	PUNCT	grm	_	3	punct	_	tag=grm

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:foreign	color:blue
1	Platan	plata	NOUN	no_et_nf_kvk_gr	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	2	nsubj	_	tag=no_et_nf_kvk_gr
2	ber	bera	VERB	so_1_þf_fh_p3_et_nt_gm	Case=Acc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	tag=so_1_þf_fh_p3_et_nt_gm
3	heitið	heiti	NOUN	no_et_þf_hk_gr	Case=Acc|Definite=Def|Gender=Neut|Number=Sing	2	obj	_	tag=no_et_þf_hk_gr
4	A	A	X	foreign	_	3	flat:foreign	_	tag=foreign
5	Seat	Seat	X	foreign	_	4	flat:foreign	_	tag=foreign
6	At	At	X	foreign	_	5	flat:foreign	_	tag=foreign
7	The	The	X	foreign	_	6	flat:foreign	_	tag=foreign
8	Table	Table	X	foreign	_	7	flat:foreign	_	MWEEnd=Yes|tag=foreign
9	eða	eða	CCONJ	st	_	3	cc	_	tag=st
10	Sæti	sæti	NOUN	no_et_þf_hk	Case=Acc|Gender=Neut|Number=Sing	3	conj	_	tag=no_et_þf_hk
11	við	við	ADP	fs_þf	Case=Acc	12	case	_	tag=fs_þf
12	borðið	borð	NOUN	no_et_þf_hk_gr	Case=Acc|Definite=Def|Gender=Neut|Number=Sing	3	obl	_	SpaceAfter=No|tag=no_et_þf_hk_gr
13	.	_	PUNCT	grm	_	2	punct	_	tag=grm

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 flat:foreign	color:blue
1	Einar	Einar	PROPN	person_nf_kk	Case=Nom|Gender=Masc	5	nsubj	_	tag=person_nf_kk
2	Ágúst	Ágúst	PROPN	person_nf_kk	Case=Nom|Gender=Masc	1	flat	_	MWEEnd=Yes|tag=person_nf_kk
3	úr	úr	ADP	fs_þgf	Case=Dat	4	case	_	tag=fs_þgf
4	Skítamóral	Skítamórall	PROPN	sérnafn_et_þgf_kk	Case=Dat|Gender=Masc|Number=Sing	1	obl	_	tag=sérnafn_et_þgf_kk
5	spilar	spila	VERB	so_0_fh_p3_et_nt_gm	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	tag=so_0_fh_p3_et_nt_gm
6	frá	frá	ADP	fs_þgf	Case=Dat	7	case	_	tag=fs_þgf
7	21	21	NUM	tala	NumType=Card	5	obl	_	SpaceAfter=No|tag=tala
8	–	_	PUNCT	grm	_	7	punct	_	SpaceAfter=No|tag=grm
9	00	00	NUM	tala	NumType=Card	7	nummod	_	tag=tala
10	og	og	CCONJ	st	_	5	cc	_	tag=st
11	það	það	PRON	pfn_et_nf_hk_p3	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	12	expl	_	tag=pfn_et_nf_hk_p3
12	verður	verða	VERB	so_0_fh_p3_et_nt_gm	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	5	conj	_	tag=so_0_fh_p3_et_nt_gm
13	rjúkandi	rjúkandi	ADJ	lo	_	12	nsubj	_	tag=lo
14	happy	happy	X	foreign	_	13	flat:foreign	_	tag=foreign
15	hour	hour	X	foreign	_	13	flat:foreign	_	tag=foreign
16	frá	frá	ADP	fs_þgf	Case=Dat	17	case	_	tag=fs_þgf
17	21	21	ADV	tala	NumType=Card	13	advmod	_	SpaceAfter=No|tag=tala
18	–	_	PUNCT	grm	_	17	punct	_	SpaceAfter=No|tag=grm
19	23	23	NUM	tala	NumType=Card	17	nummod	_	SpaceAfter=No|tag=tala
20	.	_	PUNCT	grm	_	5	punct	_	tag=grm

~~~


