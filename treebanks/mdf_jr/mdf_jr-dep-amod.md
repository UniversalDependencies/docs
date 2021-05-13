---
layout: base
title:  'Statistics of amod in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `amod`

This relation is universal.

89 nodes (3%) are attached to their parents as `amod`.

89 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14606741573034.

The following 4 pairs of parts of speech are connected with `amod`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (86; 97% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	И	и	CCONJ	CC	_	2	cc	_	_
2	уендихть	уендемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|Valency=1	0	root	_	_
3	сенем	сенем	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	4	amod	_	_
4	менельть	менель	NOUN	N	Case=Gen|Definite=Def|Number=Sing	5	nmod	_	_
5	потмоса	потма	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	2	obl:lmod	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	9	punct	_	_
7	кода	кода	ADV	Adv	_	9	mark	_	_
8	оцю	оцю	ADJ	A	Case=Nom|Number=Sing	9	amod	_	_
9	морява	моря	NOUN	N	Case=Prl|Definite=Ind|Number=Plur,Sing	4	obl:lmp	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod	color:blue
1	Тянемс	тянемс	ADV	Adv	AdvType=Tim	4	advmod:tmod	_	GTtags=Sem/Time
2	вестенге	весть	ADV	Adv	Clitic=AddGA	4	advmod:freq	_	GTtags=Temp,Clt/Add
3	ашезь	аф	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	4	aux:neg	_	GTtags=Aux,Neg,Ind,Prt1,ScSg3
4	няенде	няендемс	VERB	V	Connegative=Yes	0	root	_	GTtags=ConNeg
5	сонь	сон	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	4	obj	_	GTtags=Pers,Sg3,Gen
6	тяфтама	тяфтама	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|PronType=Dem	7	amod	_	GTtags=Dem,Sg,Nom,Indef
7	весяласта	весяласта	ADV	Adv	_	4	xcomp	_	_
8	и	и	CCONJ	CC	_	9	cc	_	_
9	ляпоста	ляпоста	ADV	Adv	_	7	conj	_	_
10	главнайть	главнай	ADJ	A	Case=Gen|Definite=Def|Number=Sing	7	obl	_	GTtags=Sg,Gen,Def
11	мархта	мархта	ADP	Adp	_	10	case	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod	color:blue
1	Мон	мон	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	седишкада	седишкада	ADV	Adv	_	3	advmod	_	_
3	ванондан	ванондомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=2	0	root	_	_
4	веленьконь	веле	NOUN	N	Case=Gen|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=1	5	nmod	_	_
5	велькска	велькска	NOUN	N	Case=Prl|Definite=Ind|Number=Plur,Sing|Typo=Yes	3	obl:lmp	_	CorrectForm=вельхкска
6	лиенди	лиендемс	VERB	V	Tense=Pres|Valency=1|VerbForm=Part	7	amod	_	_
7	самолёттнень	самолёт	NOUN	N	Case=Gen|Definite=Def|Number=Plur	3	obl:lmod	_	_
8	мельге	мельге	ADP	Adp	AdpType=Post|Case=Prl	7	case	_	_
9	и	и	CCONJ	CC	_	10	cc	_	_
10	сельмотькшнян	сельмотькшнемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	3	conj	_	SpaceAfter=No
11	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


