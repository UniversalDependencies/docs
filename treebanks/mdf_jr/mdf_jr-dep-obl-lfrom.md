---
layout: base
title:  'Statistics of obl:lfrom in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `obl:lfrom`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-obl.html">obl</a></tt>.
There are also 9 other language-specific subtypes of `obl`: <tt><a href="mdf_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="mdf_jr-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="mdf_jr-dep-obl-comp.html">obl:comp</a></tt>, <tt><a href="mdf_jr-dep-obl-freq.html">obl:freq</a></tt>, <tt><a href="mdf_jr-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="mdf_jr-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="mdf_jr-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="mdf_jr-dep-obl-lto.html">obl:lto</a></tt>, <tt><a href="mdf_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

20 nodes (1%) are attached to their parents as `obl:lfrom`.

10 instances of `obl:lfrom` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.35.

The following 2 pairs of parts of speech are connected with `obl:lfrom`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (19; 95% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:lfrom	color:blue
1	Афи	аф	AUX	Aux	Clitic=I|Polarity=Neg	2	aux:neg	_	_
2	шарьхкодень	шарьхкодемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Past|Valency=2	0	root	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	5	punct	_	_
4	кода	кода	ADV	Adv	_	5	mark	_	_
5	лаподень	лаподемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Past|Valency=2	2	advcl	_	_
6	карденя	карда	NOUN	N	Case=Nom|Definite=Ind|Derivation=Dimin|Number=Sing|Typo=Yes	7	nmod	_	_
7	пряста	пря	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	5	obl:lfrom	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:lfrom	color:blue
1	Колятнень	Коля	NOUN	N	Case=Gen|Definite=Def|Number=Plur	2	nmod:poss	_	GTtags=Prop,Pl,Gen,Def
2	кудсна	куд	NOUN	N	Case=Nom|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3	5	nsubj	_	GTtags=SP,Nom,PxPl3
3	эздонк	эзда	ADP	Adp	Case=Abl|Number[psor]=Plur|Person[psor]=1	5	obl:lfrom	_	GTtags=Abl,PxPl1
4	тона	тона	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Dem	5	det	_	GTtags=Dem,Sg,Nom,Indef
5	порядкасоль	порядка	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=SP,Ine,Indef,Clt/Cop,Prt2,ScSg3|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	8	punct	_	_
7	пцтай	пцтай	ADV	Adv	_	8	advmod:deg	_	_
8	минь	мон	PRON	Pron	Case=Gen|Number=Plur|Person=1|PronType=Prs	5	conj	_	GTtags=Pers,Pl1,Gen
9	каршесонк	каршеса	ADP	Adp	Case=Ine|Number[psor]=Plur|Person[psor]=1	8	case	_	GTtags=Ine,PxPl1|SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


