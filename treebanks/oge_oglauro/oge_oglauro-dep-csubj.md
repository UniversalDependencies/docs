---
layout: base
title:  'Statistics of csubj in UD_Old_Georgian-OGLauRo'
udver: '2'
---

## Treebank Statistics: UD_Old_Georgian-OGLauRo: Relations: `csubj`

This relation is universal.

6 nodes (0%) are attached to their parents as `csubj`.

5 instances of `csubj` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.33333333333333.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt> (5; 83% instances), <tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 csubj	color:blue
1	და	და	CCONJ	Cj_Coord	_	3	cc	_	_
2	მე	მე	PRON	Pron_Pers_1Sg	Case=Dat|Number=Sing|Person=1|PronType=Prs	3	iobj	_	_
3	დამიკჳრდა	დაკჳრვება	VERB	V_Pass_Aor_Pv_IV_S:3Sg_IO:1	Mood=Ind|Number[io]=Sing|Number[subj]=Sing|Person[io]=1|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No|Preverb=Yes|Version=I|Intransitive=D
4	,	,	PUNCT	Punct_Comma	_	8	punct	_	_
5	თუ	თუ	SCONJ	Cj_Sub	_	8	mark	_	_
6	რაჲსა	რაჲ	PRON	Pron_Int_Gen_Sg	Case=Gen|Number=Sing|PronType=Int	8	obl	_	_
7	მე	მე	PART	Part_Add	_	6	advmod	_	_
8	მიწესს	წესება	VERB	V_Act_Pres_Pv_IV_S:3Sg_IO:1	Mood=Ind|Number[io]=Sing|Number[subj]=Sing|Person[io]=1|Person[subj]=3|Tense=Pres|VerbForm=Fin	3	csubj	_	Preverb=Yes|Version=I
9	ამას	ესე	PRON	Pron_Dem_Dat_Sg	Case=Dat|Number=Sing|PronType=Dem	10	det	_	_
10	ჟამსა	ჟამი	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	8	obl	_	SpaceAfter=No
11	?	?	PUNCT	Punct_Interr	_	8	punct	_	_
12	და	და	CCONJ	Cj_Coord	_	13	cc	_	_
13	მივისწრაფე	მისწრაფება	VERB	V_Act_Aor_Pv_IV_S:1Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Past|VerbForm=Fin	3	conj	_	Preverb=Yes|Version=I
14	და	და	CCONJ	Cj_Coord	_	15	cc	_	_
15	მივედ	მისლვა	VERB	V_Act_Aor_Pv_S:1Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Past|VerbForm=Fin	13	conj	_	SpaceAfter=No|Preverb=Yes|Version=I
16	.	.	PUNCT	Punct_FullStop	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 csubj	color:blue
1	და	და	CCONJ	Cj_Coord	_	2	cc	_	_
2	ჰრქუა	რქუმა	VERB	V_Act_Aor_S:3Sg_IO:3Pl	Mood=Ind|Number[io]=Plur|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	7	advcl	_	Preverb=No
3	ნათესავთა	ნათესავი	NOUN	N_Obl_Pl	Case=Dat|Number=Plur	2	iobj	_	_
4	მათ	იგი	PRON	Pron_Dem_Obl_Pl	Case=Dat|Number=Plur|PronType=Dem	3	det	_	SpaceAfter=No
5	:	:	PUNCT	Punct_Colon	_	2	punct	_	_
6	არა	არა	ADV	Adv_Neg	Polarity=Neg	7	advmod	_	_
7	წეს	წესი	NOUN	N_Abs_Sg	Case=Abs|Number=Sing	0	root	_	_
8	არს	ყოფა	AUX	V_Act_Pres_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
9	თქუენდა	თქუენი	PRON	Pron_Pers_Obl_Pl	Case=Dat|Number=Plur|Person=2|PronType=Prs	7	obl	_	_
10	ჭამად	ჭამა	NOUN	N_Adv_Sg	Case=Ess|Number=Sing	7	csubj	_	_
11	სიწმიდისა	სიწმიდე	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	10	obl	_	_
12	მის	იგი	PRON	Pron_Dem_Gen_Sg	Case=Gen|Number=Sing|PronType=Dem	11	det	_	_
13	გან	გან	ADP	Post	AdpType=Post|Case=Gen	12	case	_	_
14	წმიდათაჲსა	წმიდა	NOUN	N_Obl_Pl_Gen_Sg	Case=Gen|Case[sauf]=Gen|Number=Plur|Number[sauf]=Sing	11	nmod	_	SpaceAfter=No
15	,	,	PUNCT	Punct_Comma	_	17	punct	_	_
16	ვიდრემდის	ვიდრემდის	SCONJ	Cj_Sub	_	17	mark	_	_
17	ადგეს	დგომა	VERB	V_Act_Subj_AV_S:3Sg_O:3	Mood=Sub|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	10	advcl	_	Preverb=No|Version=A
18	მღდელთმოძღუარი	მღდელთმოძღუარი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	17	nsubj	_	_
19	და	და	CCONJ	Cj_Coord	_	21	cc	_	_
20	განცხადებულად	განცხადებულად	ADV	Adv	_	21	advmod	_	_
21	უჩუენოს	ჩუენება	VERB	V_Act_Subj_UV_S:3Sg_IO:3Pl	Mood=Sub|Number[io]=Plur|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	17	conj	_	Preverb=No|Version=U
22	და	და	CCONJ	Cj_Coord	_	25	cc	_	_
23	მის	იგი	PRON	Pron_Dem_Gen_Sg	Case=Gen|Number=Sing|PronType=Dem	25	obl	_	_
24	მიერ	მიერ	ADP	Post	AdpType=Post|Case=Gen	23	case	_	_
25	განათლდენ	განათლება	VERB	V_Pass_Subj_Pv_AV_S:3Pl	Mood=Sub|Number[subj]=Plur|Person[subj]=3|Tense=Past|VerbForm=Fin	17	conj	_	Preverb=Yes|Version=A
26	ყოველნი	ყოველი	PRON	Pron_Tot_Nom_Pl	Case=Nom|Number=Plur|PronType=Tot	25	nsubj	_	_
27	სრულიად	სრულიად	ADV	Adv	_	25	advmod	_	SpaceAfter=No
28	.	.	PUNCT	Punct_FullStop	_	7	punct	_	_

~~~


