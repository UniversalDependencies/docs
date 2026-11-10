---
layout: base
title:  'Statistics of obj in UD_Old_Georgian-OGLauRo'
udver: '2'
---

## Treebank Statistics: UD_Old_Georgian-OGLauRo: Relations: `obj`

This relation is universal.

527 nodes (4%) are attached to their parents as `obj`.

355 instances of `obj` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.72675521821632.

The following 13 pairs of parts of speech are connected with `obj`: <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt> (339; 64% instances), <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-PRON.html">PRON</a></tt> (143; 27% instances), <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt> (13; 2% instances), <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-PROPN.html">PROPN</a></tt> (12; 2% instances), <tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="oge_oglauro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="oge_oglauro-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="oge_oglauro-pos-ADV.html">ADV</a></tt>-<tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="oge_oglauro-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="oge_oglauro-pos-PRON.html">PRON</a></tt>-<tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="oge_oglauro-pos-PRON.html">PRON</a></tt>-<tt><a href="oge_oglauro-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="oge_oglauro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="oge_oglauro-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	და	და	CCONJ	Cj_Coord	_	2	cc	_	_
2	დადვეს	დადება	VERB	V_Act_Aor_Pv_S:3Pl	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=Yes
3	საფუძველი	საფუძველი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	2	obj	_	_
4	და	და	CCONJ	Cj_Coord	_	5	cc	_	_
5	იწყეს	წყება	VERB	V_Act_Aor_IV_S:3Pl	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|VerbForm=Fin	2	conj	_	Preverb=No|Version=I
6	შენებად	შენება	VERB	V_Masd_Adv	Case=Ess|VerbForm=Vnoun	5	xcomp	_	Preverb=No
7	სახლსა	სახლი	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	6	obj	_	_
8	მას	იგი	PRON	Pron_Dem_Dat_Sg	Case=Dat|Number=Sing|PronType=Dem	7	det	_	_
9	უფლისასა	უფალი	NOUN	N_Gen_Sg_Dat_Sg	Case=Gen|Case[sauf]=Dat|Number=Sing|Number[sauf]=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Punct_FullStop	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obj	color:blue
1	ხარკისმომჴდელნი	ხარკისმომჴდელი	NOUN	N_Nom_Pl	Case=Nom|Number=Plur	8	nsubj	_	_
2	ესე	ესე	PRON	Pron_Dem_Nom_Pl	Case=Nom|Number=Plur|PronType=Dem	1	det	_	SpaceAfter=No
3	,	,	PUNCT	Punct_Comma	_	5	punct	_	_
4	რომელ	რომელი	PRON	Pron_Rel_Abs	Case=Abs|PronType=Rel	5	obj	_	_
5	მოავლინენით	მოვლინება	VERB	V_Act_Aor_Pv_AV_S:2Pl_O:3Pl	Mood=Ind|Number[obj]=Plur|Number[subj]=Plur|Person[obj]=3|Person[subj]=2|Tense=Past|VerbForm=Fin	1	acl:relcl	_	Preverb=Yes|Version=A
6	ჩემდა	მე	PRON	Pron_Pers_1Sg_Adv	Case=Ess|Number=Sing|Person=1|PronType=Prs	5	obl	_	SpaceAfter=No
7	,	,	PUNCT	Punct_Comma	_	5	punct	_	_
8	მოვიდეს	მოსლვა	VERB	V_Act_Aor_Pv_S:3Pl	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=Yes
9	ჩემ	მე	PRON	Pron_Pers_1Sg_Obl	Case=Gen|Number=Sing|Person=1|PronType=Prs	8	obl	_	_
10	წინაშე	წინაშე	ADP	Post	AdpType=Post|Case=Gen	9	case	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	და	და	CCONJ	Cj_Coord	_	2	cc	_	_
2	უბრძანა	ბრძანება	VERB	V_Act_Aor_UV_S:3Sg_IO:3	Mood=Ind|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=No
3	შეკრვაჲ	შეკრვა	VERB	V_Masd_Pv_Nom_Sg	Case=Nom|Number=Sing|VerbForm=Vnoun	2	obj	_	Preverb=Yes
4	და	და	CCONJ	Cj_Coord	_	6	cc	_	_
5	ბორკილთა	ბორკილი	NOUN	N_Gen_Pl	Case=Gen|Number=Plur	6	obj	_	_
6	შესხმაჲ	შესხმა	VERB	V_Masd_Pv_Nom_Sg	Case=Nom|Number=Sing|VerbForm=Vnoun	3	conj	_	Preverb=Yes
7	ფერჴთა	ფერჴი	NOUN	N_Dat_Pl	Case=Dat|Number=Plur	6	iobj	_	_
8	მისთა	მისი	PRON	Pron_Poss_Dat_Pl	Case=Dat|Number=Plur|Person=3|Poss=Yes|PronType=Prs	7	nmod	_	SpaceAfter=No
9	.	.	PUNCT	Punct_FullStop	_	2	punct	_	_

~~~


