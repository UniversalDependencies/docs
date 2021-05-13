---
layout: base
title:  'Statistics of obl:lto in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `obl:lto`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-obl.html">obl</a></tt>.
There are also 7 other language-specific subtypes of `obl`: <tt><a href="myv_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="myv_jr-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="myv_jr-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="myv_jr-dep-obl-lfrom.html">obl:lfrom</a></tt>, <tt><a href="myv_jr-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="myv_jr-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="myv_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

71 nodes (0%) are attached to their parents as `obl:lto`.

53 instances of `obl:lto` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.57746478873239.

The following 3 pairs of parts of speech are connected with `obl:lto`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (68; 96% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:lto	color:blue
1	Се	се	DET	Det	Number=Sing|PronType=Dem	2	det	_	GTtags=Dem,Sg
2	туремастонть	туремс	VERB	V	Case=Ela|Definite=Def|Number=Sing|Valency=1|VerbForm=Vnoun	4	obl	_	GTtags=IV,NomAct,N,Sg,Ela,Def
3	Громов	Громов	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Masc|NameType=Sur|Number=Sing	4	nsubj	_	GTtags=Prop,Sur_Mal,Sg,Nom,Indef
4	кадовсь	кадовомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg3
5	апокш	апокш	ADJ	A	_	6	amod	_	_
6	губор	губор	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	7	nmod	_	GTtags=Sg,Nom,Indef
7	пряс	пря	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	4	obl:lto	_	GTtags=Sem/Plc,SP,Ill,Indef
8	оймевтеме	ойме	NOUN	N	Case=Abe|Definite=Ind|Number=Plur,Sing	4	xcomp	_	GTtags=SP,Abe,Indef|SpaceAfter=No
9	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:lto	color:blue
1	Превеельгак	превей	ADJ	A	Clitic=Add|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Prt2,Sg3,Clt/Gak
2	веленть	веле	NOUN	N	Case=Gen|Definite=Def|Number=Sing	4	nmod:gobj	_	GTtags=Sg,Gen,Def
3	тезэнь	тезэнь	ADV	Adv	Case=Ill|PronType=Dem	4	obl:lto	_	GTtags=Dem,Ill
4	путыцязо	путомс	VERB	V	Case=Nom|Derivation=VerbYcja|Number=Sing|Number[psor]=Sing|Person[psor]=3|Valency=2	1	nsubj:cop	_	GTtags=TV,NomAg,Sg,Nom,PxSg3|SpaceAfter=No
5	!	!	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:lto	color:blue
1	Веленть	веле	NOUN	N	Case=Gen|Definite=Def|Number=Sing	2	nmod	_	GTtags=Sem/Plc,Sg,Gen,Def
2	пелев	пель	NOUN	N	Case=Lat|Definite=Ind|NounType=Relat|Number=Plur,Sing	4	obl:lto	_	GTtags=Relator,Spat,Lat
3	ласте	ласте	ADV	Adv	AdvType=Sta	4	advcl	_	_
4	ардыцят	ардыця	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	5	nsubj	_	GTtags=Pl,Nom,Indef
5	неявить	неявомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScPl3|SpaceAfter=No
6	:	:	PUNCT	CLB	_	5	punct	_	_
7	та	та	ADV	Adv	_	8	advmod	_	_
8	якстереть	якстере	ADJ	A	Number[subj]=Plur|Person[subj]=3|Tense=Pres	5	conj	_	GTtags=Prs,ScPl3|SpaceAfter=No
9	,	,	PUNCT	CLB	_	11	punct	_	_
10	та	та	ADV	Adv	_	11	advmod	_	_
11	бандит	бандит	NOUN	N	Case=Nom|Definite=Ind|Number=Plur|Number[subj]=Sing|Person[subj]=3|Tense=Pres	8	conj	_	GTtags=Pl,Nom,Indef,Prs,ScSg3|SpaceAfter=No
12	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


