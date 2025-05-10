---
layout: base
title:  'Statistics of obl:tmod in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="mdf_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="mdf_jr-dep-obl-cmp.html">obl:cmp</a></tt>.

10 nodes (0%) are attached to their parents as `obl:tmod`.

8 instances of `obl:tmod` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.3.

The following 3 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (7; 70% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (2; 20% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:tmod	color:blue
1	Омбоце	омбоце	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|NumType=Ord	2	amod	_	GTtags=Ord,Sg,Nom,Indef
2	шись	ши	NOUN	N	Case=Nom|Definite=Def|Number=Sing	3	obl:tmod	_	GTtags=Sg,Nom,Def
3	ащан	ащемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres	0	root	_	GTtags=IV,Ind,Prs,ScSg1
4	эрьгяфтома	эрьгя	NOUN	N	Case=Abe|Definite=Ind|Number=Plur,Sing	3	obl	_	GTtags=SP,Abe,Indef|SpaceAfter=No
5	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 obl:tmod	color:blue
1	Мес	мес	ADV	Adv	_	8	advmod	_	CGdephead=#1-&gt;0|CGdeprel=@X|GTtags=
2	тячи	тячи	NOUN	Adv	AdvType=Tim|Case=Nom|Definite=Ind|Number=Sing	8	obl:tmod	_	CGdephead=#2-&gt;0|CGdeprel=@X|GTtags=|SpaceAfter=No
3	,	,	PUNCT	CLB	_	4	punct	_	CGdephead=#3-&gt;2|CGdeprel=@X|GTtags=CLB
4	атяй	атя	NOUN	N	Case=Nom|Definite=Ind|Derivation=Voc|Number=Sing	8	vocative	_	CGdephead=#4-&gt;4|CGdeprel=@ADDR|GTtags=Voc|SpaceAfter=No
5	,	,	PUNCT	CLB	_	4	punct	_	CGdephead=#5-&gt;4|CGdeprel=@X|GTtags=CLB
6	тон	тон	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	8	nsubj:cop	_	CGdephead=#6-&gt;6|CGdeprel=@OBJ|GTtags=Sg,Nom,Indef
7	аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	8	aux:neg	_	CGdephead=#7-&gt;11|CGdeprel=@IMV|GTtags=Aux,Neg
8	весялат	весяла	ADJ	A	Case=Nom|Definite=Ind|Number=Plur	0	root	_	CGdephead=#8-&gt;12|CGdeprel=@SPRED|GTtags=Pl,Nom,Indef|SpaceAfter=No
9	,	,	PUNCT	CLB	_	12	punct	_	CGdephead=#9-&gt;8|CGdeprel=@X|GTtags=CLB
10	ёфкст	ёфкс	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	12	obj	_	CGdephead=#10-&gt;12|CGdeprel=@OBJ&gt;|GTtags=Pl,Nom,Indef
11	аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	12	aux	_	CGdephead=#11-&gt;0|CGdeprel=@IAUX|GTtags=Aux,Neg
12	азондат	азондомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|VerbForm=Fin	8	conj	_	CGdephead=#12-&gt;0|CGdeprel=@FMV|GTtags=Ind,Prs,ScSg2|SpaceAfter=No
13	,	,	PUNCT	CLB	_	16	punct	_	CGdephead=#13-&gt;12|CGdeprel=@X|GTtags=CLB
14	морот	мора	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	16	obj	_	CGdephead=#14-&gt;16|CGdeprel=@OBJ&gt;|GTtags=Pl,Nom,Indef
15	аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	16	aux	_	CGdephead=#15-&gt;11|CGdeprel=@IAUX|GTtags=Aux,Neg
16	морат	морамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|VerbForm=Fin	8	conj	_	CGdephead=#16-&gt;12|CGdeprel=@FMV|GTtags=Ind,Prs,ScSg2|SpaceAfter=No
17	?	?	PUNCT	CLB	_	8	punct	_	CGdephead=#17-&gt;11|CGdeprel=@X|GTtags=CLB
18	...	...	PUNCT	CLB	_	8	punct	_	CGdephead=#1-&gt;0|CGdeprel=@X|GTtags=CLB

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:tmod	color:blue
1	Тячи	тячи	NOUN	Adv	AdvType=Tim|Case=Nom|Definite=Ind|Number=Sing	2	obl:tmod	_	CGdephead=#1-&gt;0|CGdeprel=@X
2	ават	ава	NOUN	N	Case=Nom|Definite=Ind|Number=Sing|Number[subj]=Sing|Person[subj]=2|Tense=Pres	0	root	_	CGdephead=#2-&gt;6|CGdeprel=@SPRED|GTtags=Pl,Nom,Indef|SpaceAfter=No
3	,	,	PUNCT	CLB	_	6	punct	_	CGdephead=#3-&gt;2|CGdeprel=@X|GTtags=CLB
4	тячи	тячи	NOUN	Adv	AdvType=Tim|Case=Nom|Definite=Ind|Number=Sing	6	obl:tmod	_	CGdephead=#4-&gt;6|CGdeprel=@ADVL&gt;
5	тядякс	тядя	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	6	obl	_	CGdephead=#5-&gt;5|CGdeprel=@PRED-ADVL|GTtags=SP,Tra,Indef
6	арать	арамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Past|VerbForm=Fin	2	conj	_	CGdephead=#6-&gt;0|CGdeprel=@FMV|GTtags=Ind,Prt1,ScSg2|SpaceAfter=No
7	.	.	PUNCT	CLB	_	2	punct	_	CGdephead=#7-&gt;6|CGdeprel=@X|GTtags=CLB

~~~


