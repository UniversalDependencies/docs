---
layout: base
title:  'Statistics of nsubj:pass in UD_Old_Georgian-MidGLauRo'
udver: '2'
---

## Treebank Statistics: UD_Old_Georgian-MidGLauRo: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="oge_midglauro-dep-nsubj.html">nsubj</a></tt>.

10 nodes (0%) are attached to their parents as `nsubj:pass`.

6 instances of `nsubj:pass` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.6.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="oge_midglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_midglauro-pos-NOUN.html">NOUN</a></tt> (8; 80% instances), <tt><a href="oge_midglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_midglauro-pos-PRON.html">PRON</a></tt> (1; 10% instances), <tt><a href="oge_midglauro-pos-VERB.html">VERB</a></tt>-<tt><a href="oge_midglauro-pos-PROPN.html">PROPN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 nsubj:pass	color:blue
1	თუ	თუ	SCONJ	Cj_Sub	_	3	mark	_	_
2	ცა	ცა	PART	Part	_	3	advmod	_	_
3	გენახა	ნახვა	VERB	V_Pass_Plq_S:2Sg_O:3Sg	Mood=Ind|Number[io]=Sing|Number[subj]=Sing|Person[io]=2|Person[subj]=3|Tense=Pqp|VerbForm=Fin	6	advcl	_	SpaceAfter=No|Preverb=No
4	,	,	PUNCT	Punct_Comma	_	3	punct	_	_
5	ამას	ესე	PRON	Pron_Dem_Dat_Sg	Case=Dat|Number=Sing|PronType=Dem	6	obj	_	_
6	იტყოდი	თქმა	VERB	V_Act_Imp_S:2Sg_O:3	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Imp|VerbForm=Fin	0	root	_	SpaceAfter=No|Preverb=No
7	:	:	PUNCT	Punct_Colon	_	12	punct	_	_
8	ამის	ესე	PRON	Pron_Dem_Gen_Sg	Case=Gen|Number=Sing|PronType=Dem	10	nmod	_	_
9	ებრი	ებრ	ADP	Post	AdpType=Post|Case=Gen|Case[sauf]=Nom	8	case	_	_
10	კაცი	კაცი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	12	nsubj:pass	_	_
11	არა	არა	ADV	Adv_Neg	Polarity=Neg	12	advmod	_	_
12	ნახულა	ნახვა	VERB	V_Pass_Perf_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pf|VerbForm=Fin	6	ccomp	_	Preverb=No
13	ო	ო	PART	Part	Evident=Nfh	12	mark	_	_
14	.	.	PUNCT	Punct_FullStop	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nsubj:pass	color:blue
1	აწ	აწ	ADV	Adv_Time	_	2	advmod	_	_
2	მიბოძენ	ბოძება	VERB	V_Act_Aor_Imp_Pv_IV_S:2Sg_IO:1Sg_O:3Pl	Mood=Imp|Number[obj]=Plur|Number[subj]=Sing|Person[io]=1|Person[obj]=3|Person[subj]=2|Tense=Past|VerbForm=Fin	0	root	_	Preverb=Yes|Version=I
3	ლაშქარნი	ლაშქარი	NOUN	N_Nom_Pl	Case=Nom|Number=Plur	2	obj	_	_
4	და	და	CCONJ	Cj_Coord	_	5	cc	_	_
5	წავალ	წასვლა	VERB	V_Act_Pres_Pv_S:1Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|VerbForm=Fin	2	conj	_	Preverb=Yes
6	თურქეთს	თურქეთი	PROPN	N_Prop_Dat_Sg	Case=Dat|NameType=Geo|Number=Sing	5	obl	_	_
7	ზღვევად	ზღვევა	VERB	V_Masd_Adv	Case=Ess|VerbForm=Vnoun	5	xcomp	_	Preverb=No
8	აზდენისა	აზდენი	ADJ	A_Gen_Sg	Case=Gen|Number=Sing	9	amod	_	_
9	სისხლისა	სისხლი	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	7	obj	_	SpaceAfter=No
10	,	,	PUNCT	Punct_Comma	_	12	punct	_	_
11	რომელ	რომელ	PRON	Pron_Rel_Abs	Case=Abs|PronType=Rel	12	nsubj:pass	_	_
12	დათხეულა	დათხევა	VERB	V_Pass_Perf_Pv_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pf|VerbForm=Fin	9	acl:relcl	_	Preverb=Yes
13	მათისა	მათი	PRON	Pron_Poss_3Pl_Gen_Sg	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Prs	14	nmod	_	_
14	ჴელისა	ჴელი	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	12	obl	_	_
15	გან	გან	ADP	Post	AdpType=Post|Case=Gen	14	case	_	_
16	სამეფოსა	სამეფო	NOUN	N_Dat_Sg	Case=Dat|Number=Sing	12	obl	_	_
17	ამას	ესე	PRON	Pron_Dem_Dat_Sg	Case=Dat|Number=Sing|PronType=Dem	16	det	_	_
18	შინა	შინა	ADP	Post	AdpType=Post|Case=Dat	16	case	_	SpaceAfter=No
19	.	.	PUNCT	Punct_FullStop	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	ყოველი	ყოველი	PRON	Pron_Tot_Nom_Sg	Case=Nom|Number=Sing|PronType=Tot	2	det	_	_
2	არაბეთი	არაბეთი	PROPN	N_Prop_Nom_Sg	Case=Nom|NameType=Geo|Number=Sing	4	nsubj:pass	_	_
3	შუა	შუა	ADV	Adv	_	4	advmod	_	_
4	გაყოფილი	გაყოფა	VERB	V_PastPart_Pv_Nom_Sg	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	Preverb=Yes
5	იყო	ყოფა	AUX	V_Act_Aor_S:3Sg	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	4	aux	_	_
6	და	და	CCONJ	Cj_Coord	_	7	cc	_	_
7	იბრძოდეს	ბრძოლა	VERB	V_Act_Imp_IV_S:3Pl	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Imp|VerbForm=Fin	4	conj	_	Preverb=No|Version=I
8	ერთი	ერთი	NUM	Num_Nom_Sg	Case=Nom|Number=Sing|NumType=Card	11	nummod	_	_
9	ხანთა	ხანი	PROPN	N_Prop_Obl_Pl	Case=Gen|NameType=Prs|Number=Plur	10	nmod	_	_
10	მეფისა	მეფე	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	11	nmod	_	_
11	მძახალი	მძახალი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	7	nsubj	_	_
12	და	და	CCONJ	Cj_Coord	_	16	cc	_	_
13	ერთი	ერთი	NUM	Num_Nom_Sg	Case=Nom|Number=Sing|NumType=Card	16	nummod	_	_
14	იამანთა	იამანი	PROPN	N_Prop_Obl_Pl	Case=Gen|NameType=Prs|Number=Plur	15	nmod	_	_
15	მეფისა	მეფე	NOUN	N_Gen_Sg	Case=Gen|Number=Sing	16	nmod	_	_
16	მძახალი	მძახალი	NOUN	N_Nom_Sg	Case=Nom|Number=Sing	11	conj	_	SpaceAfter=No
17	,	,	PUNCT	Punct_Comma	_	24	punct	_	_
18	ხანნი	ხანი	PROPN	N_Prop_Nom_Pl	Case=Nom|NameType=Prs|Number=Plur	24	nsubj	_	_
19	ცა	ცა	PART	Part	_	18	advmod	_	_
20	და	და	CCONJ	Cj_Coord	_	21	cc	_	_
21	იამანნი	იამანი	PROPN	N_Prop_Nom_Pl	Case=Nom|NameType=Prs|Number=Plur	18	conj	_	_
22	ცა	ცა	PART	Part	_	21	advmod	_	_
23	შველად	შველა	VERB	V_Masd_Pv_Adv	Case=Ess|VerbForm=Vnoun	24	xcomp	_	Preverb=Yes
24	მოვიდიან	მოსვლა	VERB	V_Act_Imp_Pv_S:3Pl	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Imp|VerbForm=Fin	7	conj	_	SpaceAfter=No|Preverb=Yes
25	.	.	PUNCT	Punct_FullStop	_	4	punct	_	_

~~~


