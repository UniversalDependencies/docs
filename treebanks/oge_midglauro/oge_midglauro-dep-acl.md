---
layout: base
title:  'Statistics of acl in UD_Old_Georgian-MidGLauRo'
udver: '2'
---

## Treebank Statistics: UD_Old_Georgian-MidGLauRo: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="oge_midglauro-dep-acl-relcl.html">acl:relcl</a></tt>.

11 nodes (0%) are attached to their parents as `acl`.

11 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 4 pairs of parts of speech are connected with `acl`: <tt><a href="oge_midglauro-pos-PRON.html">PRON</a></tt>-<tt><a href="oge_midglauro-pos-VERB.html">VERB</a></tt> (7; 64% instances), <tt><a href="oge_midglauro-pos-PRON.html">PRON</a></tt>-<tt><a href="oge_midglauro-pos-ADJ.html">ADJ</a></tt> (2; 18% instances), <tt><a href="oge_midglauro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="oge_midglauro-pos-VERB.html">VERB</a></tt> (1; 9% instances), <tt><a href="oge_midglauro-pos-PRON.html">PRON</a></tt>-<tt><a href="oge_midglauro-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 acl	color:blue
1	ამის	ესე	PRON	Pron_Dem_Gen_Sg	Case=Gen|Number=Sing|PronType=Dem	5	obl	_	_
2	თვის	თვის	ADP	Post	AdpType=Post|Case=Gen	1	case	_	_
3	რა	რა	PRON	Pron_Rel_Nom_Sg	Case=Nom|Number=Sing|PronType=Rel	4	det	_	_
4	პატივი	პატივი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	5	nsubj	_	_
5	გხვდების	ხვდომა	VERB	V_Act_Pres_S:3Sg_O:2Sg	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=2|Person[subj]=3|Tense=Pres|VerbForm=Fin	8	ccomp	_	SpaceAfter=No|Preverb=No
6	,	,	PUNCT	Punct_Comma	_	5	punct	_	_
7	არა	არა	ADV	Adv_Neg	Polarity=Neg	8	advmod	_	_
8	გარდაგაჴდევ	გარდაჴდება	VERB	V_Act_Pres_S:1Sg_O:2Sg	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=2|Person[subj]=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Preverb=No
9	,	,	PUNCT	Punct_Comma	_	8	punct	_	_
10	მით	იგი	PRON	Pron_Dem_Ins_Sg	Case=Ins|Number=Sing|PronType=Dem	8	obl	_	_
11	რომელ	რომელ	SCONJ	Cj_Sub	_	12	mark	_	_
12	მოცთუნებულხარ	მოცთუნება	VERB	V_Pass_Perf_S:2Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pf|VerbForm=Fin	10	acl	_	Preverb=No
13	იამანთა	იამანი	PROPN	N_Prop_Obl_Pl	Case=Dat|NameType=Prs|Number=Plur	12	obl	_	_
14	გან	გან	ADP	Post	AdpType=Post|Case=Dat	13	case	_	_
15	.	.	PUNCT	Punct_FullStop	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 acl	color:blue
1	მერმე	მერმე	ADV	Adv_Time	_	2	advmod	_	_
2	გაიყვანა	გაყვანა	VERB	V_Act_Aor_Pv_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=Yes
3	აბუტარ	აბუტარ	PROPN	N_Prop	NameType=Prs	2	nsubj	_	_
4	ცხენი	ცხენი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	2	obj	_	_
5	და	და	CCONJ	Cj_Coord	_	6	cc	_	_
6	უყივლა	ყივლება	VERB	V_Act_Aor_UV_S:3Sg_IO:3	Mood=Ind|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	2	conj	_	SpaceAfter=No|Preverb=No|Version=U
7	,	,	PUNCT	Punct_Comma	_	6	punct	_	_
8	ვითა	ვითა	SCONJ	Cj_Sub	_	10	mark	_	SpaceAfter=No
9	:	:	PUNCT	Punct_Colon	_	10	punct	_	_
10	შემომები	შებმა	VERB	V_Pass_Aor_Imp_EV_S:2Sg_IO:1Sg	Mood=Imp|Number[io]=Sing|Number[subj]=Sing|Person[io]=1|Person[subj]=2|Tense=Past|VerbForm=Fin	6	ccomp	_	SpaceAfter=No|Preverb=No|Version=E
11	,	,	PUNCT	Punct_Comma	_	10	punct	_	_
12	მით	იგი	PRON	Pron_Dem_Ins_Sg	Case=Ins|Number=Sing|PronType=Dem	10	obl	_	_
13	რომელ	რომელ	SCONJ	Cj_Sub	_	16	mark	_	_
14	პატრონისა	პატრონი	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	16	nmod	_	_
15	ჩემისა	ჩემი	PRON	Pron_Poss_1Sg_Gen_Sg	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	14	nmod	_	_
16	დამართებითი	დამართებითი	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	12	acl	_	_
17	არა	არა	ADV	Adv_Neg	Polarity=Neg	18	advmod	_	_
18	ხარ	ყოფა	AUX	V_Act_Pres_S:2Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|VerbForm=Fin	16	cop	_	_
19	ო	ო	PART	Part	Evident=Nfh	10	mark	_	_
20	.	.	PUNCT	Punct_FullStop	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 18 acl	color:blue
1	ამასობა	ამასობა	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	5	obl	_	_
2	ში	ში	ADP	Post	AdpType=Post|Case=Dat	1	case	_	_
3	საფრანგეთით	საფრანგეთი	PROPN	N_Prop_Ins_Sg	Case=Ins|NameType=Geo|Number=Sing	5	obl	_	_
4	ანბავი	ამბავი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	5	nsubj	_	_
5	მოვიდა	მოსვლა	VERB	V_Act_Aor_Pv_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=Yes
6	და	და	CCONJ	Cj_Coord	_	7	cc	_	_
7	წიგნი	წიგნი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	4	conj	_	_
8	ხელმწიფისა	ხელმწიფე	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	7	nmod	_	SpaceAfter=No
9	,	,	PUNCT	Punct_Comma	_	18	punct	_	_
10	ვითა	ვითა	SCONJ	Cj_Sub	_	18	mark	_	SpaceAfter=No
11	:	:	PUNCT	Punct_Colon	_	18	punct	_	_
12	აზომი	აზომი	PRON	Pron_Dem_Nom_Sg	Case=Nom|Number=Sing|PronType=Dem	13	det	_	_
13	ხანი	ხანი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	18	advcl	_	_
14	ა	არის	AUX	V_Act_Pres_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
15	შენი	შენი	PRON	Pron_Poss_2Sg_Nom_Sg	Case=Nom|Number=Sing|Person=2|Poss=Yes|PronType=Prs	16	nmod	_	_
16	ანბავი	ამბავი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	18	obj	_	_
17	არა	არა	ADV	Adv_Neg	Polarity=Neg	18	advmod	_	_
18	მიცნია	ცნობა	VERB	V_Act_Perf_IV_S:1Sg_O:3Sg	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Pf|VerbForm=Fin	7	acl	_	Preverb=No|Version=I
19	რა	რა	PRON	Pron_Ind_Nom_Sg	Case=Nom|Number=Sing|PronType=Ind	16	det	_	_
20	ო	ო	PART	Part	Evident=Nfh	18	mark	_	_
21	.	.	PUNCT	Punct_FullStop	_	5	punct	_	_

~~~


