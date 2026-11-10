---
layout: base
title:  'Statistics of mark in UD_Old_Georgian-MidGLauRo'
udver: '2'
---

## Treebank Statistics: UD_Old_Georgian-MidGLauRo: Relations: `mark`

This relation is universal.

347 nodes (5%) are attached to their parents as `mark`.

177 instances of `mark` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.04899135446686.

The following 11 pairs of parts of speech are connected with `mark`: <tt><a href="oge_midglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_midglauro-pos-PART.html">PART</a></tt> (157; 45% instances), <tt><a href="oge_midglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_midglauro-pos-SCONJ.html">SCONJ</a></tt> (152; 44% instances), <tt><a href="oge_midglauro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="oge_midglauro-pos-SCONJ.html">SCONJ</a></tt> (13; 4% instances), <tt><a href="oge_midglauro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="oge_midglauro-pos-SCONJ.html">SCONJ</a></tt> (6; 2% instances), <tt><a href="oge_midglauro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="oge_midglauro-pos-PART.html">PART</a></tt> (5; 1% instances), <tt><a href="oge_midglauro-pos-PRON.html">PRON</a></tt>-<tt><a href="oge_midglauro-pos-SCONJ.html">SCONJ</a></tt> (5; 1% instances), <tt><a href="oge_midglauro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="oge_midglauro-pos-PART.html">PART</a></tt> (4; 1% instances), <tt><a href="oge_midglauro-pos-PRON.html">PRON</a></tt>-<tt><a href="oge_midglauro-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="oge_midglauro-pos-ADV.html">ADV</a></tt>-<tt><a href="oge_midglauro-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="oge_midglauro-pos-ADV.html">ADV</a></tt>-<tt><a href="oge_midglauro-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="oge_midglauro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="oge_midglauro-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 mark	color:blue
1	ჰკითხა	კითხვა	VERB	V_Act_Aor_S:3Sg_IO:3Sg	Mood=Ind|Number[io]=Sing|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=No
2	მოყვასსა	მოყვასი	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	1	iobj	_	SpaceAfter=No
3	:	:	PUNCT	Punct_Colon	_	4	punct	_	_
4	არს	ყოფა	VERB	V_Act_Pres_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	Preverb=No
5	ცა	ცა	PART	Part	_	4	advmod	_	_
6	ამის	ესე	PRON	Pron_Dem_Gen_Sg	Case=Gen|Number=Sing|PronType=Dem	8	nmod	_	_
7	ებრი	ებრ	ADP	Post	AdpType=Post|Case=Gen|Case[sauf]=Nom	6	case	_	_
8	კაცი	კაცი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	4	nsubj	_	_
9	ო	ო	PART	Part	Evident=Nfh	4	mark	_	_
10	?	?	PUNCT	Punct_Question	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 mark	color:blue
1	მოაჴსენა	მოჴსენება	VERB	V_Act_Aor_Pv_AV_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=Yes|Version=A
2	მან	იგი	PRON	Pron_Dem_Erg_Sg	Case=Erg|Number=Sing|PronType=Dem	3	det	_	_
3	კაცმან	კაცი	NOUN	N_Erg_Sg	Case=Erg|Number=Sing	1	nsubj	_	SpaceAfter=No
4	:	:	PUNCT	Punct_Colon	_	5	punct	_	_
5	ფიცე	ფიცება	VERB	V_Act_Aor_Imp_S:2Sg	Mood=Imp|Number[subj]=Sing|Person[subj]=2|Tense=Past|VerbForm=Fin	1	ccomp	_	SpaceAfter=No|Preverb=No
6	,	,	PUNCT	Punct_Comma	_	10	punct	_	_
7	რომელ	რომელ	SCONJ	Cj_Sub	_	10	mark	_	_
8	ავი	ავი	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	11	amod	_	_
9	არა	არა	ADV	Adv_Neg	Polarity=Neg	10	advmod	_	_
10	მიყო	ყოფა	VERB	V_Act_Aor_Subj_IV_S:2Sg_IO:1Sg	Mood=Sub|Number[io]=Sing|Number[subj]=Sing|Person[io]=1|Person[subj]=2|Tense=Past|VerbForm=Fin	5	ccomp	_	Preverb=No|Version=I
11	რა	რა	PRON	Pron_Ind_Nom_Sg	Case=Nom|Number=Sing|PronType=Ind	10	obj	_	_
12	და	და	CCONJ	Cj_Coord	_	13	cc	_	_
13	მოგაჴსენო	მოჴსენება	VERB	V_Act_Aor_Subj_Pv_AV_S:1Sg_IO:2	Mood=Sub|Number[subj]=Sing|Person[io]=2|Person[subj]=1|Tense=Past|VerbForm=Fin	10	conj	_	SpaceAfter=No|Preverb=Yes|Version=A
14	.	.	PUNCT	Punct_FullStop	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 mark	color:blue
1	და	და	CCONJ	Cj_Coord	_	2	cc	_	_
2	შეიყვარა	შეყვარება	VERB	V_Act_Aor_Pv_IV_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=Yes|Version=I
3	უზომოდ	უზომო	ADJ	Adv	Case=Ess	2	advmod	_	_
4	მეფემან	მეფე	NOUN	N_Erg_Sg	Case=Erg|Number=Sing	2	nsubj	_	_
5	და	და	CCONJ	Cj_Coord	_	6	cc	_	_
6	სხვამან	სხვა	PRON	Pron_Ind_Erg_Sg	Case=Erg|Number=Sing|PronType=Ind	4	conj	_	_
7	ყოველმან	ყოველი	PRON	Pron_Tot_Erg_Sg	Case=Erg|Number=Sing|PronType=Tot	6	amod	_	_
8	ვითა	ვითა	SCONJ	Cj_Sub	_	9	mark	_	_
9	შვილი	შვილი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	2	advcl	_	_
10	მეფისა	მეფე	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	9	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Punct_FullStop	_	2	punct	_	_

~~~


