---
layout: base
title:  'Statistics of flat:name in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-flat.html">flat</a></tt>.

32 nodes (0%) are attached to their parents as `flat:name`.

32 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.09375.

The following 4 pairs of parts of speech are connected with `flat:name`: <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (18; 56% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (6; 19% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (5; 16% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (3; 9% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Эзь	а	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	2	aux	_	CGdephead=#1-&gt;0|CGdeprel=@FAUX|CGdephead=#1-&gt;0|CGdeprel=@FAUX|GTtags=Aux,Neg,Ind,Prt1,ScSg3
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
1	—	—	PUNCT	PUNCT	_	4	punct	_	_
2	Эх	эх	INTJ	Interj	_	4	discourse	_	GTtags=|SpaceAfter=No
3	,	,	PUNCT	CLB	_	2	punct	_	_
4	жаль	жаль	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef
5	Каряз	каряз	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Indef
6	Иван	Иван	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	5	flat:name	_	GTtags=Prop,Ant_Mal,Sg,Nom,Indef|SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat:name	color:blue
1	Чавсь	чавомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=TV,Ind,Prt1,ScSg3|1q-1:1.2,3|Gloss=chime
2	чова	чова	ADJ	A	_	3	amod	_	GTtags=|Gloss=high-pitched
3	баяга	баяга	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	1	obj	_	GTtags=Sg,Nom,Indef|Gloss=bell
4	—	—	PUNCT	PUNCT	_	8	punct	_	_
5	светой	светой	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	6	amod	_	GTtags=Sg,Nom,Indef|Gloss=holy
6	ведень	ведь	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	8	obl	_	GTtags=SP,Gen,Indef|Gloss=water
7	кис	кис	ADP	Po	AdpType=Post	6	case	_	GTtags=Po|Gloss=for
8	тердсь	тердемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	1	conj	_	GTtags=TV,Ind,Prt1,ScSg3|1q-1:1.2,3|call
9	Нал	нал	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	11	nmod	_	GTtags=Sg,Nom,Indef
10	велень	веле	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	9	flat:name	_	GTtags=Sem/Plc,SP,Gen,Indef|Gloss=village
11	ломанть	ломань	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	8	obj	_	GTtags=Pl,Nom,Indef|Gloss=people|SpaceAfter=No
12	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


