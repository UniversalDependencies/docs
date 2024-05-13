---
layout: base
title:  'Statistics of aux:pass in UD_Croatian-SET'
udver: '2'
---

## Treebank Statistics: UD_Croatian-SET: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="hr_set-dep-aux.html">aux</a></tt>.

1013 nodes (1%) are attached to their parents as `aux:pass`.

750 instances of `aux:pass` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.81046396841066.

The following 10 pairs of parts of speech are connected with `aux:pass`: <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (967; 95% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (26; 3% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (13; 1% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-DET.html">DET</a></tt>-<tt><a href="hr_set-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr_set-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hr_set-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux:pass	color:blue
1	Toliko	toliko	ADV	Rgp	Degree=Pos|PronType=Dem	3	det	_	_
2	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
3	radnika	radnik	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	4	obj	_	_
4	otpušteno	otpustiti	ADJ	Appnsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 aux:pass	color:blue
1	Crvenkovski	Crvenkovski	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	5	parataxis	_	SpaceAfter=No
2	:	:	PUNCT	Z	_	1	punct	_	_
3	Sporazumi	sporazum	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	5	nsubj:pass	_	_
4	se	sebe	PRON	Px--sa	Case=Acc|PronType=Prs|Reflex=Yes	5	expl:pv	_	_
5	zaključuju	zaključivati	VERB	Vmr3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	kako	kako	ADV	Cs	_	9	advmod	_	_
7	bi	biti	AUX	Vaa3p	Mood=Cnd|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	9	aux:pass	_	_
8	se	sebe	PRON	Px--sa	Case=Acc|PronType=Prs|Reflex=Yes	9	expl:pv	_	_
9	implementirali	implementirati	VERB	Vmp-pm	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	5	advcl	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 aux:pass	color:blue
1	"	"	PUNCT	Z	_	2	punct	_	SpaceAfter=No
2	Želite	željeti	VERB	Vmr2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
3	li	li	PART	Qq	_	7	mark	_	_
4	da	da	SCONJ	Cs	_	3	fixed	_	_
5	se	sebe	PRON	Px--sa	Case=Acc|PronType=Prs|Reflex=Yes	7	aux:pass	_	_
6	zakon	zakon	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	7	nsubj:pass	_	_
7	poštuje	poštovati	VERB	Vmr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
8	ili	ili	CCONJ	Cc	_	9	cc	_	_
9	ne	ne	PART	Qz	Polarity=Neg	2	conj	_	SpaceAfter=No
10	?	?	PUNCT	Z	_	2	punct	_	_

~~~


