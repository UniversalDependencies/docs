---
layout: base
title:  'Statistics of obl:comp in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `obl:comp`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-obl.html">obl</a></tt>.
There are also 9 other language-specific subtypes of `obl`: <tt><a href="mdf_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="mdf_jr-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="mdf_jr-dep-obl-freq.html">obl:freq</a></tt>, <tt><a href="mdf_jr-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="mdf_jr-dep-obl-lfrom.html">obl:lfrom</a></tt>, <tt><a href="mdf_jr-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="mdf_jr-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="mdf_jr-dep-obl-lto.html">obl:lto</a></tt>, <tt><a href="mdf_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

4 nodes (0%) are attached to their parents as `obl:comp`.

2 instances of `obl:comp` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 2 pairs of parts of speech are connected with `obl:comp`: <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (2; 50% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:comp	color:blue
1	Алязе	аля	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	4	nsubj	_	GTtags=Sg,Nom,PxSg1
2	тонь	тон	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	3	nmod	_	GTtags=Pers,Sg2,Gen
3	алядот	аля	NOUN	N	Case=Abl|Number=Plur,Sing|Number[psor]=Sing|Person[psor]=2	4	obl:comp	_	GTtags=SP,Abl,PxSg2
4	крутой	крутой	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:comp	color:blue
1	Вармась	варма	NOUN	N	Case=Nom|Definite=Def|Number=Sing	2	nsubj	_	GTtags=Sg,Nom,Def
2	уфась	уфамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScSg3
3	шобдавать	шобдава	NOUN	N	Case=Gen|Definite=Def|Number=Sing	2	obl:comp	_	GTtags=Sg,Gen,Def
4	коряс	коряс	ADP	Adp	Case=Ill	3	case	_	GTtags=Ill
5	сяда	сяда	ADV	Adv	AdvType=Deg	6	advmod:deg	_	GTtags=Deg
6	вишкста	вишкста	ADV	Adv	_	2	advmod:mmod	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


