---
layout: base
title:  'Statistics of vocative in UD_Serbian-ParCoLab'
udver: '2'
---

## Treebank Statistics: UD_Serbian-ParCoLab: Relations: `vocative`

This relation is universal.

47 nodes (0%) are attached to their parents as `vocative`.

30 instances of `vocative` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.38297872340426.

The following 9 pairs of parts of speech are connected with `vocative`: <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (27; 57% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt> (5; 11% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-PROPN.html">PROPN</a></tt> (4; 9% instances), <tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (3; 6% instances), <tt><a href="sr_parcolab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="sr_parcolab-pos-PART.html">PART</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="sr_parcolab-pos-VERB.html">VERB</a></tt>-<tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="sr_parcolab-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="sr_parcolab-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_parcolab-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 vocative	color:blue
1	Čuje	čuti	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:sg;t:pres;r:3
2	se	se	PRON	P_ref_-_-_-_acc	Case=Acc	1	expl	_	OrigDep=Ref|OrigFeats=c:acc
3	pomeranje	pomeranje	NOUN	N_com_nom_sg_n	Case=Nom|Gender=Neut|Number=Sing	1	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:n;n:sg
4	zasuna	zasun	NOUN	N_com_gen_sg_m	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	OrigDep=DepNCas|OrigFeats=c:gen;g:m;n:sg
5	–	–	PUNCT	Z	_	4	punct	_	OrigDep=Ponct
6	«	«	PUNCT	Z	_	4	punct	_	OrigDep=Ponct
7	Evo	evo	ADV	Part	_	12	advmod:emph	_	OrigDep=Emph|SpaceAfter=No
8	,	,	PUNCT	Z	_	7	punct	_	OrigDep=Ponct
9	čoveče	čovek	NOUN	N_com_voc_sg_m	Case=Voc|Gender=Masc|Number=Sing	12	vocative	_	OrigDep=DepVCas|OrigFeats=c:voc;g:m;n:sg|SpaceAfter=No
10	,	,	PUNCT	Z	_	9	punct	_	OrigDep=Ponct
11	ne	ne	PART	Part	Polarity=Neg	12	advmod	_	OrigDep=Neg
12	može	moći	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	OrigDep=Juxt|OrigFeats=n:sg;t:pres;r:3
13	se	se	PRON	P_ref_-_-_-_acc	Case=Acc	12	expl	_	OrigDep=Ref|OrigFeats=c:acc
14	brže	brzo	ADV	Adv_gen_comp	Degree=Cmp	12	advmod	_	OrigDep=DepVAdv|SpaceAfter=No
15	!	!	PUNCT	Z	_	14	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 vocative	color:blue
1	«	«	PUNCT	Z	_	8	punct	_	OrigDep=Ponct
2	Draga	drag	ADJ	A_qual_voc_sg_f_pos	Case=Voc|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	OrigDep=DepNAdj|OrigFeats=c:voc;g:f;n:sg
3	moja	moj	DET	A_pos_voc_sg_f_-	Case=Voc|Gender=Fem|Number=Sing	4	det	_	OrigDep=DepNAdj|OrigFeats=c:voc;g:f;n:sg
4	Maruseta	Maruseta	PROPN	N_prop_voc_sg_f	Case=Voc|Gender=Fem|Number=Sing	8	vocative	_	OrigDep=DepVCas|OrigFeats=c:voc;g:f;n:sg|SpaceAfter=No
5	,	,	PUNCT	Z	_	4	punct	_	OrigDep=Ponct
6	tu	tu	ADV	Adv_gen_pos	Degree=Pos	8	advmod	_	OrigDep=DepVAdv
7	se	se	PRON	P_ref_-_-_-_acc	Case=Acc	8	expl	_	OrigDep=Ref|OrigFeats=c:acc
8	gaji	gajiti	VERB	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:sg;t:pres;r:3
9	jasmin	jasmin	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	OrigDep=Suj|OrigFeats=c:nom;g:m;n:sg
10	kao	kao	SCONJ	C_sub	_	11	case	_	OrigDep=Sub
11	grašak	grašak	NOUN	N_com_nom_sg_m	Case=Nom|Gender=Masc|Number=Sing	8	obl	_	OrigDep=DepEx_Suj|OrigFeats=c:nom;g:m;n:sg|SpaceAfter=No
12	.	.	PUNCT	Z	_	11	punct	_	OrigDep=Ponct

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 vocative	color:blue
1	«	«	PUNCT	Z	_	6	punct	_	OrigDep=Ponct
2	Andi	Andi	PROPN	N_prop_voc_sg_m	Case=Voc|Gender=Masc|Number=Sing	6	vocative	_	OrigDep=DepVCas|OrigFeats=c:voc;g:m;n:sg|SpaceAfter=No
3	,	,	PUNCT	Z	_	2	punct	_	OrigDep=Ponct
4	Andi	Andi	PROPN	N_prop_voc_sg_m	Case=Voc|Gender=Masc|Number=Sing	6	vocative	_	OrigDep=DepVCas|OrigFeats=c:voc;g:m;n:sg|SpaceAfter=No
5	,	,	PUNCT	Z	_	4	punct	_	OrigDep=Ponct
6	vreme	vreme	NOUN	N_com_nom_sg_n	Case=Nom|Gender=Neut|Number=Sing	10	ccomp	_	OrigDep=Suj|OrigFeats=c:nom;g:n;n:sg
7	je	biti	AUX	V_main_pres_3_sg_-_-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	OrigDep=PredRap|OrigFeats=n:sg;t:pres;r:3|OrigLemma=jesam
8	»	»	PUNCT	Z	_	7	punct	_	OrigDep=Ponct|SpaceAfter=No
9	,	,	PUNCT	Z	_	7	punct	_	OrigDep=Ponct
10	čujem	čuti	VERB	V_main_pres_1_sg_-_-	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	OrigDep=Root|OrigFeats=n:sg;t:pres;r:1
11	glas	glas	NOUN	N_com_acc_sg_m	Case=Acc|Gender=Masc|Number=Sing	10	obj	_	OrigDep=ObjDir|OrigFeats=c:acc;g:m;n:sg
12	svoje	svoj	DET	A_pos_gen_sg_f_-	Case=Gen|Gender=Fem|Number=Sing	13	det	_	OrigDep=DepNAdj|OrigFeats=c:gen;g:f;n:sg
13	majke	majka	NOUN	N_com_gen_sg_f	Case=Gen|Gender=Fem|Number=Sing	11	nmod	_	OrigDep=DepNCas|OrigFeats=c:gen;g:f;n:sg|SpaceAfter=No
14	.	.	PUNCT	Z	_	13	punct	_	OrigDep=Ponct

~~~


