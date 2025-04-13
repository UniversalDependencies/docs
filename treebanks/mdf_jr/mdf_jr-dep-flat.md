---
layout: base
title:  'Statistics of flat in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="mdf_jr-dep-flat-name.html">flat:name</a></tt>.

3 nodes (0%) are attached to their parents as `flat`.

3 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `flat`: <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (2; 67% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat	color:blue
1	Аф	аф	AUX	_	Polarity=Neg	2	aux:neg	_	GTtags=Neg
2	Петя	Петя	PROPN	_	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	9	nsubj	_	GTtags=Prop,Sem/Mal,Sg,Nom,Indef
3	Смит	Смит	PROPN	_	Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	2	flat	_	GTtags=Prop,Sem/Sur,Sg,Nom,Indef|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	аф	аф	AUX	_	Polarity=Neg	6	aux:neg	_	GTtags=Neg
6	Марья	Марья	PROPN	_	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	2	conj	_	GTtags=Prop,Sem/Fem,Sg,Nom,Indef
7	Браун	Браун	PROPN	_	Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	6	flat	_	GTtags=Prop,Sem/Sur,Sg,Nom,Indef
8	ашесть	аш	AUX	_	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	9	aux	_	GTtags=Aux,Neg,Ind,Prt1,ScPl3
9	кочкав	кочкавомс	VERB	_	Connegative=Yes	0	root	_	GTtags=IV,ConNeg|SpaceAfter=No
10	.	.	PUNCT	CLB	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	14-це	14	ADJ	A	Case=Nom|Number=Sing|NumForm=Digit|NumType=Ord	0	root	_	CGdephead=#1-&gt;0|CGdeprel=@X|GTtags=Arab,Ord,Err/Orth,Arab,Sg,Nom
2	октябрьста	октябрь	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	1	flat	_	CGdephead=#2-&gt;12|CGdeprel=@ADVL&gt;|GTtags=SP,Ela,Indef
3	ули	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3	1	cop	_	CGdephead=#3-&gt;4|CGdeprel=@&gt;N|GTtags=Der/NomAg,N,Sg,Nom,Indef
4	сёксень	сёксе	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	5	nmod	_	CGdephead=#4-&gt;5|CGdeprel=@&gt;N|GTtags=SP,Gen,Indef
5	праздник	праздник	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	1	nsubj:cop	_	CGdephead=#5-&gt;7|CGdeprel=@&gt;N|GTtags=Sg,Nom,Indef
6	—	—	PUNCT	PUNCT	_	7	punct	_	CGdephead=#6-&gt;7|CGdeprel=@X|GTtags=PUNCT
7	Покрав	покра	NOUN	N	Case=Lat|Definite=Ind|Number=Plur,Sing	5	appos	_	CGdephead=#7-&gt;12|CGdeprel=@ADVL&gt;|GTtags=SP,Lat,Indef|SpaceAfter=No
8	.	_	PUNCT	_	_	1	punct	_	_

~~~


