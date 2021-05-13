---
layout: base
title:  'Statistics of advmod:lto in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `advmod:lto`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-advmod.html">advmod</a></tt>.
There are also 10 other language-specific subtypes of `advmod`: <tt><a href="myv_jr-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="myv_jr-dep-advmod-comp.html">advmod:comp</a></tt>, <tt><a href="myv_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="myv_jr-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="myv_jr-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="myv_jr-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="myv_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="myv_jr-dep-advmod-lmp.html">advmod:lmp</a></tt>, <tt><a href="myv_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="myv_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

30 nodes (0%) are attached to their parents as `advmod:lto`.

19 instances of `advmod:lto` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66666666666667.

The following 2 pairs of parts of speech are connected with `advmod:lto`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (28; 93% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (2; 7% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod:lto	color:blue
1	...	...	PUNCT	PUNCT	_	4	punct	_	_
2	«	«	PUNCT	PUNCT	_	4	punct	_	GTtags=|SpaceAfter=No
3	Ков	ков	ADV	Adv	Case=Lat|PronType=Int	4	advmod:lto	_	GTtags=Interr,Lat|Gloss[eng]=where.to
4	сыргить	сыргамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,ScSg2|Gloss[eng]=set.off|SpaceAfter=No
5	?	?	PUNCT	CLB	_	4	punct	_	GTtags=|SpaceAfter=No
6	»	»	PUNCT	PUNCT	_	4	punct	_	_
7	—	—	PUNCT	PUNCT	_	8	punct	_	_
8	кевкстни	кевкстнемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=2	4	parataxis	_	GTtags=TV,Ind,Prs,ScSg3|Gloss[eng]=ask
9	эйсэнь	эйсэ	ADP	Adp	Case=Ine|Number[psor]=Sing|Person[psor]=1	8	obj	_	GTtags=Ine,PxSg1|Gloss[eng]=me
10	лиясто	лиясто	ADV	Adv	AdvType=Tim	8	advmod:tmod	_	GTtags=Sem/Time|Gloss[eng]=occasionally
11	седеем	седей	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	8	nsubj	_	GTtags=Sg,Nom,PxSg1|Gloss[eng]=heart|SpaceAfter=No
12	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod:lto	color:blue
1	Палько	Палько	PROPN	N	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	2	nsubj	_	GTtags=Sem/Sur,Prop,Sg,Nom,Indef
2	варшты	варштамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=2	0	root	_	GTtags=TV,Ind,Prs,ScSg3
3	лангозост	ланго	NOUN	N	Case=Ill|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3	2	obl	_	GTtags=Relator,SP,Ill,PxPl3
4	кашланксто	кашланго	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	2	obl	_	GTtags=SP,Ela,Indef|ModernForm=каштлангсто
5	ды	ды	CCONJ	CC	_	8	cc	_	_
6	мекев	мекев	ADV	Adv	AdvType=Loc	7	advmod:lto	_	GTtags=Spat
7	уголс	угол	NOUN	N	Case=Ill|Definite=Ind|Number=Plur,Sing	8	obl	_	GTtags=SP,Ill,Indef
8	эци	эцемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=2	2	conj	_	GTtags=TV,Ind,Prs,ScSg3|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


