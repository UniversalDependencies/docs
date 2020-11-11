---
layout: base
title:  'Statistics of compound:prt in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="fi_ood-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="fi_ood-dep-compound-nn.html">compound:nn</a></tt>.

16 nodes (0%) are attached to their parents as `compound:prt`.

15 instances of `compound:prt` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75.

The following 4 pairs of parts of speech are connected with `compound:prt`: <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (12; 75% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="fi_ood-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-ADP.html">ADP</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound:prt	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Ethän	ei	AUX	_	Mood=Imp|Number=Sing|Person=2|Polarity=Neg|VerbForm=Fin|Voice=Act	3	aux	_	note=check
3	halua	haluta	VERB	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	hyökätä	hyökätä	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	3	xcomp	_	_
5	kimppuuni	kimppuun	ADV	_	Number[psor]=Sing|Person[psor]=1	4	compound:prt	_	SpaceAfter=No
6	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound:prt	color:blue
1	Sääliksi	sääli	NOUN	_	Case=Tra|Number=Sing	2	compound:prt	_	_
2	käy	käydä	VERB	_	Mood=Ind|Number=Sing|Person=0|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 compound:prt	color:blue
1	Tymppiksen	Tymppis	PROPN	_	Case=Gen|Number=Sing	3	obl	_	_
2	kanssa	kanssa	ADP	_	AdpType=Post	1	case	_	_
3	puuhaillessa	puuhailla	VERB	_	Case=Ine|InfForm=2|Number=Sing|VerbForm=Inf|Voice=Act	4	advcl	_	_
4	oli	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	rohkeus	rohkeus	NOUN	_	Case=Nom|Derivation=Vs|Number=Sing	4	nsubj	_	_
6	totisesti	totisesti	ADV	_	Derivation=Sti	4	advmod	_	_
7	tarpeen	tarpeen	ADV	_	_	4	compound:prt	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


