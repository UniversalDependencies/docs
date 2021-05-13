---
layout: base
title:  'Statistics of advmod:tmod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `advmod:tmod`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-advmod.html">advmod</a></tt>.
There are also 10 other language-specific subtypes of `advmod`: <tt><a href="myv_jr-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="myv_jr-dep-advmod-comp.html">advmod:comp</a></tt>, <tt><a href="myv_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="myv_jr-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="myv_jr-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="myv_jr-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="myv_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="myv_jr-dep-advmod-lmp.html">advmod:lmp</a></tt>, <tt><a href="myv_jr-dep-advmod-lto.html">advmod:lto</a></tt>, <tt><a href="myv_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>.

417 nodes (2%) are attached to their parents as `advmod:tmod`.

338 instances of `advmod:tmod` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1726618705036.

The following 10 pairs of parts of speech are connected with `advmod:tmod`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (366; 88% instances), <tt><a href="myv_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (13; 3% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (13; 3% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (10; 2% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (7; 2% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="myv_jr-pos-NUM.html">NUM</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="myv_jr-pos-DET.html">DET</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod:tmod	color:blue
1	―	―	PUNCT	PUNCT	_	3	punct	_	_
2	Ох	ох	INTJ	Interj	_	3	discourse	_	_
3	кулан	куломс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScSg1|SpaceAfter=No
4	!	!	PUNCT	CLB	_	3	punct	_	_
5	―	―	PUNCT	PUNCT	_	7	punct	_	_
6	таго	таго	ADV	Adv	AdvType=Tim	7	advmod:tmod	_	GTtags=Temp
7	сергедсь	серьгедемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=2	3	parataxis	_	GTtags=TV,Ind,Prt1,ScSg3
8	Люба	Люба	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Fem|NameType=Giv|Number=Sing	7	nsubj	_	GTtags=Prop,Ant_Fem,Sg,Nom,Indef
9	а	а	AUX	Pcle	Polarity=Neg	10	aux:neg	_	GTtags=Neg
10	паро	паро	ADJ	A	_	11	amod	_	_
11	вайгельсэ	вайгель	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	7	obl	_	GTtags=SP,Ine,Indef|SpaceAfter=No
12	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:tmod	color:blue
1	Зярдо	зярдо	ADV	Adv	AdvType=Tim|PronType=Int	4	advmod:tmod	_	GTtags=Interr,Sem/Time
2	уш	уш	ADV	Adv	AdvType=Tim	1	advmod:tmod	_	GTtags=Sem/Time
3	ансяк	ансяк	ADV	Adv	_	4	advmod:foc	_	_
4	сы	самс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,ScSg3
5	те	те	DET	Det	Case=Nom|Definite=Ind|Number=Sing	6	det	_	GTtags=Sg,Nom,Indef
6	шкась	шка	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sg,Nom,Def|SpaceAfter=No
7	,	,	PUNCT	CLB	_	9	punct	_	_
8	кода	кода	SCONJ	CS	AdvType=Tim	9	mark	_	GTtags=Sem/Temp
9	туить	туемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|Valency=1	6	acl:relcl	_	GTtags=IV,Ind,Prs,ScPl3
10	Цёраксонь	цёракс	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	11	nmod	_	GTtags=Sem/Inanim,Sem/NCnt,SP,Gen,Indef
11	кирдав	кирда	NOUN	N	Case=Lat|Definite=Ind|Number=Plur,Sing	9	obl	_	GTtags=Sem/Inanim_Cnt,SP,Lat,Indef|SpaceAfter=No
12	...	...	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:tmod	color:blue
1	Тон	тон	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	GTtags=Pers,Sg2,Nom
2	сестэ	сестэ	ADV	Adv	Case=Ela	3	advmod:tmod	_	GTtags=Ela
3	председателькс	председатель	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	0	root	_	GTtags=SP,Tra,Indef
4	ульнить	ульнемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=2|Tense=Past|Valency=1	3	cop	_	GTtags=IV,Ind,Prt1,ScSg2|SpaceAfter=No
5	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


