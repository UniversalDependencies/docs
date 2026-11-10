---
layout: base
title:  'Statistics of acl in UD_Old_Georgian-OGLauRo'
udver: '2'
---

## Treebank Statistics: UD_Old_Georgian-OGLauRo: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="oge_oglauro-dep-acl-relcl.html">acl:relcl</a></tt>.

7 nodes (0%) are attached to their parents as `acl`.

6 instances of `acl` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.28571428571429.

The following 3 pairs of parts of speech are connected with `acl`: <tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt> (5; 71% instances), <tt><a href="oge_oglauro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt> (1; 14% instances), <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl	color:blue
1	და	და	CCONJ	Cj_Coord	_	2	cc	_	_
2	ყვეს	ყოფა	VERB	V_Act_Aor_S:3Pl	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=No
3	ძეთა	ძე	NOUN	N_Erg_Pl	Case=Erg|Number=Plur	2	nsubj	_	_
4	ისრაელისათა	ისრაელი	PROPN	N_Prop_Gen_Sg_Erg_Pl	Case=Gen|Case[sauf]=Erg|NameType=Geo|Number=Sing|Number[sauf]=Plur	3	nmod	_	SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	6	punct	_	_
6	გამოსრულთა	გამოსლვა	VERB	V_PastPart_Obl_Pl	Case=Erg|Number=Plur|Tense=Past|VerbForm=Part	3	acl	_	Preverb=No
7	მათ	იგი	PRON	Pron_Dem_Erg_Pl	Case=Erg|Number=Plur|PronType=Dem	6	det	_	_
8	ტყუეობისა	ტყუეობა	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	6	obl	_	_
9	გან	გან	ADP	Post	AdpType=Post|Case=Gen	8	case	_	_
10	,	,	PUNCT	Punct_Comma	_	6	punct	_	_
11	ზატიკი	ზატიკი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	2	obj	_	_
12	იგი	იგი	PRON	Pron_Dem_Nom_Sg	Case=Nom|Number=Sing|PronType=Dem	11	det	_	_
13	უფლისაჲ	უფალი	NOUN	N_Gen_Sg_Nom_Sg	Case=Gen|Case[sauf]=Nom|Number=Sing|Number[sauf]=Sing	11	nmod	_	_
14	მეათოთხმეტესა	მეათოთხმეტე	NUM	Num_Ord_Dat_Sg	Case=Dat|Number=Sing|NumType=Ord	15	amod	_	_
15	თთუესა	თთუე	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	2	obl	_	_
16	მის	იგი	PRON	Pron_Dem_Gen_Sg	Case=Gen|Number=Sing|PronType=Dem	17	det	_	_
17	პირველისასა	პირველი	NUM	A_Gen_Sg_Dat_Sg	Case=Gen|Case[sauf]=Dat|Number=Sing|Number[sauf]=Sing|NumType=Ord	15	nmod	_	SpaceAfter=No
18	.	.	PUNCT	Punct_FullStop	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl	color:blue
1	და	და	CCONJ	Cj_Coord	_	2	cc	_	_
2	იყვნეს	ყოფა	VERB	V_Act_Aor_IV_S:3Pl	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=No|Version=I
3	თუალნი	თუალი	NOUN	N_Nom_Pl	Case=Nom|Number=Plur	2	nsubj	_	_
4	უფლისანი	უფალი	NOUN	N_Gen_Sg_Nom_Pl	Case=Gen|Case[sauf]=Nom|Number=Sing|Number[sauf]=Plur	3	nmod	_	_
5	ზედა	ზედა	ADP	Prep	AdpType=Pre	6	case	_	_
6	ჰურიათა	ჰურია	PROPN	N_Prop_Obl_Pl	Case=Dat|NameType=Geo|Number=Plur	2	obl	_	SpaceAfter=No
7	,	,	PUNCT	Punct_Comma	_	8	punct	_	_
8	მოქცეულთა	მოქცევა	VERB	V_PastPart_Obl_Pl	Case=Dat|Number=Plur|Tense=Past|VerbForm=Part	6	acl	_	Preverb=No
9	მათ	იგი	PRON	Pron_Dem_Obl_Pl	Case=Dat|Number=Plur|PronType=Dem	6	det	_	_
10	ტყუეობისა	ტყუეობა	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	8	obl	_	_
11	გან	გან	ADP	Post	AdpType=Post|Case=Gen	10	case	_	_
12	,	,	PUNCT	Punct_Comma	_	15	punct	_	_
13	და	და	CCONJ	Cj_Coord	_	15	cc	_	_
14	არა	არა	ADV	ADV_Neg	Polarity=Neg	15	advmod	_	_
15	დააყენნეს	დაყენება	VERB	V_Act_Aor_Pv_AV_S:3Pl_O:3Pl	Mood=Ind|Number[obj]=Plur|Number[subj]=Plur|Person[subj]=3|Tense=Past|VerbForm=Fin	2	conj	_	Preverb=Yes|Version=A
16	იგინი	იგი	PRON	Pron_Dem_Nom_Pl	Case=Nom|Number=Plur|PronType=Dem	15	obj	_	SpaceAfter=No
17	,	,	PUNCT	Punct_Comma	_	19	punct	_	_
18	ვიდრემდის	ვიდრემდის	SCONJ	Cj_Sub	_	19	mark	_	_
19	აუწყონ	უწყება	VERB	V_Act_Aor_AV_Subj_S:3Pl_O:3	Mood=Sub|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	15	advcl	_	Preverb=No|Version=A
20	დარელს	დარელ	PROPN	N_Prop_Dat_Sg	Case=Dat|NameType=Prs|Number=Sing	19	iobj	_	_
21	მეფესა	მეფე	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	20	appos	_	SpaceAfter=No
22	.	.	PUNCT	Punct_FullStop	_	2	punct	_	_
23	და	და	CCONJ	Cj_Coord	_	25	cc	_	_
24	მაშინ	მაშინ	ADV	Adv	_	25	advmod	_	_
25	წარავლინეს	წარვლინება	VERB	V_Act_Aor_Pv_AV_S:3Pl_O:3	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|VerbForm=Fin	2	conj	_	Preverb=Yes|Version=A
26	ხარკისამომჴდელი	ხარკისამომჴდელი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	25	obj	_	_
27	იგი	იგი	PRON	Pron_Dem_Nom_Sg	Case=Nom|Number=Sing|PronType=Dem	26	det	_	_
28	ამის	ესე	PRON	Pron_Dem_Gen_Sg	Case=Gen|Number=Sing|PronType=Dem	29	det	_	_
29	საქმისა	საქმე	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	25	obl	_	_
30	თჳს	თჳს	ADP	Post	AdpType=Post|Case=Gen	29	case	_	_
31	,	,	PUNCT	Punct_Comma	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 acl	color:blue
1	და	და	CCONJ	Cj_Coord	_	5	cc	_	_
2	რაჟამს	რაჟამს	SCONJ	Cj_Sub	_	3	mark	_	_
3	შემწუხრდა	შემწუხრება	VERB	V_Pass_Aor_Pv_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	5	advcl	_	SpaceAfter=No|Preverb=Yes|Intransitive=D
4	,	,	PUNCT	Punct_Comma	_	3	punct	_	_
5	მოუწოდეს	მოწოდება	VERB	V_Act_Aor_Pv_UV_S:3Pl_IO:3	Mood=Ind|Number[subj]=Plur|Person[io]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=Yes|Version=U
6	ცოლსა	ცოლი	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	5	iobj	_	_
7	ჯოჯიკისსა	ჯოჯიკი	PROPN	N_Prop_Gen_Sg_Dat_Sg	Case=Gen|Case[sauf]=Dat|NameType=Prs|Number=Sing|Number[sauf]=Sing	6	nmod	_	_
8	და	და	CCONJ	Cj_Coord	_	9	cc	_	_
9	ინებეს	ნებება	VERB	V_Act_Aor_IV_S:3Pl	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|VerbForm=Fin	5	conj	_	Preverb=No|Version=I
10	ერთად	ერთად	ADV	Adv	_	12	advmod	_	_
11	პურისა	პური	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	12	obj	_	_
12	ჭამაჲ	ჭამა	VERB	V_Masd_Nom_Sg	Case=Nom|Number=Sing|VerbForm=Vnoun	9	obj	_	SpaceAfter=No|Preverb=No
13	,	,	PUNCT	Punct_Comma	_	16	punct	_	_
14	რაჲთა	რაჲთა	SCONJ	Cj_Sub	_	16	mark	_	_
15	მცა	მცა	PART	Part_Opt	_	16	advmod	_	_
16	მოიყვანეს	მოყვანება	VERB	V_Act_Aor_Pv_IV_S:3Pl_O:3Pl	Mood=Ind|Number[obj]=Plur|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	12	acl	_	Preverb=Yes|Version=I
17	წმიდაჲ	წმიდაჲ	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	18	amod	_	_
18	შუშანიკ	შუშანიკ	PROPN	N_Prop_Nom_Sg	Case=Nom|NameType=Prs|Number=Sing	16	obj	_	_
19	ცა	ცა	PART	Part_Add	_	18	advmod	_	_
20	.	.	PUNCT	Punct_FullStop	_	5	punct	_	_

~~~


