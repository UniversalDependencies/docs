---
layout: base
title:  'Statistics of dep in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `dep`

This relation is universal.

6 nodes (0%) are attached to their parents as `dep`.

4 instances of `dep` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.16666666666667.

The following 4 pairs of parts of speech are connected with `dep`: <tt><a href="mdf_jr-pos-X.html">X</a></tt>-<tt><a href="mdf_jr-pos-X.html">X</a></tt> (3; 50% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 17% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PART.html">PART</a></tt> (1; 17% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-X.html">X</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dep	color:blue
1	Оформился	Оформился	X	_	_	9	dep	_	_
2	честь	честь	X	_	_	1	dep	_	_
3	по	по	X	_	_	4	dep	_	_
4	чести	честь	X	_	_	1	dep	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	1	punct	_	GTtags=PUNCT
6	а	а	CCONJ	CC	_	9	cc	_	_
7	меле	меле	ADV	Adv	_	9	advmod:tmod	_	_
8	сёрмаце	сёрма	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	9	nsubj	_	GTtags=Sg,Nom,PxSg2
9	сась	самс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScSg3|SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	9	punct	_	GTtags=PUNCT

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 dep	color:blue
1	Мезе	мезе	PRON	Pron	Case=Nom|Number=Sing|PronType=Int	2	obj	_	GTtags=Interr,Sg,Nom
2	мярьган	мярьгомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres	0	root	_	GTtags=Ind,Prs,ScSg1|SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	4	punct	_	_
4	кизефтендярясамазь	кизефтемс	VERB	V	Mood=Cnd|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=1|Person[subj]=3	2	advcl	_	GTtags=Cond,ScPl3,OcSg1
5	ломатть	ломань	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	4	nsubj	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	8	punct	_	_
7	кода	кода	ADV	Adv	_	8	advmod	_	_
8	эрят	эрямс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|Valency=1	4	ccomp	_	GTtags=IV,Ind,Prs,ScSg2,Cmp/Hyph-Serial,Use/Circ
9	-	_	PUNCT	PUNCT	_	10	punct	_	_
10	ащат	ащемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres	8	conj	_	GTtags=Ind,Prs,ScSg2
11	тон	тон	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	8	nsubj	_	GTtags=Pers,Sg2,Nom|SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	16	punct	_	_
13	монь	мон	PRON	Pron	Case=Gen|Number=Sing|Person=1|PronType=Prs	16	dep	_	GTtags=Pers,Sg1,Gen
14	фкя	фкя	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	16	nummod	_	GTtags=Card,Sg,Nom,Indef
15	сяка	сяка	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing	16	det	_	GTtags=Sg,Nom,Indef
16	стирнязе	стирня	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	11	appos	_	GTtags=Sg,Nom,PxSg1|SpaceAfter=No
17	?	?	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 dep	color:blue
1	Идень	идь	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	2	nmod	_	CGdephead=#1-&gt;2|CGdeprel=@&gt;N|GTtags=SP,Gen,Indef
2	седихне	седи	NOUN	N	Case=Nom|Definite=Def|Number=Plur	6	nsubj	_	CGdephead=#2-&gt;6|CGdeprel=@SUBJ&gt;|GTtags=Pl,Nom,Def
3	хуш	хуш	PART	Pcle	_	6	dep	_	CGdephead=#3-&gt;0|CGdeprel=@X|GTtags=
4	нинге	нинге	ADV	Adv	_	6	advmod	_	CGdephead=#4-&gt;6|CGdeprel=@ADVL&gt;|GTtags=
5	ашесть	аф	AUX	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	6	aux:neg	_	CGdephead=#5-&gt;5|CGdeprel=@-FAUXV&gt;|GTtags=Aux,Neg,Ind,Prt1,ScPl3
6	кенере	кенеремс	VERB	V	Connegative=Yes|Valency=1	0	root	_	CGdephead=#6-&gt;5|CGdeprel=@IMV|GTtags=IV,ConNeg
7	кувондамс	кувондамс	VERB	V	Valency=1|VerbForm=Inf	6	xcomp	_	CGdephead=#7-&gt;7|CGdeprel=@FS-&lt;FMAINV|GTtags=IV,Inf|SpaceAfter=No
8	,	,	PUNCT	CLB	_	17	punct	_	CGdephead=#8-&gt;9|CGdeprel=@CLB|GTtags=CLB
9	но	но	CCONJ	CC	_	17	cc	_	CGdephead=#9-&gt;17|CGdeprel=@CVP|GTtags=
10	тячиень	тячиень	ADJ	A	Case=Gen	11	amod	_	CGdephead=#10-&gt;11|CGdeprel=@&gt;N|GTtags=Gen
11	эрямань-ащемань	эряма-ащема	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	12	nmod	_	_
12	койса	кой	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	17	obl	_	CGdephead=#12-&gt;17|CGdeprel=@ADVL&gt;|GTtags=SP,Ine,Indef
13	кельме	кельме	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	14	amod	_	CGdephead=#13-&gt;13|CGdeprel=@&gt;N|GTtags=Sg,Nom,Indef
14	пееськаса	пееськаса	NOUN	_	_	17	obl	_	CGdephead=#14-&gt;0|CGdeprel=@X|GTtags=?
15	синьге	сон	PRON	Pron	Case=Nom|Clitic=AddGA|Number=Plur|Person=3|PronType=Prs	17	nsubj	_	CGdephead=#15-&gt;17|CGdeprel=@SUBJ&gt;|GTtags=Pers,Pl3,Nom,Clt/Add
16	кой-коста	кой-коста	ADV	Adv	Case=Ela	17	advmod	_	CGdephead=#16-&gt;17|CGdeprel=@ADVL&gt;|GTtags=Ela
17	вельхневихть	вельхневомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|Valency=1	6	conj	_	CGdephead=#17-&gt;0|CGdeprel=@FMV|GTtags=IV,Ind,Prs,ScPl3|SpaceAfter=No
18	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


