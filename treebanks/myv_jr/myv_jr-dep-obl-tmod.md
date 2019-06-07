---
layout: base
title:  'Statistics of obl:tmod in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="myv_jr-dep-obl-agent.html">obl:agent</a></tt>.

35 nodes (0%) are attached to their parents as `obl:tmod`.

30 instances of `obl:tmod` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25714285714286.

The following 8 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (15; 43% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (12; 34% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (3; 9% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="myv_jr-pos-ADP.html">ADP</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obl:tmod	color:blue
1	Громовдо	Громов	PROPN	N	Animacy=Hum|Case=Abl|Definite=Ind|Gender=Masc|NameType=Sur|Number=Plur,Sing	2	nmod:comp	_	GTtags=Prop,Sur_Mal,SP,Abl,Indef
2	мейле	мейле	ADV	Adv	AdvType=Tim	5	obl:tmod	_	GTtags=Temp
3	сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	GTtags=Pers,Sg3,Nom
4	кеместэ	кеместэ	ADV	Adv	_	5	advmod	_	_
5	кундась	кундамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScSg3
6	командирэнь	командир	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	7	nmod	_	GTtags=SP,Gen,Indef
7	тевентень	тев	NOUN	N	Case=Dat|Definite=Def|Number=Sing	5	obl	_	GTtags=Sg,Dat,Def|SpaceAfter=No
8	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:tmod	color:blue
1	Недлячистэ	недлячи	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	2	obl:tmod	_	GTtags=SP,Ela,Indef
2	пурназ	пурнамс	VERB	V	Derivation=Ozj|Valency=2|VerbForm=Conv	0	root	_	GTtags=TV,Der/Озь,Ger
3	ель	оль	AUX	V	Number[subj]=Sing|Person[subj]=3|Tense=Prt2	2	cop	_	GTtags=Aux,Prt2,ScSg3
4	велень	веле	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	5	nmod	_	GTtags=Sem/Plc,SP,Gen,Indef
5	промкс	промкс	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	2	nsubj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
6	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obl:tmod	color:blue
1	Омбоце	омбоце	ADJ	Num	NumType=Ord	2	amod	_	GTtags=Ord
2	недля	недля	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	5	obl:tmod	_	GTtags=Sg,Nom,Indef
3	Дёбаень	Дёбай	PROPN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	4	nmod	_	GTtags=Sem/Sur,Prop,SP,Gen,Indef
4	Микол	Микол	PROPN	N	Animacy=Hum|Case=Nom|Definite=Ind|Gender=Masc|NameType=Giv|Number=Sing	5	nsubj	_	GTtags=Ant_Mal,Prop,Sg,Nom,Indef
5	тайгасо	тайга	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	0	root	_	GTtags=SP,Ine,Indef|SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


