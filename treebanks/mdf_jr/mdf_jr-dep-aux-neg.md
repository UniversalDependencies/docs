---
layout: base
title:  'Statistics of aux:neg in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `aux:neg`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-aux.html">aux</a></tt>.
There are also 1 other language-specific subtypes of `aux`: <tt><a href="mdf_jr-dep-aux-opt.html">aux:opt</a></tt>.

43 nodes (1%) are attached to their parents as `aux:neg`.

42 instances of `aux:neg` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06976744186047.

The following 6 pairs of parts of speech are connected with `aux:neg`: <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (14; 33% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (12; 28% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (8; 19% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (4; 9% instances), <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (4; 9% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux:neg	color:blue
1	Аф	аф	AUX	Pcle	Polarity=Neg	2	aux:neg	_	GTtags=Neg
2	кържа	кржа	ADV	Adv	Style=Ped	4	obj	_	GTtags=Sg,Nom,Indef|ModernForm=кржа
3	книгада	книга	NOUN	N	Case=Abl|Definite=Ind|Number=Plur,Sing	2	nmod	_	GTtags=SP,Abl,Indef
4	каземе	каземс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=1|Tense=Past|VerbForm=Fin	0	root	_	GTtags=TV,Ind,Prt1,ScPl1
5	минь	мон	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	GTtags=Pers,Pl1,Nom
6	ломаттненди	ломань	NOUN	N	Case=Dat|Definite=Def|Number=Plur	4	obl	_	GTtags=Pl,Dat,Def|SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux:neg	color:blue
1	Ся	ся	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Dem	3	det	_	CGdephead=#1-&gt;3|CGdeprel=@&gt;N|GTtags=Dem,Sg,Nom,Indef
2	кафта	кафта	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	3	nummod	_	CGdephead=#2-&gt;3|CGdeprel=@&gt;N|GTtags=Card,Sg,Nom,Indef
3	куттне	куд	NOUN	N	Case=Nom|Definite=Def|Number=Plur	4	nsubj	_	CGdephead=#3-&gt;4|CGdeprel=@SUBJ&gt;|GTtags=Pl,Nom,Def
4	арасть	арамс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past|VerbForm=Fin	0	root	_	CGdephead=#4-&gt;0|CGdeprel=@FMV|GTtags=IV,Ind,Prt1,ScPl3
5	теенза	сон	PRON	Pron	Case=Dat|Number=Sing|Person=3|PronType=Prs|Variant=Short	4	obl	_	CGdephead=#5-&gt;4|CGdeprel=@&lt;ADVL|GTtags=Pers,Sg3,Dat,Short
6	роднойкс	родной	ADJ	A	Case=Tra|Definite=Ind|Number=Plur,Sing	4	xcomp	_	CGdephead=#6-&gt;6|CGdeprel=@&gt;N|GTtags=SP,Tra,Indef
7	и	и	CCONJ	CC	_	9	cc	_	CGdephead=#7-&gt;7|CGdeprel=@CC|GTtags=
8	аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	9	aux:neg	_	CGdephead=#8-&gt;8|CGdeprel=@-F&lt;AUXV|GTtags=Aux,Neg
9	юкставикс	юкставомс	VERB	V	Case=Tra|Definite=Ind|Number=Plur,Sing	6	conj	_	CGdephead=#9-&gt;8|CGdeprel=@IMV|GTtags=IV,NomAg,SP,Tra,Indef|SpaceAfter=No
10	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:neg	color:blue
1	Тя	тя	DET	Det	Case=Nom|Number=Sing|PronType=Dem	4	det	_	GTtags=Dem,Sg,Nom
2	аф	аф	AUX	Pcle	Polarity=Neg	3	aux:neg	_	GTtags=Neg
3	оцю	оцю	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	4	amod	_	GTtags=Sg,Nom,Indef
4	статьяняса	статья	NOUN	N	Case=Ine|Definite=Ind|Degree=Dim|Number=Plur,Sing	7	obl	_	GTtags=Der/Dimin,N,SP,Ine,Indef
5	мон	мон	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	GTtags=Pers,Sg1,Nom
6	аф	аф	AUX	Pcle	Polarity=Neg	7	aux	_	GTtags=Neg
7	тяряфнян	тяряфнемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|VerbForm=Fin	0	root	_	GTtags=TV,Ind,Prs,ScSg1
8	киньге	кивок	PRON	Pron	Case=Gen|Number=Plur,Sing|PronType=Ind	9	obj	_	GTtags=Indef,SP,Gen
9	дивандафтомс	дивандафтомс	VERB	V	VerbForm=Inf	7	xcomp	_	GTtags=TV,Inf|SpaceAfter=No
10	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


