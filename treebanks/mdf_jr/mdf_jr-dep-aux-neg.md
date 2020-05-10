---
layout: base
title:  'Statistics of aux:neg in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `aux:neg`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-aux.html">aux</a></tt>.
There are also 1 other language-specific subtypes of `aux`: <tt><a href="mdf_jr-dep-aux-opt.html">aux:opt</a></tt>.

25 nodes (2%) are attached to their parents as `aux:neg`.

25 instances of `aux:neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04.

The following 5 pairs of parts of speech are connected with `aux:neg`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (18; 72% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (3; 12% instances), <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (2; 8% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 4% instances), <tt><a href="mdf_jr-pos-DET.html">DET</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux:neg	color:blue
1	А	а	CCONJ	CC	_	2	cc	_	_
2	касан	касомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	0	root	_	_
3	пяк	пяк	ADV	Adv	AdvType=Deg	4	advmod:deg	_	_
4	савор	савор	ADV	Adv	_	2	advmod	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	9	punct	_	_
6	нинге	нинге	ADV	Adv	AdvType=Tim	9	advmod:tmod	_	_
7	школавга	школа	NOUN	N	Case=Lat|Clitic=AddGA|Definite=Ind|Number=Plur,Sing	9	obl:lmod	_	_
8	аф	аф	AUX	Aux	Polarity=Neg	9	aux:neg	_	_
9	якан	якамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	2	conj	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux:neg	color:blue
1	Аф	аф	AUX	Pcle	Polarity=Neg	2	aux:neg	_	GTtags=Neg
2	кържа	кржа	ADV	Adv	Style=Ped	4	obj	_	GTtags=Sg,Nom,Indef|ModernForm=кржа
3	книгада	книга	NOUN	N	Case=Abl|Definite=Ind|Number=Plur,Sing	2	nmod	_	GTtags=SP,Abl,Indef
4	каземе	каземс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=1|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScPl1
5	минь	мон	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	GTtags=Pers,Pl1,Nom
6	ломаттненди	ломань	NOUN	N	Case=Dat|Definite=Def|Number=Plur	4	obl	_	GTtags=Pl,Dat,Def|SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux:neg	color:blue
1	Аф	аф	AUX	_	Polarity=Neg	2	aux:neg	_	GTtags=Neg
2	Петя	Петя	PROPN	_	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	9	nsubj	_	GTtags=Prop,Sem/Mal,Sg,Nom,Indef
3	Смит	Смит	PROPN	_	Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	2	flat	_	GTtags=Prop,Sem/Sur,Sg,Nom,Indef|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	аф	аф	AUX	_	Polarity=Neg	6	aux:neg	_	GTtags=Neg
6	Марья	Марья	PROPN	_	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	2	conj	_	GTtags=Prop,Sem/Fem,Sg,Nom,Indef
7	Браун	Браун	PROPN	_	Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	6	flat	_	GTtags=Prop,Sem/Sur,Sg,Nom,Indef
8	ашесть	аш	AUX	_	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Polarity=Neg|Tense=Past|VerbType=Aux	9	aux:neg	_	GTtags=Aux,Neg,Ind,Prt1,ScPl3
9	кочкав	кочкавомс	VERB	_	Connegative=Yes|Valency=1	0	root	_	GTtags=IV,ConNeg|SpaceAfter=No
10	.	.	PUNCT	CLB	_	9	punct	_	_

~~~


