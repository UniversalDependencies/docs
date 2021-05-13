---
layout: base
title:  'Statistics of advcl:tcl in UD_Komi_Permyak-UH'
udver: '2'
---

## Treebank Statistics: UD_Komi_Permyak-UH: Relations: `advcl:tcl`

This relation is a language-specific subtype of <tt><a href="koi_uh-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="koi_uh-dep-advcl-lcl.html">advcl:lcl</a></tt>, <tt><a href="koi_uh-dep-advcl-mcl.html">advcl:mcl</a></tt>.

3 nodes (0%) are attached to their parents as `advcl:tcl`.

3 instances of `advcl:tcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.33333333333333.

The following 3 pairs of parts of speech are connected with `advcl:tcl`: <tt><a href="koi_uh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (1; 33% instances), <tt><a href="koi_uh-pos-ADV.html">ADV</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (1; 33% instances), <tt><a href="koi_uh-pos-VERB.html">VERB</a></tt>-<tt><a href="koi_uh-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 advcl:tcl	color:blue
1	Мортлӧ	морт	NOUN	N	Animacy=Anim|Case=Dat|Number=Sing	4	obl	_	GTtags=N,Sem/Ani,Sg,Dat
2	пыр	пыр	ADV	Adv	_	4	advmod:tmod	_	GTtags=Adv
3	овлӧ	овлыны	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	cop	_	GTtags=V,IV,Ind,Prs,Sg3
4	долыт	долыт	ADJ	A	_	0	root	_	GTtags=A|SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	GTtags=CLB
6	кӧр	кӧр	ADV	Adv	_	8	mark	_	GTtags=Adv
7	сія	сія	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	GTtags=Pron,Pers,Sg3,Nom
8	локтас	локны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut	4	advcl:tcl	_	GTtags=V,Ind,Fut,Sg3
9	сэтшӧм	сэтшӧм	ADJ	Adn	PronType=Dem	10	amod	_	GTtags=Adn,Dem
10	пельӧсокӧ	пельӧс	NOUN	N	Case=Ill|Derivation=Dimin|Number=Sing	8	obl:lmod	_	GTtags=N,Der/Ок,Der/Dimin,N,Sg,Ill|SpaceAfter=No
11	,	,	PUNCT	CLB	_	13	punct	_	GTtags=CLB
12	кӧда	кӧда	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	13	nsubj	_	GTtags=Pron,Rel,Sg,Nom
13	чужтӧ	чужтыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	10	acl:relcl	_	GTtags=V,TV,Ind,Prs,Sg3
14	памятяс	памятяс	NOUN	_	_	13	obl:lmod	_	_
15	приятнӧй	приятнӧй	ADJ	A	_	16	amod	_	GTtags=A
16	касьтылӧм	касьтылӧм	NOUN	N	Animacy=Inan|Case=Nom|Number=Sing	13	obj	_	GTtags=N,Sem/Inanim,Sg,Nom|SpaceAfter=No
17	.	.	PUNCT	CLB	_	4	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 advcl:tcl	color:blue
1	Талун	талун	ADV	Adv	_	10	advmod	_	GTtags=Adv|SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	GTtags=CLB
3	кӧр	кӧр	ADV	Adv	_	4	advmod	_	GTtags=Adv
4	пантасим	пантасьны	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Past	1	advcl:tcl	_	GTtags=V,IV,Ind,Prt1,Pl1
5	ю	ю	NOUN	N	Case=Nom|Number=Sing	4	obl	_	GTtags=N,Sg,Nom
6	дорас	дор	NOUN	N	Case=Ine|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	case	_	GTtags=N,Sg,Ine,PxSg3|SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	GTtags=CLB
8	сія	сія	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	GTtags=Pron,Pers,Sg3,Nom
9	медперво	медперво	ADV	Adv	_	10	advmod	_	GTtags=Adv
10	кыскис	кыскыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=V,Ind,Prt1,Sg3
11	бадь	бадь	NOUN	N	Animacy=Inan|Case=Nom|Number=Sing	12	nmod	_	GTtags=N,Sem/Inanim,Sg,Nom
12	кусттэз	куст	NOUN	N	Case=Nom|Number=Plur	13	nmod	_	GTtags=N,Pl,Nom
13	коласісь	колас	NOUN	N	Case=Ela|Number=Sing	10	obl	_	GTtags=N,Sg,Ela
14	ыджыт	ыджыт	ADJ	A	_	15	amod	_	GTtags=A
15	лагун	лагун	NOUN	N	Case=Nom|Number=Sing	10	obj	_	GTtags=N,Sg,Nom
16	и	и	CCONJ	CC	_	17	cc	_	GTtags=CC
17	нюжӧтіс	нюжӧтны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	10	conj	_	GTtags=V,IV,Ind,Prt1,Sg3
18	меным	ме	PRON	Pron	Case=Dat|Number=Sing|Person=1|PronType=Prs	17	obl	_	GTtags=Pron,Pers,Sg1,Dat|SpaceAfter=No
19	.	.	PUNCT	CLB	_	10	punct	_	GTtags=CLB

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 advcl:tcl	color:blue
1	А	а	CCONJ	CC	_	6	cc	_	_
2	сія	сія	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	GTtags=Pers,Sg3,Nom
3	эд	оз	VERB	V	Mood=Ind|Number=Plur|Person=2|Polarity=Neg|Tense=Past	2	discourse	_	GTtags=Neg,Ind,Prt1,Pl2
4	видзчисьны	видзчисьны	VERB	V	VerbForm=Inf	6	xcomp	_	GTtags=Inf
5	оз	оз	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	6	aux:neg	_	GTtags=Neg,Ind,Prs,Sg3
6	понды	пондыны	VERB	V	Connegative=Yes	0	root	_	GTtags=ConNeg|SpaceAfter=No
7	,	,	PUNCT	CLB	_	9	punct	_	_
8	кӧр	кӧр	ADV	Adv	_	9	mark	_	_
9	дугда	дугдыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres	6	advcl:tcl	_	GTtags=Ind,Prs,Sg1
10	боньгыныт	боньгыны	VERB	V	Person[psor]=2|VerbForm=Inf	9	xcomp	_	GTtags=Inf,Px2|SpaceAfter=No
11	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


