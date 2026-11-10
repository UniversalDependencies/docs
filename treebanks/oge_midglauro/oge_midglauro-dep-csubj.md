---
layout: base
title:  'Statistics of csubj in UD_Old_Georgian-MidGLauRo'
udver: '2'
---

## Treebank Statistics: UD_Old_Georgian-MidGLauRo: Relations: `csubj`

This relation is universal.

2 nodes (0%) are attached to their parents as `csubj`.

2 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="oge_midglauro-pos-PRON.html">PRON</a></tt>-<tt><a href="oge_midglauro-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="oge_midglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_midglauro-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 csubj	color:blue
1	ჰკითხა	კითხვა	VERB	V_Act_Aor_S:3Sg_IO:3	Mood=Ind|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=No
2	ამბრი	ამბრი	PROPN	N_Prop	NameType=Prs	1	nsubj	_	_
3	არაბმან	არაბი	NOUN	N_Erg_Sg	Case=Erg|Number=Sing	2	appos	_	SpaceAfter=No
4	:	:	PUNCT	Punct_Colon	_	7	punct	_	_
5	ძმაო	ძმა	NOUN	N_Voc_Sg	Case=Voc|Number=Sing	7	vocative	_	SpaceAfter=No
6	,	,	PUNCT	Punct_Comma	_	5	punct	_	_
7	რა	რა	PRON	Pron_Int_Nom_Sg	Case=Nom|Number=Sing|PronType=Int	1	ccomp	_	_
8	არს	ყოფა	AUX	V_Act_Pres_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	7	cop	_	SpaceAfter=No
9	,	,	PUNCT	Punct_Comma	_	13	punct	_	_
10	რომელ	რომელ	SCONJ	Cj_Sub	_	13	mark	_	_
11	ასრე	ასრე	ADV	Adv	_	13	advmod	_	_
12	ფიცხლად	ფიცხელი	ADJ	A_Adv	Case=Ess|Number=Sing	13	advmod	_	_
13	მოხვალ	მოსვლა	VERB	V_Act_Pres_Pv_S:2Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|VerbForm=Fin	7	csubj	_	Preverb=Yes
14	ო	ო	PART	Part	Evident=Nfh	7	mark	_	_
15	?	?	PUNCT	Punct_Question	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 22 csubj	color:blue
1	თქვა	თქმა	VERB	V_Act_Aor_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=No
2	ამბრი	ამბრი	PROPN	N_Prop	NameType=Prs	1	nsubj	_	_
3	არაბმან	არაბი	NOUN	N_Erg_Sg	Case=Erg|Number=Sing	2	appos	_	SpaceAfter=No
4	:	:	PUNCT	Punct_Colon	_	5	punct	_	_
5	ღმერთი	ღმერთი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	10	nsubj	_	_
6	არის	ყოფა	AUX	V_Act_Pres_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
7	და	და	CCONJ	Cj_Coord	_	8	cc	_	_
8	ჭაბუკობა	ჭაბუკობა	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	5	conj	_	_
9	ჩვენი	ჩვენი	PRON	Pron_Poss_1Pl_Nom_Sg	Case=Nom|Number=Sing|Person=1|Poss=Yes|PronType=Prs	8	nmod	_	_
10	დამრჩენელი	დამრჩენელი	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	1	ccomp	_	SpaceAfter=No
11	,	,	PUNCT	Punct_Comma	_	13	punct	_	_
12	და	და	CCONJ	Cj_Coord	_	13	cc	_	_
13	უბრძანა	ბრძანება	VERB	V_Act_Aor_UV_S:3Sg_IO:3	Mood=Ind|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	1	conj	_	Preverb=No|Version=U
14	აბუტარს	აბუტარი	PROPN	N_Prop_Dat_Sg	Case=Dat|NameType=Prs|Number=Sing	13	iobj	_	SpaceAfter=No
15	:	:	PUNCT	Punct_Colon	_	16	punct	_	_
16	ჴამს	ჴამს	VERB	V_Act_Pres_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	13	ccomp	_	SpaceAfter=No|Preverb=No
17	,	,	PUNCT	Punct_Comma	_	22	punct	_	_
18	რომელ	რომელ	SCONJ	Cj_Sub	_	22	mark	_	_
19	ახალმოსულთა	ახალმოსული	NOUN	N_Obl_Pl	Case=Dat|Number=Plur	22	obl	_	_
20	ზედა	ზედა	ADP	Post	AdpType=Post|Case=Dat	19	case	_	_
21	კარგი	კარგი	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	22	amod	_	_
22	ნაქმნარი	ნაქმნარი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	16	csubj	_	_
23	ო	ო	PART	Part	Evident=Nfh	16	mark	_	_
24	?	?	PUNCT	Punct_Question	_	1	punct	_	_

~~~


