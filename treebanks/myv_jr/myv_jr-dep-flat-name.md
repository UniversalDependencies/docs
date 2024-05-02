---
layout: base
title:  'Statistics of flat:name in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-flat.html">flat</a></tt>.

37 nodes (0%) are attached to their parents as `flat:name`.

37 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08108108108108.

The following 4 pairs of parts of speech are connected with `flat:name`: <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (18; 49% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (7; 19% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (6; 16% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (6; 16% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Эзь	а	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	2	aux:neg	_	CGdephead=#1-&gt;0|CGdeprel=@FAUX|CGdephead=#1-&gt;0|CGdeprel=@FAUX|GTtags=Aux,Neg,Ind,Prt1,ScSg3
2	маштово	маштовомс	VERB	V	Connegative=Yes	0	root	_	CGdephead=#2-&gt;1|CGdeprel=@IMV|CGdephead=#2-&gt;1|CGdeprel=@IMV|GTtags=Der/OvOms,V,ConNeg
3	кочкамс	кочкамс	VERB	V	VerbForm=Inf	2	ccomp	_	CGdephead=#3-&gt;1|CGdeprel=@IMV|CGdephead=#3-&gt;1|CGdeprel=@IMV|GTtags=Inf
4	Петя	Петя	PROPN	N	Case=Nom|Definite=Ind|Number=Sing	3	obj	_	CGdephead=#4-&gt;1|CGdeprel=@&lt;SUBJ|CGdephead=#4-&gt;1|CGdeprel=@&lt;SUBJ|GTtags=Prop,Sg,Nom,Indef
5	Смиткак	Смит	PROPN	N	Case=Nom|Clitic=Add|Definite=Ind|Number=Sing	4	flat:name	_	CGdephead=#5-&gt;1|CGdeprel=@&lt;SUBJ|CGdephead=#5-&gt;1|CGdeprel=@&lt;SUBJ|GTtags=Prop,Sg,Nom,Indef,Clt/Add|SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	CGdephead=#6-&gt;5|CGdeprel=@X|CGdephead=#6-&gt;5|CGdeprel=@X|GTtags=CLB
7	Марья	Марья	PROPN	N	Case=Nom|Definite=Ind|Number=Sing	4	conj	_	CGdephead=#7-&gt;8|CGdeprel=@&gt;N|CGdephead=#7-&gt;8|CGdeprel=@&gt;N|GTtags=Prop,Sg,Nom,Indef
8	Браунгак	Браун	PROPN	N	Case=Nom|Clitic=Add|Definite=Ind|Number=Sing	7	flat:name	_	CGdephead=#8-&gt;1|CGdeprel=@VOC|CGdephead=#8-&gt;1|CGdeprel=@VOC|GTtags=Prop,Sg,Nom,Indef,Clt/Add|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	CGdephead=#9-&gt;1|CGdeprel=@X|CGdephead=#9-&gt;1|CGdeprel=@X|GTtags=CLB

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	—	—	PUNCT	CLB	_	3	punct	_	_
2	Иля	а	AUX	AUX	Mood=Proh|Number[subj]=Sing|Person[subj]=2	3	aux:neg	_	GTtags=Proh,ScSg2
3	сова	совамс	VERB	V	Connegative=Yes	0	root	_	GTtags=IV,ConNeg|SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	Рамко	Рамко	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	3	vocative	_	GTtags=Prop,Ant_Mal,Sg,Nom,Indef
6	лелякай	лелякай	NOUN	N	Derivation=VocKaj	5	flat:name	_	GTtags=Sem/Kin,Der/кай,Voc|SpaceAfter=No
7	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	Эскели	эскелямс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,ScSg3|2q:1.1,2
2	Кечай	Кечай	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	1	nsubj	_	GTtags=Ant_Mal,Sg,Nom,Indef
3	Кокша	Кокша	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	5	nmod	_	GTtags=Sg,Nom,Indef
4	пандонть	пандо	NOUN	N	Case=Gen|Definite=Def|Number=Sing	3	flat:name	_	GTtags=Sem/Inanim_Cnt,Sg,Gen,Def
5	ёнов	ён	NOUN	N	Case=Lat|Definite=Ind|Number=Plur,Sing	1	obl	_	GTtags=Relator,SP,Lat,Indef
6	эрязасто	эрязасто	ADV	Adv	AdvType=Man|Case=Ela	1	advmod	_	GTtags=Manner,Ela|SpaceAfter=No
7	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


