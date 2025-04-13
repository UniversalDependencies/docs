---
layout: base
title:  'Statistics of obj in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `obj`

This relation is universal.

287 nodes (4%) are attached to their parents as `obj`.

170 instances of `obj` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.06968641114983.

The following 10 pairs of parts of speech are connected with `obj`: <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (204; 71% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (59; 21% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt> (11; 4% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt> (6; 2% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obj	color:blue
1	Ковмас	ковмыны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut	0	root	_	_
2	кӧ	кӧ	SCONJ	CS	_	1	mark	_	SpaceAfter=No
3	,	,	PUNCT	CLB	_	5	punct	_	_
4	ог	оз	AUX	V	Mood=Ind|Person=1|Polarity=Neg|Tense=Pres	5	aux	_	_
5	жалит	жалитны	VERB	V	Connegative=Yes	1	advcl	_	OrigLang=ru
6	олӧмӧс	олӧм	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 obj	color:blue
1	Неылысса	неылысса	ADJ	A	Case=Nom|Number=Sing|Polarity=Neg	2	amod	_	_
2	сикт-грездын	сикт-грезд	NOUN	N	Case=Ine|Number=Sing	7	obl:lmod	_	_
3	сы	сійӧ	PRON	Pron	Case=Adp|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
4	йылысь	йылысь	ADP	Po	AdpType=Post|Case=Ela|Number=Sing	3	case	_	_
5	абу	абу	AUX	Pcle	Polarity=Neg	7	aux:neg	_	_
6	весиг	весиг	PART	Pcle	_	7	advmod	_	_
7	тӧдлӧмаӧсь	тӧдлыны	VERB	V	Evident=Nfh|Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	Сэсся	сэсся	ADV	Adv	_	2	advmod:tmod	_	_
2	тэчи	тэчны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=TV,Ind,Prt1,Err/Dial,Sg3
3	чукӧртӧмасӧ	чукӧртны	VERB	V	Clitic=So|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	2	obj	_	GTtags=TV,Ind,Prt2,Sg3,Clt/сӧ
4	ас	ас	PRON	Pron	PronType=Prs|Reflex=Yes	2	obl	_	GTtags=Det,Refl,Abs
5	гӧгӧр	гӧгӧр	ADP	Adp	AdpType=Post|Case=Nom|Number=Sing	4	case	_	GTtags=Po,Sg,Nom
6	да	да	CCONJ	CC	_	7	cc	_	_
7	заводиті	заводитны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	GTtags=IV,Ind,Prt1,Err/Dial,Sg3
8	войсӧ	вой	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	obj	_	GTtags=Sg,Acc,PxSg3
9	виччысьны	виччысьны	VERB	V	VerbForm=Inf	7	xcomp	_	GTtags=TV,Inf|SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


