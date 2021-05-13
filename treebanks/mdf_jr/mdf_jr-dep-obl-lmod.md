---
layout: base
title:  'Statistics of obl:lmod in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `obl:lmod`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-obl.html">obl</a></tt>.
There are also 9 other language-specific subtypes of `obl`: <tt><a href="mdf_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="mdf_jr-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="mdf_jr-dep-obl-comp.html">obl:comp</a></tt>, <tt><a href="mdf_jr-dep-obl-freq.html">obl:freq</a></tt>, <tt><a href="mdf_jr-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="mdf_jr-dep-obl-lfrom.html">obl:lfrom</a></tt>, <tt><a href="mdf_jr-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="mdf_jr-dep-obl-lto.html">obl:lto</a></tt>, <tt><a href="mdf_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

38 nodes (1%) are attached to their parents as `obl:lmod`.

23 instances of `obl:lmod` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.78947368421053.

The following 6 pairs of parts of speech are connected with `obl:lmod`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (28; 74% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (5; 13% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (2; 5% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl:lmod	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:lmod	color:blue
1	Тоса	тоса	ADV	Adv	_	2	obl:lmod	_	_
2	кизефтине	кизефтемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=3|Person[subj]=1|Tense=Past|Valency=2	0	root	_	_
3	алязень	аля	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	мзярда	мзярда	ADV	Adv	_	6	advmod:tmod	_	_
6	касан	касомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	2	ccomp	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:lmod	color:blue
1	Инголенк	инголе	ADP	Adp	Case=Loc|Number[psor]=Plur|Person[psor]=1	2	obl:lmod	_	GTtags=Loc,PxPl1
2	стясть	стямс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScPl3
3	эчке	эчке	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	6	amod	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	5	punct	_	_
5	равжа	равжа	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	3	conj	_	GTtags=Sg,Nom,Indef
6	понтт	понда	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	2	nsubj	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	8	punct	_	_
8	кядьсост	кядь	NOUN	N	Case=Ine|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3	2	conj	_	GTtags=SP,Ine,PxPl3
9	пистолетт	пистолет	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	8	nsubj:cop	_	GTtags=Pl,Nom,Indef|SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


