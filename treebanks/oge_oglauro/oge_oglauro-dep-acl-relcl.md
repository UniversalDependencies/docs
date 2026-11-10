---
layout: base
title:  'Statistics of acl:relcl in UD_Old_Georgian-OGLauRo'
udver: '2'
---

## Treebank Statistics: UD_Old_Georgian-OGLauRo: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="oge_oglauro-dep-acl.html">acl</a></tt>.

126 nodes (1%) are attached to their parents as `acl:relcl`.

123 instances of `acl:relcl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.95238095238095.

The following 11 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt> (69; 55% instances), <tt><a href="oge_oglauro-pos-PRON.html">PRON</a></tt>-<tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt> (35; 28% instances), <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt> (7; 6% instances), <tt><a href="oge_oglauro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="oge_oglauro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="oge_oglauro-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="oge_oglauro-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="oge_oglauro-pos-PRON.html">PRON</a></tt>-<tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="oge_oglauro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="oge_oglauro-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl:relcl	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 acl:relcl	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 acl:relcl	color:blue
1	ხოლო	ხოლო	CCONJ	Cj_Coord	_	3	cc	_	_
2	მე	მე	PRON	Pron_Pers_1Sg	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	ვიწყე	წყება	VERB	V_Act_Aor_IV_S:1Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Past|VerbForm=Fin	0	root	_	Preverb=No|Version=I
4	სიტყუად	სიტყუა	VERB	V_Masd_Adv_Sg	Case=Ess|Number=Sing|VerbForm=Vnoun	3	xcomp	_	Preverb=No
5	და	და	CCONJ	Cj_Coord	_	6	cc	_	_
6	განმტკიცებად	განმტკიცება	VERB	V_Masd_Adv_Sg	Case=Ess|Number=Sing|VerbForm=Vnoun	4	conj	_	Preverb=No
7	მისა	იგი	PRON	Pron_Dem_Gen_Sg	Case=Gen|Number=Sing|PronType=Dem	6	obj	_	SpaceAfter=No
8	,	,	PUNCT	Punct_Comma	_	11	punct	_	_
9	რავდენი	რავდენი	PRON	Pron_Rel_Nom_Sg	Case=Nom|Number=Sing|PronType=Rel	12	obj	_	_
10	ღმერთმან	ღმერთი	NOUN	N_Erg_Sg	Case=Erg|Number=Sing	12	nsubj	_	_
11	მომცა	მოცემა	VERB	V_Act_Aor_Pv_S:3Sg_IO:1	Mood=Ind|Number[io]=Sing|Number[subj]=Sing|Person[io]=1|Person[subj]=3|Tense=Past|VerbForm=Fin	6	acl:relcl	_	Preverb=Yes
12	მე	მე	PRON	Pron_Pers_1Sg	Case=Dat|Number=Sing|Person=1|PronType=Prs	11	iobj	_	_
13	სიტყუად	სიტყუა	VERB	V_Masd_Adv_Sg	Case=Ess|Number=Sing|VerbForm=Vnoun	11	xcomp	_	SpaceAfter=No|Preverb=No
14	.	.	PUNCT	Punct_FullStop	_	3	punct	_	_

~~~


