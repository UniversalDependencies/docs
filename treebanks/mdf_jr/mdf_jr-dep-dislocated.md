---
layout: base
title:  'Statistics of dislocated in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `dislocated`

This relation is universal.

2 nodes (0%) are attached to their parents as `dislocated`.

2 instances of `dislocated` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `dislocated`: <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 dislocated	color:blue
1	Синь	сон	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	GTtags=Pers,Pl3,Nom
2	виде	виде	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	3	amod	_	GTtags=Sg,Nom,Indef
3	ваймот	вайме	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	1	dislocated	_	GTtags=Pl,Nom,Indef
4	кенярдсть	кенярдемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScPl3
5	сонь	сон	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	6	nmod	_	GTtags=Pers,Sg3,Gen
6	саманцты	самс	VERB	V	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3|VerbForm=Vnoun	4	advcl:tcl	_	GTtags=NomAct,Sg,Dat,PxSg3|SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 dislocated	color:blue
1	Сире	сире	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	2	amod	_	GTtags=Sg,Nom,Indef
2	Куженянь	куженя	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	3	nmod	_	GTtags=SP,Gen,Indef
3	ломаттне	ломань	NOUN	N	Case=Nom|Definite=Def|Number=Plur	6	nsubj	_	GTtags=Pl,Nom,Def
4	тя	тя	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Dem	5	det	_	GTtags=Dem,Sg,Nom,Indef
5	празднику	праздник	NOUN	N	Case=Lat|Definite=Ind|Number=Plur,Sing	6	obl:lto	_	GTtags=SP,Lat,Indef
6	сашендольхть	сашендомс	VERB	V	Mood=Sub|Number[subj]=Plur|Person[subj]=3	0	root	_	GTtags=Conj,ScPl3
7	сятка	ся	PRON	Pron	Case=Nom|Clitic=AddGA|Definite=Ind|Number=Plur|PronType=Dem	6	dislocated	_	GTtags=Dem,Pl,Nom,Indef,Clt/Add|SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	12	punct	_	_
9	кие	кие	PRON	Pron	Case=Nom|Number=Sing|PronType=Int	12	nsubj	_	GTtags=Interr,Sg,Nom
10	кунара	кунара	ADV	Adv	_	12	advmod:tmod	_	_
11	ни	ни	ADV	Adv	AdvType=Tim	10	advmod:tmod	_	GTtags=Sem/Time
12	тусь	тумс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	7	acl:relcl	_	GTtags=Ind,Prt1,ScSg3
13	велеста	веле	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	12	obl:lfrom	_	GTtags=SP,Ela,Indef
14	и	и	CCONJ	CC	_	15	cc	_	_
15	эряй-ащи	-ащемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	12	conj	_	GTtags=Ind,Prs,ScSg3
16	косовок	косовок	ADV	Adv	Case=Ine|Definite=Ind	18	advmod:lmod	_	GTtags=Indef,Ine
17	пяк	пяк	ADV	Adv	AdvType=Deg	18	advmod:deg	_	GTtags=Deg
18	ичкозе	ичкозе	ADV	Adv	Case=Loc	15	advmod:lmod	_	GTtags=Loc|SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


