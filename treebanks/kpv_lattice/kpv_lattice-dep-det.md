---
layout: base
title:  'Statistics of det in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `det`

This relation is universal.

128 nodes (2%) are attached to their parents as `det`.

121 instances of `det` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.265625.

The following 8 pairs of parts of speech are connected with `det`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (85; 66% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-DET.html">DET</a></tt> (29; 23% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (4; 3% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="kpv_lattice-pos-ADP.html">ADP</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 det	color:blue
1	Колхозъясын	колхоз	NOUN	N	Case=Ine|Number=Plur	3	obl:lmod	_	OrigLang=ru
2	ӧні	ӧні	ADV	Adv	_	3	advmod:tmod	_	_
3	мунӧ	мунны	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	тайӧ	тайӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	7	det	_	_
5	воӧм	воны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	_
6	озыр	озыр	ADJ	A	Case=Nom|Number=Sing	7	amod	_	_
7	урожайсӧ	урожай	NOUN	N	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nmod:obj	_	OrigLang=ru
8	идралӧм	идравны	VERB	V	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part	3	csubj	_	SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Татшӧм	татшӧм	DET	Det	Case=Nom|Number=Sing|PronType=Dem	2	det	_	_
2	настроениеяс	настроение	NOUN	N	Case=Nom|Number=Plur	3	nsubj	_	OrigLang=ru
3	лоны	лоны	VERB	V	VerbForm=Inf	0	root	_	_
4	оз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Pres	3	aux	_	_
5	вермы	вермыны	AUX	V	Connegative=Yes	3	aux:pot	_	SpaceAfter=No
6	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 det	color:blue
1	Но	но	CCONJ	CC	_	5	cc	_	_
2	унасӧ	уна	PRON	Pron	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obj	_	GTtags=Sg,Acc,PxSg3
3	нинӧм	нинӧм	PRON	Pron	Case=Nom|Number=Sing|Polarity=Neg	2	det	_	GTtags=Neg,Sg,Nom
4	тан	тан	ADV	Adv	_	5	advmod:lmod	_	_
5	висьтавныс	висьтавны	VERB	V	Number[psor]=Plur,Sing|Person[psor]=3|VerbForm=Inf	0	root	_	GTtags=TV,Inf,Px3|SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


