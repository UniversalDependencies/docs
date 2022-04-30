---
layout: base
title:  'Statistics of ccomp in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `ccomp`

This relation is universal.

12 nodes (0%) are attached to their parents as `ccomp`.

12 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.75.

The following 4 pairs of parts of speech are connected with `ccomp`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (9; 75% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Тоса	тоса	ADV	Adv	_	2	obl:lmod	_	_
2	кизефтине	кизефтемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Past|Valency=2	0	root	_	_
3	алязень	аля	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	мзярда	мзярда	ADV	Adv	_	6	advmod:tmod	_	_
6	касан	касомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	2	ccomp	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	Да	да	CCONJ	CC	_	3	cc	_	_
2	тон	тон	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	GTtags=Pers,Sg2,Nom
3	варжака	варжамс	VERB	V	Mood=Prec|Number[subj]=Sing|Person[subj]=2	0	root	_	GTtags=Prec,ScSg2|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	конашкава	конашкава	ADV	Adv	AdvType=Deg	6	advmod:deg	_	GTtags=Deg
6	ляпоня	ляпоня	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	3	ccomp	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
7	!	!	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 ccomp	color:blue
1	Илять	илять	ADV	Adv	AdvType=Tim	7	advmod:tmod	_	GTtags=Sem/Time
2	ужнамда	ужнамс	VERB	V	Case=Abl|Definite=Ind|Number=Plur,Sing|VerbForm=Vnoun	3	nmod	_	GTtags=NomAct,Err/Orth,SP,Abl,Indef
3	меле	меле	ADV	Adv	_	1	appos	_	_
4	Порватов	Порватов	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	7	nsubj	_	GTtags=Prop,Sg,Nom,Indef
5	тага	тага	ADV	Adv	AdvType=Tim	7	advmod:tmod	_	GTtags=Sem/Time
6	весть	весть	ADV	Adv	NumType=Mult	7	advmod:freq	_	GTtags=Der/Iter,Adv,Iter
7	няфтезе	няфтемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScSg3,OcSg3
8	-	-	PUNCT	PUNCT	_	11	punct	_	_
9	сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	11	nsubj:cop	_	GTtags=Pers,Sg3,Nom
10	тяса	тяса	ADV	Adv	Case=Ine	11	advmod:lmod	_	GTtags=Ine
11	азор	азор	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	7	ccomp	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


