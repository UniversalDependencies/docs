---
layout: base
title:  'Statistics of obj in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `obj`

This relation is universal.

282 nodes (4%) are attached to their parents as `obj`.

168 instances of `obj` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.08510638297872.

The following 10 pairs of parts of speech are connected with `obj`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (199; 71% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (59; 21% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (11; 4% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (6; 2% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
1	Ныв	ныв	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	_
2	ёртыслы	ёрт	NOUN	N	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	obl	_	_
3	гижис	гижны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
4	письмӧ	письмӧ	NOUN	N	Case=Nom|Number=Sing	3	obj	_	OrigLang=ru|SpaceAfter=No
5	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obj	color:blue
1	Найӧ	найӧ	PRON	Pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	_
2	дзик	дзик	ADV	Adv	_	4	advmod:deg	_	_
3	оз	оз	AUX	V	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres	4	aux:neg	_	_
4	тӧдны	тӧдны	VERB	V	Connegative=Yes	0	root	_	SpaceAfter=No
5	,	,	PUNCT	CLB	_	8	punct	_	_
6	коді	коді	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	8	nsubj	_	_
7	тайӧс	тайӧ	PRON	Pron	Case=Acc|Number=Sing|PronType=Dem	8	obj	_	_
8	гижис	гижны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	Сэсся	сэсся	ADV	Adv	_	2	advmod:tmod	_	_
2	тэчи	тэчны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,Err/Dial,Sg3
3	чукӧртӧмасӧ	чукӧртны	VERB	V	Clitic=So|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=2	2	obj	_	GTtags=TV,Ind,Prt2,Sg3,Clt/сӧ
4	ас	ас	PRON	Pron	PronType=Prs|Reflex=Yes	2	obl	_	GTtags=Det,Refl,Abs
5	гӧгӧр	гӧгӧр	ADP	Adp	AdpType=Post|Case=Nom|Number=Sing	4	case	_	GTtags=Po,Sg,Nom
6	да	да	CCONJ	CC	_	7	cc	_	_
7	заводиті	заводитны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	2	conj	_	GTtags=IV,Ind,Prt1,Err/Dial,Sg3
8	войсӧ	вой	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	obj	_	GTtags=Sg,Acc,PxSg3
9	виччысьны	виччысьны	VERB	V	Valency=2|VerbForm=Inf	7	xcomp	_	GTtags=TV,Inf|SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


