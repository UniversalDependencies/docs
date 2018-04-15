---
layout: base
title:  'Statistics of aux:pass in UD_Croatian-SET'
udver: '2'
---

## Treebank Statistics: UD_Croatian-SET: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="hr_set-dep-aux.html">aux</a></tt>.

998 nodes (1%) are attached to their parents as `aux:pass`.

737 instances of `aux:pass` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.82264529058116.

The following 12 pairs of parts of speech are connected with `aux:pass`: <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (951; 95% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (25; 3% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (13; 1% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-DET.html">DET</a></tt>-<tt><a href="hr_set-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr_set-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hr_set-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Pejović	Pejović	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	kaže	kazati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	kako	kako	SCONJ	_	_	7	mark	_	_
4	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
5	romansa	romansa	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	7	nsubj:pass	_	_
6	bila	biti	AUX	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	7	aux:pass	_	_
7	osuđena	osuditi	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	2	ccomp	_	_
8	na	na	ADP	_	Case=Acc	9	case	_	_
9	propast	propast	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 aux:pass	color:blue
1	Crvenkovski	Crvenkovski	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	5	parataxis	_	SpaceAfter=No
2	:	:	PUNCT	_	_	1	punct	_	_
3	Sporazumi	sporazum	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	5	nsubj:pass	_	_
4	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	5	expl:pv	_	_
5	zaključuju	zaključivati	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	kako	kako	ADV	_	Degree=Pos|PronType=Int,Rel	9	advmod	_	_
7	bi	biti	AUX	_	Mood=Cnd|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	9	aux:pass	_	_
8	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	9	expl:pv	_	_
9	implementirali	implementirati	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	5	advcl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 aux:pass	color:blue
1	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Želite	željeti	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
3	li	li	PART	_	_	7	mark	_	_
4	da	da	SCONJ	_	_	3	fixed	_	_
5	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	7	aux:pass	_	_
6	zakon	zakon	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	nsubj:pass	_	_
7	poštuje	poštovati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
8	ili	ili	CCONJ	_	_	9	cc	_	_
9	ne	ne	PART	_	Polarity=Neg	2	conj	_	SpaceAfter=No
10	?	?	PUNCT	_	_	2	punct	_	_

~~~


