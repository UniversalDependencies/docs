---
layout: base
title:  'Statistics of advcl:tcl in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `advcl:tcl`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-advcl.html">advcl</a></tt>.
There are also 2 other language-specific subtypes of `advcl`: <tt><a href="kpv_lattice-dep-advcl-eval.html">advcl:eval</a></tt>, <tt><a href="kpv_lattice-dep-advcl-lto.html">advcl:lto</a></tt>.

29 nodes (0%) are attached to their parents as `advcl:tcl`.

24 instances of `advcl:tcl` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.55172413793103.

The following 3 pairs of parts of speech are connected with `advcl:tcl`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (27; 93% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advcl:tcl	color:blue
1	Гымалігад	гымавны	VERB	V	Case=Ill|Derivation=Ig|Number[psor]=Sing|Person[psor]=2|VerbForm=Conv	4	advcl:tcl	_	_
2	пу	пу	NOUN	N	Case=Nom|Number=Sing	4	obl:lmod	_	_
3	улын	улын	ADP	Po	Case=Ine|Number=Sing	2	case	_	_
4	сулавны	сулавны	VERB	V	VerbForm=Inf	0	root	_	_
5	оз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Pres	4	aux:neg	_	_
6	позь	позьны	AUX	V	Connegative=Yes	4	aux:pot	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advcl:tcl	color:blue
1	Аскинас	аскинас	ADV	Adv	AdvType=Tim	4	advcl:tcl	_	GTtags=Temp
2	рытъядорыс	рытъядор	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	1	nsubj:cop	_	GTtags=Der,Der/дор,Sg,Nom,PxSg3
3	Микитъяс	Микит	NOUN	N	Animacy=Hum|Case=Nom|Number=Plur	4	nsubj	_	GTtags=Prop,Sem/Mal,Pl,Nom
4	воисны	воны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=IV,Ind,Prt1,Pl3
5	Вӧръю	Вӧръю	NOUN	N	Case=Nom|Number=Sing	7	nmod	_	GTtags=Prop,Sem/Plc,EOLang/KOM,Sem/Plc,EOLang/KPV,Sg,Nom
6	вом	вом	NOUN	N	Case=Nom|Number=Sing	7	nmod	_	GTtags=Sg,Nom
7	дорӧ	дор	NOUN	N	Case=Ill|Number=Sing	4	obl	_	GTtags=Sg,Ill|SpaceAfter=No
8	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 advcl:tcl	color:blue
1	Свежов	Свежов	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	2	nmod:subj	_	GTtags=Prop,Sem/Sur-Mal,Sg,Nom
2	мунӧм	мунӧм	NOUN	N	Case=Nom|Number=Sing	6	advcl:tcl	_	GTtags=Sg,Nom
3	бӧрын	бӧрын	ADP	Adp	AdpType=Post|Case=Ine|Number=Sing	2	case	_	GTtags=Po,Sg,Ine
4	найӧ	сійӧ	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	GTtags=Pers,Pl3,Nom
5	юасянаӧн	юасяна	VERB	V	Case=Ins|Derivation=Ana|Number=Sing	6	advcl	_	GTtags=Der/Ana,Sg,Ins
6	видзӧдлісны	видзӧдлыны	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,Pl3
7	мӧда-мӧд	мӧда-мӧд	PRON	Pron	PronType=Rcp	6	obl:lto	_	GTtags=Recipr,Cmpl
8	вылас	вылӧ	ADP	Adp	AdpType=Post|Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	case	_	GTtags=Po,Sg,Ill,PxSg3|SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	10	punct	_	_
10	буракӧ	буракӧ	ADV	Adv	_	13	advmod:eval	_	GTtags=Parenthetic|SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	13	punct	_	_
12	эз	оз	AUX	V	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Past	13	aux:neg	_	GTtags=Neg,Ind,Prt1,Pl3
13	виччысьны	виччысьны	VERB	V	Connegative=Yes|Number=Plur|Person=3|Valency=2	6	conj	_	GTtags=TV,ConNeg,Pl3|SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	17	punct	_	_
15	мый	мый	SCONJ	CS	_	17	mark	_	_
16	песла	пес	NOUN	N	Case=Cns|Number=Sing	17	obl	_	GTtags=Sg,Cns
17	мунас	мунны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|Valency=1	13	ccomp	_	GTtags=IV,Ind,Fut,Sg3
18	налӧн	сійӧ	PRON	Pron	Case=Gen|Number=Plur|Person=3|PronType=Prs	19	nmod:poss	_	GTtags=Pers,Pl3,Gen
19	нарадтшикыс	нарадтшик	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	17	nsubj	_	GTtags=Sg,Nom,PxSg3|SpaceAfter=No
20	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


