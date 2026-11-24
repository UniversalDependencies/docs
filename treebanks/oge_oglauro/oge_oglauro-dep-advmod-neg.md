---
layout: base
title:  'Statistics of advmod:neg in UD_Old_Georgian-OGLauRo'
udver: '2'
---

## Treebank Statistics: UD_Old_Georgian-OGLauRo: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="oge_oglauro-dep-advmod.html">advmod</a></tt>.

11 nodes (0%) are attached to their parents as `advmod:neg`.

11 instances of `advmod:neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09090909090909.

The following 3 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-ADV.html">ADV</a></tt> (7; 64% instances), <tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="oge_oglauro-pos-ADV.html">ADV</a></tt> (3; 27% instances), <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-PART.html">PART</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod:neg	color:blue
1	ამას	ესე	PRON	Pron_Dem_Dat_Sg	Case=Dat|Number=Sing|PronType=Dem	2	obj	_	_
2	უქადებდა	ქადება	VERB	V_Act_Imp_UV_S:3Sg_IO:3	Mood=Ind|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Imp|VerbForm=Fin	0	root	_	SpaceAfter=No|Preverb=No|Version=U
3	,	,	PUNCT	Punct_Comma	_	6	punct	_	_
4	რომელ-იგი	რომელი-იგი	PRON	Pron_Rel_Nom_Sg	Case=Nom|Number=Sing|PronType=Rel	6	nsubj	_	_
5	არა	არა	ADV	Adv_Neg	Polarity=Neg	6	advmod:neg	_	_
6	აქუნდა	ქონა	VERB	V_Act_Imp_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Imp|VerbForm=Fin	1	acl:relcl	_	Preverb=No
7	ჴელთა	ჴელი	NOUN	N_Obl_Pl	Case=Dat|Number=Plur	6	obl	_	_
8	შუშანიკის	შუშანიკი	PROPN	N_Prop_Gen_Sg	Case=Gen|NameType=Prs|Number=Sing	6	obl	_	_
9	გან	გან	ADP	Post	AdpType=Post|Case=Gen	8	case	_	_
10	.	.	PUNCT	Punct_FullStop	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 18 advmod:neg	color:blue
1	ანუ	ანუ	CCONJ	Cj_Coord	_	4	cc	_	_
2	ვინ	ვინ	PRON	Pron_Int_Nom_Sg	Case=Nom|Number=Sing|PronType=Int	4	nsubj	_	_
3	არა	არა	ADV	Adv_Neg	Polarity=Neg	4	advmod:neg	_	_
4	სტიროდის	ტირილი	VERB	V_Act_ImpIter_S:3Sg	Aspect=Iter|Mood=Sub|Number[subj]=Sing|Person[subj]=3|Tense=Imp|VerbForm=Fin	0	root	_	Preverb=No
5	მას	იგი	PRON	Pron_Dem_Dat_Sg	Case=Dat|Number=Sing|PronType=Dem	4	obl	_	SpaceAfter=No
6	,	,	PUNCT	Punct_Comma	_	10	punct	_	_
7	რომელსა	რომელი	PRON	Pron_Rel_Dat_Sg	Case=Dat|Number=Sing|PronType=Rel	10	nsubj	_	_
8	არცა	არცა	ADV	Adv_Neg	Polarity=Neg	10	advmod:neg	_	_
9	ჭირი	ჭირი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	10	obj	_	_
10	ეხილვა	ხილვა	VERB	V_Act_Pqp_EV_S:3Sg_IO:3	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pqp|VerbForm=Fin	5	acl:relcl	_	SpaceAfter=No|Preverb=No|Version=E
11	,	,	PUNCT	Punct_Comma	_	13	punct	_	_
12	არცა	არცა	ADV	Adv_Neg	Polarity=Neg	13	advmod:neg	_	_
13	შიში	შიში	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	9	conj	_	SpaceAfter=No
14	,	,	PUNCT	Punct_Comma	_	16	punct	_	_
15	არცა	არცა	ADV	Adv_Neg	Polarity=Neg	16	advmod:neg	_	_
16	მახჳლი	მახჳლი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	9	conj	_	SpaceAfter=No
17	,	,	PUNCT	Punct_Comma	_	19	punct	_	_
18	არცა	არცა	ADV	Adv_Neg	Polarity=Neg	19	advmod:neg	_	_
19	პყრობილებაჲ	პყრობილებაჲ	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	9	conj	_	_
20	ქრისტჱს	ქრისტე	PROPN	N_Prop_Gen_Sg	Case=Gen|NameType=Prs|Number=Sing	19	nmod	_	_
21	თჳს	თჳს	ADP	Post	AdpType=Post|Case=Gen	20	case	_	_
22	?!	?!	PUNCT	Punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod:neg	color:blue
1	ნუ	ნუ	ADV	Part_Neg_Imp	Polarity=Neg	2	advmod:neg	_	_
2	შეუნდობთ	შენდობა	VERB	V_Act_Pres_Pv_UV_S:2Pl_IO:3	Mood=Imp|Number[subj]=Plur|Person[io]=3|Person[subj]=2|Tense=Pres|VerbForm=Fin	0	root	_	Preverb=Yes|Version=U
3	მათ	იგი	PRON	Pron_Pers_3Pl_Dat	Case=Dat|Number=Plur|Person=3|PronType=Prs	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	Punct_Comma	_	6	punct	_	_
5	ნუცა	ნუ	PART	Part_Neg_Encl:ca	_	6	advmod:neg	_	_
6	მიუტეობთ	მიტევება	VERB	V_Act_Pres_Pv_UV_S:2Pl_IO:3	Mood=Imp|Number[subj]=Plur|Person[io]=3|Person[subj]=2|Tense=Pres|VerbForm=Fin	2	conj	_	SpaceAfter=No|Preverb=Yes|Version=U
7	,	,	PUNCT	Punct_Comma	_	10	punct	_	_
8	არამედ	არამედ	CCONJ	Cj_Coord	_	10	cc	_	_
9	გულსა	გული	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	10	iobj	_	_
10	დაიდევით	დადება	VERB	V_Act_Pres_Imp_Pv_IV_S:2Pl	Mood=Imp|Number[subj]=Plur|Person[subj]=2|Tense=Pres|VerbForm=Fin	2	conj	_	Preverb=Yes|Version=I
11	და	და	CCONJ	Cj_Coord	_	12	cc	_	_
12	მოჰჴადეთ	მოჴდა	VERB	V_Act_Aor_Imp_Pv_S:2Pl	Mood=Imp|Number[subj]=Plur|Person[subj]=2|Tense=Past|VerbForm=Fin	10	conj	_	Preverb=Yes
13	ყოველი	ყოველი	PRON	Pron_Tot_Gen_Sg_Dat_Sg	Case=Nom|Number=Sing|PronType=Tot	14	amod	_	_
14	ხარკი	ხარკი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	12	obj	_	_
15	მათი	იგი	PRON	Pron_Poss_Poss3Pl_Nom_Sg_Att	Case=Nom|Number=Sing|Person=3|Poss=Yes|PronType=Prs	14	nmod	_	_
16	და	და	CCONJ	Cj_Coord	_	17	cc	_	_
17	ზუერი	ზუერი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	14	conj	_	SpaceAfter=No
18	,	,	PUNCT	Punct_Comma	_	21	punct	_	_
19	რაჲთა	რაჲთა	SCONJ	Cj_Sub	_	21	mark	_	_
20	არა	არა	ADV	Adv_Neg	Polarity=Neg	21	advmod:neg	_	_
21	განმრავლდენ	განმრავლება	VERB	V_Pass_Aor_Subj_Pv_S:3Pl	Mood=Sub|Number[subj]=Plur|Person[subj]=3|Tense=Past|VerbForm=Fin	12	advcl	_	Preverb=Yes
22	და	და	CCONJ	Cj_Coord	_	23	cc	_	_
23	განძლიერდენ	განძლიერება	VERB	V_Pass_Aor_Subj_Pv_S:3Pl	Mood=Sub|Number[subj]=Plur|Person[subj]=3|Tense=Past|VerbForm=Fin	21	conj	_	Preverb=Yes
24	და	და	CCONJ	Cj_Coord	_	25	cc	_	_
25	აღუდგენ	აღდგომა	VERB	V_Act_Subj_Pv_UV_S:3Pl_IO:3	Mood=Sub|Number[subj]=Plur|Person[io]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	21	conj	_	Preverb=Yes|Version=U
26	მჴდომად	მჴდომი	VERB	V_Masd_Adv	Case=Ess|VerbForm=Vnoun	25	xcomp	_	Preverb=No
27	მეფეთა	მეფე	NOUN	N_Obl_Pl	Case=Dat|Number=Plur	26	iobj	_	_
28	დიდთა	დიდი	ADJ	A_Obl_Pl	Case=Dat|Number=Plur	27	amod	_	_

~~~


