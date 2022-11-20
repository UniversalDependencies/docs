---
layout: base
title:  'Statistics of obl:own in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `obl:own`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-obl.html">obl</a></tt>.
There are also 6 other language-specific subtypes of `obl`: <tt><a href="myv_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="myv_jr-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="myv_jr-dep-obl-cmp.html">obl:cmp</a></tt>, <tt><a href="myv_jr-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="myv_jr-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="myv_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

8 nodes (0%) are attached to their parents as `obl:own`.

7 instances of `obl:own` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.375.

The following 4 pairs of parts of speech are connected with `obl:own`: <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (5; 63% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:own	color:blue
1	Минек	минь	PRON	Pron	Case=Gen|Number=Plur|Person=1|PronType=Prs	2	obl:own	_	GTtags=Pers,Pl1,Gen|Gloss=we
2	арасть	арась	ADJ	A	Number[subj]=Plur|Person[subj]=3|Polarity=Neg|Tense=Pres	0	root	_	GTtags=Neg,Cop,Ind,Prs,ScPl3|Gloss=not-exist
3	примерэнек	примерэнек	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Plur|Person[psor]=1	2	nsubj	_	GTtags=Pl,Nom,PxPl1|Gloss=example
4	―	―	PUNCT	PUNCT	_	6	punct	_	_
5	минек	минь	PRON	Pron	Case=Gen|Number=Plur|Person=1|PronType=Prs	6	obl:own	_	GTtags=Pers,Pl1,Gen|Gloss=we
6	арасель	арась	ADJ	A	Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Past	2	conj	_	GTtags=Neg,Cop,Ind,Prt2,ScSg3|Gloss=not-exist
7	литературанок	литература	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Plur|Person[psor]=1	6	nsubj	_	GTtags=Sg,Gen,PxPl1|Gloss=literature|SpaceAfter=No
8	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:own	color:blue
1	Тишаень	Тишай	NOUN	N	Animacy=Hum|Case=Gen|Definite=Ind|Number=Plur,Sing	2	obl:own	_	GTtags=Prop,Sem/Mal,SP,Gen,Indef
2	арасель	арась	ADJ	V	Case=Nom|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Past	0	root	_	GTtags=V,Aux,Neg,Loc,Prt2,ScSg3
3	мелезэ	мель	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	nsubj	_	GTtags=Sg,Nom,PxSg3
4	туемс	туемс	VERB	V	VerbForm=Inf	3	advcl	_	GTtags=Inf
5	экше	экше	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	6	amod	_	GTtags=Sg,Nom,Indef
6	таркастонть	тарка	NOUN	N	Case=Ela|Definite=Def|Number=Sing	4	obl:lmod	_	GTtags=Sem/Plc,Sg,Ela,Def|SpaceAfter=No
7	,	,	PUNCT	CLB	_	9	punct	_	_
8	ледемадонть	ледемс	VERB	V	Case=Abl|Definite=Def|Number=Sing|VerbForm=Vnoun	9	obl	_	GTtags=NomAct,Sg,Abl,Def
9	сизесь	сиземс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	2	conj	_	GTtags=Ind,Prt1,ScSg3
10	нучк-пачк	нучк-пачк	ADV	Adv	_	9	advmod	_	SpaceAfter=No
11	,	,	PUNCT	CLB	_	12	punct	_	_
12	чулксетить	чулгсетемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres	2	conj	_	GTtags=Ind,Prs,ScPl3
13	весе	весе	DET	Det	_	14	det	_	_
14	кедензэ-пильгензэ	кедензэ-пильгензэ	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	12	nsubj	_	GTtags=Pl,Nom,PxSg3|SpaceAfter=No
15	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:own	color:blue
1	Астай	Астай	PROPN	N	Case=Nom|Definite=Ind|Number=Sing	2	nmod	_	CGdephead=#1-&gt;2|CGdeprel=@&gt;N|GTtags=Prop,Sg,Nom,Indef
2	покштянть	покштя	NOUN	N	Case=Gen|Definite=Def|Number=Sing	4	obl:own	_	CGdephead=#2-&gt;2|CGdeprel=@-FOBJ&gt;|GTtags=Sg,Gen,Def
3	сестэ	сестэ	ADV	Adv	_	4	advmod:tmod	_	CGdephead=#3-&gt;4|CGdeprel=@ADVL&gt;|GTtags=
4	ульнесть	ульнемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=1	0	root	_	CGdephead=#4-&gt;0|CGdeprel=@FMV|GTtags=IV,Ind,Prt1,ScPl3
5	вете	вете	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	6	nummod	_	CGdephead=#5-&gt;6|CGdeprel=@&gt;N|GTtags=Card,Sg,Nom,Indef
6	цёранзо	цёра	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	CGdephead=#6-&gt;4|CGdeprel=@&lt;SUBJ|GTtags=Pl,Nom,PxSg3
7	пек	пек	ADV	Adv	AdvType=Deg	8	advmod:deg	_	CGdephead=#7-&gt;8|CGdeprel=@&gt;A|GTtags=Deg
8	вадрят	вадря	ADJ	A	Case=Nom|Definite=Ind|Number=Plur	6	acl:relcl	_	CGdephead=#8-&gt;4|CGdeprel=@&lt;OBJ|GTtags=Pl,Nom,Indef|SpaceAfter=No
9	,	,	PUNCT	CLB	_	12	punct	_	CGdephead=#9-&gt;8|CGdeprel=@CLB|GTtags=CLB
10	нилетне	ниле	NUM	Num	Case=Nom|Definite=Def|Number=Plur|NumType=Card	12	nsubj	_	CGdephead=#10-&gt;0|CGdeprel=@X|GTtags=Card,Pl,Nom,Def
11	уш	уш	ADV	Adv	_	12	advmod:tmod	_	CGdephead=#11-&gt;10|CGdeprel=@ADVL|GTtags=
12	урьвакстозельть	урьвакстомс	VERB	V	Case=Nom|Definite=Ind|Number=Sing|Number[subj]=Plur|Person[subj]=3|Tense=Past|Valency=1|VerbForm=Conv,Part	4	conj	_	CGdephead=#12-&gt;0|CGdeprel=@PRED|GTtags=IV,Der/Ozj,Ger,Der/MWN,N,Pl,Nom,Indef,Clt/Cop Prt2 ScPl3|SpaceAfter=No
13	...	...	PUNCT	CLB	_	4	punct	_	CGdephead=#13-&gt;4|CGdeprel=@CLB|GTtags=CLB

~~~


