---
layout: base
title:  'Statistics of nsubj:cop in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `nsubj:cop`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="mdf_jr-dep-nsubj-pass.html">nsubj:pass</a></tt>.

31 nodes (2%) are attached to their parents as `nsubj:cop`.

27 instances of `nsubj:cop` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.90322580645161.

The following 8 pairs of parts of speech are connected with `nsubj:cop`: <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (17; 55% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (6; 19% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (3; 10% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:cop	color:blue
1	Ня	ня	PRON	Pron	_	2	det	_	_
2	стирнятне	стирь	NOUN	N	Case=Nom|Definite=Def|Derivation=Dimin|Number=Plur	3	nsubj:cop	_	GTtags=Pl,Nom,Def
3	малат	мала	ADJ	A	Case=Nom|Definite=Ind|Number=Plur	0	root	_	GTtags=Pl,Nom,Indef
4	Веряскинонди	Веряскин	PROPN	N	Case=Dat|Definite=Ind|NameType=Sur|Number=Plur,Sing	3	nmod	_	GTtags=Prop,SP,Dat,Indef|SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	_
6	сяс	сяс	ADV	Adv	_	8	mark	_	_
7	самозост	самозост	VERB	V	Case=Ill|Derivation=Vnoun|Number=Plur,Sing|Number[psor]=Plur|Person[psor]=3|Valency=1	8	advcl	_	GTtags=IV,Der/NomAct,SP,Ill,PxPl3
8	кенярдсь	кенярдемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Prt1|Valency=1	3	advcl	_	GTtags=IV,Ind,Prt1,ScSg3|SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:cop	color:blue
1	Семён	Семён	PROPN	N	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	2	nsubj:cop	_	GTtags=Prop,Sg,Nom,Indef
2	жаднай	жаднай	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef
3	ярмакненди	ярмак	NOUN	N	Case=Dat|Definite=Def|Number=Plur	2	nmod	_	GTtags=Pl,Dat,Def|SpaceAfter=No
4	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nsubj:cop	color:blue
1	Сёксень	сёксе	NOUN	N	Case=Gen|Definite=Ind|Number=Plur,Sing	2	nmod	_	GTtags=SP,Gen,Indef
2	вирсь	вирь	NOUN	N	Case=Nom|Definite=Def|Number=Sing	5	nsubj:cop	_	GTtags=Sg,Nom,Def
3	ульсь	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	5	cop	_	GTtags=Ind,Prt1,ScSg3
4	пяк	пяк	ADV	Adv	AdvType=Deg	5	advmod:deg	_	GTtags=Deg
5	мазы	мази	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
6	,	,	PUNCT	CLB	_	10	punct	_	_
7	кодама	кодама	ADJ	A	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	9	amod	_	GTtags=Interr,Sg,Nom,Indef
8	аньцек	аньцек	ADV	Adv	_	7	advmod	_	_
9	краскат	краска	NOUN	N	Case=Nom|Definite=Ind|Number=Plur	10	nsubj:cop	_	GTtags=Pl,Nom,Indef
10	сонь	сон	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	5	conj	_	GTtags=Pers,Sg3,Gen
11	эсонза	эса	ADP	Adp	Case=Ine|Number[psor]=Sing|Person[psor]=3	10	case	_	GTtags=Ine,PxSg3
12	ашельхть	аш	AUX	V	Case=Loc|Mood=Ind|Number[subj]=Plur|Person[subj]=3|Polarity=Neg|Tense=Prt2|VerbType=Aux	10	cop	_	GTtags=Aux,Neg,Loc,Ind,Prt2,ScPl3|SpaceAfter=No
13	.	.	PUNCT	CLB	_	5	punct	_	_

~~~


