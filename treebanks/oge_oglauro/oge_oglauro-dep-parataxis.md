---
layout: base
title:  'Statistics of parataxis in UD_Old_Georgian-OGLauRo'
udver: '2'
---

## Treebank Statistics: UD_Old_Georgian-OGLauRo: Relations: `parataxis`

This relation is universal.

32 nodes (0%) are attached to their parents as `parataxis`.

31 instances of `parataxis` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.09375.

The following 9 pairs of parts of speech are connected with `parataxis`: <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt> (23; 72% instances), <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="oge_oglauro-pos-ADV.html">ADV</a></tt>-<tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="oge_oglauro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="oge_oglauro-pos-PRON.html">PRON</a></tt>-<tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="oge_oglauro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="oge_oglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_oglauro-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 parataxis	color:blue
1	მწარე	მწარე	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	2	amod	_	_
2	გონებაჲ	გონებაჲ	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	3	nsubj	_	_
3	აქუს	ქონა	VERB	V_Act_Pres_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	0	root	_	Preverb=No
4	მას	იგი	PRON	Pron_Dem_Dat_Sg	Case=Dat|Number=Sing|PronType=Dem	3	iobj	_	SpaceAfter=No
5	,	,	PUNCT	Punct_Comma	_	10	punct	_	_
6	გუემასა	გუემაჲ	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	10	obl	_	_
7	და	და	CCONJ	Cj_Coord	_	8	cc	_	_
8	ტანჯვასა	ტანჯვაჲ	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	6	conj	_	_
9	დიდსა	დიდი	ADJ	A_Dat_Sg	Case=Dat|Number=Sing	8	amod	_	_
10	შეგაგდოს	შეგდება	VERB	V_Act_Subj_Aor_Pv_AV_S:3Sg_O:2Sg	Mood=Sub|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=2|Person[subj]=3|Tense=Past|VerbForm=Fin	3	parataxis	_	Preverb=Yes|Version=A
11	შენ	შენ	PRON	Pron_Pers_2Sg	Number=Sing|Person=2|PronType=Prs	10	obj	_	SpaceAfter=No
12	.	.	PUNCT	Punct_FullStop	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 parataxis	color:blue
1	რეისიმ	რეისიმ	PROPN	N_Prop	NameType=Prs	2	nsubj	_	_
2	მიავლინნა	მივლინება	VERB	V_Act_Aor_Pv_AV_S:3Sg_O:3Pl	Mood=Ind|Number[obj]=Plur|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=Yes|Version=A
3	მისა	იგი	PRON	Pron_Dem_Gen_Sg	Case=Gen|Number=Sing|PronType=Dem	2	obl	_	_
4	და	და	CCONJ	Cj_Coord	_	6	cc	_	_
5	ესრეთ	ესრეთ	ADV	Adv	_	6	advmod	_	_
6	წერილ	წერა	VERB	V_PastPart_Abs	Case=Abs|Tense=Past|VerbForm=Part	2	conj	_	Preverb=No
7	იყო	ყოფა	AUX	V_Act_Aor_IV_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	6	aux	_	_
8	დარელ	დარელ	PROPN	N_Prop	NameType=Prs	9	nmod	_	_
9	მეფისა	მეფე	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	12	obl	_	SpaceAfter=No
10	:	:	PUNCT	Punct_Colon	_	12	punct	_	_
11	"	"	PUNCT	Punct_Quote	_	12	punct	_	SpaceAfter=No
12	მშჳდობაჲ	მშჳდობა	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	6	parataxis	_	_
13	მრავალი	მრავალი	ADJ	A_Nom_Sg	Case=Nom|Number=Sing	12	amod	_	_
14	თქუენდა	თქუენ	PRON	Pron_Pers_2Pl_Adv	Case=Ess|Number=Plur|Person=2|PronType=Prs	12	nmod	_	SpaceAfter=No
15	!	!	PUNCT	Punct_Excl	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 parataxis	color:blue
1	წმიდამან	წმიდა	ADJ	A_Erg_Sg	Case=Erg|Number=Sing	2	amod	_	_
2	შუშანიკ	შუშანიკი	PROPN	N_Prop	NameType=Prs|Number=Sing	3	nsubj	_	_
3	ჰრქუა	რქუმა	VERB	V_Act_Aor_S:3Sg_IO:3	Mood=Ind|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	Preverb=No
4	მას	იგი	PRON	Pron_Dem_Dat_Sg	Case=Dat|Number=Sing|PronType=Dem	3	iobj	_	SpaceAfter=No
5	:	:	PUNCT	Punct_Colon	_	11	punct	_	_
6	და	და	CCONJ	Cj_Coord	_	11	cc	_	_
7	შენ	შენ	PRON	Pron_Pers_2Sg	Number=Sing|Person=2|PronType=Prs	11	nsubj	_	_
8	ღმერთი	ღმერთი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	11	obj	_	_
9	ძილსა	ძილი	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	11	obl	_	_
10	შინა	შინა	ADP	Post	AdpType=Post|Case=Dat	9	case	_	_
11	ნუ	ნუ	ADV	Adv_Neg	Polarity=Neg	3	ccomp	_	_
12	გგონიეს	გონება	VERB	V_Act_Pres_S:2Sg_O:3	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=2|Tense=Pres|VerbForm=Fin	11	parataxis	_	Preverb=No|SpaceAfter=No
13	,	,	PUNCT	Punct_Comma	_	15	punct	_	_
14	რომელმან	რომელი	PRON	Pron_Rel_Erg_Sg	Case=Erg|Number=Sing|PronType=Rel	15	nsubj	_	_
15	განუმზადნის	განმზადება	VERB	V_Act_Pres_Pv_UV_S:3Sg_IO:3	Mood=Ind|Number[subj]=Sing|Person[io]=3|Person[subj]=3|Tense=Pres|VerbForm=Fin	8	acl:relcl	_	Preverb=Yes|Version=U
16	სიტყუანი	სიტყუაჲ	NOUN	N_Nom_Pl	Case=Nom|Number=Plur	15	obj	_	_
17	პირსა	პირი	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	15	iobj	_	_
18	კაცისასა	კაცი	NOUN	N_Gen_Sg_Dat_Sg	Case=Gen|Case[sauf]=Dat|Number=Sing|Number[sauf]=Sing	17	nmod	_	SpaceAfter=No
19	,	,	PUNCT	Punct_Comma	_	21	punct	_	_
20	რამეთუ	რამეთუ	SCONJ	Cj_Sub	_	21	mark	_	_
21	იტყჳს	თქუმა	VERB	V_Act_Pres_IV_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	15	advcl	_	Preverb=No|Version=I
22	თჳთ	თჳთ	PRON	Pron_Pers_Nom_Sg	Case=Nom|Number=Sing|PronType=Prs	23	det	_	_
23	უფალი	უფალი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	21	nsubj	_	SpaceAfter=No
24	:	:	PUNCT	Punct_Colon	_	26	punct	_	_
25	მე	მე	PRON	Pron_Pers_1Sg	Case=Erg|Number=Sing|Person=1|PronType=Prs	26	nsubj	_	_
26	მიუგო	მიგება	VERB	V_Act_Subj_Pv_UV_S:1Sg_IO:3	Mood=Sub|Number[subj]=Sing|Person[io]=3|Person[subj]=1|Tense=Past|VerbForm=Fin	21	ccomp	_	Preverb=Yes
27	სიტყუაჲ	სიტყუაჲ	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	26	obj	_	_
28	თქუენ	თქუენი	PRON	Pron_Pers_2Pl	Case=Gen|Number=Plur|Person=2|PronType=Prs	26	obl	_	_
29	წილ	წილ	ADP	Post	AdpType=Post|Case=Gen	28	case	_	SpaceAfter=No
30	.	.	PUNCT	Punct_FullStop	_	3	punct	_	_

~~~


