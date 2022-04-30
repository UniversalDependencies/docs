---
layout: base
title:  'Statistics of aux:neg in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `aux:neg`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-aux.html">aux</a></tt>.
There are also 4 other language-specific subtypes of `aux`: <tt><a href="mdf_jr-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="mdf_jr-dep-aux-nec.html">aux:nec</a></tt>, <tt><a href="mdf_jr-dep-aux-opt.html">aux:opt</a></tt>, <tt><a href="mdf_jr-dep-aux-q.html">aux:q</a></tt>.

68 nodes (2%) are attached to their parents as `aux:neg`.

67 instances of `aux:neg` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05882352941176.

The following 7 pairs of parts of speech are connected with `aux:neg`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (45; 66% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (10; 15% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (5; 7% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (4; 6% instances), <tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (2; 3% instances), <tt><a href="mdf_jr-pos-DET.html">DET</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 1% instances).


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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:neg	color:blue
1	Тя	тя	DET	Det	Case=Nom|Number=Sing|PronType=Dem	4	det	_	GTtags=Dem,Sg,Nom
2	аф	аф	AUX	Pcle	Polarity=Neg	3	aux:neg	_	GTtags=Neg
3	оцю	оцю	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	4	amod	_	GTtags=Sg,Nom,Indef
4	статьяняса	статья	NOUN	N	Case=Ine|Definite=Ind|Derivation=Dimin|Number=Plur,Sing	7	obl:inst	_	GTtags=Der/Dimin,N,SP,Ine,Indef
5	мон	мон	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	GTtags=Pers,Sg1,Nom
6	аф	аф	AUX	Pcle	Polarity=Neg	7	aux:neg	_	GTtags=Neg
7	тяряфнян	тяряфнемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres|Valency=2	0	root	_	GTtags=TV,Ind,Prs,ScSg1
8	киньге	кивок	PRON	Pron	Case=Gen|Number=Plur,Sing|PronType=Ind	9	obj	_	GTtags=Indef,SP,Gen
9	дивандафтомс	дивандафтомс	VERB	V	Valency=2|VerbForm=Inf	7	xcomp	_	GTtags=TV,Inf|SpaceAfter=No
10	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


