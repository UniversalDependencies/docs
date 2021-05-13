---
layout: base
title:  'Statistics of aux:neg in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `aux:neg`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-aux.html">aux</a></tt>.
There are also 2 other language-specific subtypes of `aux`: <tt><a href="mdf_jr-dep-aux-nec.html">aux:nec</a></tt>, <tt><a href="mdf_jr-dep-aux-opt.html">aux:opt</a></tt>.

58 nodes (2%) are attached to their parents as `aux:neg`.

58 instances of `aux:neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06896551724138.

The following 6 pairs of parts of speech are connected with `aux:neg`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (39; 67% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (9; 16% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (4; 7% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (3; 5% instances), <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (2; 3% instances), <tt><a href="mdf_jr-pos-DET.html">DET</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux:neg	color:blue
1	А	а	CCONJ	CC	_	2	cc	_	_
2	касан	касомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	0	root	_	_
3	пяк	пяк	ADV	Adv	AdvType=Deg	4	advmod:deg	_	_
4	савор	савор	ADV	Adv	_	2	advmod:mmod	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	9	punct	_	_
6	нинге	нинге	ADV	Adv	AdvType=Tim	9	advmod:tmod	_	_
7	школавга	школа	NOUN	N	Case=Lat|Clitic=AddGA|Definite=Ind|Number=Plur,Sing	9	obl:lto	_	_
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
4	каземе	каземс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=1|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScPl1
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
1	Аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	2	aux:neg	_	GTtags=Aux,Neg
2	сиволькс	сиволь	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	3	obl	_	GTtags=SP,Tra,Indef
3	ащи	ащемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,ScSg3|SpaceAfter=No
4	,	,	PUNCT	CLB	_	7	punct	_	_
5	пяк	пяк	ADV	Adv	AdvType=Deg	7	advmod:deg	_	GTtags=Deg
6	ни	ни	ADV	Adv	AdvType=Tim	5	advmod:tmod	_	GTtags=Sem/Time
7	калгода	калгода	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	3	conj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
8	,	,	PUNCT	CLB	_	9	punct	_	_
9	марявсь	марявомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	3	conj	_	GTtags=Ind,Prt1,ScSg3
10	мезе-бди	мезе-бди	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	9	nsubj	_	GTtags=Indef,Sg,Nom
11	шуфтонь	шуфта	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	10	nmod	_	GTtags=SP,Gen,Indef|SpaceAfter=No
12	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


