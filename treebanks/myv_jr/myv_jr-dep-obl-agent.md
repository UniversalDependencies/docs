---
layout: base
title:  'Statistics of obl:agent in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-obl.html">obl</a></tt>.
There are also 6 other language-specific subtypes of `obl`: <tt><a href="myv_jr-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="myv_jr-dep-obl-cmp.html">obl:cmp</a></tt>, <tt><a href="myv_jr-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="myv_jr-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="myv_jr-dep-obl-own.html">obl:own</a></tt>, <tt><a href="myv_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

32 nodes (0%) are attached to their parents as `obl:agent`.

20 instances of `obl:agent` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.90625.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (24; 75% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (5; 16% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (3; 9% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:agent	color:blue
1	Ансяк	ансяк	ADV	Adv	_	4	advmod:foc	_	GTtags=Exclusive
2	бу	бу	AUX	Pcle	_	4	aux:cnd	_	_
3	сонензэ	сон	PRON	Pron	Case=Dat|Number=Sing|Person=3|PronType=Prs	4	obl:agent	_	GTtags=Pers,Sg3,Dat
4	кирдевель	кирдемс	VERB	V	Mood=Sub|Number[subj]=Sing|Person[subj]=3	0	root	_	GTtags=TV,Conj,ScSg3
5	те	те	PRON	Pron	Case=Nom|Definite=Ind|Number=Sing|PronType=Dem	6	det	_	GTtags=Dem,Sg,Nom,Indef
6	сэредьксэсь	сэредькс	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Def|SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:agent	color:blue
1	Эно	эно	ADV	Pcle	AdvType=Mod	2	discourse	_	CGdephead=#1-&gt;1|CGdeprel=@X|GTtags=Epist
2	лиседе	лисемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=2	0	root	_	CGdephead=#2-&gt;2|CGdeprel=@-FADVL-partitive&gt;|GTtags=SP,Abl,Indef
3	ушов	ушо	NOUN	N	Case=Lat|Definite=Ind|Number=Plur,Sing	2	obl:lmod	_	CGdephead=#3-&gt;5|CGdeprel=@&gt;N|GTtags=SP,Lat,Indef
4	—	—	PUNCT	PUNCT	_	6	punct	_	CGdephead=#4-&gt;4|CGdeprel=@CLB|GTtags=PUNCT
5	эйкакштненень	эйкакш	NOUN	N	Case=Dat|Definite=Def|Number=Plur	6	obl:agent	_	CGdephead=#5-&gt;5|CGdeprel=@ADVL|GTtags=Pl,Dat,Def
6	лексемс	лексемс	VERB	V	VerbForm=Inf	2	conj	_	CGdephead=#6-&gt;6|CGdeprel=@IMV|GTtags=IV,Inf
7	а	а	AUX	Aux	Polarity=Neg	8	aux:neg	_	CGdephead=#7-&gt;7|CGdeprel=@NEG&gt;|GTtags=Neg
8	мейсэ	мезе	PRON	Pron	Case=Ine|Definite=Ind|Number=Plur,Sing|PronType=Int	6	obl	_	CGdephead=#8-&gt;8|CGdeprel=@X|GTtags=Interr,SP,Ine,Indef|SpaceAfter=No
9	...	...	PUNCT	CLB	_	2	punct	_	CGdephead=#9-&gt;9|CGdeprel=@CLB|GTtags=CLB

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obl:agent	color:blue
1	Вечкевсть	вечкевемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past	0	root	_	GTtags=IV,Ind,Prt1,ScPl3
2	Пальконень	Палько	PROPN	N	Case=Dat|Definite=Ind|NameType=Giv|Number=Plur,Sing	1	obl:agent	_	GTtags=Prop,Sem/Sur,SP,Dat,Indef
3	салдатнэ	салдат	NOUN	N	Case=Nom|Definite=Def|Number=Plur	1	nsubj	_	GTtags=Pl,Nom,Def|SpaceAfter=No
4	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


