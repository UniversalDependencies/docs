---
layout: base
title:  'Statistics of obl:lmp in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `obl:lmp`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-obl.html">obl</a></tt>.
There are also 9 other language-specific subtypes of `obl`: <tt><a href="mdf_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="mdf_jr-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="mdf_jr-dep-obl-comp.html">obl:comp</a></tt>, <tt><a href="mdf_jr-dep-obl-freq.html">obl:freq</a></tt>, <tt><a href="mdf_jr-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="mdf_jr-dep-obl-lfrom.html">obl:lfrom</a></tt>, <tt><a href="mdf_jr-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="mdf_jr-dep-obl-lto.html">obl:lto</a></tt>, <tt><a href="mdf_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

33 nodes (1%) are attached to their parents as `obl:lmp`.

23 instances of `obl:lmp` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.60606060606061.

The following 5 pairs of parts of speech are connected with `obl:lmp`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (29; 88% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl:lmp	color:blue
1	Тоса	тоса	ADV	Adv	_	2	advmod:lmod	_	_
2	сотнине	сотнемс	VERB	V	Number[obj]=Plur|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Past|Valency=2	0	root	_	_
3	гулянятнень	гуляня	NOUN	N	Case=Gen|Definite=Def|Number=Plur	2	obj	_	_
4	очконять	очка	NOUN	N	Case=Gen|Definite=Def|Derivation=Dimin|Number=Sing	5	nmod	_	_
5	ужеванза	ужа	NOUN	N	Case=Prl|Number=Plur,Sing|Number[psor]=Sing|Person[psor]=3	2	obl:lmp	_	_
6	и	и	CCONJ	CC	_	8	cc	_	_
7	монць	монць	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	8	nsubj	_	_
8	озань	озамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Past|Valency=1	2	conj	_	_
9	эзонза	эзонза	ADP	Adp	Case=Ill|Number[psor]=Sing|Person[psor]=3	8	obl:lto	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obl:lmp	color:blue
1	Кармась	кармамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScSg3
2	юксондома	юксондомс	VERB	V	Case=Loc|VerbForm=Inf	1	xcomp	_	GTtags=Inf,Loc
3	пильгонзон	пильге	NOUN	N	Case=Gen|Number=Plur|Number[psor]=Sing|Person[psor]=3	2	obj	_	GTtags=Pl,Gen,PxSg3|SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	7	punct	_	_
5	конат	кона	PRON	Pron	Case=Nom|Definite=Ind|Number=Plur|PronType=Rel	7	nsubj:cop	_	GTtags=Rel,Pl,Nom,Indef
6	плманжава	плманжа	NOUN	N	Case=Prl|Definite=Ind|Number=Plur,Sing	7	obl:lmp	_	GTtags=SP,Prl,Indef
7	пяндрат	пяндра	ADJ	A	Case=Nom|Definite=Ind|Number=Plur	3	acl:relcl	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 obl:lmp	color:blue
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


