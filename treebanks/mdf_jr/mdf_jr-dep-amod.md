---
layout: base
title:  'Statistics of amod in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `amod`

This relation is universal.

152 nodes (3%) are attached to their parents as `amod`.

152 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19078947368421.

The following 8 pairs of parts of speech are connected with `amod`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (142; 93% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	И	и	CCONJ	CC	_	2	cc	_	_
2	уендихть	уендемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres	0	root	_	_
3	сенем	сенем	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	4	amod	_	_
4	менельть	менель	NOUN	N	Case=Gen|Definite=Def|Number=Sing	5	nmod	_	_
5	потмоса	потма	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	2	obl:lmod	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	9	punct	_	_
7	кода	кода	ADV	Adv	_	9	mark	_	_
8	оцю	оцю	ADJ	A	Case=Nom|Number=Sing	9	amod	_	_
9	морява	моря	NOUN	N	Case=Prl|Definite=Ind|Number=Plur,Sing	4	obl:lmod	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 amod	color:blue
1	Мокшень	мокша	ADJ	A	Case=Gen|Definite=Ind|Number=Plur,Sing	2	amod	_	CGdephead=#1-&gt;1|CGdeprel=@&gt;N|GTtags=SP,Gen,Indef
2	мастор	мастор	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	10	vocative	_	CGdephead=#2-&gt;0|CGdeprel=@X|GTtags=?|SpaceAfter=No
3	,	,	PUNCT	CLB	_	5	punct	_	CGdephead=#3-&gt;2|CGdeprel=@X|GTtags=CLB
4	мазы	мазы	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	5	amod	_	CGdephead=#4-&gt;0|CGdeprel=@X|GTtags=Sg,Nom,Indef
5	крайняй	крайняй	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	2	appos	_	CGdephead=#5-&gt;0|CGdeprel=@SPRED|GTtags=Sg,Nom,Indef|SpaceAfter=No
6	,	,	PUNCT	CLB	_	5	punct	_	CGdephead=#6-&gt;5|CGdeprel=@X|GTtags=CLB
7	вай	вай	INTJ	Interj	_	10	discourse	_	CGdephead=#7-&gt;0|CGdeprel=@INTERJ|GTtags=
8	пяк	пяк	ADV	Adv	AdvType=Deg	10	advmod	_	CGdephead=#8-&gt;0|CGdeprel=@X|GTtags=Deg
9	эздон	эзда	ADP	Po	AdpType=Post|Case=Abl|Number[psor]=Sing|Person[psor]=1	10	nmod	_	CGdephead=#9-&gt;0|CGdeprel=@X|GTtags=Po,Abl,PxSg1
10	ичкозят	ичкозе	ADV	Adv	Case=Loc|Number[subj]=Sing|Person[subj]=2|Tense=Pres	0	root	_	CGdephead=#10-&gt;5|CGdeprel=@SPRED|GTtags=Loc,Clt/Cop,Prs,ScSg2|SpaceAfter=No
11	...	...	PUNCT	CLB	_	10	punct	_	CGdephead=#11-&gt;5|CGdeprel=@X|GTtags=CLB

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 amod	color:blue
1	Шись	ши	NOUN	N	Case=Nom|Definite=Def|Number=Sing	2	nsubj	_	CGdephead=#1-&gt;2|CGdeprel=@SUBJ&gt;|GTtags=Sg,Nom,Def
2	пиди	пидемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|VerbForm=Fin	0	root	_	CGdephead=#2-&gt;0|CGdeprel=@FMV|GTtags=Ind,Prs,ScSg3
3	аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	4	aux:neg	_	CGdephead=#3-&gt;2|CGdeprel=@FAUX|GTtags=Aux,Neg
4	азовомшка	азомс	VERB	V	Case=Nom|Definite=Ind|Derivation=OvOms|Number=Sing	7	amod	_	CGdephead=#4-&gt;10|CGdeprel=@IMV|GTtags=Der/OvOms,V,Ger,Cmpr,Sg,Nom,Indef
5	/	/	PUNCT	PUNCT	_	6	punct	_	CGdephead=#5-&gt;6|CGdeprel=@X|GTtags=PUNCT
6	пси	пси	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	7	amod	_	CGdephead=#6-&gt;7|CGdeprel=@&gt;N|GTtags=Sg,Nom,Indef
7	модать	мода	NOUN	N	Case=Gen|Definite=Def|Number=Sing	8	nmod	_	CGdephead=#7-&gt;7|CGdeprel=@&gt;P|GTtags=Sg,Gen,Def
8	лангс	ланга	NOUN	N	Case=Ill|Definite=Ind|NounType=Relat|Number=Plur,Sing	11	obl	_	CGdephead=#8-&gt;4|CGdeprel=@&lt;ADVL|GTtags=Relator,SP,Ill,Indef
9	кяпе	кяпе	ADV	Adv	AdvType=Sta	11	advcl	_	CGdephead=#9-&gt;9|CGdeprel=@&gt;N|GTtags=Sg,Nom,Indef
10	аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	11	aux	_	CGdephead=#10-&gt;3|CGdeprel=@IAUX|GTtags=Aux,Neg
11	шятяват	шятямс	VERB	V	Derivation=OvOms|Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres	2	conj	_	CGdephead=#11-&gt;3|CGdeprel=@FMV|GTtags=Der/OvOms,V,Ind,Prs,ScSg2
12	...	...	PUNCT	CLB	_	2	punct	_	CGdephead=#12-&gt;2|CGdeprel=@X|GTtags=CLB

~~~


