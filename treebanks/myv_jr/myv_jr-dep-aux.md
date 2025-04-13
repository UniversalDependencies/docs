---
layout: base
title:  'Statistics of aux in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `aux`

This relation is universal.
There are 7 language-specific subtypes of `aux`: <tt><a href="myv_jr-dep-aux-aspect.html">aux:aspect</a></tt>, <tt><a href="myv_jr-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="myv_jr-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="myv_jr-dep-aux-nec.html">aux:nec</a></tt>, <tt><a href="myv_jr-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="myv_jr-dep-aux-opt.html">aux:opt</a></tt>, <tt><a href="myv_jr-dep-aux-q.html">aux:q</a></tt>.

363 nodes (2%) are attached to their parents as `aux`.

354 instances of `aux` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07988980716253.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (354; 98% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-ADP.html">ADP</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Велень	веле	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	2	nmod:poss	_	GTtags=Sem/Plc,SP,Gen,Indef
2	росась	роса	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Def
3	эзь	а	AUX	Aux	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	4	aux	_	_
4	костявт	костявомс	VERB	V	Connegative=Yes|Mood=Ind	0	root	_	GTtags=IV,Ind,ConNeg
5	валске	валске	NOUN	N	AdvType=Tim|Case=Nom|Definite=Ind|Number=Sing	6	compound	_	GTtags=Temp,Sg,Nom,Indef
6	мартонь	марто	NOUN	N	Case=Gen|Definite=Ind|NounType=Relat|Number=Plur,Sing	7	nmod	_	GTtags=Der/MWN,N,SP,Gen,Indef
7	чипайсэнть	чипай	NOUN	N	Case=Ine|Definite=Def|Number=Sing	4	obl:lmod	_	GTtags=Sg,Ine,Def|SpaceAfter=No
8	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	Ды	ды	CCONJ	CC	_	3	cc	_	CGdephead=#1-&gt;1|CGdeprel=@CC|GTtags=
2	илядо	а	AUX	V	Mood=Imp|Number[subj]=Plur|Person[subj]=2|Polarity=Neg|VerbType=Aux	3	aux	_	CGdephead=#2-&gt;2|CGdeprel=@-FAUXV&gt;|GTtags=Aux,Neg,Imprt,ScPl2
3	тонавтне	понавтнемс	VERB	V	Connegative=Yes	0	root	_	CGdephead=#3-&gt;2|CGdeprel=@IMV|GTtags=Der/njems,V,IV,ConNeg
4	кува	кува	ADV	Adv	AdvType=Loc|Case=Prl|PronType=Int	3	advmod	_	CGdephead=#4-&gt;3|CGdeprel=@&lt;ADVL|GTtags=Interr,Spat,Prl
5	а	а	AUX	CC	_	6	aux	_	CGdephead=#5-&gt;6|CGdeprel=@CVP|GTtags=
6	эряви	эрявомс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	3	orphan	_	CGdephead=#6-&gt;6|CGdeprel=@-F&lt;AUXV|GTtags=IV,Ind,Prs,ScSg3|SpaceAfter=No
7	.	.	PUNCT	CLB	_	3	punct	_	CGdephead=#7-&gt;7|CGdeprel=@CLB|GTtags=CLB

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux	color:blue
1	Ансяк	ансяк	ADV	Adv	_	2	advmod:foc	_	GTtags=Exclusive
2	кодат	кодамо	ADJ	A	Case=Nom|Number=Plur|PronType=Int	13	acl:relcl	_	GTtags=Interr,Nom,Pl
3	иляст	а	AUX	AUX	Mood=Opt|Number[subj]=Plur|Person[subj]=3|Polarity=Neg	2	aux	_	GTtags=Neg,Opt,ScPl3
4	уле	улемс	AUX	V	Connegative=Yes	2	cop	_	GTtags=IV,ConNeg|SpaceAfter=No
5	,	,	PUNCT	CLB	_	2	punct	_	_
6	весемеде	весемеде	ADV	Pcle	Degree=Sup	7	advmod:cmp	_	GTtags=Degree=Sup
7	мазыйтне	мазый	ADJ	A	Case=Nom|Definite=Def|Number=Plur	13	nsubj	_	GTtags=Der/MWN,N,Pl,Nom,Def
8	эйстэдест	эйстэ	ADP	Adp	Case=Ela|Number[psor]=Plur|Person[psor]=3	7	obl	_	GTtags=Ela,PxPl3|SpaceAfter=No
9	,	,	PUNCT	CLB	_	11	punct	_	_
10	монень	мон	PRON	Pron	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Long	11	obl	_	GTtags=Pers,Sg1,Dat,Variant=Long
11	маряви	марявомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	13	parataxis	_	GTtags=IV,Ind,Prs,ScSg3|SpaceAfter=No
12	,	,	PUNCT	CLB	_	11	punct	_	_
13	розась	роза	NOUN	N	Case=Nom|Definite=Def|Number=Sing	0	root	_	GTtags=Sg,Nom,Def
14	ды	ды	CCONJ	CC	_	15	cc	_	_
15	макось	мако	NOUN	N	Case=Nom|Definite=Def|Number=Sing	13	conj	_	GTtags=Sg,Nom,Def|SpaceAfter=No
16	.	.	PUNCT	CLB	_	13	punct	_	_

~~~


