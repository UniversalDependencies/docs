---
layout: base
title:  'Statistics of obl:lto in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `obl:lto`

This relation is a language-specific subtype of <tt><a href="kpv_lattice-dep-obl.html">obl</a></tt>.
There are also 7 other language-specific subtypes of `obl`: <tt><a href="kpv_lattice-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="kpv_lattice-dep-obl-cau.html">obl:cau</a></tt>, <tt><a href="kpv_lattice-dep-obl-lfrom.html">obl:lfrom</a></tt>, <tt><a href="kpv_lattice-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="kpv_lattice-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="kpv_lattice-dep-obl-mcl.html">obl:mcl</a></tt>, <tt><a href="kpv_lattice-dep-obl-tmod.html">obl:tmod</a></tt>.

7 nodes (0%) are attached to their parents as `obl:lto`.

4 instances of `obl:lto` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `obl:lto`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (5; 71% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (2; 29% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:lto	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 obl:lto	color:blue
1	Нылӧ	нылӧ	NOUN	N	Derivation=Voc	9	vocative	_	GTtags=Voc|SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	3	punct	_	_
3	нылӧ	нылӧ	NOUN	N	Derivation=Voc	1	conj	_	GTtags=Voc|SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	3	punct	_	_
5	тэ	тэ	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	9	nsubj	_	GTtags=Pers,Sg2,Nom
6	ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	obl:lto	_	GTtags=Pers,Sg1,Nom
7	вылӧ	вылӧ	ADP	Adp	AdpType=Post|Case=Ill|Number=Sing	6	case	_	GTtags=Po,Sg,Ill
8	Меліджыка	меліа	ADV	Adv	Degree=Cmp	9	advmod:mmod	_	GTtags=Comp,Der,Der/а
9	видзӧдлы	видзӧдлыны	VERB	V	Mood=Imp|Number=Sing|Person=2|Valency=2	0	root	_	GTtags=TV,Imprt,Sg2|SpaceAfter=No
10	!	!	PUNCT	PUNCT	_	9	punct	_	_

~~~


