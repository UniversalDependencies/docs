---
layout: base
title:  'Statistics of obl:cmp in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `obl:cmp`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-obl.html">obl</a></tt>.
There are also 6 other language-specific subtypes of `obl`: <tt><a href="mdf_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="mdf_jr-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="mdf_jr-dep-obl-freq.html">obl:freq</a></tt>, <tt><a href="mdf_jr-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="mdf_jr-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="mdf_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

12 nodes (0%) are attached to their parents as `obl:cmp`.

10 instances of `obl:cmp` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 6 pairs of parts of speech are connected with `obl:cmp`: <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (3; 25% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (3; 25% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (2; 17% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (2; 17% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:cmp	color:blue
1	Алязе	аля	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	4	nsubj	_	GTtags=Sg,Nom,PxSg1
2	тонь	тон	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	3	nmod	_	GTtags=Pers,Sg2,Gen
3	алядот	аля	NOUN	N	Case=Abl|Number=Plur,Sing|Number[psor]=Sing|Person[psor]=2	4	obl:cmp	_	GTtags=SP,Abl,PxSg2
4	крутой	крутой	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:cmp	color:blue
1	Синь	сон	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Pl3,Nom
2	эряйхть	эрямс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,ScPl3
3	корязонк	коряс	ADP	Adp	Case=Ill|Number[psor]=Plur|Person[psor]=1	5	obl:cmp	_	GTtags=Ill,PxPl1
4	сяда	сяда	ADV	Adv	AdvType=Deg	5	advmod:deg	_	GTtags=Deg
5	цебярьста	цебярьста	ADV	Adv	AdvType=Man	2	advmod:mmod	_	GTtags=Manner|SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:cmp	color:blue
1	Тяда	тя	PRON	Pron	Case=Abl|Definite=Ind|Number=Sing|PronType=Dem	2	obl:cmp	_	GTtags=Dem,Sg,Abl,Indef
2	инголе	инголе	ADV	Adv	Case=Loc	5	advmod:tmod	_	GTtags=Loc
3	тага	тага	ADV	Adv	AdvType=Tim	5	advmod:tmod	_	GTtags=Sem/Time
4	Платон	Платон	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	5	nsubj	_	GTtags=Prop,Sg,Nom,Indef
5	дивандафтомань	дивандафтомс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=1|Person[subj]=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,ScSg3,OcSg1|SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


