---
layout: base
title:  'Statistics of vocative in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `vocative`

This relation is universal.

13 nodes (0%) are attached to their parents as `vocative`.

8 instances of `vocative` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.84615384615385.

The following 5 pairs of parts of speech are connected with `vocative`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (7; 54% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (3; 23% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 vocative	color:blue
1	Сергей	Сергей	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	5	vocative	_	GTtags=Prop,Sg,Nom,Indef|SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	GTtags=PUNCT
3	училищаса	училища	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	5	obl:lmod	_	GTtags=SP,Ine,Indef
4	сторожкс	сторож	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	5	xcomp	_	GTtags=SP,Tra,Indef
5	работан	работамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|VerbForm=Fin	0	root	_	GTtags=Ind,Prs,ScSg1|SpaceAfter=No
6	!	!	PUNCT	PUNCT	_	5	punct	_	GTtags=PUNCT

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 vocative	color:blue
1	Аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	2	aux:neg	_	CGdephead=#1-&gt;0|CGdeprel=@IMV|GTtags=Aux,Neg
2	сярядян	еярядян	VERB	_	_	0	root	_	CGdephead=#2-&gt;0|CGdeprel=@X|GTtags=?|SpaceAfter=No
3	,	,	PUNCT	CLB	_	5	punct	_	CGdephead=#3-&gt;2|CGdeprel=@X|GTtags=CLB
4	Светлана	Светлана	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Fem|NameType=Pat|Number=Sing	5	nmod	_	CGdephead=#4-&gt;5|CGdeprel=@&gt;N|GTtags=Prop,Sg,Nom,Indef
5	Петровна	Петровна	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Fem|NameType=Pat|Number=Sing	2	vocative	_	CGdephead=#5-&gt;0|CGdeprel=@VOC|GTtags=Prop,Sem/Fem-Patr,Sg,Nom,Indef|SpaceAfter=No
6	...	...	PUNCT	CLB	_	5	punct	_	CGdephead=#6-&gt;1|CGdeprel=@X|GTtags=CLB
7	Муворуван	мувору	ADJ	A	Case=Nom|Number=Sing|Number[subj]=Sing|Person[subj]=1	2	parataxis	_	CGdephead=#1-&gt;0|CGdeprel=@X|GTtags=SP,Prl,PxSg1|SpaceAfter=No
8	...	...	PUNCT	CLB	_	7	punct	_	CGdephead=#2-&gt;0|CGdeprel=@X|GTtags=CLB
9	...	...	PUNCT	CLB	_	2	punct	_	CGdephead=#1-&gt;0|CGdeprel=@X|GTtags=CLB

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 vocative	color:blue
1	Мес	мес	ADV	Adv	_	8	advmod	_	CGdephead=#1-&gt;0|CGdeprel=@X|GTtags=
2	тячи	тячи	ADV	Adv	_	8	advmod:tmod	_	CGdephead=#2-&gt;0|CGdeprel=@X|GTtags=|SpaceAfter=No
3	,	,	PUNCT	CLB	_	4	punct	_	CGdephead=#3-&gt;2|CGdeprel=@X|GTtags=CLB
4	атяй	атя	NOUN	N	Case=Nom|Definite=Ind|Derivation=Voc|Number=Sing	8	vocative	_	CGdephead=#4-&gt;4|CGdeprel=@ADDR|GTtags=Voc|SpaceAfter=No
5	,	,	PUNCT	CLB	_	4	punct	_	CGdephead=#5-&gt;4|CGdeprel=@X|GTtags=CLB
6	тон	тон	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	8	nsubj:cop	_	CGdephead=#6-&gt;6|CGdeprel=@OBJ|GTtags=Sg,Nom,Indef
7	аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	8	aux:neg	_	CGdephead=#7-&gt;11|CGdeprel=@IMV|GTtags=Aux,Neg
8	весялат	весяла	ADJ	A	Case=Nom|Definite=Ind|Number=Plur	0	root	_	CGdephead=#8-&gt;12|CGdeprel=@SPRED|GTtags=Pl,Nom,Indef|SpaceAfter=No
9	,	,	PUNCT	CLB	_	12	punct	_	CGdephead=#9-&gt;8|CGdeprel=@X|GTtags=CLB
10	ёфкст	ёфкс	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	12	obj	_	CGdephead=#10-&gt;12|CGdeprel=@OBJ&gt;|GTtags=Pl,Nom,Indef
11	аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	12	aux:neg	_	CGdephead=#11-&gt;0|CGdeprel=@IAUX|GTtags=Aux,Neg
12	азондат	азондомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|VerbForm=Fin	8	conj	_	CGdephead=#12-&gt;0|CGdeprel=@FMV|GTtags=Ind,Prs,ScSg2|SpaceAfter=No
13	,	,	PUNCT	CLB	_	16	punct	_	CGdephead=#13-&gt;12|CGdeprel=@X|GTtags=CLB
14	морот	мора	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	16	obj	_	CGdephead=#14-&gt;16|CGdeprel=@OBJ&gt;|GTtags=Pl,Nom,Indef
15	аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	16	aux:neg	_	CGdephead=#15-&gt;11|CGdeprel=@IAUX|GTtags=Aux,Neg
16	морат	морамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Pres|VerbForm=Fin	8	conj	_	CGdephead=#16-&gt;12|CGdeprel=@FMV|GTtags=Ind,Prs,ScSg2|SpaceAfter=No
17	?	?	PUNCT	CLB	_	8	punct	_	CGdephead=#17-&gt;11|CGdeprel=@X|GTtags=CLB
18	...	...	PUNCT	CLB	_	8	punct	_	CGdephead=#1-&gt;0|CGdeprel=@X|GTtags=CLB

~~~


