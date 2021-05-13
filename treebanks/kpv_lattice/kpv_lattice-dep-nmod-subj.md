---
layout: base
title:  'Statistics of nmod:subj in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `nmod:subj`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-nmod.html">nmod</a></tt>.
There are also 6 other language-specific subtypes of `nmod`: <tt><a href="kpv_lattice-dep-nmod-appos.html">nmod:appos</a></tt>, <tt><a href="kpv_lattice-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="kpv_lattice-dep-nmod-lfrom.html">nmod:lfrom</a></tt>, <tt><a href="kpv_lattice-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="kpv_lattice-dep-nmod-obj.html">nmod:obj</a></tt>, <tt><a href="kpv_lattice-dep-nmod-poss.html">nmod:poss</a></tt>.

12 nodes (0%) are attached to their parents as `nmod:subj`.

12 instances of `nmod:subj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `nmod:subj`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (11; 92% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:subj	color:blue
1	Петрик	Петрик	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	2	nmod:subj	_	GTtags=Prop,Sem/Mal,Sg,Nom
2	ылысмӧм	ылысмыны	VERB	V	Case=Nom|Number=Sing|Valency=1|VerbForm=Vnoun	5	advcl:tcl	_	GTtags=IV,Der,Der/ӧм,Der/NomAct,N,Sg,Nom
3	мысти	мысти	ADP	Adp	AdpType=Post	2	case	_	GTtags=Po
4	Гриш	Гриш	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	5	nsubj	_	GTtags=Prop,Sem/Mal,Sg,Nom
5	лэччис	лэччыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	0	root	_	GTtags=IV,Ind,Prt1,Sg3
6	тшӧтш	тшӧтш	ADV	Adv	_	5	advmod:foc	_	_
7	пыж	пыж	NOUN	N	Case=Nom|Number=Sing	5	obl:lto	_	GTtags=Sg,Nom
8	дінӧ	дінӧ	ADP	Adp	AdpType=Post|Case=Ill|Number=Sing	7	case	_	GTtags=Po,Sg,Ill|SpaceAfter=No
9	...	...	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:subj	color:blue
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


