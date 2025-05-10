---
layout: base
title:  'Statistics of advmod in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: <tt><a href="koi_uh-dep-advmod-deg.html">advmod:deg</a></tt>.

83 nodes (8%) are attached to their parents as `advmod`.

64 instances of `advmod` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.08433734939759.

The following 11 pairs of parts of speech are connected with `advmod`: <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (67; 81% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (4; 5% instances), <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="koi_uh-pos-ADV.html">ADV</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="koi_uh-pos-PRON.html">PRON</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="koi_uh-pos-ADV.html">ADV</a></tt>-<tt><a href="koi_uh-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="koi_uh-pos-DET.html">DET</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="koi_uh-pos-DET.html">DET</a></tt>-<tt><a href="koi_uh-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="koi_uh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="koi_uh-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="koi_uh-pos-NUM.html">NUM</a></tt>-<tt><a href="koi_uh-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod	color:blue
1	Быд	быд	DET	_	Case=Nom|Number=Sing|PronType=Tot	2	det	_	GTtags=Sg,Nom
2	лaдopcянь	лaдopcянь	NOUN	_	Case=Egr|Number=Sing	6	obl	_	GTtags=Sg,Egr
3	Ворошилов	Ворошилов	PROPN	_	Animacy=Hum|Case=Nom|NameType=Sur|Number=Sing	6	obl	_	GTtags=Prop,Sem/Sur,Sem/Mal,Sg,Nom
4	дынӧ	дынӧ	ADP	_	AdpType=Post|AdvType=Loc|Case=Ill|Number=Sing	3	case	_	GTtags=Po,Spat,Sg,Ill
5	ӧні	ӧні	ADV	Adv	AdvType=Tim	6	advmod	_	_
6	кoтӧpтіcӧ	кoтӧpтіcӧ	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt1,Pl3
7	oтиp	oтиp	NOUN	_	Animacy=Hum|Case=Nom|Number=Sing	6	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 8 advmod	color:blue
1	Сылӧ	сія	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	4	obl	_	GTtags=Pers,Sg3,Dat
2	коліс	ковны	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	aux	_	GTtags=Ind,Prt1,Sg3
3	басӧка	басӧка	ADV	_	_	4	advmod	_	_
4	лӧсьӧтны	лӧсьӧтны	VERB	_	VerbForm=Inf	0	root	_	GTtags=Inf
5	юрсисӧ	юрси	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obj	_	GTtags=Sg,Acc,PxSg3|SpaceAfter=No
6	,	,	PUNCT	_	_	14	punct	_	_
7	но	но	CCONJ	_	_	14	cc	_	_
8	мылякӧ	мылякӧ	ADV	_	Definite=Ind	14	advmod	_	GTtags=Indef
9	сія	сія	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	det	_	GTtags=Pers,Sg3,Nom
10	лунӧ	лун	NOUN	_	Case=Ill|Number=Sing	14	obl	_	GTtags=Sg,Ill
11	сылӧ	сія	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	14	obl	_	GTtags=Pers,Sg3,Dat
12	эз	оз	AUX	_	Person=3|Polarity=Neg|Tense=Past|VerbType=Aux	14	aux	_	GTtags=Prt1,3
13	вӧв	вӧвны	AUX	_	Connegative=Yes	14	cop	_	GTtags=ConNeg
14	охота	охота	NOUN	_	Case=Nom|Number=Sing	4	conj	_	GTtags=Sg,Nom
15	сійӧ	сія	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	16	obj	_	GTtags=Pers,Sg3,Acc
16	керны	керны	VERB	_	VerbForm=Inf	14	advcl	_	GTtags=Inf|SpaceAfter=No
17	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advmod	color:blue
1	Мортлӧ	морт	NOUN	N	Animacy=Anim|Case=Dat|Number=Sing	4	obl	_	GTtags=N,Sem/Ani,Sg,Dat
2	пыр	пыр	ADV	Adv	AdvType=Tim	4	advmod	_	GTtags=Adv
3	овлӧ	овлыны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	cop	_	GTtags=V,IV,Ind,Prs,Sg3
4	долыт	долыт	ADJ	A	_	0	root	_	GTtags=A|SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	GTtags=CLB
6	кӧр	кӧр	ADV	Adv	AdvType=Tim	8	mark	_	GTtags=Adv
7	сія	сія	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	GTtags=Pron,Pers,Sg3,Nom
8	локтас	локны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut	4	advcl	_	GTtags=V,Ind,Fut,Sg3
9	сэтшӧм	сэтшӧм	ADJ	Adn	PronType=Dem	10	amod	_	GTtags=Adn,Dem
10	пельӧсокӧ	пельӧс	NOUN	N	Case=Ill|Degree=Dim|Number=Sing	8	obl	_	GTtags=N,Der/Ок,Der/Dimin,N,Sg,Ill|SpaceAfter=No
11	,	,	PUNCT	CLB	_	13	punct	_	GTtags=CLB
12	кӧда	кӧда	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	13	nsubj	_	GTtags=Pron,Rel,Sg,Nom
13	чужтӧ	чужтыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	10	acl:relcl	_	GTtags=V,TV,Ind,Prs,Sg3
14	памятяс	памятяс	NOUN	_	_	13	obl	_	_
15	приятнӧй	приятнӧй	ADJ	A	_	16	amod	_	GTtags=A
16	касьтылӧм	касьтылӧм	NOUN	N	Animacy=Inan|Case=Nom|Number=Sing	13	obj	_	GTtags=N,Sem/Inanim,Sg,Nom|SpaceAfter=No
17	.	.	PUNCT	CLB	_	4	punct	_	GTtags=CLB

~~~


