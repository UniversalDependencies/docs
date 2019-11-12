---
layout: base
title:  'Statistics of nsubj:pass in UD_Croatian-SET'
udver: '2'
---

## Treebank Statistics: UD_Croatian-SET: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="hr_set-dep-nsubj.html">nsubj</a></tt>.

1057 nodes (1%) are attached to their parents as `nsubj:pass`.

611 instances of `nsubj:pass` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.45127719962157.

The following 21 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt> (644; 61% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt> (270; 26% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-PROPN.html">PROPN</a></tt> (63; 6% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (13; 1% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (12; 1% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (8; 1% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (7; 1% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-NUM.html">NUM</a></tt> (6; 1% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-X.html">X</a></tt> (4; 0% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="hr_set-pos-AUX.html">AUX</a></tt>-<tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="hr_set-pos-AUX.html">AUX</a></tt>-<tt><a href="hr_set-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 nsubj:pass	color:blue
1	Zasad	zasad	ADV	Rgp	Degree=Pos	3	advmod	_	SpaceAfter=No
2	,	,	PUNCT	Z	_	1	punct	_	_
3	osiguran	osigurati	ADJ	Appmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
4	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
5	samo	samo	ADV	Rgp	Degree=Pos	6	advmod	_	_
6	putnički	putnički	ADJ	Agpmsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
7	promet	promet	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Novine	novine	NOUN	Ncfpn	Case=Nom|Gender=Fem|Number=Plur	3	nsubj:pass	_	_
2	se	sebe	PRON	Px--sa	Case=Acc|PronType=Prs|Reflex=Yes	3	expl:pv	_	_
3	tiskaju	tiskati	VERB	Vmr3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	u	u	ADP	Sl	Case=Loc	6	case	_	_
5	Braille	Braille	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	6	compound	_	_
6	azbuci	azbuka	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Feronikel	Feronikel	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	privatiziran	privatiziran	ADJ	Appmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
4	2007.	2007.	ADJ	Mdo	NumType=Ord	5	amod	_	_
5	godine	godina	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
6	.	.	PUNCT	Z	_	3	punct	_	_

~~~


