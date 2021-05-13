---
layout: base
title:  'Statistics of advmod:mmod in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `advmod:mmod`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-advmod.html">advmod</a></tt>.
There are also 9 other language-specific subtypes of `advmod`: <tt><a href="mdf_jr-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="mdf_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="mdf_jr-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="mdf_jr-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="mdf_jr-dep-advmod-freq.html">advmod:freq</a></tt>, <tt><a href="mdf_jr-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="mdf_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="mdf_jr-dep-advmod-lto.html">advmod:lto</a></tt>, <tt><a href="mdf_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

34 nodes (1%) are attached to their parents as `advmod:mmod`.

18 instances of `advmod:mmod` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.70588235294118.

The following 3 pairs of parts of speech are connected with `advmod:mmod`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (31; 91% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (2; 6% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 advmod:mmod	color:blue
1	А	а	CCONJ	CC	_	2	cc	_	_
2	касан	касомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	0	root	_	_
3	пяк	пяк	ADV	Adv	AdvType=Deg	4	advmod:deg	_	_
4	савор	савор	ADV	Adv	_	2	advmod:mmod	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	9	punct	_	_
6	нинге	нинге	ADV	Adv	AdvType=Tim	9	advmod:tmod	_	_
7	школавга	школа	NOUN	N	Case=Lat|Clitic=AddGA|Definite=Ind|Number=Plur,Sing	9	obl:lto	_	_
8	аф	аф	AUX	Aux	Polarity=Neg	9	aux:neg	_	_
9	якан	якамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	2	conj	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 advmod:mmod	color:blue
1	сонь	сон	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	0	root	_	GTtags=Pers,Sg3,Gen
2	мархтонза	мархта	ADP	Adp	Number[psor]=Sing|Person[psor]=3	1	case	_	GTtags=PxSg3
3	марса	марса	ADV	Adv	_	1	advmod	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	6	punct	_	_
5	сембонь	сембе	PRON	Pron	Case=Gen|Definite=Ind|Number=Plur,Sing	6	nmod	_	GTtags=SP,Gen,Indef
6	ёткста	ётка	NOUN	N	Case=Ela|Definite=Ind|NounType=Relat|Number=Plur,Sing	1	conj	_	GTtags=Relator,SP,Ela,Indef
7	цебярьста	цебярьста	ADV	Adv	AdvType=Man	6	advmod:mmod	_	GTtags=Manner|SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	9	punct	_	_
9	монь	мон	PRON	Pron	Case=Gen|Number=Sing|Person=1|PronType=Prs	1	conj	_	GTtags=Pers,Sg1,Gen
10	корязон	коряс	ADP	Adp	Case=Ill|Number[psor]=Sing|Person[psor]=1	9	case	_	GTtags=Ill,PxSg1
11	мазыста	мазыста	ADV	Adv	AdvType=Man	9	advmod:mmod	_	GTtags=Manner|SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	13	punct	_	_
13	сембонь	сембе	PRON	Pron	Case=Gen|Definite=Ind|Number=Plur,Sing	1	conj	_	GTtags=SP,Gen,Indef
14	мархта	мархта	ADP	Adp	_	13	case	_	_
15	марса	марса	ADV	Adv	_	13	advmod	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 advmod:mmod	color:blue
1	сонь	сон	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	0	root	_	GTtags=Pers,Sg3,Gen
2	мархтонза	мархта	ADP	Adp	Number[psor]=Sing|Person[psor]=3	1	case	_	GTtags=PxSg3
3	марса	марса	ADV	Adv	_	1	advmod	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	6	punct	_	_
5	сембонь	сембе	PRON	Pron	Case=Gen|Definite=Ind|Number=Plur,Sing	6	nmod	_	GTtags=SP,Gen,Indef
6	ёткста	ётка	NOUN	N	Case=Ela|Definite=Ind|NounType=Relat|Number=Plur,Sing	1	conj	_	GTtags=Relator,SP,Ela,Indef
7	цебярьста	цебярьста	ADV	Adv	AdvType=Man	6	advmod:mmod	_	GTtags=Manner|SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	9	punct	_	_
9	монь	мон	PRON	Pron	Case=Gen|Number=Sing|Person=1|PronType=Prs	1	conj	_	GTtags=Pers,Sg1,Gen
10	корязон	коряс	ADP	Adp	Case=Ill|Number[psor]=Sing|Person[psor]=1	9	case	_	GTtags=Ill,PxSg1
11	мазыста	мазыста	ADV	Adv	AdvType=Man	9	advmod:mmod	_	GTtags=Manner|SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	13	punct	_	_
13	сембонь	сембе	PRON	Pron	Case=Gen|Definite=Ind|Number=Plur,Sing	1	conj	_	GTtags=SP,Gen,Indef
14	мархта	мархта	ADP	Adp	_	13	case	_	_
15	марса	марса	ADV	Adv	_	13	advmod	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


