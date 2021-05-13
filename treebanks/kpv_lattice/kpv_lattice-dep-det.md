---
layout: base
title:  'Statistics of det in UD_Komi_Zyrian-Lattice'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-Lattice: Relations: `det`

This relation is universal.

139 nodes (2%) are attached to their parents as `det`.

132 instances of `det` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28057553956835.

The following 9 pairs of parts of speech are connected with `det`: <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (92; 66% instances), <tt><a href="kpv_lattice-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kpv_lattice-pos-DET.html">DET</a></tt> (29; 21% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (6; 4% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (4; 3% instances), <tt><a href="kpv_lattice-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="kpv_lattice-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_lattice-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="kpv_lattice-pos-ADP.html">ADP</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-ADV.html">ADV</a></tt>-<tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="kpv_lattice-pos-PRON.html">PRON</a></tt>-<tt><a href="kpv_lattice-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 det	color:blue
1	Игаузу	Игаузу	NOUN	N	Case=Nom|Number=Sing	7	nsubj	_	OrigLang=ru
2	-	-	PUNCT	PUNCT	_	7	punct	_	_
3	тайӧ	тайӧ	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	7	det	_	_
4	ыджыд	ыджыд	ADJ	A	Case=Nom|Number=Sing	7	amod	_	_
5	либӧ	либӧ	CCONJ	CC	_	6	cc	_	OrigLang=ru
6	ичӧт	ичӧт	ADJ	A	Case=Nom|Number=Sing	4	conj	_	_
7	канму	канму	NOUN	N	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
8	?	?	PUNCT	CLB	_	7	punct	_	_

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
4	оз	оз	AUX	V	Mood=Ind|Person=3|Polarity=Neg|Tense=Pres	3	aux:neg	_	_
5	вермы	вермыны	AUX	V	Connegative=Yes	3	aux:pot	_	SpaceAfter=No
6	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 det	color:blue
1	—	—	PUNCT	PUNCT	_	4	punct	_	_
2	Кутшӧм	кутшӧм	PRON	Pron	PronType=Rel	4	det	_	GTtags=Rel
3	ті	тэ	PRON	Pron	Case=Nom|Number=Plur|Person=2|PronType=Prs	4	nsubj:cop	_	GTtags=Pers,Pl2,Nom
4	кывзысьысьӧсь	кывзыны	VERB	V	Case=Ela|Derivation=NomAg|Number=Sing|Number[subj]=Plur	0	root	_	GTtags=TV,Der,Der/ысь,Der/NomAg,N,Sg,Ela,Cop,Pl
5	менам	ме	PRON	Pron	Case=Gen|Number=Sing|Person=1|PronType=Prs	4	obl	_	GTtags=Pers,Sg1,Gen|SpaceAfter=No
6	!	!	PUNCT	CLB	_	4	punct	_	_

~~~


