---
layout: base
title:  'Statistics of obl:cmp in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `obl:cmp`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-obl.html">obl</a></tt>.
There are also 6 other language-specific subtypes of `obl`: <tt><a href="mdf_jr-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="mdf_jr-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="mdf_jr-dep-obl-freq.html">obl:freq</a></tt>, <tt><a href="mdf_jr-dep-obl-inst.html">obl:inst</a></tt>, <tt><a href="mdf_jr-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="mdf_jr-dep-obl-tmod.html">obl:tmod</a></tt>.

17 nodes (0%) are attached to their parents as `obl:cmp`.

15 instances of `obl:cmp` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23529411764706.

The following 8 pairs of parts of speech are connected with `obl:cmp`: <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (4; 24% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-ADP.html">ADP</a></tt> (3; 18% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (3; 18% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (2; 12% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (2; 12% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:cmp	color:blue
1	Ёмластокиге	ёмла	ADJ	A	Case=Ela|Clitic=AddKige|Definite=Ind|Number=Plur,Sing	5	obl:tmod	_	GTtags=SP,Ela,Indef,Clt/Kige
2	Миша	Миша	PROPN	N	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	5	nsubj:cop	_	GTtags=Prop,Sem/Mal,Sg,Nom,Indef
3	ялгань	ялга	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	5	obl:cmp	_	GTtags=SP,Gen,Indef
4	коряс	коряс	ADP	Adp	_	3	case	_	_
5	сятяволь	сятяв	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	GTtags=Sg,Nom,Indef,Clt/Cop,Prt2,ScSg3|SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:cmp	color:blue
1	Синь	сон	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Pl3,Nom
2	эряйхть	эрямс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|VerbForm=Fin	0	root	_	GTtags=Ind,Prs,ScPl3
3	корязонк	коряс	ADP	Adp	Case=Ill|Number[psor]=Plur|Person[psor]=1	5	obl:cmp	_	GTtags=Ill,PxPl1
4	сяда	сяда	ADV	Adv	AdvType=Deg	5	advmod:deg	_	GTtags=Deg
5	цебярьста	цебярьста	ADV	Adv	AdvType=Man	2	advmod:mmod	_	GTtags=Manner|SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:cmp	color:blue
1	Фкя	фкя	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	2	nummod	_	GTtags=Card,Sg,Nom,Indef
2	урокта	урок	NOUN	N	Case=Abl|Definite=Ind|Number=Plur,Sing	3	obl:cmp	_	GTtags=SP,Abl,Indef
3	меле	меле	ADV	Adv	AdvType=Tim	5	advmod:tmod	_	_
4	учительскяи	учительскяй	NOUN	N	Case=Lat|Definite=Ind|Number=Plur,Sing	5	obl:lmod	_	GTtags=SP,Lat,Indef
5	сувасть	сувамс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Past	0	root	_	GTtags=IV,Ind,Prt1,ScPl3
6	кафцьке	кафцьке	DET	Det	NumType=Sets|PronType=Tot	7	det	_	GTtags=Coll,Sg,Nom,Indef
7	стирнятне	стирь	NOUN	N	Case=Nom|Definite=Def|Degree=Dim|Number=Plur	5	nsubj	_	GTtags=Pl,Nom,Def|SpaceAfter=No
8	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


