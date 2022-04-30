---
layout: base
title:  'Statistics of advmod:tmod in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `advmod:tmod`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-advmod.html">advmod</a></tt>.
There are also 9 other language-specific subtypes of `advmod`: <tt><a href="mdf_jr-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="mdf_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="mdf_jr-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="mdf_jr-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="mdf_jr-dep-advmod-freq.html">advmod:freq</a></tt>, <tt><a href="mdf_jr-dep-advmod-lfrom.html">advmod:lfrom</a></tt>, <tt><a href="mdf_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="mdf_jr-dep-advmod-lto.html">advmod:lto</a></tt>, <tt><a href="mdf_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>.

89 nodes (3%) are attached to their parents as `advmod:tmod`.

68 instances of `advmod:tmod` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 4 pairs of parts of speech are connected with `advmod:tmod`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (74; 83% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (11; 12% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 advmod:tmod	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 advmod:tmod	color:blue
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


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:tmod	color:blue
1	Митроха	Митроха	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	nmod	_	GTtags=Prop,Sg,Nom,Indef
2	атянь	атя	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	1	flat:name	_	GTtags=SP,Gen,Indef
3	сельмоц	сельме	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj:cop	_	GTtags=Sg,Nom,PxSg3
4	нинге	нинге	ADV	Adv	AdvType=Tim	5	advmod:tmod	_	GTtags=Sem/Time
5	оржа	оржа	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef
6	и	и	CCONJ	CC	_	9	cc	_	_
7	кядец	кядь	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	nsubj:cop	_	GTtags=Sg,Nom,PxSg3
8	аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	9	aux:neg	_	GTtags=Aux,Neg
9	трнаты	трнатомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	5	conj	_	GTtags=Ind,Prs,ScSg3|SpaceAfter=No
10	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


